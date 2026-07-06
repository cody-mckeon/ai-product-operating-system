# Social Groups / Private Dining Pilot — Current State

## Evidence Note

### Review scope

This document records the current state of the supplied Social Groups, Meetings & Events, Group Dining, Zouk Private Events / Private Sales, proposal, team, resource, and property-map surfaces. It is an evidence inventory, not a future-state recommendation.

Live pages were reviewed on July 6, 2026 at the browser's default desktop viewport. The review included DOM structure, visible copy, CTA labels and destinations, form structure, a live Zouk proposal overlay, and representative desktop views.

### Project evidence reviewed

- `pilot-brief.md`
- `urls.md`
- `notes/stakeholder-request.md`
- `design-system/ai-design-kit.md`
- `design-system/component-patterns.md`
- `design-system/visual-principles.md`
- `design-system/imagery.md`
- `design-system/typography.md`
- `design-system/figma-make-context.md`, used as the closest available source because the supplied `design-system/figma-make-kit.md` path does not exist.

### Live source pages reviewed

- [FUHU Private Events](https://zoukgrouplv.com/private-events/fuhu/)
- [Zouk Private Sales](https://zoukgrouplv.com/private-sales/)
- [RWLV Meetings & Events](https://www.rwlasvegas.com/meeting-events/)
- [RWLV Group Dining](https://www.rwlasvegas.com/meeting-events/group-dining/)
- [RWLV Planner Resources](https://www.rwlasvegas.com/meeting-events/resources/)
- [RWLV Request for Proposal](https://www.rwlasvegas.com/meeting-events/request-for-proposal/)
- [RWLV Our Team](https://www.rwlasvegas.com/meeting-events/our-team/)
- [RWLV Property Map](https://www.rwlasvegas.com/map/)

### Evidence limitations

- No project screenshots, recordings, analytics, content model, sitemap export, CRM routing documentation, form-submission results, or internal ownership matrix were supplied.
- Mobile and tablet states were not reviewed.
- The RWLV cookie dialog obscured part of representative visual views, but page structure and visible DOM content remained inspectable.
- No forms were submitted. Post-submit confirmation, lead routing, response-time performance, validation errors, and recovery states remain unobserved.
- The Zouk `REQUEST PROPOSAL` overlay was opened on the Private Sales page. Equivalent overlay behavior on the FUHU page was not separately exercised.
- RFP tabs other than the default `Meeting & Events` tab were present in the live DOM, and their form structures were detectable, but their visible selected states were not individually exercised.
- Resource PDFs were inventoried from their links but not opened or assessed page by page.
- Visual observations describe the current pages only. Design-system documents were used to name recognizable pattern roles, not to judge or prescribe a future layout.

## Current Experience Summary

The current experience is not one unified Social Groups / Private Dining destination. It is split across two branded web systems and several page roles:

1. **RWLV Meetings & Events system:** a property-wide, meetings-led hierarchy containing Group Dining, venue specifications, planner resources, a generic team/contact page, Social Groups Concierge copy, and a tabbed Request for Proposal page.
2. **Zouk Private Sales system:** a department-led, multi-venue sales page containing a named team, client proof, past-event proof, venue specifications, and a Zouk-specific proposal overlay.
3. **Venue-level Zouk pages:** pages such as FUHU Private Events that present one venue's capacity, private rooms, technical details, and floor plan.
4. **Property utility:** the RWLV map organizes relevant locations by physical floor rather than by occasion, audience, or sales team.

The RWLV system has greater property breadth. The Zouk Private Sales page has the clearest existing expression of a unified sales team serving multiple event environments. Neither reviewed system currently covers the stakeholder's complete stated portfolio in one place.

## Existing Page Hierarchy

### Cross-site hierarchy

```text
RWLV website
└── Meetings & Events
    ├── Group Dining
    ├── Venues & Specs
    ├── Planner Resources
    ├── Vegas Loop
    ├── Meet Our Team
    └── Request for Proposal
        ├── Meeting & Events tab
        ├── Group Dining tab
        ├── Weddings tab
        └── Celebrations tab

Zouk Group Las Vegas website
├── Private Sales
│   ├── Zouk / Capital Bar / Empire Room
│   ├── Ayu / Mezzanine
│   ├── RedTail / Karaoke Suites
│   ├── FUHU / Private Dining
│   └── Here Kitty Kitty
└── Private Events
    └── FUHU

RWLV utility
└── Property Map
    ├── Floor 1
    ├── Floor 2
    ├── Floor 3
    ├── Floor 5
    └── Floor 6
```

The reviewed RWLV navigation exposes Zouk as a venue within Meetings & Events and as nightlife within Entertainment. It does not expose the Zouk Private Sales page as a child of RWLV Meetings & Events. The two sales experiences therefore remain on different domains with separate navigation, team framing, and inquiry mechanisms.

## Page Structure Inventory

### 1. RWLV Meetings & Events

**Page role:** Department/category landing page for property-wide meetings and events.

**Observed top-to-bottom structure:**

1. Global RWLV header and hotel `BOOK NOW` action.
2. Meetings & Events subnavigation: `GROUP DINING`, `VENUES & SPECS`, `PLANNER RESOURCES`, `VEGAS LOOP`, `MEET OUR TEAM`, `REQUEST FOR PROPOSAL`.
3. Meetings & Events hero/carousel.
4. `ON THIS PAGE` anchor navigation: `EVENT VENUES`, `UNIQUE VENUES`, `GROUP DINING`, `CONCIERGE`.
5. Introductory scale statement: more than 50 meeting rooms, six ballrooms, rooftop space, and 250,000 square feet for social and corporate groups.
6. Conference and convention positioning under `LET'S RULE THE WORLD`.
7. Event-venue catalog covering named ballrooms, gardens, theatre, The Complex, East Garden Plaza, and Zouk.
8. Unique-venue framing spanning Zouk Nightclub, Athena Pool, and restaurants.
9. Group Dining transition under `DISCOVER YOUR PALATE'S PARADISE & SAVOR THE MOMENT`.
10. `SOCIAL GROUPS CONCIERGE` content under `SUPREME SERVICE FOR SELECT CIRCLES`, covering spa days, golf, show tickets, and dining.
11. RWLV footer, general contact information, global trust marks, and chat.

**Current positioning:**

- Leads with meetings, conferences, conventions, venue scale, flexibility, technology, and corporate applications.
- Explicitly says the facilities accommodate both social and corporate groups.
- Includes social occasions in supporting copy, including milestones, wedding ceremonies, group dining, and concierge-curated activities.
- Treats Social Groups Concierge as one lower-page section, not as the page's primary identity.
- Treats Group Dining as both an on-page category and a child page.
- Treats Zouk as one event venue within a larger physical-venue catalog.

### 2. RWLV Group Dining

**Page role:** Category landing page for group and private dining across the property.

**Observed top-to-bottom structure:**

1. Global RWLV header and hotel `BOOK NOW` action.
2. Meetings & Events subnavigation.
3. Hero/carousel.
4. `MEETINGS & EVENTS` eyebrow and `GROUP & PRIVATE DINING` page title.
5. Introductory copy about open-air venues and dining adjacent to the Strip.
6. `BOOK YOUR EVENT` CTA.
7. `PRIVATE DINING ROOMS` / `SOVEREIGN DINING EXPERIENCES` editorial section.
8. `OUTDOOR DINING` / `AL FRESCO AURA` editorial section and `RESERVE A TABLE` CTA.
9. `BARS & LOUNGES` / `GILDED GATHERINGS` section and a link to the broader bars-and-lounges dining filter.
10. `GROUP DINING OPTIONS` section and `FILTER DINING OPTIONS` link to the general Dining page.
11. RWLV footer, contact information, trust marks, and chat.

**Current positioning:**

- Presents a property-wide category rather than a single restaurant.
- Organizes the story by setting: private dining rooms, outdoor dining, and bars/lounges.
- Addresses both intimate gatherings and large corporate activations.
- Uses editorial atmosphere and property breadth but does not display a visible venue-by-venue group-dining catalog on the reviewed page itself.
- Does not introduce a named Group Dining sales team.

### 3. Zouk Private Sales

**Page role:** Department/team-led private-sales landing page with a multi-venue catalog.

**Observed top-to-bottom structure:**

1. Zouk global navigation: Event Calendar, Tickets, Venues, Private Events, More, and `BOOK`.
2. Video hero with `ONE TRIBE. ONE DANCE. ONE NATION`.
3. Department-level introduction describing more than 100,000 square feet, multiple experience types, customizable spaces, and interconnected venues.
4. `REQUEST PROPOSAL` CTA that opens an in-page `PRIVATE EVENT REQUEST` overlay.
5. In-page venue anchors for Zouk, Ayu, FUHU, RedTail, and Here Kitty Kitty.
6. `MEET THE TEAM` section with department framing and five named biographies.
7. `CLIENT SPOTLIGHTS`.
8. `TESTIMONIALS`, including named client organizations.
9. `PAST EVENTS` gallery.
10. `OUR VENUES` long-form catalog: The District, Zouk Nightclub, Empire Room, Capital Bar, Ayu Dayclub, Mezzanine, RedTail, Karaoke Suites, FUHU, Private Dining, and Here Kitty Kitty.
11. Repeated venue-specification fields such as square footage, capacity, features, floor plans, and image galleries.
12. Repeated `REQUEST PROPOSAL` action.
13. Mailing-list form and Zouk footer.

**Current positioning:**

- Leads with the collective capability of Zouk's interconnected venues rather than one isolated venue.
- Describes the Private Sales team as providing white-glove support across venue selection, table reservations, and customized food, beverage, and entertainment packages.
- Spans corporate buyouts, private celebrations, group dinners, and large-scale events.
- Uses team biographies, client feedback, named organizations, and past-event imagery as proof of delivery capability.
- The portfolio remains bounded to Zouk-managed venues and The District rather than the stakeholder's full property-wide Social Groups portfolio.

### 4. FUHU Private Events

**Page role:** Venue-specific private-events detail page.

**Observed top-to-bottom structure:**

1. Zouk global navigation.
2. `PRIVATE EVENTS` hero.
3. `REQUEST PROPOSAL` action.
4. `FUHU VIBE DINING` overview.
5. `VENUE SPECS`: square footage, seated and reception capacity, bar and room features.
6. `PRIVATE DINING`: two private rooms, one semi-private room, capacities, screens, sound channels, and contracting/day-of availability.
7. `FUHU PATIO` specifications.
8. `TECH SPECS`.
9. `FLOOR PLAN`.
10. Repeated `REQUEST PROPOSAL` action.
11. Mailing-list form and Zouk footer.

**Current positioning:**

- Centers one venue's atmosphere, private-room inventory, capacities, and operational detail.
- Supports private dining and larger reception use cases.
- References a catering and sales team but does not present the broader team or cross-property portfolio.

### 5. RWLV Planner Resources

**Page role:** Supporting library for planners and event operations.

**Observed structure and assets:**

- Meetings & Events subnavigation and page introduction.
- `CONNECT WITH OUR TEAM` CTA to the RWLV Request for Proposal page.
- `EVENT FORMS`, including Group and Contractor Policy Acknowledgement and Loading Dock Access Request forms.
- Downloadable materials including a sales kit, meeting planner guide, conference dining deck, contractor guide, FedEx and convention branding guides, suites brochure, unique venues guide, floral/decor material, and a health-and-wellness group-packages brochure.

This page contains current evidence for dining, suites, unique venues, and health/wellness group content, but these materials sit in a planner-resource library rather than in a unified Social Groups narrative.

### 6. RWLV Request for Proposal

**Page role:** Multi-category lead-capture destination.

**Observed structure:**

1. Global RWLV header and Meetings & Events subnavigation.
2. `REQUEST FOR PROPOSAL` title.
3. Category tabs: `Meeting & Events`, `Group Dining`, `Weddings`, `Celebrations`.
4. Default visible `MEETINGS & EVENTS` form with sections for company information, event information, guest rooms, meeting space, AV support, and notes.
5. Category-specific form structures present for Group Dining, Weddings, and Celebrations.
6. RWLV footer and chat.

**Observed category-specific inputs:**

- **Meeting & Events:** company, event purpose, dates/flexibility, room count, hotel-brand preferences, meeting-space timing/needs, attendance, AV support, comments.
- **Group Dining:** contact and company information, nature of event, date/time, venue/location, group size, and additional information.
- **Weddings:** contact information, fiancé name, dates, guest count, sleeping-room need and room count, referral source, and details.
- **Celebrations:** contact information, celebration type, dates, guest count, sleeping-room need and room count, and details.

The active default observed on direct page entry was `Meeting & Events`.

### 7. RWLV Our Team

**Page role:** Department contact/orientation page.

**Observed structure:**

1. Meetings & Events subnavigation.
2. `MEET OUR TEAM` heading and general destination-expert positioning.
3. `CONNECT WITH OUR TEAM` CTA to the RWLV RFP.
4. `RULE THE WORLD YOUR WAY` meeting-space copy.
5. Department contact options: telephone, `HotelSales@rwlasvegas.com`, Request for Proposal, and View Resources.
6. RWLV footer.

**Current team framing:**

- Describes a collective of dedicated destination experts.
- Provides department-level contact channels.
- Does not show named team members, individual roles, biographies, or explicit representation of Group Dining, Zouk Private Sales, Weddings, Social Groups, or in-suite hospitality ownership.

### 8. RWLV Property Map

**Page role:** Physical wayfinding utility.

**Observed structure:**

1. Global RWLV header.
2. `PROPERTY MAP` title and `ON THIS PAGE` floor anchors.
3. Map sections for floors 1, 2, 3, 5, and 6.
4. RWLV footer.

The maps expose relevant physical evidence across the property: dining and entertainment locations on floor 1, meeting and convention spaces and Awana Spa on floor 2, Rose event spaces on floor 3, Athena and other pool-deck locations on floor 5, and Rose Rooftop on floor 6. The organizing model is physical floor, not social occasion or planning journey.

## Existing Portfolio And Category Structure

| Surface | Primary organizing principle | Current categories or portfolio units |
| --- | --- | --- |
| RWLV Meetings & Events navigation | Department support tasks | Group Dining; Venues & Specs; Planner Resources; Vegas Loop; Meet Our Team; Request for Proposal |
| RWLV Meetings & Events page | Event-space type and support | Event Venues; Unique Venues; Group Dining; Social Groups Concierge |
| RWLV Group Dining | Dining setting | Private Dining Rooms; Outdoor Dining; Bars & Lounges; broader Dining options |
| RWLV RFP | Inquiry type | Meeting & Events; Group Dining; Weddings; Celebrations |
| Zouk Private Sales | Zouk venue portfolio | The District; Zouk; Ayu; RedTail; FUHU; Here Kitty Kitty; subspaces within several venues |
| FUHU Private Events | One venue's inventory | Main venue; private dining rooms; patio; technical specifications; floor plan |
| RWLV Planner Resources | Planner asset type | Event forms; sales/planning guides; dining; suites; unique venues; wellness; operational guides |
| RWLV Property Map | Physical location | Floors 1, 2, 3, 5, and 6 |

The stakeholder's portfolio combines several different organizing models currently kept apart: department, occasion, venue, package, lodging need, in-suite service, event calendar, wellness experience, and physical location.

## CTA And Inquiry Path Inventory

| Source | CTA or action | Observed destination or behavior | Current commitment/context |
| --- | --- | --- | --- |
| RWLV global header | `BOOK NOW` | External RWLV hotel reservation engine | Hotel booking; present above Meetings & Events content but not an event inquiry |
| RWLV Meetings & Events subnav | `REQUEST FOR PROPOSAL` | RWLV RFP page | Persistent department inquiry |
| RWLV Meetings & Events | `CONNECT WITH OUR TEAM` | RWLV RFP page | General meetings/events lead capture |
| RWLV Meetings & Events | `FLOOR PLAN & SPECS` | Venues & Specs page | Planning detail |
| RWLV Meetings & Events | Group Dining link | RWLV Group Dining page | Category exploration |
| RWLV Meetings & Events | `LEARN MORE` / `MAKE A REQUEST` | Concierge page / Concierge request form | Separate concierge path |
| RWLV Group Dining | `BOOK YOUR EVENT` | RWLV RFP page | Group/private dining inquiry |
| RWLV Group Dining | `RESERVE A TABLE` | Same RWLV RFP page | Label suggests table reservation; destination is the multi-category RFP |
| RWLV Group Dining | `LEARN MORE` | General dining page filtered to bars and lounges | Broader venue exploration |
| RWLV Group Dining | `FILTER DINING OPTIONS` | General RWLV Dining page | Broader restaurant exploration |
| RWLV Planner Resources | `CONNECT WITH OUR TEAM` | RWLV RFP page | General inquiry |
| RWLV Planner Resources | `DOWNLOAD` / `DOWNLOAD GUIDE` | Individual PDF files | Planner support |
| RWLV Our Team | `CONNECT WITH OUR TEAM` | RWLV RFP page | General inquiry |
| RWLV Our Team | Telephone | `tel:7026767000` | Direct department/general contact |
| RWLV Our Team | `HotelSales@rwlasvegas.com` | Email handoff | Direct sales contact |
| RWLV Our Team | `Request for Proposal` | RWLV RFP page | Structured inquiry |
| RWLV Our Team | `View Resources` | `/meetings-events/resources/` | Supporting content; URL uses a different pluralized path from the reviewed `/meeting-events/resources/` URL |
| RWLV RFP | Category tabs | In-page Meeting & Events, Group Dining, Weddings, and Celebrations forms | Inquiry classification |
| RWLV RFP | `Submit` | Form submission not exercised | Lead transmission |
| Zouk Private Sales | `REQUEST PROPOSAL` | Opens in-page `PRIVATE EVENT REQUEST` overlay | Zouk venue inquiry |
| Zouk proposal overlay | `Submit` | Submission not exercised; page states that a team member will respond within 48 hours | Venue-specific availability request |
| Zouk Private Sales | Venue anchors | In-page jumps to Zouk, Ayu, FUHU, RedTail, and Here Kitty Kitty sections | Portfolio navigation |
| FUHU Private Events | `REQUEST PROPOSAL` | JavaScript-triggered inquiry action; exact overlay state not separately exercised on this page | Venue inquiry |
| Zouk global navigation | `BOOK` | `#itinerary` in-page booking area | Consumer booking context distinct from private-event proposal |
| Both sites | Chat / Speak with team | Site-specific chat overlays | Parallel support path |

### Zouk proposal overlay fields observed

- Venue selector: Zouk, Ayu, FUHU, RedTail, Here Kitty Kitty.
- First name, last name, email, phone, company name.
- Event type, group size, event date.
- Start and end times.
- Additional comments.
- CAPTCHA and optional newsletter consent.
- Response expectation: within 48 hours.

## Existing Team Framing

| Surface | Team representation | Evidence |
| --- | --- | --- |
| Zouk Private Sales | Named, role-based, personal, and department-specific | Five biographies; private-sales capability statement; venue selection, reservations, customized F&B and entertainment packages; repeated client praise for team members and coordination |
| RWLV Our Team | Collective and contact-oriented | “Dedicated destination experts”; general Meetings & Events copy; telephone, hotel-sales email, RFP, resources; no named profiles |
| RWLV Meetings & Events | Service-function framing | Social Groups Concierge copy promises tailored planning across spa, golf, shows, and dining; no named owner or link to a dedicated Social Groups page |
| RWLV Group Dining | No visible team story | Page focuses on dining settings and property breadth; inquiry CTAs route to RFP |
| FUHU Private Events | Functional team reference | Copy states that catering and sales will assist with contracted private dining; no people or broader department story |

No reviewed page presents Group Dining, Zouk Private Sales, Social Groups, Weddings, celebrations, room blocks, in-suite hospitality, and wellness as one named or visibly shared team.

## Venue-Specific Versus Department/Team-Oriented Pages

| Page | Current orientation | Notes |
| --- | --- | --- |
| FUHU Private Events | Venue-specific | Detailed atmosphere, capacities, private rooms, patio, technology, floor plan |
| Zouk Private Sales | Department/team-oriented with venue detail | Unified Zouk sales team plus a long multi-venue catalog |
| RWLV Meetings & Events | Department/category-oriented | Property-wide meetings-led ecosystem; includes social groups and Zouk as supporting categories |
| RWLV Group Dining | Category-oriented | Property-wide dining settings; not a team page and not one venue |
| RWLV Planner Resources | Support-oriented | Asset library for planners |
| RWLV Request for Proposal | Task/inquiry-oriented | Category-specific forms under a shared RFP destination |
| RWLV Our Team | Department contact-oriented | Collective destination-expert framing without named staff |
| RWLV Property Map | Property utility-oriented | Floor-by-floor physical wayfinding |

## Audience Overlap

| Audience or need | Current surfaces where it appears | Overlap observed |
| --- | --- | --- |
| Corporate meeting and convention planners | Meetings & Events, RFP, Resources, Our Team, Zouk Private Sales | Strongest and most explicit current audience across both domains |
| Social-event and celebration planners | Meetings & Events, Group Dining, RFP Celebrations tab, Zouk Private Sales | Present in several places but under different category and brand labels |
| Wedding planners and couples | RFP Weddings tab; Rose Terrace wedding-ceremony reference | A formal inquiry path exists, but no supplied wedding content page was found in the reviewed set |
| Group dining organizers | Group Dining, RFP Group Dining tab, FUHU, Zouk Private Sales, dining resource deck | Spans property-wide category, venue detail, Zouk sales, and a shared inquiry page |
| Large private-event organizers | Meetings & Events venue catalog, Zouk Private Sales | Both systems emphasize capacity, flexibility, specifications, and private/corporate events |
| Intimate gathering organizers | Group Dining, FUHU private rooms, RFP Celebrations | Present through room/setting copy and form categories rather than one audience journey |
| Social Groups guests seeking curated activities | Meetings & Events Social Groups Concierge | Spa, golf, shows, and dining are grouped here; this framing does not appear across the other reviewed surfaces |
| Groups needing rooms | Meetings RFP, Weddings form, Celebrations form, suite brochure | Room need is captured during inquiry, but no reviewed page explains small room blocks as a Social Groups offering |
| Wellness-oriented groups | Social Groups Concierge; health-and-wellness group-packages PDF link; property map | Evidence exists across service copy, resource content, and location utility rather than one experience surface |

The same prospective organizer can plausibly enter through venue selection, dining, occasion, room need, concierge activity, or event type. Those entry models currently lead to different pages and sometimes different forms or domains.

## Destination Confusion And Fragmentation Observed

These are current-state observations, not proposed changes.

- **Two domains and brands:** RWLV and Zouk each provide private-event discovery, team language, and proposal capture, but they do not visibly explain their sales relationship on the reviewed pages.
- **Two proposal systems:** RWLV uses a dedicated tabbed RFP page; Zouk uses an in-page venue proposal overlay with a different field set and a stated 48-hour response expectation.
- **RWLV default form context:** Direct entry to the shared RFP shows `Meeting & Events` by default, even though Group Dining, Weddings, and Celebrations are separate tabs.
- **Same destination, different Group Dining labels:** `BOOK YOUR EVENT` and `RESERVE A TABLE` both link to the same RWLV RFP URL. The second label can read like a standard restaurant reservation even though the destination is event lead capture.
- **Parallel concierge request:** The Meetings & Events page routes Social Groups Concierge users to a separate concierge page and `MAKE A REQUEST` form rather than the Meetings & Events RFP.
- **Global hotel booking competition:** `BOOK NOW` remains prominent throughout RWLV Meetings & Events pages and hands off to the hotel booking engine, a different intent from event or group inquiry.
- **Multiple team contact modes:** The RWLV team page exposes phone, email, RFP, and resources; Zouk exposes proposal overlay, chat, global `BOOK`, and contact links.
- **Zouk within RWLV versus Zouk sales site:** RWLV presents Zouk as a unique/event venue, while full Zouk private-sales information lives on another domain.
- **Venue and occasion taxonomies are separate:** Zouk organizes by managed venue; RWLV Group Dining organizes by dining setting; the RFP organizes by inquiry type; the map organizes by floor.
- **Potential path inconsistency:** The Our Team `View Resources` link uses `/meetings-events/resources/`, while the supplied and reviewed resource page uses `/meeting-events/resources/`. Redirect behavior was not tested.

## Existing Content Gaps Against The Stakeholder Request

| Stakeholder portfolio area or intent | Current reviewed evidence | Gap in the reviewed source set |
| --- | --- | --- |
| Unified Group Dining + Zouk Private Events department | Separate RWLV Group Dining and Zouk Private Sales experiences | No reviewed page names or explains one combined department |
| Social Groups overview | Lower-page Social Groups Concierge section on Meetings & Events | No dedicated Social Groups overview in the supplied pages |
| Small room blocks | Room-count questions in RFP forms; suites brochure in Resources | No visible explanation of small-room-block offering, qualification, or process |
| In-suite F&B hospitality packages | No direct content observed | Offering, inclusions, eligibility, room/suite requirements, imagery, and inquiry ownership are absent from reviewed pages |
| New Hospitality Packages launching August 4 | No direct content observed | Package names, details, launch year, imagery, terms, and inquiry path are absent |
| Weddings | RFP tab and a Rose Terrace wedding-ceremony reference | No wedding discovery or portfolio page in the reviewed set |
| Celebrations and milestones | RFP tab; Group Dining and Zouk copy mention celebrations/milestones | No consolidated celebration portfolio or occasion detail |
| Bachelorette experiences | No direct content observed | Experience inventory, ownership, and inquiry route are absent |
| Wellness experiences | Social Groups Concierge copy, wellness brochure link, Awana on map | No connection to bachelorette, occasion, room-block, or hospitality planning in one page |
| Athena engagement photo shoot | Athena appears as a unique venue reference and physical pool-deck location | Photo-shoot product, availability, requirements, imagery, and inquiry route are absent |
| F1 in-suite hospitality | No direct content observed | Event-specific offer and timing are absent |
| NFR in-suite hospitality | No direct content observed | Event-specific offer and timing are absent |
| One unified team | Zouk has named Private Sales team; RWLV has general destination experts | No cross-team identity, ownership explanation, or combined biographies/contact model |
| One clear inquiry path | Multiple forms, tabs, contact modes, chats, and domains | No reviewed evidence of one shared front door or documented back-end routing model |

## Existing Trust Signals And Editorial Assets

### Trust signal inventory

| Type | Location | Observed description | Relative strength |
| --- | --- | --- | --- |
| Named team expertise | Zouk Private Sales | Five staff profiles with roles and hospitality backgrounds | High |
| Client spotlights | Zouk Private Sales | Direct praise naming team members and event delivery | High |
| Named client testimonials | Zouk Private Sales | Monat, Hilton, and National Apartment Association examples | High |
| Cross-team coordination proof | Zouk Private Sales testimonial | One testimonial explicitly references collaboration among Zouk, RWLV, and AEG | High |
| Past-event imagery | Zouk Private Sales | Seven-item event gallery | Medium |
| Venue specifications | Zouk Private Sales and FUHU | Square footage, capacity, features, floor plans | High |
| Property scale | RWLV Meetings & Events | 250,000 square feet, 50+ rooms, six ballrooms | High |
| Venue and service detail | RWLV Meetings & Events and Group Dining | Named venues, uses, dimensions, settings, culinary and concierge capabilities | Medium–High |
| First-party planning resources | RWLV Resources | Sales kit, planning guide, dining deck, venue guide, suites and wellness materials | Medium–High |
| Contact accessibility | RWLV Our Team | Phone, email, RFP, and resources | Medium |
| Responsible-hospitality and sustainability marks | Global RWLV footer | GBAC, LEED, and Verified 2025 marks/links | Medium; global rather than event-specific |

### Editorial asset availability

| Asset type | Source | Availability | Notes |
| --- | --- | --- | --- |
| Team biographies and portraits | Zouk Private Sales | Observed | Current first-party department content; reuse rights not assessed |
| Client quotations | Zouk Private Sales | Observed | Approval scope and maintenance ownership not supplied |
| Client organization names | Zouk Private Sales | Observed | Monat, Hilton, National Apartment Association |
| Past-event galleries | Zouk Private Sales | Observed | Captions and asset rights were not assessed |
| Venue photography | Zouk Private Sales, FUHU, RWLV Group Dining | Observed | Asset library and approved crops not supplied |
| Venue specifications and floor plans | Zouk pages and RWLV Meetings & Events | Observed | Source freshness and shared governance not verified |
| Sales and planning PDFs | RWLV Resources | Linked | Contents not audited in this pass |
| Health/wellness group-package brochure | RWLV Resources | Linked | Potentially relevant evidence; contents not audited in this pass |
| Property maps | RWLV Map | Observed | Floor-specific location evidence includes Athena and event spaces |
| External press, awards, or third-party ratings | Reviewed page bodies | Not observed as core page content | Global footer trust marks are present; no scoped editorial press asset set was supplied |

## Recognizable Current Component And Content Patterns

Pattern names below use the supplied design-system vocabulary only to describe observed roles.

| Current surface | Recognizable observed patterns |
| --- | --- |
| RWLV Meetings & Events | Experience Hero; Page Anchor Navigation; venue catalog/cards; editorial category features; CTA blocks; persistent subnavigation |
| RWLV Group Dining | Experience Hero; Editorial Features; category-led imagery/copy; CTA blocks; link into broader Dining filter |
| Zouk Private Sales | Experience Hero; in-page venue anchors; team profiles; Social Proof Layer; venue orientation/detail sections; repeated specification blocks; CTA blocks; proposal overlay |
| FUHU Private Events | Venue-specific Experience Hero; venue specification blocks; private-room content; floor plan; proposal CTA |
| RWLV Planner Resources | Resource-card/download library; support forms; CTA block |
| RWLV RFP | Category tablist; long-form structured lead form; form sections; submit action |
| RWLV Our Team | Department introduction; CTA block; contact-method group |
| RWLV Property Map | Page Anchor Navigation; floor sections; map images |

The visual systems also differ: RWLV uses the shared resort header, red Meetings & Events subnavigation, and category/editorial sections; Zouk uses its own navigation, video-led arrival, monochrome presentation, team/proof modules, and dense venue specification sequences.

## Available Current Surfaces Inventory

This inventory records existing high-level surfaces and visibility only. It does not assign future content to them.

| Existing surface | Current context | Visibility | Evidence confidence |
| --- | --- | --- | --- |
| RWLV Meetings & Events hero and subnavigation | Primary entry to the property-wide department | High | High |
| Meetings & Events on-page category anchors | Orientation to venues, Group Dining, and Concierge | High | High |
| Social Groups Concierge section | Cross-experience service framing near the lower part of Meetings & Events | Medium | High |
| RWLV Group Dining hero and opening CTA | Entry to property-wide private/group dining | High | High |
| RWLV RFP tablist | Inquiry classification across Meetings, Group Dining, Weddings, Celebrations | High | High |
| RWLV Our Team opening section | Collective destination-expert framing and inquiry CTA | High | High |
| RWLV Planner Resources library | Downloadable planning, dining, suites, venue, and wellness material | Medium | High |
| Zouk Private Sales hero and introduction | Collective Zouk private-sales framing | High | High |
| Zouk Meet the Team | Named sales and event-services profiles | High | High |
| Zouk client proof sections | Spotlights, testimonials, and past events | Medium–High | High |
| Zouk venue anchor set | Jumps into managed venue catalog | High | High |
| Zouk proposal overlay | Venue-specific lead capture without leaving the page | High after activation | High |
| FUHU venue detail | Private-room and venue operational detail | High within venue-specific journey | High |
| RWLV floor maps | Physical orientation for relevant spaces | Medium | High |

## Primary Current Journeys

### Journey A: Property-wide meeting or event inquiry

1. Enter RWLV Meetings & Events.
2. Review venue scale, ballrooms, unique venues, Group Dining, or Social Groups Concierge.
3. Use persistent `REQUEST FOR PROPOSAL` or `CONNECT WITH OUR TEAM`.
4. Arrive at the shared RFP with `Meeting & Events` active by default.
5. Supply company, event, guest-room, meeting-space, attendance, and AV information.
6. Submit state and follow-up are unobserved.

### Journey B: Group/private dining inquiry

1. Enter RWLV Group Dining directly or from Meetings & Events.
2. Review private rooms, outdoor dining, and bars/lounges.
3. Choose `BOOK YOUR EVENT` or `RESERVE A TABLE`.
4. Arrive at the same RWLV RFP URL.
5. Select or otherwise reach the Group Dining form; direct landing behavior from each CTA was not exercised.
6. Submit state and follow-up are unobserved.

Alternate exploration exits route to the general Dining page or bars-and-lounges filter rather than remaining in the group-event inquiry flow.

### Journey C: Zouk multi-venue private-event inquiry

1. Enter Zouk Private Sales.
2. Review collective capability, team, proof, past events, and venue catalog.
3. Use `REQUEST PROPOSAL`.
4. Complete the in-page `PRIVATE EVENT REQUEST` overlay with venue, event, group, date, and contact details.
5. The page states that a team member will respond within 48 hours.
6. Submit and confirmation states were not observed.

### Journey D: FUHU-specific private-event inquiry

1. Enter FUHU Private Events.
2. Review dining concept, capacities, private rooms, patio, technical details, and floor plan.
3. Use `REQUEST PROPOSAL`.
4. The action is JavaScript-driven; equivalent overlay behavior is inferred from the shared Zouk pattern but was not separately confirmed on FUHU.

### Journey E: Wedding or celebration inquiry

1. Enter the RWLV RFP directly or through another Meetings & Events page.
2. Choose `Weddings` or `Celebrations` in the category tablist.
3. Complete an occasion-specific form, including guests and sleeping-room needs.
4. Submit and follow-up are unobserved.

No supplied discovery page was observed upstream of these occasion-specific forms.

### Journey F: Curated Social Groups Concierge request

1. Discover `SOCIAL GROUPS CONCIERGE` on the Meetings & Events page.
2. Read examples spanning spa, golf, entertainment, and dining.
3. Follow `LEARN MORE` to general Concierge or `MAKE A REQUEST` to a separate concierge request form.
4. Relationship to the RWLV Meetings & Events RFP or Zouk Private Sales workflow is not explained on the reviewed page.

## Observed States

### Confirmed

- Desktop page structures at the default 1280 × 720 browser viewport.
- RWLV global and Meetings & Events subnavigation.
- RWLV cookie dialog overlay.
- RWLV RFP default `Meeting & Events` tab and form.
- Presence of Group Dining, Weddings, and Celebrations RFP categories and category-specific form fields.
- Zouk Private Sales proposal overlay in its loaded state.
- Zouk proposal venue selector and form fields.
- Zouk video pause control, venue anchors, proof carousels/groups, venue sections, and repeated proposal action.
- RWLV and Zouk global chat/support affordances.

### Not observed

- Mobile, tablet, breakpoint, or rotated-device states.
- Form validation failures, success confirmations, CRM handoff, email confirmation, or response workflow.
- Selected visual state of each non-default RWLV RFP tab.
- Zouk proposal overlay opened from FUHU or other venue-detail pages.
- Downloaded PDF contents or PDF mobile behavior.
- Accessibility keyboard traversal or screen-reader behavior beyond exposed semantic structure.
- Analytics events, data-layer behavior, consent-dependent tracking, or conversion reporting.

## Measurement-Relevant Current-State Observations

- Event inquiry actions are distributed across RWLV RFP, Concierge request, Zouk proposal overlay, phone, email, and chat.
- RWLV Group Dining uses multiple CTA labels for the same RFP URL.
- The RWLV RFP contains category tabs that create distinct form journeys within one page URL.
- Zouk keeps proposal initiation in-page, while RWLV navigates to a dedicated RFP page.
- Cross-domain movement between RWLV and Zouk private-sales content is not visible in the reviewed primary journeys.
- Global hotel `BOOK NOW` remains present on RWLV event pages and represents a separate conversion path.
- No analytics implementation was inspected; the observations above identify visible actions and handoffs only.

## Page Closest To The Stakeholder Intent

**Closest in narrative and operating posture: Zouk Private Sales.**

Among the reviewed pages, Zouk Private Sales most closely resembles the stakeholder's stated intent to tell the story of one team that can plan multiple types of experiences. This assessment is based on current evidence:

- It introduces a single Private Sales team before the detailed venue catalog.
- It names individual team members and describes their roles.
- It frames multiple interconnected venues as a coordinated portfolio.
- It connects team capability to venue selection, reservations, food and beverage, entertainment packages, and event execution.
- It supplies client proof about seamless planning and cross-team collaboration.
- It uses one repeated proposal mechanism across the Zouk venue set.

Its current scope is narrower than the stakeholder request: it is Zouk-led and venue-heavy, and it does not cover small room blocks, in-suite hospitality, Weddings as a portfolio, broader wellness/bachelorette experiences, Athena engagement shoots, or F1/NFR hospitality.

**Closest in property breadth: RWLV Meetings & Events.**

RWLV Meetings & Events spans ballrooms, unique venues, Zouk, Athena, Group Dining, concierge, spa, entertainment, and social/corporate groups. Its current hierarchy, however, is primarily conference-, convention-, venue-, and planner-oriented. The Social Groups story is subordinate to the larger Meetings & Events framework, and the page does not present a named unified Social Groups / Private Dining team.

This comparison identifies the nearest current precedents only. It does not select a future solution.

## Current-State Takeaway

The present ecosystem already contains many individual ingredients named by the stakeholder: property-wide event inventory, Group Dining storytelling, Zouk multi-venue private sales, named and unnamed team framing, planner resources, wellness group collateral, occasion-specific forms, room-need capture, and physical property orientation.

Those ingredients are distributed across different domains, taxonomies, page roles, and inquiry paths. RWLV supplies breadth and a shared multi-category RFP; Zouk supplies the strongest unified-team and multi-venue sales narrative; FUHU supplies venue-level operational depth. The reviewed set does not currently provide one source that joins the full Social Groups portfolio, timing-sensitive hospitality packages, and a visibly unified team and inquiry journey.

No recommendation, concept, wireframe, design, or Figma prompt is included in this artifact.
