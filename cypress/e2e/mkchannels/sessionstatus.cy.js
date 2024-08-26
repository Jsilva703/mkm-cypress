import '../../../support/Components'

describe('Session Status', () => {

   it('Session Status', () => {

    cy.visitarURL();
    cy.LoginCypress();
    cy.API();
    cy.closeTour();
    cy.mapearCenters();
    cy.N2();
    cy.menuopen();
    cy.Config();
    cy.sessionstatus();
    cy.menuClose();
   })
})