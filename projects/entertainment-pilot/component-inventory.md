# Component Inventory

## Evidence Basis

This inventory is based only on the reviewed screenshots in `projects/entertainment-pilot/screenshots/current-state/`. The file `test.png` is present but unavailable as evidence because it is a 1-byte placeholder with no image data.

Observed device coverage includes desktop and mobile screenshots of the Resorts World Las Vegas Entertainment page. Interaction states are limited to what appears in static screenshots; opened menus, expanded FAQ answers, and downstream booking/ticketing/table flows were not provided.

## Module Inventory

| Module | Type | Observed role | Desktop behavior | Mobile behavior |
| --- | --- | --- | --- | --- |
| Global utility/header | Navigation module | Provides brand, account/utility links, primary section navigation, and global booking CTA. | Two-tier header with logo, utility links, primary nav, active `ENTERTAINMENT`, and `BOOK NOW`. | Compact sticky header with logo, red `BOOK`, and hamburger icon. |
| Hero carousel | Marketing/media module | Promotes featured entertainment events. | Full-width visual carousel with left/right circular controls. | Full-width visual carousel below sticky header with left/right controls. |
| On-page anchor bar | Navigation module | Provides shortcuts to page sections. | `ON THIS PAGE:` plus three anchor links. | Not visible in provided mobile screenshots. |
| AEG intro | Content module | Frames the entertainment page and introduces AEG-presented programming. | Horizontal layout: AEG logo at left, eyebrow/headline/copy at right. | Stacked layout: AEG logo above content. |
| Event listing controls | Functional listing module | Lets user define date/category/view for event browsing. | Date range, category filters, list/grid/calendar icons. | Date range visible; category/view controls not visible in reviewed mobile crop. |
| Event lineup grid/list | Commerce/listing module | Displays event choices and event-level CTAs. | Four-column card grid. | Single-column stacked cards. |
| Load more | Pagination module | Extends the visible event list. | Centered outlined red button with divider lines. | Wide outlined red button. |
| Resorts World Theatre | Venue information module | Describes theatre positioning, capacity, design, and audio partners. | Wide theatre image background with overlaid white info panel. | Not fully visible as a distinct module in mobile screenshots; theatre amenities are visible. |
| Theatre Amenities | Content/media module | Describes private lounges, special access bars, VIP opportunities, and shows partner logos. | Text/logos left, image carousel right. | Image appears first, then heading/copy/logos below. |
| FAQ | Support module | Organizes common questions by category. | Horizontal tabs, accordion question rows, prev/next category controls. | Horizontal tab strip overflows/crops; question rows stack; prev/next controls visible lower in page. |
| Venues | Venue merchandising module | Presents Ayu Dayclub and Zouk Nightclub with images, copy, and booking CTAs. | Alternating two-column image/text rows. | Not fully visible in mobile screenshots. |
| Footer breadcrumb | Navigation context module | Reasserts current section before footer links. | Small Resorts World icon and `ENTERTAINMENT`. | Same breadcrumb appears above mobile footer accordions. |
| Footer link directory | Footer module | Provides property, information, and Hilton link groups. | Expanded multi-column link list. | Collapsed accordion groups with plus icons. |
| Contact/legal footer | Footer module | Provides address, phone contacts, social links, partner marks, copyright. | Multi-column contact layout with social icons and partner logos. | Stacked contact details and social/partner logos. |
| Floating chat | Utility/support module | Offers persistent support access. | Red circular chat button fixed at lower right. | Red circular chat button overlays lower-right content. |

## Reusable Component Inventory

