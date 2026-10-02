# Portrait Studio portfolio

The owner selected Portrait Studio. The rebuilt portfolio uses Next.js App Router, React, TypeScript, Tailwind v4, a shadcn-style Button with Radix Slot/CVA, Radix Dialog for mobile navigation, and Lucide icons.

## Run locally

Use Node 22 or newer. Install with `npm install`, then run `npm run dev`. The development site runs at http://127.0.0.1:3000/.

Run `npm run build` for the static export in `out/`. Run `npm run preview` (or `npm start`) to serve that export at http://127.0.0.1:3001/. On PowerShell with script execution disabled, use `npm.cmd` instead of `npm`.

## Pages and content

- `/`: approved portrait composition, selected projects, background, capabilities, contact invitation.
- `/about/`: background, education, career history, capabilities.
- `/projects/`: five projects with AI engineering, Backend, and Machine learning filters and static detail routes.
- `/writing/`: the two owner-attributed external articles; unrelated template content removed.
- `/contact/`: inquiry form, email, WhatsApp, LinkedIn.
- Invalid routes: a recovery page linking home and projects.

Edit `src/content/portfolio.ts` to maintain the content and links. Keep career dates current. Active projects are CoreMemories AI, ELD Trip Planner, Medial AI, Price Comparison Intelligence, and Word-Level Sign Detection, in that order. Their covers are authored typography rather than application screenshots. External source/demo actions appear only when a verified destination exists. Existing CRA source remains available but is not imported by the new application.

The public profile is `https://github.com/anas-triplek`. The current résumé is the owner-supplied Backend & AI engineer PDF, served at `/Muhammad_Anas_resume.pdf`; the preceding PDF is preserved in `.migration/resume-before-ai-update.pdf`. See `AI_CONTENT_UPDATE.md` for source evidence and the content extension's verification.

## Contact configuration

The existing `.env` is preserved. New `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` names are supported. Existing `REACT_APP_EMAILJS_*` names remain compatible through `next.config.ts`. These are EmailJS browser identifiers, never private service credentials. Rebuild after changing them.

Template field names remain `user_name`, `user_email`, `subject`, and `message`. Configured delivery shows sending, success, and retry states. Without the three identifiers, the form prepares a draft in the visitor's email app. Direct email remains available in either case.

Automated form tests intercept EmailJS requests. No real message is sent by QA; live delivery and the external service's template settings require a manual check before launch.

## Validation

`npm run lint`, `npm run typecheck`, `npm run build`, and `npm test` are the project checks. The Playwright configuration uses locally installed Microsoft Edge; change its channel if validating on a machine without Edge. Tests cover WCAG A/AA checks at 1440px and 390px, horizontal overflow, project filters, mobile navigation and focus return, contact validation and mocked delivery, resume serving, and reduced motion.

Screenshots and Impeccable comparison reports live in `.impeccable/review/`. The hero's measured comparison passed at 90%; responsive desktop passed at 89%. The approved image is a design reference; headings, controls, and navigation are semantic HTML. Portrait artwork and paper texture are separate raster assets with prompt provenance. Moderustic is self-hosted with its OFL license in `public/fonts/`.

## Hosting

`netlify.toml` builds with npm and publishes `out`. The old CRA SPA catch-all was removed so every exported route and the 404 page resolve correctly. No public deployment has been performed. Old dependencies and lockfiles are preserved in ignored `.migration/`.
