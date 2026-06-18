# Current State

## Evidence Reviewed

Project path requested: `projects/entertainment-page-pilot/`

Matching pilot inputs reviewed:

* `projects/entertainment-live-page-pilot/pilot-brief.md`
* `projects/entertainment-live-page-pilot/urls.md`

Live URLs reviewed on June 18, 2026:

* Entertainment page: https://www.rwlasvegas.com/entertainment/
* Resorts World Live page: https://www.rwlasvegas.com/experiences/resorts-world-live/

## Source Input Summary

The pilot brief frames the primary question as:

How should the Entertainment page merchandise Resorts World Live and venue experiences while improving discovery and supporting ticket conversion?

Stakeholder requests captured in the pilot brief:

1. Remove AEG content from Entertainment page.
2. Add AEG logo placement on Entertainment page.
3. Add a new Resorts World Live section after The Theatre section.
4. The Stage at Zouk should be the H2 heading for the Resorts World Live section.
5. Move FAQ to the bottom of the page.
6. Explore social media integrations for all entertainment venues.

Known context captured in the pilot brief:

* Resorts World Live is associated with The Stage at Zouk.
* Resorts World Live should not be treated as a separate venue.

## Entertainment Page Overview

The Entertainment page is a long-form landing and event-discovery page for entertainment at Resorts World Las Vegas. It combines global resort navigation, a promotional hero carousel, in-page anchor navigation, partner/intro content, event discovery controls, an event lineup, Theatre content, FAQ content, venue content, booking widgets, footer navigation, global social links, and chat support.

The page title shown in the browser/source context is `Las Vegas Entertainment: Top Shows & Events at Resorts World`.

## Entertainment Page Information Architecture

Observed page order:

| Order | Page area | Current-state notes |
| --- | --- | --- |
| 1 | Global utility and primary navigation | Includes resort-wide navigation, `Book Now`, `Resort Calendar`, and guest services links. Entertainment is present as a main navigation category. |
| 2 | Hero carousel | Promotional event imagery appears above the page body. Carousel previous/next controls are present. |
| 3 | On-page anchor navigation | `On This Page:` anchors list `Resorts World Theatre`, `Ayu Dayclub`, and `Zouk Nightclub`. Resorts World Live and The Stage at Zouk are not listed in the observed anchor set. |
| 4 | AEG logo and intro area | A visible AEG logo appears before the Entertainment intro. The intro includes `ENTERTAINMENT`, the H2 `CUE THE THRILLS`, and copy focused on Resorts World Theatre and entertainment programming. |
| 5 | Featured/event carousel content | Event cards appear near the top with artist name, venue label, and CTAs. Observed venues include Zouk Nightclub, Ayu Dayclub, The Stage at Zouk, and Rose Rooftop. |
| 6 | Event filters and listing controls | Controls include date range, category, artist, view mode, and list/grid/calendar options. |
| 7 | Event listing | Events are presented with artist/event name, venue, date, imagery, and commercial CTAs. |
| 8 | Resorts World Theatre section | Theatre content appears after the event listing. It includes Theatre positioning, imagery, and venue/amenity details. |
| 9 | Theatre Amenities section | Includes amenity copy, carousel imagery, and partner/amenity logos. |
| 10 | FAQ section | FAQ tabs and question/answer content appear after Theatre Amenities and before the Venues section. |
| 11 | Venues section | Venue content appears after FAQ. Observed venue sections include Ayu Dayclub and Zouk Nightclub. |
| 12 | Booking widget/footer | A booking widget area and the standard Resorts World footer appear below the venue content. |
| 13 | Footer social links and chat | Global social links and chat controls appear in the footer/lower page area. |

## Venue Hierarchy

### Navigation-Level Venue Hierarchy

The global Entertainment submenu lists:

* Resorts World Theatre
* Resorts World Live
* Zouk Nightclub
* Ayu Dayclub
* Dawg House Saloon

The Experiences submenu also includes Resorts World Live.

### On-Page Anchor Hierarchy

The visible `On This Page:` anchor set includes:

* Resorts World Theatre
* Ayu Dayclub
* Zouk Nightclub

Resorts World Live is present in global navigation but is not represented in the observed on-page anchor set. The Stage at Zouk appears as an event venue label in the event listing, but not as a page-level section heading in the observed Entertainment page structure.

### Body Content Venue Hierarchy

Observed body sections prioritize:

1. Resorts World Theatre
2. Theatre Amenities
3. FAQ
4. Venues
5. Ayu Dayclub
6. Zouk Nightclub

The observed Entertainment page does not include a dedicated Resorts World Live section after The Theatre section. The observed page also does not show an H2 section titled `The Stage at Zouk`.

### Event Card Venue Labels

Observed event listing venue labels include:

* Zouk Nightclub
* Ayu Dayclub
* The Stage at Zouk
* Rose Rooftop

