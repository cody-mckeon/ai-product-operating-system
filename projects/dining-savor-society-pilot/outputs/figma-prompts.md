# Figma Make Prompts

## Evidence And Reuse Limitations

The approved direction is documented in `outputs/concept-selection.md`; no separate `outputs/selected-concept.md` was supplied. No production `component-inventory.md`, current screenshots, approved asset library, exact design tokens, or verified responsive component specifications were available.

Component reuse therefore cannot be verified at the production-component level. The prompts below reference only promoted pattern families from the supplied design system and observed content roles from Design Review. Figma Make must not invent named production components, exact token values, event inventory, operational states, venue participation, list benefits, or reservation capabilities.

---

## Selected Concept

**CON-01 — Meet Savor Society**, supported by **CON-02 — Savor Through the Venues** and **CON-06 — Connected Culinary Context**.

Dining remains the venue-led destination for discovering and reserving restaurants and lounges. Savor Society is introduced as a cross-venue culinary and cocktail collective through restrained editorial orientation, participating-venue evidence, and clear continuity to the canonical Savor Society experience.

## Primary Exploration Direction

**DR-01 — Editorial Orientation With Venue Evidence**

Explore an inserted Dining-page section that defines Savor Society, makes its relationship to participating venues concrete, and offers one program-discovery action without competing with Dining filters, categories, venue discovery, or restaurant reservations.

## Secondary Exploration Direction

- **DR-02 — Contextual Venue Relationship Layer:** restrained Savor Society context for confirmed participating venues while venue identity and restaurant reservations remain primary.
- **DR-03 — Cross-Page Context Bridge:** reciprocal collective, program, venue, and action cues between Dining and Savor Society without duplicating content or redesigning navigation.

## Primary Placement

On the existing Dining page, after the Dining introduction and core discovery controls and before the first full venue category.

## Secondary Placement

- Within confirmed participating-venue evaluation on Dining, using a small supporting relationship cue.
- Within relevant Savor Society program content, using reciprocal host-venue and Dining context.

## Core Experience Pattern

An **Editorial Feature** adapted as a **Venue Orientation Feature**. The experience uses one approved visual lead, discovery-level typography, concise collective definition, participating-venue evidence, and one focused CTA Block for program exploration.

## Supporting Patterns

- Venue Orientation Feature.
- Venue Card content roles for venue evidence.
- Event Bridge for program-to-venue continuity.
- CTA Block for one earned program-discovery action.
- Existing wayfinding or contextual-link behaviors where confirmed.

---

## Prompt 1 — Primary Dining Orientation

### Design Direction ID

DR-01

### Design Direction Name

Editorial Orientation With Venue Evidence

### Exploration Goal

Learn whether a restrained editorial section can make Savor Society understandable and discoverable without delaying or visually competing with the Dining page's venue-discovery and restaurant-reservation journey.

### Primary Placement

After the existing Dining introduction and discovery controls; before the first full venue category.

### Experience Integration Context

#### Surface Type

Page Section

#### Existing Surface

Resorts World Las Vegas Dining page.

#### Existing Components To Preserve

- Existing global header and navigation.
- Existing Dining hero and promotional imagery.
- Existing Dining introduction.
- Existing date/time, category, and cuisine filters.
- Existing Fine Dining, Casual Dining, Famous Foods, Bars & Lounges, and Quick Eats hierarchy.
- Existing venue summaries and “Learn More” actions.
- Existing restaurant reservation actions and destinations.
- Existing hotel booking area, breadcrumbs, and footer.
- Existing page architecture and responsive context.

#### Recommended Placement

Insert the new section between the Dining introduction/discovery controls and the first full venue category. Maintain an obvious continuation into restaurant results.

#### Module Scope

Medium

#### Exploration Constraint

This is an inserted section within the existing Dining page, not a standalone marketing landing page. Do not redesign the Dining page, hero, introduction, filters, categories, restaurant cards, restaurant reservation flow, global navigation, hotel booking, or footer. Do not create a second hero, event calendar, venue grid, promotional banner, modal, or separate Savor Society page.

