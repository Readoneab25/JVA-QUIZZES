# CHM 101 — Lecture Note 1 | Practice Set 01

Standalone SanctumVault-branded quiz, hosted through GitHub Pages.

- URL: https://readoneab25.github.io/JVA-QUIZZES/chm101-lecture1-practice-set-01/
- 30 multiple-choice questions based on the user's five-page CHM 101 Lecture Note 1 PDF: 16 VSEPR and hybridisation, 8 crystalline solids, 6 bonding/intermolecular forces.
- 30-minute timer; no account/login; collect name and institution; mobile CBT navigator and subject filters.
- Answer key stored only in private Supabase `standalone_quiz_catalog` table, not in public question JavaScript.
- `public.submit_standalone_quiz` calculates results and returns score, percentage, and question-level review; stores anonymous attempt with `mode=tutor-immediate` and `status=released` in `public.quiz_results` for the admin dashboard.
- No row in `public.tutor_quizzes` or main site code changes.

Validation performed on 2026-11-01: anonymous role 0/30 transaction test, 30/30 and 1/30 server test; public `quiz_results` SELECT under anonymous RLS returned zero records; two internal test rows deleted. GitHub Pages deployment succeeded (run 41290367412). **Browser/mobile student test still required.**

Security limitation: standalone submission RPC is a narrowly scoped `SECURITY DEFINER` function callable by anonymous users, guarded by quiz allowlist, strict input validation, and basic rate limiting. Review anti-abuse measures before high-volume public use. This does not change authenticated tutor quiz flows.

Reusable template: `sanctumvault-standalone-template/`. For a second 30-question set, create a new ID, independent folder, and server answer key; avoid duplicating questions in this set.
