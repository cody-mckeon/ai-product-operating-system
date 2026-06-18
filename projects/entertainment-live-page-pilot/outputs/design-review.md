# Design Review

## Evidence Basis

Project: `projects/entertainment-live-page-pilot`

Inputs reviewed:

* `outputs/opportunity-analysis.md`
* `outputs/recommendation.md`
* `outputs/concept-selection.md`
* `projects/entertainment-page-pilot/outputs/current-state.md`
* `design-system/brand-guidelines/rwlv-brand-guidelines-2026.pdf`
* `design-system/brand.md`
* `design-system/components.md`

Evidence limitations:

* `projects/entertainment-live-page-pilot/outputs/current-state.md` was not present in the project folder.
* The available current-state artifact lives at `projects/entertainment-page-pilot/outputs/current-state.md`.
* No visual design exploration, wireframes, or Figma files were provided for review.
* The brand guideline PDF was reviewed through page rendering and partial text extraction. The readable brand evidence emphasizes luxury that feels personal and welcoming, a curated resort ecosystem, Vegas energy without overwhelm, and photography with movement and energy.
* Downstream ticketing, table reservation, booking, social, FAQ-expanded, mobile-anchor, and analytics states were not available.

## Experience Translation

### Selected Concept Summary

The approved concept is CON-01: Resorts World Live Orientation Journey.

The experience should create a clear orientation moment on the Entertainment page that explains Resorts World Live through The Stage at Zouk, then connects guests back into event discovery and ticket actions. Supporting influences are:

* CON-02: Entertainment Map Of Experiences, for broader venue hierarchy and anchor/navigation cues.
* CON-04: Event Action Clarity Experience, for ticket, table, learn-more, and booking path clarity.
* CON-06: Venue Pulse Experience, for restrained venue-level social context where governance allows.

### User Problem Being Solved

Guests can currently encounter Resorts World Live in navigation, The Stage at Zouk in event cards, and venue sections elsewhere on the page without a clear explanation of how these pieces relate. The review direction should reduce that ambiguity before asking guests to choose tickets, tables, or venue paths.

### Core Experience Pattern

Orientation Section.

This should function as a composed hospitality orientation moment: a clear relationship explanation, a venue/programming identity, and a bridge into relevant events. It should feel like a helpful host introducing the guest to the right part of the resort ecosystem, not like another promotional tile.

### Supporting Experience Patterns

* Experience Directory cues: help the new section sit coherently among Resorts World Theatre, Ayu Dayclub, and Zouk Nightclub.
* Action Clarity cues: make the next available ticket, table, learn-more, or booking action understandable.
* Social Context cues: optionally use official, brand-safe signals to convey venue atmosphere and recency.

### Trust Strategy

Trust should come from accurate taxonomy, restrained claims, clear source context, and operational truth. The design should not overstate package availability, social proof, or partner relationships. The phrase structure and hierarchy must make it clear that The Stage at Zouk is the venue context for Resorts World Live.

AEG logo and AEG content should be treated as governed brand/legal content, not as interchangeable decoration.

### Information Hierarchy Strategy

Users should notice first:

* `The Stage at Zouk` as the primary heading and venue anchor for the Resorts World Live context.
* A concise explanation of how Resorts World Live relates to The Stage at Zouk.

Users should notice second:

* Relevant event discovery paths and upcoming programming cues.
* Clear commercial actions tied to the event or venue context.

Users should notice later:

* Venue atmosphere or social context.
* Supporting details, policies, FAQ content, partner marks, and footer utilities.

### Conversion Strategy

The experience should support conversion by improving confidence before action. Ticket actions should feel timely and contextual, not pressured. The review direction should preserve event discovery as the main commercial surface while making it easier to understand which action leads to tickets, tables, learn-more detail, or booking.

## Placement Exploration

### Placement 1

### Surface

Entertainment Page, after Resorts World Theatre / Theatre context.

### User Context

The guest has moved from broad Entertainment discovery into venue orientation. They are trying to understand the relationship between entertainment venues and which events or experiences are relevant to them.

### Benefits

* Directly matches the stakeholder request to add a Resorts World Live section after The Theatre section.
* Restores continuity between Theatre content and other venue discovery.
* Creates a natural point to introduce The Stage at Zouk before the lower-page venue section.
* Makes the on-page anchor structure easier to align with the revised hierarchy.
* Allows FAQ to move later without losing its support role.

### Risks

* If too large, the section could interrupt guests who are focused on the event listing.
* If the relationship language is unclear, Resorts World Live could appear to be a separate venue.
* AEG logo/content governance must be resolved so the section does not inherit conflicting partner context.

