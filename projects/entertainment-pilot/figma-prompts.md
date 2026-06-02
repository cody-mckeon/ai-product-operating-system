# Figma Prompts

## Evidence Basis

This prompt portfolio uses `concept-evaluation.md` as the primary source of
truth. Supporting evidence comes from `generated-concepts.md`,
`recommendation.md`, `opportunities.md`, `current-state.md`,
`component-inventory.md`, and the current-state screenshot inventory.

Prompts are generated only for Tier 1 concepts and documented Figma
Exploration Candidates:

- CON-01: Entertainment Trip Context
- CON-03: Action Confidence Guide
- CON-05: Entertainment Journey Continuity

CON-02 and CON-04 are not included because they were not selected for the first
design exploration set in `concept-evaluation.md`.

These prompts are design exploration briefs for Figma Make. They do not create
designs, wireframes, implementation requirements, engineering requirements, or
new concepts.

## Concept ID

CON-01

## Concept Name

Entertainment Trip Context

## Exploration Type

Context

This concept is classified as Context because it helps guests understand the
relationship between entertainment interest, event timing, venue information,
global resort categories, and broader visit considerations. It should not be
treated as Value Communication unless specific package, loyalty, offer, or
benefit claims are validated.

## Design Objective

Explore how entertainment interest can be framed as part of a broader Resorts
World visit while keeping event discovery primary and avoiding unsupported
package, loyalty, offer, or fulfillment claims.

## Audience

Guests considering an entertainment-led visit to Resorts World Las Vegas,
especially guests evaluating shows, nightclub events, dayclub events, tickets,
tables, venue booking, or broader visit planning.

## Recommendation Alignment

- REC-01: Strengthen the entertainment-to-resort value connection.
- REC-02: Improve date- and mobile-led entertainment discovery.

## Existing Components To Reuse

- `GlobalHeader`
- `EventCard`
- `EventListingControls`
- `FooterDirectory`
- `IntroEditorialBlock`
- `VenueInfoPanel`

## Existing Components To Adapt

- `EventCard` may be adapted for exploration around event-adjacent planning
  context, without adding unverified package or offer claims.
- `IntroEditorialBlock` may be adapted for broader visit framing where the
  source content is validated.
- `VenueInfoPanel` may be adapted to explore relationships between event
  interest and verified resort or venue information.
- `FooterDirectory` may be adapted as a source of existing property category
  pathways, not as proof that cross-sell offers exist.

## Potential New Capability Areas

- Validated entertainment-to-room, dining, offer, loyalty, or adjacent resort
  relationships.
- Confirmed package inventory, offer eligibility, loyalty relevance, and
  fulfillment rules.
- Clear content model for any resort-value information that appears near
  entertainment discovery.
- Business-owned rules for when broader resort context is appropriate.

## Constraints

- Do not invent package availability, bundled value, resort-credit claims,
  dining relationships, loyalty benefits, pricing, eligibility, or fulfillment
  rules.
- Preserve entertainment browsing as the primary guest context.
- Do not imply unsupported room, offer, loyalty, or cross-category value.
- Keep exploration implementation agnostic.
- Do not prescribe layout, component behavior, navigation behavior, or
  engineering requirements.

## Figma Make Prompt

