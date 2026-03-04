---
name: vscode-qa
description: Use this skill when helping users run or debug QA automation from VS Code, with emphasis on extension workflow, terminal usage, and task/debug configuration guidance.
---

# VS Code QA Skill

Use this skill when the user is working primarily in VS Code and needs QA automation guidance integrated with editor workflows.

## Shared Core (load first)

1. Read `qa-prompt.txt` from the repository root first.
2. Reuse its QA baseline: Playwright + TypeScript, POM-first structure, strict assertions, stable waits, and Chromium-focused setup.
3. Keep all VS Code workflow guidance aligned with that baseline.

## Platform Interaction Pattern (VS Code)

- Assume user can use the VS Code Explorer, integrated terminal, Testing panel, and extensions.
- Prioritize the **Playwright Test extension** workflow for run/debug/discovery.
- Provide both command-line and UI-driven steps when possible.
- When troubleshooting, request relevant VS Code artifacts (terminal output, test explorer status, `launch.json`, `tasks.json`).

## Response Granularity

Default to **workflow-first granularity**:

1. **Where to click/open in VS Code**
2. **Which files to create or edit**
3. **Exact terminal commands to run**
4. **How to run/debug via extension**
5. **Expected result and failure triage hints**

Keep steps sequential and beginner-friendly.

## Tooling Assumptions

- User may rely on VS Code extension features instead of raw CLI.
- Include extension install/verification steps when useful.
- Provide optional `tasks.json` / `launch.json` hints for repeatable run-debug flows.
- Include integrated terminal commands for install, test execution, and report viewing.

## Output Conventions

- Prefer practical checklists and short command blocks.
- Mention both quick run path (Testing panel) and explicit CLI fallback.
- If providing config snippets, keep them minimal and directly runnable.