### Priority

High

### Placement 2

### Surface

Entertainment Page, integrated near event discovery and relevant The Stage at Zouk event cards.

### User Context

The guest is browsing artists, event dates, venue labels, and CTAs. They may notice The Stage at Zouk as an event-card label but may not understand the venue/programming relationship.

### Benefits

* Reinforces orientation at the exact point where event choice happens.
* Supports ticket conversion by clarifying context close to action.
* Can help guests connect The Stage at Zouk labels with Resorts World Live programming.

### Risks

* May add cognitive load to an already dense event-browsing surface.
* Could compete with primary event CTAs if overemphasized.
* Requires careful action hierarchy to avoid mixing orientation with conversion pressure.

### Priority

Medium

### Placement 3

### Surface

On-page anchor/navigation structure.

### User Context

The guest uses page anchors to understand what is on the page and jump to relevant venue sections.

### Benefits

* Improves discoverability before the guest reaches the section.
* Signals that the page hierarchy has changed.
* Supports both orientation and wayfinding.

### Risks

* Mobile anchor behavior was not observed, so responsive behavior is an evidence gap.
* Anchor naming must preserve the The Stage at Zouk / Resorts World Live relationship.
* If the body section is not clear, anchor changes alone will not solve the hierarchy problem.

### Priority

Medium

### Placement 4

### Surface

Resorts World Live page.

### User Context

The guest has already chosen the Resorts World Live path and is reviewing lineup, ticket, cross-promotion, and stay-oriented content.

### Benefits

* Reinforces consistency between the Entertainment page and the Resorts World Live destination page.
* Can align ticket and stay context with the orientation language.
* Helps reduce taxonomy drift across related pages.

### Risks

* Does not solve the Entertainment page discoverability gap by itself.
* Could create duplicated explanation if the Entertainment page already handles orientation clearly.
* Stay-package content on the Resorts World Live page has operational dependencies.

### Priority

Low

### Placement 5

### Surface

FAQ / support area.

### User Context

The guest is looking for policies, ticketing rules, directions, accessibility, food and beverage, or cancellation information.

### Benefits

* Keeps operational support available after discovery.
* Can contain policy and AEG references where legally or operationally required.
* Reduces interruption to venue discovery if placed after the main venue/programming hierarchy.

### Risks

* Moving FAQ too low may reduce support visibility for guests with immediate policy questions.
* FAQ content may include venue-specific or partner-specific policy language that requires review.

### Priority

Medium

### Placement Recommendation

#### Primary Placement

Entertainment Page, immediately after the Theatre / Theatre Amenities context and before FAQ.

#### Secondary Placement

Event discovery reinforcement near relevant The Stage at Zouk / Resorts World Live event moments.

#### Deferred Placements

* Resorts World Live page alignment.
* FAQ policy/context treatment.
* Full venue-social integration across all entertainment venues.

#### Why

The primary placement solves the core hierarchy problem at the right journey moment. Guests have enough page context to understand that they are moving through entertainment venues, but they have not yet been interrupted by FAQ or pushed into lower-page venue content. The secondary placement helps conversion clarity by reinforcing the same relationship near event actions.

## Component Exploration

### Direction Name

Venue Orientation Feature

### Description

A composed orientation section that introduces The Stage at Zouk as the venue context for Resorts World Live, explains the relationship in concise language, and creates a bridge into relevant events.

### Placement

Primary placement after Theatre / Theatre Amenities and before FAQ.

### Reuse Opportunities

* Reuse the existing `VenueInfoPanel` logic from Resorts World Theatre and Venues sections.
* Reuse existing section-heading and eyebrow patterns.
* Reuse existing image carousel frame if approved venue imagery requires multiple assets.

### Benefits

* Strongest alignment with CON-01.
* Clear hierarchy and low guest ambiguity.
* Supports brand doctrine by creating a composed, hospitality-led orientation moment.

### Risks

* Needs careful copy governance.
* Could feel redundant if too close to existing Theatre content.
* May require new approved imagery for The Stage at Zouk.

### Direction Name

Resorts World Live Event Bridge

### Description

A bridge from orientation into relevant event discovery that keeps The Stage at Zouk context visible while allowing guests to continue into ticket or learn-more paths.

### Placement

Secondary placement near the event listing or within the revised section.

### Reuse Opportunities

* Reuse `EventCard` patterns.
* Reuse venue badges and date-row patterns.
* Reuse existing CTA styles while clarifying action hierarchy.

### Benefits

* Protects ticket conversion by connecting orientation to action.
* Keeps events from feeling detached from the new section.
* Makes the selected concept more commercially useful.

