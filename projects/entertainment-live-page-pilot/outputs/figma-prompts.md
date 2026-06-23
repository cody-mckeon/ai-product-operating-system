# Figma Make Prompts

## Evidence Basis

Project: `projects/entertainment-live-page-pilot`

Inputs reviewed:

- `agents/figma-prompt-agent.md`
- `projects/entertainment-live-page-pilot/outputs/design-review.md`
- `projects/entertainment-live-page-pilot/outputs/concept-selection.md`
- `projects/entertainment-live-page-pilot/outputs/recommendation.md`

Required design-system context reviewed:

- `design-system/figma-make-context.md`
- `design-system/component-patterns.md`
- `design-system/imagery.md`
- `design-system/typography.md`

Evidence limitations:

- `projects/entertainment-live-page-pilot/component-inventory.md` was not available.
- Component reuse could not be verified against a pilot-local component inventory.
- Reuse guidance is based on Design Review, current-state evidence cited by project outputs, and promoted RWLV component patterns.
- No visual design exploration, Figma file, updated screenshot, or downstream ticketing/booking/social state was available.

## Selected Concept

CON-01: Resorts World Live Orientation Journey.

The approved concept is an inserted enhancement to the existing Entertainment page. It should introduce `The Stage at Zouk` as the primary section identity, explain how Resorts World Live relates to The Stage at Zouk, and bridge guests into relevant event discovery and ticket actions.

## Primary Exploration Direction

DR-01: The Stage at Zouk Orientation Feature.

Explore a Venue Orientation Feature that sits inside the existing Entertainment page after Resorts World Theatre / Theatre Amenities and before FAQ. The section should clarify taxonomy, preserve page rhythm, and avoid becoming a standalone landing-page treatment.

## Secondary Exploration Direction

DR-02: Resorts World Live Event Bridge.

Explore an Event Bridge that connects the orientation section to relevant events and ticket actions while preserving the existing event-discovery foundation.

## Primary Placement

Entertainment page, after Resorts World Theatre / Theatre Amenities and before FAQ.

## Secondary Placement

Near relevant The Stage at Zouk or Resorts World Live event discovery moments, using existing event-card and CTA patterns.

## Core Experience Pattern

Venue Orientation Feature.

This promoted pattern should organize the exploration because the core guest need is understanding the relationship between a venue, a program, and related entertainment actions.

## Supporting Patterns

- Event Bridge.
- Event Card.
- Venue Card or venue section pattern.
- Page Anchor Navigation.
- CTA Block.
- FAQ / Support Continuity.
- Social Proof Layer, only as a governed and subordinate venue-context cue.

## Existing Component Reuse Requirement

### Existing Components To Reuse

Component reuse could not be verified from a pilot-local component inventory. Use only documented current content, observed Entertainment patterns, and reuse opportunities identified by Design Review:

- Existing Entertainment page event cards.
- Existing event date, venue-label, and CTA patterns.
- Existing Theatre and venue section structures where appropriate.
- Existing `On This Page` anchor navigation.
- Existing FAQ tabs, category controls, and accordion rows.
- Existing footer social-link pattern as a baseline for official social access.

### Existing Components To Adapt

- Adapt the existing venue section pattern into a clearer Venue Orientation Feature.
- Adapt event-card labels to clarify The Stage at Zouk / Resorts World Live context where applicable.
- Adapt CTA grouping to distinguish ticket, table, learn-more, and booking intent.
- Adapt anchor navigation to reflect the new section while preserving accurate hierarchy.
- Adapt FAQ placement and anchor access to maintain support continuity.

### Potential New Capability Areas

- Taxonomy-safe relationship labeling for programs and venues.
- Governance model for partner logo placement versus partner content.
- Official venue social-channel inventory and moderation workflow.
- Event-to-venue relationship metadata.
- CTA ownership and destination inventory across ticketing, tables, booking, and external partners.
- Mobile anchor and long-page wayfinding validation.