| Component | Content fields | Behavior observed | CTA pattern | Reuse notes |
| --- | --- | --- | --- | --- |
| Brand logo lockup | Resorts World Las Vegas mark | Links implied by header/footer placement; destination not shown. | Logo itself may act as home link, unconfirmed. | Reused in desktop header, mobile header, footer contact area. |
| Primary nav item | Text label; active indicator | Active page shown with red underline under `ENTERTAINMENT`. | Text navigation. | Reused across desktop global nav. |
| Utility nav link | Text label; optional dropdown indicator | `GUEST SERVICES` shows a dropdown caret. | Text navigation. | Desktop-only in reviewed evidence. |
| Global booking button | `BOOK NOW` or `BOOK` | Prominent red booking action; downstream not shown. | Desktop outlined red; mobile solid red block. | Appears in global nav and mobile sticky header. |
| Carousel arrow | Directional chevron inside white circle | Indicates previous/next carousel movement. | Icon-only utility control. | Reused in hero, theatre amenities image, and venue images. |
| Anchor link | Section label | Jumps to visible page sections on desktop. | Text link in anchor bar. | Desktop on-page navigation pattern. |
| Eyebrow heading | Uppercase red label such as `ENTERTAINMENT` | Static text. | None. | Used in AEG intro. |
| Large section heading | Uppercase/letter-spaced heading | Static hierarchy marker. | None. | Used for `CUE THE THRILLS`, `THEATRE AMENITIES`, `VENUES`, `RESORTS WORLD THEATRE`. |
| Date range selector | Date text | Suggests date filtering; open state not observed. | Clickable control implied. | Used above event list. |
| Category filter | `ALL`, `DAYCLUB`, `NIGHTCLUB`, `SHOWS` | Active state visible for `ALL`. | Text filter. | Desktop event-list control. |
| View toggle icon | List, grid, calendar icons | Grid active state appears red. | Icon button. | Desktop event-list control. |
| Event card | Image, title, venue badge, calendar icon, date, CTAs | Presents individual event and action choices. | Varies by event: `GET TICKETS`, `BUY TICKETS`, `BOOK NOW`, `TABLES`, `LEARN MORE`. | Core reusable commerce/listing component. |
| Venue badge | Venue/category text in red pill | Labels event location/category. | None. | Reused inside event cards; labels include `ZOUK`, `ZOUK NIGHTCLUB`, `AYU DAYCLUB`, `RESORTS WORLD THEATRE`. |
| Calendar/date row | Calendar icon plus date | Communicates event date. | None. | Reused in event cards. |
| Outlined red button | Uppercase label | Primary or secondary action depending on context. | `GET TICKETS`, `BUY TICKETS`, `BOOK NOW`, `TABLES`, `LOAD MORE`. | Dominant CTA primitive across event and venue modules. |
| Text link with chevron | Label and right chevron | Secondary detail path. | `LEARN MORE`. | Used on select event cards. |
| FAQ tab | Category label; active underline | Switches category; only active category content observed. | Text tab. | Used in FAQ module. |
| FAQ accordion row | Question text in bordered box | Implies expand/collapse; expanded answer not observed. | Full-row click target. | Used for question inventory. |
| FAQ category pager | `PREV CATEGORY`, `NEXT CATEGORY`; arrows | Moves among FAQ categories; clicked state not observed. | Text plus arrow. | Used below question list. |
| Mobile footer accordion row | Group title and plus icon | Implies expand/collapse; expanded state not observed. | Full-row click target. | Mobile footer link grouping. |
| Footer link | Text label | Navigates to supporting property/information/Hilton pages. | Text link. | Desktop expanded footer columns; mobile hidden behind accordions. |
| Contact phone link | Phone label/number and hours | Phone numbers appear as red underlined links in mobile and desktop footer. | Tap/click-to-call implied. | Contact support component. |
| Social icon link | Social platform icon | Links implied; destinations not shown. | Icon-only link. | Footer social row. |
| Floating chat button | Red circular messenger/chat icon | Persistent utility; open state not observed. | Icon-only support CTA. | Appears across desktop and mobile. |

## Event Card Variants

| Variant | Observed examples | Content/CTA behavior |
| --- | --- | --- |
| Ticket + table card | The Pit with Bolo, RL Grime, Ayu Afters, Wax Motif, Duke Dumont, Noizu, Ray Volpe, Special Guest, Snakehips, Ian Asher, James Hype, San Pacho, Meduza | Shows `GET TICKETS` and `TABLES` as paired outlined red actions. |
| Buy tickets + learn more card | Louis Tomlinson with The Aces, Mitchell Tenpenny | Shows `BUY TICKETS` plus a secondary `LEARN MORE` text link. |
| Book now + learn more card | Los Lobos | Shows `BOOK NOW` plus `LEARN MORE`. |
| Mobile two-column content card | Los Lobos and nightclub/dayclub cards in mobile screenshots | Image occupies left side/top-left, text and venue/date to right, CTAs expand across card bottom. |
| Desktop grid card | All visible event cards in `all-event-lineup.png` | Image on top, centered title/badge/date, CTA stack beneath. |

## CTA Behavior By Component

