# Opportunities

## Evidence Note

This analysis is based on the documented current experience in `current-state.md`, the component inventory in `component-inventory.md`, and the reviewable screenshots in `screenshots/current-state/`.

The evidence does not include opened menus, clicked states, expanded FAQ answers, booking flows, ticket checkout, table reservation flows, event detail pages, analytics implementation, or post-interaction states. Opportunities below are limited to observable gaps, visibility issues, journey breaks, and decision-support possibilities in the provided evidence.

## Opportunity 1

### Name

Package visibility during entertainment discovery

### Observation

The Entertainment page presents event listings, ticket actions, table actions, venue booking actions, and a global room booking action, but no visible package or bundled-stay context appears in the reviewed screenshots.

### Evidence

`desktop-full-page-1.png` and `all-event-lineup.png` show event cards with `GET TICKETS`, `BUY TICKETS`, `BOOK NOW`, `TABLES`, and `LEARN MORE` actions. The global header shows `BOOK NOW`, and the mobile header shows `BOOK`. `current-state.md` documents no visible package, stay-and-show, room-plus-event, dining, or resort-credit package module.

### User Impact

Guests who are considering an entertainment-led trip may not see whether events can connect to rooms, dining, VIP access, or other resort experiences during the moment they are browsing event options.

### Business Impact

The organization may have limited visible exposure for package attach, room-night demand, and cross-category merchandising within a high-intent entertainment browsing surface.

### Opportunity Statement

There is an opportunity to make package availability, package relevance, or bundled entertainment value more visible within the observed entertainment discovery journey.

### Dependencies

Package inventory, offer eligibility, date-specific availability, operational fulfillment rules, and downstream booking capabilities were not provided.

## Opportunity 2

### Name

Fixed-date event decision support

### Observation

The page exposes a broad date range from `JUN 1, 2026 - DEC 12, 2026`, while visible event cards show individual event dates. The screenshots do not show supporting context for guests who arrive with fixed travel dates, multi-night stays, or date constraints.

### Evidence

`desktop-full-page-1.png`, `all-event-lineup.png`, and `mobile-full-page-1.png` show the date range control above event cards. Visible cards include dates from June 5 through July 3. `current-state.md` notes that the date picker open state, calendar view behavior, and post-filter behavior are not provided.

### User Impact

Guests with fixed travel windows may need to manually scan event cards and infer which entertainment options fit their stay or planned visit dates.

### Business Impact

Date-constrained guests may be harder to guide toward relevant events, room demand, table opportunities, or venue choices when the visible experience does not expose fit against travel timing.

### Opportunity Statement

There is an opportunity around helping guests understand entertainment relevance by date, stay window, or timing constraints.

### Dependencies

The evidence does not show the open date picker, calendar view, empty results, or any downstream behavior after changing dates.

## Opportunity 3

### Name

Mobile discovery controls visibility

### Observation

Desktop screenshots show category filters and list/grid/calendar view controls above the event grid, while the provided mobile screenshots show the date range and event cards but do not show category or view controls in the captured mobile flow.

### Evidence

`desktop-full-page-1.png` and `all-event-lineup.png` show `ALL`, `DAYCLUB`, `NIGHTCLUB`, `SHOWS`, plus list, grid, and calendar icons. `mobile-full-page-1.png` shows the date range block followed directly by event cards. `component-inventory.md` states that mobile category and view controls are not visible in the reviewed mobile crop.

### User Impact

Mobile guests may have less immediately visible support for narrowing entertainment by category or changing how results are viewed.

### Business Impact

Reduced mobile filter visibility may limit discovery efficiency for guests looking for a specific entertainment type, potentially affecting qualified engagement with tickets, tables, and venue content.

### Opportunity Statement

There is an opportunity to examine mobile visibility of entertainment filtering, category discovery, and browsing-mode support.

### Dependencies

The evidence does not include all mobile scroll positions, opened controls, or alternate mobile filter states.

## Opportunity 4

### Name

CTA intent clarity across event cards

### Observation

Event cards use several commercial CTA labels across similar card layouts, including `GET TICKETS`, `BUY TICKETS`, `BOOK NOW`, `TABLES`, and `LEARN MORE`. The visible evidence does not explain the distinction among these actions or their downstream destinations.

### Evidence

`all-event-lineup.png` shows most nightclub and dayclub cards with `GET TICKETS` and `TABLES`, theatre cards with `BUY TICKETS` and `LEARN MORE`, and Los Lobos with `BOOK NOW` and `LEARN MORE`. `current-state.md` notes that downstream destinations are not shown for these CTAs.

### User Impact

Guests may need to infer whether actions lead to ticketing, table reservations, venue booking, event details, or another booking path.

### Business Impact

Ambiguity among commercial paths may affect intent quality, routing confidence, and the ability to connect the right guest to the right transaction or inquiry path.

