# Figma Make Prompts

## Evidence Basis

Project: `projects/entertainment-live-page-pilot`

Inputs reviewed:

* `outputs/concept-selection.md`
* `outputs/design-review.md`
* `outputs/recommendation.md`
* `design-system/brand-guidelines/rwlv-brand-guidelines-2026.pdf`
* `design-system/brand.md`
* `design-system/components.md`

Evidence limitations:

* `projects/entertainment-live-page-pilot/component-inventory.md` was not available.
* Component reuse is based on design-review findings and adjacent Entertainment evidence, not a pilot-local component inventory.
* `projects/entertainment-live-page-pilot/outputs/current-state.md` was not available.
* The available current-state evidence was referenced through design review and supporting artifacts.

## Selected Concept

CON-01: Resorts World Live Orientation Journey.

The approved selected concept is an inserted orientation experience within the existing Entertainment page. It should introduce The Stage at Zouk as the primary section identity, explain the relationship between Resorts World Live and The Stage at Zouk, and bridge guests into relevant event discovery and ticket actions.

## Primary Exploration Direction

DR-01: The Stage at Zouk Orientation Feature.

Create a composed orientation section that lives inside the existing Entertainment page. The section should solve the hierarchy gap without redesigning the whole page.

## Secondary Exploration Direction

DR-02: Resorts World Live Event Bridge.

Create a bridge from the orientation section into relevant event discovery, preserving existing event-card and ticket-conversion patterns.

## Primary Placement

Entertainment page, immediately after the Resorts World Theatre / Theatre Amenities context and before FAQ.

## Secondary Placement

Near relevant The Stage at Zouk / Resorts World Live event discovery moments.

## Core Experience Pattern

Orientation Section.

The experience should feel like a hospitality host explaining where the guest is in the resort ecosystem and what they can do next.

## Supporting Patterns

* Experience Directory cues from CON-02 / DR-03.
* Action Clarity cues from CON-04 / DR-02.
* FAQ continuity from DR-05.
* Optional restrained social context from CON-06, only where official and brand-safe.

## Existing Component Reuse Requirement

### Existing Components To Reuse

* `VenueInfoPanel`
* `PageAnchorNav`
* `EventCard`
* Venue badge pattern
* Date-row pattern
* Existing red outlined CTA style
* `FAQTabsAccordion`
* Footer social icon conventions for global social access

### Existing Components To Adapt

* Resorts World Theatre section pattern
* Existing Venue section pattern
* Event listing controls
* AEG intro / editorial intro pattern, only if governance allows partner separation
* Social proof layer as a restrained social-context pattern

### Potential New Capability Areas

* Program-to-venue relationship labeling.
* Mobile wayfinding for long Entertainment pages.
* CTA intent labeling across tickets, tables, learn-more, booking, and stay paths.
* Governed venue-level social context.
* Cross-page taxonomy consistency between Entertainment and Resorts World Live.

## Direction DR-01

### Design Direction ID

DR-01

### Design Direction Name

The Stage at Zouk Orientation Feature

### Exploration Goal

Explore how an inserted orientation section can clarify the relationship between Resorts World Live and The Stage at Zouk while preserving the existing Entertainment page flow.

### Primary Placement

Entertainment page, after Resorts World Theatre / Theatre Amenities and before FAQ.

### Experience Integration Context

### Surface Type

Page Section

### Existing Surface

Existing Resorts World Las Vegas Entertainment page.

### Existing Components To Preserve

* Existing global header and navigation.
* Existing hero carousel.
* Existing event discovery and event listing.
* Existing Resorts World Theatre / Theatre Amenities content.
* Existing Ayu Dayclub and Zouk Nightclub venue discovery.
* Existing ticket, table, learn-more, and booking paths.
* Existing booking widget and footer.

### Recommended Placement

Between the existing Theatre / Theatre Amenities content and the relocated FAQ/support area.

### Module Scope

Medium

### Exploration Constraint

Design this as an inserted orientation section within the existing Entertainment page. Do not redesign the entire Entertainment page. Do not create a standalone landing page. Do not redesign the global navigation, event listing, venue sections, booking widget, or footer. Assume the surrounding page already exists.

### Audience

Guests browsing entertainment options who need to understand what Resorts World Live is, how it relates to The Stage at Zouk, and how to continue into relevant event discovery.

