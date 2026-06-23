# Opportunity Analysis

## Evidence Basis

This analysis evaluates the stakeholder request as an opportunity space. It does not prescribe a solution, concept, design, experiment, implementation, priority, or telemetry plan.

Evidence reviewed:

- `pilot-brief.md`
- `urls.md`
- `outputs/current-state.md`
- `design-system/ai-design-kit.md`
- `design-system/component-patterns.md`
- `design-system/visual-principles.md`
- `design-system/imagery.md`
- `design-system/typography.md`
- [Dining page](https://www.rwlasvegas.com/dining/)
- [Savor Society page](https://www.rwlasvegas.com/experiences/savor-society/)
- [Savor Society press/context page](https://www.rwlasvegas.com/press/resorts-world-las-vegas-introduces-savor-society-a-year-round-culinary-cocktail-collective-welcoming-the-worlds-most-influential-chefs-and-mixologists/)

The Opportunity Analysis Agent instructions list `component-inventory.md` as a required input, but that file was not supplied or found in the project. No current-state screenshots were available. Component observations are therefore limited to the documented page structures in `outputs/current-state.md` and the reusable patterns named in the design-system inputs. Exact visual prominence, responsive behavior, production component anatomy, imagery availability, and mobile experience remain unverified.

## Opportunity 1

### Name

Dining-to-programming discoverability

### Observation

The Dining page is a high-volume venue-discovery surface, but Savor Society has no observed presence in its body. Guests can encounter Savor Society only through the separate Experiences menu while on the Dining page.

### Evidence

The current-state review found no Savor Society heading, description, event, venue association, or body link in the Dining hierarchy. Dining moves from promotional content and filters into Fine Dining, Casual Dining, Famous Foods, Bars & Lounges, and Quick Eats. Savor Society appears only in the global Experiences submenu.

### User Impact

Guests who begin with a broad dining need may not learn that chef collaborations, mixology takeovers, and recurring culinary experiences are available. Discovering programming currently depends on knowing to leave the Dining category and inspect Experiences.

### Business Impact

The current separation limits exposure for a year-round food-and-beverage platform among guests already demonstrating dining interest. It also limits the connection between venue discovery and awareness of time-sensitive or repeat-visit programming.

### Opportunity Statement

There is an opportunity to make the existence and dining relevance of Savor Society discoverable within the Dining journey while retaining the page's venue-discovery purpose.

### Dependencies

- Baseline Dining traffic, task mix, and Savor Society awareness are unknown.
- Exact rendered hierarchy and first-viewport prominence were not verified.
- The desired degree of relationship between Dining and Experiences has not been defined.
- Content ownership across the two categories is unknown.

## Opportunity 2

### Name

Dining submenu relationship clarity

### Observation

Dining and Experiences are sibling top-level navigation categories. The Dining submenu describes venue categories, while Savor Society is classified only within Experiences despite being a food-and-beverage program hosted largely by dining venues.

### Evidence

The Dining submenu exposes Fine Dining, Casual Dining, Famous Foods, Bars-Lounges, Quick Eats, and Chef Collection. The Experiences submenu includes Savor Society alongside campaigns, programs, venues, seasonal content, and retail. No contextual relationship between the two submenu structures was observed.

### User Impact

Guests may interpret the navigation taxonomy as meaning that Dining contains restaurants while culinary programming belongs elsewhere. The distinction may be difficult to infer for a program that spans chefs, bars, restaurants, and recurring dining experiences.

### Business Impact

The navigation model may constrain cross-category discovery and weaken recognition of Savor Society as part of the resort's broader dining proposition.

### Opportunity Statement

There is an opportunity to clarify the navigational relationship among dining venues, culinary programming, and the Experiences classification without making Savor Society appear to be a restaurant category or standalone venue.

### Dependencies

- Global navigation ownership and information-architecture constraints are unknown.
- “Chef Collection” is present in navigation but its destination or body relationship was not verified.
- Search behavior and navigation usage data were not supplied.
- The intended permanence of Savor Society within Experiences is unknown.

## Opportunity 3

### Name

Venue-to-program relationship visibility

### Observation

Dining and Savor Society share many venue names, but the relationship is visible only from the Savor Society side. Dining presents venues without identifying their chef collaborations, mixology programming, or recurring Savor Society experiences.

### Evidence

Kusa Nori, Stubborn Seed, Wally's, ¡VIVA!, Carversteak, Streetbird, and Allē Lounge on 66 appear in both the Dining and Savor Society content sets. On Dining, they are venue summaries with detail and optional reservation actions. On Savor Society, they function as hosts for named programs or events.

### User Impact

Guests evaluating a restaurant cannot tell from the Dining surface whether that venue participates in relevant current or recurring programming. Guests interested in a specific program may also lack clear continuity back to the venue's broader dining context.

### Business Impact

The missing relationship reduces cross-discovery between established venue demand and Savor Society programming. It also leaves the program's resort-wide breadth implicit rather than legible through its participating venues.

### Opportunity Statement

There is an opportunity to make the relationship between host venues and Savor Society programming understandable across both venue-led and program-led discovery journeys.

### Dependencies

- Participation rules and the authoritative mapping of venues to programs are unknown.
- Program availability, dates, and host venues may change frequently.
- Stable event URLs were not supplied.
- Governance is needed to avoid implying that Savor Society is a venue or that every venue participates continuously.

## Opportunity 4

### Name

Restaurant discovery continuity

### Observation

The Dining page's primary utility is restaurant discovery through date/time, category, and cuisine filters followed by categorized venue summaries. The stakeholder request introduces a program-level object into a venue-led journey.

### Evidence

Dining's hierarchy begins with promotional content and filters, then presents five large venue categories. Venue-level “Learn More” and restaurant-reservation actions repeat throughout. The design-system guidance emphasizes preserving working discovery paths, maintaining stable page rhythm, and avoiding competing primary actions or equal-weight content.

### User Impact

Guests seeking a restaurant may experience added cognitive load if programming content competes with filters, category scanning, venue comparison, or reservation actions. Conversely, a relationship that is too subtle may remain undiscoverable.

### Business Impact

Disruption to core restaurant discovery could weaken venue-detail and reservation activity. Insufficient prominence could fail to improve Savor Society awareness, leaving the stakeholder need unresolved.

### Opportunity Statement

There is an opportunity to establish a clear hierarchy between the Dining page's primary venue-discovery task and the secondary discovery of culinary programming.

### Dependencies

- The relative business value of restaurant discovery, restaurant reservations, event reservations, and list signup has not been supplied.
- Existing scroll, filter, venue-click, and reservation behavior is unknown.
- Exact page density and responsive stacking were not verified.
- No evidence establishes guest tolerance for additional content within the current flow.

## Opportunity 5

### Name

Culinary programming orientation and findability

### Observation

The Savor Society page combines an umbrella-program introduction, a dated dining experience, chef collaborations, a mixology series, and ongoing experiences. Dates, prices, cadence, and actions are not consistently present across entries.

### Evidence

The retrieved hierarchy includes a July 10 Kusa Nori event with price and “Reserve Your Seat,” undated chef and mixology features, and recurring experiences such as The Royal Pour, weekly wine tasting, Viva La Vida Latin Night, and Sunset Sips. The press page describes a clearer architecture of upcoming programming, a mixology series, and ongoing weekly events.

### User Impact

Guests may struggle to distinguish what is upcoming, recurring, informational, reservable, or still awaiting details. That ambiguity can make it harder to determine whether a program is relevant to their visit dates or planning stage.

### Business Impact

Inconsistent program structure can weaken qualified engagement and make the breadth and year-round cadence of Savor Society less evident. It can also create avoidable friction before reservation or return-visit planning.

### Opportunity Statement

There is an opportunity to improve understanding of Savor Society's program types, timing, venue relationships, and action availability across culinary-programming discovery.

### Dependencies

- The authoritative event calendar and publishing cadence are unknown.
- It is unclear which entries are editorial previews versus bookable experiences.
- Client-side content may expose details not captured in the current-state retrieval.
- Date, price, availability, and cancellation governance have not been documented.

## Opportunity 6

### Name

Program and reservation CTA intent

### Observation

The reviewed ecosystem contains several distinct action intents: venue detail, restaurant reservation, event reservation, list signup, content expansion, image browsing, and hotel booking. Some CTAs are specific, while others rely on surrounding context for meaning.

### Evidence

Dining repeats “Learn More” and “Reservations Book Now.” Savor Society uses “Reserve Your Seat,” “Learn More,” “Read more,” and a list invitation, alongside global hotel “Book Now” actions. Several Savor Society entries have no visible next action. The typography and design-kit inputs call for labels that distinguish reservation, booking, detail, and discovery intent.

### User Impact

Guests moving between venue and program content may not always know whether an action opens venue information, begins a restaurant reservation, begins an event reservation, expands editorial copy, or enters a hotel-booking flow.

### Business Impact

Ambiguous or inconsistent intent can reduce qualified conversion, create destination surprise, and blur the distinction between restaurant demand, event demand, and room-booking demand.

### Opportunity Statement

There is an opportunity to make action intent and the transition from discovery to restaurant or event reservation consistently understandable across Dining and Savor Society.

### Dependencies

- CTA copy and component standards in production were not inventoried.
- SevenRooms handoff behavior and cross-domain continuity were not reviewed.
- Not all programs may be reservable or have stable destinations.
- The relative prominence of global hotel booking versus dining actions was not visually verified.

## Opportunity 7

### Name

Event reservation decision support

### Observation

Restaurant reservations are closely paired with eligible Dining venue summaries, but event reservation support varies across Savor Society programming. Only the observed Kusa Nori event combines a date, description, price, limited-seating language, and a reservation action.

### Evidence

Dining venue entries frequently connect evaluation to SevenRooms. Savor Society includes multiple collaborations and recurring experiences, but dates and direct actions are inconsistent. The component library defines event discovery as requiring title, date or timing, venue, and clear action intent, with stale event data identified as a risk.

### User Impact

Guests may be interested in a program but lack enough operational information to decide whether it fits their trip, budget, venue preference, or readiness to reserve.

### Business Impact

Gaps between editorial interest and actionable program details may limit qualified event reservations and increase reliance on guests finding information through separate venue pages or other channels.

### Opportunity Statement

There is an opportunity to strengthen continuity between culinary-programming interest, decision-support information, and the appropriate reservation path.

### Dependencies

- Required event details and publishing thresholds are undefined.
- Availability, pricing, eligibility, and terms may be controlled by different systems or teams.
- Stable program-detail destinations are not confirmed.
- Operational ownership of sold-out, postponed, or expired states is unknown.

## Opportunity 8

### Name

Savor Society list value and access

### Observation

The Savor Society introduction invites guests to join a list for first looks, priority reservations, and members-only experiences, but the related content is JavaScript-dependent and was not available in the current-state retrieval. No list opportunity was observed on Dining.

### Evidence

The Savor Society page contains the list value proposition before its programming content. The current-state review could not verify fields, consent language, interaction behavior, confirmation state, or whether the invitation resolves to a form. Dining contains venue and reservation CTAs but no observed Savor Society acquisition path.

### User Impact

Guests who are interested in future or unavailable programs may lack a verified way to maintain continuity when immediate reservation is not possible. The value and requirements of joining cannot be fully assessed from the available evidence.

### Business Impact

The list represents a potential relationship beyond a single visit or event, supporting awareness of an evolving year-round program. Its current discoverability, accessibility, and conversion behavior are unknown.

### Opportunity Statement

There is an opportunity to understand and clarify the role of list signup within Savor Society discovery, especially for guests whose interest does not align with an immediately bookable event.

### Dependencies

- Form fields, consent requirements, privacy language, and confirmation behavior require review.
- The meaning and operational fulfillment of “priority reservations” and “members-only experiences” require governance.
- List ownership, segmentation, messaging cadence, and suppression rules are unknown.
- Rendered accessibility and mobile behavior were not verified.

## Opportunity 9

### Name

Cross-page journey continuity

### Observation

The reviewed body content creates a one-way relationship: Savor Society names and contextualizes dining venues, while Dining does not identify Savor Society programming. No contextual body navigation between the two page types was observed.

### Evidence

The Savor Society page links some ongoing experiences to internal detail pages and associates programs with host venues. Dining venue summaries do not expose current programming or the Savor Society umbrella. The Savor Society breadcrumb is Home > Savor Society and does not express an intermediate Dining or Experiences relationship.

### User Impact

Guests may lose context when moving between a program and its host venue or may never discover the program from a venue. The current information architecture does not visibly support reversible exploration between these two mental models.

### Business Impact

Weak cross-page continuity can limit cross-sell exposure, reduce exploration across the resort ecosystem, and make it difficult for the two surfaces to reinforce each other's roles.

### Opportunity Statement

There is an opportunity to clarify the reciprocal relationship between venue-led Dining discovery and program-led Savor Society discovery.

### Dependencies

- Canonical destinations for programs, events, and venues must be established.
- Breadcrumb and contextual-navigation capabilities are unknown.
- Ownership of cross-link maintenance is unknown.
- Guest entry points and back-navigation behavior have not been analyzed.

## Opportunity 10

### Name

Press context as governed program evidence

### Observation

The press page provides the clearest formal description of Savor Society's purpose, program taxonomy, talent, dates, schedules, and resort-wide role, but no direct body relationship from the guest-facing Savor Society page was observed.

### Evidence

The press article defines Savor Society as the resort's signature platform for food-and-beverage programming and organizes it into upcoming collaborations, the Mixology Series, and ongoing weekly events. The guest-facing page uses related content but presents less consistent taxonomy and operational detail. The design system identifies governed press context as a possible form of content proof while warning against disconnected or ungoverned proof.

### User Impact

Guests may receive an evocative introduction without the same degree of structural clarity available in the press material. Press-oriented language and long-form detail, however, may not directly match guest planning needs.

### Business Impact

The press page establishes authoritative positioning and program breadth, but inconsistency between press and guest-facing content can create messaging drift, freshness risk, or conflicting operational details.

### Opportunity Statement

There is an opportunity to define the press page's role as a governed source of program context without conflating media relations content with the guest discovery and conversion journey.

### Dependencies

- The source of truth for program copy, dates, claims, and talent credentials is unknown.
- Rights and approval rules for press imagery, quotations, partner names, and accolades are unknown.
- Press and guest-content update workflows may differ.
- The article's long-form structure may contain details unsuitable for direct reuse without editorial governance.

## Opportunity 11

### Name

Reusable component-role alignment

### Observation

The current surfaces already contain partial analogues of documented design-system patterns, but no production component inventory was supplied. The relevant content needs span orientation, editorial framing, venue discovery, event discovery, action continuity, and booking support.

### Evidence

The design system documents Experience Hero, Editorial Feature, Venue Orientation Feature, Event Bridge, Event Card, Venue Card, CTA Block, Booking Bar, Page Anchor Navigation, and Content Proof Module roles. Current state identifies venue-summary patterns on Dining, program-and-venue pairings on Savor Society, and a dated event-to-reservation relationship for Kusa Nori. It also finds no observed page anchors or topic-specific support content.

### User Impact

Consistent pattern roles can help guests distinguish arrival, discovery, evaluation, and decision content. Inconsistent or equal-weight treatment could make venue listings, program context, and commercial actions harder to scan.

### Business Impact

Reusable roles can support cross-property consistency and reduce one-off treatment of a program that spans multiple venues. Without a production inventory, reuse feasibility and current implementation constraints remain unclear.

### Opportunity Statement

There is an opportunity to map the Savor Society information needs to established reusable component roles while preserving the Dining page's existing hierarchy and avoiding a pilot-specific pattern by default.

### Dependencies

- A production `component-inventory.md` is missing.
- Exact component anatomy, tokens, responsive behavior, and engineering constraints are unconfirmed.
- The availability and governance status of food, venue, chef, mixologist, and experience imagery are unknown.
- Semantic heading and CTA behavior require rendered accessibility review.

## Opportunity 12

### Name

Programming content governance and freshness

### Observation

Savor Society is described as ever-evolving and year-round, while its content includes dated events, recurring experiences, undated previews, partner names, talent credentials, prices, and external reservation links. The Dining page is a comparatively stable venue directory.

### Evidence

The current-state review found inconsistent dates and actions across Savor Society entries, no supplied related-event URLs in `urls.md`, and no known ownership or update cadence. The design-system inputs caution against stale events, ungoverned claims, unavailable assets, and imagery that implies inaccurate venue or program relationships.

### User Impact

Stale, incomplete, or conflicting programming details can erode trust and make trip planning harder. Missing status or timing context can also lead guests toward unavailable or irrelevant experiences.

### Business Impact

An evolving program creates ongoing editorial, operational, legal, and reservation-system dependencies. Expanding its visibility increases the number of surfaces on which accuracy and consistency must be maintained.

### Opportunity Statement

There is an opportunity to establish a governable relationship among program data, venue relationships, claims, imagery, status, and reservation destinations before Savor Society gains broader exposure within Dining.

### Dependencies

- Content owners, approvers, service levels, and expiration rules are unknown.
- No canonical event data source or stable related-event URL set was supplied.
- Partner, chef, mixologist, press, and image rights require confirmation.
- Error, sold-out, expired, postponed, and no-current-programming states have not been documented.

## Evidence Limitations

- No production component inventory was available.
- No screenshots or completed rendered-page review were available.
- Mobile layout and interaction behavior were not observed.
- The JavaScript-dependent Savor Society list experience was not verified.
- Analytics, search behavior, navigation usage, reservation completion, and list performance were not supplied.
- Exact typography, spacing, color, breakpoint, and component specifications remain unknown in the provided design-system documents.
- Current event URL stability, content update cadence, and cross-domain reservation behavior remain unknown.
