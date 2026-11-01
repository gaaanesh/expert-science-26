# Student story redesign

## Audit and retained foundations
The previous homepage uses an abstract science hero and repeated panel layouts. Its enquiry flow, native radio controls, untimed quiz, course data and metadata remain useful. Retain Next.js 15 / React 19 / TypeScript / Tailwind 4, static export, existing routes and the development branch. No dependency additions or production deployment.

## Design specification and wireframe
Warm paper #F7F5EF, navy #18283D, blue #2563EB, orange #F59E42 and soft green #DDEDE3. Existing Open Sans body and Roboto Slab headings preserve typography continuity. Editorial headings scale from 38–72px; body 16–18px, readable line lengths. Spacing uses 8px steps with 64–112px chapter separation. Breakpoints: 700px and 1000px; inspect 360,390,768,1024,1440 widths.

1. Beginning: academy/course/location identity, audience switch, large headline and supplied student portrait. Direct demo and approach links.
2. Breakthrough: classroom scene with visible AI illustration caption, then a working pendulum with length slider, computed period, pause/play and reset.
3. Practice: five-step learning timeline beside an untimed question experience. Feedback explains errors; progress is not an outcome promise.
4. Parent visibility: split student learning / parent questions. A practical conversation checklist, explicitly unconfirmed batch arrangements, no fabricated dashboard metrics.
5. Possibilities: same student in a smaller portrait composition beside a career explorer; subjects, academic routes and relevant preparation.
6. Begin: courses, centre contacts and demo request. CTA opens a reviewed WhatsApp request; no automatic booking claim.

## Asset and motion strategy
Use the supplied canonical character unchanged, repeating compositions rather than generating inconsistent faces. Optimize original images to responsive WebP variants. The classroom is visibly labelled AI-generated, not a documentary academy photograph. Character is fictional, not a testimonial. Images have explicit dimensions and meaningful alt text. Hero loads eagerly; subsequent scenes lazy-load.
Progressive CSS scroll reveal enhances supported browsers; unsupported browsers show everything. No scroll hijacking or layout animation. Pendulum uses CSS transform rotation with physically computed small-angle period, user-initiated playback, Intersection Observer offscreen pause and reduced-motion override. Formula and text remain available without motion.

## File plan
Update page.tsx, journey.css and JourneyInteractions.tsx. Add Story/StudentCharacter.tsx, Story/ScienceExperiment.tsx, Story/LearningJourney.tsx, Story/ParentProgress.tsx, story.css and optimized public/images/story assets. Retain content and metadata modules. Update audit/testing notes after verification.

## Content boundaries
The brief supplies founding year 2003 and free demo positioning; academy should confirm these before launch. CTA uses the supplied free demo offer; the centre confirms availability and timing. JEE Advanced availability, weekly assessment cadence, faculty identities, full branch addresses and student results need confirmation. Show support as questions to discuss rather than unsupported service promises. Career routes are broad orientation, not current eligibility advice.

## Completed validation (2026-11-01)
- TypeScript: passed. Production static build: passed (11 generated pages).
- ESLint across src: zero errors; one existing unused-disable warning in Auth/ResetPassword/index.tsx. Changed homepage/components: clean.
- Homepage bundle: 7.25 kB route, 113 kB first-load JS as reported by Next; this is not a Lighthouse or field-performance score.
- Responsive DOM checks: actual content widths 360, 390, 768, 1024 and 1440px all have scrollWidth equal to clientWidth. Desktop, mobile, tablet, classroom, practice, parent and experiment compositions inspected visually.
- Browser checks: student/parent copy switch; incorrect quiz feedback; research pathway; Asalpha/NEET enquiry review with correct WhatsApp URL (not sent); keyboard pendulum min/max, playback and keyboard reset. Period 1.42 seconds at 0.5 m, 2.84 at 2 m, reset 2.01 at 1 m. Playback observed running onscreen and paused offscreen.
- Data checks: 20 course/centre combinations, phone syntax and evidence fields passed.
- Export checks: one H1, unique IDs, valid internal anchors, descriptive image alt, description/Open Graph metadata, sitemap/robots and retained signin/signup/documentation exports passed.
- Responsive WebP assets: student ~44/116 kB; classroom ~72/184 kB. Explicit dimensions, eager hero, lazy later images. No new runtime dependencies.
- Reduced-motion CSS reviewed: decorative animations disabled, playback control hidden, static explanation and length/period remain available. Runtime OS-preference emulation not available in this browser interface.
- Limits: no Lighthouse/CPU-network throttling or real Android test, full screen-reader/contrast audit, or production route smoke test. Local export files exist for retained routes; no deployment occurred. Browser console surfaced extension metadata errors, not established app errors.

## Sources and evidence
Small-angle pendulum model checked against OpenStax: https://openstax.org/books/college-physics-2e/pages/16-4-the-simple-pendulum . IISER route reference: https://www.iiseradmission.in/pages/admission/admission.html . No year-specific admission promises are reproduced.

## Delivery
Branch: redesign/curiosity-homepage. Draft PR: https://github.com/gaaanesh/expert-science-26/pull/1 . Main untouched. Internal preview: http://terminal.local:4173/expert-science/ . Screenshots: review/desktop.jpg and review/mobile.jpg (390px content iframe). Preview requires the managed preview session to be running.

Remaining academy content: actual faculty profiles, consented student results, genuine classroom photos, complete current addresses for Kopar Khairane/Powai, JEE Advanced course confirmation and batch support details. The founding year and free demo positioning are supplied by the new brief; confirm offer terms before production.
