# Recommendation

## Executive Summary

The preferred direction is to merchandise Stay + Show packages through existing event discovery surfaces while progressively introducing date-driven package discovery. The pilot will begin with Stay + Show CTAs on eligible lineup cards because it is the lowest-risk implementation using existing components. Future iterations should explore date-based concert weekend discovery experiences that align more closely with the booking engine's package architecture.

## Preferred Direction

Move forward with a date-specific Stay + Show package experience.

Recommended first release:

- Add a Stay + Show CTA to eligible lineup cards.
- Route each package CTA to the existing IBE package link with arrival/departure dates preloaded and the promotion preselected.
- Use existing event card, CTA, badge/metadata, and terms/detail fields.
- Preserve "Buy Tickets" as a clear ticket-only path.
- Instrument package impression, CTA click, promotion handoff, room inventory view, booking start, package attach rate, and ticket-only fallback.

Recommended stretch:

- Add an enhanced Concert Weekend Stay module for high-demand package dates.
- Add a featured artist package treatment only for promoted shows with campaign-backed package links.
- Add the same package CTA pattern to eligible event detail pages as "Make It A Stay" once template access is confirmed.

## Why This Direction

This approach best satisfies the stakeholder request and constraints:

- Aligns the front-end package merchandising with the real operational flow: date-specific package link into the booking engine.
- Increases room-night visibility without disrupting ticket purchase behavior.
- Uses existing components and avoids new UI construction.
- Can be launched for a small, manually curated set of package-eligible show dates and promotions.
- Creates measurable package engagement and attach-rate data quickly.
- Keeps operational risk low by avoiding unvalidated artist-specific or bundle-specific claims.
- Supports future iteration into weekend modules, promoted-show treatments, detail pages, and cross-sell rails.

## Ranked Recommendation

1. Stay + Show CTA On Eligible Lineup Cards
2. Concert Weekend Stay Module
3. Date-Based Concert Weekend Discovery Experience
4. Featured Artist Package Treatment

The lineup-card CTA is the highest-priority recommendation because it sits closest to the guest's date-selection behavior and can route directly to the correct preloaded IBE package. The Concert Weekend Stay module is the best companion because it reuses existing feature/promo components and gives high-demand dates more visibility without requiring a new commerce pattern. Featured Artist treatment should be selective because the artist can drive campaign attention, but the package itself is date-specific, promotion-specific, and fulfilled through booking-engine inventory.

## Recommended Package Structure

| Field | Recommendation |
| --- | --- |
| Audience | Guests considering a specific show date, residency date, or promoted event weekend. |
| Occasion | Entertainment-led overnight stay, date night, celebration, or weekend trip. |
| Promise | "Make the show a stay" with eligible room inventory surfaced for the selected date window. |
| Inclusions | Preloaded room package path plus event ticket path; only list bundled inclusions if confirmed. |
| Optional upgrades | Dining, VIP, room upgrade, loyalty benefit, or nightlife cross-sell. |
| Constraints | Arrival/departure dates, promotion rules, availability, blackout dates, ticket purchase rules, taxes/fees, dining availability, and fulfillment terms. |
| Operational owner | Product with Revenue/Hotel, Entertainment, Marketing, Analytics, and Engineering validation. |
| Primary CTA | "Stay + Show" or "Check stay + show rates." |
| Secondary action | "Buy tickets only." |

## Scorecard Summary

| Concept | Existing component reuse | Low implementation effort | Booking-engine integration | Package attach rate | Total |
| --- | ---: | ---: | ---: | ---: | ---: |
| Stay + Show CTA On Lineup Cards | 4 | 4 | 5 | 5 | 18 |
| Enhanced Concert Weekend Stay Module | 5 | 5 | 4 | 4 | 18 |
| Featured Artist Package Treatment For Promoted Shows | 4 | 4 | 4 | 4 | 16 |
| Make It A Stay Detail Card | 4 | 4 | 4 | 4 | 16 |
| Complete The Night Related Rail | 5 | 5 | 2 | 3 | 15 |
| Page-Wide Stay + Show Promo Banner | 5 | 5 | 3 | 2 | 15 |

