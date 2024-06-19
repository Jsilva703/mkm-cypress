import '../../../support/Components'

describe('Edit Connection', () => {

    before(() => {
        cy.visitarURL();   
        cy.LoginCypress();
        cy.API();          
    });

    beforeEach(() => {
        // Executa antes de cada teste
        cy.closeTour();    
    });

})