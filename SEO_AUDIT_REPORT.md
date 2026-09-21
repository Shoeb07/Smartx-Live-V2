# SmartX Solutions SEO, CRO, and Technical Audit

Audit date: 2026-09-21

## Executive summary

The site already has a strong technical base: server-rendered Next.js routes, unique metadata on the main commercial pages, canonical URLs, XML sitemap and robots generation, structured data, portfolio pages, a qualified contact form, and GA4 events. The highest-risk issue was trust: prominent numerical and superlative claims were presented without visible methodology or evidence. The safest high-impact work was therefore to improve claim quality, correct structured-data accuracy, consolidate a duplicate legal URL, and complete conversion tracking rather than add more pages.

Current search results show that `/software-development-company` is already the correct page for the primary Hyderabad custom-software intent. It should remain the commercial pillar. No new location or near-duplicate service pages are recommended.

## Prioritized findings

| Priority | Area | Finding | Action |
|---|---|---|---|
| P0 | Credibility | Homepage displayed unsupported `94%`, `100%`, `2.4x`, `99.9%`, `+38%`, `184 hrs`, “premier,” and “senior-only” claims. | Replaced homepage claims with verifiable process, location, capability, and public-work language; marked the product dashboard as illustrative. |
| P0 | Measurement | The persistent WhatsApp widget did not emit the existing `whatsapp_click` event. | Added GA4 click tracking with source `floating_widget`. |
| P1 | Structured data | `WebSite` schema advertised a `SearchAction`, but the site has no working site-search experience. | Removed the unsupported action. |
| P1 | URL consolidation | `/terms` duplicated the legal purpose of `/terms-and-conditions` and had no page metadata. | Added a permanent redirect from `/terms` to `/terms-and-conditions`. |
| P1 | Commercial intent | Homepage and `/software-development-company` overlap on the main keyword. | Keep the homepage as the company overview and the existing software page as the detailed service/pillar page; strengthen links between them rather than create another page. |
| P1 | Contact consistency | The repository consistently uses `+91 91005 90377`, while a recent live crawl showed some rendered footer/contact text as `+91 93467 54163`. | Verify the canonical business number before deployment and ensure the website, GBP, schema, directories, and social profiles match. No number was guessed or changed. |
| P1 | Conversion configuration | GA4 emits `generate_lead`, `whatsapp_click`, `phone_click`, `email_click`, `form_start`, and CTA events, but repository code cannot prove that GA4 admin marks the intended events as key events. | Verify in GA4 DebugView, then mark confirmed form submissions and the selected contact clicks as key events. |
| P2 | Sitemap freshness | Sitemap entries use build time as `lastModified` for every URL. | Replace with real content modification dates when a reliable source exists. |
| P2 | Content quality | Several blog/comparison pages contain pricing, competitor, compliance, “senior-only,” IP, and delivery claims that need source or contract verification. | Run an owner-led evidence review before expanding or promoting those pages. |
| P2 | Schema maintenance | Organization schema generates `dateModified` at build time and includes detailed local/business attributes. | Keep only attributes that match current visible and verified business information. |
| P3 | Metadata | The root metadata still contains a broad keyword array. | Harmless to rankings; remove later for maintenance simplicity if desired. |

## Keyword-to-page map

| Search intent | Primary page | Role |
|---|---|---|
| custom software development company Hyderabad | `/software-development-company` | Primary commercial pillar |
| software development company Hyderabad / company brand | `/` | Company overview and navigation hub |
| web development services Hyderabad / web portal development | `/web-development-services` | Web commercial page |
| custom web application development Hyderabad | `/custom-web-application-company` | Web-app-specific commercial page; monitor overlap with web services |
| mobile app development company Hyderabad | `/mobile-app-development` | Mobile commercial page |
| SaaS development company Hyderabad / India | `/services/saas-development-company-hyderabad` | SaaS commercial page |
| AI integration / AI automation Hyderabad | `/ai-automation-services` | AI commercial page |
| ERP / CRM / business process automation Hyderabad | `/enterprise-software-development-hyderabad` | Business-software commercial page |
| fintech app development Hyderabad | `/services/fintech-app-development-hyderabad` | Industry-specific commercial page |
| offshore software development India | `/offshore-software-development-india` | International/offshore intent |
| mobile app development cost India | `/mobile-app-development-cost-india` | Decision-stage resource |
| how to choose a software development company | `/software-development-company-guide` | Decision-stage resource |
| company proof / delivered work | `/portfolio` and `/portfolio/*` | Trust and case-study layer |
| contact / estimate request | `/contact-us` | Conversion destination |

## Page-level audit summary

