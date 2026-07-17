Feature('login');

const validUser = 'andredias@gmail.com';
const validPass = '123456';

Before(({ loginPage }) => {
  loginPage.open();
});

Scenario('Login with success', ({ loginPage }) => {
  loginPage.loginWithCredentials(validUser, validPass);
  loginPage.seeSuccess();
}).tag('success');

Scenario('Trying to login only with email', ({ loginPage }) => {
  loginPage.fillUser(validUser);
  loginPage.submit();
  loginPage.seeError('Senha inválida.');
}).tag('failure-only-email');

Scenario('Trying to login only with password', ({ loginPage }) => {
  loginPage.fillPassword(validPass);
  loginPage.submit();
  loginPage.seeError('E-mail inválido.');
}).tag('failure-only-password');

Scenario('Trying to login without email and password', ({ loginPage }) => {
  loginPage.submit();
  loginPage.seeError('E-mail inválido.');
}).tag('failure-no-email-no-password');


