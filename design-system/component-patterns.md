# Component Patterns

## Purpose

This library captures reusable RWLV product and content patterns promoted from brand doctrine, design-system materials, and completed pilot learnings.

It does not prescribe implementation, engineering requirements, exact component specs, or final designs.

## Evidence Sources

Confirmed by design-system doctrine:

- `design-system/brand.md`
- `design-system/components.md`
- `design-system/tokens.md`

Observed in pilot outputs:

- Conrad pilot: benefit validation, content proof, booking handoff, package decision support.
- Entertainment pilot: venue orientation, event bridge, anchor refresh, FAQ continuity, social context governance.

Evidence limitations:

- Exact production component anatomy, token values, and responsive behavior require further component inventory.

## Pattern Promotion Rules

Promote a pattern when it:

- Supports RWLV brand doctrine.
- Appears in design-system documentation or multiple pilot findings.
- Solves a reusable guest or business need.
- Can adapt across resort categories without becoming pilot-specific.
- Improves clarity, confidence, discovery, or conversion without relying on pressure.

Do not promote a pattern when it:

- Depends on one campaign, one partner, or one ungoverned claim.
- Requires unavailable assets or unconfirmed content.
- Exists only as a final layout preference.
- Functions as an engineering requirement rather than design guidance.

## Pattern Index

| Pattern | Primary Role | Evidence Confidence |
| --- | --- | --- |
| Experience Hero | Arrival and primary orientation | Confirmed by design-system docs |
| Editorial Feature | Story-led experience framing | Confirmed by design-system docs |
| Benefit Validation Module | Package or offer confidence-building | Observed in Conrad pilot |
| Content Proof Module | Claim support and trust | Confirmed by docs, observed in Conrad pilot |
| Venue Orientation Feature | Venue or program relationship clarity | Observed in Entertainment pilot |
| Event Bridge | Continuity from venue context to event action | Observed in Entertainment pilot |
| Event Card | Event discovery and action support | Confirmed by docs, observed in Entertainment pilot |
| Venue Card | Venue discovery and comparison | Confirmed by docs, observed in Entertainment pilot |
| Offer Card | Offer discovery and evaluation | Confirmed by docs |
| Package Card | Package discovery and decision support | Confirmed by docs, observed in Conrad pilot |
| CTA Block | Focused commercial action | Confirmed by docs |
| Booking Bar | Persistent or contextual booking support | Confirmed by docs |
| Page Anchor Navigation | In-page orientation and wayfinding | Observed in Entertainment pilot |
| FAQ / Support Continuity | Late-stage uncertainty reduction | Observed in Entertainment pilot |
| Social Proof Layer | Trust and social context | Confirmed by docs, observed in pilots |

## Pattern Details

### Experience Hero

Purpose: Establish arrival, orientation, and the primary reason to continue.

Journey Stage: Arrival.

Guest Need: Understand where they are and why the experience matters.

Business Role: Introduce the experience with enough confidence to support deeper discovery.

Typical Placement: Top of page or major campaign surface.

Reuse Guidance: Use for destination, hotel, package, venue, or experience entry points where a strong first impression is required.

Adaptation Guidance: Scale down to an editorial feature when the content is an inserted enhancement rather than a full-page entry.

Content Requirements: Clear title, concise value framing, relevant imagery, primary action when appropriate.

Measurement Readiness: Should support downstream engagement and primary action tracking.

Risks: Overusing hero treatment can make every section feel equally important.

Evidence: Confirmed by `design-system/components.md`.

### Editorial Feature

Purpose: Frame an experience with narrative clarity and premium atmosphere.

Journey Stage: Discovery.

Guest Need: Understand the character, context, or appeal of an experience.

Business Role: Increase interest without forcing immediate conversion.

Typical Placement: Below hero, within category pages, or as an inserted module.

Reuse Guidance: Use when content needs editorial warmth and contextual explanation.

Adaptation Guidance: Keep copy specific and avoid generic lifestyle claims.

Content Requirements: Heading, focused narrative, supporting image or proof point, optional contextual action.

Measurement Readiness: Can support scroll depth, secondary clicks, and engagement with related content.

Risks: Can become decorative if not tied to a guest decision or discovery need.

Evidence: Confirmed by `design-system/components.md` and `design-system/brand.md`.

### Benefit Validation Module

Purpose: Connect package or offer benefits to proof, value, and constraints.

Journey Stage: Evaluation.

Guest Need: Determine whether a benefit is meaningful and credible.

Business Role: Improve qualified conversion by reducing ambiguity.

Typical Placement: Near package benefits, offer inclusions, or booking handoff.

Reuse Guidance: Use when a page makes benefit claims that require validation.

Adaptation Guidance: Pair each benefit with adjacent evidence instead of isolating proof elsewhere.

Content Requirements: Benefit, guest value, validation evidence, constraints or terms when relevant.

Measurement Readiness: Should support evaluation behavior and downstream booking intent.

Risks: Weak evidence can make the module feel like sales copy.