### Core Experience Pattern

Orientation Section

### Supporting Patterns

* Venue information pattern.
* Experience-directory cues.
* Action-clarity cues.
* Optional restrained social-context cues.

### Existing Components To Reuse

* `VenueInfoPanel`
* Section heading / eyebrow pattern
* Existing image carousel frame, if needed for approved venue imagery
* Existing CTA style for event or learn-more actions

### Existing Components To Adapt

* Resorts World Theatre section pattern
* Existing Venue section pattern
* AEG intro / editorial intro pattern only where governance supports it

### Potential New Capability Areas

* Relationship labeling that distinguishes program, venue, and event context.
* Cross-linking language between Resorts World Live and The Stage at Zouk.
* Mobile-friendly orientation for a long Entertainment page.

### Constraints

* The Stage at Zouk must be the primary section identity.
* Resorts World Live must not be treated as a separate venue.
* Do not invent package inventory, ticketing rules, venue facts, social content, or partner claims.
* Preserve event discovery and ticket conversion paths.
* Use brand direction: personal welcoming luxury, curated resort ecosystem, Vegas energy without overwhelming the guest.
* Use movement-rich entertainment imagery only if approved assets exist.
* Treat AEG logo placement, AEG content, and AEG policy references as governed constraints.

### Benefit Validation Experience Requirements

This is a confidence-building orientation experience, not an editorial validation or testimonial concept. Any proof or validation used in exploration must appear adjacent to the specific venue or relationship claim it supports. Do not create standalone testimonial walls, press-logo collections, or quote galleries.

### Figma Make Prompt

```text
Context:
Create a Figma Make exploration for an enhancement to the existing Resorts World Las Vegas Entertainment page. This is not a standalone landing page and not a full Entertainment redesign. The selected concept is CON-01 Resorts World Live Orientation Journey. The approved design direction is DR-01 The Stage at Zouk Orientation Feature.

Experience Integration Context:
Surface Type: Page Section
Existing Surface: Existing Resorts World Las Vegas Entertainment page
Existing Components To Preserve:
- Existing global header and navigation
- Existing hero carousel
- Existing event discovery and event listing
- Existing Resorts World Theatre / Theatre Amenities content
- Existing Ayu Dayclub and Zouk Nightclub venue discovery
- Existing ticket, table, learn-more, and booking paths
- Existing booking widget and footer
Recommended Placement: Insert this section after the existing Resorts World Theatre / Theatre Amenities content and before the FAQ/support area.
Module Scope: Medium
Exploration Constraint: Design this as an inserted orientation section within the existing Entertainment page. Do not redesign the entire page. Do not create a standalone landing page. Do not redesign global navigation, event listing, venue sections, booking widget, or footer. Assume the surrounding page already exists.

Benefit Validation Experience Requirements:
This is a confidence-building orientation experience. If using proof, validation, venue facts, partner marks, or social context, place each signal adjacent to the specific claim it supports. Do not create testimonial walls, press-logo collections, review galleries, or disconnected proof sections.

Goal:
Explore how an inserted orientation section can clarify that The Stage at Zouk is the primary venue identity for the Resorts World Live context and help guests continue into relevant event discovery.

Audience:
Guests browsing entertainment who need to understand what Resorts World Live is, how it relates to The Stage at Zouk, and what action they can take next.

Primary Placement:
After Theatre / Theatre Amenities and before FAQ.

Core Experience Pattern:
Orientation Section.

Supporting Patterns:
- Venue information pattern
- Experience-directory cues
- Action-clarity cues
- Optional restrained social-context cues

Existing Component Reuse:
Reuse the existing VenueInfoPanel logic, section heading / eyebrow pattern, approved venue imagery treatment, existing CTA style, and the visual restraint already used in Resorts World venue modules.

Constraints:
- Introduce The Stage at Zouk as the primary section identity.
- Explain the relationship between Resorts World Live and The Stage at Zouk.
- Do not treat Resorts World Live as a separate venue.
- Preserve existing event discovery.
- Preserve existing venue discovery.
- Preserve ticket conversion paths.
- Do not invent package inventory, social content, venue facts, partner claims, or ticketing rules.
- Keep the experience premium, composed, and hospitality-led.
- Use the brand tone of personal welcoming luxury, curated resort ecosystem, and Vegas energy without guest overwhelm.
- Treat AEG logo placement, AEG content removal, and AEG policy references as governance constraints.

Visual Exploration Instructions:
Explore a composed section that feels inserted naturally into the existing Entertainment page. The section should lead with The Stage at Zouk, explain the Resorts World Live relationship in concise language, and create a clear bridge to relevant event discovery. Use hierarchy, pacing, imagery, and spacing to make the relationship understandable before asking guests to act. Avoid generic card-heavy layouts, excessive promotional copy, casino-style visual noise, or conversion pressure.

Desired Learning Outcome:
Learn whether a dedicated orientation section can make the Resorts World Live / The Stage at Zouk relationship clear while preserving the guest's path into events and ticket actions.

Design Risks To Explore:
- The section may make Resorts World Live feel like a separate venue.
- The section may become too editorial and slow event discovery.
- The section may compete with ticket actions.
- Partner or AEG governance may affect visual hierarchy.

Success Criteria:
- The Stage at Zouk is immediately understood as the primary section identity.
- Resorts World Live is explained clearly without being treated as a separate venue.
- The inserted section feels native to the existing Entertainment page.
- Event discovery and ticket paths remain visible and easy to continue.
- The section feels premium, restrained, energetic, and hospitality-forward.
```