### Opportunity Statement

There is an opportunity to clarify commercial intent across event-level actions and distinguish ticket, table, booking, and detail paths.

### Dependencies

CTA destinations, vendor handoffs, booking rules, and event-type logic were not captured in the screenshots.

## Opportunity 5

### Name

Cross-sell exposure beyond tickets and tables

### Observation

The event lineup foregrounds ticket and table actions, while broader resort categories such as rooms, dining, wellness, offers, and loyalty appear primarily in global navigation or footer areas rather than within the event browsing context.

### Evidence

`desktop-full-page-1.png` shows global navigation links for `ROOMS`, `OFFERS`, `DINING`, `EXPERIENCES`, `WELLNESS`, and `GENTING REWARDS`, while event cards focus on tickets, tables, booking, and learn-more actions. `component-inventory.md` identifies event cards as the core reusable commerce/listing component and does not document visible cross-sell content inside the event lineup.

### User Impact

Guests browsing entertainment may not see related resort possibilities at the point where event interest is already established.

### Business Impact

The organization may have limited visible connection between entertainment demand and adjacent revenue areas such as rooms, dining, loyalty, wellness, or other experiences.

### Opportunity Statement

There is an opportunity to expose cross-category value around entertainment interest without assuming a guest will leave the event browsing context through global navigation.

### Dependencies

No business-goal file, package rules, cross-sell inventory, audience segmentation, or performance data was provided for this project.

## Opportunity 6

### Name

Loyalty engagement in entertainment context

### Observation

Genting Rewards appears in the header and footer, but the reviewed entertainment modules do not show loyalty-specific relevance, benefits, eligibility, or member context near event, venue, ticket, or table decisions.

### Evidence

`desktop-full-page-1.png` shows `GENTING REWARDS` in primary navigation and a Genting Rewards mark in the utility/header area. `mobile-full-page-3.png` shows partner and loyalty marks near the footer. Event cards, venue sections, and FAQ screenshots do not show loyalty-specific content.

### User Impact

Guests who are loyalty members, or who might become members, may not understand whether loyalty status matters to entertainment planning, access, booking, or support.

### Business Impact

Entertainment demand may be underused as a visible loyalty engagement moment if loyalty value is only represented as navigation or brand presence.

### Opportunity Statement

There is an opportunity to identify whether loyalty relevance has a stronger role during entertainment browsing and decision-making.

### Dependencies

Loyalty benefits, eligibility rules, signed-in state, member pricing, access rules, and account flows were not provided.

## Opportunity 7

### Name

Venue orientation within event selection

### Observation

Venue information appears lower on the page in theatre and venue modules, while event cards higher on the page use venue badges with limited context.

### Evidence

`all-event-lineup.png` shows event cards with venue badges such as `ZOUK`, `ZOUK NIGHTCLUB`, `AYU DAYCLUB`, and `RESORTS WORLD THEATRE`. `desktop-theatre.png` and `desktop-venue-section.png` show richer venue context lower on the page, including descriptions, imagery, amenities, and venue-level `BOOK NOW` actions.

### User Impact

Guests comparing events may not have venue-level context at the moment they are choosing between cards, especially if they have not reached the lower venue sections.

### Business Impact

Venue differentiation, premium positioning, and venue-specific value may be separated from the higher-intent event selection area.

### Opportunity Statement

There is an opportunity around connecting event choices with venue understanding and venue-specific decision context.

### Dependencies

The evidence does not include event detail pages, clicked venue badges, anchor usage, or whether users commonly scroll to venue sections before choosing an event.

## Opportunity 8

### Name

VIP and premium access clarity

### Observation

VIP-related language appears in theatre amenities and FAQ questions, but the visible experience does not show a clear resolved path or visible explanatory content for VIP opportunities in the provided static states.

### Evidence

`desktop-theatre.png` and `mobile-full-page-2.png` include theatre amenities copy mentioning private lounges, special access bars, and VIP opportunities. `desktop-faq.png` and `mobile-full-page-2.png` show FAQ questions including `WHERE CAN I BUY VIP TICKETS OR MEET AND GREETS?` and `WHERE IS THE "VIP ENTRANCE"?`. Expanded FAQ answers are not provided.

### User Impact

Guests interested in premium access may encounter signals that VIP options exist without visible detail in the captured state.

### Business Impact

Premium-access demand may be present but not fully explained or connected in the observable page state, which may affect qualified inquiry or purchase confidence.

### Opportunity Statement

There is an opportunity to clarify the presence, meaning, and discoverability of VIP-related entertainment opportunities.

### Dependencies

VIP inventory, access rules, event eligibility, FAQ answer content, and premium sales paths were not included in the evidence.

## Opportunity 9

### Name

FAQ answer and support-path visibility

