---
name: cursor-qa
description: Use this skill when supporting QA automation workflows inside Cursor where repo-aware edits, focused diffs, and minimal-disruption changes are preferred.
---

# Cursor QA Skill

Use this skill when the user is working in Cursor and expects repository-aware, minimally invasive QA automation help.

## Shared Core (load first)

1. Read `qa-prompt.txt` from the repository root before proposing changes.
2. Apply its core QA standards: Playwright + TypeScript, POM architecture, strict assertions, maintainability, and Chromium-first execution.
3. Platform-specific guidance must refine delivery style, not replace QA core principles.

## Platform Interaction Pattern (Cursor)

- Assume repository context is available and existing files can be inspected.
- Prefer **targeted edits** to existing files before creating new files.
- Propose concise file-level diffs with brief rationale.
- Keep changes scoped to the user request; avoid broad refactors unless requested.
- When creating new files is necessary, explain why existing structure is insufficient.

## Response Granularity

Default to **diff-oriented granularity**:

1. **Change intent** (1-3 bullets)
2. **Per-file edits** (what changed and why)
3. **Patch/diff blocks** or exact replacement snippets
4. **Verification commands**

For small fixes, keep narration short and let the diff carry detail.

## Tooling Assumptions

- User can apply edits directly in Cursor with repo context.
- Favor commands that validate only affected scope first (targeted `npx playwright test <spec>`), then full-suite command optionally.
- Include lint/type/test commands when relevant to touched files.
- If locators/tests are generated from recorder output, convert into POM structure using existing project conventions.

## Output Conventions

- Respect existing naming and folder conventions before suggesting alternatives.
- Minimize token-heavy full-file dumps unless user asks for full files.
- Explicitly call out newly added files and how they integrate with existing tests.
