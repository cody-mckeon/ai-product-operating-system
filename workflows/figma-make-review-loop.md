# Figma Make Review Loop

## Purpose

Add a governed critique and revision loop after Figma Make and before Vendor
Handoff.

AI-generated design output must not move directly from generation into an
implementation-facing handoff. The artifact must be captured, reviewed against
approved intent, revised when necessary, and reviewed again.

## Workflow

Figma Prompt Agent
↓
Figma Make
↓
Design Artifact Review Agent
↓
Figma Revision Prompt Agent
↓
Figma Make Revision
↓
Design Artifact Review Agent
↓
Vendor Handoff Agent

The revision branch is conditional. An initial artifact with a `Pass` status
may proceed without a revision. A `Minor Revision` may proceed toward Vendor
Handoff only when the remaining items are resolved or explicitly carried into
the handoff as non-approved, non-blocking work.

## When To Run This Loop

Run the loop whenever a design artifact will inform stakeholder approval,
vendor scoping, implementation direction, or production work, including:

- Figma Make output
- Figma canvas frames
- Screenshots used as the reference concept
- Vendor design comps
- Staging build screenshots used before handoff
- Live page screenshots used to revise an approved design direction

Run it after the Figma Prompt Agent has produced `figma-prompts.md` and an
inspectable artifact exists.

Do not use this loop to choose between unapproved concepts. Return competing or
unresolved directions to Concept Selection or Design Review first.

## Required Inputs

Before the initial review, provide as many of the following as exist for the
pilot:

- `pilot-brief.md`
- `outputs/current-state.md`
- `outputs/visual-audit.md`
- `outputs/design-evidence.md`
- `outputs/opportunity-analysis.md`
- `outputs/recommendation.md`
- `outputs/generated-concepts.md`
- `outputs/concept-selection.md` or `outputs/selected-concept.md`
- `outputs/design-review.md`
- `outputs/figma-prompts.md`
- Versioned artifact screenshots or Figma references
- Optional Figma node URL or design context

The minimum viable review set is:

- The approved selected direction
- `outputs/design-review.md`
- `outputs/figma-prompts.md`
- An inspectable artifact reference

If these minimum inputs are missing, the artifact is `Not Ready` for this
loop.

For a revision review, also provide:

- The latest `outputs/design-artifact-review.md`
- `outputs/design-artifact-scorecard.md`
- `outputs/design-revision-notes.md`
- `outputs/figma-revision-prompt.md`
- The newly captured artifact version

## Pilot File Organization

Use:

```text
projects/{pilot-name}/
├── screenshots/
│   └── figma-make/
│       ├── v1/
│       ├── v2/
│       └── v3/                  # Only when a second revision is authorized
└── outputs/
    ├── design-artifact-review.md
    ├── design-artifact-scorecard.md
    ├── design-revision-notes.md
    └── figma-revision-prompt.md
```

The files under `outputs/` always describe the latest reviewed artifact. The
versioned screenshot folders preserve the evidence used for each review.

When audit history beyond screenshots is required, copy the completed review
outputs into the corresponding version folder before replacing the canonical
files. Do not rely on ambiguous names such as `final`, `latest`, `new`, or
`approved-final`.

## File Naming Conventions

Use lowercase kebab-case for captures and include viewport or state when
relevant:

- `desktop-full-page.png`
- `desktop-module-detail.png`
- `mobile-full-page.png`
- `mobile-module-detail.png`
- `cta-default.png`
- `cta-expanded.png`
- `form-error-state.png`
- `figma-reference.md`

Use `figma-reference.md` inside a version folder to record:

- Artifact version
- Figma file URL
- Node URL
- File, page, and frame names
- Prompt version used
- Capture date
- Viewport dimensions
- Known missing states
- Creator or generator, when known

Do not overwrite a prior version's evidence.

## Screenshot And Figma Artifact Capture Guidance

Capture enough context to judge both the generated module and its role in the
existing experience.

For each version:

1. Capture the full desktop surface or enough surrounding page context to show
   placement and hierarchy.
2. Capture a closer view of the generated module or changed area.
3. Capture the mobile surface and module at a named viewport when available.
4. Capture interaction states that affect claims, inquiry, CTA, disclosure,
   forms, navigation, or content relationships.
5. Record the exact Figma file, page, frame, and node reference.
6. Record which Figma prompt or revision prompt produced the artifact.
7. Identify placeholders, unresolved assets, and behavior not represented by
   static captures.

Do not crop away surrounding context needed to evaluate page role. Do not use
compressed screenshots when text, contrast, controls, or proof must be
inspected. A Figma URL alone is insufficient when the reviewer cannot access
it; include exported captures.

## Initial Review

1. Run the Figma Prompt Agent.
2. Generate the initial artifact in Figma Make.
3. Save the evidence under `screenshots/figma-make/v1/`.
4. Run the Design Artifact Review Agent.
5. Create:
   - `outputs/design-artifact-review.md`
   - `outputs/design-artifact-scorecard.md`
   - `outputs/design-revision-notes.md`
6. Route the artifact according to its status.

## Status Routing

### Pass

- The artifact may proceed toward stakeholder review or Vendor Handoff.
- Preserve the reviewed artifact reference as the authoritative visual input.
- Vendor Handoff must cite the latest review status and artifact version.

### Minor Revision

- Resolve bounded issues directly or carry them into Vendor Handoff as
  explicit non-blocking items.