### Observation

The FAQ section presents ticketing, policy, directions, food and beverage, and accessibility categories with closed accordion rows. The screenshots do not show expanded answers or the relationship between FAQ content, chat, phone support, and commercial actions.

### Evidence

`desktop-faq.png` shows `SHOWS & TICKETS`, `POLICIES`, `LOCATION & DIRECTIONS`, `FOOD & BEVERAGE`, and `ACCESSIBILITY` tabs, with closed questions about ticket purchase, onsite box office, VIP tickets, VIP entrance, and third-party sellers. `mobile-full-page-2.png` and `mobile-full-page-3.png` show the mobile FAQ area and footer contact links. The floating chat button is visible across desktop and mobile.

### User Impact

Guests with unresolved questions may need to choose among closed FAQ rows, category navigation, chat, phone numbers, or footer links without seeing how these support paths relate.

### Business Impact

Unresolved decision blockers around tickets, policies, location, food and beverage, accessibility, or VIP access may affect transaction confidence and support demand.

### Opportunity Statement

There is an opportunity to understand and improve visibility of decision-critical support content in the entertainment journey.

### Dependencies

FAQ expanded states, chat opened state, support transcripts, call behavior, and downstream ticketing help content were not provided.

## Opportunity 10

### Name

Long-page navigation continuity

### Observation

The desktop page includes an on-page anchor bar with three section links, while mobile screenshots do not show the anchor bar. The page continues through event browsing, load more, theatre amenities, FAQ, venues, and footer content.

### Evidence

`desktop-hero-anchor.png` and `desktop-full-page-1.png` show `ON THIS PAGE:` links for `RESORTS WORLD THEATRE`, `AYU DAYCLUB`, and `ZOUK NIGHTCLUB`. `mobile-full-page-1.png`, `mobile-full-page-2.png`, and `mobile-full-page-3.png` do not show an equivalent anchor bar. `current-state.md` documents a long single-page experience combining marketing orientation, event discovery, venue education, FAQ support, and footer navigation.

### User Impact

Guests on mobile may have fewer visible cues for moving between major sections of the page or returning to content that supports a decision.

### Business Impact

Important lower-page content such as theatre amenities, FAQ, and venue modules may be less discoverable for guests who do not continue scrolling through the full mobile page.

### Opportunity Statement

There is an opportunity to improve continuity and discoverability across major sections of the long entertainment page, especially on mobile.

### Dependencies

The evidence does not include hamburger menu contents, sticky in-page navigation behavior, scroll-depth data, or mobile interaction recordings.

## Opportunity 11

### Name

Measurement visibility for high-intent actions

### Observation

The screenshots expose many measurable surfaces and actions, but no analytics implementation, event naming, reporting ownership, or measurement behavior is visible in the provided evidence.

### Evidence

`current-state.md` identifies measurable surfaces such as hero carousel navigation, anchor clicks, date range changes, category filters, view toggles, event card CTAs, `LOAD MORE`, venue `BOOK NOW`, FAQ tabs/questions, footer links, phone taps, and chat opens. The same file states that no tracking implementation or analytics event names are visible in the screenshots.

### User Impact

Guest behavior across browsing, hesitation, support-seeking, and commercial intent may be difficult to interpret from the provided evidence alone.

### Business Impact

Without visible measurement context, the organization may have limited ability to evaluate which entertainment surfaces create qualified intent, confusion, abandonment, or cross-sell potential.

### Opportunity Statement

There is an opportunity to identify where measurement visibility is needed to understand guest intent and friction across the entertainment journey.

### Dependencies

Analytics implementation, data layer details, dashboards, reporting needs, and behavioral data were not provided.

## Opportunity 12

### Name

Operational transparency for availability and fulfillment

### Observation

The page shows event dates and commercial actions but does not visibly show availability state, price context, capacity, restrictions, sold-out status, table minimums, age restrictions, access limitations, or operational fulfillment details in the reviewed screenshots.

### Evidence

`all-event-lineup.png` and `mobile-full-page-1.png` show event image, title, venue badge, date, and CTA labels. `current-state.md` documents missing downstream booking, ticketing, table, event detail, empty, loading, and error states. FAQ categories suggest policies and accessibility information exist, but expanded answers are not shown.

### User Impact

Guests may need to leave the visible listing state to understand whether an event, ticket, table, or venue experience is available and suitable for their needs.

### Business Impact

Limited visible operational context may affect qualified conversion, support volume, and guest confidence around entertainment purchases or reservations.

### Opportunity Statement

There is an opportunity to make operational truths around availability, eligibility, restrictions, and fulfillment easier to discover in the entertainment journey.

### Dependencies

Availability feeds, pricing, inventory rules, ticket vendor behavior, table reservation requirements, policy content, and accessibility details were not provided.
