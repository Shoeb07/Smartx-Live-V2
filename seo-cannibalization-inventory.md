# SmartX Solutions — Keyword Cannibalization Inventory

**Date:** 2026-07-19  
**Scope:** All indexable routes as of this date  
**Purpose:** Identify pages competing for the same queries; flag decisions requiring approval before any merge, consolidation, or redirect.

---

## Legend

| Risk | Meaning |
|------|---------|
| HIGH | Two pages likely competing in the same SERP for the same query |
| MEDIUM | Overlap possible; intent differentiation is present but thin |
| LOW | Different intent or modifier provides natural separation |
| NONE | No meaningful query overlap |

---

## Part 1 — Commercial Service Pages

| URL | Type | Title | H1 | Primary Intent | Primary Keyword | Risk |
|-----|------|-------|-----|----------------|-----------------|------|
| `/software-development-company` | SEO landing | Custom Software Development Company in Hyderabad | Custom Software Development Company in Hyderabad | Commercial | custom software development company Hyderabad | — |
| `/web-development-services` | SEO landing | Web Development Services & Web Portal Development | Web Development Services & Web Portal Development | Commercial | web development services Hyderabad | — |
| `/enterprise-software-development-hyderabad` | Custom page | Enterprise Software Development Company in Hyderabad | (same) | Commercial | enterprise software development Hyderabad | — |
| `/services/saas-development-company-hyderabad` | Custom page | SaaS Development Company in Hyderabad | (same) | Commercial | SaaS development company Hyderabad | — |
| `/services/fintech-app-development-hyderabad` | Custom page | FinTech App Development Hyderabad | (same) | Commercial | fintech app development Hyderabad | — |
| `/mobile-app-development` | SEO landing | Mobile App Development | (same) | Commercial | mobile app development Hyderabad | — |
| `/ai-automation-services` | SEO landing | AI Automation Services | (same) | Commercial | AI automation services | — |
| `/digital-marketing-services` | SEO landing | Digital Marketing Services | (same) | Commercial | digital marketing services Hyderabad | — |
| `/offshore-software-development-india` | Custom page | Offshore Software Development India | (same) | Commercial (US/EU) | offshore software development India | — |

**Verdict:** No significant cannibalization among service pages — each targets a distinct service and keyword with unique modifiers.

---

## Part 2 — Blog Posts at Root Level (Informational)

These posts are rendered at root-level paths (e.g. `/custom-web-application-company`) rather than under `/blog/`.

| URL | Type | Keyword | Title | Intent | Closely Related Pages | Risk | Action |
|-----|------|---------|-------|--------|-----------------------|------|--------|
| `/custom-web-application-company` | Blog post | custom web application company | How to Choose a Custom Web Application Company | Informational | `/software-development-company` | MEDIUM | Differentiate — ensure meta description + H1 stress "how to choose" not "hire us"; add CTA link to `/software-development-company` |
| `/it-services-company` | Blog post | it services company | IT Services for Growing Businesses | Informational | `/services`, `/software-development-company` | LOW | Keep — "IT services" is a broader, different keyword bucket than "custom software development" |
| `/product-development-company` | Blog post | product development company | Product Development Company for SaaS | Informational | `/software-development-company` | LOW | Keep — "product development" modifier separates this from the custom-software pillar |
| `/digital-innovation-agency` | Blog post | digital innovation agency | Digital Innovation for Modern Businesses | Informational | `/software-development-company` | LOW | Keep — distinct keyword; link to pillar as CTA |
| `/software-development-company-guide` | Blog post | software development company | Choosing a Software Development Company | Informational (guide) | `/software-development-company` | **HIGH** | See § 3.1 below |

---

## Part 3 — Key Cannibalization Pairs Requiring Attention

### 3.1 `/software-development-company-guide` vs `/software-development-company` — HIGH RISK

**Issue:** Both target variants of "software development company." The guide targets the informational query ("how to choose a software development company") while the landing page targets the commercial query ("custom software development company in Hyderabad"). Google can misallocate ranking signal if the guide ranks for commercial queries.