## Direction DR-02

### Design Direction ID

DR-02

### Design Direction Name

Resorts World Live Event Bridge

### Exploration Goal

Explore how the orientation section can connect guests into relevant event discovery without disrupting the existing event listing or ticket conversion paths.

### Primary Placement

Inside or immediately adjacent to the DR-01 orientation section, with reinforcement near relevant The Stage at Zouk event discovery.

### Experience Integration Context

### Surface Type

Embedded Component

### Existing Surface

Existing Resorts World Las Vegas Entertainment page event-discovery experience.

### Existing Components To Preserve

* Existing event listing and filters.
* Existing event-card patterns.
* Existing venue labels.
* Existing date rows.
* Existing ticket, table, learn-more, and booking paths.

### Recommended Placement

Connected to the inserted orientation section and near relevant The Stage at Zouk / Resorts World Live event moments.

### Module Scope

Small to Medium

### Exploration Constraint

Design this as a bridge from orientation into existing event discovery. Do not replace the event listing. Do not redesign event filters. Do not redesign all event cards. Do not invent event inventory or package eligibility.

### Audience

Guests who understand the venue/programming relationship and are ready to inspect events or select a ticket-related action.

### Core Experience Pattern

Event Bridge

### Supporting Patterns

* Event card reuse.
* Venue badge and date-row context.
* Action clarity.
* Focused curation.

### Existing Components To Reuse

* `EventCard`
* Venue badge pattern
* Date-row pattern
* Existing CTA styles
* Existing event image treatment

### Existing Components To Adapt

* Event-card CTA hierarchy
* The Stage at Zouk venue labels
* Existing event-listing context

### Potential New Capability Areas

* CTA intent labeling.
* Relationship-aware event grouping.
* Rules for which events qualify for the bridge.

### Constraints

* Preserve existing event discovery and event listing.
* Ticket conversion remains primary where appropriate.
* Do not invent events, package inventory, offers, or booking rules.
* Action clarity should feel like concierge guidance, not pressure.
* Use concise supporting labels rather than dense explanations.

### Benefit Validation Experience Requirements

This is a decision-support experience. If any confidence signal is included, place it directly next to the event or action it clarifies. Do not create a separate proof or testimonial section.

### Figma Make Prompt

