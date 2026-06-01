# AI Design Execution Workflow

This workflow defines how product opportunities become AI-assisted design solutions inside the AI Product Operating System. It coordinates brand doctrine, component doctrine, token doctrine, analytics framework, package architecture, and agent definitions into one repeatable operating model.

The workflow is designed for hospitality, entertainment, premium experiences, conversion-aware UX, and modular product design. It should be used when a team needs to move from opportunity signal to concept, design exploration, review, measurable experiment, GitHub-tracked delivery, and future orchestration.

This document is not implementation code and is not tied to a single tool vendor. Tools may change. The operating standards should remain stable.

## Operating Model

Core doctrine inputs:

- **Brand Doctrine:** Defines emotional quality, hospitality tone, conversion philosophy, visual standards, interaction principles, and experience architecture.
- **Component Doctrine:** Defines reusable experience modules, journey roles, conversion responsibilities, responsive behavior, and measurement contracts.
- **Token Doctrine:** Defines the visual and interaction foundations that keep generated work consistent across Figma, code, and future systems.
- **Analytics Framework:** Defines surfaces, modules, entities, actions, signals, funnels, experiments, KPIs, and telemetry-aware UX.
- **Package Architecture:** Defines how offers, inclusions, constraints, audiences, operations, and conversion paths become coherent hospitality packages.
- **Agent Definitions:** Define the specialized responsibilities of package, Figma, conversion, design review, and analytics agents.

Tool roles:

- **ChatGPT:** Strategy partner for synthesis, brief structuring, critique, workflow planning, and cross-doctrine reasoning.
- **Claude:** Long-form reasoning partner for concept alternatives, copy refinement, strategic critique, and second-opinion review.
- **Figma Make:** AI-assisted visual exploration tool for turning structured design briefs into editable screens and flows.
- **Codex:** Repository operator for documentation, workflow assets, design-system artifacts, prompt libraries, implementation planning, and GitHub-ready changes.
- **OpenClaw:** Future orchestration layer that routes work between agents, tools, checkpoints, state transitions, and automation triggers.
- **v0:** Rapid interface concepting tool for layout, interaction, and implementation-oriented prototypes when code-shaped exploration is useful.
- **Aura:** Brand, creative, or campaign intelligence layer for atmospheric direction, image language, storytelling cues, and experience tone.
- **GitHub:** Version control, review, issue tracking, pull requests, release discipline, and operational memory.

## 1. Workflow Philosophy

AI design execution should turn opportunity into governed product learning. The goal is not to generate more screens. The goal is to produce clearer decisions, better guest experiences, reusable system assets, and measurable outcomes.

Principles:

- Start from a product opportunity, not a tool prompt.
- Convert ambiguity into structured briefs, constraints, and decision criteria.
- Use AI tools for generation, comparison, critique, and acceleration while keeping humans accountable for product judgment.
- Treat brand, components, tokens, analytics, packages, and agents as one operating system.
- Make every output inspectable, reusable, versioned, and measurable.
- Preserve design quality while increasing production speed.
- Prefer repeatable workflow state over one-off creative handoffs.

Every workflow should answer:

- What opportunity are we pursuing?
- Which guest or operator problem does it address?
- Which doctrine governs the decision?
- Which artifacts must be produced?
- Which tools and agents contribute?
- What human checkpoint is required?
- What evidence will determine success?

## 2. Opportunity Intake

Opportunity intake captures the reason to begin design work. Inputs may come from analytics, stakeholder requests, campaign calendars, inventory changes, revenue goals, guest research, operational constraints, support feedback, or observed UX friction.

Required intake fields:

- Opportunity name
- Source signal
- Business objective
- Guest or operator problem
- Experience domain: stay, entertainment, dining, wellness, package, campaign, loyalty, booking, mobile, or operations
- Target audience or segment
- Affected surfaces
- Known constraints
- Desired outcome
- Required deadline or launch window
- Initial owner

