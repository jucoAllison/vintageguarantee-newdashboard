# Dashboard redesign — verification and handover

## Scope
Presentation-only CSS changes. Brand teal #01AAC1, darker accessible teal #00778A, deep teal #073B48, and red #F10000 from the bundled logo. Responsive navigation, cards, forms, transaction lists, profile, referral layout and modal styling. Original JavaScript, API calls, routes, assets, public HTML, package manifest and lockfiles preserved byte-for-byte.

## Verification performed
- Compared every original archive file against the output. 16 CSS files changed; 162 original files unchanged.
- Parsed all newly appended CSS rules: no top-level CSS syntax errors detected.
- Chromium layout fixture checks: seven representative page layouts at 320, 375, 768, 1024 and 1440 pixels (35 checks); no document-level horizontal overflow. Fixtures mimic CSS module scoping and markup; they are not the running React application. Transaction lists intentionally allow internal scrolling.
- Offline npm ci failed because required packages are not cached. Registry DNS resolution also failed. No full production build, React test suite or authenticated browser testing was therefore completed.
- The supplied frontend points to http://localhost:5005/. No live backend or staging credentials were supplied. Do not submit real financial transactions as a test.

## Historical CRA run instructions (superseded by README for Vite)
1. Extract the archive and enter its directory.
2. Run `npm ci`, then `npm run build`.
3. Run `CI=true npm test -- --watchAll=false`.
4. Start the existing staging backend and launch `npm start`. Sign in through the existing authentication flow with a dedicated test account.

## Required acceptance testing before deployment
For each route, test at desktop, tablet and mobile widths; compare with the original app using the same staging account and responses.

| Route | Functional checks (not yet run) |
|---|---|
| /home | Account data, loading, errors, zero and large balances, ticker |
| /create-investment | Plan mapping, empty plans, modal, validation, confirmation, cancellation and staging submission |
| /reinvest | Balance, plan and wallet selection, validation, existing submit and error behavior |
| /withdrawal | Wallet selection, address, amount, validation, confirmation and staging submission |
| /transaction-history | Deposit/withdrawal tabs, existing fetches, status/empty/error states, long wallet addresses |
| /my-profile | Profile values, wallet and password forms, validation, existing logout |
| /my-referral | Referral values, link and copy behavior |

Cross-cutting: authentication and redirects, all navigation links, keyboard access, language selector, loading states, slow network, modal scroll and mobile rotation. Verify no unintended changes to requests, payloads, status values or balances.

## Existing source security note
The original App.js contains a commented example JWT with account information. It was preserved as requested, but review and remove it and revoke it if it might still be valid before external distribution or deployment. The archive should be treated as private source code.