```text
Context:
Create a Figma Make exploration for DR-02 Resorts World Live Event Bridge as a supporting element to the inserted The Stage at Zouk orientation section on the existing Entertainment page. This is not a standalone page and not a full event-listing redesign.

Experience Integration Context:
Surface Type: Embedded Component
Existing Surface: Existing Resorts World Las Vegas Entertainment page event-discovery experience
Existing Components To Preserve:
- Existing event listing and filters
- Existing event-card patterns
- Existing venue labels
- Existing date rows
- Existing ticket, table, learn-more, and booking paths
Recommended Placement: Connect the bridge to the inserted orientation section and/or near relevant The Stage at Zouk / Resorts World Live event discovery moments.
Module Scope: Small to Medium
Exploration Constraint: Design this as a bridge from orientation into existing event discovery. Do not replace the event listing. Do not redesign event filters. Do not redesign all event cards. Do not invent event inventory or package eligibility.

Benefit Validation Experience Requirements:
This is a decision-support experience. If including any proof, context, or confidence signal, place it next to the specific event or action it clarifies. Do not create standalone testimonial sections, proof walls, or press-logo collections.

Goal:
Explore how guests can move from understanding The Stage at Zouk / Resorts World Live into relevant event discovery and ticket actions with less confusion.

Audience:
Guests who are oriented to the venue/programming relationship and are deciding whether to inspect events, buy tickets, reserve tables, or learn more.

Primary Placement:
Inside or immediately adjacent to the inserted orientation section, with reinforcement near relevant event moments.

Core Experience Pattern:
Event Bridge.

Supporting Patterns:
- Event card reuse
- Venue badge and date context
- Action clarity
- Focused curation

Existing Component Reuse:
Reuse EventCard, venue badge, date row, event imagery, and existing CTA styles. Preserve the surrounding event discovery system.

Constraints:
- Preserve existing event discovery.
- Preserve existing ticket conversion paths.
- Preserve existing venue discovery.
- Do not invent event inventory, package eligibility, stay offers, social content, or operational rules.
- Keep action labels and supporting text clear, brief, and non-pressuring.
- Make The Stage at Zouk context visible without making every event card feel redesigned.

Visual Exploration Instructions:
Explore a focused event bridge that connects the orientation section to relevant The Stage at Zouk / Resorts World Live event discovery. The bridge should clarify venue/date/action context and help guests understand what happens next when they choose ticket, table, learn-more, or booking actions. Keep the bridge restrained and integrated into the existing page, not a separate event microsite.

Desired Learning Outcome:
Learn whether a focused event bridge improves continuity from orientation to ticket action without disrupting the existing event listing.

Design Risks To Explore:
- Too many events may make the section feel like a duplicate listing.
- Too much action explanation may clutter the event experience.
- CTA hierarchy may compete across tickets, tables, learn-more, and booking.
- Guests may miss the connection if The Stage at Zouk context is too subtle.

Success Criteria:
- Guests can understand which events relate to The Stage at Zouk / Resorts World Live.
- Ticket paths remain easy to find.
- Event cards or event references preserve date and venue context.
- The bridge feels like part of the existing Entertainment page.
- The design supports conversion clarity without pressure.
```

## Direction DR-03

### Design Direction ID

DR-03

### Design Direction Name

Entertainment Anchor Refresh

### Exploration Goal

Explore how the existing anchor/navigation hierarchy can reflect the inserted The Stage at Zouk orientation section without turning navigation into a full page redesign.

### Primary Placement

Existing on-page anchor area.

### Experience Integration Context

### Surface Type

Embedded Component

### Existing Surface

Existing Entertainment page on-page anchor navigation.

### Existing Components To Preserve

* Existing global navigation.
* Existing page hero.
* Existing event listing.
* Existing venue sections.
* Existing page structure outside revised anchor and inserted orientation section.

### Recommended Placement

Existing `On This Page` anchor area, aligned with revised body section names.

### Module Scope

Small

### Exploration Constraint

Design this as an anchor hierarchy refresh only. Do not redesign the full navigation. Do not create a new global nav system. Do not redesign the whole Entertainment page.

### Audience

Guests scanning the Entertainment page structure and deciding which venue or section to explore.

### Core Experience Pattern

Wayfinding / Page Anchor Navigation

### Supporting Patterns

* Experience Directory cues.
* Section identity alignment.
* Mobile wayfinding consideration.

### Existing Components To Reuse

* `PageAnchorNav`
* Existing anchor label style
* Existing section-heading language where appropriate

### Existing Components To Adapt

* Anchor label order
* Anchor naming
* Mobile-friendly anchor behavior

### Potential New Capability Areas

* Program-to-venue anchor labeling.
* Mobile anchor treatment for long entertainment pages.

### Constraints

* Anchor naming must not imply Resorts World Live is a separate venue.
* The anchor should align with body section identity.
* Do not invent new sections beyond the approved inserted orientation and existing venue sections.

### Benefit Validation Experience Requirements