## Direction DR-01

### Design Direction ID

DR-01

### Design Direction Name

The Stage at Zouk Orientation Feature

### Exploration Goal

Explore how an inserted Venue Orientation Feature can clarify that The Stage at Zouk is the primary section identity and Resorts World Live is related context, while preserving the existing Entertainment page flow and conversion paths.

### Primary Placement

Entertainment page, after Resorts World Theatre / Theatre Amenities and before FAQ.

### Experience Integration Context

#### Surface Type

Page Section

#### Existing Surface

Existing Resorts World Las Vegas Entertainment page.

#### Existing Components To Preserve

- Global header and navigation.
- Existing hero carousel.
- Existing event discovery controls and event listing.
- Existing Resorts World Theatre / Theatre Amenities content.
- Existing venue discovery for Ayu Dayclub and Zouk Nightclub.
- Existing ticket, table, learn-more, booking, footer, and chat paths.

#### Recommended Placement

Between Resorts World Theatre / Theatre Amenities and FAQ.

#### Module Scope

Medium.

#### Exploration Constraint

Design this as an integrated section within the existing Entertainment page. Do not redesign the entire page. Do not create a standalone landing page. Do not replace event discovery. Do not redesign booking, ticketing, or table reservation flows. Assume the surrounding page already exists.

### Audience

Guests browsing Entertainment who have seen event and Theatre context and need to understand where The Stage at Zouk and Resorts World Live fit before continuing into events, venues, tickets, or tables.

### Core Experience Pattern

Venue Orientation Feature.

### Supporting Patterns

- Editorial Feature for concise relationship explanation.
- CTA Block for a clear next step after orientation.
- Event Bridge as the next connected exploration.
- Page Anchor Navigation for wayfinding continuity.

### Existing Components To Reuse

- Existing Entertainment section heading conventions.
- Existing venue section composition where appropriate.
- Existing CTA styling and hierarchy.
- Existing image or carousel framing only if it supports venue clarity.

### Existing Components To Adapt

- Adapt the current venue section pattern so it introduces a venue/program relationship rather than simply merchandising a venue.
- Adapt heading and label hierarchy so `The Stage at Zouk` is the clear H2 and Resorts World Live is supporting relationship context.

### Potential New Capability Areas

- Program-to-venue relationship label.
- AEG governance marker or partner placement zone, only if approved by stakeholders.
- Official venue image or media eligibility indicator.

### Constraints

- The Stage at Zouk must be the primary section identity.
- Resorts World Live must not be treated as a separate venue.
- Preserve event discovery and ticket conversion paths.
- Do not invent events, event counts, package eligibility, venue facts, social proof, or partner claims.
- Do not use generic nightlife imagery, dark abstract lights, or ungoverned social-looking imagery.
- Follow RWLV typography guidance: clear H2, concise supporting copy, precise labels, no oversized display treatment inside dense content.
- Follow RWLV hospitality behavior: orient guests before asking for action.
- Follow RWLV conversion behavior: action should feel helpful and timely, not pressured.

### Figma Make Prompt

