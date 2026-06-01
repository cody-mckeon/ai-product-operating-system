# Hilton Rooms Pilot Component Inventory

## Evidence Reviewed

| Screenshot | Evidence role |
|---|---|
| `screenshots/current-state/desktop-full-page.jpeg` | Desktop full-page view of the Hilton Rooms listing experience. |
| `screenshots/current-state/mobile-full-page.jpeg` | Mobile full-page view of the Hilton Rooms listing experience, including mobile header, room cards, footer accordions, chat widget, and sticky booking bar. |
| `screenshots/current-state/intro-section.png` | Cropped desktop view of breadcrumb and introduction module. |
| `screenshots/current-state/deluxe-rooms.png` | Cropped desktop view of the Deluxe Rooms card grid. |

`screenshots/current-state/test.png` was present but is not a usable screenshot asset.

## Module Inventory

| Module | Observed in | Role | Structure | Observed behavior |
|---|---|---|---|---|
| Desktop global header | Desktop full page | Provides brand identity, primary navigation, utility links, and booking entry point. | Top utility row with Resorts World Las Vegas logo, Genting Rewards mark, `SIGN IN`, `RESORT CALENDAR`, `GUEST SERVICES` with dropdown indicator; primary nav row with category links and `BOOK NOW` button. | `ROOMS` appears selected with a red underline. `GUEST SERVICES` shows a downward caret, implying a dropdown state not captured. |
| Mobile global header | Mobile full page | Provides compact brand identity and booking/menu entry points. | Left logo, red `BOOK` button, hamburger menu button. | Header remains visible at top of captured mobile page. Menu-open state is not captured. |
| Hero image | Desktop and mobile full page | Establishes property context before room content. | Full-width exterior/property image below global header. | Desktop uses a tall hero crop; mobile uses a shorter responsive crop below the mobile header. No overlay text or CTA is visible. |
| Intro section | Desktop full page, mobile full page, intro crop | Orients user to the Hilton rooms page. | Centered breadcrumb, large `HILTON ROOMS` heading, short descriptive paragraph. | Breadcrumb reads `ROOMS > HILTON LAS VEGAS`. No visible CTA. |
| Room category section | Desktop full page, mobile full page, deluxe rooms crop | Groups room cards under `HILTON DELUXE ROOMS`. | Light-gray section background, centered uppercase section heading, room card collection. | Desktop displays cards in a two-column grid. Mobile stacks cards vertically. |
| Room card grid | Desktop full page, deluxe rooms crop | Presents comparable room products within the Deluxe Rooms category. | Four room cards: `1BR | DELUXE ROOM`, `1BR | DELUXE ROOM | CITY VIEW`, `1BR | DELUXE ROOM | PANORAMIC STRIP VIEW`, `1BR | DELUXE ROOM | STRIP VIEW`. | Card layout is reused consistently with image, title, bold summary, truncated description, `RESERVE ROOM`, and `LEARN MORE`. |
| Floating chat widget | Desktop and mobile full page | Provides persistent assistance entry point. | Circular red chat button with messenger-style icon. | Desktop widget floats near lower-right. Mobile widget appears above footer/sticky booking area. Chat-open state is not captured. |
| Mobile footer accordion | Mobile full page | Provides lower-page navigation/context on mobile. | Breadcrumb-like row with Resorts World icon and `STAY > HILTON LAS VEGAS`, followed by accordion rows including `RESORTS WORLD LAS VEGAS` and `INFORMATION`. | `RESORTS WORLD LAS VEGAS` row shows a plus icon, implying expandable content. Expanded state is not captured. |
| Mobile sticky booking bar | Mobile full page | Provides persistent rate-check entry from lower viewport. | Bottom-fixed bar with date range `JUN 1, 2026 - JUN 3, 2026` and red `CHECK RATES` action. | Sticks to bottom of mobile viewport in captured state. Date selector behavior and rate-check destination are not captured. |

## Component Inventory

