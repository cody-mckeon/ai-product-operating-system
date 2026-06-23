# Design Review

## Evidence Basis

Project: `projects/entertainment-live-page-pilot`

Inputs reviewed:

- `agents/design-review-agent.md`
- `projects/entertainment-live-page-pilot/outputs/opportunity-analysis.md`
- `projects/entertainment-live-page-pilot/outputs/recommendation.md`
- `projects/entertainment-live-page-pilot/outputs/concept-selection.md`
- `projects/entertainment-page-pilot/outputs/current-state.md`

Required design-system doctrine reviewed:

- `design-system/ai-design-kit.md`
- `design-system/component-patterns.md`
- `design-system/visual-principles.md`
- `design-system/imagery.md`
- `design-system/typography.md`

Evidence limitations:

- `projects/entertainment-live-page-pilot/outputs/current-state.md` was not present. The review uses `projects/entertainment-page-pilot/outputs/current-state.md`, which is cited by the opportunity analysis and recommendation as the available current-state evidence.
- No visual design exploration, wireframes, Figma files, or updated screenshots were provided for this review.
- No live downstream ticketing, table reservation, booking-engine, social, mobile-anchor, FAQ-expanded, or analytics states were available.
- Component reuse is based on observed and documented patterns, not a pilot-specific component inventory.

## Design System Doctrine Validation Summary

The approved direction aligns with system doctrine when treated as an inserted Entertainment page enhancement, not as a standalone landing page or full-page redesign.

Validated alignments:

- `design-system/ai-design-kit.md`: supports orienting guests before asking them to act, preserving existing discovery paths, explaining unclear venue/program relationships, and keeping conversion helpful rather than pressured.
- `design-system/component-patterns.md`: supports using a Venue Orientation Feature as the core pattern, with Event Bridge, Event Card, Venue Card, Page Anchor Navigation, FAQ / Support Continuity, CTA Block, and Social Proof Layer as supporting patterns.
- `design-system/visual-principles.md`: supports a composed, premium, operationally clear module with one focal point, preserved page rhythm, and no full-page redesign drift.
- `design-system/imagery.md`: supports specific venue or entertainment imagery that clarifies The Stage at Zouk and shows venue energy without relying on abstract lights, dark crops, or ungoverned social imagery.
- `design-system/typography.md`: supports clear heading structure, with `The Stage at Zouk` as the primary section heading and concise body copy explaining the Resorts World Live relationship.

No doctrine conflict was found with CON-01 when the section is governed as a Venue Orientation Feature plus Event Bridge. Potential conflicts would emerge if the design makes Resorts World Live look like a separate venue, invents social or package claims, uses social content without governance, or turns the enhancement into a standalone campaign page.

## Experience Translation

### Selected Concept Summary

The approved concept is CON-01: Resorts World Live Orientation Journey.

The experience should add a clear orientation moment to the existing Entertainment page that introduces The Stage at Zouk as the section identity, explains the Resorts World Live relationship, and bridges guests into relevant event discovery and ticket actions.

Supporting concepts should inform, not replace, the primary direction:

- CON-02: Entertainment Map Of Experiences should inform venue hierarchy, page anchors, and continuity with existing venue discovery.
- CON-04: Event Action Clarity Experience should inform CTA labeling, event-card relationship cues, and commercial action clarity.
- CON-06: Venue Pulse Experience should inform restrained, governed venue-level social context.

### User Problem Being Solved

Guests can encounter Resorts World Live in navigation, The Stage at Zouk in event-card labels, and separate venue sections lower on the page without a clear body-level explanation of how these elements relate.

The selected concept should help guests understand:

- What The Stage at Zouk is.
- How Resorts World Live relates to The Stage at Zouk.
- Where related events can be discovered.
- Which action path leads to tickets, tables, event details, or stay-related exploration.

### Core Experience Pattern

Venue Orientation Feature.

This pattern is confirmed in `design-system/component-patterns.md` as the appropriate reusable pattern for explaining a venue, program, or named experience relationship before discovery or action. It fits the approved concept because the central design task is taxonomy clarity and guest orientation.