### Audience

Guests who arrived to discover restaurants or lounges and may also value chef collaborations, mixology takeovers, and recurring culinary experiences.

### Core Experience Pattern

Editorial Feature adapted for collective and venue orientation.

### Supporting Patterns

- Venue Orientation Feature.
- Venue Card content roles for restrained participating-venue evidence.
- CTA Block for one Savor Society exploration action.

### Existing Components To Reuse

Production reuse is unverified because no component inventory was supplied. Reuse the documented roles and the existing page's visual language rather than inventing a new pattern family:

- Existing Dining section rhythm and container logic.
- Existing link/button treatment where suitable.
- Existing venue-name and supporting-copy conventions where they clarify participating-venue evidence.
- Promoted Editorial Feature, Venue Orientation Feature, and CTA Block roles.

### Existing Components To Adapt

- Adapt Editorial Feature from a general story-led section into a concise collective orientation.
- Adapt Venue Orientation Feature to explain a program that operates across venues rather than a single venue.
- Adapt existing venue-label conventions for a small set of confirmed examples without recreating full Venue Cards.
- Adapt CTA Block emphasis for exploration rather than reservation.

### Potential New Capability Areas

- A restrained way to present participating-venue evidence without a card grid or logo wall.
- A stable no-current-event state that preserves the collective orientation.
- Responsive sequencing that preserves a short path from filters to the first venue category.
- Clear visual distinction between a program-oriented section and a Dining category.

### Constraints

- Dining remains the primary page identity and venue-discovery journey.
- Savor Society must read as a year-round cross-venue culinary and cocktail collective, not a restaurant, venue, dining category, loyalty program, offer, or package.
- Use one program-discovery action only; do not include an event reservation or list-signup CTA in this section.
- Do not duplicate Savor Society program listings or create a calendar.
- Use only confirmed collective language and venue relationships from approved inputs.
- Do not invent dates, availability, pricing, priority access, membership benefits, or current programming.
- If venue examples appear, use only approved examples already documented, such as Kusa Nori, Stubborn Seed, or Allē Lounge on 66, and do not imply exhaustive or continuously active participation.
- Preserve restaurant reservation visibility and the transition into Fine Dining or the first active result set.
- Use discovery-level typography, not page-title or hero-scale type.
- Use one approved RWLV food, beverage, venue, talent, or hospitality image with clear subject and environmental context.
- Do not use generic stock luxury, dark casino imagery, abstract cocktail lights, press logos, quotes, or unapproved partner marks.
- Do not invent exact fonts, type sizes, colors, spacing tokens, dimensions, or breakpoints.
- On mobile, use sequential reading order, concise copy, one CTA, clear image cropping, and limited vertical depth before restaurant results.

### Benefit Validation Experience Requirements

Not applicable. This is an orientation and discovery experience, not a benefit-validation, package, comparison, testimonial, or proof-aggregation experience. Do not add testimonial carousels, press recognition, quote galleries, or publication logos.

### Figma Make Prompt

