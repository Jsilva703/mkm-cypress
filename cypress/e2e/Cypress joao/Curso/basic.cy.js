/// <reference types="cypress" />

describe('Cypress basic', () => {
    it('Visitando o site e verificando o título', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');

        cy.title().should('be.equal', 'Campo de Treinamento');

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo');

            let syncTitle

            cy.title().then( title => {
                console.log(title)
                cy.get('#formNome').type(title);

                syncTitle = title

            })

            cy.get('[data-cy="dataSobrenome"]').then($el => {
                $el.val(syncTitle)
            })    

            cy.get('#elementosForm\\:sugestoes').then($el => {
                cy.wrap($el).type(syncTitle)
    })
        })          
});
