# SanctumVault standalone quiz template (NOT LIVE)

This is a reusable unbranded-by-tutor quiz template, developed on a feature branch. It must not be promoted to GitHub Pages until the anonymous submission backend is reviewed and tested.

## Requirements
- No sign-up, student name and institution entered before exam.
- Immediately show **server-verified** score, percentage, and answer review after successful submission.
- Persist attempts in the existing SanctumVault admin results dashboard, but **do not add a row to public.tutor_quizzes**.
- Responsive CBT question navigator, compact 3-row scroll on phones, answer/skip/current statuses and subject filters.
- Countdown and auto-submit, previous/next, confirmation for unanswered questions.

## To publish a new quiz
1. Copy this directory to a new unique slug in JVA-QUIZZES.
2. Set quiz ID/title/time in quiz-config.js, and insert real validated questions in quiz-questions.js.
3. Implement an **isolated anonymous quiz submission RPC or Edge Function**, with server-side answer key, per-quiz allowlist, strict input limits, rate limiting and abuse protection. Never trust client score/percentage or client correct-answer text. Never expose private answers or other student records via anon SELECT. The existing submit_quiz_result RPC requires auth and cannot be reused as-is.
4. Ensure the endpoint returns an attempt-scoped receipt and **server-calculated score plus review data**; allow only this receipt to read this attempt. Prefer a short-lived, non-guessable result token; do not expose all attempts.
5. Register the quiz and server answer key. Verify correct result appears in existing admin dashboard; ensure it is NOT listed on the main public website.
6. Test mobile, desktop, timer, navigator, zero answers, duplicate submissions, anonymous abuse, review accuracy, and that no account is required.
7. Only after all tests set ready=true, submissionEndpoint to the approved endpoint and merge the branch.

**Current state:** frontend scaffold only; submission deliberately disabled until secure backend is ready. No production database modifications.