### Supporting Experience Patterns

- Event Bridge: connect The Stage at Zouk orientation to relevant event discovery and ticket actions.
- Event Card: preserve the existing event-discovery foundation and make venue/date/action context easy to scan.
- Venue Card or Venue Moment Module: keep The Stage at Zouk coherent with existing venue discovery without flattening all venues into identical tiles.
- Page Anchor Navigation: make the revised page structure visible and navigable.
- FAQ / Support Continuity: move support content lower while preserving findability.
- CTA Block: provide clear action after sufficient context.
- Social Proof Layer: support venue atmosphere only when official, governed, and subordinate to discovery and conversion.

### Trust Strategy

Trust should be earned through accurate taxonomy, restrained language, source clarity, and operational truth.

The design should:

- Make The Stage at Zouk the primary section identity.
- Explain Resorts World Live as associated programming or context without presenting it as a separate venue.
- Avoid invented event counts, package eligibility, social proof, or partner claims.
- Treat AEG logo placement and AEG content removal as governance-sensitive constraints.
- Keep social content official, moderated, and clearly subordinate if explored.

This aligns with `design-system/ai-design-kit.md`, which requires unclear venue or program taxonomy to be explicit, and with `design-system/component-patterns.md`, which warns that Venue Orientation Feature usage can create confusion if it implies a program is a separate venue.

### Information Hierarchy Strategy

Users should notice first:

- `The Stage at Zouk` as the H2 section heading.
- A concise relationship statement that explains Resorts World Live in relation to The Stage at Zouk.

Users should notice second:

- Related event discovery cues.
- Event date, venue, and action context.
- A clear path to tickets or event details.

Users should notice later:

- Venue atmosphere or social context.
- Related venue-discovery continuity.
- FAQ, policy, partner, and support content.

This follows `design-system/typography.md`, which says headings should clarify structure and taxonomy, and `design-system/visual-principles.md`, which says hierarchy should orient before selling.

### Conversion Strategy

The design should preserve event discovery as the main commercial surface and strengthen confidence before action.

Ticket conversion support should:

- Keep ticket actions visible and timely.
- Clarify action intent across tickets, tables, learn-more, and stay-related paths.
- Avoid adding friction for guests who are ready to purchase.
- Avoid pressure-heavy or urgency-driven conversion patterns.

This aligns with `design-system/ai-design-kit.md`, which defines conversion as an act of hospitality and requires relevance, trust, and timing before action.

## Placement Exploration

### Surface

Entertainment Page: After Resorts World Theatre / Theatre Amenities, before FAQ.

### User Context

The guest has already encountered hero/event discovery and Theatre content. They are moving from one major entertainment venue into broader entertainment venue discovery and may be deciding whether The Stage at Zouk, Resorts World Live programming, Theatre events, nightlife, or dayclub content is relevant.

### Benefits

- Directly satisfies the stakeholder request to add a Resorts World Live section after The Theatre section.
- Restores venue-discovery continuity before support content.
- Creates the clearest moment to explain The Stage at Zouk before guests reach lower venue sections.
- Supports `design-system/component-patterns.md` guidance that Venue Orientation Features typically appear after relevant category context and before deeper listings.
- Supports `design-system/visual-principles.md` guidance to preserve page rhythm when adding inserted modules.

### Risks

- If the section is too promotional, it may interrupt the page's event-discovery momentum.
- If the copy is imprecise, it may make Resorts World Live look like a separate venue.
- If FAQ is moved without anchor or support continuity, support findability may suffer.

### Priority

High

### Surface

Entertainment Page: Near the existing event listing or relevant event cards.

### User Context

The guest is actively browsing events, comparing dates, venues, and CTAs. The Stage at Zouk may appear as an event-card venue label without explanatory context.

### Benefits

- Puts orientation near the moment when venue labels matter.
- Supports ticket conversion by clarifying event-to-venue relationships.
- Reinforces Event Bridge and Event Card patterns from `design-system/component-patterns.md`.

### Risks