| Factor | `/software-development-company` | `/software-development-company-guide` |
|--------|--------------------------------|--------------------------------------|
| Intent | Commercial (hire us) | Informational (how to choose) |
| Title | "Custom Software Development Company in Hyderabad" | "Choosing a Software Development Company" |
| Keyword | custom software development company Hyderabad | software development company |
| Hyderabad signal | Strong (in title, H1, content) | Absent |

**Current state:** The H1 of the guide ("Choosing a Software Development Company") does not target Hyderabad, which provides some separation. However both pages will rank for broad "software development company" queries. The guide should funnel users to the commercial page.

**Recommended action (requires approval):**
- No redirect needed — both pages serve legitimate purposes
- Ensure the guide contains a prominent CTA section linking to `/software-development-company` ("If you're looking for a Hyderabad-based team, see our services →")
- Check that the guide's meta title includes "Guide" or "How to Choose" (not "SmartX Solutions Services") to reinforce informational intent to Google

**Approval needed?** NO for the CTA link addition. YES before any redirect or merge.

---

### 3.2 Fintech Service Page vs Fintech Blog Posts — LOW RISK

| URL | Intent | Keyword focus |
|-----|--------|---------------|
| `/services/fintech-app-development-hyderabad` | Commercial | fintech app development Hyderabad |
| `/blog/fintech-software-development-company-hyderabad` | Informational | fintech software development company Hyderabad |
| `/blog/fintech-app-development-cost-india` | Informational (cost) | fintech app development cost India |
| `/blog/upi-payment-gateway-integration-guide` | Informational (how-to) | UPI payment gateway integration |
| `/blog/rbi-compliance-fintech-apps-india` | Informational (compliance) | RBI compliance fintech apps |

**Verdict:** No cannibalization. Each post targets a distinct sub-query. The service page is pure commercial; all blog posts are informational with different modifier focus. The cluster is well-structured.

---

### 3.3 Hyderabad Software Company Comparison Pages — LOW RISK

| URL | Intent | Keyword |
|-----|--------|---------|
| `/best-software-development-companies-hyderabad` | Comparison (list) | best software development companies Hyderabad |
| `/software-development-agency-vs-upwork` | Comparison (decision) | software development agency vs Upwork |
| `/smartx-solutions-vs-toptal` | Comparison (decision) | SmartX vs Toptal |
| `/software-development-company` | Commercial (service) | custom software development company Hyderabad |

**Verdict:** Distinct intent across all four. List pages rank for "best X" and "top X" queries; the commercial page ranks for "hire X" queries. No action needed.

---

## Part 4 — www vs Non-www

| Check | Status |
|-------|--------|
| `next.config.js` redirect: `smartxsolutions.in → https://www.smartxsolutions.in` | ✓ Configured (301 permanent) |
| `robots.txt` sitemap URL uses www | ✓ `https://www.smartxsolutions.in/sitemap.xml` |
| All sitemap entries use www | ✓ `siteUrl = 'https://www.smartxsolutions.in'` in sitemap.ts |
| Blog canonicals use www | ✓ `absoluteUrl()` always returns www prefix |
| SEO landing page canonicals use www | ✓ `buildMetadata()` calls `absoluteUrl()` |
| Case study page canonicals use www | ✓ Hardcoded `https://www.smartxsolutions.in` in each file |
| HTTP → HTTPS | Handled by Vercel (not app-level; expected) |

**Verdict:** No www/canonical issues detected.

---

## Part 5 — Sitemap Integrity Check

| Check | Status |
|-------|--------|
| `/case-studies` (redirects to `/portfolio`) excluded from sitemap | ✓ Filtered out |
| Duplicate entries between `seoPageList` and explicit sitemap entries | ✓ None — all explicit entries are pages NOT in seoPages |
| Fintech cluster posts appear under `/blog/[slug]` path | ✓ Only posts with `blog/` slug prefix are rendered at `/blog/[slug]` |
| `privacy-policy`, `terms-and-conditions` appear in sitemap | ✓ Via explicit entries only |
| `/contact-us` sitemap priority | ✓ Updated to 0.5 (was incorrectly 0.9) |

**Verdict:** Sitemap is clean with no duplicate URLs, no redirecting sources, no noindex pages included.

---

## Part 6 — Decisions Requiring Approval