```text
Context
Enhance the existing Resorts World Las Vegas Dining page with the approved “Meet Savor Society” direction. Dining is already a venue-led discovery and reservation experience. Savor Society is a year-round cross-venue culinary and cocktail collective featuring chef collaborations, mixology takeovers, recurring dining experiences, and special food-and-beverage programming. The goal is to increase awareness without repositioning Dining around events or promotions.

Experience Integration Context
Surface Type: Page Section
Existing Surface: Resorts World Las Vegas Dining page
Existing Components To Preserve:
- Global header and navigation
- Dining hero and promotional imagery
- Dining introduction
- Date/time, category, and cuisine filters
- Fine Dining, Casual Dining, Famous Foods, Bars & Lounges, and Quick Eats sections
- Existing restaurant summaries, Learn More links, and restaurant reservation actions
- Hotel booking area, breadcrumbs, footer, and overall page architecture
Recommended Placement: After the Dining introduction and discovery controls, before the first full venue category
Module Scope: Medium
Exploration Constraint: This is an inserted section within an existing page, not a standalone marketing landing page. Do not redesign the Dining page, navigation, hero, filters, venue categories, restaurant cards, reservation paths, booking flow, or footer. Do not create a second hero, event calendar, venue grid, banner, modal, or standalone Savor Society page.

Goal
Explore how a restrained editorial section can help guests understand what Savor Society is, why it belongs within Dining, and how to continue to the canonical Savor Society experience without interrupting restaurant discovery.

Audience
Guests browsing restaurants and lounges who may also be interested in chef collaborations, mixology takeovers, and recurring culinary experiences.

Primary Placement
Place the inserted orientation after the Dining introduction and discovery controls and before the first full venue category. Preserve an obvious visual and reading-order continuation into restaurant results.

Core Experience Pattern
Use the promoted Editorial Feature pattern adapted as a Venue Orientation Feature. Keep it smaller and quieter than the Dining hero. Treat it as a discovery section, not a page arrival or campaign takeover.

Supporting Patterns
- Venue Orientation Feature for explaining the collective-to-venue relationship
- Venue Card content roles for restrained participating-venue evidence without recreating full cards
- CTA Block for one earned program-discovery action

Existing Component Reuse
No production component inventory is available, so do not invent named components. Reuse the existing Dining page’s section rhythm, container logic, typography hierarchy, action treatment, venue-label conventions, and promoted Editorial Feature, Venue Orientation Feature, and CTA Block roles where appropriate.

Constraints
- Dining remains the primary page identity and venue-discovery experience.
- Savor Society must read as a cross-venue culinary and cocktail collective, never a restaurant, venue, dining category, offer, package, or loyalty program.
- Preserve all existing restaurant discovery and reservation paths.
- Include one program-discovery action only. Do not add event reservation or list-signup actions here.
- Do not duplicate the Savor Society page or event inventory.
- Do not invent dates, prices, availability, venue participation, priority benefits, membership promises, or operational capabilities.
- If using examples, use only approved documented relationships such as Kusa Nori, Stubborn Seed, or Allē Lounge on 66, and do not imply an exhaustive or continuously active list.
- Use discovery-level typography below the Dining page title hierarchy.
- Use one real-feeling, approved RWLV food, beverage, venue, talent, or hospitality image with clear subject and setting context.
- Avoid generic stock luxury, dark casino styling, neon, decorative glow, abstract cocktails, press logos, quote galleries, and unapproved partner marks.
- Do not invent exact fonts, sizes, colors, spacing values, dimensions, breakpoints, or motion timings.
- On mobile, preserve sequential reading order, compact headings, concise copy, one CTA, clear crop behavior, and limited depth before the first restaurant result.

Benefit Validation Experience Requirements
Not applicable. Do not add testimonials, editorial proof galleries, publication logos, benefit cards, or comparison content.

Visual Exploration Instructions
Explore a composed, warm, editorial, premium section with one focal point. The information order should be:
1. Functional label identifying a culinary collective
2. “Meet Savor Society” heading
3. Concise definition and Dining relevance
4. One approved visual lead
5. Restrained participating-venue evidence that makes the cross-venue relationship concrete
6. One clearly labeled action to explore Savor Society
7. Immediate continuation into the existing venue category content

Keep venue evidence subordinate to the collective story. Do not use a row of equal-weight cards or a logo wall. Use imagery and spacing for atmosphere, but keep operational meaning in text. Make the section feel integrated with the surrounding Dining page rather than imported from a campaign.

Desired Learning Outcome
Determine whether guests can understand Savor Society as a cross-venue program and notice a clear path to deeper discovery without mistaking it for a restaurant category or losing the venue-discovery flow.

Design Risks To Explore
- Second-hero behavior
- Banner-like promotion
- Excess vertical depth before venue results
- Participating-venue evidence becoming a second card grid
- Program CTA competing with restaurant reservation intent
- Generic or misleading culinary imagery
- Mobile heading, image, and venue-label density

Success Criteria
- Dining remains visibly venue-led.
- The existing hero, introduction, filters, categories, venue summaries, and restaurant reservations remain intact.
- Savor Society is understandable before the CTA appears.
- The collective-to-venue relationship is clear without implying Savor Society is a venue or category.
- One program-discovery action is visually clear and distinct from restaurant reservations.
- The section does not require a current marquee event to feel complete.
- The transition back into restaurant discovery is immediate and obvious.
- Desktop and mobile treatments remain composed, readable, accessible, and consistent with RWLV hospitality guidance.
```