| Component | Used in module | Content fields | CTA or interaction | Reuse pattern |
|---|---|---|---|---|
| Brand logo | Desktop global header, mobile global header | Resorts World Las Vegas logo. | Likely home/navigation link, but destination is not visible in screenshots. | Reused across desktop and mobile headers with different sizing/layout. |
| Utility link | Desktop global header | `SIGN IN`, `RESORT CALENDAR`, `GUEST SERVICES`. | Text-link behavior; `GUEST SERVICES` includes dropdown indicator. | Header-level utility primitive. |
| Primary nav item | Desktop global header | `ROOMS`, `GENTING REWARDS`, `OFFERS`, `POOLS`, `DINING`, `EXPERIENCES`, `WELLNESS`, `MEETINGS & EVENTS`, `ENTERTAINMENT`, `GAMING`. | Navigation link behavior; active state visible on `ROOMS`. | Repeated horizontal nav item with active underline variant. |
| Header booking button | Desktop global header | `BOOK NOW`. | Outlined red button. Destination not visible. | Primary header CTA on desktop. |
| Mobile booking button | Mobile global header | `BOOK`. | Solid red button. Destination not visible. | Mobile-specific compact booking CTA. |
| Hamburger menu button | Mobile global header | Three-line menu icon. | Opens mobile navigation, inferred from common icon and placement; menu-open state not shown. | Mobile-only navigation control. |
| Breadcrumb | Intro section, mobile footer accordion | `ROOMS > HILTON LAS VEGAS`; mobile footer shows `STAY > HILTON LAS VEGAS`. | Link-like navigation path; destination behavior not captured. | Reused breadcrumb pattern with uppercase labels and chevron separators. |
| Page heading | Intro section | `HILTON ROOMS`. | Static heading. | Large, centered, uppercase page-title pattern. |
| Intro copy | Intro section | Short paragraph: `Over 1,600 stylish accommodations...`. | Static body copy. | Centered page-introduction text block. |
| Section heading | Room category section | `HILTON DELUXE ROOMS`. | Static heading. | Uppercase category heading above room collection. |
| Room card | Room card grid | Image, room title, bold summary, truncated description, primary reserve CTA, secondary learn-more CTA. | Card contains two actions: `RESERVE ROOM` and `LEARN MORE`. | Reused four times with consistent structure across desktop and mobile. |
| Room image | Room card | Room photography. | Static image in captured state; click behavior not visible. | Reused as card-leading media. Crops responsively between desktop and mobile. |
| Room title | Room card | Room name in uppercase, e.g. `1BR | DELUXE ROOM | STRIP VIEW`. | Static card heading. | Reused room-name field. Long titles wrap on mobile. |
| Room summary | Room card | Bold one-sentence value statement. | Static text. | Reused short supporting field; present on all visible cards. |
| Room description excerpt | Room card | Body text ending with ellipsis or truncated sentence. | Static text excerpt. | Reused description field with visible truncation. |
| Reserve Room button | Room card | `RESERVE ROOM`. | Red outlined primary card CTA. Destination not captured. | Repeated once per room card. |
| Learn More link | Room card | `LEARN MORE` with right chevron. | Secondary inline/card CTA. Destination not captured. | Repeated once per room card. |
| Chat launcher | Floating chat widget | Messenger-style icon. | Opens chat/help experience; open state not captured. | Persistent assistance component across desktop and mobile. |
| Footer accordion row | Mobile footer accordion | Labels such as `RESORTS WORLD LAS VEGAS`, `INFORMATION`. | Plus icon indicates expandable row behavior. | Mobile footer navigation/control pattern. |
| Date selector summary | Mobile sticky booking bar | Calendar icon and date range `JUN 1, 2026 - JUN 3, 2026`. | Likely opens date selection, but picker state is not captured. | Sticky booking input summary on mobile. |
| Check Rates button | Mobile sticky booking bar | `CHECK RATES`. | Solid red booking CTA. Destination not captured. | Mobile sticky conversion action. |

## Observed Behaviors And States

| Behavior or state | Evidence | Notes |
|---|---|---|
| Active navigation state | Desktop full page | `ROOMS` is visibly active with a red underline. |
| Responsive header replacement | Desktop and mobile full page | Desktop uses full navigation and utility links; mobile replaces this with logo, `BOOK`, and hamburger controls. |
| Responsive card layout | Desktop and mobile full page | Desktop presents room cards in a two-column grid; mobile stacks the same card pattern vertically. |
| Persistent assistance access | Desktop and mobile full page | Chat launcher remains available near the lower-right area of the viewport/page. |
| Mobile sticky booking access | Mobile full page | Date range and `CHECK RATES` bar appears fixed at the bottom in the captured mobile state. |
| Expandable mobile footer rows | Mobile full page | Plus icon on footer row indicates collapsed expandable content; expanded state is not captured. |
| Truncated card copy | Desktop and mobile room cards | Room descriptions visibly end with ellipses or partial sentence endings, indicating excerpted copy. |
| Long-title wrapping | Mobile full page | `1BR | DELUXE ROOM | PANORAMIC STRIP VIEW` wraps across multiple lines while preserving the same card structure. |

## Reuse Patterns

| Pattern | Observed reuse |
|---|---|
| Brand/navigation shell | Header components adapt between desktop and mobile while preserving logo and booking access. |
| Breadcrumb pattern | Chevron-separated location context appears in the intro and mobile footer area. |
| Product card pattern | The same room card structure supports multiple room variants with swapped image/title/summary/description content. |
| Dual CTA pattern | Each room card pairs `RESERVE ROOM` as the primary action with `LEARN MORE` as the secondary action. |
| Red booking/action styling | Booking CTAs use Resorts World red as the dominant action color across header, room cards, and sticky mobile booking bar. |
| Light-gray collection background | The room category area uses a gray band to group the card grid as a distinct product collection. |
| Mobile persistent conversion surface | Mobile includes both top `BOOK` access and bottom `CHECK RATES` sticky action, separate from per-card `RESERVE ROOM` actions. |

## Unobserved Component States

| Component | Unobserved state |
|---|---|
| Desktop `GUEST SERVICES` dropdown | Closed/open menu content not captured. |
| Mobile hamburger menu | Menu-open state not captured. |
| Booking flow | Reserve, book, date picker, rate-check, availability, and checkout states not captured. |
| Room detail pages | `LEARN MORE` destination pages not captured. |
| Chat widget | Expanded chat state not captured. |
| Footer accordions | Expanded mobile footer state not captured. |
| Error, loading, empty, unavailable states | No such states captured in screenshots. |