### Risks

* Too many event cards or actions could turn orientation into another listing.
* CTA labels may be constrained by third-party systems.
* Requires event feed/content rules for which events qualify.

### Direction Name

Entertainment Anchor Refresh

### Description

A navigation and anchor exploration that makes the revised page structure legible before guests scroll through it.

### Placement

On-page anchor area and related section labels.

### Reuse Opportunities

* Reuse `PageAnchorNav`.
* Adapt existing anchor labels and section targets.
* Preserve desktop anchor behavior while investigating mobile alternatives.

### Benefits

* Improves discoverability for the new section.
* Helps guests form a mental model of the page.
* Scales to future venue additions.

### Risks

* Mobile anchor behavior is not yet evidenced.
* Anchor labels can create taxonomy confusion if they mix program and venue names poorly.
* Navigation changes must align with actual body content.

### Direction Name

Venue Pulse Layer

### Description

A restrained social-context layer that supports venue confidence through official, brand-safe atmosphere signals.

### Placement

Within the primary orientation section or broader venue discovery, secondary to content and ticket actions.

### Reuse Opportunities

* Reuse footer social icon conventions as a global account reference.
* Adapt social proof layer doctrine from the component system.
* Use existing venue content framing rather than creating a dominant social feed.

### Benefits

* Addresses the stakeholder request to explore social integrations.
* Supports venue atmosphere and recency.
* Can strengthen the identity of The Stage at Zouk if official social assets exist.

### Risks

* Requires moderation, rights, brand safety, and ownership.
* Can distract from ticket actions if too prominent.
* Social activity may vary by venue.

### Direction Name

FAQ Continuity Treatment

### Description

A support-content exploration that keeps FAQ findable while moving it out of the main venue-discovery flow.

### Placement

After primary venue/programming discovery and before footer/booking utilities, or in a later support area with clear access.

### Reuse Opportunities

* Reuse existing `FAQTabsAccordion`.
* Preserve FAQ category structure.
* Adapt section sequencing rather than inventing a new support component.

### Benefits

* Reduces interruption between Theatre and venue discovery.
* Keeps policy content intact.
* Supports stakeholder request to move FAQ lower.

### Risks

* Guests with urgent policy needs may need a clear access cue.
* AEG policy references may require legal/partner review.
* Relocation alone does not improve FAQ content clarity.

## Design Exploration Recommendation

### Primary Exploration Direction

Venue Orientation Feature with Resorts World Live Event Bridge.

### Secondary Exploration Direction

Entertainment Anchor Refresh with FAQ Continuity Treatment.

### Why

The primary direction best satisfies the approved concept because it combines hierarchy clarity with a path back into event discovery and ticket conversion. The secondary direction supports wayfinding and page pacing without becoming a competing concept.

### Exploration ID

DR-01

### Exploration Name

The Stage at Zouk Orientation Feature

### Concept Alignment

Strongly satisfies CON-01 by creating a dedicated orientation moment for The Stage at Zouk and Resorts World Live.

### Approval Status

Approved For Further Exploration

### Strategic Clarity

High

### Guest Value

High

### Business Value

High

### Brand Alignment

High

### Component Reuse Quality

High

### CTA Clarity

Medium

### Cognitive Load

Medium

### Measurement Readiness

Medium

### Strengths

* Solves the central hierarchy gap.
* Reuses existing venue-information patterns.
* Fits the brand pillar of a curated resort ecosystem.
* Supports luxury that feels welcoming and confidence-forward.

### Weaknesses

* CTA clarity depends on the event bridge or nearby event listing.
* Needs approved copy and imagery.
* Does not resolve social integration alone.

### Risks

* Taxonomy drift could make Resorts World Live look like a separate venue.
* Overlarge editorial treatment could slow the page.
* Partner/logo governance could affect visual balance.

### Recommendations

* Lead with The Stage at Zouk as the H2 / primary section identity.
* Use concise relationship copy to explain Resorts World Live.
* Keep the section visually composed, not card-heavy.
* Use movement-rich venue imagery if available, consistent with the brand guideline.
* Preserve a clear path into ticket discovery.

### Exploration ID

DR-02

### Exploration Name

Resorts World Live Event Bridge

### Concept Alignment

Strongly supports CON-01 and CON-04 by connecting orientation to relevant event actions.

### Approval Status

Approved For Further Exploration

### Strategic Clarity

High

### Guest Value

High

### Business Value

High

### Brand Alignment

Medium

### Component Reuse Quality

High

### CTA Clarity

High

### Cognitive Load

Medium

### Measurement Readiness

High

### Strengths