---

## Prompt 2 — Participating-Venue Context

### Design Direction ID

DR-02

### Design Direction Name

Contextual Venue Relationship Layer

### Exploration Goal

Learn how confirmed participating venues can expose a concise Savor Society relationship without increasing venue-card density, adding a competing primary CTA, or confusing a program with the venue's standard restaurant reservation.

### Primary Placement

Within the evaluation context of confirmed participating venues on the existing Dining page, supported by reciprocal host-venue context on Savor Society.

### Experience Integration Context

#### Surface Type

Embedded Component

#### Existing Surface

Existing Dining venue summaries or venue-evaluation content.

#### Existing Components To Preserve

- Venue name and category context.
- Venue image and description where present.
- Existing venue “Learn More” action.
- Existing standard restaurant reservation action.
- Existing category grouping and venue scan pattern.
- Existing filter behavior and result continuity.

#### Recommended Placement

Attach a restrained relationship cue to confirmed participating-venue context. Do not apply it to all venues and do not create a separate participating-venue grid.

#### Module Scope

Small

#### Exploration Constraint

Design this as a small supporting cue within an existing venue experience. Do not redesign venue cards, categories, filters, restaurant reservation paths, or the Dining page. Do not add a third equal-weight CTA. Do not create event cards inside venue cards.

### Audience

Guests evaluating a specific restaurant or lounge that has a confirmed Savor Society relationship.

### Core Experience Pattern

Venue Orientation Feature adapted as supporting venue-to-program context.

### Supporting Patterns

- Venue Card.
- Event Bridge content hierarchy.
- Contextual-link behavior.

### Existing Components To Reuse

Production reuse is unverified. Reuse observed venue-summary content roles and documented Venue Card, Venue Orientation Feature, and Event Bridge roles.

### Existing Components To Adapt

- Adapt an existing venue label or supporting metadata treatment to identify a confirmed Savor Society relationship.
- Adapt contextual link treatment for program discovery while keeping venue actions primary.
- Adapt program-type and timing labels only when current and governed.

### Potential New Capability Areas

- A compact relationship cue that does not destabilize repeated venue summaries.
- Active, inactive, expired, and unavailable relationship states.
- A secondary program continuation that does not become a third primary action.
- Reciprocal host-venue labeling on the Savor Society surface.

### Constraints

- Apply only to confirmed participating venues.
- Venue identity remains primary.
- Preserve existing venue detail and restaurant reservation actions.
- Do not imply continuous participation.
- Do not surface event reservation directly unless complete program context is present on the canonical program surface.
- Do not invent dates, status, inventory, venue relationships, or capabilities.
- Keep repeated venue summaries scannable and visually consistent on mobile.
- Do not use badges that resemble offers, loyalty status, awards, or availability claims.

### Benefit Validation Experience Requirements

Not applicable. The venue relationship is orientation context, not a benefit-validation or proof-aggregation experience.

### Figma Make Prompt

