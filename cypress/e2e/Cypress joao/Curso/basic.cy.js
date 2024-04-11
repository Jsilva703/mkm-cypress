/// <reference types="cypress" />

describe('Cypress basic', () => {
    it('Visitando o site e verificando o título', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');

        cy.title().should('be.equal', 'Campo de Treinamento').debug();

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo');

        cy.get('#buttonSimple').click();
    });
});
