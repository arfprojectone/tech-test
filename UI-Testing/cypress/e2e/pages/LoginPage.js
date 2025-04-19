class LoginPage {
    openWeb() {
      cy.visit('/');
    }
  
    clickLoginButtonHomepage() {
      cy.xpath("//a[normalize-space()='LOGIN']").should('be.visible').click();
    }
  
    verifyLoginPageVisible() {
      cy.get('.auth-form__title__text')
        .should('be.visible')
        .and('have.text', 'Masuk ke Paper.id');
    }
  
    inputEmail(email) {
      cy.get('[data-cy="identifier"]').should('be.visible').type(email);
    }
  
    clickSelanjutnyaButton() {
      cy.get('[data-cy="submit"]').contains('Selanjutnya').should('be.visible').click();
    }
  
    verifyPasswordPageVisible() {
      cy.get('.auth-dialog__title')
        .should('be.visible')
        .and('have.text', ' Masukkan Kata Sandi ');
    }
  
    inputPassword(password) {
      cy.get('[data-cy="password"]').should('be.visible').type(password);
    }
  
    clickLoginButton() {
      cy.get('[data-cy="submit"]').contains('Masuk').should('be.visible').click();
    }
  
    hanldePromoPopup() {
      cy.get('#wiz-iframe-intent', { timeout: 15000 })
          .should('be.visible')
          .then($iframe => {
            const iframeBody = $iframe[0].contentDocument.body;
            
        cy.wrap(iframeBody).should('not.be.empty');
        
        cy.wrap(iframeBody)
          .find('span.close-button')
          .should('be.visible')
          .click({ force: true }); // Pakai force kalau kadang gak bisa diklik
        });
    }
  }
  
  export const loginPage = new LoginPage();
  