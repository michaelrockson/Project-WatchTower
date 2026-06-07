# Contribution Guide

Thank you for contributing to Reddit-Mine. This guide explains how to get started, how to structure contributions, and what standards to follow for both backend and frontend work.

## Getting Started

1. Fork the repository and clone your fork.
2. Create a new branch for your work:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Keep changes scoped to a single issue or improvement.
4. Open a pull request against the main branch when ready.

## Project Structure

The repository has two main components:

- `Agent_Backend/` — Python services, pipelines, database models and integrations.
- `Agent_Frontend/` — React + TypeScript UI built with Vite.

When contributing, modify only the component(s) relevant to your change.

## Contribution Workflow

- Use descriptive branch names: `feature/`, `fix/`, `docs/`, `chore/`.
- Rebase or merge latest `main` before opening your PR.
- Keep commits focused and use clear commit messages.
- Include a concise PR summary and list any manual testing steps.
- If your change impacts configuration or setup, update docs or README files.

## Coding Standards

### Backend

- Python 3.11+ compatible.
- Follow PEP 8 style and prefer clear, readable code.
- Use meaningful names for functions, classes, variables, and modules.
- Keep business logic in service or pipeline modules not in script entrypoints.
- Add or update documentation comments when behavior is not obvious.

### Frontend

- Use TypeScript types and interfaces for props and state.
- Keep UI components small and reusable.
- Follow existing React patterns in `Agent_Frontend/src`.
- Use CSS modules or existing styling patterns from `App.css` and component styles.
- Avoid unused imports and console logs in development code.

## Testing

- Validate backend changes manually by running the relevant Python entrypoint from `Agent_Backend/`.
- Validate frontend changes with `npm run dev` or the equivalent Vite development command.
- Ensure changes do not break the normal build/start flow for each component.

## Documentation

- Update the root `README.md` or component README when configuration, setup, or behavior changes.
- Prefer short, clear examples and commands.
- Keep documentation aligned with the current codebase and environment requirements.

## Issues and Pull Requests

- If you find a bug, open an issue with steps to reproduce, expected behavior and actual behavior.
- If you implement a feature or fix, reference the issue number in your pull request.
- Use the PR title to describe the change clearly.
- Use checklists in PR descriptions when there are multiple changes or verification steps.

## Code Review Checklist

- Does the change solve the stated problem?
- Is the code easy to follow and maintain?
- Are dependencies kept minimal and appropriate?
- Are docs updated if needed?
- Has the change been tested locally?

## Communication

- If you are unsure about implementation details, open an issue or discussion first.
- For larger changes, describe your intended approach before writing most of the code.
- Keep contributions collaborative and respectful.
