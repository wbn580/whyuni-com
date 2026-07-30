# WhyUni build notes

## 2026-07-26 homepage preview

- State: homepage preview built; not deployed.
- Position: university reasons, course comparison and decision support leading into application.
- Existing content preserved: the current article collection and inner-page source were not rewritten.
- Independent design: editorial decision journal plus comparison folio; deep plum, peach, lavender and paper.
- Conversion: four lead CTAs, each with a real `mailto:hello@whyuni.com` fallback; response copy is limited to “within one business day”.
- Boundary: no rankings claim, official affiliation, guaranteed outcome or unsupported partner evidence.
- Build: Astro static build completed, 419 pages.
- Homepage browser QA: desktop 1440×1000 and mobile 390×844; no horizontal overflow; one lead script; four working fallback CTAs.
- Repository-wide historical link repair: the 341 broken category targets came
  from two stale global navigation destinations and per-article category links
  built from inconsistent legacy category labels. Global navigation now points
  to the valid decision sections; category labels remain readable text and the
  article continuation action points to the decision notes.
- Full static audit after repair: 419 pages, 413 unique internal targets, 0
  broken targets and 0 broken instances.
- Browser regression: homepage plus English and Chinese representative articles
  passed on desktop; representative article passed at 390×844 with no horizontal
  overflow and no stale `/category/` links.
- Deployment: intentionally not performed pending visual confirmation.