| Page group | Purpose and intent | Current quality | Main risk / recommendation |
|---|---|---|---|
| Homepage | Company positioning and broad commercial discovery | Strong visual hierarchy, clear H1, services, proof, process, FAQ, contact | Keep focused on the company proposition; evidence-review all remaining claims outside the edited homepage components. |
| Custom software pillar | High-intent custom software enquiries | Strong problem/solution copy, Hyderabad relevance, pricing/timeline FAQ, direct contact band | Preserve URL; add only verified proof and relevant case-study links. |
| Web, mobile, SaaS, AI, enterprise, fintech | Service-specific commercial demand | Dedicated metadata, H1s, FAQs, cross-links | Monitor overlap; each page must retain a distinct deliverable and buyer problem. |
| Portfolio/case studies | Proof and objection handling | Multiple named project pages and live examples | Add screenshots, client permission, measured outcomes, timelines, and testimonials only when verified. |
| Blog and decision pages | Research and comparison intent | Broad topical inventory with internal links | Do not add more until Search Console proves demand; source time-sensitive pricing and competitor statements. |
| Contact | Qualified lead capture | Project type, budget, message, preferred contact, anti-spam, success-only lead event | Validate Web3Forms delivery and GA4 event receipt in production. |
| Legal | Trust and compliance | Privacy and terms pages exist | `/terms` now consolidates to the canonical terms page. |

## Changes implemented

- Replaced unsupported homepage performance, satisfaction, delivery, and staffing claims.
- Reframed the animated product dashboard as an illustrative interface instead of client-result evidence.
- Rewrote the root meta description around the primary Hyderabad custom-software proposition and a clear next step.
- Added `whatsapp_click` tracking to the site-wide floating WhatsApp widget.
- Removed the invalid/nonfunctional structured-data search action.
- Added a permanent redirect from `/terms` to `/terms-and-conditions`.
- Preserved the existing routes and did not create mass content, doorway pages, fabricated proof, ratings, or review schema.

## New, merged, and removed pages

- New pages: none.
- Merged URLs: `/terms` now permanently redirects to `/terms-and-conditions`.
- Removed pages: none.

## Internal linking and local SEO

The current architecture links the homepage to major service, portfolio, decision-stage, and contact pages. The commercial pillar links to services and conversion content. No orphan-page deletion was attempted without Search Console and backlink data.

Local signals exist in visible contact content and Organization/LocalBusiness schema. Before deployment, reconcile the phone discrepancy noted above and verify the physical address, coordinates, opening hours, LinkedIn URL, and Google Business Profile. Consistency is more valuable than adding location pages.

## Content and proof gaps

- Add verifiable project screenshots and the client-approved scope to each portfolio page.
- Add measured results only from analytics, operational records, or written client confirmation.
- Record the denominator and date range for any future delivery/satisfaction statistic.
- Verify “India's first,” compliance, guaranteed timelines, warranties, IP transfer, pricing, and named-client claims before publishing them as facts.
- Use Search Console query/page data before creating cost, comparison, or sub-service content.

## Performance and accessibility

The repository uses Next.js image optimization, local Next font integration, reduced-motion checks in major animated sections, semantic headings, and responsive layouts. The homepage still has a large client-animation footprint (Framer Motion, custom cursor, AI chat, and multiple animated sections). Establish mobile Lighthouse and real-user Core Web Vitals baselines before removing useful content. Prioritize LCP image loading, JavaScript execution, INP, and animation cost on mid-range Android devices.

## Validation status

- Repository route and implementation audit: completed.
- Live homepage and primary service-page crawl: completed.
- Current SERP sampling for Hyderabad custom-software terms: completed.
- Claim regression scan on edited homepage content: passed.
- Production build: not run because Node/npm are not available in the execution environment.
- Live form submission: not performed to avoid creating a false business enquiry.
- GA4 DebugView, Search Console, GBP, backlink, and field-CWV checks: require account access or production browser telemetry.

## Measurement plan

1. In GA4 DebugView, verify `form_start`, `generate_lead`, `whatsapp_click`, `phone_click`, `email_click`, and `consultation_click`, including `source` and `page_path`.
2. Mark only meaningful completed actions as GA4 key events; keep CTA clicks diagnostic unless the business wants them treated as micro-conversions.
3. In Search Console, monitor impressions, clicks, CTR, average position, indexed pages, and organic landing pages by query/page.
4. Create segments for non-branded commercial queries, Hyderabad/local queries, and the mapped service clusters above.
5. Join enquiry records back to landing page/source and report qualified enquiries and sales opportunities, not clicks alone.
6. Review at 28-day and 90-day intervals; avoid judging SEO changes from a few days of volatility.

## Remaining work by priority

- P0: Confirm one canonical business phone number and reconcile all live/local/GBP references if they differ.
- P1: Verify GA4 events and key-event configuration in production; test one real form submission with business approval.
- P1: Review all non-homepage commercial and comparison claims against contracts, analytics, client permission, and current sources.
- P1: Connect Search Console data to the keyword map and identify actual cannibalization before merging content.
- P2: Benchmark Lighthouse and field Core Web Vitals on the homepage and top organic landing pages.
- P2: Add verified case-study proof and source dates to pricing/comparison content.
- P2: Replace blanket sitemap modification dates with accurate dates when available.

## Risks and assumptions

- No analytics, Search Console, GBP, CRM, or contract evidence was available in the repository, so no claim was treated as proven merely because it appeared in code.
- SERPs vary by location, device, and personalization; the sampled results are directional, not a rank guarantee.
- The repository's `+91 91005 90377` number was left intact because the correct business number cannot be inferred safely from conflicting live text.
- No ranking, traffic, lead, or performance improvement is promised; results must be measured after deployment.