```text
Create a Figma Make design exploration brief for the Resorts World Las Vegas Entertainment page concept "Entertainment Trip Context" (CON-01).

Context:
The current Entertainment page foregrounds event browsing, ticket/table CTAs, venue booking actions, global booking, venue information, FAQ, footer navigation, and loyalty placement in global areas. The evaluated concept asks how entertainment interest can be understood as part of a larger resort visit without turning event discovery into a package or booking flow.

Goal:
Explore ways to help guests understand how an entertainment-led visit could relate to broader Resorts World planning where information is validated. The exploration should learn how much resort context can support entertainment decisions while keeping event discovery central.

Audience:
Guests considering shows, nightclub events, dayclub events, tickets, tables, venue booking, or a broader Resorts World visit around entertainment timing.

Exploration Type:
Context. Explore ways to connect related information and experiences so guests can understand how entertainment interest relates to broader visit considerations. This type should guide the exploration toward relationship-mapping and contextual framing, not package, loyalty, or offer claims.

Design intent:
Explore a high-confidence planning context around event interest. The work should surface relationships among entertainment timing, verified venue information, and broader resort planning categories only where those relationships are documented or clearly marked as placeholders for validation. Encourage multiple exploratory directions rather than one final solution.

Existing component reuse:
Use the documented component inventory as the base. Reuse or adapt `GlobalHeader`, `EventListingControls`, `EventCard`, `IntroEditorialBlock`, `VenueInfoPanel`, and `FooterDirectory` where useful. Treat existing global navigation and footer categories as available pathways, not as evidence of packages, benefits, or offers. Keep CTA patterns consistent with the observed outlined red button and text-link patterns when exploring reusable surfaces.

Constraints:
Do not invent package availability, bundled offers, room availability, dining relationships, loyalty benefits, member eligibility, pricing, resort credits, fulfillment rules, operational promises, or cross-sell inventory. Do not prescribe engineering requirements or implementation behavior. Do not create a final production design; create design exploration directions.

Desired exploration outcomes:
Show how design might explore the connection between entertainment interest and broader visit planning while protecting against unsupported value claims. Include exploration notes that identify what business inputs would need validation before any package, offer, loyalty, dining, room, or fulfillment message could become real.
```

## Concept ID

CON-03

## Concept Name

Action Confidence Guide

## Exploration Type

Confidence

This concept is classified as Confidence because it helps guests understand
actions, choices, requirements, support paths, and decision-making information
before selecting tickets, tables, booking, learn-more, FAQ, chat, phone, VIP,
or support paths.

## Design Objective

Explore how guests can better understand commercial and support paths before
taking action, especially across tickets, tables, booking, learn-more paths,
FAQ, chat, phone support, VIP signals, availability, restrictions, and
fulfillment questions.

## Audience

Guests who are ready to act or need decision support while comparing event
cards, commercial CTAs, venue booking paths, VIP questions, FAQ content, chat,
or phone support.

## Recommendation Alignment

- REC-03: Increase confidence in commercial and operational decisions.
- REC-04: Connect event choices to venue and premium context.

## Existing Components To Reuse

- `EventCard`
- Outlined red button
- Text link with chevron
- `FAQTabsAccordion`
- Contact phone link
- `FloatingChatButton`
- `VenueInfoPanel`
- `FooterDirectory`

## Existing Components To Adapt

- `EventCard` may be adapted to explore clearer distinction among `GET
  TICKETS`, `BUY TICKETS`, `BOOK NOW`, `TABLES`, and `LEARN MORE`.
- `FAQTabsAccordion` may be adapted to explore how decision-critical questions
  relate to commercial paths.
- `FloatingChatButton`, contact phone links, and footer support links may be
  adapted to explore support-path clarity.
- `VenueInfoPanel` may be adapted where venue or premium context affects
  action confidence.

## Potential New Capability Areas

- Validated CTA destination explanations.
- Confirmed ticketing, booking, table reservation, and vendor handoff rules.
- Availability, pricing, restriction, accessibility, VIP, fulfillment, and
  support ownership facts.
- Relationship model between FAQ answers, chat, phone support, and commercial
  actions.

## Constraints

- Do not invent CTA destination rules, vendor handoffs, pricing, availability,
  restrictions, table minimums, VIP eligibility, fulfillment details, or
  support ownership.
- Do not imply actual guest confusion, abandonment, or support volume beyond
  the documented evidence.
- Keep support and commercial confidence exploration implementation agnostic.
- Do not prescribe a particular support, commerce, FAQ, or routing interface.

## Figma Make Prompt

