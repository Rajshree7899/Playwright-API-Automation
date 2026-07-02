# Playwright API Automation Framework

This starter project provides a TypeScript-based Playwright framework with:

- Page Object Model (POM) for UI flows
- API test examples with Playwright request fixtures
- GitHub Actions CI/CD integration

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Install Playwright browser binaries:
   ```bash
   npx playwright install --with-deps chromium
   ```
3. Run tests:
   ```bash
   npm test
   ```

## Scripts

- `npm run build` - Type-check the project
- `npm run test:ui` - Run UI tests
- `npm run test:api` - Run API tests
- `npm run test:smoke` - Run smoke-tagged tests
