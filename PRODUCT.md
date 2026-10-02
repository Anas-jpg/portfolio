# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters evaluating Muhammad Anas for engineering roles and freelance clients evaluating him for development work. Both audiences were confirmed by the owner.

## Product Purpose

Present engineering work, professional experience, capabilities, and a reliable route to a hiring conversation or project inquiry.

## Positioning

Muhammad Anas's personal portfolio positions him as a Backend & AI engineer. Lead with production Python services, retrieval-augmented generation, agent workflows, and voice/data integrations. The owner requested this emphasis and supplied an updated résumé; do not add unverified outcomes.

## Operating Context

Visitors browse on desktop and mobile, inspect project notes and available repositories or demos, download the current résumé, and contact the owner through a form or direct links.

## Capabilities and Constraints

The owner requested implementation of PORTFOLIO_REVAMP_PLAN.md using Impeccable. The plan recommends Next.js, React, TypeScript, Tailwind, and shadcn/ui. Preserve the existing resume URL, direct contact routes, and EmailJS template field compatibility. Existing uncommitted environment changes must be preserved. Launch is a local rebuild; public deployment is not requested.

## Brand Commitments

Owner name: Muhammad Anas. The owner supplied two portrait-led template references and selected Portrait Studio, then explicitly requested implementation. The approved world uses warm ivory, pale sage, emerald linework, a grayscale owner portrait in an arch, and bold sans typography. Approved comp: .impeccable/mocks/decision/portrait/portrait-studio.png.

The owner rejected the initial five design explorations as too basic and requested greater aesthetic appeal and a clearer software-engineer identity. Technical visuals must support the engineering subject; avoid generic image grids, decorative terminal imitation, and unsupported project claims.

## Evidence on Hand

- `src/content/portfolio.ts`: current owner profile, five AI/backend/ML projects, capabilities, employment history, and writing links.
- Owner-supplied `Anas_resume_backend_ai_engineer.pdf`: current roles and dates, CoreMemories AI, Medial AI, Price Comparison Intelligence, Word-Level Sign Detection, and technical skills.
- `https://github.com/anas-triplek/eld-trip-planner`: ELD Trip Planner features, implementation stack, repository, and published demo link.
- `https://corememories.ai`: owner-requested first project and its public live destination.
- `https://github.com/anas-triplek`: owner-confirmed GitHub profile, overriding the older résumé link.
- `public/Muhammad_Anas_resume.pdf`: supplied current résumé, retaining the existing download URL. Previous PDF preserved at `.migration/resume-before-ai-update.pdf`.
- `src/components/site/contact-form.tsx`: contact routes and EmailJS integration; credentials stay in environment files.
- Original CRA content remains historical source evidence, not the current project selection.

## Product Principles

- Lead with real work and clearly distinguish source code, demos, and project notes.
- Keep recruiter and client journeys straightforward.
- Preserve factual content and label gaps instead of inventing outcomes.
- Make the portfolio usable on touch, keyboard, and reduced-motion settings.

## Open Decisions

Portrait Studio and the comp-led build are approved. Do not invent freelance availability, client testimonials, employer-project permissions, or numerical project results. Hosting remains Netlify unless changed by the owner; static-export deployment configuration will be prepared, with no public deployment in this request.
