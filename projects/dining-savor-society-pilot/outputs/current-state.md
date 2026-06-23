# Current State

## Evidence Reviewed

Review date: June 23, 2026.

- Project inputs: `pilot-brief.md` and `urls.md`
- Design-system inputs: `design-system/ai-design-kit.md` and `design-system/component-patterns.md`
- [Dining page](https://www.rwlasvegas.com/dining/)
- [Savor Society page](https://www.rwlasvegas.com/experiences/savor-society/)
- [Savor Society press/context page](https://www.rwlasvegas.com/press/resorts-world-las-vegas-introduces-savor-society-a-year-round-culinary-cocktail-collective-welcoming-the-worlds-most-influential-chefs-and-mixologists/)

The live pages were reviewed through their publicly retrievable page structure and content. A rendered browser session did not complete, so exact visual styling, responsive behavior, animation, spatial dimensions, and below-the-fold viewport timing were not verified. The findings below distinguish observed page content from design-system documentation.

## Source Input Summary

The stakeholder request is to include Savor Society on the Dining page. The business question centers on strengthening dining discovery and culinary-programming awareness while maintaining restaurant discovery as the Dining page's primary task.

The source brief defines Savor Society as a year-round culinary and cocktail collective comprising chef collaborations, mixology takeovers, recurring dining experiences, and special food-and-beverage programming. Its dedicated page currently sits under Experiences.

## Current-State Summary

- The Dining page is a broad venue-discovery directory organized around dining categories, filters, restaurant cards, detail links, and reservation actions.
- The Savor Society page is a programming-discovery surface organized around a collective-level introduction, featured or upcoming programming, a mixology series, and ongoing experiences.
- Savor Society is present in the global Experiences navigation but is not present in the Dining submenu or the retrieved Dining page body.
- The two pages share substantial venue subject matter, but they describe different objects: Dining describes places; Savor Society describes programs and experiences hosted by those places.
- The press page provides the clearest formal definition of Savor Society as the resort's signature platform for food-and-beverage programming and supplies dates, cadence, talent, and program context not consistently visible on the dedicated page.
- Existing design-system patterns cover venue discovery, program orientation, event discovery, editorial framing, contextual action, and booking support. The reviewed pages already exhibit partial analogues of several of these patterns.

## Dining Page Overview

The Dining page introduces the resort's breadth of food and beverage with the heading “Take a Worldwide Tour of the Culinary Arts” and states that more than 50 food-and-beverage experiences are available. Its primary content is a categorized venue inventory rather than a calendar, editorial program, or event listing.

The page's retrieved structure combines:

- A global site header and menu.
- A promotional image slider.
- A dining filter interface.
- An introductory Dining label, heading, and descriptive paragraph.
- Sequential restaurant and bar categories.
- Repeated venue summaries with detail and, where available, reservation actions.
- A no-results state tied to filtering.
- A hotel booking module.
- Breadcrumbs and the global footer.

## Current Dining Page Hierarchy

The body hierarchy appears in this order in the retrievable page structure:

1. Promotional slider imagery.
2. Dining controls for date and time, category, and cuisine.
3. Dining introduction.
4. Fine Dining.
5. Casual Dining.
6. Famous Foods.
7. Bars & Lounges.
8. Quick Eats.
9. No-results state for filter combinations with no matches.
10. Hotel booking module.
11. Breadcrumb and footer content.

The category sequence establishes the principal editorial hierarchy. Fine Dining appears first and includes venues such as Stubborn Seed, Kusa Nori, Wally's, ¡VIVA!, Crossroads, Genting Palace, FUHU, Carversteak, Brezza, and Copper Sun. Subsequent sections use the same repeated venue-summary model at much greater volume.

No Savor Society heading, description, event, or body link was found within this Dining-page hierarchy.

## Restaurant Discovery Patterns

### Filters

The discovery controls expose three primary facets:

- Date and time.
- Category: All Restaurants, Bars & Lounges, Casual Dining, Famous Foods, Fine Dining, and Quick Eats.
- Cuisine: All Cuisine plus American, Asian, British, Bubble Tea, Cakes & Confections, Chinese, Italian, Japanese, Mexican, Mongolian, Vegan, and Vietnamese.

The interface also includes a “Filter Dining” control and a “Remove Filters” action in the no-results state.

### Category-Led Browsing

The same category taxonomy appears in two places:

- Global Dining submenu links: Fine Dining, Casual Dining, Famous Foods, Bars-Lounges, Quick Eats, and Chef Collection.
- Dining-page body sections: Fine Dining, Casual Dining, Famous Foods, Bars & Lounges, and Quick Eats.

Chef Collection is present in navigation but was not observed as a retrieved body section. Conversely, the body is dominated by full venue inventories grouped under the other category labels.

### Venue Summaries

The repeated discovery unit contains:

- Venue name.
- Short description focused on cuisine, atmosphere, format, or location.
- “Learn More” link to a venue detail page when available.
- “Reservations Book Now” or equivalent external SevenRooms action when available.

Not every venue exposes both actions. Some entries have only a detail link; several bars and quick-eat entries have no visible reservation action in the retrieved structure.

### Repeated and Cross-Listed Venues

Some venues appear in more than one category. Here Kitty Kitty, Famous Foods Center Bar, and RedTail, for example, appear in Famous Foods and Bars & Lounges. This indicates that the current directory supports cross-listing by venue characteristics rather than a strictly exclusive taxonomy.

### Conversion Context

Restaurant discovery and restaurant reservation are paired at the venue level. Hotel booking remains a separate global and lower-page conversion path. The page therefore carries two action systems: dining-specific venue actions and resort-wide room-booking actions.

## Dining Page CTA Inventory

| CTA or control | Context | Destination or behavior | Observed intent |
| --- | --- | --- | --- |
| Book Now / Book | Global header and booking access | Resorts World reservations | Hotel booking |
| Resort Calendar | Global utility navigation | Resort calendar | Cross-property event discovery |
| Fine Dining, Casual Dining, Famous Foods, Bars-Lounges, Quick Eats, Chef Collection | Dining submenu | Dining category destinations | Category navigation |
| Pick Date/Time | Dining filter | Date and time selection | Dining availability or relevance filtering |
| Category | Dining filter | Category selection | Venue narrowing |
| Cuisine | Dining filter | Cuisine selection | Venue narrowing |
| Filter Dining | Dining filter | Applies current dining criteria | Results refinement |
| Learn More | Venue summaries | Internal venue detail pages | Venue evaluation |
| Reservations Book Now / Book Now | Eligible venue summaries | Primarily SevenRooms | Restaurant reservation |
| Remove Filters | No-results state | Clears active criteria | Discovery recovery |
| Check Rates / Update | Lower hotel booking module | Hotel booking flow | Room booking |

The most repeated on-page CTAs are “Learn More” and restaurant-reservation actions. Their labels are generic, with intent clarified mainly by the card context and reservation eyebrow text.

## Existing Savor Society Visibility

Savor Society is visible in the global navigation under Experiences. It is listed alongside World Soccer Tournament, Resorts World Live, 4th of July, Club 66 VIP Lounge, The Royal Pour, and Retail.

Within the Dining navigation and page body:

- Savor Society is not listed in the Dining submenu.
- Savor Society is not named in the Dining-page introduction.
- No Savor Society body module or link was found.
- No dated culinary-programming section was found.
- Restaurant cards do not identify participation in Savor Society.

Current visibility from the Dining page therefore depends on opening the separate Experiences menu and selecting Savor Society. The global Resort Calendar is another event-oriented route, but no direct Savor Society relationship was established in the reviewed Dining content.

## Navigation Placement

Dining and Experiences are sibling top-level navigation categories.

The Dining submenu is venue- and category-oriented. Its labels describe meal format, service style, or a chef-focused collection. The Experiences submenu mixes campaigns, programs, venues, seasonal content, and retail. Savor Society is placed only in this latter submenu.

The Savor Society page itself carries an “Experiences” eyebrow before the page title, reinforcing its current classification. Its breadcrumb is Home > Savor Society; the retrieved breadcrumb does not expose Experiences or Dining as an intermediate level.

The global menus on both reviewed pages expose the same Dining and Experiences structures. No contextual navigation between the Dining body and the Savor Society body was observed.

## Savor Society Page Overview

The page begins with the Experiences label and the Savor Society title. Its opening copy describes an “ever-evolving collective” involving world-renowned chefs, mixologists, exclusive collaborations, and weekly rituals. It also invites guests to join a list for event previews, priority reservations, and members-only experiences; the associated content requires JavaScript and was not available in the retrieved page body.

The retrieved page hierarchy is:

1. Savor Society introduction and list invitation.
2. A dated Kusa Nori dining experience with price and reservation action.
3. Chef collaboration content featuring Jason Atherton at Kusa Nori and Stubborn Seed.
4. Marcus Samuelsson content tied to Streetbird.
5. Savor Society Mixology Series.
6. Mixology programming at Allē Lounge on 66 and Carversteak.
7. Ongoing Experiences.
8. The Royal Pour at Crockfords Las Vegas.
9. Weekly wine tasting and charcuterie board-making at Wally's.
10. Viva La Vida Latin Night at ¡VIVA!.
11. Sunset Sips at Allē Lounge on 66.
12. Hotel booking module, breadcrumb, and footer.

### Savor Society Content Patterns

The page uses several recurring content structures:

- Program or talent label paired with a venue heading.
- Editorial description.
- Dated-event details when available.
- Price or availability language on the reservable Kusa Nori event.
- Image-carousel controls marked “Previous” and “Next.”
- Expanded and collapsed copy through “Read more” and “Read less.”
- External reservation action for a specific event.
- Internal “Learn More” links for some ongoing experiences.

Dates and CTAs are not consistently present across every listed item. Several collaboration and mixology entries provide narrative context without a visible action in the retrieved structure.

## Savor Society CTA Inventory

| CTA or control | Context | Destination or behavior | Observed intent |
| --- | --- | --- | --- |
| Join the list invitation | Introductory copy | JavaScript-dependent content not retrievable | Membership/list acquisition |
| Reserve Your Seat | Dated Kusa Nori event | SevenRooms | Event reservation |
| Read more / Read less | Chef collaboration copy | Expands or collapses content | Editorial detail |
| Previous / Next | Program imagery | Carousel navigation | Media browsing |
| Learn More | Ongoing experiences | Internal experience or venue pages | Experience evaluation |
| Book Now / Book | Global and hotel-booking areas | Resorts World reservations | Hotel booking |
| Check Rates / Update | Lower hotel booking module | Hotel booking flow | Room booking |

## Savor Society Press/Context Page

The press page is dated May 4, 2026 and formally defines Savor Society as:

- A year-round culinary and cocktail collective.
- An active calendar of collaboration dinners, visiting-chef experiences, mixology residencies, and recurring weekly events.
- Resorts World Las Vegas's signature platform for food-and-beverage programming.
- A structure combining marquee collaborations with weekly and recurring experiences.

The article supplies more explicit program architecture than the dedicated Savor Society page. It organizes content into upcoming programming, the Mixology Series, and ongoing weekly events. It also includes specific dates, recurring schedules, prices, participating talent, and venue context.

The press article names Kusa Nori, Stubborn Seed, Streetbird, Allē Lounge on 66, Crockfords Las Vegas, Wally's, ¡VIVA!, and other resort entities. The dedicated page uses many of the same relationships. The press page functions as editorial and organizational context, while the Savor Society page functions as the guest-facing program surface.

No direct body link from the Savor Society page to this press article was observed. The only press reference found on the Savor Society page was the global footer link to the Press Room.

## Content Relationship Between Dining and Experiences

### Shared Subject Matter

The following Savor Society host venues or venue relationships are also represented within Dining discovery:

| Savor Society content | Dining-page relationship |
| --- | --- |
| Kusa Nori | Fine Dining venue with detail and reservation actions |
| Stubborn Seed | Fine Dining venue with detail and reservation actions |
| Wally's | Fine Dining venue with detail and reservation actions |
| ¡VIVA! | Fine Dining venue with detail and reservation actions |
| Carversteak | Fine Dining venue with detail and reservation actions |
| Streetbird | Famous Foods venue with a detail action |
| Allē Lounge on 66 | Bars & Lounges venue with detail and reservation actions |
| Crockfords Las Vegas / The Royal Pour | The Royal Pour is classified under Experiences navigation; Crockfords is a hotel identity rather than a Dining category entry |

### Different Primary Objects

The Dining page's primary object is the venue. It answers what places are available, what type of dining they provide, and whether a guest can learn more or reserve.

The Savor Society page's primary object is the program or experience. It answers what is happening, which chef, mixologist, ritual, or collaboration is involved, and which resort venue hosts it.

The press page's primary object is the initiative itself. It explains what Savor Society is, how its program is structured, and why the resort created it.

### Current Connection Model

The current connection between the two categories is indirect:

- Shared venue names create semantic overlap.
- Global navigation exposes both Dining and Experiences as sibling categories.
- Savor Society links outward to some host-venue or experience pages.
- Dining venue entries do not identify their Savor Society programs.
- The Dining body does not link to the Savor Society program surface.

This creates a one-way relationship in the reviewed body content: Savor Society contextualizes programming through dining venues, while Dining presents those venues without Savor Society context.

## Existing Component Patterns Relevant to Savor Society

The design-system library identifies patterns by journey role rather than fixed visual form. The following documented patterns align with content already observed across the reviewed pages; this is a pattern inventory, not a placement or design recommendation.

| Documented pattern | Defined role | Current page evidence |
| --- | --- | --- |
| Experience Hero | Arrival and primary orientation | Dining has a promotional slider and category introduction; Savor Society has a program-level introduction |
| Editorial Feature | Story-led experience framing | Savor Society uses editorial program and talent descriptions; Dining uses category introductions |
| Venue Orientation Feature | Clarifies a venue or named program relationship | Savor Society repeatedly pairs a program or talent label with its host venue |
| Event Bridge | Connects program context to a specific event action | The dated Kusa Nori entry connects event detail to “Reserve Your Seat” |
| Event Card | Supports event scanning and action | Savor Society entries contain event-like titles, venue labels, descriptions, dates on some items, and actions on some items |
| Venue Card | Supports venue discovery and comparison | Dining's repeated venue summaries contain venue name, description, detail action, and optional reservation action |
| CTA Block | Focused action after context | “Reserve Your Seat” follows event detail, price, and availability context |
| Booking Bar | Persistent or contextual booking support | Global and lower-page hotel booking controls appear on all reviewed page types |
| Page Anchor Navigation | In-page orientation and wayfinding | Defined in the design system; no page-anchor navigation was observed on Dining or Savor Society |
| Content Proof Module | Governed evidence adjacent to a claim | The press page contains attributed executive context and program specifics; no press-proof module was observed on the two guest-facing pages |
| FAQ / Support Continuity | Late-stage uncertainty reduction | Defined in the design system; no topic-specific FAQ was observed on Dining or Savor Society |
| Social Proof Layer | Governed external or social context | Defined in the design system; no Savor Society social-proof layer was observed |

The design kit also documents behaviors visible in the current surfaces: editorial hierarchy, contextual CTAs, category grouping, clear action intent where reservation language is present, and continuity with broader resort booking. Exact production component anatomy, tokens, breakpoints, and responsive rules remain unconfirmed in the supplied design-system inputs.

## Current-State Gaps Against the Stakeholder Request

- Savor Society has no retrieved body presence on the Dining page.
- The Dining submenu does not include Savor Society.
- Dining venue summaries do not expose current Savor Society participation.
- Dining discovery is not connected to dated chef collaborations, mixology takeovers, or recurring Savor Society experiences.
- Savor Society content is organized under Experiences even though its host venues substantially overlap the Dining directory.
- The dedicated Savor Society page mixes dated events, undated collaborations, series, and recurring experiences with inconsistent date and CTA availability.
- The press page contains clearer program taxonomy and scheduling context than the dedicated page, but no direct body connection between those pages was observed.
- No supplied analytics establish baseline Dining behavior, Savor Society awareness, cross-page traffic, or CTA engagement.

## Measurement-Relevant Observations

- Dining has distinct filter, venue-detail, and restaurant-reservation interactions that represent core restaurant-discovery behavior.
- Savor Society has distinct list acquisition, event reservation, content expansion, carousel, and ongoing-experience interactions.
- Global hotel-booking actions appear across both page types and are separate from dining or program engagement.
- Current body-level cross-navigation between Dining and Savor Society was not observed, so no dedicated cross-category action is available for separate measurement in the reviewed structure.
- Shared venue names create a potential attribution ambiguity if analytics report only destination-page traffic without recording source module or action intent.

## Evidence Gaps And Open Unknowns

- Exact rendered layout, spacing, imagery prominence, breakpoint behavior, and component dimensions.
- Whether the Dining date/time filter reflects real-time availability, open hours, or another filtering rule.
- Whether “Chef Collection” maps to an unobserved body state, separate page, or filtered view.
- The rendered behavior and fields of the JavaScript-dependent Savor Society list form.
- Whether undated Savor Society entries receive dates or actions through client-side rendering not captured in retrieval.
- Content ownership and update cadence for Dining, Savor Society, press, and individual venue pages.
- Stability of individual event URLs and whether dated Savor Society events have internal detail pages.
- Existing analytics events, baselines, channel attribution, and cross-domain tracking for SevenRooms.
- Accessibility and keyboard behavior of filters, sliders, expandable text, and booking controls in the rendered experience.