```text
Create a Figma Make design exploration brief for the Resorts World Las Vegas Entertainment page concept "Action Confidence Guide" (CON-03).

Context:
The current Entertainment page shows several guest action paths across event cards, venue modules, FAQ, footer contact links, and floating chat. Visible CTAs include `GET TICKETS`, `BUY TICKETS`, `BOOK NOW`, `TABLES`, and `LEARN MORE`. FAQ rows, chat, phone links, VIP-related questions, and venue booking cues are present, but downstream destinations, expanded answers, availability, restrictions, pricing, fulfillment, and vendor handoffs are not provided.

Goal:
Explore how design can help guests understand which action or support path fits their need before they commit. The exploration should improve confidence around commercial and support decisions without inventing operational facts.

Audience:
Guests comparing entertainment options who may need to choose between tickets, table service, booking, event details, venue information, FAQ answers, chat, or phone support.

Exploration Type:
Confidence. Explore ways to improve understanding and decision confidence so guests can distinguish action types, support paths, and validated decision-critical information before acting.

Design intent:
Explore decision-support patterns that clarify intent, not implementation. Help guests distinguish among action types and understand where validated decision-critical information could appear. Include VIP and premium clarity only as an exploration area that requires verified content.

Existing component reuse:
Use the documented component inventory as the base. Reuse or adapt `EventCard`, outlined red buttons, text links with chevrons, `FAQTabsAccordion`, `FloatingChatButton`, contact phone links, `VenueInfoPanel`, and `FooterDirectory`. Preserve observed CTA language as source material, but explore how reusable surfaces might explain intent and confidence once rules are validated.

Constraints:
Do not invent CTA destination rules, ticketing flows, table reservation rules, booking behavior, vendor handoffs, prices, availability, sold-out states, restrictions, age rules, accessibility details, table minimums, VIP eligibility, fulfillment details, or support ownership. Do not claim that guests are confused or abandoning; the evidence only shows visible ambiguity and missing downstream states. Do not define engineering requirements.

Desired exploration outcomes:
Show several ways design might explore action confidence across event cards, FAQ, venue context, and support paths. Identify which business or operational facts must be validated before any explanatory content, VIP content, availability message, restriction note, or support-routing message can be treated as real.
```

## Concept ID

CON-05

## Concept Name

Entertainment Journey Continuity

## Exploration Type

Continuity

This concept is classified as Continuity because it helps guests maintain
orientation, progress, and understanding across a long entertainment journey
that spans event discovery, timing, venue context, FAQ, support, footer
information, and broader resort context.

## Design Objective

Explore how the long Entertainment page can feel like a connected decision
journey across event discovery, timing, venue context, FAQ, support, and
validated resort-value information without prescribing a navigation or layout
solution.

## Audience

Guests moving through the Entertainment page on desktop or mobile, especially
guests who need to keep orientation across event listings, theatre amenities,
FAQ, venue sections, support paths, footer information, and broader resort
context.

## Recommendation Alignment

- REC-01: Strengthen the entertainment-to-resort value connection.
- REC-02: Improve date- and mobile-led entertainment discovery.
- REC-03: Increase confidence in commercial and operational decisions.
- REC-04: Connect event choices to venue and premium context.

## Existing Components To Reuse

- `GlobalHeader`
- `HeroCarousel`
- `PageAnchorNav`
- `IntroEditorialBlock`
- `EventListingControls`
- `EventCard`
- `Load more`
- `VenueInfoPanel`
- `FAQTabsAccordion`
- `FooterDirectory`
- `FloatingChatButton`

## Existing Components To Adapt

- `PageAnchorNav` may be adapted as an exploration reference for journey
  orientation, especially because mobile equivalent behavior is not confirmed.
- `EventListingControls` and `EventCard` may be adapted to explore continuity
  from discovery into decision support.
- `VenueInfoPanel` and `FAQTabsAccordion` may be adapted to explore how
  lower-page context supports event decisions.
- `FooterDirectory` and `FloatingChatButton` may be adapted to explore
  support and contact continuity.

## Potential New Capability Areas

- Validated mobile continuity behavior and full mobile state coverage.
- Cross-section orientation or state-awareness patterns.
- Confirmed relationships among event browsing, venue context, FAQ, support,
  and broader resort-value information.
- Business priorities for which journey breaks matter most.

## Constraints

- Do not prescribe sticky navigation, anchor behavior, page layout, component
  hierarchy, or mobile interaction patterns.
- Do not invent package, loyalty, venue, FAQ, support, availability, or
  fulfillment capabilities.
- Do not treat missing mobile evidence as proof that controls are absent in all
  states.
- Keep exploration focused on journey continuity rather than final design.

## Figma Make Prompt