Tool interaction:

- ChatGPT structures raw input into an intake brief.
- Claude may challenge assumptions or identify missing context.
- Codex records reusable intake templates or workflow updates in the repository.
- GitHub tracks approved work as issues, branches, PRs, and review history.
- OpenClaw should eventually detect intake signals and route them to the correct agent sequence.

Exit criteria:

- The opportunity has a named owner.
- The problem is specific enough to evaluate.
- Affected doctrine areas are known.
- The workflow can proceed without relying on unstructured brainstorming.

## 3. Problem Definition

Problem definition converts the opportunity into a clear product brief. The team should separate symptoms, causes, desired behavior, business value, and evidence gaps.

The problem definition must include:

- Current state
- Desired future state
- Guest or operator decision being improved
- Primary friction or unmet need
- Brand risk, conversion risk, analytics risk, or operational risk
- Success metric candidate
- Guardrail metric candidate
- Non-goals

Recommended agent participation:

- Design Review Agent validates whether the problem has a coherent journey and design-quality frame.
- Analytics Agent identifies missing behavioral evidence and measurement needs.
- Conversion Agent clarifies whether the problem is about qualified intent, friction, comprehension, or commitment.
- Package Agent joins when the opportunity involves bundles, offers, inclusions, or campaign merchandising.

Exit criteria:

- The problem can be summarized in one precise paragraph.
- The team knows what will not be solved in this cycle.
- There is enough context to generate strategy without inventing product logic.

## 4. Analytics Review

Analytics review determines what is already known, what is missing, and what the workflow must measure after launch. Analytics should shape design before visual exploration begins.

Review questions:

- Which surfaces, modules, entities, actions, signals, and funnels are involved?
- What behavior indicates awareness, consideration, intent, conversion, friction, expansion, or recovery?
- Where does abandonment occur?
- Which signals are high confidence and which are noisy?
- What reporting owner will act on the result?
- What event or dashboard gap would prevent learning?

Outputs:

- Measurement summary
- Funnel stage map
- Baseline metric list
- Missing telemetry list
- Experiment-readiness assessment
- Analytics risks

Tool interaction:

- ChatGPT or Claude can synthesize existing findings into a measurement brief.
- Analytics Agent validates signal quality against the Analytics Framework.
- Codex turns approved measurement standards into repository artifacts when needed.
- GitHub records analytics work as acceptance criteria or follow-up issues.

Exit criteria:

- The workflow has a measurable learning goal.
- Required telemetry is identified before design approval.
- The team can distinguish success from activity volume.

## 5. Package Strategy Generation

Package strategy generation applies when the opportunity involves offers, hospitality bundles, entertainment campaigns, stay combinations, dining or wellness add-ons, loyalty benefits, or seasonal merchandising.

Package strategy must define:

- Audience
- Occasion
- Emotional benefit
- Commercial objective
- Core promise
- Inclusions and exclusions
- Eligibility and constraints
- Operational owner
- Primary CTA
- Comparison logic
- Measurement plan
- Experimentable variants

Tool interaction:

- ChatGPT generates the first structured package strategy.
- Claude critiques narrative clarity, audience fit, and unsupported assumptions.
- Package Agent validates package architecture.
- Aura may provide campaign tone, imagery cues, or experience atmosphere.
- Figma Make receives only approved package structure, not vague bundle ideas.
- Codex stores package workflow patterns and reusable prompts.

Exit criteria:

- The package is more than a discount bundle.
- Operational truth is visible.
- The package can be designed, merchandised, measured, and tested.

## 6. UX Concept Generation

UX concept generation turns the approved problem and strategy into candidate experience flows. Concepts should be structured around journey stage, component role, user decision, and measurable outcome.

Concept brief requirements:

- Target surface or flow
- Journey sequence
- Primary user task
- Component candidates
- CTA hierarchy
- Content hierarchy
- Mobile behavior
- States and edge cases
- Measurement intent
- Design risks
- Experiment hypothesis if applicable

