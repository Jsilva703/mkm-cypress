/// <reference types="cypress" />

describe('Aguardando retorno',() => {

    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar o retorno da API',() =>{

        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.wait(1000);
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('deu bom')
    

    })

    it.only('Deve aguardar o retorno da API e fazer retrys',() =>{

        cy.get('#buttonDelay').click()
        cy.wait(1000);
        cy.get('#novoCampo').should('exist')
        //cy.get('#novoCampo').type('deu bom')
    

    })

   
})