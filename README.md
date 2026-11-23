# Dashboard — Vite + React

Migrated from the redesigned Create React App project. React 18 and the existing application dependencies are retained at the direct versions recorded in the prior npm lockfile. The original responsive CSS and runtime business logic are unchanged.

## Start

Use Node.js 22 LTS (or compatible Node 20+).

```sh
npm install
npm run dev
```

Open http://localhost:3000. `npm start` is an alias. Start the existing backend on http://localhost:5005/ and use the original login/token flow. No mock backend or authentication bypass is included. The original frontend redirects unauthenticated sessions to its configured login URL.

## Production

```sh
npm run build
npm run preview
```

Deploy `dist/` rather than CRA's `build/`. Configure the hosting server to serve `index.html` on browser-router paths that are not existing static files. Keep the original backend URL, CORS configuration and login redirects appropriate for your deployment.

## Tests

`npm test` runs the Vitest smoke test. The previous CRA starter test checked for a nonexistent Learn React link; it is replaced with a mocked-layout application smoke test, not an authenticated end-to-end test. See REDESIGN-HANDOVER.md for the seven-route staging acceptance checklist and historical responsive layout checks.

## Migration details and limits

- Vite entry HTML moved to project root; original translation scripts, metadata and public assets retained. CRA placeholders removed and module entry added.
- 50 JS source files renamed to JSX (including test); extensionless imports retained. CRA-specific SVG component imports converted to SVGR `?react` imports in five files.
- Existing CSS, routes, API calls, functions, state, authentication and transaction handling unchanged.
- Static parsing of all 53 source/test modules passed. Three unresolved relative imports exist in the original unused `component/lazyLoading/lazyLoading.jsx` component; no active source imports it. Preserved rather than inventing replacement behavior.
- npm registry DNS resolution failed in this environment. Installation, Vite build, Vitest execution and authenticated browser testing remain unverified. Old CRA lockfiles removed because they no longer match the dependency graph. Run npm install to generate a fresh lockfile and commit it after verification.
- Original source contains a commented JWT with personal account data; remove it and revoke it if potentially active before sharing or deployment. Treat this project as private.