* Keeps the orientation from becoming passive content.
* Protects event and ticket conversion.
* Reuses event-card, venue-badge, date-row, and CTA patterns.
* Can expose measurable interaction surfaces without feeling instrumented.

### Weaknesses

* Requires rules for which events appear in or near the section.
* Can become cluttered if too many events or CTAs are shown.
* Third-party CTA labels may limit clarity.

### Risks

* Event feed or CMS constraints may prevent consistent curation.
* Table, ticket, booking, and learn-more actions can compete.
* If action labels remain inconsistent, the bridge may not solve CTA confusion.

### Recommendations

* Keep event quantity focused.
* Preserve date and venue context near actions.
* Clarify action intent through hierarchy and short supporting labels, not pressure copy.
* Avoid implying stay-package eligibility unless explicitly confirmed.

### Exploration ID

DR-03

### Exploration Name

Entertainment Anchor And Section Hierarchy Refresh

### Concept Alignment

Supports CON-01 and CON-02 by making revised page structure visible through navigation and section naming.

### Approval Status

Conditionally Approved

### Strategic Clarity

Medium

### Guest Value

Medium

### Business Value

Medium

### Brand Alignment

High

### Component Reuse Quality

High

### CTA Clarity

Low

### Cognitive Load

Low

### Measurement Readiness

Medium

### Strengths

* Reuses existing anchor navigation.
* Helps guests see the revised Entertainment structure.
* Scales to future venue hierarchy changes.
* Low visual disruption when paired with clear body sections.

### Weaknesses

* Does not solve hierarchy by itself.
* Mobile anchor behavior was not evidenced.
* Naming must be handled carefully.

### Risks

* Anchor labels may overcomplicate the relationship between program and venue.
* If the section content is weak, navigation changes may create false confidence.

### Recommendations

* Explore anchor language only after the primary section identity is resolved.
* Treat mobile wayfinding as an explicit design-review question.
* Keep anchor naming aligned with body headings and venue taxonomy.

### Exploration ID

DR-04

### Exploration Name

Venue Pulse Social Context Layer

### Concept Alignment

Supports CON-06 and secondary stakeholder needs, but should remain subordinate to CON-01.

### Approval Status

Conditionally Approved

### Strategic Clarity

Medium

### Guest Value

Medium

### Business Value

Medium

### Brand Alignment

Medium

### Component Reuse Quality

Medium

### CTA Clarity

Low

### Cognitive Load

Medium

### Measurement Readiness

Medium

### Strengths

* Addresses venue-level social integration opportunities.
* Can help communicate energy, atmosphere, and recency.
* Fits entertainment context if official content is strong.

### Weaknesses

* Does not solve the primary hierarchy issue.
* Social content quality may vary.
* New governance is likely required.

### Risks

* Brand-safety, rights, moderation, and performance risks.
* Can feel noisy or unpremium if treated like a raw social feed.
* Could distract from ticket conversion.

### Recommendations

* Treat social as proof/context, not as the main content.
* Use official, curated, rights-cleared signals only.
* Keep social content visually restrained and clearly attached to venue context.
* Defer broad venue-social rollout until ownership and moderation are confirmed.

### Exploration ID

DR-05

### Exploration Name

FAQ Relocation And Support Continuity

### Concept Alignment

Supports CON-01 by improving page pacing and preserving support access after venue discovery.

### Approval Status

Conditionally Approved

### Strategic Clarity

Medium

### Guest Value

Medium

### Business Value

Medium

### Brand Alignment

High

### Component Reuse Quality

High

### CTA Clarity

Low

### Cognitive Load

Low

### Measurement Readiness

Medium

### Strengths

* Reuses existing FAQ component.
* Supports stakeholder request to move FAQ lower.
* Restores venue-discovery continuity.

### Weaknesses

* Does not add Resorts World Live clarity by itself.
* Support visibility may decrease if access cues are weak.
* FAQ content may need governance review.

### Risks

* AEG policy references may be legal or partner content.
* Accessibility and ticketing support questions must remain easy to find.

### Recommendations

* Keep FAQ accessible but secondary to venue discovery.
* Preserve category structure unless evidence supports simplification.
* Review AEG references before changing policy language.

## Portfolio Assessment

### Approval Summary

Approved For Further Exploration

* DR-01
* DR-02

Conditionally Approved

* DR-03
* DR-04
* DR-05

Not Recommended

* None

DR-01 and DR-02 are approved because together they solve the selected concept: orientation plus event continuity. DR-03, DR-04, and DR-05 are conditionally approved because they support the direction but depend on taxonomy, mobile behavior, social governance, or FAQ policy decisions.

