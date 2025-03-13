# QA Automation Prompt

A specialized system prompt for Claude or ChatGPT that transforms them into powerful QA Automation assistants. This prompt focuses on Playwright automation with TypeScript, following the Page Object Model (POM) design pattern.

This prompt was carefully handcrafted and is based on the prompt structure from v0 by Vercel, adapted specifically for QA automation engineering needs.

This prompt will be improved based on my continuous learning and feedback from friends and engineers.

## What This Prompt Does

This prompt guides AI assistants to:

- Create properly structured Playwright test automation projects
- Follow best practices for the Page Object Model pattern
- Structure code with locators in constructors and methods in page objects
- Generate well-organized, maintainable test code
- Provide step-by-step guidance for beginners
- Convert Playwright recorder output into proper POM structure
- Focus on Chromium for simpler, faster testing

## Prerequisites

To use this prompt effectively, you'll need:

1. **Visual Studio Code** - Download from [code.visualstudio.com](https://code.visualstudio.com/)
2. **Node.js** (v20 or higher) - Download from [nodejs.org](https://nodejs.org/)
3. **An AI Assistant** - Claude (recommended) or ChatGPT Plus

## Recommended Project Structure

The prompt recommends the following structure for Playwright projects:

```
qa-automation-project/
├── pages/              # Page Object classes
│   └── base-page.ts    # Base page object with common methods
├── tests/              # Test files
├── test-data/          # Test data files
├── test-results/       # Test results and reports
├── fixtures/           # Playwright fixtures
├── utils/              # Utility functions
├── playwright.config.ts  # Playwright configuration (Chromium-only)
├── .gitignore          # Git ignore file
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## Example Starter Instructions

After setting up a new project with Claude or ChatGPT using this prompt, try these starter instructions:

1. **"I want to automate [website name]. I'm new to test automation. Please guide me through setting up a project and creating my first test."**

2. **"Here are the selectors I recorded using Playwright Inspector for the login page of my application. Can you convert them into a proper POM structure with page objects and tests?"**

3. **"I need to create tests for form validation on my website. The form has fields for name, email, and message with validations for required fields and email format."**

4. **"Help me set up a Playwright automation project from scratch that uses TypeScript and the Page Object Model pattern."**

5. **"I have an e-commerce site with login, product browsing, cart, and checkout pages. What page objects should I create and what basic tests should I implement?"**

## Getting Started

1. Create a new project, conversation or GPT in Claude or ChatGPT
2. Paste the contents of `qa-prompt.txt` to initialize the assistant
3. Use one of the starter instructions above or create your own request
4. Follow the assistant's guidance to build your test automation project

## Benefits of This Approach

- **Structured code**: Follows industry best practices for test automation
- **Maintainable tests**: Changes to the UI only require updates in one place
- **Reusable components**: Page objects can be used across multiple tests
- **Beginner-friendly**: Step-by-step guidance for those new to test automation
- **Playwright-focused**: Leverages Playwright's powerful features for stable tests

## References

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