Not applicable as a proof or benefit-validation module.

### Figma Make Prompt

```text
Context:
Create a Figma Make exploration for DR-03 Entertainment Anchor Refresh as a supporting change to the existing Entertainment page. This supports the inserted The Stage at Zouk orientation section. It is not a global navigation redesign and not a full page redesign.

Experience Integration Context:
Surface Type: Embedded Component
Existing Surface: Existing Entertainment page on-page anchor navigation
Existing Components To Preserve:
- Existing global navigation
- Existing page hero
- Existing event listing
- Existing venue sections
- Existing page structure outside revised anchor and inserted orientation section
Recommended Placement: Existing On This Page anchor area, aligned with revised body section names.
Module Scope: Small
Exploration Constraint: Design this as an anchor hierarchy refresh only. Do not redesign global navigation. Do not create a new nav system. Do not redesign the full Entertainment page.

Goal:
Explore how the existing anchor hierarchy can help guests discover the inserted The Stage at Zouk / Resorts World Live orientation section and understand the page structure.

Audience:
Guests scanning the page structure and deciding which venue or entertainment section to explore.

Primary Placement:
Existing On This Page anchor area.

Core Experience Pattern:
Wayfinding / Page Anchor Navigation.

Supporting Patterns:
- Experience-directory cues
- Section identity alignment
- Mobile wayfinding consideration

Existing Component Reuse:
Reuse PageAnchorNav and existing anchor styling. Adapt only label order, naming, and responsive behavior as needed for exploration.

Constraints:
- Do not imply Resorts World Live is a separate venue.
- Anchor labels must align with actual body section names.
- Preserve existing Entertainment page content and event discovery.
- Do not invent new page sections beyond the approved orientation section and existing venue sections.

Visual Exploration Instructions:
Explore a revised anchor hierarchy that makes the inserted section findable while preserving the current page's structure. Show how the anchor could represent The Stage at Zouk / Resorts World Live without confusing venue and program taxonomy. Include a mobile-aware wayfinding consideration, but do not redesign the mobile header or global nav.

Desired Learning Outcome:
Learn whether anchor hierarchy can improve discoverability of the inserted orientation section and clarify page structure.

Design Risks To Explore:
- Anchor naming may confuse program and venue taxonomy.
- Mobile behavior may not support the same anchor pattern.
- Navigation changes may overpromise if section content is not clear.

Success Criteria:
- The inserted orientation section is findable.
- Anchor naming aligns with body hierarchy.
- Existing event and venue discovery remain intact.
- The anchor refresh feels like a small page-system adjustment, not a redesign.
```

## Direction DR-05

### Design Direction ID

DR-05

### Design Direction Name

FAQ Continuity Treatment

### Exploration Goal

Explore how FAQ can move lower in the page while remaining accessible, preserving support confidence, and reducing interruption between Theatre and venue discovery.

### Primary Placement

After primary venue/programming discovery and before footer / booking utilities, or lower in the page with clear support access.

### Experience Integration Context

### Surface Type

Page Module

### Existing Surface

Existing Entertainment page FAQ/support module.

### Existing Components To Preserve

* Existing FAQ categories.
* Existing FAQ accordion behavior.
* Existing policy/support content until governance review.
* Existing venue and event discovery above FAQ.
* Existing footer and booking widget below or near lower page content.

### Recommended Placement

Lower in the Entertainment page after the main venue/programming discovery sequence.

### Module Scope

Medium

### Exploration Constraint

Design this as a relocation and continuity treatment for the existing FAQ module. Do not rewrite FAQ policy content. Do not redesign support content from scratch. Do not remove accessibility, ticketing, policy, directions, or food and beverage support.

### Audience

Guests who need ticketing, policy, accessibility, directions, or food and beverage support after exploring entertainment options.

### Core Experience Pattern

Support Continuity Module

### Supporting Patterns

* FAQTabsAccordion reuse.
* Section pacing.
* Support access cue.

### Existing Components To Reuse

* `FAQTabsAccordion`
* FAQ category tabs
* FAQ question rows
* Existing support category structure

### Existing Components To Adapt

* FAQ placement
* Support access cue
* Section transition into FAQ

### Potential New Capability Areas

* Page-level support access cue.
* Policy/reference governance labeling.
* Mobile support continuity for lower-page FAQ.