- The event listing is already commercially dense. Additional explanatory content could clutter discovery.
- Placement too close to filters may compete with date/category/artist browsing tasks.
- It may not satisfy the stakeholder request for a section after The Theatre section.

### Priority

Medium

### Surface

Resorts World Live Experiences Page.

### User Context

The guest has navigated specifically to Resorts World Live and is likely evaluating upcoming programming, tickets, stay options, or related entertainment.

### Benefits

- The page already has a Just Announced lineup, Secure Tickets CTAs, Concert Weekend Stay, and More Entertainment Awaits.
- It can reinforce the relationship between Resorts World Live and The Stage at Zouk for guests already in that context.

### Risks

- It does not solve the Entertainment page body hierarchy gap.
- It does not satisfy the primary stakeholder request for the Entertainment page.
- It could create duplicated orientation content unless governed carefully.

### Priority

Low

### Placement Recommendation

#### Primary Placement

Place the core orientation section after Resorts World Theatre / Theatre Amenities and before FAQ.

#### Secondary Placement

Add a lighter Event Bridge near relevant event discovery surfaces where The Stage at Zouk events appear, using existing event-card logic and action hierarchy.

#### Deferred Placements

Defer major Resorts World Live Experiences page changes and broader entertainment ecosystem mapping until taxonomy, package, and social governance are more mature.

#### Why

The primary placement best satisfies stakeholder direction, current-state gaps, and design-system doctrine. It creates orientation before support content, preserves existing event discovery, and avoids full-page redesign drift.

## Component Exploration

### Direction DR-01: The Stage at Zouk Orientation Feature

#### Component Pattern

Venue Orientation Feature.

#### Experience Role

Introduce The Stage at Zouk as the primary section identity and explain the Resorts World Live relationship in a concise, guest-friendly way.

#### Existing Components To Reuse

- Section heading and eyebrow patterns from existing Entertainment sections.
- Venue imagery or carousel framing if already used for Theatre, Ayu, or Zouk sections.
- Existing CTA styling and hierarchy.

#### Existing Components To Adapt

- Venue information blocks currently used for entertainment venues.
- Editorial feature structure for a concise orientation moment.

#### Potential New Capability Areas

- Program-to-venue relationship labeling.
- Governed partner/logo placement rules for AEG-related content.
- Taxonomy-safe content fields for The Stage at Zouk and Resorts World Live.

#### Doctrine Validation

- Aligns with `design-system/component-patterns.md` Venue Orientation Feature.
- Aligns with `design-system/ai-design-kit.md` hospitality behavior to orient guests before asking them to act.
- Aligns with `design-system/typography.md` because the heading clarifies taxonomy.
- Aligns with `design-system/imagery.md` if imagery shows the actual venue, stage, or entertainment environment clearly.

#### Risks

- Copy could over-explain and slow event-focused guests.
- Imagery could become generic nightlife atmosphere instead of clarifying the venue.
- Poor taxonomy could create the false impression that Resorts World Live is a separate venue.

#### Approval Status

Approved for design exploration.

### Direction DR-02: Resorts World Live Event Bridge

#### Component Pattern

Event Bridge supported by Event Card.

#### Experience Role

Connect the orientation section to relevant upcoming events, ticket paths, and event detail paths without duplicating the full event listing.

#### Existing Components To Reuse

- Event cards.
- Venue labels or badges.
- Date rows.
- Ticket, table, and learn-more CTA patterns.
- Event listing/filter context where applicable.

#### Existing Components To Adapt

- Event cards may need stronger venue/program labels where The Stage at Zouk and Resorts World Live context matters.
- CTA grouping may need clearer action intent when ticket, table, and detail actions appear together.

#### Potential New Capability Areas

- Relationship-aware event labeling.
- CTA intent labeling or helper copy.
- Event-to-section anchor links.

#### Doctrine Validation

- Aligns with `design-system/component-patterns.md` Event Bridge and Event Card patterns.
- Aligns with `design-system/ai-design-kit.md` conversion behavior by placing CTAs after enough context.
- Aligns with `design-system/visual-principles.md` if dense event information remains grouped and scannable.
- Aligns with `design-system/typography.md` if date, venue, and CTA labels remain precise.

