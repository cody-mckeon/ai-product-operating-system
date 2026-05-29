# Generated Concepts

All concepts below use existing components only. None requires a new package builder, new custom module, or new interaction pattern. Each concept assumes stakeholder validation for eligibility, inventory, terms, tracking, and destination URLs.

## Evidence Note

New operational evidence changes the package framing:

- Resorts World Live packages are date-specific and promotion-specific.
- The package path is Artist -> Package Link -> Booking Engine (IBE) -> Arrival/Departure Dates Preloaded -> Promotion Preselected -> Room Inventory Displayed.
- The package is therefore primarily date-centric and booking-centric, not primarily artist-centric.
- Concepts should prioritize surfaces that can drive guests into a preloaded booking engine flow with the right stay dates, promotion, and inventory context already applied.

The requested screenshot directories were not present in this checkout:

- `screenshots/current-state/`
- `screenshots/existing-components/`

The concepts therefore use the documented current-state inventory and inferred reusable components: hero module, feature or promo card, event card, card rail/grid, promo banner, CTA button pair, rich text/details block, related content module, offer tile, and accordion/details pattern.

## Concept 1: Weekend Concert Escape

### Summary

Repurpose an existing feature or promo card, supported by a related content rail, to frame a concert as the anchor for a full weekend at Resorts World Las Vegas.

### Target Guest

Out-of-town guests or regional drive-market visitors who are deciding whether a concert is worth turning into a one- or two-night resort stay.

### Package Promise

"Make the concert your weekend" with a clear path from show interest to room planning, optional dining, and post-show resort experiences.

### Existing Components

- Feature card or promo card for the primary package.
- Existing image treatment for artist, venue, room, or resort lifestyle imagery.
- Existing CTA button pair.
- Related content rail or grid for dining, nightlife, and room upgrade paths.
- Existing terms/detail link or accordion for inclusions and restrictions.

### Placement

Below the hero or immediately after a featured event module on Resorts World Live. A supporting related rail can appear below event details or after the event listing.

### CTA Strategy

- Primary: "Check weekend availability."
- Secondary: "Buy concert tickets."
- Supporting card CTAs: "Explore rooms," "Reserve dinner," and "View nightlife."
- Detail link: "Weekend package details."

### Operational Assumptions

- The package can route to an existing offer, booking, or campaign URL.
- Ticket purchase may remain a separate flow if room and ticket inventory cannot be transacted together.
- Copy must clearly state whether tickets are included, reserved separately, or subject to availability.
- Dining and nightlife recommendations can be curated manually by event, venue, or showtime.
- Blackout dates, minimum stays, and event eligibility must be validated before launch.

### Measurement Intent

Track package impression, feature card engagement, primary and secondary CTA clicks, package detail views, inclusion expansion, room availability checks, booking starts, ticket-only fallback clicks, related rail clicks, dining reservation starts, and downstream entertainment-to-room attachment.

### Risks

- Weekend language may imply bundled availability if rooms and tickets are actually purchased separately.
- A broad weekend promise can become too generic unless tied to a specific concert, date range, or residency.
- Dining and nightlife recommendations may create operational friction if times do not align with show schedules.

## Concept 2: Stay + Show Package

### Summary

Use an existing event card CTA, offer tile, or feature card to present a date-specific Stay + Show package that routes directly into the booking engine with arrival/departure dates preloaded, the promotion preselected, and eligible room inventory displayed.

### Target Guest

Guests comparing specific show dates who want the simplest path from a lineup card or promoted event into a stay offer for that exact concert window.

### Package Promise

"Stay steps from the show" with the booking flow already scoped to the event dates and package promotion, reducing the work required to find eligible inventory.

### Existing Components

- Offer tile or feature card.
- Existing image treatment.
- Existing CTA button pair.
- Existing rich text/details block for promotion terms and stay-date requirements.
- Existing accordion or terms module for restrictions.
- Event card badge or metadata line for eligible shows.

### Placement