### Strongest Exploration Directions

* DR-01: The Stage at Zouk Orientation Feature.
* DR-02: Resorts World Live Event Bridge.

### Moderate Exploration Directions

* DR-03: Entertainment Anchor And Section Hierarchy Refresh.
* DR-05: FAQ Relocation And Support Continuity.

### Weakest Exploration Directions

* DR-04 is strategically useful but weakest as a near-term design direction because social governance and rights constraints are unresolved.

### Recommended For Further Design Iteration

* DR-01 and DR-02 should move forward together as the primary design review path.
* DR-03 should be explored as supporting wayfinding after DR-01 defines the section identity.
* DR-05 should be explored as a page-pacing adjustment.
* DR-04 should be explored only as a restrained supporting layer.

### Recommended For Telemetry Planning

Future telemetry planning should evaluate:

* Section impressions and scroll depth through the new orientation area.
* Engagement with Resorts World Live / The Stage at Zouk event actions.
* Anchor usage before and after hierarchy changes.
* FAQ engagement after relocation.
* Social context interaction if a governed social layer proceeds.

This is measurement readiness guidance, not a telemetry plan.

### Design Debt Observed

* The pilot-local current-state artifact is missing.
* The Entertainment page currently uses inconsistent levels of representation: navigation item, event-card venue label, body section, and destination page.
* FAQ interrupts venue discovery.
* Mobile anchor behavior is not evidenced.
* AEG logo, AEG content, and AEG policy references are not yet governed as separate content types.
* Venue-level social integration lacks ownership and brand-safety rules.

### Cross-Concept Findings

* The selected direction should not become a broad guided selector.
* Stay-package promotion should remain deferred until package rules are known.
* The best near-term design path is clear orientation plus clear event action, not a full redesign of Entertainment discovery.
* Existing components can support most of the approved direction if taxonomy and content are resolved.

## Existing Component Reuse Opportunities

### Existing Components To Reuse

* `VenueInfoPanel` for the primary orientation feature.
* `PageAnchorNav` for hierarchy and wayfinding.
* `EventCard` for the event bridge.
* Venue badge and date-row patterns for event context.
* Existing red outlined CTA style for ticket/table/booking actions.
* `FAQTabsAccordion` for relocated support content.
* Footer social icon conventions for global social access.

### Existing Components To Adapt

* AEG intro / editorial intro pattern: adapt only if governance allows partner separation and content cleanup.
* Resorts World Theatre section pattern: adapt for The Stage at Zouk without making Resorts World Live a separate venue.
* Venue section pattern: adapt to support a programming-plus-venue relationship, not just standalone venue copy.
* Event listing controls: adapt only if filtering or labeling can support The Stage at Zouk / Resorts World Live clarity.
* Social proof layer: adapt from doctrine as a restrained social-context layer, not a raw feed.

### Potential New Capability Areas

* Program-to-venue relationship labeling.
* Governed social-context modules for venue atmosphere.
* Cross-page taxonomy consistency between Entertainment and Resorts World Live.
* Mobile wayfinding for long entertainment pages.
* CTA intent labeling across ticket, table, learn-more, booking, and stay paths.

## Governance Summary

### Brand Alignment

The strongest direction should express Resorts World as a curated resort ecosystem: entertainment, venue identity, ticket action, and support content should feel connected. The brand guide's idea of Vegas energy without guest exhaustion is especially relevant. The design should use energetic imagery and clear hierarchy without creating visual noise or action pressure.

### AEG Governance Constraints

AEG logo placement, AEG content removal, and AEG policy references must be handled separately. Design Review should not assume that visible AEG marks, intro copy, and FAQ policy copy have the same approval requirements.

### Hospitality Quality

The experience should feel like a host explaining where the guest is and what they can do next. It should avoid generic promo grids, overpacked event cards, or social modules that feel detached from the guest journey.

### Measurement Readiness

The primary direction is measurable because it introduces clear surfaces: orientation impression, event bridge engagement, anchor usage, action selection, and FAQ engagement after relocation. Measurement readiness is medium until analytics access and third-party handoff visibility are confirmed.

## Collaboration Requests

* Analytics Agent: confirm measurement readiness for section impressions, anchors, event actions, FAQ relocation, and outbound handoffs.
* Conversion Agent: review CTA hierarchy across tickets, tables, learn-more, booking, and stay paths.
* Package Agent: review any future stay-package exposure before package content appears in this section.
* Brand / Legal / Partner Review: confirm AEG logo placement, AEG content removal, and AEG policy references.
* Figma Agent: use this review as design intent only after design exploration is explicitly requested.
