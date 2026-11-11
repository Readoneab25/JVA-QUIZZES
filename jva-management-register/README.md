# JVA Student Profile Registration (single-device edition)

This is a **static, offline-capable-after-loading** JAMB Vanguard Academy management registration page. There is **no server backend, database, authentication, analytics, API call, account, or network-based student data storage** in the page.

- Open: https://readoneab25.github.io/JVA-QUIZZES/jva-management-register/
- Enter a student's full name and choose a registration date.
- Select 1–4 subjects from a predefined list (Use of English selected initially).
- Generate a random profile reference such as `JVA-26-A1B2C3D4E5` (illustrative). Uses browser `crypto.getRandomValues`, and checks codes against the device's saved records.
- View locally saved history, search by name, code or subject, copy a code, print a registration slip, or delete an entry.
- **Export Backup** saves a JSON file containing all registrations; **Import Backup** merges them, detects conflicting codes, and restores old history.
- A duplicate entry (same name, date and subjects) requires explicit confirmation. A local save failure prevents issuing the new code.

### Data handling / critical limitations

- All student data is stored **only in this browser's localStorage for this exact site origin**. GitHub does not receive student names or registration details from this application.
- If browser site data is cleared, private browsing is used, or the management person switches browsers/phones, local history may be lost or not visible. Export backups regularly and protect them, as backups contain personal information.
- **A shared URL is not an access control mechanism.** Anyone with the link can open a blank copy of the generator; they will **not** automatically see the designated person's local records, but they could generate codes on a different device. Avoid treating codes as centrally verified identities. No server-side cross-device uniqueness is possible.
- The profile code is a private JVA reference **not an official JAMB registration code, PIN or admission number**.
- For reliable management-only access, central validation, or cross-device code uniqueness, a secure backend with authentication would be required later.
- Static one-file website: no npm install, no build workflow or bulky Actions artifacts required (GitHub Pages itself still uses a small deployment artifact).

This page does not modify existing quizzes, the main SanctumVault website, Supabase, or student quiz results.