Primary placement on eligible lineup cards as a "Stay + Show" CTA next to the ticket path. Secondary placement can appear in an enhanced Concert Weekend Stay module near featured or high-demand dates.

### CTA Strategy

- Primary: "Check stay + show rates."
- Secondary: "Buy tickets only."
- Event-card secondary CTA: "Stay + Show."
- Badge: "Stay package available."
- Detail link: "Package terms."

### Operational Assumptions

- Eligible packages are manually configured by show date, arrival/departure date, and promotion code for the first release.
- The package link routes to the existing IBE with dates preloaded and the promotion preselected.
- The experience can distinguish room inventory tied to the promotion from ticket purchase, if tickets remain a separate flow.
- Room rates, promotion rules, fees, taxes, cancellation terms, and ticketing language are reviewed by revenue, ticketing, legal, and operations.
- Event-card copy has enough mobile space for a short badge or secondary CTA.

### Measurement Intent

Track package impressions by source module, package CTA clicks by event date, promotion handoff clicks, booking-engine arrivals with dates/promotion present, room inventory views, booking starts, package attach rate, ticket-only fallback clicks, and ticket CTA impact as a guardrail.

### Risks

- "Package" may overpromise if copy implies a bundled room + ticket checkout when the operational flow is a preloaded room promotion.
- Added event-card messaging could crowd mobile cards or compete with the primary ticket CTA.
- Downstream attribution may be incomplete if ticketing or booking hands off to third-party systems.

## Concept 3: Date Night Experience

### Summary

Repurpose an existing promo card plus related content rail to position select shows as an easy date night with room, dinner, and entertainment paths kept close together.

### Target Guest

Couples and local or regional guests planning a special night, anniversary, birthday, proposal weekend, or elevated evening out.

### Package Promise

"Plan the whole night around the show" with simple next steps for tickets, dinner, an overnight stay, and optional upgrades.

### Existing Components

- Promo card or offer tile for the date-night package.
- Existing restaurant/nightlife/room cards in a related content rail.
- Existing CTA button pair.
- Existing rich text block for occasion-focused copy.
- Existing accordion/details block for timing, inclusions, and restrictions.

### Placement

Near the selected event detail CTA area or below a featured event module. A "Complete the night" rail can follow the package card with dining, lounge, and room options.

### CTA Strategy

- Primary: "Plan date night."
- Secondary: "Buy show tickets."
- Supporting CTAs: "Reserve dinner," "Explore rooms," and "View lounges."
- Detail link: "Date night details."

### Operational Assumptions

- Dining destinations and reservation windows can be curated for show timing.
- The package does not guarantee dining availability unless inventory is explicitly held.
- Room stay, dining, and ticket actions may route to separate existing destinations.
- Copy avoids promising romance, exclusivity, upgrades, or special treatment unless validated.
- The component supports concise occasion copy without adding new layout behavior.

### Measurement Intent

Track package impression, package card engagement, primary CTA clicks, ticket-only clicks, dining card clicks, reservation starts, room exploration, inclusion expansion, policy views, save or return behavior, and attachment between entertainment, dining, and room booking paths.

### Risks

- The concept can feel generic if dining and lounge recommendations are not curated by venue, time, or occasion.
- Too many add-on paths may dilute the core show decision.
- Reservation unavailability after a package click could create disappointment if constraints are not visible early.

## Concept 4: Friends Getaway Package

### Summary

Use an existing card rail or promo module to present a group-oriented entertainment weekend that connects the show with rooms, dining, nightlife, and optional VIP inquiry.

### Target Guest

Small groups planning a birthday trip, reunion, bachelor or bachelorette-adjacent weekend, or shared Las Vegas getaway around a concert or residency.

### Package Promise

"Bring the group together for the show" with a coordinated path to rooms, tickets, dining, nightlife, and optional VIP planning.

### Existing Components

- Card rail or grid for package cards and supporting recommendations.
- Feature card or promo card for the primary group package.
- Existing event card or featured event module for the show anchor.
- Existing restaurant/nightlife/room cards.
- Existing CTA button pair.
- Existing inquiry CTA pattern if available for VIP or group support.
- Existing details/accordion module for group-size, eligibility, and policy notes.