```text
Create a Figma Make design exploration brief for the Resorts World Las Vegas Entertainment page concept "Entertainment Journey Continuity" (CON-05).

Context:
The current Entertainment page is a long single-page journey with property navigation, hero carousel, AEG intro, event listing controls, event cards, load more, theatre amenities, FAQ, venue modules, footer links, contact information, and floating chat. Desktop shows an on-page anchor bar for selected sections. The reviewed mobile screenshots do not show an equivalent anchor bar, but the evidence does not prove all mobile states are absent.

Goal:
Explore how guests can stay oriented across the entertainment journey as they move from event discovery to timing, commercial action, venue context, FAQ, support, and broader resort context where validated. The exploration should identify continuity opportunities without prescribing navigation, layout, or interaction behavior.

Audience:
Desktop and mobile guests browsing entertainment options who need to connect event choices with supporting information across a long page.

Exploration Type:
Continuity. Explore ways to maintain orientation and journey flow as guests move across event discovery, supporting information, venue context, FAQ, support paths, and validated resort context.

Design intent:
Explore the Entertainment page as a connected decision journey rather than isolated sections. Help guests understand what information supports the next decision and how event browsing relates to lower-page venue, FAQ, support, and validated resort-value content. Encourage multiple exploratory directions and keep the work at the design-brief level.

Existing component reuse:
Use the documented component inventory as the base. Reuse or adapt `GlobalHeader`, `HeroCarousel`, `PageAnchorNav`, `IntroEditorialBlock`, `EventListingControls`, `EventCard`, `Load more`, `VenueInfoPanel`, `FAQTabsAccordion`, `FooterDirectory`, and `FloatingChatButton`. Treat the desktop anchor bar, mobile sticky header, event cards, FAQ, venue modules, footer accordions, and chat button as existing patterns to learn from, not as fixed implementation requirements.

Constraints:
Do not prescribe sticky navigation, anchor behavior, mobile controls, page layout, component hierarchy, or engineering implementation. Do not invent package value, loyalty relevance, venue benefits, FAQ answers, support routing, availability, restrictions, fulfillment rules, or operational promises. Do not assume missing mobile controls are absent in all states; only the reviewed screenshots are available.

Desired exploration outcomes:
Show how design might explore continuity across the long Entertainment journey while preserving event discovery as the primary context. Identify which mobile states, interaction evidence, business priorities, FAQ content, support rules, venue facts, and resort-value inputs must be validated before a final direction can be chosen.
```

## Figma Exploration Portfolio

| Concept ID | Concept Name | Exploration Type | Audience | Reuse Potential | Design Exploration Goal |
| --- | --- | --- | --- | --- | --- |
| CON-01 | Entertainment Trip Context | Context | Guests considering an entertainment-led Resorts World visit. | Medium: reusable event, navigation, content, venue, and footer components are documented, but resort-value claims require validation. | Explore how entertainment interest can connect to broader visit planning without inventing packages, loyalty benefits, offers, or operational promises. |
| CON-03 | Action Confidence Guide | Confidence | Guests choosing among tickets, tables, booking, learn-more, FAQ, chat, phone, VIP, or support paths. | High: reusable event-card, CTA, FAQ, support, venue, footer, and chat components are documented. | Explore how design can clarify action and support confidence using only validated commercial and operational facts. |
| CON-05 | Entertainment Journey Continuity | Continuity | Desktop and mobile guests moving through the long Entertainment page. | High: reusable navigation, hero, listing, card, venue, FAQ, footer, and chat components are documented. | Explore how the page can feel like a connected decision journey across discovery, venue context, FAQ, support, and validated resort-value information. |

## Missing Inputs And Limitations

- No pilot brief, business goals, analytics context, known organizational
  priorities, behavioral analytics, conversion data, support data, scroll-depth
  data, or guest research were provided.
- No downstream booking, ticketing, table reservation, event detail, checkout,
  opened FAQ, opened chat, opened hamburger menu, date picker, calendar, empty,
  loading, error, or post-load-more states were provided.
- Package inventory, offer rules, loyalty benefits, audience priorities,
  pricing, availability feeds, inventory rules, VIP eligibility, fulfillment
  rules, support ownership, accessibility details, and operational policy
  details were not provided.
- Mobile screenshots do not prove absence of controls across the entire mobile
  experience; they only show what was visible in the reviewed captures.
- `test.png` is present in the project but documented as a 1-byte placeholder
  with no usable image data.