Tool interaction:

- ChatGPT creates structured UX concepts and compares alternatives.
- Claude pressure-tests clarity, edge cases, and user reasoning.
- v0 may generate code-shaped layout concepts when interaction, layout density, or responsive behavior needs quick validation.
- Figma Make explores visual direction after concept structure is clear.
- Design Review Agent evaluates concept quality before deeper production.

Exit criteria:

- At least one concept is strong enough for AI design exploration.
- Weak concepts are documented or discarded with rationale.
- The concept references component doctrine and analytics intent.

## 7. AI Design Exploration

AI design exploration produces multiple visual or interaction directions while preserving doctrine. Exploration should be bounded, not open-ended.

Exploration rules:

- Define the design question before generating.
- Generate variants around meaningful product differences, not arbitrary style changes.
- Preserve the approved problem, audience, CTA, telemetry, and package constraints.
- Keep generated work editable and reviewable.
- Label assumptions, placeholder content, and unresolved decisions.
- Avoid generated claims, benefits, scarcity, exclusivity, or operational promises that were not approved.

Recommended variant types:

- Narrative-led variant
- Conversion-led variant
- Package-led variant
- Mobile-first variant
- Campaign-led variant
- Operational-density variant

Tool interaction:

- Figma Make creates editable screens or flows from structured prompts.
- v0 creates implementation-shaped prototypes when useful.
- Aura informs mood, campaign tone, or image direction.
- ChatGPT and Claude compare outputs against the brief.
- Figma Agent translates doctrine into Figma-ready prompts and review notes.

Exit criteria:

- Variants are comparable against the same success criteria.
- Design choices can be explained through doctrine.
- At least one direction is ready for formal concept review.

## 8. Figma Make Workflow

Figma Make should receive structured design instructions, not raw aspiration. The prompt should include the product goal, audience, journey stage, component roles, token expectations, CTA behavior, measurement intent, and review constraints.

Figma Make prompt structure:

- Context: product, audience, surface, domain, and opportunity
- Objective: user decision and business outcome
- Experience sequence: arrival, orientation, consideration, intent, decision, continuation
- Component requirements: hero, package module, comparison, CTA, itinerary, offer stack, form, or dashboard pattern
- Brand requirements: composed, warm, editorial, precise, restrained, conversion with respect
- Token requirements: typography, spacing, color, layout rhythm, radius, elevation, motion posture
- Analytics requirements: module impressions, CTA selections, package interactions, friction signals, conversion events
- Responsive requirements: mobile-first states and desktop expansion
- Constraints: operational truth, approved content only, accessibility, no fake urgency, no invented claims

Workflow steps:

1. Prepare prompt from approved strategy and concept.
2. Generate initial Figma Make output.
3. Inspect hierarchy, component structure, token alignment, and responsive behavior.
4. Annotate doctrine drift.
5. Regenerate only with specific correction instructions.
6. Move promising directions into concept review.

Exit criteria:

- The Figma output is editable, inspectable, and aligned enough for human review.
- Component and token drift are documented.
- The design does not outrun strategy, analytics, or package truth.

## 9. Concept Review Process

Concept review selects, revises, or rejects generated directions. Review should use explicit criteria rather than subjective preference alone.

Review dimensions:

- Problem fit
- Guest clarity
- Brand alignment
- Component integrity
- Token discipline
- Package clarity
- Conversion readiness
- Analytics readiness
- Mobile quality
- Accessibility and state coverage
- Operational feasibility
- Experiment potential

Review outcomes:

- **Approved:** Direction can move into detailed design, prototype, or implementation planning.
- **Conditionally approved:** Direction can proceed after named issues are resolved.
- **Rejected:** Direction conflicts with doctrine, strategy, evidence, or operational truth.
- **Deferred:** Direction needs more data, stakeholder alignment, or technical validation.

