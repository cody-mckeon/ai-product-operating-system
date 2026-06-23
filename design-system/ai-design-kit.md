# AI Design Kit

## Purpose

This kit translates Resorts World Las Vegas brand doctrine, visual guidance, and reusable pilot learnings into AI-consumable design context. It is intended for Design Review, Figma Prompt, Figma, and future product agents.

This document is guidance only. It does not define final designs, implementation requirements, component specifications, or page-specific recommendations.

## Evidence Sources

Confirmed by brand doctrine:

- `design-system/brand.md`
- `design-system/components.md`
- `design-system/tokens.md`
- `design-system/accessibility.md`
- `design-system/motion.md`

Confirmed by brand guidelines:

- `design-system/brand-guidelines/rwlv-brand-guidelines-2026.pdf`
- Strategy pillars: Luxury That Lets You In, A Curated Resort Experience, Vegas at Your Volume.
- Photography guidance emphasizing movement, energy, and property life.

Observed in completed pilot outputs:

- `projects/conrad-testimonial-pilot/outputs/design-review.md`
- `projects/conrad-testimonial-pilot/outputs/figma-prompts.md`
- `projects/conrad-testimonial-pilot/outputs/recommendation.md`
- `projects/entertainment-live-page-pilot/outputs/design-review.md`
- `projects/entertainment-live-page-pilot/outputs/figma-prompts.md`
- `projects/entertainment-live-page-pilot/outputs/concept-selection.md`
- `projects/entertainment-live-page-pilot/outputs/recommendation.md`

Evidence limitations:

- Exact color values, type sizes, spacing values, motion durations, breakpoints, and component dimensions are not confirmed in the reviewed sources.
- Pilot screenshots were limited. Reusable patterns are therefore promoted from brand doctrine, design-system docs, and completed pilot outputs rather than screenshot-only visual evidence.

## Brand Personality

RWLV should feel confident, warm, editorial, precise, measured, and adaptive.

Confirmed guidance:

- Luxury should feel personal, welcoming, and confidence-building rather than stiff, performative, or exclusionary.
- The resort should present a curated ecosystem of hotels, dining, entertainment, wellness, gaming, and hospitality experiences.
- The guest should feel in control of the volume and pace of Las Vegas.

AI guidance:

- Express premium hospitality through clarity, restraint, pacing, and helpful context.
- Create moments of arrival without turning every module into a hero.
- Favor confidence over hype, invitation over pressure, and useful atmosphere over decoration.

## Visual Direction

RWLV visual direction should combine cinematic hospitality with operational elegance.

Confirmed guidance:

- Use editorial hierarchy, atmospheric depth, material quality, functional contrast, and composed restraint.
- Photography should bring the property to life and can incorporate movement and energy.
- Design should avoid visual fatigue, generic luxury tropes, and casino overload.

AI guidance:

- Use one clear visual lead per section.
- Let imagery, hierarchy, and spacing create premium presence before adding decorative treatments.
- Use action emphasis selectively so conversion moments feel clear, not aggressive.
- Preserve continuity with surrounding page patterns when inserting new modules.

## Hospitality Behaviors

Design should behave like a good host.

Reusable behaviors:

- Orient guests before asking them to act.
- Make relationships between experiences, venues, packages, and offers clear.
- Surface important constraints before they become friction.
- Support guests who are browsing, comparing, planning, and ready to convert.
- Provide enough context for confidence without overwhelming the page.

Pilot evidence:

- Conrad pilot promoted adjacent benefit validation instead of isolated proof.
- Entertainment pilot promoted venue/program orientation before ticket action.

## Design Behaviors

Reusable behaviors:

- Build hierarchy around guest understanding first, then commercial action.
- Use modules as story units with a narrative role, conversion purpose, and operational context.
- Prefer inserted enhancements that respect existing page structure when the page already has working discovery and conversion paths.
- Keep dense information scannable through grouping, labels, and progressive disclosure.
- Maintain stable page rhythm across arrival, discovery, evaluation, decision, and continuation.

