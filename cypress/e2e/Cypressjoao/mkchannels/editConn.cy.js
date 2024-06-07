import '../../../support/Components'

describe('Edit Conn', () => {

    it('Edit Connn', () => {

        cy.visitarURL();
        cy.LoginCypress();
        cy.API();
        cy.closeTour();
        cy.mapearCenters();
        cy.N2();
        cy.menuopen();
        cy.Config();
        cy.connedit();
        cy.buscar();
    })
})