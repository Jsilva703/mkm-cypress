import '../../../support/Components'

describe('Filter Login', () => {
    it('Deve fazer login com sucesso', () => {

        cy.visitarURL();
        cy.LoginCypress();
        cy.API();
        cy.closeTour();
        cy.mapearCenters();
        cy.N4();
        cy.menuopen();
        cy.Filterlogin();
        
    });
});