Evidence: Observed in Conrad pilot design review and Figma prompt outputs.

### Content Proof Module

Purpose: Support a claim with credible, governed evidence.

Journey Stage: Discovery or evaluation.

Guest Need: Know why a claim should be trusted.

Business Role: Build confidence without relying on pressure or unsupported superlatives.

Typical Placement: Adjacent to the claim being validated.

Reuse Guidance: Use for editorial proof, package proof, venue proof, press context, or guest validation when approved.

Adaptation Guidance: Keep proof close to the claim; do not create disconnected quote or logo galleries by default.

Content Requirements: Claim, evidence source, relevance, governance status.

Measurement Readiness: Can support engagement with proof, scroll depth, and conversion confidence.

Risks: Ungoverned quotes, partner marks, or social proof can introduce brand and legal risk.

Evidence: Confirmed by `design-system/components.md`; observed in Conrad pilot.

### Venue Orientation Feature

Purpose: Explain a venue, program, or named experience relationship before discovery or action.

Journey Stage: Orientation and discovery.

Guest Need: Understand what the venue or program is and how it relates to the broader resort ecosystem.

Business Role: Improve discovery and reduce taxonomy confusion.

Typical Placement: After relevant category context and before deeper event or venue listings.

Reuse Guidance: Use when venue naming, programming relationships, or partner relationships may be unclear.

Adaptation Guidance: Keep the primary identity clear and place program or partner context as supporting information.

Content Requirements: Primary venue or experience name, relationship explanation, image or context, next-step action.

Measurement Readiness: Should support navigation into venue, event, ticket, or related experience paths.

Risks: Can create confusion if it implies a program is a separate venue when it is not.

Evidence: Observed in Entertainment pilot design review and concept selection.

### Event Bridge

Purpose: Connect orientation content to relevant event discovery and commercial action.

Journey Stage: Discovery to decision.

Guest Need: Move from understanding a venue or program to finding a specific event.

Business Role: Support ticket conversion while preserving browsing continuity.

Typical Placement: Immediately after venue or program context, or near related event listings.

Reuse Guidance: Use when a venue, artist, program, or category needs a direct path into dated events.

Adaptation Guidance: Keep event actions clear and avoid duplicating the full event listing unless necessary.

Content Requirements: Event names, dates or timing, venue/program label, action intent.

Measurement Readiness: Should support event click, ticket click, and related discovery metrics.

Risks: Invented or stale event data can erode trust.

Evidence: Observed in Entertainment pilot design review and Figma prompts.

### Event Card

Purpose: Present an event for scanning, comparison, and action.

Journey Stage: Discovery and decision.

Guest Need: Identify what is happening, when, where, and what action is available.

Business Role: Drive qualified ticket or detail-page engagement.

Typical Placement: Event grids, rails, listings, or bridges.

Reuse Guidance: Use for entertainment, nightlife, dining events, seasonal programming, and package-related events.

Adaptation Guidance: Match action hierarchy to guest intent: learn, buy tickets, reserve, or plan.

Content Requirements: Event title, date/time, venue, image when available, CTA.

Measurement Readiness: Should support event selection and CTA tracking.

Risks: Multiple action types can confuse guests if labels are unclear.

Evidence: Confirmed by `design-system/components.md`; observed in Entertainment pilot.

### Venue Card

Purpose: Support venue discovery and comparison.

Journey Stage: Discovery.

Guest Need: Understand the venue identity, mood, and next step.

Business Role: Increase exploration across the resort ecosystem.

Typical Placement: Venue grids, category pages, related-experience modules.

Reuse Guidance: Use for entertainment, dining, hotel, wellness, or nightlife venue browsing.

Adaptation Guidance: Avoid reducing venues to generic tiles; preserve each venue's distinct role.

Content Requirements: Venue name, category or context, image, concise description, relevant action.

Measurement Readiness: Should support venue click and cross-category discovery.

Risks: Equal-weight venue grids can hide priority or taxonomy relationships.

Evidence: Confirmed by `design-system/components.md`; observed in Entertainment pilot.

### Offer Card

Purpose: Present a specific offer for evaluation.

Journey Stage: Evaluation.

Guest Need: Understand value, eligibility, and action.

Business Role: Support offer engagement and conversion.

Typical Placement: Offer grids, campaign pages, package surfaces.

Reuse Guidance: Use where offer comparison or selection is needed.

Adaptation Guidance: Surface constraints early enough to avoid surprise.

Content Requirements: Offer name, value statement, eligibility or timing, CTA, terms access.

Measurement Readiness: Should support offer clicks, booking starts, and terms engagement.

Risks: Overemphasis on price or urgency can undermine premium hospitality.

Evidence: Confirmed by `design-system/components.md`.

### Package Card

Purpose: Present a package as a curated experience, not just a transaction.

Journey Stage: Discovery and evaluation.

Guest Need: Understand what is included and why it matters.

Business Role: Support qualified booking and package comparison.

Typical Placement: Package pages, offer surfaces, booking-adjacent modules.

