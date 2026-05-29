# Telemetry Plan

This telemetry plan defines the measurement requirements for the RWLV Live Package Pilot. It follows the analytics framework by connecting journey, surface, module, entity, action, signal, funnel, experiment, and insight.

## KPIs

Primary KPIs:

- Package detail view rate from Resorts World Live surfaces.
- Package availability check rate.
- Package booking start rate.
- Package booking completion rate.
- Entertainment-to-room attachment rate.
- Entertainment-to-dining attachment rate.
- Package revenue or value per package visitor, where available.

Secondary KPIs:

- Package module engagement rate.
- Inclusion expansion rate.
- Package comparison interaction rate.
- Save or itinerary action rate.
- VIP inquiry start and completion rate.
- Loyalty sign-in, join, or member offer engagement rate.
- Return visit and recovery conversion rate.

Guardrail KPIs:

- Abandonment after price, restriction, availability, fee, account, or handoff exposure.
- Low-quality CTA clicks with no downstream intent.
- Mobile backtracking, repeated taps, dead clicks, or form errors.
- Package confusion signals from support, feedback, or repeated policy expansion.

## Package Engagement Events

Required event families:

- `package_impression`
- `package_card_engaged`
- `package_detail_viewed`
- `package_inclusion_expanded`
- `package_media_engaged`
- `package_saved`
- `package_shared`
- `package_policy_viewed`
- `package_unavailable_viewed`

Required context:

- Package ID and package name.
- Package category: room + entertainment, dining + entertainment, weekend bundle, VIP, seasonal, loyalty, cross-sell.
- Source surface and source module.
- Event, show, artist, venue, room, dining, loyalty, or resort entities included.
- Journey stage.
- Availability state.
- Price band or pricing posture when appropriate.
- Device class.

## CTA Tracking

Track all material CTAs with:

- CTA text.
- CTA type.
- CTA priority.
- Source page.
- Source module.
- Destination.
- Funnel stage.
- Associated package or entity.
- User state: anonymous, returning, loyalty member, signed in, or unknown.
- Result: destination reached, handoff started, error, unavailable, abandoned, completed.

Priority CTA events:

- `cta_clicked`
- `availability_check_started`
- `booking_started`
- `reservation_started`
- `vip_inquiry_started`
- `loyalty_action_started`
- `compare_started`
- `save_clicked`

## Funnel Tracking

Recommended package funnel:

1. Discovery: package or event surface impression.
2. Orientation: package promise, inclusions, and event context understood.
3. Consideration: detail view, inclusion expansion, price or availability inspection, comparison.
4. Intent: CTA click, availability check, booking start, reservation start, inquiry start, save.
5. Commitment: booking, ticket purchase, restaurant reservation, package purchase, or qualified inquiry.
6. Expansion: dining, room upgrade, VIP add-on, loyalty action, itinerary addition.
7. Recovery: return visit, retargeted session, saved package revisit, abandoned booking completion.

Each funnel report should include entry surface, source module, package identity, primary action, friction point, abandonment stage, and downstream conversion.

## Package Comparison Tracking

Track comparison behavior to understand decision confidence:

- `package_compare_started`
- `package_compare_item_added`
- `package_compare_attribute_viewed`
- `package_compare_item_removed`
- `package_compare_selection_made`
- `package_compare_abandoned`

Comparison attributes:

- Event date.
- Room type.
- Dining inclusion.
- VIP access.
- Price band.
- Availability.
- Audience fit.
- Occasion fit.
- Policy or restriction.
- Loyalty eligibility.

## Booking Intent Signals

High-intent signals:

- Date selection or date change.
- Availability check.
- Room pairing selection.
- Dining time selection.
- VIP inquiry start.
- Package save followed by return visit.
- Price detail expansion.
- Policy or restriction view followed by continued progress.
- Loyalty sign-in during package consideration.
- Booking start.

Friction signals:

- Repeated CTA taps without progress.
- Backtracking from price, fees, restrictions, or availability.
- Abandonment after third-party handoff.
- Form errors.
- Unavailable state after date selection.
- Repeated package comparison without selection.
- Mobile exits during date or party-size input.

## Success Measurements

The pilot should be considered successful if it creates measurable learning even before a production redesign. Initial success should be judged by:

- A complete event and funnel map for the proposed package journey.
- A prioritized telemetry backlog for any missing instrumentation.
- A concept scorecard that includes analytics readiness before Figma generation.
- Experiment candidates with clear hypotheses and decision rules.
- A recommendation that distinguishes product opportunity, design direction, measurement needs, and implementation constraints.

## Reporting Questions

- Which entertainment contexts create the strongest package interest?
- Which inclusions create confidence and which create friction?
- Which CTA labels and placements produce qualified intent?
- Where do guests abandon when moving from entertainment to room, dining, VIP, or booking paths?
- Which package concepts improve attachment without increasing confusion?
- Which signals should future AI agents use to recommend package improvements?
