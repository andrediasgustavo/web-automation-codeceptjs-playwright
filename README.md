# Project1

Automação de teste de login usando CodeceptJS e Playwright.

## O que faz
- testa o fluxo de login em uma aplicação de exemplo
- valida sucesso e erros de login com diferentes combinações de campos

## Estrutura
- `codecept.conf.js` — configuração do CodeceptJS e URL base
- `tests/login_test.js` — cenários de login
- `pages/login_page.js` — Page Object para a página de login
- `.gitignore` — arquivos e pastas que não devem subir para o Git

## Como executar
1. Instale dependências:
   ```bash
   npm install
   ```
2. Rode a suíte de testes:
   ```bash
   npx codeceptjs run
   ```
3. Rode com passos visíveis:
   ```bash
   npx codeceptjs run --steps
   ```

## Observações
- o projeto está configurado para rodar com Playwright em Chromium
- `output/` e `node_modules/` estão ignorados pelo Git

## Exemplos rápidos

- Trecho de teste (`tests/login_test.js`):

```javascript
Before(({ loginPage }) => {
   loginPage.open();
});

Scenario('Login with success', ({ loginPage }) => {
   loginPage.loginWithCredentials('user@example.com', 'pass123');
   loginPage.seeSuccess();
});
```

- Trecho do Page Object (`pages/login_page.js`):

```javascript
export default {
   locators: {
      userField: '#user',
      passwordField: '#password',
      loginButton: '#btnLogin',
   },
   open() {
      I.amOnPage('/');
      I.click(this.locators.openLogin);
      I.waitForText(this.locators.loginHeader);
   },
   loginWithCredentials(email, pass) {
      I.fillField(this.locators.userField, email);
      I.fillField(this.locators.passwordField, pass);
      I.click(this.locators.loginButton);
   }
};
```