Tool interaction:

- ChatGPT synthesizes review notes and decision rationale.
- Claude can provide independent critique on weak assumptions.
- Design Review Agent leads design-governance evaluation.
- Analytics, Conversion, Package, and Figma Agents contribute specialized review.
- GitHub captures approved decisions, unresolved issues, and follow-up tasks.

## 10. Agent Collaboration Framework

Agents should operate as specialized reviewers and producers inside a shared workflow state. No agent owns the whole decision alone.

Agent responsibilities:

- **Package Agent:** Package promise, audience, inclusions, constraints, merchandising logic, operational credibility.
- **Figma Agent:** Prompt quality, component structure, token alignment, Figma Make execution, generated design governance.
- **Conversion Agent:** CTA timing, funnel logic, friction, qualified intent, respectful conversion, experiment opportunities.
- **Design Review Agent:** Brand alignment, hierarchy, pacing, component integrity, visual quality, accessibility, design debt.
- **Analytics Agent:** Measurement purpose, funnel map, event coverage, KPI quality, experiment readiness, behavioral interpretation.

Collaboration rules:

- Each agent should state inputs, outputs, risks, and approval state.
- Agents should escalate conflicts rather than silently resolving tradeoffs.
- Human reviewers make final decisions on launch, public-facing content, high-risk conversion patterns, and doctrine changes.
- Agent recommendations should be versioned when they become reusable guidance.
- Future OpenClaw orchestration should route work based on state, risk, dependencies, and required approvals.

## 11. Human Review Checkpoints

Human judgment is required where accountability, brand quality, operational feasibility, or customer trust is at stake.

Required checkpoints:

- Opportunity approval
- Problem definition approval
- Package strategy approval
- Concept shortlist approval
- Figma Make output review
- Conversion and analytics review
- Experiment approval
- GitHub PR review
- Launch readiness approval
- Post-launch learning review

Human reviewers should verify:

- The work solves a real problem.
- The generated direction does not invent facts.
- The experience feels premium, useful, and trustworthy.
- Operational teams can fulfill what the design promises.
- Measurement is sufficient to learn after release.
- The work is documented well enough to reuse.

## 12. Design Governance

Design governance ensures AI-assisted output strengthens the system instead of creating drift.

Governance standards:

- Use brand doctrine for tone, pacing, emotional quality, and conversion philosophy.
- Use component doctrine for module selection, journey role, state expectations, and measurement contracts.
- Use token doctrine for color, type, spacing, layout, radius, elevation, and motion decisions.
- Use analytics framework for telemetry, funnel role, behavioral signal, and experiment design.
- Use package architecture for offers, bundles, inclusions, restrictions, operations, and merchandising.
- Use agent definitions for review routing and responsibility boundaries.

Governance artifacts:

- Design decision record
- Prompt record
- Concept review summary
- Measurement plan
- Experiment brief
- GitHub issue or PR
- Post-launch learning summary

Exit criteria:

- The design can be traced back to doctrine.
- Deviations are intentional, named, and approved.
- New reusable patterns are captured for future work.

## 13. Conversion Review

Conversion review ensures the design improves action quality without damaging hospitality, trust, or clarity.

Review questions:

- What is the primary conversion?
- What secondary and micro-conversions matter?
- Does the CTA match user readiness?
- Is the next step clear and reversible?
- Are price, availability, restrictions, and policies visible at the right time?
- Are upsell or cross-sell moments relevant and limited?
- What friction signals should be measured?
- What guardrails protect trust and experience quality?

Outputs:

- CTA strategy
- Funnel risk list
- Friction reduction recommendations
- Conversion metric set
- Guardrail metric set
- Experiment opportunities

Exit criteria:

- Conversion is treated as service, not pressure.
- The design supports qualified intent.
- The team can measure conversion quality and friction.

## 14. Telemetry Planning

