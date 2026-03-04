---
name: chatgpt-qa
description: Use this skill when producing QA automation guidance for ChatGPT-style chat workflows where users need paste-ready multi-file outputs, clear copy/save/run steps, and beginner-friendly execution instructions.
---

# ChatGPT QA Skill

Use this skill when the user is working in a ChatGPT-style interface and needs complete QA automation guidance they can copy directly into local files.

## Shared Core (load first)

1. Read `qa-prompt.txt` from the repository root before drafting the response.
2. Treat `qa-prompt.txt` as the canonical QA core: Playwright + TypeScript, strict typing, POM-first architecture, Chromium-only defaults, robust assertions, and beginner-friendly guidance.
3. If any platform-specific preference conflicts with `qa-prompt.txt`, keep `qa-prompt.txt` as source of truth.

## Platform Interaction Pattern (ChatGPT)

- Assume no IDE-level context awareness.
- Ask for missing files/snippets explicitly when troubleshooting existing projects.
- Prefer complete, paste-ready file outputs over partial edits.
- Present each file in its own fenced block with an explicit path header.
- Include a short "what to do next" sequence after code output.

## Response Granularity

Default to **high-structure outputs**:

1. **Plan** (what will be created/changed)
2. **Files** (full contents, ready to paste)
3. **Run steps** (exact terminal commands)
4. **Validation** (what should pass and expected output)
5. **Optional next improvements**

When user requests "quick" help, provide a reduced version but still include runnable commands.

## Tooling Assumptions

- User may only have terminal + editor access.
- Include explicit install/setup commands when relevant (`npm init -y`, Playwright install, Chromium install).
- Include copy/save/run instructions in order, e.g.:
  1. Create folders/files
  2. Paste code
  3. Run tests
  4. Open report
- Prefer commands that work cross-platform where possible.

## Output Conventions

- Use deterministic file paths (for example: `pages/login-page.ts`, `tests/login.spec.ts`).
- Keep examples complete, not pseudo-code.
- Use concise explanations around code; optimize for execution over theory.
