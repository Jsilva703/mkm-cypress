import './../../../support/Components'

describe('Filtro de blocklist' ,() => {

    it('Fazer a busca', () => {

        cy.visitarURL();
        cy.LoginCypress();
        cy.API();
        cy.closeTour();
        cy.mapearCenters();
        cy.N3();
        cy.block();
    })
})