Telemetry planning defines the measurement contract for the designed experience.

Required telemetry elements:

- Surface name
- Module names
- Entity types
- Primary actions
- Secondary actions
- Signals
- Funnel stage
- Conversion events
- Friction indicators
- Experiment identifiers when applicable
- Reporting owner
- Decision the data will support

Telemetry should capture enough context to support future AI recommendations while avoiding noisy, low-value event sprawl.

Exit criteria:

- The experience can be evaluated after launch.
- Telemetry maps to the Analytics Framework object model.
- Reporting connects to an operating decision.

## 15. Experimentation Planning

Experimentation planning turns design uncertainty into controlled learning.

Experiment brief fields:

- Guest problem
- Hypothesis
- Audience
- Surface
- Variant rationale
- Primary metric
- Guardrail metrics
- Required sample or observation threshold
- Duration or review window
- Decision rule
- Rollback conditions
- Owner

Good experiments test meaningful guest decisions, such as package comprehension, CTA timing, comparison support, mobile friction, content sequencing, price clarity, or recovery path effectiveness.

Exit criteria:

- The experiment has a decision rule.
- Metrics reflect guest meaning and business value.
- The design is ready to learn, not merely change.

## 16. Codex Integration

Codex is responsible for making the workflow durable in the repository. It should turn approved operating decisions into versioned artifacts.

Codex responsibilities:

- Create and update workflow documents, prompts, agent definitions, doctrine, and planning artifacts.
- Maintain branch discipline and clean PRs.
- Translate review findings into repository changes.
- Prepare implementation plans without prematurely introducing code.
- Preserve reusable patterns and future orchestration hooks.
- Keep documentation aligned with the actual operating model.

Codex should use GitHub to expose changes for review and should not merge automatically unless explicitly instructed.

Codex exit criteria:

- The repository contains the approved artifact.
- The branch is clean except for intentional changes.
- The PR explains scope, rationale, and review needs.

## 17. GitHub Workflow Integration

GitHub is the operating memory for the workflow. It should capture what changed, why it changed, who reviewed it, and what happens next.

Required GitHub flow:

1. Create a feature branch.
2. Make the workflow or product artifact change.
3. Review the diff locally.
4. Commit with a clear message.
5. Push the branch.
6. Open a pull request.
7. Request human review.
8. Track unresolved issues before merge.

Recommended PR contents:

- Problem or opportunity
- Summary of changes
- Doctrine areas affected
- Agent or tool interactions
- Review checklist
- Open questions
- Follow-up work

GitHub should also hold issues for telemetry gaps, experiment setup, design-system debt, implementation planning, and post-launch learning.

## 18. OpenClaw Orchestration Vision

OpenClaw should eventually become the orchestration layer that coordinates workflow state across tools, agents, repositories, design files, analytics systems, and human approvals.

Future orchestration states:

- Opportunity received
- Intake complete
- Problem defined
- Analytics reviewed
- Package strategy drafted
- UX concept generated
- AI design explored
- Figma review needed
- Design governance passed
- Conversion review passed
- Telemetry ready
- Experiment ready
- Codex artifact updated
- GitHub PR opened
- Human approval pending
- Launch ready
- Learning review scheduled

Future OpenClaw responsibilities:

- Route work to the right agent based on domain and risk.
- Detect missing inputs before generation begins.
- Trigger design, analytics, conversion, or package review when thresholds are met.
- Maintain state across ChatGPT, Claude, Figma Make, Codex, v0, Aura, and GitHub.
- Recommend next actions from workflow status.
- Preserve audit trails for AI-assisted decisions.
- Surface reusable patterns and automation candidates.

OpenClaw should orchestrate the process, not erase human accountability.

## 19. Future Automation Opportunities

Automation should remove coordination drag while preserving review quality.

Priority opportunities:

