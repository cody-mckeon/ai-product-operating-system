# Concept Scorecard

Scoring scale:

- 1: weak or unclear.
- 2: partial support.
- 3: acceptable.
- 4: strong.
- 5: excellent.

For implementation effort, a higher score means lower effort and lower implementation risk.

## Summary Scorecard

| Concept | Implementation effort | Expected business impact | Design consistency | Package visibility | Total | Recommendation |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Stay + Show Feature Card | 5 | 4 | 5 | 4 | 18 | Preferred first release. |
| Package-Aware Event Cards | 4 | 4 | 4 | 5 | 17 | Strong second release or paired test. |
| Make It A Stay Detail Card | 4 | 5 | 4 | 4 | 17 | High-intent placement; validate template access. |
| Complete The Night Related Rail | 5 | 3 | 5 | 3 | 16 | Good cross-sell companion, not primary package solution. |
| Page-Wide Stay + Show Promo Banner | 5 | 3 | 4 | 4 | 16 | Fast awareness layer; weaker personalization. |

## Concept 1: Stay + Show Feature Card

| Criterion | Score | Rationale |
| --- | ---: | --- |
| Implementation effort | 5 | Reuses existing feature/promo card, image, copy, CTA, and routing patterns. |
| Expected business impact | 4 | Strong room-night potential because it appears early and frames the show as a stay. |
| Design consistency | 5 | Fits current merchandising patterns if copy and imagery match the page tone. |
| Package visibility | 4 | Highly visible, though limited to one or a few featured packages. |

Primary risk: copy must be clear about whether tickets are bundled or separately purchased.

## Concept 2: Package-Aware Event Cards

| Criterion | Score | Rationale |
| --- | ---: | --- |
| Implementation effort | 4 | Reuses event card fields, but may require configuration and mobile spacing checks. |
| Expected business impact | 4 | Puts package consideration directly into event comparison behavior. |
| Design consistency | 4 | Consistent if limited to badge/metadata/secondary CTA, risky if cards become crowded. |
| Package visibility | 5 | Every eligible event can show package availability during browsing. |

Primary risk: added package messaging could reduce card clarity or compete with ticket CTAs.

## Concept 3: Make It A Stay Detail Card

| Criterion | Score | Rationale |
| --- | ---: | --- |
| Implementation effort | 4 | Reuses offer/promo/detail components, but depends on event detail template control. |
| Expected business impact | 5 | Strongest intent point because the guest has already chosen an event. |
| Design consistency | 4 | Consistent if placed as a single contextual card and terms use existing details UI. |
| Package visibility | 4 | Visible for selected events, but only after the guest enters detail pages. |

Primary risk: downstream booking and ticketing handoffs may fragment attribution.

## Concept 4: Complete The Night Related Rail

| Criterion | Score | Rationale |
| --- | ---: | --- |
| Implementation effort | 5 | Reuses related-card rail/grid and existing destination pages. |
| Expected business impact | 3 | Better for attachment and engagement than direct room + ticket conversion. |
| Design consistency | 5 | Highly consistent with existing related content patterns. |
| Package visibility | 3 | Supports package richness but may read as cross-sell instead of package merchandising. |

Primary risk: recommendations feel generic if not curated by event, venue, or occasion.

## Concept 5: Page-Wide Stay + Show Promo Banner

| Criterion | Score | Rationale |
| --- | ---: | --- |
| Implementation effort | 5 | Fastest path if a banner/strip component already exists. |
| Expected business impact | 3 | Creates awareness but may not be tied to the user's event choice. |
| Design consistency | 4 | Consistent if the banner is restrained and does not feel like an alert. |
| Package visibility | 4 | Broad page-level visibility, including mobile users near the top of the page. |

Primary risk: broad package messaging may be ignored or feel less relevant than event-specific placement.

## Ranking

1. Stay + Show Feature Card.
2. Make It A Stay Detail Card.
3. Package-Aware Event Cards.
4. Complete The Night Related Rail.
5. Page-Wide Stay + Show Promo Banner.

## Recommended Two-Week Scope

Minimum viable package merchandising release:

- Launch the Stay + Show Feature Card for one priority event, residency, or campaign.
- Add package-aware tracking to the card and CTAs.
- Preserve existing ticket CTA behavior.
- Add a simple package detail/terms destination using existing content modules.

Stretch scope if capacity allows:

- Add the Make It A Stay Detail Card to eligible event detail pages.
- Add package-aware badges or secondary CTAs to a curated subset of event cards.

## Validation Needed

- Confirm exact existing component capabilities from screenshots or CMS/component library.
- Confirm whether package routing can use an existing offer or booking URL.
- Confirm legal, revenue, ticketing, and operations language for bundled versus linked purchase.
- Confirm mobile layout with real copy.
- Confirm analytics support for package impression, CTA, detail, and booking-start events.
