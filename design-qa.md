# Design QA

- Source visual truth: downloaded site in `index.html` before redesign, with local imagery under `assets/img/`
- Implementation: redesigned `index.html`
- Intended viewports: desktop 1440 × 900 and mobile 390 × 844
- Source/implementation density: CSS pixel layout at device scale factor 1 intended
- State: homepage, default job filter
- Full-view comparison evidence: blocked because no supported interactive browser/screenshot surface is available in this session
- Focused-region comparison evidence: not available for the same reason

## Findings

- Static asset paths, JavaScript syntax, and HTML delivery passed local checks.
- Browser-rendered visual comparison, mobile layout inspection, primary interaction testing, and console inspection remain unavailable.

## Implementation Checklist

- Open the homepage in a browser at desktop and mobile widths.
- Confirm the job filters, “View all opportunities,” mobile menu, anchors, and email links.
- Replace the placeholder `careers@northstar.example` address before production use.

## Comparison History

- Initial implementation completed; visual comparison could not begin because browser-rendered evidence is unavailable.

final result: blocked
