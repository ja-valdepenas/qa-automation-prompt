# Recorder-to-POM Workflow

## Goal
Convert raw Playwright recorder output into maintainable POM-based test automation.

## Workflow
1. **Collect recorder output**
   - Capture scenario with `npx playwright codegen <url>`.
   - Save generated steps exactly as recorded.

2. **Identify page boundaries**
   - Group steps by URL/screen transitions.
   - Create one page object per major screen; add components for repeated widgets.

3. **Extract locators**
   - Move selectors from test script into page object locator fields.
   - Normalize to robust selectors (`getByRole`, `getByLabel`, `getByTestId`).

4. **Create intent methods**
   - Replace low-level step sequences with meaningful methods.
   - Keep methods focused and reusable.

5. **Refactor test**
   - Rewrite recorder script into readable test cases using page objects.
   - Add clear assertions for expected outcomes.

6. **Stabilize**
   - Remove unnecessary waits.
   - Add explicit synchronization for page transitions and async states.

7. **Review output**
   - Verify naming, folder placement, and strict typing.
   - Ensure test logic remains in tests and UI logic in page objects.

## Deliverables
- Updated/created page object files.
- Cleaned test specs.
- Optional shared fixtures for repeated setup.