#### Risks

- Too much event explanation can clutter event browsing.
- Stale or invented event data would conflict with `design-system/component-patterns.md` Event Bridge risk guidance.
- Third-party ticketing and table partners may constrain CTA labels.

#### Approval Status

Approved for design exploration.

### Direction DR-03: Entertainment Anchor Refresh

#### Component Pattern

Page Anchor Navigation.

#### Experience Role

Reflect the revised page hierarchy and help guests understand that The Stage at Zouk is part of the Entertainment page structure.

#### Existing Components To Reuse

- Current `On This Page` anchor navigation.

#### Existing Components To Adapt

- Anchor labels should reflect actual page sections and preserve discoverability for Resorts World Theatre, Ayu Dayclub, Zouk Nightclub, FAQ, and the new The Stage at Zouk section.

#### Potential New Capability Areas

- Mobile anchor behavior validation.
- Active-section or section-aware anchor behavior if already supported.

#### Doctrine Validation

- Aligns with `design-system/component-patterns.md` Page Anchor Navigation.
- Aligns with `design-system/ai-design-kit.md` interaction behavior around guided agency and reversible exploration.
- Aligns with `design-system/typography.md` label guidance if anchor labels remain short and accurate.

#### Risks

- Anchor labels can create false hierarchy if they do not match body sections.
- Adding both Resorts World Live and The Stage at Zouk as separate anchors could contradict taxonomy guidance.
- Mobile anchor behavior is not confirmed.

#### Approval Status

Conditionally approved for design exploration.

### Direction DR-04: Venue Pulse Social Context

#### Component Pattern

Social Proof Layer.

#### Experience Role

Provide restrained venue-level atmosphere or social context for The Stage at Zouk and other entertainment venues where official channels, moderation, and rights are confirmed.

#### Existing Components To Reuse

- Footer social-link pattern as a baseline for official channel behavior.
- Existing venue modules as the context where social cues may live.

#### Existing Components To Adapt

- Venue modules may support a small official-social cue or contextual link rather than a full feed.

#### Potential New Capability Areas

- Official venue social-channel inventory.
- Social moderation and rights workflow.
- Brand-safety review model.
- Freshness and source labeling.

#### Doctrine Validation

- Aligns with `design-system/component-patterns.md` Social Proof Layer only if official, governed, and subordinate.
- Aligns with `design-system/ai-design-kit.md` content behavior by avoiding claims that cannot be governed.
- Aligns with `design-system/imagery.md` by requiring source confidence and avoiding ungoverned social-looking imagery.

#### Risks

- High governance risk around rights, moderation, stale content, and brand safety.
- Social content can distract from ticket conversion.
- Venue social quality may vary and create inconsistent representation.

#### Approval Status

Conditionally approved as a supporting exploration, not as a primary design direction.

### Direction DR-05: FAQ Continuity Treatment

#### Component Pattern

FAQ / Support Continuity.

#### Experience Role

Move FAQ lower on the page to preserve venue-discovery continuity while keeping support content accessible and findable.

#### Existing Components To Reuse

- Existing FAQ tabs.
- Existing FAQ accordion/question rows.
- Previous/next category controls.

#### Existing Components To Adapt

- FAQ placement and anchor access may need adjustment so support content remains discoverable after moving lower.

#### Potential New Capability Areas

- Section-level support anchor.
- FAQ category preservation across moved placement.
- Analytics review for FAQ engagement and support need.

#### Doctrine Validation

- Aligns with `design-system/component-patterns.md` FAQ / Support Continuity pattern.
- Aligns with `design-system/visual-principles.md`, which says support content should answer practical questions without interrupting primary merchandising.
- Aligns with `design-system/typography.md` support guidance prioritizing readability and scannability.

#### Risks

- FAQ movement could reduce access to operational information if anchors or labels are weak.
- Some FAQ content may be Theatre-specific or policy-sensitive and may need governance before relocation.
- AEG references in FAQ may need legal or partner review before removal or rewrite.

#### Approval Status

Approved for placement exploration with content-governance review.

