
import './../../../support/Components'
import './../../../support/config'

describe('Streaming QRCODE', () => {
    it('Validation Function ', () => {

        cy.visitarURL();
        cy.LoginCypress();
        cy.API();
        cy.closeTour();
        cy.mapearCenters();
        cy.configg()
        cy.menuopen();
        cy.qrcode();

    });
});