- Do not describe placeholders, recommendations, or unresolved content as
  approved.
- Run another Design Artifact Review when the visual artifact changes
  materially.
- The artifact may proceed toward Vendor Handoff when no major or blocking
  issue remains.

### Major Revision

- Run the Figma Revision Prompt Agent.
- Generate `outputs/figma-revision-prompt.md`.
- Revise or regenerate the artifact in Figma Make.
- Save the next version under `screenshots/figma-make/v2/` or `v3/`.
- Run the Design Artifact Review Agent again.
- Do not proceed to Vendor Handoff until status becomes `Pass` or `Minor
  Revision`.

### Not Ready

- Do not proceed to Vendor Handoff.
- Return to Design Review when the selected direction, hierarchy, page role,
  content decision, or design guardrail is unresolved.
- Return to the Figma Prompt Agent when approved direction exists but the
  original prompt is incomplete, contradictory, or aimed at the wrong
  surface.
- Return to artifact capture when the design exists but cannot be inspected.

## Revision Loop

For each authorized revision:

1. Read the latest review, scorecard, and revision notes.
2. Run the Figma Revision Prompt Agent.
3. Paste the ready-to-use prompt into Figma Make or give the designer the
   designer-facing notes.
4. Preserve the successful parts of the previous artifact.
5. Capture the new artifact as the next numbered version.
6. Run the Design Artifact Review Agent against the new version.
7. Replace the canonical review outputs with the latest decision while
   preserving prior evidence.

Do not revise from memory or from informal feedback alone. The revision prompt
must trace to the recorded review.

## Revision Limit And Stop Rule

Allow no more than two revision attempts after the initial `v1` artifact:

- `v2`: first revision
- `v3`: second and final revision

After review of `v3`, stop the generation loop if the status remains `Major
Revision` or `Not Ready`. Return to Design Review for a human decision about
the concept, hierarchy, constraints, content readiness, or prompt strategy.

A design owner may authorize another cycle only by recording:

- Why another generation attempt is preferable to returning to Design Review
- Which unresolved findings are expected to change
- Who owns the decision
- The next version number

Repeated prompt variation is not a substitute for an unresolved product or
design decision.

## Proceeding To Vendor Handoff

Proceed only when:

- The latest artifact is inspectable and versioned.
- The latest Design Artifact Review status is `Pass` or `Minor Revision`.
- No blocking or major findings remain.
- The reviewed artifact reference is identifiable.
- Placeholder and content approval status are explicit.
- Proof, package, seasonal, inquiry, routing, and CTA assumptions are visible.
- Any remaining minor items are resolved or explicitly carried into the
  handoff with an owner and non-blocking status.
- Vendor Handoff uses the reviewed artifact and review outputs as inputs.

Vendor Handoff must not use an older artifact version when a newer reviewed
version exists.

## Returning To Design Review

Return to Design Review when:

- The artifact exposes ambiguity in the approved hierarchy or page role.
- Required revisions would change the selected concept.
- The artifact needs a new component pattern or placement decision that was
  not approved.
- Approved sources conflict materially.
- Content, proof, package, seasonal, or inquiry decisions prevent an honest
  design direction.
- Two revision attempts fail to reach `Pass` or `Minor Revision`.
- The Design Artifact Review status is `Not Ready` because bounded prompt
  correction cannot solve the problem.

Design Review should resolve the decision and update `design-review.md` before
a new Figma prompt or revision prompt is generated.

## Pilot Orchestrator Coordination

The Pilot Orchestrator must treat artifact review as a required stage after
Figma Prompt generation:

`Review generated design artifact before vendor handoff.`

Routing rules:

- `Pass` or `Minor Revision`: continue toward Vendor Handoff.
- `Major Revision`: run the Figma Revision Prompt Agent, revise the artifact,
  and review it again.
- `Not Ready`: return to Design Review or the Figma Prompt Agent according to
  the documented cause.

The orchestrator should report the reviewed artifact version, review status,
revision count, permitted next step, and any missing capture evidence.

## Future Hermes Coordination

Hermes will eventually coordinate this loop as a stateful workflow. It should:

- Detect when `figma-prompts.md` and a new artifact version exist.
- Validate required inputs and capture metadata.
- Invoke the Design Artifact Review Agent.
- Read the exact status from the canonical review output.
- Route `Major Revision` to the Figma Revision Prompt Agent and Figma Make.
- Route `Not Ready` to Design Review, Figma Prompt, or capture remediation.
- Increment artifact versions without overwriting evidence.
- Enforce the two-revision stop rule.
- Prevent Vendor Handoff invocation unless the latest status is `Pass` or
  `Minor Revision`.
- Pass the latest reviewed artifact, scorecard, and unresolved minor items to
  Vendor Handoff.
- Record human approvals, overrides, owners, timestamps, and state transitions.

Hermes must not infer approval, silently downgrade findings, invent missing
inputs, or restart the loop without a new artifact version.

## Completion Criteria

The loop is complete when one of these conditions is true:

- The latest artifact is `Pass` and is ready for stakeholder review or Vendor
  Handoff.
- The latest artifact is `Minor Revision`, all remaining items are resolved or
  explicitly carried forward, and it is ready for Vendor Handoff.
- The work has returned to Design Review or Figma Prompt with a documented
  `Not Ready` cause.
- The revision limit has been reached and a human design decision is required.

