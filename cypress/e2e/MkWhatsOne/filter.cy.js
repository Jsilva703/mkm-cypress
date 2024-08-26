
import './../../../support/Components'

describe('Fazer filtro do cc', () => {

    it('Fazer a busca', () => {

        cy.visitarURL();
        cy.LoginCypress();
        cy.API();
        cy.closeTour();
        cy.mapearCenters();
        cy.N3();
        cy.menuCentrocc();
        cy.filter1();
    })

})