Reuse Guidance: Use for hotel, event, dining, and multi-experience packages.

Adaptation Guidance: Pair inclusions with proof or context when value may not be obvious.

Content Requirements: Package name, inclusions, guest value, constraints, booking action.

Measurement Readiness: Should support booking intent and inclusion engagement.

Risks: A package can feel generic if inclusions are listed without experiential value.

Evidence: Confirmed by `design-system/components.md`; observed in Conrad pilot.

### CTA Block

Purpose: Focus attention on a clear next action after value has been established.

Journey Stage: Decision.

Guest Need: Know the best next step.

Business Role: Convert interest into booking, ticketing, reservation, or inquiry.

Typical Placement: After orientation, proof, comparison, package detail, or event discovery.

Reuse Guidance: Use when a section has earned a focused action moment.

Adaptation Guidance: Avoid competing primary actions. Secondary actions should clarify alternative intent.

Content Requirements: Clear action label, concise supporting context, destination or intent clarity.

Measurement Readiness: Should support primary and secondary action tracking.

Risks: CTA-first modules can feel pushy if they precede understanding.

Evidence: Confirmed by `design-system/components.md` and `design-system/brand.md`.

### Booking Bar

Purpose: Provide persistent or contextual booking support.

Journey Stage: Decision and continuation.

Guest Need: Act without losing context.

Business Role: Reduce booking friction while preserving trust.

Typical Placement: Persistent page area, booking handoff, package surface, or conversion section.

Reuse Guidance: Use when booking is a primary business objective and guest intent is sufficiently developed.

Adaptation Guidance: Keep booking support legible, restrained, and aligned with the page's primary journey.

Content Requirements: Dates or booking criteria when relevant, clear action, destination context.

Measurement Readiness: Should support booking starts and completed handoffs.

Risks: Persistent booking controls can feel intrusive if they obscure exploration.

Evidence: Confirmed by `design-system/components.md` and `design-system/tokens.md`.

### Page Anchor Navigation

Purpose: Help guests understand and move through page sections.

Journey Stage: Orientation and continuation.

Guest Need: Know what is on the page and jump to relevant content.

Business Role: Improve discovery across long-form or multi-section pages.

Typical Placement: Near the top of content or after the hero.

Reuse Guidance: Use for pages with distinct sections such as venues, events, packages, FAQs, or offers.

Adaptation Guidance: Keep labels short, accurate, and aligned to actual page sections.

Content Requirements: Section labels, anchor targets, active or navigational state when appropriate.

Measurement Readiness: Can support section engagement and page navigation analysis.

Risks: Anchor labels can create false hierarchy if they do not match the content structure.

Evidence: Observed in Entertainment pilot.

### FAQ / Support Continuity

Purpose: Reduce uncertainty after discovery and decision-support content.

Journey Stage: Evaluation, decision, and support.

Guest Need: Resolve practical questions without interrupting exploration.

Business Role: Reduce friction and support conversion confidence.

Typical Placement: Lower page, after primary discovery and conversion paths.

Reuse Guidance: Use for policies, logistics, package terms, venue details, and event support.

Adaptation Guidance: Preserve existing FAQ content and accessibility behavior unless a content governance task changes it.

Content Requirements: Questions, answers, categories when needed, clear relationship to page topic.

Measurement Readiness: Should support FAQ engagement and reduced support friction.

Risks: Moving FAQ too high can interrupt merchandising; moving it too low without anchors can reduce findability.

Evidence: Observed in Entertainment pilot design review.

### Social Proof Layer

Purpose: Provide credible external or social context that supports trust.

Journey Stage: Discovery or evaluation.

Guest Need: Know the experience is active, reputable, or socially validated.

Business Role: Increase confidence and cultural relevance.

Typical Placement: Adjacent to relevant venue, benefit, event, or offer context.

Reuse Guidance: Use only when sources, rights, moderation, and governance are clear.

Adaptation Guidance: Keep social context subordinate to official content and conversion paths.

Content Requirements: Source, date or freshness context when relevant, governance status, relationship to claim.

Measurement Readiness: Can support engagement and trust indicators.

Risks: Ungoverned social integrations can introduce stale, off-brand, or legally risky content.

Evidence: Confirmed by `design-system/components.md`; observed as an opportunity in both pilot families.

## Reuse Guidance

Reuse patterns by role, not by visual resemblance. A module should be selected because it solves a guest and business need in the journey.

## Adaptation Guidance

Adapt patterns to the page's existing rhythm, asset availability, content governance, and conversion maturity. Do not force a pattern to carry unconfirmed content.

## Measurement Readiness Notes

Patterns should preserve clear action intent, section identity, and content relationships so future analytics can evaluate discovery, engagement, and conversion without adding visible clutter.

## Anti-Patterns

Avoid:

- Treating every reusable pattern as a card.
- Nesting cards inside cards.
- Turning proof into detached decoration.
- Creating new patterns for one-off pilot needs.
- Using social or partner content without governance.
- Replacing working page journeys with unrelated standalone modules.
