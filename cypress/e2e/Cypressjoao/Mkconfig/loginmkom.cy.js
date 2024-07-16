import '../../../support/Components'
import '../../../support/config'

describe('Filter Login', () => {
    it('Deve fazer login com sucesso', () => {

        cy.visitarURL();
        cy.LoginCypress();
        cy.API();
        cy.closeTour();
        cy.mapearCenters();
        cy.configg();
        cy.menuopen();
        cy.Filterlogin();
        
    });
});