The Stage at Zouk appears as a venue/event-location label for select event cards, including events such as Mitchell Tenpenny and Nate Smith. The page evidence supports that The Stage at Zouk is represented at the event-card level, not as a standalone page section.

## CTA Inventory

### Global And Navigation CTAs

| CTA | Location | Destination/type observed |
| --- | --- | --- |
| `Book Now` | Global navigation | Resort booking engine link. |
| `Book` | Mobile/global booking control in page source context | Resort booking action. |
| `Resort Calendar` | Utility/global navigation | Resort calendar navigation. |
| `Guest Services` | Utility/global navigation | Guest services navigation. |
| `Sign In` | Utility/global navigation | Rewards sign-in. |

### Entertainment Event CTAs

| CTA | Current usage | Destination/type observed |
| --- | --- | --- |
| `Get Tickets` | Event listing cards | Ticketing links; observed examples include `gofevo.com`. |
| `Buy Tickets` | Event cards for select shows/events | Ticketing links; observed examples include `booketing.com` and Zouk Group URLs. |
| `Tables` | Nightclub/dayclub event cards | Table reservation links; observed examples point to `zoukgrouplv.com`. |
| `Learn More` | Select event cards | Event detail or external detail links, depending on card. |
| `Load More` | Event listing | Loads additional event results. |

### Venue And Section CTAs

| CTA | Location | Destination/type observed |
| --- | --- | --- |
| `Book Now` | Ayu Dayclub section | Zouk Group booking/reservation link. |
| `Book Now` | Zouk Nightclub section | Zouk Group booking/reservation link. |
| FAQ category controls | FAQ section | Switches between FAQ categories. |
| FAQ question rows | FAQ section | Expands question/answer content. |
| `Prev Category` / `Next Category` | FAQ section | Moves through FAQ categories. |
| Carousel previous/next controls | Hero, Theatre, venue imagery | Changes carousel content. |

## Existing Merchandising Patterns

### Hero Merchandising

The top of the page uses a large visual carousel to merchandise entertainment programming. The carousel is image-led and event-led, with navigation controls for moving between slides.

### Partner/Intro Merchandising

An AEG logo appears before the main Entertainment intro content. The intro content uses:

* A visible AEG logo placement.
* Eyebrow text `ENTERTAINMENT`.
* H2 `CUE THE THRILLS`.
* Copy focused on Resorts World Theatre and entertainment experiences.

The current intro copy references Resorts World Theatre specifically and frames the entertainment experience through that venue.

### Event Listing Merchandising

The event lineup is the primary commercial merchandising pattern on the Entertainment page. Events are merchandised through:

* Event imagery.
* Artist/event name.
* Venue label.
* Date.
* Ticket CTAs.
* Table CTAs where relevant.
* Learn-more CTAs on select events.
* Date, category, artist, and view-mode filters.

### Theatre Merchandising

The Resorts World Theatre section uses imagery, descriptive copy, and partner/amenity logos to merchandise the venue. Theatre Amenities content continues the venue story with private lounges, special access bars, VIP opportunities, and supporting imagery.

### Venue Merchandising

The Venues section currently merchandises Ayu Dayclub and Zouk Nightclub with:

* Section heading.
* Venue imagery.
* Descriptive venue copy.
* `Book Now` CTAs.
* Image carousel controls.

The observed Venues section does not include Resorts World Live or The Stage at Zouk as a dedicated body section.

### Stay Merchandising

The Entertainment page includes global resort booking entry points and a lower booking widget area. The observed Entertainment page content is primarily ticket/table/event oriented rather than stay-package oriented.

## Resorts World Live Page Overview

The Resorts World Live page is an Experiences page for Resorts World Live. It is accessible from both global Experiences navigation and global Entertainment navigation.

Observed body structure:

| Order | Page area | Current-state notes |
| --- | --- | --- |
| 1 | Global navigation | Resorts World Live appears under Experiences and Entertainment navigation. |
| 2 | Main Resorts World Live content | Page-specific content presents Resorts World Live programming. |
| 3 | `Just Announced` lineup | Lists artists/events with dates and `Secure Tickets` CTAs. |
| 4 | Rose Rooftop Fireworks Viewing | Cross-promotional content with event description and complimentary-ticket CTA. |
| 5 | Concert Weekend Stay | Stay-oriented merchandising across Hilton, Conrad, and Crockfords with `Book Your Stay` CTA. |
| 6 | More Entertainment Awaits | Cross-link to additional shows with `View More Shows` CTA. |
| 7 | Booking widget/footer | Standard booking widget, footer links, global social links, and chat controls. |

## Resorts World Live CTA Inventory

