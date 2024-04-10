// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const LoginInfo = {

    seu_domínio: 'comercial',
    seu_login:'xxxxxx',
    sua_senha: 'xxxxxx',
    carro:'cypress-teste',
    tag:'nagios',
    lapis:'teste cypress'

}

Cypress.Commands.add("loginMKM", () => {
    cy.visit('https://portal.mkmservice.com/mkconfig/#/connections/whatsapp');
    const { seu_domínio, seu_login, sua_senha, carro, tag, lapis} = LoginInfo;
        cy.contains('Aceitar e Fechar').click();

        cy.get('input[name="auth_domain"]').type(seu_domínio);
        cy.get('input[name="auth_login"]').type(seu_login);
        cy.get('input[name="auth_senha"]').type(sua_senha);
        cy.contains('Entrar').click();
        cy.get('[data-testid="AddIcon"]').click();
        cy.get('input[name="name"]').eq(1).type(carro);
        cy.get('input#tags-filled').type(tag + '{enter}');
        cy.get('textarea[name="description"]').type(lapis);
        cy.contains('Salvar').click();  

});