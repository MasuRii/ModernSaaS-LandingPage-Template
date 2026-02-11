# Contributing to ModernSaaS Landing Page Template

First off, thank you for considering contributing to the ModernSaaS Landing Page
Template! It's people like you that make the open-source community such an
amazing place.

## Table of Contents

1. [Development Setup](#development-setup)
2. [Code Style & Standards](#code-style--standards)
3. [How to Contribute](#how-to-contribute)
   - [Reporting Bugs](#reporting-bugs)
   - [Requesting Features](#requesting-features)
   - [Pull Requests](#pull-requests)
4. [Testing Requirements](#testing-requirements)
5. [License](#license)

## Development Setup

This project uses **Bun** as the primary package manager and runtime.

### Prerequisites

- [Bun](https://bun.sh/) (v1.1 or higher)
- [Node.js](https://nodejs.org/) (LTS recommended, for certain tooling
  compatibility)

### Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/MasuRii/ModernSaaS-LandingPage-Template.git
    cd ModernSaaS-LandingPage-Template
    ```

2.  **Install dependencies:**

    ```bash
    bun install
    ```

3.  **Run the development server:**
    ```bash
    bun run dev
    ```
    The site should now be running at `http://localhost:4321`.

## Code Style & Standards

We enforce high standards to ensure the codebase remains maintainable and
high-quality.

### TypeScript

- We use **TypeScript** in strict mode. Avoid `any` at all costs.
- Use functional components with React 19.
- Explicitly define prop types and return types for functions.

### Styling

- We use **Tailwind CSS v4**.
- Follow the utility-first approach. Avoid writing custom CSS unless absolutely
  necessary.
- Ensure all components support both **Light** and **Dark** modes using
  Tailwind's `dark:` modifier or CSS variables.

### Formatting & Linting

- We use **ESLint** and **Prettier**.
- Run `bun run lint` to check for errors.
- Code is automatically formatted on commit via `husky` and `lint-staged`.

## How to Contribute

### Reporting Bugs

- Use the GitHub Issue Tracker.
- Describe the bug in detail, including steps to reproduce.
- Include environment details (OS, Browser, Node/Bun version).

### Requesting Features

- Open an issue with the "Feature Request" label.
- Explain why the feature is needed and how it benefits the template users.

### Pull Requests

1.  **Create a branch:** Use a descriptive name like `feature/new-section` or
    `fix/button-contrast`.
2.  **Keep it focused:** One PR should address one issue or feature.
3.  **Update documentation:** If you add a new feature or change configuration,
    update the README or relevant docs.
4.  **Add tests:** Ensure new functionality is covered by unit or E2E tests.
5.  **Verify locally:** Ensure all tests pass (`bun test`, `bun run test:e2e`)
    and there are no linting errors.

## Testing Requirements

We aim for high test coverage and zero regressions.

- **Unit Tests:** `bun test` (Vitest)
- **E2E Tests:** `bun run test:e2e` (Playwright)
- **Type Checking:** `bun run typecheck`
- **Linting:** `bun run lint`
- **Accessibility:** `bun run test:a11y`
- **Performance:** `bun run test:perf`

## License

By contributing to this project, you agree that your contributions will be
licensed under its MIT License.
