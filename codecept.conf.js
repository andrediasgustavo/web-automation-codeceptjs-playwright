/** @type {CodeceptJS.MainConfig} */
const config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.automationpratice.com.br',
      show: false
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login_page.js'
  },
  noGlobals: true,
  plugins: {},
  name: 'project1'
}

module.exports = config;