```text
Context
Explore DR-02 as a supporting behavior within the approved Dining-to-Savor direction. Some Dining venues have confirmed relationships to Savor Society programming. The design must help guests understand that relationship while keeping the venue, venue details, and standard restaurant reservation primary.

Experience Integration Context
Surface Type: Embedded Component
Existing Surface: Existing Dining venue summaries or venue-evaluation content
Existing Components To Preserve:
- Venue name, category, image, and description
- Existing Learn More action
- Existing restaurant reservation action and destination
- Existing venue grouping, filters, and result continuity
Recommended Placement: A restrained relationship cue within confirmed participating-venue context only
Module Scope: Small
Exploration Constraint: Do not redesign venue cards, venue categories, filters, restaurant reservation paths, or the Dining page. Do not add a third equal-weight CTA. Do not place event cards inside venue cards. Do not apply Savor Society treatment to venues without confirmed participation.

Goal
Explore the smallest understandable expression of the venue-to-program relationship and determine how it can support program discovery without reducing restaurant scanability or confusing reservation intent.

Audience
Guests evaluating a specific restaurant or lounge with a confirmed Savor Society relationship.

Primary Placement
Within the venue-evaluation context, subordinate to venue identity and existing venue actions.

Core Experience Pattern
Use the Venue Orientation Feature as compact supporting context within the documented Venue Card role.

Supporting Patterns
- Event Bridge content hierarchy for connecting host venue to program context
- Contextual-link behavior for an optional program continuation

Existing Component Reuse
No production component inventory is available. Reuse observed venue-summary roles and established label, metadata, link, Venue Card, Venue Orientation Feature, and Event Bridge patterns. Do not invent a named badge or component family.

Constraints
- Venue identity remains primary.
- Existing venue detail and restaurant reservation actions remain unchanged and discoverable.
- Program context is supporting information, not a third primary action.
- Do not imply continuous participation or guaranteed availability.
- Do not invent programs, dates, status, prices, booking capability, partner claims, or venue relationships.
- Avoid offer-style, loyalty-style, award-style, or urgency-style badges.
- Keep repeated venue summaries consistent, concise, and mobile-scannable.
- Do not use motion, hover, or imagery alone to explain the relationship.
- If no active confirmed relationship exists, show no stale cue.

Benefit Validation Experience Requirements
Not applicable. Do not add testimonials, proof logos, awards, or validation galleries.

Visual Exploration Instructions
Explore a quiet, functional relationship treatment using concise labels and supporting text. Test whether guests can understand:
- This is the venue they are evaluating.
- This venue has a confirmed Savor Society relationship.
- Savor Society is a program or collective, not another venue.
- The standard restaurant reservation remains separate from program exploration.

Keep the cue visually subordinate to the venue name and standard reservation action. Explore how the treatment behaves when the venue has a current program, a recurring relationship, no active relationship, or an expired relationship, without inventing operational content.

Desired Learning Outcome
Determine whether a compact venue relationship cue improves Savor Society relevance without creating CTA competition, uneven cards, or ambiguity between restaurant and event reservations.

Design Risks To Explore
- Third-CTA competition
- Venue-card density and uneven height
- Badge behavior that implies offers, status, or continuous participation
- Mobile wrapping and scanning friction
- Event and restaurant reservation confusion
- Stale relationship cues

Success Criteria
- Venue identity remains dominant.
- Existing Learn More and restaurant reservation paths remain clear.
- The Savor Society relationship is understandable but visually secondary.
- No program relationship appears without confirmed source content.
- No new event inventory is duplicated in Dining.
- Mobile venue scanning remains calm and consistent.
- The treatment can disappear cleanly when no active relationship exists.
```

---

## Prompt 3 — Cross-Page Continuity

### Design Direction ID

DR-03

### Design Direction Name

Cross-Page Context Bridge

### Exploration Goal

Learn how Dining and Savor Society can preserve collective, program, host-venue, and action meaning across page transitions without redesigning navigation, duplicating content, or inventing new destinations.

### Primary Placement

At the Dining orientation's Savor Society continuation and within relevant Savor Society program-to-host-venue context.

### Experience Integration Context

#### Surface Type

Embedded Component

#### Existing Surface

Existing Dining page and existing Savor Society page.

