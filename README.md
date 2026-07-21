# Web Automation with CodeceptJS/Playwright

Login test automation using CodeceptJS and Playwright.

## What it does
- tests the login flow in a sample application
- validates login success and errors with different field combinations

## Structure
- `codecept.conf.js` — CodeceptJS configuration and base URL
- `tests/login_test.js` — login scenarios
- `pages/login_page.js` — Page Object for the login page
- `.gitignore` — files and folders that should not be committed to Git

## How to run
1. Install dependencies:
   ```bash
   npm install
   ```
   After installing dependencies, install the Playwright binaries:
   ```bash
   npx playwright install --with-deps
   ```
2. Run the test suite:
   ```bash
   npx codeceptjs run
   ```
3. Run with visible steps:
   ```bash
   npx codeceptjs run --steps
   ```

## Notes
- the project is configured to run with Playwright on Chromium
- `output/` and `node_modules/` are ignored by Git

## CI / GitHub Actions

- Workflow: `.github/workflows/ci.yml` — runs on `push` and `pull_request` to the `main` branch and can be triggered manually via `workflow_dispatch`.
- What runs: checkout, dependency installation (`npm ci`), Playwright binaries installation (`npx playwright install --with-deps`), and test execution with `npx codeceptjs run --steps`.
- Cache: the workflow uses npm cache when `package-lock.json` is present to speed up builds.
- Logs and artifacts: the `output/` directory is created during tests; check the GitHub Actions UI to download logs and artifacts.
- How to trigger: pushes to `main`, PRs to `main`, or manually in Actions → Run workflow.

## Quick examples

- Test snippet (`tests/login_test.js`):

```javascript
Before(({ loginPage }) => {
   loginPage.open();
});

Scenario('Login with success', ({ loginPage }) => {
   loginPage.loginWithCredentials('user@example.com', 'pass123');
   loginPage.seeSuccess();
});
```

- Page Object snippet (`pages/login_page.js`):
```javascript
// Example usage from the tests (does not expose internal implementation)
Before(({ loginPage }) => {
  loginPage.open();
});

Scenario('Login with success', ({ loginPage }) => {
  loginPage.loginWithCredentials('user@example.com', 'pass123');
  loginPage.seeSuccess();
});
```