### Placement

Below the event listing as a curated package rail, or on eligible event detail pages after the primary ticket CTA. A page-wide promo banner can point high-level group traffic into the package destination.

### CTA Strategy

- Primary: "Build a group getaway."
- Secondary: "Buy tickets."
- Supporting CTAs: "Explore group rooms," "Reserve dinner," "View nightlife," and "Request VIP details."
- Detail link: "Group package details."

### Operational Assumptions

- Group framing can be used without requiring a new group booking engine.
- VIP inquiries route to an existing form, phone path, or sales destination.
- Room, dining, and nightlife inventory are subject to availability and may be booked separately.
- Group-size thresholds, deposit requirements, cancellation terms, and age restrictions are validated.
- Package content can be curated for a limited set of high-demand event weekends.

### Measurement Intent

Track package impression, rail engagement, primary CTA clicks, secondary ticket clicks, group-room exploration, dining reservation starts, nightlife clicks, VIP inquiry starts and completions, policy views, availability checks, booking starts, and attachment by party-size signal where available.

### Risks

- Group and VIP language can imply service levels that operations may not be ready to fulfill.
- Multiple CTAs may make the package feel like a directory rather than a curated experience.
- Age, party-size, and venue restrictions must be clear to avoid poor-fit inquiries.

## Concept 5: Featured Artist Package Treatment For Promoted Shows

### Summary

Repurpose the hero or featured event module to create a promoted-show package treatment for select priority dates. The artist can provide the campaign hook, but the package itself should be merchandised as a date-specific Stay + Show booking path.

### Target Guest

Fans of a specific artist, residency, or promoted show date who arrive with high show intent and may be persuaded to book the associated stay window through the preconfigured package link.

### Package Promise

"Make the promoted show a stay" with one package path tied to specific event dates, preloaded arrival/departure dates, a preselected promotion, and available resort inventory.

### Existing Components

- Hero module or featured event module.
- Existing artist/show image treatment.
- Feature card or offer tile for package details.
- Existing CTA button pair.
- Existing event card badge for eligible promoted dates.
- Existing accordion/details block for inclusions, exclusions, and restrictions.
- Related content rail for dining, rooms, nightlife, or VIP.

### Placement

Top of page only when the show is actively promoted as a package campaign, or immediately after the hero when the page needs to preserve a broader Live introduction. Eligible dates in the event grid can include a Stay + Show badge or secondary CTA.

### CTA Strategy

- Primary: "Check stay + show rates."
- Secondary: "Buy tickets."
- Event-card secondary CTA: "Stay + Show."
- Supporting CTAs: "Explore rooms" and "Request VIP details" where operationally valid.
- Detail link: "Package terms."

### Operational Assumptions

- Marketing, entertainment, and legal approve artist name, image, and campaign usage.
- Package eligibility is limited to specific event dates, stay dates, and promotion rules.
- The package link opens the booking engine with arrival/departure dates preloaded, the promotion preselected, and eligible room inventory displayed.
- Ticketing and room inventory rules are validated before copy implies bundled access.
- VIP, meet-and-greet, premium seating, or exclusive access is not mentioned unless explicitly available.
- The page can support campaign-specific tracking parameters and package identifiers.

### Measurement Intent

Track hero/package impressions, media engagement, package CTA clicks, ticket CTA clicks, eligible-date badge impressions, package detail views, promotion handoff clicks, booking-engine arrivals with dates/promotion present, room inventory views, booking starts, VIP inquiry starts where used, package attach rate, and conversion by artist, date, venue, promotion, and source module.

### Risks

- Artist-focused copy has higher approval risk and may need stricter brand, legal, and partner review, so it should be reserved for promoted shows.
- Fans may expect access or perks beyond a room and ticket path if language is not disciplined.
- Limited inventory or date eligibility can cause frustration if unavailable states are not clear.
