import { loginPage } from '../e2e/pages/LoginPage.js';

describe('Login Feature', () => {
  beforeEach(function() {
    //Call data test
    cy.fixture('dataLogin').as('dataLogin');
  });

  it('Login with valid credentials', function() {
    loginPage.openWeb();
    loginPage.clickLoginButtonHomepage();
    loginPage.inputEmail(this.dataLogin.validUser.validEmail);
    loginPage.clickSelanjutnyaButton();
    loginPage.inputPassword(this.dataLogin.validUser.validPassword);
    loginPage.clickLoginButton();

    // popup promo
    cy.get('#wiz-iframe-intent', { timeout: 15000 })
      .should('be.visible');
  });

  it('Login with unregistered email', function() {
    loginPage.openWeb();
    loginPage.clickLoginButtonHomepage();
    loginPage.inputEmail(this.dataLogin.negativeCase.incorrectEmail);
    loginPage.clickSelanjutnyaButton();
    loginPage.inputPassword(this.dataLogin.negativeCase.invalidPassword);
    loginPage.clickLoginButton();

    cy.get('.input-warning-message__text')
      .should('be.visible')
      .and('have.text', 'Kombinasi email atau no. handphone dengan kata sandi salah.');
  });

  it('Login with invalid email format', function() {
    loginPage.openWeb();
    loginPage.clickLoginButtonHomepage();
    loginPage.inputEmail(this.dataLogin.negativeCase.invalidEmailFormat);
    loginPage.clickSelanjutnyaButton();

    cy.get('.input-error-message__text')
      .should('be.visible')
      .and('have.text', ' Periksa kembali format email atau no. handphone Anda ');
  });

  it('Login with empty email fields', function() {
    loginPage.openWeb();
    loginPage.clickLoginButtonHomepage();
    loginPage.clickSelanjutnyaButton();

    cy.get('.input-error-message__text')
      .should('be.visible')
      .and('have.text', ' Email atau no. handphone wajib diisi ');
  });

  it('Login with incorrect password', function() {
    loginPage.openWeb();
    loginPage.clickLoginButtonHomepage();
    loginPage.inputEmail(this.dataLogin.validUser.validEmail);
    loginPage.clickSelanjutnyaButton();
    loginPage.inputPassword(this.dataLogin.negativeCase.invalidPassword);
    loginPage.clickLoginButton();

    cy.get('.input-warning-message__text')
      .should('be.visible')
      .and('have.text', 'Kombinasi email atau no. handphone dengan kata sandi salah.');
  });

  it('Login with empty password fields', function() {
    loginPage.openWeb();
    loginPage.clickLoginButtonHomepage();
    loginPage.inputEmail(this.dataLogin.validUser.validEmail);
    loginPage.clickSelanjutnyaButton();
    loginPage.clickLoginButton();

    cy.get('.input-error-message')
      .should('be.visible')
      .and('have.text', ' Kata sandi wajib diisi ');
  });
});