- Intake brief generation from analytics, stakeholder notes, or GitHub issues.
- Doctrine-aware prompt generation for Figma Make and v0.
- Package-readiness scoring.
- Component and token drift detection.
- Conversion-risk scoring for CTA-heavy surfaces.
- Telemetry coverage checks.
- Experiment brief generation from analytics signals.
- PR checklist generation based on workflow state.
- Post-launch insight summaries.
- Automated routing to package, analytics, conversion, design review, or Figma agents.
- OpenClaw state management across tools.

Automation should not approve launch, invent facts, bypass review, or optimize against trust guardrails.

## 20. Operational Success Criteria

The workflow is successful when it produces repeatable, high-quality product outcomes.

Success criteria:

- Opportunities move from intake to reviewable design with less ambiguity.
- AI-generated artifacts are more structured, useful, and aligned with doctrine.
- Human reviewers can make faster decisions because inputs, risks, and criteria are explicit.
- Package, design, analytics, and conversion work happen together instead of sequentially after rework.
- Figma Make and v0 outputs become better first drafts.
- Codex keeps operational knowledge versioned and reusable.
- GitHub PRs clearly explain scope and review needs.
- Experiments produce decisions about guest behavior, conversion quality, or design effectiveness.
- Telemetry supports future AI recommendations responsibly.
- OpenClaw can eventually orchestrate the workflow from explicit states and handoffs.

## Example Workflows

These examples show how the operating model should be reused across product scenarios. Each example follows the same core sequence: intake, definition, analytics, strategy, concept, AI exploration, review, telemetry, experiment planning, Codex, and GitHub.

### Landing Page Optimization

Use when a campaign, property, package, or destination page underperforms or lacks clear conversion paths.

Workflow:

1. Intake analytics signals such as low CTA selection, shallow scroll, high mobile exit, or weak package engagement.
2. Define the landing page problem by journey stage: arrival, orientation, consideration, intent, or recovery.
3. Review hero, package module, CTA, comparison, and content-section telemetry.
4. Generate UX concepts for narrative sequence, CTA timing, proof placement, and mobile hierarchy.
5. Use Figma Make for visual alternatives and v0 for responsive interaction exploration when useful.
6. Run design, analytics, and conversion review.
7. Plan an experiment around sequencing, CTA language, package clarity, or comparison support.
8. Record approved changes and follow-up tasks through Codex and GitHub.

Primary outcomes:

- Higher qualified CTA intent
- Improved package comprehension
- Reduced mobile abandonment
- Clearer learning about page sections and funnel behavior

### Package Generation

Use when a team needs to create a new hospitality, entertainment, dining, wellness, or seasonal package.

Workflow:

1. Intake inventory, campaign calendar, audience, revenue goal, and operational constraints.
2. Define the guest occasion and decision problem.
3. Review prior package performance and package journey telemetry.
4. Generate package strategy with audience, promise, inclusions, exclusions, CTA, and measurement plan.
5. Use ChatGPT and Claude to refine package narrative and challenge weak assumptions.
6. Use Aura for campaign mood and image direction when needed.
7. Use Figma Make to explore package merchandising surfaces.
8. Run package, conversion, analytics, and design review before approval.
9. Plan experiments for framing, inclusion hierarchy, comparison, or CTA timing.
10. Version package workflow artifacts through Codex and GitHub.

Primary outcomes:

- Package concepts that are curated, feasible, measurable, and conversion-ready
- Reduced risk of vague bundles or unsupported offer claims
- Stronger reusable package architecture

### Entertainment Campaigns

Use when designing around concerts, residencies, festivals, sporting events, nightlife, or destination entertainment moments.

Workflow:

