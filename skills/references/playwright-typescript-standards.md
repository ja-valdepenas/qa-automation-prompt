# Playwright + TypeScript Standards

## Core standards
- Use `@playwright/test` with TypeScript strict mode.
- Keep tests deterministic and independent.
- Use semantic locator strategies (`getByRole`, `getByLabel`, `getByTestId`) before CSS/XPath.
- Prefer Playwright auto-waiting and built-in assertions over manual waits.

## Project conventions
- `pages/` for page objects.
- `tests/` for specs.
- `fixtures/` for reusable setup.
- `test-data/` for static inputs.
- `utils/` for helpers with no UI knowledge.

## Test authoring rules
- One clear behavior per test.
- Use AAA (Arrange, Act, Assert).
- Keep assertions in test files unless verification is page-specific and reusable.
- Use `test.step` for key workflow boundaries.

## Reliability rules
- No fixed sleeps (`waitForTimeout`) unless diagnosing.
- Avoid overly broad locators.
- Add explicit checks for navigation, visibility, and state changes.
- Use retries only as a last resort, not to mask instability.

## Configuration baseline
- Default to Chromium-first execution for quick feedback.
- Keep reporter output readable (`list` locally, `html`/`junit` in CI).
- Use environment variables for URLs, credentials, and secrets.
