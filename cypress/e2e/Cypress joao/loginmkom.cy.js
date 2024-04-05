// Arquivo: cypress/support/commands.js

Cypress.Commands.add("loginMKM", (seu_domínio, seu_login, sua_senha, codlgn) => {
    cy.visit('https://portal.mkmservice.com/mkconfig/#/logins');
    cy.contains('Aceitar e Fechar').click();
    cy.get('input[name="auth_domain"]').type(seu_domínio);
    cy.get('input[name="auth_login"]').type(seu_login);
    cy.get('input[name="auth_senha"]').type(sua_senha);
    cy.contains('Entrar').click();
    cy.get('input[name="codlgn"]').should('exist').type(codlgn);
    cy.get('button[name="search"]').click();
    
});

// Arquivo: cypress/integration/seu_teste_spec.js

describe('Teste de Login no MKM Service', () => {
    it('Deve fazer login com sucesso', () => {
        cy.loginMKM('comercial', 'jsilva', 'mkom@@2022', '12868');
    });
});
