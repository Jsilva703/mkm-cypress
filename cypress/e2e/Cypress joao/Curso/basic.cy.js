/// <reference types="cypress" />

describe('Cypress basic', () => {
    it('Visitando o site e verificando o título', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');

        cy.title().should('be.equal', 'Campo de Treinamento');

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo');

            cy.title().then( title => {
                console.log(title)
            })

        //cy.get('#buttonSimple').click();
    });
});
