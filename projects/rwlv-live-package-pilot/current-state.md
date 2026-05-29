# Current State

## Evidence Note

The requested screenshot directories are not present in this checkout:

- `projects/rwlv-live-package-pilot/screenshots/current-state/`
- `projects/rwlv-live-package-pilot/screenshots/existing-components/`

No repository image assets were available during this pass. This analysis is therefore based on the existing project brief, business goals, telemetry plan, and expected Resorts World Live page/component patterns. A screenshot validation pass should confirm exact module order, copy, CTA labels, and mobile behavior before implementation.

## Current Page Module Inventory

Likely current Resorts World Live modules:

| Module | Current role | Package relevance |
| --- | --- | --- |
| Global header and navigation | Orient guests and expose resort-wide paths such as rooms, dining, entertainment, offers, and loyalty. | Packages may be reachable only through generic navigation, not as contextual event merchandising. |
| Entertainment hero | Establish the Live experience, featured show, artist, venue, or campaign. | Strongest high-attention surface for a room + ticket package message. |
| Featured event or promo area | Highlights one or more priority events with imagery and primary ticket CTA. | Can merchandise a stay package adjacent to the event without introducing a new component. |
| Event listing or card grid | Lets guests scan shows, dates, venues, and ticket paths. | Natural place to add package-aware supporting copy, badges, or secondary CTAs. |
| Event detail content | Gives guests show-level context, date, venue, media, and ticket action. | Highest-intent point for "make it a stay" messaging. |
| Calendar, date, or schedule module | Helps users choose an event date. | Package merchandising should follow the date decision because room nights depend on event timing. |
| Promotional or offer card area | Presents resort, ticket, event, or campaign offers. | Best existing pattern for room + ticket package cards if available. |
| Dining, nightlife, or resort cross-link area | Encourages exploration of adjacent resort experiences. | Cross-sell exists as navigation, but likely not as an event-specific package path. |
| Email, loyalty, or membership prompt | Captures returning interest or member engagement. | Can support package recovery and member-aware offer framing. |
| Footer | Utility navigation and legal/support paths. | Low package value except for policy or terms links. |

## Reusable Component Inventory

Available component types inferred from the current page and existing project constraints:

| Component | Existing behavior | Reuse potential |
| --- | --- | --- |
| Hero module | Large image, headline, supporting copy, primary CTA. | Add a package-oriented hero variant using existing text/image/CTA fields. |
| Feature card | Image-led card with title, description, and CTA. | Represent a room + ticket package as one card in an existing promo/card area. |
| Event card | Event image, title, date/venue metadata, ticket CTA. | Add package messaging as secondary metadata or secondary CTA when the event has package relevance. |
| Card grid or rail | Repeated cards for events, offers, or related content. | Show "Stay + Show" package cards without creating a new layout. |
| Promo banner or strip | Short message plus CTA. | Add lightweight package visibility above or below event listings. |
| CTA button pair | Primary and secondary actions. | Keep "Buy Tickets" primary and add "View Room Package" as a contextual secondary action. |
| Rich text/content block | Editorial copy and links. | Explain inclusions, restrictions, and package value without new interaction patterns. |
| Related content module | Links to dining, nightlife, rooms, or offers. | Reframe as "Complete the night" or "Make it a stay" using existing related-card behavior. |
| Offer tile | Promotional title, value statement, terms link, CTA. | Strong fit for packaged room + ticket merchandising if an offer component already exists. |
| Accordion or details block | Expands terms, inclusions, policies, or FAQs. | Useful for package inclusions and constraints, assuming already available. |

## Current Package Merchandising

Package merchandising appears to exist indirectly rather than as a primary Resorts World Live behavior:

- Entertainment pages likely drive to ticket purchase as the main conversion.
- Room booking is likely accessible through global resort navigation or separate room/offers surfaces.
- Dining and nightlife are likely presented as separate resort experiences rather than packaged event add-ons.
- Offers may exist elsewhere, but room + ticket packaging is not clearly represented as a contextual Live-page object.
- Loyalty or email capture can support future recovery, but package engagement is probably not distinguished from generic navigation.

## Where Package Merchandising Is Missing

The largest gaps are at high-intent entertainment decision points:

- Hero: no clear "stay for the show" package promise in the primary attention zone.
- Event cards: likely no visible package marker, package CTA, or room-night framing.
- Date selection: no contextual room package surfaced after an event date is considered.
- Event detail: no compact package card that connects tickets, room nights, dining, and optional upgrades.
- Related content: likely cross-links to resort areas, but not a curated room + ticket path.
- Mobile flow: package consideration may require multiple navigation jumps, losing event context.
- Measurement: package impressions, package detail views, and event-to-room attachment are probably not separated from standard CTA clicks.

## Friction Points

- Guests must assemble the trip themselves: show, room, dining, timing, and policies may live in separate surfaces.
- Ticket purchase and room booking may be split across systems or handoffs, reducing continuity.
- Package value can be unclear if inclusions, exclusions, date logic, and availability are not presented together.
- The primary CTA hierarchy may over-index on tickets, leaving room nights as a separate task.
- Mobile guests may need to backtrack between event details, booking paths, and resort navigation.
- If package terms are hidden or generic, guests may hesitate before clicking.
- Analytics may count curiosity as conversion intent if package-specific engagement is not instrumented.

## Missed Cross-Sell Opportunities

- "Make it a stay" room package near featured events and event details.
- Pre-show dining recommendations tied to venue, showtime, and party type.
- Post-show nightlife or lounge continuation for late events.
- Room upgrades for celebration, VIP, or premium trip occasions.
- Loyalty sign-in or join prompt after package interest, not before value is understood.
- Save or return path for guests who are not ready to book tickets and rooms in one session.
- Seasonal campaign framing around residency weekends, holidays, festivals, and major event dates.

## Strongest Components To Repurpose

1. Feature or promo card: best all-purpose package container with low development risk.
2. Event card: strongest contextual placement because it preserves event browsing behavior.
3. Hero module: highest visibility for a featured package campaign.
4. Related content rail/grid: good for cross-sell without disrupting ticket conversion.
5. Promo banner/strip: fastest way to add package awareness across the page.
6. Accordion/details block: useful for package inclusions and terms if already available.

## Current-State Takeaway

The current experience is likely event-first and ticket-led, which is commercially sensible but underuses entertainment intent as a room-night generator. The lowest-risk path is not a new package builder. It is to reuse existing hero, card, rail, banner, and details components to make room + ticket packages visible at the moments when guests are already choosing a show or date.