## Design Exploration Recommendation

### Primary Design Exploration Direction

DR-01: The Stage at Zouk Orientation Feature.

This is the strongest exploration because it directly addresses the approved concept, stakeholder hierarchy request, user taxonomy confusion, and design-system doctrine around orienting before action.

### Secondary Design Exploration Direction

DR-02: Resorts World Live Event Bridge.

This should be explored alongside DR-01 because orientation must lead into event discovery and ticket conversion. Without an Event Bridge, the new section may improve awareness but fail to support the pilot's conversion objective.

### Supporting Directions

- DR-03: Entertainment Anchor Refresh should support page wayfinding.
- DR-05: FAQ Continuity Treatment should support the requested FAQ relocation.
- DR-04: Venue Pulse Social Context should remain exploratory and governance-gated.

### Deferred Directions

- Full Entertainment page redesign.
- Standalone Resorts World Live landing-page treatment inside the Entertainment page.
- Concert weekend planning path or stay-package module expansion, until package eligibility and booking ownership are confirmed.
- Full social feed integration, until official channels, rights, moderation, and performance requirements are confirmed.

## Design Review Findings

### Finding 1: The primary section identity should be The Stage at Zouk.

Severity: High.

The stakeholder request and design-system typography guidance both support using the clearest taxonomy in the heading. `design-system/typography.md` says headings should communicate structure and priority, and pilot guidance states The Stage at Zouk should be the H2 heading.

Design implication:

- Use `The Stage at Zouk` as the section heading.
- Present Resorts World Live as relationship context, not as an equivalent venue heading.

### Finding 2: Resorts World Live must be explained without becoming a separate venue.

Severity: High.

`design-system/component-patterns.md` warns that a Venue Orientation Feature can create confusion if it implies a program is a separate venue. The pilot brief explicitly says Resorts World Live is associated with The Stage at Zouk and should not be treated as separate.

Design implication:

- The relationship explanation must be concise and placed near the heading.
- Avoid separate venue-card treatment for Resorts World Live.
- Avoid anchor structures that split Resorts World Live and The Stage at Zouk into competing sections.

### Finding 3: Event discovery should remain the commercial foundation.

Severity: High.

The current state shows event cards, filters, date controls, and ticket/table actions as primary commercial surfaces. `design-system/ai-design-kit.md` says conversion should come after sufficient context and should preserve clear primary actions.

Design implication:

- Do not replace the event listing.
- Use an Event Bridge to continue into existing event discovery.
- Keep ticket, table, and learn-more actions visually and semantically distinct.

### Finding 4: FAQ relocation supports hierarchy, but support access must be preserved.

Severity: Medium.

The current FAQ placement interrupts the path from Theatre content to broader venue discovery. `design-system/visual-principles.md` says support content should not interrupt primary merchandising, while `design-system/component-patterns.md` notes that moving FAQ too low without anchors can reduce findability.

Design implication:

- Move FAQ lower, after primary venue/program discovery.
- Preserve FAQ category structure and accessible accordion behavior.
- Include anchor or navigation access if FAQ is important to task completion.

### Finding 5: Social context should be a governed proof layer, not decorative media.

Severity: Medium.

`design-system/imagery.md` warns against social-looking imagery without governance or source confidence. `design-system/component-patterns.md` says Social Proof Layer usage requires source, freshness, and governance status.

Design implication:

- Explore only official venue-level social cues or links until governance is confirmed.
- Do not use live social feeds as the default design assumption.
- Do not let social context compete with ticket actions.

### Finding 6: Imagery should clarify venue identity and energy.

Severity: Medium.

`design-system/imagery.md` says entertainment imagery should show venue energy with legible performers, crowd, stage, or environment, and avoid overly dark or abstract visuals.

Design implication:

- Prefer imagery that helps guests recognize The Stage at Zouk or understand its atmosphere.
- Avoid generic nightlife texture, abstract lights, or crops that hide the venue.
- Do not use unconfirmed event, artist, or social imagery.

### Finding 7: AEG treatment is a governance constraint, not a design embellishment.