### Constraints

* Keep FAQ accessible and findable.
* Preserve existing FAQ categories unless evidence supports changes.
* Treat AEG references in policy content as governance-sensitive.
* Do not let FAQ interrupt the newly clarified venue discovery flow.

### Benefit Validation Experience Requirements

Not applicable as a benefit-validation module.

### Figma Make Prompt

```text
Context:
Create a Figma Make exploration for DR-05 FAQ Continuity Treatment as a supporting page-sequencing enhancement on the existing Entertainment page. This supports the inserted The Stage at Zouk orientation section by moving FAQ out of the middle of venue discovery while keeping support accessible.

Experience Integration Context:
Surface Type: Page Module
Existing Surface: Existing Entertainment page FAQ/support module
Existing Components To Preserve:
- Existing FAQ categories
- Existing FAQ accordion behavior
- Existing policy/support content until governance review
- Existing venue and event discovery above FAQ
- Existing footer and booking widget below or near lower page content
Recommended Placement: Lower in the Entertainment page after the main venue/programming discovery sequence.
Module Scope: Medium
Exploration Constraint: Design this as a relocation and continuity treatment for the existing FAQ module. Do not rewrite FAQ policy content. Do not redesign support content from scratch. Do not remove accessibility, ticketing, policy, directions, or food and beverage support.

Goal:
Explore how FAQ can move lower in the Entertainment page while remaining findable and supportive.

Audience:
Guests who need ticketing, policy, accessibility, directions, or food and beverage support after exploring entertainment options.

Primary Placement:
After primary venue/programming discovery and before footer / booking utilities, or lower in the page with clear support access.

Core Experience Pattern:
Support Continuity Module.

Supporting Patterns:
- FAQTabsAccordion reuse
- Section pacing
- Support access cue

Existing Component Reuse:
Reuse FAQTabsAccordion, FAQ category tabs, FAQ question rows, and current category structure.

Constraints:
- Keep FAQ accessible and findable.
- Preserve FAQ categories unless evidence supports simplification.
- Treat AEG references and policy content as governance-sensitive.
- Do not let FAQ interrupt the clarified venue discovery flow.
- Do not create a new support page.

Visual Exploration Instructions:
Explore a lower-page FAQ treatment that preserves support confidence while improving the flow from Theatre to The Stage at Zouk / Resorts World Live to other venue discovery. The FAQ should feel accessible but secondary to the main entertainment journey. Keep the treatment composed, clear, and consistent with existing page patterns.

Desired Learning Outcome:
Learn whether relocating FAQ can improve venue-discovery continuity without making support content feel hidden.

Design Risks To Explore:
- FAQ may become harder to find.
- Policy or AEG references may require governance review.
- Lower-page support may feel disconnected if transition cues are weak.

Success Criteria:
- FAQ no longer interrupts venue discovery.
- Guests can still find support content easily.
- Existing FAQ structure remains recognizable.
- AEG and policy references are not changed or visually misrepresented.
```

# Design Exploration Portfolio

| Direction | Placement | Audience | Reuse Potential | Learning Goal |
| --------- | --------- | -------- | --------------- | ------------- |
| DR-01 The Stage at Zouk Orientation Feature | After Theatre / Theatre Amenities, before FAQ | Guests trying to understand Resorts World Live and The Stage at Zouk | High: `VenueInfoPanel`, section headings, image treatment, CTA styles | Learn whether an inserted orientation section clarifies the relationship without disrupting the existing page. |
| DR-02 Resorts World Live Event Bridge | Connected to orientation and relevant event moments | Guests ready to inspect events or choose ticket/table/learn-more actions | High: `EventCard`, venue badges, date rows, CTA styles | Learn whether orientation can bridge naturally into event discovery and ticket conversion. |
| DR-03 Entertainment Anchor Refresh | Existing on-page anchor area | Guests scanning the page structure | High: `PageAnchorNav` | Learn whether revised anchors make the inserted section findable without redesigning navigation. |
| DR-05 FAQ Continuity Treatment | Lower page after main venue/programming discovery | Guests needing support after exploring entertainment options | High: `FAQTabsAccordion`, FAQ tabs, question rows | Learn whether FAQ relocation improves venue-discovery flow while keeping support accessible. |
