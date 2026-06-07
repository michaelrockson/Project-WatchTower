# Reddit-Mine – Frontend

The frontend provides the user interface for authentication, dashboards, pipeline management and reviewing generated
opportunities produced by the agent.

This project is built with React, TypeScript and Vite and is intended to be used alongside the `Agent_Backend`
component.

## Prerequisites

- Node.js 18+ and npm (or yarn)
- A running backend (optional for local UI development)

## Install

Clone the repository and install dependencies for the frontend:

```bash
git clone https://github.com/michaelrockson/Reddit-Mine.git
cd Reddit-Mine/Agent_Frontend
npm install
```

## Development

Run the Vite development server with HMR:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Check available scripts in `package.json` for additional commands such as linting or formatting.

## Project Structure

- `index.html` — App HTML entry
- `src/main.tsx` — Application bootstrap
- `src/App.tsx` — Root React component
- `src/pages/` — Page-level components (Dashboard, Login)
- `src/assets/` — Static assets and theme CSS
- `public/` — Static public files

Modify only the frontend files for UI changes. Keep API contracts and environment keys consistent with the backend.

## Configuration and Environment

If your frontend needs environment variables, use Vite's `.env` files (e.g. `.env.local`). See `vite.config.ts` for
details on how variables are injected.

## Coding & Style Guidelines

- Use TypeScript types and interfaces for component props and state.
- Prefer small, reusable components and keep presentational logic separate from data fetching.
- Keep styling consistent with the themes under `src/assets/themes/`.
- Remove unused imports and console logs before opening a PR.

## Testing & Linting

Run linting and type checks using the scripts provided in `package.json`. Typical commands:

```bash
npm run lint
npm run type-check
```

## Contributing

Follow the repository `contribution.md` at the project root for branch naming, PR requirements and code review
guidelines. Keep frontend changes scoped to `Agent_Frontend/` unless you are coordinating a cross-component change.

## Resources

- See the backend README for setup details that affect the
  frontend: [Agent_Backend/README.md](../Agent_Backend/README.md)

