-- Isolated anonymous standalone quiz backend. Never alter existing tutor RPCs.
CREATE TABLE IF NOT EXISTS public.standalone_quiz_catalog (
 quiz_id text PRIMARY KEY,
 title text NOT NULL,
 questions jsonb NOT NULL CHECK (jsonb_typeof(questions)='array' AND jsonb_array_length(questions) BETWEEN 1 AND 200),
 duration_minutes integer NOT NULL CHECK (duration_minutes BETWEEN 1 AND 240),
 enabled boolean NOT NULL DEFAULT false,
 created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.standalone_quiz_catalog ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.standalone_quiz_catalog FROM anon, authenticated, PUBLIC;

CREATE TABLE IF NOT EXISTS public.standalone_quiz_throttle (
 quiz_id text NOT NULL,
 subject_key text NOT NULL,
 window_start timestamptz NOT NULL DEFAULT now(),
 attempts integer NOT NULL DEFAULT 1,
 PRIMARY KEY (quiz_id,subject_key)
);
ALTER TABLE public.standalone_quiz_throttle ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.standalone_quiz_throttle FROM anon, authenticated, PUBLIC;

CREATE OR REPLACE FUNCTION public.submit_standalone_quiz(
 p_quiz_id text, p_student_name text, p_institution text, p_answers jsonb
) RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $body$
DECLARE
 v_quiz public.standalone_quiz_catalog%ROWTYPE;
 v_name text := trim(coalesce(p_student_name,''));
 v_institution text := trim(coalesce(p_institution,''));
 v_id text := trim(coalesce(p_quiz_id,''));
 v_total integer;
 v_i integer;
 v_choice jsonb;
 v_index integer;
 v_correct integer;
 v_q jsonb;
 v_score integer := 0;
 v_percent numeric;
 v_answers jsonb := '[]'::jsonb;
 v_review jsonb := '[]'::jsonb;
 v_attempt public.quiz_results%ROWTYPE;
 v_attempts integer;
 v_key text;
BEGIN
 IF length(v_id) NOT BETWEEN 3 AND 100 OR length(v_name) NOT BETWEEN 2 AND 120 OR length(v_institution) NOT BETWEEN 2 AND 120 THEN
   RAISE EXCEPTION 'Invalid quiz or student details';
 END IF;
 IF p_answers IS NULL OR jsonb_typeof(p_answers) <> 'array' OR pg_column_size(p_answers)>32768 THEN
   RAISE EXCEPTION 'Invalid answer data';
 END IF;
 SELECT * INTO v_quiz FROM public.standalone_quiz_catalog WHERE quiz_id=v_id AND enabled=true;
 IF NOT FOUND THEN RAISE EXCEPTION 'Quiz is not open for submissions'; END IF;
 v_total := jsonb_array_length(v_quiz.questions);
 IF jsonb_array_length(p_answers) <> v_total THEN RAISE EXCEPTION 'Incorrect number of answers'; END IF;

 -- Validate every submitted choice before rate limiting or inserting any records.
 FOR v_i IN 0..v_total-1 LOOP
   v_choice:=p_answers->v_i;
   IF jsonb_typeof(v_choice) <> 'object' OR
      NOT (v_choice ? 'selectedIndex') THEN
      RAISE EXCEPTION 'Invalid answer at question %', v_i+1;
   END IF;
   IF v_choice->'selectedIndex' <> 'null'::jsonb THEN
     IF jsonb_typeof(v_choice->'selectedIndex') <> 'number' OR
        (v_choice->>'selectedIndex') !~ '^[0-3]$' THEN
       RAISE EXCEPTION 'Invalid choice at question %',v_i+1;
     END IF;
   END IF;
 END LOOP;

 -- Rate limiting is a basic abuse guard, not a substitute for bot protection.
 -- Global cap prevents unlimited anonymous writes; per-name cap limits accidental resubmissions.
 FOREACH v_key IN ARRAY ARRAY['*all*',lower(v_name)||':'||lower(v_institution)] LOOP
   INSERT INTO public.standalone_quiz_throttle(quiz_id,subject_key,window_start,attempts)
     VALUES(v_id,v_key,now(),1)
     ON CONFLICT (quiz_id,subject_key) DO UPDATE SET
       attempts=CASE WHEN public.standalone_quiz_throttle.window_start < now()-interval '10 minutes'
                     THEN 1 ELSE public.standalone_quiz_throttle.attempts+1 END,
       window_start=CASE WHEN public.standalone_quiz_throttle.window_start < now()-interval '10 minutes'
                         THEN now() ELSE public.standalone_quiz_throttle.window_start END
     RETURNING attempts INTO v_attempts;
   IF (v_key='*all*' AND v_attempts>200) OR (v_key<>'*all*' AND v_attempts>4) THEN
      RAISE EXCEPTION 'Submission limit reached. Please try again later';
   END IF;
 END LOOP;

 FOR v_i IN 0..v_total-1 LOOP
   v_q := v_quiz.questions->v_i;
   v_correct:=(v_q->>'a')::integer;
   IF v_correct NOT BETWEEN 0 AND 3 THEN RAISE EXCEPTION 'Invalid server answer key'; END IF;
   v_index:=NULL;
   IF p_answers->v_i->'selectedIndex'<>'null'::jsonb THEN
     v_index:=(p_answers->v_i->>'selectedIndex')::integer;
   END IF;
   IF v_index=v_correct THEN v_score:=v_score+1; END IF;
   v_answers:=v_answers||jsonb_build_array(jsonb_build_object(
       'questionNumber',v_i+1,'subject',coalesce(v_q->>'subject','General'),
       'question',v_q->>'q','selectedIndex',v_index,
       'selectedAnswer',CASE WHEN v_index IS NULL THEN 'No answer' ELSE v_q->'c'->>v_index END,
       'correctAnswer',v_q->'c'->>v_correct,
       'result',CASE WHEN v_index=v_correct THEN 'Correct' ELSE 'Incorrect' END
   ));
   v_review:=v_review||jsonb_build_array(jsonb_build_object(
      'questionNumber',v_i+1,'correctIndex',v_correct,'isCorrect',v_index=v_correct
   ));
 END LOOP;
 v_percent:=round(v_score::numeric/v_total*100,2);
 INSERT INTO public.quiz_results(
  quiz_id,quiz_name,student_name,institution,score,total_questions,
  percentage,answers,user_id,mode,status,released_at
 ) VALUES (
  v_id,v_quiz.title,v_name,v_institution,v_score,v_total,
  v_percent,v_answers,NULL,'tutor-immediate','released',now()
 ) RETURNING * INTO v_attempt;
 RETURN jsonb_build_object(
   'quiz_id',v_id,'attempt_id',v_attempt.id,'result_token',v_attempt.result_token,
   'score',v_score,'total_questions',v_total,'percentage',v_percent,
   'review',v_review
 );
END;
$body$;
REVOKE ALL ON FUNCTION public.submit_standalone_quiz(text,text,text,jsonb) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.submit_standalone_quiz(text,text,text,jsonb) TO anon, authenticated;
