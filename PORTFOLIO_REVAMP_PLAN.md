# Portfolio revamp plan

Prepared for Muhammad Anas · 2 October 2026

Status: proposed redesign and implementation roadmap. The audience is confirmed as **both recruiters and freelance clients**. This document recommends a stack and direction; it does not implement the rebuild or commit to an approved visual identity.

## 1. Recommendation

**Build with Next.js App Router, React, TypeScript, Tailwind CSS v4, and shadcn/ui.** Pre-render the portfolio and project pages; keep client-side JavaScript limited to interactions that need it. Start with local typed content and a small set of UI components.

This suits the proposed portfolio because recruiters need fast access to your work and résumé, while clients need credible examples, a clear description of your capabilities, and a reliable inquiry path. Individual case-study pages also deserve their own URLs, metadata, and social previews. Next.js provides conventions for those needs. This is an architectural recommendation, not a claim that a framework alone improves rankings or fixes design. See the official [metadata documentation](https://nextjs.org/docs/app/getting-started/metadata-and-og-images).

**React + Vite + TypeScript + Tailwind + shadcn/ui is the simpler alternative** if you deliberately keep the portfolio to one page and continue linking externally for project detail. Vite does not automatically pre-render the content; add a deliberate rendering strategy if independent project pages and share previews become requirements. shadcn/ui officially supports [Vite installation](https://ui.shadcn.com/docs/installation/vite).

React is already in this repository. The upgrade is chiefly about replacing the aging tooling, rebuilding the information architecture, and establishing a coherent design system. Create React App is deprecated; the React team documents migration to frameworks or modern build tools in its [deprecation announcement](https://react.dev/blog/2025/02/14/sunsetting-create-react-app).

## 2. Review scope and Impeccable use

The baseline review examined `package.json`, `netlify.toml`, `public/index.html`, the main application, navigation, hero/career section, about, skills, projects, writing, contact, footer, content data, global Sass, and the 3D scene.

Impeccable 4.3.1 was found locally at:

`C:/Users/Anas/.codex/plugins/cache/openai-curated-remote/impeccable/4.3.1/skills/impeccable/`

Its core skill and planning references informed this plan: preserve product truth during a redesign; let portfolio artifacts lead; reduce cognitive load; make proof visible; distinguish page strategy from durable design rules; keep content available without animation. The proposed direction remains open for review. This is not a completed Impeccable `critique`, `audit`, or visual-world selection run.

The `context --target src/App.js` launcher was attempted but could not initialize its missing engine because its cache requires additional write access and a download. No deterministic Impeccable detector result is claimed. No existing `PRODUCT.md` or `DESIGN.md` was found at the project root.

Source findings below are distinguished from visual/performance risks. The current app compiled successfully and was inspected in the local browser at its default desktop viewport and a 390px mobile viewport. Desktop navigation wrapped into two rows, with the wordmark above the links/actions. On mobile, the hero's generic subtitle occupied three large lines, and the career timeline appeared before any project proof. At the project anchor, a card measured 350px wide inside a grid measuring about 331px; it exceeded the grid's right edge and consumed the intended gutter. The project heading rendered at 24px, reinforcing the inconsistent section-heading treatment. These are spot-check observations, not a complete cross-browser audit. Measured Lighthouse/Core Web Vitals results remain outstanding.

## 3. Current issues and their redesign consequences

| Priority | Evidence in this repository | Consequence | Planned replacement |
| --- | --- | --- | --- |
| P0 | `Nav.js` uses a clickable `div` for the mobile menu and toggles DOM classes | The trigger lacks native keyboard/button behavior and expanded-state semantics; the drawer has no explicit focus management | A labeled button and shadcn Sheet, with Escape, focus return, and close-on-navigation behavior |
| P0 | Global reset in `style.scss` applies `outline: none`; it has no general `:focus-visible` treatment | Keyboard users lose a dependable location indicator | Shared focus rings across links, buttons, inputs, and sheet controls |
| P0 | Contact inputs use placeholders without associated labels | Field purpose is harder to identify, especially after typing | Persistent labels, autocomplete hints, linked inline errors, and accessible submission status |
| P0 | Social links in navigation/footer contain only `aria-hidden` letter spans | These links lack a useful accessible name | Named GitHub/LinkedIn links with decorative icons |
| P0 | Both `Contact.js` and `Footer.js` declare `id="contact"` | Duplicate IDs make anchor navigation ambiguous | One contact section ID and a semantic `footer` |
| P1 | Project grid uses `minmax(350px, 1fr)` without a smaller mobile override; mobile container padding is 22px per side; browser spot check measured a 350px card in a roughly 331px grid | Cards exceed the available mobile grid width and consume the right gutter; hidden horizontal overflow can conceal clipping | One flexible mobile column, then two columns when content fits; measure at 320, 390, and intermediate widths |
| P1 | Several sections use `section-title`/`section-desc`, while Sass primarily styles `section_title`; matching hyphenated selectors were not found | Shared heading hierarchy is applied inconsistently | A single SectionHeading component and shared type/spacing tokens |
| P1 | Navigation has seven section links, social links, and two actions; it stays in desktop form until 768px; the desktop spot check showed a second row | The wordmark separates from the links/actions; tablet widths still need full breakpoint verification | Work, About, Contact; résumé as a utility link; switch to the drawer when content no longer fits |
| P1 | Hero and other CTAs nest `button` inside `a` | Nested interactive elements create avoidable semantics and interaction problems | A styled anchor, using the selected shadcn Button composition API where appropriate |
| P1 | All project links are labeled “Case Study,” but several point to GitHub and one to a live quiz | The label promises a story that the destination does not deliver | Separate “Read case study,” “Source code,” and “Live demo” links; show only destinations that exist |
| P1 | `NewsData.js` includes an agency-growth article pointing to `http://github.com/ratul-devr` | An unrelated template entry weakens trust | Remove this entry and verify ownership/relevance of every remaining article |
| P1 | Skill section has 18 broad technology-description entries | Readers must scan a large amount of generic copy to learn what you actually deliver | Three capability groups connected to real project evidence |
| P1 | Career history appears immediately after the hero, ahead of project evidence; project cards contain little explanatory copy | Visitors encounter chronology before seeing concrete work | Bring selected work forward, followed by experience and capabilities |
| P1 | CSS typing/blink/fade effects and smooth scrolling lack a stylesheet reduced-motion override; subtitle begins at `opacity: 0` | The existing reduced-motion check for 3D does not cover the rest of the interface | Visible initial content and a complete reduced-motion path for all motion |
| P1 | `Contact.js` edits button text imperatively and reports failure with `alert()` | Submission state is harder to manage consistently and failure recovery is disruptive | React state for idle/sending/success/error, with inline feedback and preserved fields on failure |
| P1 | `public/index.html` uses “Personal Portfolio” and a template description | Search/share identity is generic | Owner-specific title/description, route metadata, canonical URLs, and social preview images |
| P2 | Global translucent sections and backdrop blur sit over a fixed full-page WebGL scene | Readability and GPU cost depend on the scene/device; these are risks, not measured failures | Solid reading surfaces; optional bounded visual enhancement only after measuring performance |
| P2 | `Scene.js` chooses hero position from `window.innerWidth` during render without a resize subscription | Canvas composition can become stale after resizing | Remove full-page 3D initially; if retained, use responsive scene state and a static fallback |
| P2 | CRA, Sass, Motion, GSAP, and multiple Three-related packages coexist; npm and Yarn lockfiles both exist | Tooling and dependency ownership are unnecessarily complex for this scope | One package manager, one motion approach, and a minimal dependency set |

Existing strengths to preserve: real project repositories, professional experience, a portrait, an existing résumé PDF, direct contact options, and deferred loading of the 3D scene. Confirm that the résumé and “Present” employment dates are current; file timestamps and source copy alone cannot establish that.

## 4. Stack comparison

| Option | Fit | Main advantage | Main tradeoff | Decision |
| --- | --- | --- | --- | --- |
| Next.js + React + TypeScript | Homepage plus case studies and optional writing | Built-in page/routing and metadata conventions; pre-rendered content | More framework concepts and deployment choices | Recommended for the proposed multi-page portfolio |
| React + Vite + TypeScript | Compact one-page portfolio | Simple tooling; close to the current React model | Routing, prerendering, and route metadata need explicit decisions | Best simpler alternative |
| Astro + React islands | Mostly editorial/static portfolio | Selective hydration of interactive React components | Adds Astro conventions alongside React; integration choices require care | Strong option if minimal browser JS outweighs an all-React authoring preference |
| Plain HTML/CSS with small JS | Very small, rarely updated portfolio | Few dependencies and predictable output | Less reusable React component structure | Valid, but less aligned with your requested stack |
| Existing CRA + Sass | Short-term maintenance | Lowest immediate migration effort | Keeps deprecated tooling and existing architectural problems | Do not use for the complete rebuild |

Astro's official [React integration](https://docs.astro.build/en/guides/integrations-guide/react/) supports rendering and selectively hydrating React components. It is worth considering for a content-focused site, but the recommended path here stays within React throughout.

### Recommended dependency policy

| Layer | Choice | Purpose |
| --- | --- | --- |
| Framework | Current stable, compatible Next.js and React | Pre-render pages and provide routing |
| Language | TypeScript in strict mode | Type content, props, and form state |
| Styling | Tailwind CSS v4 with semantic CSS variables | Consistent responsive styling and tokens |
| UI primitives | shadcn/ui | Button, Sheet, Input, Textarea, Label, and selected feedback components |
| Icons | One icon set, preferably Lucide | Consistent stroke and accessible labels |
| Content | Typed local data; MDX only when long-form content benefits | Keep maintenance simple |
| Animation | CSS first; Motion only for a specific interaction | Avoid redundant animation engines |
| Form | Native constraints plus React state initially | Clear validation and submission behavior |
| Delivery | Retain EmailJS initially if configuration is valid | Avoid a backend migration solely for the redesign |
| Quality | ESLint, TypeScript, Playwright for critical journeys, axe, Lighthouse | Verify behavior, accessibility, and performance |

shadcn/ui supplies editable component code, not the portfolio's visual identity. Use it for interaction foundations; author the project presentation, typography, composition, and storytelling around your actual work. Its [Tailwind v4 guidance](https://ui.shadcn.com/docs/tailwind-v4) covers the compatible React/Tailwind setup.

Tailwind v4 targets modern browsers and should be used as the styling pipeline rather than layered underneath the old Sass system. Check your browser-support needs against its [compatibility guidance](https://tailwindcss.com/docs/compatibility). At implementation time, choose a supported Node LTS that meets the selected framework's engine requirements, and commit one lockfile. Do not retain the current Netlify Node 18 pin without reviewing compatibility.

## 5. Product and content strategy

### Audience journeys

- **Recruiter:** understand your role → inspect one relevant project → scan experience → download résumé → contact you.
- **Client:** identify a matching capability → see a completed solution and your contribution → understand how an engagement starts → submit an inquiry.

Both journeys share the same proof. Avoid two competing homepages or a mode switch that forces visitors to classify themselves before seeing the work.

Suggested positioning, subject to your factual review: **“Full-stack engineer building web applications and AI integrations.”** Existing experience mentions backend work, RAG, communications APIs, and LLM integration. Confirm what can be shown publicly before presenting employer work as a portfolio case study. Do not invent customer names, performance improvements, testimonials, or project outcomes.

### Proposed sitemap

| Route | Purpose | Initial content |
| --- | --- | --- |
| `/` | Introduce your work and make the next action obvious | Hero, three featured projects, experience, capabilities, short about, contact |
| `/projects/[slug]` | Provide evidence beyond a thumbnail | Two or three complete case studies at launch |
| `/projects` | Optional archive | Add only if the homepage cannot comfortably hold the remaining work |
| `/writing` | Optional original technical writing | Add only when enough relevant authored material exists; otherwise use a small external-link list |
| Résumé PDF | Recruiter utility | Preserve the current public URL or redirect it explicitly |
| Not-found page | Recover from invalid routes | Link to home and selected work |

Homepage anchors should use clear, unique IDs such as `work`, `experience`, `about`, and `contact`. Inventory the current anchors (`service`, `project`, `blog`, `achievements`) before changing them; retain aliases for useful incoming fragment links where practical, since URL fragments never reach server redirect rules.

### Homepage sequence

1. **Navigation:** name/wordmark, Work, About, Contact, résumé utility.
2. **Hero:** your name and specific role; “View selected work” as primary action, “Discuss a project” as secondary; résumé easy to find. Show one real project artifact in the first viewport where space permits.
3. **Selected work:** three strong examples chosen by depth and relevance. ScreenSizzle and Social Blogging are candidates, not automatically the final ranking. A professional AI integration can replace an academic project only when public evidence and permission exist.
4. **Experience:** concise role/company/date rows, with two or three contribution bullets each. Keep the longer narrative for the résumé or project pages.
5. **Capabilities:** Web applications; backend/API systems; AI and communications integrations. Tie each to evidence rather than defining the technologies.
6. **About:** portrait, concise education/background, how you approach a project, and meaningful interests if supplied.
7. **Writing/achievements:** compact and optional; include only relevant, verified items.
8. **Contact:** one reliable inquiry form plus email/LinkedIn; WhatsApp may remain an optional route. Let people indicate hiring or project work without requiring it.
9. **Footer:** named social links, résumé, copyright, and a quiet return-to-top affordance if useful.

### Case-study template

Each project needs: title; one-sentence problem; your role; context and date; a real screenshot; constraints; key implementation decisions; stack; challenges; outcome supported by evidence; what you would improve; and separate demo/source links when available.

For academic or personal work, state that context honestly. For confidential work, use an approved anonymized account of your contribution, not fabricated screenshots or metrics. Until a case study exists, label the available destination “Source code” or “Live demo.”

## 6. Proposed design direction

**Working recommendation: an editorial project showcase with the clarity of an engineering notebook.** This is a proposal for the future design round, not a selected Impeccable visual-world contract.

Let screenshots, system diagrams, and implementation stories carry the identity. Use restrained chrome, a strong type hierarchy, generous reading space, and a compact project index. A featured project can use a broad image-and-caption composition; secondary work can use quieter rows. Avoid repeating the same large card for every kind of content.

The distinguishing detail should be a small “Build notes” treatment on project stories: your role, one technical decision, and a relevant artifact. If it expands, make it an accessible disclosure with the important summary already visible. An AI project could show an actual approved retrieval pipeline diagram rather than decorative AI imagery.

### Design-system starting points

- Define semantic tokens for background, surface, foreground, muted text, accent, border, focus, success, and error. Choose exact colors during visual review, then measure contrast.
- Evaluate a warm light editorial palette and a quiet dark equivalent. Ship one polished theme first unless a second theme earns its maintenance cost.
- Explore a distinctive heading face with a readable body face; reserve monospace for short technical annotations. Check font loading and licensing before selection.
- Use a shared spacing scale and fluid heading sizes. Suggested body text: 16–18px; long-form line length: roughly 60–75 characters.
- Use one content container around 1120–1200px maximum, with flexible mobile gutters. These are starting ranges, not rigid viewport requirements.
- Keep radii and shadows restrained; use typography, image scale, and spacing for hierarchy.
- Keep project text readable on solid surfaces. Avoid placing all descriptions over busy screenshots.
- Make hover behavior an enhancement; every essential action remains discoverable on touch and keyboard.
- Limit motion to purposeful feedback and one signature transition. No typing delay, scroll hijacking, or mandatory full-page canvas at launch.

## 7. Architecture and migration design

Suggested structure for the recommended Next.js rebuild:

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    not-found.tsx
    projects/[slug]/page.tsx
    sitemap.ts
    robots.ts
  components/
    ui/                    # only the shadcn primitives actually used
    layout/                # SiteHeader, MobileNav, SiteFooter
    sections/              # Hero, SelectedWork, Experience, Contact
    projects/              # ProjectPreview, ProjectStory, BuildNotes
  content/
    profile.ts
    projects.ts
    experience.ts
    writing.ts
  lib/
    utils.ts
    contact.ts
public/
  projects/
  Muhammad_Anas_resume.pdf
```

Keep project content out of presentation components. A typed project record should include slug, title, summary, context, role, screenshot/alt text, technologies, featured order, optional source/demo URLs, and case-study sections. Distinguish missing links from empty placeholder strings. Centralize profile links and contact information.

Render static sections on the server/build path. Use client components for the mobile sheet, interactive disclosures, theme controls if included, and contact state. Do not turn the entire layout into a client component for one animation.

### Contact implementation

Retain the current EmailJS integration first, provided its service/template configuration and allowed origins are verified. In Next.js, intentionally public client variables use `NEXT_PUBLIC_` naming; in Vite they use `VITE_`. Public identifiers are not a place for private credentials. Preserve the current field names if the existing email template relies on them.

Required states: idle, invalid fields, sending, success, failure, and retry. Prevent duplicate submissions, announce status, retain entered content on failure, reset only on success, and provide a direct email fallback. Choose spam controls supported by the delivery service. A future server endpoint is optional if stronger delivery controls become necessary; it is not part of a static-export-only application.

### Deployment decision

Use the existing Netlify setup as the first hosting candidate; compare its current Next.js integration against the selected features before migration. There is no reason to change hosting solely for Tailwind or shadcn/ui.

Two valid deployment modes:

- **Framework deployment:** use the host's supported Next.js integration when you need runtime server functionality. Replace the CRA-specific build configuration and do not carry over the SPA catch-all blindly.
- **Static export:** suitable for fixed portfolio pages plus an external form service. Generate every project slug at build time and publish the export directory. Account for image handling and the unavailable runtime features described in the official [static-export guide](https://nextjs.org/docs/app/guides/static-exports).

For the Vite alternative, output changes from `build` to `dist`; choose routing/fallback rules according to whether you use anchors, client routes, or prerendered pages. In either stack, review the existing immutable caching of root-level JPG/PNG files: only use long immutable caching for versioned assets, otherwise replacing a screenshot at the same URL can leave stale images in browsers.

## 8. Implementation roadmap

Estimates assume one developer and timely access to finished project content. Allow approximately **9–14 working days**, plus any time needed to obtain assets, confirm facts, or resolve hosting compatibility. These are planning ranges, not commitments.

| Phase | Work | Deliverable and exit criterion | Estimate |
| --- | --- | --- | --- |
| 1. Baseline and content | Capture current desktop/mobile UI; record performance; verify links, résumé, dates, authorship, and project evidence | Evidence inventory and prioritized issue list; featured projects chosen | 1–2 days |
| 2. Design brief | Record audience and confirmed facts in PRODUCT.md; compare visual directions using Impeccable; wireframe homepage and project story | A reviewed direction and mobile/desktop structure, with open facts listed | 1–2 days |
| 3. Foundation | Scaffold chosen stack, strict TypeScript, Tailwind, minimal shadcn primitives, tokens, font loading, layout | Working responsive shell with accessible navigation; production build succeeds | 1 day |
| 4. Main portfolio | Build hero, selected work, experience, capabilities, about, and footer from typed content | Complete page at mobile and desktop widths; all retained facts traceable | 2–3 days |
| 5. Case studies and inquiry | Build two or three stories; preserve résumé route; implement form states and route metadata | Both audience journeys work; destinations and form behavior verified | 2–3 days |
| 6. Quality and migration | Keyboard/axe checks, screenshots, performance pass, production preview, routing/caching checks | Release checklist passes; preview reviewed; rollback identified | 2–3 days |

Perform the rebuild on a `codex/portfolio-revamp` branch or an isolated checkout at implementation time. Keep the current site available until the replacement passes its checks. Preserve the existing uncommitted `.env` change; do not include its contents in the plan, commits, or screenshots. Prefer one clean replacement styling system over loading the old Sass globally alongside Tailwind.

## 9. Impeccable workflow for the build

1. Initialize the engine through the approved setup path when implementation begins; rerun context in that session and preserve existing product/design records if added later.
2. Record the confirmed dual audience, existing assets, contact functionality, and open factual questions in `PRODUCT.md`.
3. Use `shape` for the homepage and case-study UX. Review visual concepts before selecting the durable identity; the suggestions in this document are inputs, not approvals.
4. Once selected, document the actual tokens and reusable rules in `DESIGN.md` and Impeccable's corresponding design data.
5. Use scoped `adapt`, `clarify`, and `harden` passes for mobile layout, project labels, and contact edge cases.
6. Use `audit` for technical checks and `critique` for design review once there is a working render, following their applicable execution requirements.
7. Batch desktop/mobile screenshots, fix material issues together, and confirm in one further inspection round. Run final polish only after functionality and content are complete.

No live-mode injection, UI changes, engine installation, full audit certification, or visual-direction approval is implied by this planning task.

## 10. Release acceptance criteria

### Content and conversion

- [ ] A visitor can identify your role and find selected work within the first viewport or immediately below it on mobile.
- [ ] Recruiters can reach experience, résumé, and contact without searching the page.
- [ ] Clients can find relevant work and begin an inquiry through a clearly labeled action.
- [ ] At least two substantive case studies are complete; any third featured project has a truthful, useful destination.
- [ ] Every article, repository, demo, résumé, employment date, and contact route is checked.
- [ ] No template entries, empty links, invented outcomes, or unsupported availability claims remain.

### Responsive and accessibility

- [ ] Verify 320, 390, 768, 1024, and 1440px widths, plus intermediate widths where navigation/grid behavior changes.
- [ ] No clipped project columns or masked overflow; long project titles, email addresses, and navigation labels wrap safely.
- [ ] Verify 200% zoom and reflow at narrow widths; layout follows content instead of fixed heights.
- [ ] Menu works with Tab/Enter/Space/Escape, closes on selection, and returns focus appropriately.
- [ ] Focus is visible; links are named; IDs are unique; heading hierarchy and landmarks are meaningful.
- [ ] Contrast meets WCAG AA: 4.5:1 for normal text and 3:1 for large text; required control/focus indicators are checked separately.
- [ ] Fields have visible labels and linked errors; sending/success/failure status is announced.
- [ ] Reduced motion retains visible content and usable navigation; touch targets aim for at least 44px.
- [ ] axe reports no serious/critical findings; manual keyboard checks accompany automation.

### Performance and engineering

- [ ] Strict TypeScript, lint, and production build pass without bypass flags such as `CI=false` hiding relevant failures.
- [ ] Test the navigation, résumé download, case-study destinations, invalid fields, successful inquiry, failure/retry, and duplicate-submit prevention.
- [ ] Automated form checks use mocked delivery; a controlled live delivery check is performed only with an authorized test recipient.
- [ ] Production preview screenshots match the reviewed design at desktop and mobile widths.
- [ ] Target mobile Lighthouse performance at least 90 under documented test conditions; investigate regressions rather than treating the score as a guarantee.
- [ ] Aim for LCP ≤2.5s, INP ≤200ms, and CLS ≤0.1. Lab checks guide prelaunch work; field results require real traffic and should be evaluated at the 75th percentile.
- [ ] Prioritize the hero artifact, reserve image dimensions, compress screenshots, and defer below-fold media. Measure browser JS; optional 3D does not block critical content.
- [ ] Every project route loads directly on refresh, has an appropriate title/social preview, and handles missing slugs correctly.
- [ ] Sitemap, robots rules, canonical URLs, and production indexing behavior are checked against the real domain.
- [ ] Preview-to-production rollout has a known previous deployment to restore if routing or delivery breaks.

## 11. Scope boundaries and remaining decisions

**Launch scope:** responsive homepage, accessible navigation, two or three case studies, compact experience/capabilities/about, functional inquiry, résumé access, metadata, and verified deployment.

**Defer:** full-page WebGL, a chatbot, CMS, admin dashboard, authentication, skill-percentage meters, and elaborate scroll effects. Add a blog route, second theme, CMS, or bounded 3D feature only when real content or visitor needs justify them.

Before implementation, confirm: the strongest featured projects; public permissions for employer work; current job dates and résumé; whether freelance availability should be stated; final positioning; visual direction; canonical domain; and framework-versus-static deployment. The audience and request for a React/Tailwind/shadcn recommendation are already settled.

The central design goal is to make your engineering work easy to understand and credible enough to prompt a hiring conversation or a project inquiry. A modern stack supports that goal; the project's evidence, hierarchy, and interaction quality determine whether it succeeds.
