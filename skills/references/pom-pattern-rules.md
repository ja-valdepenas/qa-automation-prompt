# POM Pattern Rules

## Design principles
- One class per significant page or reusable component.
- Keep selectors centralized in constructors or readonly fields.
- Expose business-level methods (e.g., `loginAs`, `submitOrder`) rather than raw click/fill chains.

## Class structure
- `constructor(private readonly page: Page)` in each page object.
- Define locator fields once.
- Split methods into:
  - navigation methods
  - action methods
  - verification/read methods

## Reuse and composition
- Use component objects for shared widgets (header, modal, table).
- Avoid inheritance unless there is meaningful shared behavior; prefer composition.
- Keep page objects stateless beyond locator bindings.

## What to avoid
- Assertions in every action method.
- Hardcoded test data in page objects.
- Cross-page orchestration in a single page class.
- Duplicating selectors in test files.

## Naming conventions
- Page objects: `LoginPage`, `CheckoutPage`.
- Components: `HeaderNav`, `CartSummary`.
- Methods: action verbs and intent (`enterEmail`, `placeOrder`, `isErrorVisible`).