```text
Create an inserted enhancement section for the existing Resorts World Las Vegas Entertainment page.

This is not a full Entertainment page redesign and not a standalone landing page. Preserve the existing page context: global header, hero, event discovery controls, event listing, Resorts World Theatre / Theatre Amenities, venue discovery, ticket/table/learn-more paths, booking paths, footer, and chat.

Place the new section after Resorts World Theatre / Theatre Amenities and before FAQ.

Use the promoted RWLV Venue Orientation Feature pattern. The section should introduce The Stage at Zouk as the primary H2 section identity and explain the relationship between Resorts World Live and The Stage at Zouk in concise, guest-friendly supporting copy. Resorts World Live must be treated as related programming/context, not as a separate venue.

The section should feel premium, welcoming, precise, and operationally clear. It should behave like a hospitality host: orient the guest before asking them to act. Preserve the surrounding Entertainment page rhythm and avoid standalone campaign-page behavior.

Use imagery direction consistent with RWLV guidance: show a specific stage, venue, performance environment, or entertainment moment that helps guests understand The Stage at Zouk. Avoid generic nightlife texture, abstract lights, overly dark crops, ungoverned social imagery, or imagery that implies unconfirmed events.

Use typography direction consistent with RWLV guidance: clear semantic heading hierarchy, The Stage at Zouk as the H2, concise body copy that explains the relationship, precise labels for venue/program/action context, and no display-scale type inside dense controls or cards.

Include a restrained next-step area that can bridge guests toward related event discovery or venue detail without replacing the existing event listing. Use existing CTA hierarchy and avoid multiple competing primary actions.

Do not invent event names, event counts, package offers, social posts, partner claims, venue facts, or AEG copy. Treat AEG logo/content as governance-sensitive and do not introduce new partner language unless explicitly provided.
```

## Direction DR-02

### Design Direction ID

DR-02

### Design Direction Name

Resorts World Live Event Bridge

### Exploration Goal

Explore how the orientation section can continue into relevant event discovery and ticket conversion without duplicating or replacing the existing Entertainment event listing.

### Primary Placement

Immediately within or after the DR-01 orientation section, with secondary presence near relevant event discovery moments.

### Experience Integration Context

#### Surface Type

Page Module

#### Existing Surface

Existing Resorts World Las Vegas Entertainment page event discovery experience.

#### Existing Components To Preserve

- Existing event filters.
- Existing event listing.
- Existing event cards.
- Existing date, venue, and CTA conventions.
- Existing ticket, table, and learn-more paths.

#### Recommended Placement

Adjacent to the new The Stage at Zouk orientation section, with a clear path back into the broader event listing.

#### Module Scope

Medium.

#### Exploration Constraint

Design this as an event-discovery bridge within the existing Entertainment page. Do not replace the full event listing. Do not redesign event filters. Do not redesign ticketing, table, or booking flows. Assume existing event-card data and destinations remain governed by current systems.

### Audience

Guests who understand the The Stage at Zouk / Resorts World Live relationship and are ready to find relevant events or choose a commercial action.

### Core Experience Pattern

Event Bridge.

### Supporting Patterns

- Event Card.
- CTA Block.
- Venue Orientation Feature.
- Page Anchor Navigation.

### Existing Components To Reuse

- Existing event cards.
- Existing date rows.
- Existing venue labels or badges.
- Existing ticket, table, and learn-more CTA patterns.
- Existing event listing context.

### Existing Components To Adapt

- Adapt event-card labels to make The Stage at Zouk and Resorts World Live context clearer where relevant.
- Adapt CTA grouping so ticket, table, learn-more, and booking intent are easier to distinguish.
- Adapt section links or anchors so guests can move between the orientation section and the full event listing.

### Potential New Capability Areas

- Relationship-aware event labeling.
- CTA intent helper labels.
- Event-to-section wayfinding.
- Eligibility guardrails for any future stay or package cross-promotion.

### Constraints

- Preserve event discovery as the primary commercial foundation.
- Preserve existing event filters and listing behavior.
- Preserve ticket conversion paths and third-party handoffs.
- Do not invent events, ticket availability, table availability, package eligibility, or booking rules.
- Keep event information dense but organized and scannable.
- Use precise CTA and label typography.
- Avoid pressure-heavy conversion language.

### Figma Make Prompt