| Component | CTA labels | Observed behavior/destination confidence |
| --- | --- | --- |
| Global header | `BOOK NOW`, `BOOK` | Booking intent is clear from label; destination not visible. |
| Hero carousel | Left/right arrows | Carousel movement implied; alternate slides observed across screenshots but no clicked transition captured. |
| Anchor bar | `RESORTS WORLD THEATRE`, `AYU DAYCLUB`, `ZOUK NIGHTCLUB` | In-page destinations are visible in the same page evidence. |
| Event listing controls | Date range, category labels, view icons | Filtering/view behavior implied; only active/default states observed. |
| Event cards | `GET TICKETS`, `BUY TICKETS`, `BOOK NOW`, `TABLES`, `LEARN MORE` | Commercial/detail intent is visible; downstream destination not captured. |
| Load more | `LOAD MORE` | List expansion intent is visible; loaded state not captured. |
| Venue sections | `BOOK NOW` | Venue booking intent is visible; destination not captured. |
| FAQ | Tabs, question rows, prev/next category | Category switching and accordion expansion implied; only `SHOWS & TICKETS` closed-question state observed. |
| Footer | Link lists, phone numbers, social icons | Link/contact intent is visible; specific destinations not captured. |
| Floating chat | Chat icon | Support/chat open intent is visible; opened state not captured. |

## Content Patterns

| Pattern | Observed details |
| --- | --- |
| Brand voice | Entertainment-focused language: `CUE THE THRILLS`, “unrivaled entertainment experiences,” “superstar engagements,” “must-see events.” |
| Typography | Uppercase, letter-spaced section headings; bold uppercase event titles; red uppercase CTA labels. |
| Color system | White/black/gray base with Resorts World red used for active states, badges, CTAs, links, and chat. |
| Event metadata | Event cards consistently include title, venue/category badge, calendar icon, and date. |
| Venue descriptions | Venue modules use heading, paragraph copy, supporting imagery, and booking CTA. |
| Support content | FAQ questions are written as direct user questions in uppercase. |
| Footer content | Desktop exposes link lists; mobile defers link lists into collapsed groups and foregrounds contact details lower on the page. |

## Responsive And State Variations

| Component/module | Desktop variation | Mobile variation |
| --- | --- | --- |
| Header | Full utility + primary nav with active section and outlined booking CTA. | Sticky compact logo, solid `BOOK`, hamburger. |
| AEG intro | Logo and copy aligned horizontally. | Logo and copy stacked vertically with larger readable text. |
| Event listing | Controls and four-column card grid. | Large date block and single-column event cards; filters/view icons not visible in evidence. |
| Event card CTAs | Buttons stack vertically inside desktop cards. | Buttons may sit side-by-side across the bottom of mobile cards when two primary actions are present. |
| Theatre amenities | Text/logos left, image right. | Image appears above text/logos. |
| FAQ | Full tab row visible; question rows compact. | Tab strip crops/scrolls horizontally; question rows become large touch targets. |
| Footer | Expanded columns and contact rows. | Collapsed accordion groups, then stacked contact details. |
| Chat | Fixed lower-right over page. | Fixed lower-right, overlays content and footer area. |

## Observed Missing States

The following states are not present in the provided screenshots and should not be treated as confirmed:

- Opened hamburger menu.
- Opened booking engine.
- Ticket purchase flow.
- Table reservation flow.
- Event detail page reached from `LEARN MORE`.
- Expanded FAQ answer.
- Non-active FAQ category content.
- Date picker open state.
- Event list view.
- Calendar view.
- Empty, loading, or error states for event results.
- Post-`LOAD MORE` expanded event results.
- Opened chat/messenger panel.

## Downstream Reuse Notes

Use consistent names for downstream work:

| Recommended component name | Applies to |
| --- | --- |
| `GlobalHeader` | Desktop utility/header and mobile sticky header variants |
| `HeroCarousel` | Promotional entertainment hero |
| `PageAnchorNav` | `ON THIS PAGE` desktop anchor bar |
| `IntroEditorialBlock` | AEG Presents intro |
| `EventListingControls` | Date/category/view controls |
| `EventCard` | All event card variants |
| `VenueInfoPanel` | Resorts World Theatre and Venues text/image sections |
| `ImageCarouselFrame` | Venue/theatre images with circular arrow control |
| `FAQTabsAccordion` | FAQ tabs, question rows, category pager |
| `FooterDirectory` | Desktop footer columns and mobile footer accordions |
| `FloatingChatButton` | Persistent chat/messenger support control |
