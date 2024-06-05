
import './../../../support/Components'

describe('Streaming QRCODE', () => {
    it('Validation Function ', () => {

        cy.visitarURL();
        cy.LoginCypress();
        cy.API();
        cy.closeTour();
        cy.mapearCenters();
        cy.N4();
        cy.menuopen();
        cy.qrcode();

    });
});