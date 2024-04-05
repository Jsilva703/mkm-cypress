// Importe o comando de login aqui
Cypress.Commands.add("login", (email, senha) => {
  cy.visit('https://www.rhid.com.br/v2/#/login');
  cy.get('#email').type(email);
  cy.get('#password').type(senha);
  cy.get('#m_login_signin_submit').click();
  //cy.get('button[ng-click*="marcacao_ponto"]').click();
  //cy.get('button[ng-click="registraPonto()"]').click();


});

// Código do teste de login
describe('Teste de Login no RHID', () => {
  
  it('Deve fazer login com sucesso', () => 
  {
    cy.login('joaovictornunessilva12345@gmail.com', '1975');
    // Validação do login aqui
    cy.url().should('eq' , 'https://www.rhid.com.br/v2/#/dashboard')

    cy.url().should('eq' , 'https://www.rhid.com.br/v2/#/marcacao_ponto')

    cy.url().should('eq' , 'https://www.rhid.com.br/v2/#/marcacao_ponto')

    
  });
});