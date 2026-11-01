# Homepage content and SEO review

For the newer character-led redesign and current verification results, see [story-redesign.md](story-redesign.md). The verification below describes the initial homepage revision.

The homepage replaces unsupported outcome promises, invented urgency, inconsistent batch caps, outdated dates, ambiguous score labels and inaccurate NEET weighting. No results or named faculty profiles publish until evidence is supplied. Existing course offerings and contact details are retained from repository content; they still require academy review before launch.

## Launch content checklist
- Confirm all four centre contacts and active status. Supply full Kopar Khairane and Powai addresses. Verify Bhatwadi and Asalpha addresses/maps.
- Confirm demo terms, current fees, course availability and batch timetables.
- Supply faculty names, subjects, qualifications, photographs and publication permission.
- For results supply exam, year, metric (marks/percentage/percentile), scorecard reference and student/guardian publication consent. Do not publish private scorecards or contact details.
- Obtain consent and original wording before adding testimonials. No stock or generated portraits should represent real students or teachers.
- Have subject teachers review the three original quiz questions and simplified diagrams.

## SEO intent
Primary: Class 11 and 12 Science coaching in Asalpha and Ghatkopar West.
Secondary: JEE Main, NEET UG, MHT-CET coaching; Bhatwadi and Pereirawadi centre discovery.
The page answers course, location, subject-choice, fees and demo questions naturally. No ranking guarantees, keyword stuffing or review/rating markup.
Official references: https://jeemain.nta.nic.in/information-bulletin/ ; https://neet.nta.nic.in/admission-bulletin/ ; https://cetcell.mahacet.org/cet-3/ . Exact year-specific eligibility is deliberately not reproduced.

## Deployment
Existing static export and /expert-science base path remain unchanged by default. Set NEXT_PUBLIC_BASE_PATH to an empty string for domain-root hosting and NEXT_PUBLIC_SITE_URL to the actual canonical origin. Confirm that this checkout powers expertscience.in before deployment. Do not publish generated out/ files from an old build. Inventory live URLs before removing or redirecting any pages; existing live footer URLs are not all represented in this checkout. No new thin location pages were generated.

## Local installation
The existing lockfile was produced without resolving optional carousel peer dependencies. Reproduce it with `npm ci --legacy-peer-deps`; standard `npm ci` currently reports missing jquery. This redesign does not add dependencies.

## Verification
- `npx tsc --noEmit`: passed.
- `npm run build`: static export passed. Initial build reports homepage first-load JS about 106 kB; this is a bundle report, not a Core Web Vitals measurement.
- `node scripts/check-homepage.cjs`: checks all 20 course/centre request combinations, centre phone syntax, unique course IDs and evidence fields.
- Export inspection: one H1, valid section links, unique IDs, image alt text, description/canonical, robots and sitemap, and stale claims absent.
- Browser: audience switching, pathway selection, correct/incorrect quiz feedback, score (2/3), retry, demo review and generated WhatsApp URL verified. No message sent.
- Narrow frames: 390px and 320px outer widths (375px/305px content with scrollbars), no horizontal page overflow; mobile layout inspected. Biology selection and keyboard slider input exercised.
- Outstanding: comprehensive WCAG audit, contrast tooling, real-device testing, reduced-motion runtime testing, and field Core Web Vitals. No accessibility conformance or ranking claim is made.

## Review scope
Source-only draft. Main and production are unchanged. Existing tracked `out/` assets are not updated in this PR; deployment must build fresh output. Framework dependencies remain pinned as found and require a separate security/update review before deployment.
