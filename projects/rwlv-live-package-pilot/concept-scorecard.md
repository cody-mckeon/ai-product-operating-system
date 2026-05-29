# Concept Scorecard

Scoring scale:

- 1: weak or unclear.
- 2: partial support.
- 3: acceptable.
- 4: strong.
- 5: excellent.

For implementation effort, a higher score means lower effort and lower implementation risk.

Updated scoring favors the operational evidence that Resorts World Live packages are date-specific and promotion-specific, with package links routing into the booking engine after arrival/departure dates are preloaded and the promotion is preselected.

## Summary Scorecard

| Concept | Existing component reuse | Low implementation effort | Booking-engine integration | Package attach rate | Total | Recommendation |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Stay + Show CTA On Lineup Cards | 4 | 4 | 5 | 5 | 18 | Primary recommendation. |
| Enhanced Concert Weekend Stay Module | 5 | 5 | 4 | 4 | 18 | Primary companion module. |
| Featured Artist Package Treatment For Promoted Shows | 4 | 4 | 4 | 4 | 16 | Use selectively for campaign-backed shows. |
| Make It A Stay Detail Card | 4 | 4 | 4 | 4 | 16 | Strong later placement once detail template access is confirmed. |
| Complete The Night Related Rail | 5 | 5 | 2 | 3 | 15 | Good cross-sell companion, not primary package solution. |
| Page-Wide Stay + Show Promo Banner | 5 | 5 | 3 | 2 | 15 | Fast awareness layer; weaker date relevance. |

## Concept 1: Stay + Show CTA On Lineup Cards

| Criterion | Score | Rationale |
| --- | ---: | --- |
| Existing component reuse | 4 | Reuses event cards, existing CTA patterns, package badges or metadata, and destination URL fields. |
| Low implementation effort | 4 | Requires eligible-date configuration and mobile spacing QA, but avoids a new module or booking builder. |
| Booking-engine integration | 5 | Best matches the actual flow because each eligible lineup card can deep link to the IBE with dates and promotion already applied. |
| Package attach rate | 5 | Places the stay decision at the moment guests compare specific show dates, creating the clearest path from event intent to room inventory. |

Primary risk: added package messaging could crowd mobile cards or compete with ticket CTAs if the treatment is too heavy.

## Concept 2: Enhanced Concert Weekend Stay Module

| Criterion | Score | Rationale |
| --- | ---: | --- |
| Existing component reuse | 5 | Reuses feature/promo card, offer tile, CTA pair, image, and terms/detail patterns. |
| Low implementation effort | 5 | Can be configured as a focused content module without changing lineup card layouts. |
| Booking-engine integration | 4 | Can route to the same preloaded IBE package link, though it is less directly tied to each card in the grid. |
| Package attach rate | 4 | Strong awareness and conversion support for high-demand weekends, especially near featured events. |

Primary risk: broad weekend copy can become generic unless the module is tied to specific dates and promotions.

## Concept 3: Featured Artist Package Treatment For Promoted Shows

| Criterion | Score | Rationale |
| --- | ---: | --- |
| Existing component reuse | 4 | Reuses hero, featured event, offer tile, CTA, badge, and detail patterns. |
| Low implementation effort | 4 | Feasible with existing promotional components, but requires campaign setup and approval. |
| Booking-engine integration | 4 | Works when the promoted show has a specific package link with dates and promotion preselected. |
| Package attach rate | 4 | Can perform well for high-intent artist traffic, but should be reserved for promoted shows because the package is not inherently artist-centric. |

Primary risk: artist-led language can overstate the package value or imply artist-specific perks unless tightly controlled.

## Concept 4: Make It A Stay Detail Card

| Criterion | Score | Rationale |
| --- | ---: | --- |
| Existing component reuse | 4 | Reuses offer/promo/detail components and terms UI. |
| Low implementation effort | 4 | Depends on event detail template access and package URL support. |
| Booking-engine integration | 4 | Can route from a selected date into the correct preloaded IBE package. |
| Package attach rate | 4 | High-intent placement, though only after the guest opens an event detail page. |

Primary risk: downstream booking and ticketing handoffs may fragment attribution.

## Concept 5: Complete The Night Related Rail

| Criterion | Score | Rationale |
| --- | ---: | --- |
| Existing component reuse | 5 | Reuses related-card rail/grid and existing destination pages. |
| Low implementation effort | 5 | Very low build effort because it mostly configures existing content relationships. |
| Booking-engine integration | 2 | Primarily supports dining/nightlife exploration rather than the date-specific IBE package path. |
| Package attach rate | 3 | Useful for attachment and trip value, but weaker as a direct room package conversion surface. |

Primary risk: recommendations feel generic if not curated by event, venue, or occasion.

## Concept 6: Page-Wide Stay + Show Promo Banner

| Criterion | Score | Rationale |
| --- | ---: | --- |
| Existing component reuse | 5 | Fastest path if a banner/strip component already exists. |
| Low implementation effort | 5 | Minimal build effort and low layout risk. |
| Booking-engine integration | 3 | Can route to package booking but may not know which show date the guest intends. |
| Package attach rate | 2 | Broad visibility, but weaker relevance because the operational package is date-specific. |

Primary risk: broad package messaging may be ignored or feel less relevant than event-specific placement.

## Ranking

1. Stay + Show CTA On Lineup Cards.
2. Enhanced Concert Weekend Stay Module.
3. Featured Artist Package Treatment For Promoted Shows.
4. Make It A Stay Detail Card.
5. Complete The Night Related Rail.
6. Page-Wide Stay + Show Promo Banner.

## Recommended Two-Week Scope

Minimum viable package merchandising release:

- Add a Stay + Show CTA to eligible lineup cards for manually configured package dates.
- Route each CTA to the existing booking engine package link with arrival/departure dates preloaded and the promotion preselected.
- Add package-aware tracking to lineup-card package CTAs.
- Preserve existing ticket CTA behavior.
- Add simple package terms copy using existing detail or accordion components.

Stretch scope if capacity allows:

- Add an enhanced Concert Weekend Stay module for high-demand weekends.
- Add promoted-show artist treatment only where there is a campaign-backed package.

## Validation Needed

- Confirm exact existing component capabilities from screenshots or CMS/component library.
- Confirm package URL structure for preloaded dates, preselected promotion, and room inventory display in the IBE.
- Confirm legal, revenue, ticketing, and operations language for bundled versus linked purchase.
- Confirm mobile layout with real copy.
- Confirm analytics support for package impression, CTA, promotion handoff, room inventory view, booking-start, and package attach-rate events.