#### Existing Components To Preserve

- Dining hero, introduction, filters, categories, venue summaries, and restaurant reservations.
- Savor Society introduction, program sections, ongoing-experience content, and existing actions.
- Existing global navigation, hotel booking, breadcrumbs, and footer unless contextual reuse is confirmed.
- Canonical Dining, venue, Savor Society, and reservation destinations.

#### Recommended Placement

Use coordinated cues at the Dining-to-Savor transition and at Savor Society program-to-host-venue transitions. Keep deeper content on its canonical surface.

#### Module Scope

Medium

#### Exploration Constraint

Explore continuity across existing surfaces, not a new page or navigation system. Do not redesign either page, global navigation, breadcrumbs, venue cards, program inventory, or reservation flow. Do not duplicate the Dining directory on Savor Society or the Savor Society program list on Dining.

### Audience

Guests moving from venue-led Dining discovery into program-led Savor Society discovery, or from a Savor Society program into host-venue context.

### Core Experience Pattern

Event Bridge and Venue Orientation Feature used as reciprocal contextual wayfinding.

### Supporting Patterns

- Contextual-link behavior.
- Venue Card and Event Card content roles.
- Page Anchor Navigation or breadcrumb conventions only if current information architecture supports them.

### Existing Components To Reuse

Production reuse is unverified. Reuse documented contextual-link, Venue Orientation Feature, Event Bridge, Venue Card, Event Card, and wayfinding roles where supported by the existing pages.

### Existing Components To Adapt

- Adapt destination labels so each action identifies whether it opens Savor Society, venue details, a restaurant reservation, or an event reservation.
- Adapt host-venue labels on Savor Society to preserve Dining context.
- Adapt existing related-content or breadcrumb conventions only when they represent the confirmed taxonomy accurately.

### Potential New Capability Areas

- Shared relationship vocabulary across Dining and Savor Society.
- Reciprocal contextual links that preserve source meaning.
- Return-path cues that do not require a new navigation system.
- Consistent treatment for restaurant versus event reservation handoffs.

### Constraints

- Do not create a standalone bridge page.
- Do not redesign global navigation or invent new breadcrumb hierarchy.
- Do not duplicate venue or program content across pages.
- Preserve the canonical role of each surface.
- Keep CTA destination and commitment explicit.
- Do not assume external reservation platforms preserve source context.
- Use only confirmed venue and program relationships.
- Do not invent dates, status, reservation capability, or list benefits.
- Maintain accessible links, semantic headings, and mobile reading order.

### Benefit Validation Experience Requirements

Not applicable. This is a cross-page orientation and continuity experience, not a benefit-validation experience.

### Figma Make Prompt

