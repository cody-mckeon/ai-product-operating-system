# Recommendation

## Executive Summary

The preferred direction is to represent room + ticket packages through existing Resorts World Live merchandising components, starting with a reusable Stay + Show Feature Card. This gives packages meaningful visibility, supports room-night growth, preserves the current ticket-first journey, and fits a two-week, low-risk implementation window.

Do not create a new package builder or new custom module for the pilot. Use existing hero, promo/feature card, event card, related rail, CTA, and detail components.

## Preferred Direction

Move forward with Concept 1: Stay + Show Feature Card.

Recommended first release:

- Add one package-focused feature/promo card near the top of the Live page.
- Use existing image, headline, body, CTA, and terms/detail fields.
- Route to an existing package, offer, room booking, or campaign destination.
- Preserve "Buy Tickets" as a clear ticket-only path.
- Instrument package impression, CTA click, detail view, booking start, and ticket-only fallback.

Recommended stretch:

- Add the same package card pattern to eligible event detail pages as "Make It A Stay."
- Add package badges or secondary CTAs to a curated subset of eligible event cards.

## Why This Direction

This approach best satisfies the stakeholder request and constraints:

- Increases room-night visibility without disrupting ticket purchase behavior.
- Uses existing components and avoids new UI construction.
- Can be launched for a small, manually curated event set.
- Creates measurable package engagement quickly.
- Keeps operational risk low by avoiding unvalidated inventory guarantees.
- Supports future iteration into event cards, detail pages, and cross-sell rails.

## Recommended Package Structure

| Field | Recommendation |
| --- | --- |
| Audience | Guests considering a featured show, residency, or event weekend. |
| Occasion | Entertainment-led overnight stay, date night, celebration, or weekend trip. |
| Promise | "Make the show a stay" with room and ticket planning presented together. |
| Inclusions | Room path plus event ticket path; only list bundled inclusions if confirmed. |
| Optional upgrades | Dining, VIP, room upgrade, loyalty benefit, or nightlife cross-sell. |
| Constraints | Availability, blackout dates, ticket purchase rules, taxes/fees, dining availability, and fulfillment terms. |
| Operational owner | Product with Revenue/Hotel, Entertainment, Marketing, Analytics, and Engineering validation. |
| Primary CTA | "View room + ticket package" or "Check package availability." |
| Secondary action | "Buy tickets only." |

## Scorecard Summary

| Concept | Implementation effort | Expected business impact | Design consistency | Package visibility | Total |
| --- | ---: | ---: | ---: | ---: | ---: |
| Stay + Show Feature Card | 5 | 4 | 5 | 4 | 18 |
| Package-Aware Event Cards | 4 | 4 | 4 | 5 | 17 |
| Make It A Stay Detail Card | 4 | 5 | 4 | 4 | 17 |
| Complete The Night Related Rail | 5 | 3 | 5 | 3 | 16 |
| Page-Wide Stay + Show Promo Banner | 5 | 3 | 4 | 4 | 16 |

## Implementation Plan

### Week 1

- Confirm existing component capabilities from screenshots/CMS/component library.
- Select one priority event, residency, or campaign for the pilot.
- Confirm package terms, routing, inventory assumptions, and legal copy.
- Draft final card copy and CTA labels.
- Add telemetry requirements to the selected component.

### Week 2

- Configure the card in the existing Live page surface.
- QA desktop and mobile layout with real copy.
- Validate routing and third-party handoffs.
- Validate analytics events in staging.
- Launch as a limited pilot or content experiment.

## Telemetry Requirements

Required events:

- `package_impression`
- `package_card_engaged`
- `package_detail_viewed`
- `cta_clicked`
- `availability_check_started`
- `booking_started`
- `ticket_only_clicked`

Required context:

- Package ID/name.
- Source module.
- Event/show/artist/venue.
- CTA text and destination.
- Device class.
- Availability state when known.
- User state when available.

Primary KPI:

- Room booking starts from Live package surfaces.

Secondary KPIs:

- Package card engagement.
- Package detail view rate.
- Package CTA click-through.
- Entertainment-to-room attachment.
- Ticket CTA guardrail.
- Mobile abandonment/backtracking.

## Risks And Mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Screenshots/component inventory unavailable in this checkout | Exact placement and component capabilities need validation. | Run a screenshot validation pass before final build. |
| Package copy overpromises bundled inventory | Guest confusion and operational risk. | State clearly whether tickets are included, linked, or purchased separately. |
| Package CTA competes with ticket sales | Potential ticket conversion drag. | Keep ticket-only action visible and track it as a guardrail. |
| Booking and ticketing handoffs fragment measurement | Incomplete attribution. | Add source parameters and package context to every available handoff. |
| Mobile card density increases friction | Lower engagement or more backtracking. | QA with real copy and prefer one concise package card in the first release. |

## Final Recommendation

Launch a small, measurable Stay + Show Feature Card pilot using existing components only. Treat it as the first package merchandising layer, not a full package commerce redesign. If the pilot lifts qualified package engagement without hurting ticket behavior, expand the same pattern into event detail pages and eligible event cards.
