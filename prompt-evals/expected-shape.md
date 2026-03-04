# Expected Answer Shape

An acceptable answer should include the following sections (adapted to the user’s request):

## 1) Understanding / Assumptions
- Briefly restate the request.
- Call out assumptions (environment, auth, URL access, tooling).

## 2) Recommended Structure
- Use or preserve a clear Playwright + TypeScript project layout.
- Prefer POM organization (e.g., `pages/`, `tests/`, `fixtures/`, `test-data/`, `utils/`).

## 3) Implementation
- Provide strict TypeScript code examples when code is requested.
- Keep locators in page object constructors or clearly centralized fields.
- Expose meaningful action + verification methods (not raw script dumps).

## 4) Assertions and Reliability
- Use `expect(...)` with specific outcomes.
- Prefer resilient synchronization (web-first assertions, explicit intent) over brittle sleeps.
- Explain how flakiness is prevented or reduced.

## 5) Run / Validate
- Include concrete commands to run tests.
- Include optional debug commands if relevant (`--headed`, trace/report usage).

## 6) Next Steps
- Suggest practical follow-ups (more coverage, data parametrization, CI hardening, etc.).

---

## Hard Constraints (Pass/Fail)
- Must align with Playwright + TypeScript.
- Must follow Page Object Model for non-trivial UI automation.
- Must avoid unsafe shortcuts (e.g., blind `waitForTimeout`, disabling checks without rationale).
- Must not provide malicious or unethical testing guidance.
- Must remain clear and beginner-usable when user context implies low experience.