```text
Create an Event Bridge module connected to the new The Stage at Zouk orientation section on the existing Resorts World Las Vegas Entertainment page.

This is an inserted enhancement, not a replacement for the existing event listing. Preserve the current event discovery controls, event cards, date rows, venue labels, ticket/table/learn-more CTAs, and downstream conversion paths.

Use the promoted RWLV Event Bridge pattern supported by Event Card and CTA Block patterns. The bridge should help guests move from understanding The Stage at Zouk and Resorts World Live context into relevant event discovery and commercial action.

Show a small, focused pathway into related events without duplicating the full event listing. Make date, venue, and action intent easy to scan. If multiple actions appear, distinguish ticket, table, learn-more, and booking intent through clear labels and hierarchy.

Follow RWLV conversion behavior: the module should make action feel timely and helpful, not pressured. Do not use fake urgency, sales-heavy copy, or multiple competing primary CTAs.

Follow RWLV typography guidance: keep labels precise, preserve readable hierarchy, and avoid display-scale type inside compact event cards or controls.

Follow RWLV imagery guidance if event imagery appears: use specific, governed event or venue imagery. Do not invent artists, event names, dates, availability, or social proof. Do not use generic abstract lights or overly dark crops as a substitute for event context.

Include a clear path back to the broader Entertainment event discovery experience.
```

## Direction DR-03

### Design Direction ID

DR-03

### Design Direction Name

Entertainment Anchor Refresh

### Exploration Goal

Explore how the existing `On This Page` anchor navigation can reflect the new The Stage at Zouk section and preserve long-page wayfinding without creating taxonomy confusion.

### Primary Placement

Existing Entertainment page anchor navigation near the top of the page.

### Experience Integration Context

#### Surface Type

Embedded Component

#### Existing Surface

Existing Entertainment page `On This Page` navigation.

#### Existing Components To Preserve

- Existing global navigation.
- Existing page anchor behavior.
- Existing Entertainment page sections.

#### Recommended Placement

In the existing anchor navigation location, updated only as needed to reflect the revised body structure.

#### Module Scope

Small.

#### Exploration Constraint

Design this as an adaptation of the existing anchor navigation. Do not redesign global navigation. Do not create a new navigation system. Do not split Resorts World Live and The Stage at Zouk into competing section anchors.

### Audience

Guests using page wayfinding to understand available venues, sections, and support content on the Entertainment page.

### Core Experience Pattern

Page Anchor Navigation.

### Supporting Patterns

- Venue Orientation Feature.
- FAQ / Support Continuity.

### Existing Components To Reuse

- Existing `On This Page` anchor navigation.

### Existing Components To Adapt

- Anchor labels and ordering to reflect the added The Stage at Zouk section and relocated FAQ.

### Potential New Capability Areas

- Mobile anchor visibility validation.
- Active-section affordance if already supported by the existing pattern.

### Constraints

- Anchor labels must match actual page sections.
- Do not create a separate anchor that implies Resorts World Live is a separate venue from The Stage at Zouk.
- Keep labels short, precise, and scannable.
- Preserve existing page context and global navigation.

### Figma Make Prompt

```text
Adapt the existing Entertainment page `On This Page` anchor navigation to support the inserted The Stage at Zouk orientation section and FAQ relocation.

This is a small embedded navigation enhancement, not a global navigation redesign. Preserve the existing Entertainment page structure, global header, event discovery, venue discovery, and conversion paths.

Use the promoted RWLV Page Anchor Navigation pattern. Anchor labels should be short, precise, and aligned to actual page sections. Include The Stage at Zouk as the section identity for the new orientation section. Do not create separate competing anchors for Resorts World Live and The Stage at Zouk if that would imply Resorts World Live is a separate venue.

Reflect the relocated FAQ in a way that keeps support content findable without interrupting primary venue and event discovery.

Follow RWLV typography guidance for compact labels: precise, readable, and not display-styled. Preserve mobile readability and avoid awkward wrapping.

Do not redesign global navigation, event filters, booking paths, or the full page.
```

## Direction DR-05

### Design Direction ID

DR-05

### Design Direction Name

FAQ Continuity Treatment

### Exploration Goal

Explore how FAQ can move lower on the Entertainment page while preserving access to support content and keeping venue/event discovery uninterrupted.

### Primary Placement

Lower Entertainment page, after primary venue/program discovery and before footer or booking/footer utilities.

### Experience Integration Context

#### Surface Type

