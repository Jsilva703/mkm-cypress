import '../../../support/Components'

describe('Teste de Login no MKM Service', () => {
    it('Campaing-report', () => {

        cy.visitarURL();
        cy.LoginCypress();
        cy.API();
        cy.closeTour();
        cy.mapearCenters();
        cy.N3();
        cy.menuopen();
        cy.reportcampaing();
        cy.textid();
    });
});