```text
Context
Explore DR-03 as a supporting behavior within the approved Dining-to-Savor direction. Dining is the canonical venue-discovery and restaurant-reservation surface. Savor Society is the canonical program-discovery surface. Guests need to move between them without losing the relationship among the collective, a program, its host venue, and the correct action.

Experience Integration Context
Surface Type: Embedded Component
Existing Surface: Existing Dining page and existing Savor Society page
Existing Components To Preserve:
- Dining hero, introduction, filters, categories, venue summaries, and restaurant reservations
- Savor Society introduction, program sections, ongoing experiences, and existing actions
- Global navigation, hotel booking, breadcrumbs, and footer unless accurate contextual reuse is confirmed
- Canonical Dining, venue, Savor Society, and reservation destinations
Recommended Placement: Coordinated cues at the Dining-to-Savor continuation and at Savor Society program-to-host-venue transitions
Module Scope: Medium
Exploration Constraint: Do not create a new page, navigation system, breadcrumb hierarchy, or duplicated directory. Do not redesign Dining, Savor Society, venue pages, or reservation flows. Keep each surface canonical for its existing role.

Goal
Explore how shared language, labels, and contextual cues can preserve guest orientation and action intent across Dining, Savor Society, and host-venue transitions.

Audience
Guests moving from venue-led Dining discovery to program-led Savor Society discovery, or from a Savor Society program to host-venue context.

Primary Placement
At the existing Dining orientation’s program-discovery continuation and within relevant Savor Society program-to-host-venue context.

Core Experience Pattern
Use Event Bridge and Venue Orientation Feature roles as reciprocal contextual wayfinding.

Supporting Patterns
- Contextual-link behavior
- Venue Card and Event Card content roles
- Existing anchor or breadcrumb conventions only if they match confirmed information architecture

Existing Component Reuse
No production component inventory is available. Reuse existing link, label, related-content, and wayfinding language where verified. Use promoted Venue Orientation Feature and Event Bridge roles. Do not invent a new named navigation component.

Constraints
- Dining remains canonical for venue discovery and standard restaurant reservations.
- Savor Society remains canonical for collective and program discovery.
- Do not duplicate venue lists or program inventories.
- Do not redesign global navigation or invent breadcrumb relationships.
- Use only confirmed venue and program relationships.
- Keep actions explicit: explore Savor Society, view venue details, reserve a restaurant, reserve a specific event, or join future updates only where supported.
- Do not assume external booking destinations preserve source context.
- Do not invent program dates, availability, booking capability, membership promises, or operational states.
- Preserve semantic headings, accessible links, keyboard behavior, and mobile reading order.

Benefit Validation Experience Requirements
Not applicable. Do not add proof galleries, testimonials, publication marks, or comparison content.

Visual Exploration Instructions
Explore a coordinated but restrained contextual language across the two existing pages. The design should help guests answer:
- Am I viewing a venue or a Savor Society program?
- Which venue hosts this program?
- Does this action open program details, venue details, a restaurant reservation, or an event reservation?
- How can I continue or return without losing context?

Keep cues compact and consistent. Do not create large duplicate modules on both pages. Avoid decorative arrows, journey diagrams, or navigation chrome that competes with content. Use typography, functional labels, and specific link language to carry most of the continuity.

Desired Learning Outcome
Determine whether reciprocal contextual cues make the Dining-to-Savor journey understandable without duplicating content or introducing a new navigation system.

Design Risks To Explore
- Inconsistent collective, program, and venue naming
- Links that do not communicate destination or commitment
- Breadcrumb cues that imply incorrect taxonomy
- Repeated content creating clutter
- External reservation handoffs losing source context
- Mobile cues becoming too verbose or visually fragmented

Success Criteria
- Guests can distinguish venue-led and program-led surfaces.
- The host venue and Savor Society relationship remain clear.
- Restaurant and event reservation actions remain distinct.
- Dining and Savor Society retain their canonical roles.
- No new page, duplicated inventory, or navigation redesign is introduced.
- Cross-page cues remain concise, accessible, and consistent on desktop and mobile.
```

---

# Design Exploration Portfolio

| Direction | Placement | Audience | Reuse Potential | Learning Goal |
| --------- | --------- | -------- | --------------- | ------------- |
| DR-01 Editorial Orientation With Venue Evidence | Dining page after introduction and discovery controls, before first full venue category | Dining visitors who may value culinary programming | High at pattern-role level; production reuse unverified | Determine whether Savor Society can become understandable and discoverable without disrupting restaurant discovery. |
| DR-02 Contextual Venue Relationship Layer | Confirmed participating-venue evaluation on Dining, with reciprocal context on Savor Society | Guests evaluating a participating venue | Medium; Venue Card, Venue Orientation Feature, and Event Bridge roles are relevant | Determine the smallest clear venue-to-program cue that avoids density and CTA competition. |
| DR-03 Cross-Page Context Bridge | Dining-to-Savor and program-to-host-venue transitions | Guests moving between venue-led and program-led discovery | Medium; contextual-link, Venue Orientation Feature, Event Bridge, and wayfinding roles are relevant | Determine whether reciprocal cues preserve orientation and action intent without duplicated content or navigation redesign. |