1. Intake event schedule, audience segments, room or package inventory, campaign goals, and timing constraints.
2. Define the guest journey from discovery to event planning, booking, add-ons, and recovery.
3. Review event page, artist page, package, stay, dining, and booking handoff telemetry.
4. Generate package or campaign strategy for stay-plus-event, dining-plus-show, VIP access, or itinerary framing.
5. Use Aura for atmosphere, visual cues, and campaign storytelling.
6. Use Figma Make for campaign page and package module exploration.
7. Use v0 for high-intent mobile booking or itinerary interaction concepts when needed.
8. Run package, conversion, analytics, and design governance review.
9. Plan experiments around event-to-package conversion, date alignment, add-on relevance, or recovery after sold-out states.

Primary outcomes:

- Entertainment campaigns that connect story, logistics, package value, and conversion
- Better cross-sell and package attachment measurement
- Less guest confusion around event timing and stay planning

### Hospitality Experiences

Use when improving rooms, dining, wellness, amenities, itinerary, concierge, or on-property planning flows.

Workflow:

1. Intake guest need, service context, operational owner, fulfillment constraints, and target surface.
2. Define the experience problem around uncertainty, planning friction, expectation setting, or service discovery.
3. Review telemetry for detail views, save actions, reservations, inquiries, policy views, map use, or itinerary engagement.
4. Generate UX concepts that support arrival, orientation, comparison, decision, and continuation.
5. Use Figma Make for composed hospitality surfaces and mobile-first flows.
6. Use ChatGPT or Claude to refine service copy and decision support.
7. Run design review for hospitality tone, operational clarity, state handling, and accessibility.
8. Run analytics review for service-intent signals and operational reporting.
9. Plan experiments around content hierarchy, reservation prompts, itinerary saves, or policy clarity.

Primary outcomes:

- Experiences that feel hospitable, clear, and operationally truthful
- Better measurement of service discovery and intent
- Reduced uncertainty before booking or arrival

### Conversion Optimization

Use when a flow has high abandonment, unclear CTA behavior, weak lead quality, or poor booking progression.

Workflow:

1. Intake funnel data, friction indicators, conversion goals, and affected surfaces.
2. Define whether the issue is comprehension, confidence, relevance, technical friction, price exposure, availability, or handoff.
3. Review CTA hierarchy, funnel stage movement, error states, backtracking, dead clicks, and recovery paths.
4. Generate UX concepts for comparison, value clarity, availability, pricing, secondary actions, or recovery.
5. Use v0 for interaction-heavy prototypes when form, calendar, checkout, or sticky CTA behavior needs validation.
6. Use Figma Make for refined visual flow alternatives.
7. Run Conversion Agent review before any experiment approval.
8. Run Analytics Agent review to confirm metrics and guardrails.
9. Plan experiments with explicit decision rules and rollback conditions.
10. Track implementation and review through Codex and GitHub.

Primary outcomes:

- Higher qualified intent and lower avoidable friction
- Conversion gains that preserve trust and hospitality quality
- More useful learning about funnel behavior

### Mobile UX Improvements

Use when mobile users show higher abandonment, lower comprehension, reduced booking progress, or interaction friction.

Workflow:

1. Intake mobile-specific analytics, session findings, stakeholder concerns, and affected flows.
2. Define the mobile problem around attention, reachability, density, performance, state clarity, or handoff.
3. Review mobile telemetry for scroll, CTA taps, filter use, form errors, keyboard behavior, backtracking, and disabled-action taps.
4. Generate mobile-first UX concepts before desktop refinements.
5. Use v0 for responsive prototypes and interaction-state validation when useful.
6. Use Figma Make to produce polished mobile screens and desktop expansion.
7. Run design review for hierarchy, readability, tap targets, stable layout, states, and accessibility.
8. Run conversion and analytics review for mobile funnel quality.
9. Plan experiments around sticky action timing, content compression, comparison steps, form simplification, or recovery prompts.
10. Record reusable mobile patterns through Codex and GitHub.

Primary outcomes:

- Mobile flows that are focused, reachable, readable, and measurable
- Reduced abandonment from avoidable interaction friction
- Reusable mobile-first patterns for future AI-assisted workflows