| CTA | Location | Destination/type observed |
| --- | --- | --- |
| `Secure Tickets` | `Just Announced` lineup | Ticketing links; observed examples point to `booketing.com`. |
| `Complimentary Tickets` | Rose Rooftop Fireworks Viewing section | Ticket/action link for the rooftop fireworks viewing offer. |
| `Book Your Stay` | Concert Weekend Stay section | Resort booking engine link. |
| `View More Shows` | More Entertainment Awaits section | Link back to broader entertainment/show browsing. |
| Footer social links | Footer | Global Resorts World social profiles. |
| Chat controls | Lower page/footer area | Opens or closes chat. |

## Resorts World Live And The Stage At Zouk Relationship

The pilot input states that Resorts World Live is associated with The Stage at Zouk and should not be treated as a separate venue.

Observed current state:

* Resorts World Live is represented as a global navigation item and as its own Experiences page.
* The Stage at Zouk appears on the Entertainment page as a venue label for select event cards.
* The Entertainment page does not show a dedicated body section for Resorts World Live.
* The Entertainment page does not show `The Stage at Zouk` as an H2 section heading.
* The Resorts World Live page merchandises a `Just Announced` lineup with `Secure Tickets` CTAs and stay/cross-promotion modules.

## FAQ Placement

The FAQ content currently appears after the Theatre and Theatre Amenities content and before the Venues section on the Entertainment page.

Observed FAQ structure:

* Category tabs: `Shows & Tickets`, `Policies`, `Location & Directions`, `Food & Beverage`, `Accessibility`.
* Question/answer content appears under the active category.
* Examples of visible FAQ topics include ticket purchase, online ticketing, VIP tickets or meet-and-greets, VIP entrance, age restrictions, re-entry, smoking, cancelled/postponed events, prohibited items, ADA parking directions, ADA/info email, and interpreter services.
* FAQ navigation includes `Prev Category` and `Next Category` controls.

Current placement relative to page sections:

1. Event listing.
2. Resorts World Theatre.
3. Theatre Amenities.
4. FAQ.
5. Venues.
6. Footer/booking/footer utilities.

The observed FAQ is not at the bottom of the page. Venue content and footer content appear after FAQ.

## Social Integration Current State

Observed social surfaces:

* The Entertainment page footer includes global social links for Twitter/X, Facebook, Instagram, LinkedIn, and TikTok.
* The Resorts World Live page footer includes the same global social link pattern.
* No page-level venue-specific social feed, embedded social module, artist social module, or venue-specific social CTA was observed in the body content of either reviewed page.
* The observed venue sections for Ayu Dayclub and Zouk Nightclub include booking CTAs but do not show body-level social links or embedded social content.
* The observed event cards include ticket, table, and learn-more CTAs, but do not show social-sharing or venue-social CTAs.

## Social Integration Opportunity Surfaces

Current-state surfaces where social integration could be evaluated later:

* Event cards with artist, venue, and date context.
* Venue sections for Ayu Dayclub and Zouk Nightclub.
* Potential Resorts World Live / The Stage at Zouk section area after The Theatre section.
* Resorts World Live `Just Announced` lineup.
* Resorts World Live cross-promotional modules.
* Footer social links and global social account pattern.

This section documents observable surfaces only and does not define a recommended integration approach.

## Current-State Gaps Against Stakeholder Requests

| Stakeholder request | Current-state observation |
| --- | --- |
| Remove AEG content from Entertainment page. | AEG logo and AEG-associated intro placement are visible near the top of the Entertainment page. FAQ copy also references AEG Presents in the cancellation/postponement answer. |
| Add AEG logo placement on Entertainment page. | AEG logo placement is currently visible before the Entertainment intro content. |
| Add a new Resorts World Live section after The Theatre section. | A dedicated Resorts World Live body section was not observed after The Theatre section. FAQ and Venues content appear later in the page structure. |
| The Stage at Zouk should be the H2 heading for the Resorts World Live section. | `The Stage at Zouk` was observed as an event-card venue label, not as an H2 section heading. |
| Move FAQ to the bottom of the page. | FAQ currently appears before the Venues section and above the footer, not at the bottom of the page content. |
| Explore social media integrations for all entertainment venues. | Global footer social links are present. Venue-level social modules or venue-specific social integrations were not observed in page body content. |

## Current-State Summary

The Entertainment page currently prioritizes event discovery and ticket/table conversion through a hero carousel, event filters, event cards, and venue/theatre content. Resorts World Live is available in global navigation and has its own Experiences page, while The Stage at Zouk appears in the Entertainment event listing as a venue label. The Entertainment page does not currently show a dedicated Resorts World Live body section after The Theatre section, and it does not use `The Stage at Zouk` as an H2 section heading.

FAQ content currently sits between Theatre Amenities and Venues, rather than at the bottom of the page. Social links are present as global footer links on both reviewed pages, but body-level social integrations for individual entertainment venues were not observed.
