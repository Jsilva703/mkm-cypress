import '../../../support/Components'

describe('createAtendimento' ,() => {

    it('Atendimento', () => {

        cy.visitarURL();
        cy.LoginCypress();
        cy.API();
        cy.closeTour();
        cy.mapearCenters();
        cy.N2();
        cy.menuopen();
        cy.atendimento();
        cy.menuClose();
        cy.createAttendence();
        cy.Cross();
        cy.Listbox();
        //cy.Closeinfo();
    })
})