Page Section

#### Existing Surface

Existing Entertainment page FAQ section.

#### Existing Components To Preserve

- Existing FAQ tabs.
- Existing FAQ categories.
- Existing FAQ accordion/question rows.
- Existing FAQ category controls.
- Existing footer and booking/footer utilities.

#### Recommended Placement

After primary venue/program discovery, below the new The Stage at Zouk orientation and existing venue discovery sections.

#### Module Scope

Medium.

#### Exploration Constraint

Design this as a placement and continuity treatment for the existing FAQ. Do not rewrite FAQ content. Do not redesign FAQ behavior. Do not remove policy-sensitive or partner-sensitive content without governance.

### Audience

Guests who have explored events and venues and need practical answers about tickets, policies, location, food and beverage, or accessibility.

### Core Experience Pattern

FAQ / Support Continuity.

### Supporting Patterns

- Page Anchor Navigation.
- CTA Block only if needed for support continuation.

### Existing Components To Reuse

- Existing FAQ tabs.
- Existing FAQ accordion rows.
- Existing previous/next category controls.

### Existing Components To Adapt

- FAQ placement relative to venue discovery.
- Anchor access or section label so moved support content remains findable.

### Potential New Capability Areas

- FAQ anchor or support jump link.
- Governance review for AEG-related FAQ references.
- Analytics review for FAQ engagement after relocation.

### Constraints

- Preserve FAQ accessibility and readability.
- Preserve existing FAQ categories and content unless governance-approved content changes are provided.
- Keep support content lower so it does not interrupt primary entertainment merchandising.
- Do not create new policy copy, AEG copy, ticketing rules, or accessibility claims.
- Follow typography guidance for support content: readable, scannable, and operationally clear.

### Figma Make Prompt

```text
Create a FAQ Continuity Treatment for the existing Entertainment page FAQ.

This is a placement and continuity exploration, not a FAQ redesign. Preserve the existing FAQ tabs, categories, accordion behavior, question rows, and category controls. Do not rewrite policy, ticketing, AEG, accessibility, food and beverage, or location content.

Move the FAQ lower in the page journey so it appears after primary entertainment venue and program discovery, including the inserted The Stage at Zouk orientation section. The goal is to keep venue and event discovery continuous while preserving access to practical support content.

Use the promoted RWLV FAQ / Support Continuity pattern supported by Page Anchor Navigation. If needed, include a clear anchor or section cue so guests can still find FAQ from higher on the page.

Follow RWLV typography guidance: prioritize readability, clear categories, precise labels, and scannable support content. Avoid display-style typography in FAQ controls or dense answer content.

Follow RWLV hospitality behavior: support content should feel helpful and easy to find, not hidden. Follow conversion behavior: FAQ should reduce uncertainty without competing with ticket and venue actions.

Do not redesign the entire Entertainment page, global navigation, event discovery, venue discovery, or booking flows.
```

## Global Prompt Constraints

Apply these constraints to all Figma Make explorations:

- Treat the work as an enhancement to the existing Entertainment page.
- Preserve existing event discovery.
- Preserve existing venue discovery.
- Preserve existing ticket, table, learn-more, booking, footer, and chat paths.
- Preserve existing page context and surrounding rhythm.
- Reuse promoted RWLV component patterns before inventing new pattern families.
- Follow RWLV imagery guidance: specific, governed, clear, energetic, and not generic.
- Follow RWLV typography guidance: clear hierarchy, precise labels, readable body copy, and no unconfirmed type specs.
- Follow RWLV hospitality behavior: orient, clarify, and support before asking for action.
- Follow RWLV conversion behavior: make action timely, clear, and respectful.
- Do not create a full Entertainment redesign.
- Do not create a standalone Resorts World Live landing page inside the Entertainment page.
- Do not invent events, artists, dates, availability, social content, package eligibility, partner claims, or venue facts.
- Do not introduce new AEG content or remove AEG-related policy content without governance direction.