## Content Behaviors

Reusable behaviors:

- Use precise, guest-centered language.
- Explain unfamiliar relationships directly.
- Keep labels functional and specific.
- Avoid claims that cannot be governed, sourced, or maintained.
- Do not let editorial language obscure operational truth.

Observed pilot guidance:

- Benefit claims should sit next to supporting evidence.
- Venue or program taxonomy should be explicit when names could be misunderstood.
- Social, partner, press, and package content require governance before becoming prominent claims.

## Collective Evidence Guidance

When introducing a cross-venue program, collective, initiative, membership, loyalty experience, festival, package ecosystem, or recurring activation:

- Participating venue evidence should explain the relationship rather than simply listing venue names.
- Guests should understand why a venue participates and what role it plays within the broader experience.
- Evidence should create understanding, not promotion.
- Prefer concise contextual descriptions over logo walls, venue grids, or unexplained lists.
- Program proof should feel informative and guest-centered rather than marketing-driven.
- Collective identity should remain primary while venue evidence serves as supporting context.
- Avoid repeating existing venue discovery experiences when explaining a collective.
- Supporting evidence should help guests connect programs, venues, experiences, and actions without creating duplicate navigation structures.

Examples include:

- Savor Society
- Resorts World Live
- Package ecosystems
- Culinary festivals
- Cross-property activations
- Loyalty or membership experiences

Anti-patterns:

- Simple venue name lists without context
- Logo walls presented as proof
- Duplicate venue grids
- Event inventory used as a substitute for explanation
- Promotional claims without operational meaning

Design objective:

Help guests understand the relationship between the collective and participating venues before asking them to explore, reserve, purchase, or engage.

## Conversion Behaviors

Confirmed guidance:

- Conversion is an act of hospitality.
- Relevance, trust, and timing should precede action.
- Avoid fake urgency, dark patterns, and pressure-heavy selling.

Reusable behaviors:

- Preserve clear primary actions.
- Place CTAs where the guest has enough context to understand the action.
- Differentiate action intent when multiple CTAs appear near each other.
- Support booking, ticketing, and package discovery without collapsing them into one generic sales moment.
- Let proof, orientation, and comparison earn the click.

## Interaction Behaviors

Reusable behaviors:

- Make affordances clear.
- Give guests guided agency rather than forcing a single path.
- Support reversible exploration through anchors, filters, back paths, accordions, or contextual links.
- Keep state changes calm and transparent.
- Use motion to clarify transitions, not to perform luxury.

## Accessibility Behaviors

Reusable behaviors:

- Preserve semantic hierarchy.
- Maintain readable body copy and labels.
- Keep interactive controls distinguishable and reachable.
- Ensure accordions, anchors, cards, and CTAs remain understandable without visual effects alone.
- Respect reduced-motion needs.
- Avoid placing essential information only in imagery.

## Anti-Patterns

Avoid:

- Neon casino excess as a default expression of Las Vegas.
- Generic SaaS grids or dashboard-like sameness for hospitality pages.
- Dense walls of equal-weight cards.
- Multiple competing primary CTAs in the same decision moment.
- Standalone proof sections disconnected from the claim they support.
- Decorative gradients, glows, or atmospheric effects that do not clarify the experience.
- Overly dark luxury tropes that reduce warmth or readability.
- Treating partner, venue, package, or social claims as design decoration without governance.
- Redesigning an entire page when the work is an inserted enhancement.

## Agent Usage Guidance

Use this kit to set the design posture before generating recommendations, design-review guidance, or Figma Make prompts.

When evidence is confirmed, state it as doctrine. When guidance is inferred from pilot patterns, label it as inferred. When exact values or asset facts are unknown, do not invent them.

Future agents should ask:

- Does the experience orient the guest before asking for action?
- Does the module preserve RWLV warmth, clarity, and editorial restraint?
- Does the page feel curated rather than cluttered?
- Does commercial action feel helpful and timely?
- Does the guidance scale beyond one pilot?
