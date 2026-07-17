module.exports = async function() {
  const mod = await import('codeceptjs');
  const I = mod.actor();

  return {
    locators: {
      openLogin: ' Login',
      loginHeader: 'Login',
      userField: '#user',
      passwordField: '#password',
      loginButton: '#btnLogin',
      successMessage: 'Login realizado',
    },

    timeout: 2,

    open() {
      I.amOnPage('/');
      I.waitForText(this.locators.openLogin, this.timeout);
      I.click(this.locators.openLogin);
      I.waitForText(this.locators.loginHeader, this.timeout);
    },

    fillUser(email) {
      I.fillField(this.locators.userField, email);
    },

    fillPassword(password) {
      I.fillField(this.locators.passwordField, password);
    },

    submit() {
      I.click(this.locators.loginButton);
    },

    loginWithCredentials(email, password) {
      this.fillUser(email);
      this.fillPassword(password);
      this.submit();
    },

    seeSuccess() {
      I.waitForText(this.locators.successMessage, this.timeout);
    },

    seeError(message) {
      I.waitForText(message, this.timeout);
    }
  };
};