Severity: Medium.

The stakeholder asks to remove AEG content and add AEG logo placement. `design-system/ai-design-kit.md` says partner claims and marks require governance before becoming prominent claims.

Design implication:

- Separate logo placement decisions from editorial copy decisions.
- Do not treat AEG references in FAQ, intro copy, or partner marks as interchangeable.
- Flag any AEG conflict for legal, partner, or stakeholder review.

## Existing Components To Reuse

- Existing Entertainment page event cards.
- Existing event date, venue-label, and CTA patterns.
- Existing Theatre and venue section structure where appropriate.
- Existing `On This Page` anchor navigation.
- Existing FAQ tabs, category controls, and accordion rows.
- Existing footer social-link pattern as a baseline for official social channels.

## Existing Components To Adapt

- Venue section pattern into a more precise Venue Orientation Feature.
- Event card labels to clarify The Stage at Zouk / Resorts World Live context where applicable.
- CTA grouping to better distinguish ticket, table, learn-more, and booking intent.
- Anchor navigation to reflect the new section while preserving accurate hierarchy.
- FAQ placement and anchor access to maintain support continuity.

## Potential New Capability Areas

- Taxonomy-safe relationship labeling for programs and venues.
- Governance model for partner logo placement versus partner content.
- Official venue social-channel inventory and moderation workflow.
- Event-to-venue relationship metadata.
- CTA ownership and destination inventory across ticketing, tables, booking, and external partners.
- Mobile anchor and long-page wayfinding validation.

## Governance Summary

### Brand Doctrine

The recommended direction aligns with RWLV doctrine when it feels like a confident host clarifying the entertainment ecosystem. It should feel premium, welcoming, and precise, not promotional or overbuilt.

### Component Doctrine

The direction should prioritize promoted system patterns: Venue Orientation Feature, Event Bridge, Event Card, Page Anchor Navigation, FAQ / Support Continuity, CTA Block, and Social Proof Layer. New pattern families are not needed.

### Hospitality Behaviors

The direction aligns by orienting guests before asking for action, explaining relationships clearly, and preserving exploration paths.

### Conversion Behaviors

The direction aligns by using orientation to support ticket confidence while keeping ticket paths visible and action intent clear.

### Content Behaviors

The direction depends on precise, governed relationship language. Any unconfirmed venue, package, partner, event, or social claim would conflict with `design-system/ai-design-kit.md`.

### Imagery Guidance

The direction aligns if imagery is specific to the venue, stage, event environment, or official experience. Generic nightlife imagery, ungoverned social visuals, or overly dark abstract crops would conflict with `design-system/imagery.md`.

### Typography Guidance

The direction aligns if The Stage at Zouk carries the primary section heading role, supporting copy explains the relationship, and CTA/label typography remains precise and scannable. Display treatment should not be overused in dense event or FAQ areas.

## Collaboration Requests

- Content governance: confirm exact relationship language for Resorts World Live and The Stage at Zouk.
- Partner governance: confirm AEG logo placement, removable AEG content, and policy-copy requirements.
- Entertainment operations: confirm approved The Stage at Zouk imagery, event feed, and venue details.
- Analytics: confirm current anchor, event-card, CTA, FAQ, outbound ticketing, table, booking, and social-link measurement.
- Social governance: confirm official venue channels, moderation, rights, freshness, and ownership.
- Figma Prompt Agent: use DR-01 and DR-02 as the approved primary prompt directions, with DR-03 and DR-05 as supporting prompt directions.

## Approval Summary

Approved for downstream Figma prompt generation:

- DR-01: The Stage at Zouk Orientation Feature.
- DR-02: Resorts World Live Event Bridge.

Conditionally approved as supporting explorations:

- DR-03: Entertainment Anchor Refresh.
- DR-04: Venue Pulse Social Context.
- DR-05: FAQ Continuity Treatment.

Rejected or deferred at this stage:

- Full Entertainment page redesign.
- Standalone landing-page treatment.
- Full social feed integration.
- Stay-package planning module expansion without package eligibility evidence.
- New component families that duplicate promoted system patterns.
