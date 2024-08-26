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

    it('Edit Connection', () => {
        // Mapeia os modulos da anti sala dos módulos
        cy.mapearCenters(); 

        // O passo a ser seguido para realizar a edição da conexão
        cy.N2();           // N2 na documentação indica o channels
        cy.menuopen();     // Abre o menu
        cy.ContactGestão();
        cy.buscar();
    });
});