| # | Issue | Recommendation | Urgency |
|---|-------|----------------|---------|
| 1 | `/software-development-company-guide` targets "software development company" — same keyword as the commercial pillar | Add prominent CTA link to `/software-development-company`; do NOT redirect | Low — no evidence of actual ranking conflict yet |
| 2 | `/custom-web-application-company` blog post could steal commercial intent clicks | Verify H1 stays informational; ensure it links to `/software-development-company` | Low |
| 3 | Redirect chain check: any apex-domain HTTP request goes `http://smartxsolutions.in → https://www.smartxsolutions.in` (2 hops: HTTP→HTTPS + apex→www). This may need consolidation at the DNS/host level into a single 301. | Verify at Vercel/DNS level that HTTP→HTTPS is a single redirect, not chained with the www redirect | Medium — check but likely handled by Vercel |

---

## Part 7 — Full Route Inventory (All Indexable Pages)

| URL | Type | Primary Keyword | Notes |
|-----|------|-----------------|-------|
| `/` | Homepage | SmartX Solutions software company Hyderabad | — |
| `/about-us` | Info | about SmartX Solutions | — |
| `/services` | Hub | software development services | — |
| `/web-development-services` | Service | web development services | — |
| `/mobile-app-development` | Service | mobile app development | — |
| `/ai-automation-services` | Service | AI automation services | — |
| `/digital-marketing-services` | Service | digital marketing services | — |
| `/software-development-company` | Pillar (commercial) | custom software development company Hyderabad | Main commercial target |
| `/contact-us` | Contact | contact SmartX Solutions | — |
| `/portfolio` | Portfolio hub | SmartX portfolio | — |
| `/portfolio/ag-traders` | Case study | AG Traders manufacturer website | — |
| `/portfolio/furnexo` | Case study | FurneXo furniture marketplace | — |
| `/portfolio/mant-talent` | Case study | MANT Talent staffing website | — |
| `/portfolio/one-stop-dashboard` | Case study | One Stop Dashboard ERP | — |
| `/technologies` | Info | technologies used | — |
| `/industries` | Info | industries served | — |
| `/offshore-software-development-india` | Service (US/EU) | offshore software development India | — |
| `/enterprise-software-development-hyderabad` | Service | enterprise software development Hyderabad | — |
| `/services/saas-development-company-hyderabad` | Service | SaaS development Hyderabad | — |
| `/services/fintech-app-development-hyderabad` | Service | fintech app development Hyderabad | — |
| `/best-software-development-companies-hyderabad` | Comparison | best software companies Hyderabad | 299 impressions, pos 26 |
| `/software-development-agency-vs-upwork` | Comparison | software agency vs Upwork | — |
| `/smartx-solutions-vs-toptal` | Comparison | SmartX vs Toptal | — |
| `/custom-web-application-company` | Blog (root) | custom web application company | MEDIUM overlap risk with pillar |
| `/it-services-company` | Blog (root) | IT services company | LOW risk |
| `/product-development-company` | Blog (root) | product development company | LOW risk |
| `/digital-innovation-agency` | Blog (root) | digital innovation agency | LOW risk |
| `/software-development-company-guide` | Blog (root) | software development company | **HIGH overlap risk with pillar** |
| `/blog` | Blog listing | — | — |
| `/blog/fintech-software-development-company-hyderabad` | Blog | fintech software development Hyderabad | — |
| `/blog/fintech-app-development-cost-india` | Blog | fintech app development cost India | 133 impressions, pos 7.8 |
| `/blog/upi-payment-gateway-integration-guide` | Blog | UPI payment gateway integration | 398 impressions, pos 22 |
| `/blog/rbi-compliance-fintech-apps-india` | Blog | RBI compliance fintech apps | — |
| `/blog/web-development-hyderabad-guide` | Blog | web development Hyderabad | — |
| `/blog/web-development-cost-hyderabad` | Blog | web development cost Hyderabad | — |
| `/blog/ecommerce-website-development-hyderabad` | Blog | ecommerce development Hyderabad | — |
| `/authors/shoeb-uddin` | Author | — | — |
| `/authors/saleha-begum` | Author | — | — |
| `/privacy-policy` | Legal | — | noindex candidate |
| `/terms-and-conditions` | Legal | — | noindex candidate |

---

*Report generated 2026-07-19. Re-run after any significant new page additions or route changes.*