## Implementation Plan

### Week 1

- Confirm existing component capabilities from screenshots/CMS/component library.
- Select one or more package-eligible show dates and promotions for the pilot.
- Confirm IBE package link behavior for preloaded arrival/departure dates, preselected promotion, and room inventory display.
- Confirm package terms, routing, inventory assumptions, and legal copy.
- Draft final lineup-card CTA labels, badge/metadata copy, and terms copy.
- Add telemetry requirements to the lineup card package CTA.

### Week 2

- Configure eligible lineup-card CTAs in the existing Live page surface.
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
- `promotion_handoff_clicked`
- `room_inventory_viewed`
- `availability_check_started`
- `booking_started`
- `package_attached`
- `ticket_only_clicked`

Required context:

- Package ID/name.
- Source module.
- Event/show/date/artist/venue.
- Arrival/departure dates.
- Promotion code or promotion ID.
- CTA text and destination.
- Device class.
- Availability state when known.
- User state when available.

Primary KPI:

- Package attach rate from Live package surfaces.

Secondary KPIs:

- Room booking starts from Live package surfaces.
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
| Package copy overpromises bundled inventory | Guest confusion and operational risk. | State clearly whether the flow is a preloaded room package, a room + ticket bundle, or a room path linked near ticket purchase. |
| Package CTA competes with ticket sales | Potential ticket conversion drag. | Keep ticket-only action visible and track it as a guardrail. |
| Booking and ticketing handoffs fragment measurement | Incomplete attribution. | Add source parameters, dates, promotion ID, and package context to every available handoff. |
| Mobile card density increases friction | Lower engagement or more backtracking. | QA with real copy and prefer one concise package card in the first release. |
| Artist-led campaign treatment obscures date-specific package mechanics | Misaligned expectations and higher approval risk. | Reserve artist package treatment for promoted shows only and keep the CTA tied to stay dates and promotion rules. |

## Operational Discovery

Package fulfillment is date-specific.

Each package CTA routes directly into the booking engine with:

- Arrival date preloaded
- Departure date preloaded
- Promotion preselected
- Room inventory surfaced

Package merchandising should therefore emphasize:
- show date
- package availability
- stay extension opportunity

rather than artist-only promotion.

The booking flow is fundamentally:

Show Date → Stay + Show Package → Booking Engine → Room Selection.

## Strategic Observation

During concept development, a key operational insight emerged.

The Resorts World Live page is primarily artist-first. Guests discover entertainment by browsing artists and events.

The package booking flow is primarily date-first. Package links preload arrival dates, departure dates, promotion codes, and inventory availability within the booking engine.

This creates a mismatch between entertainment discovery and package fulfillment.

For the pilot, package merchandising should remain embedded within existing artist and event discovery components to minimize implementation effort.

Longer term, Resorts World should evaluate a date-driven "Concert Weekend" discovery experience that helps guests answer:

"What is happening while I am visiting?"

rather than requiring guests to first select an artist.

Potential future experiences include:

- Concert Weekend Finder
- Events During My Stay
- Stay + Show Calendar View
- Package-Eligible Event Filters

These concepts fall outside the pilot scope but may represent the larger strategic opportunity.

## Final Recommendation

Launch a small, measurable Stay + Show CTA pilot on eligible lineup cards using existing components only. Treat it as the first date-specific package merchandising layer, not a full package commerce redesign. Pair it with an enhanced Concert Weekend Stay module for priority dates, and reserve Featured Artist package treatment for promoted shows where the campaign has a validated package link. If the pilot lifts package attach rate without hurting ticket behavior, expand the same pattern into event detail pages and additional eligible dates.
