import '../../../support/Components'

describe('Edit Connection', () => {

    before(() => {
        // Executa uma vez antes de todos os testes
        cy.visitarURL();   // Função para visitar a URL inicial
        cy.LoginCypress(); // Função para realizar o login
        cy.API();          // Função para configurar a API
    });

    beforeEach(() => {
        // Executa antes de cada teste
        cy.closeTour();    // Função para fechar qualquer tour ou pop-up
    });

    it('Edit Connection', () => {
        // Mapeia os modulos da anti sala dos módulos
        cy.mapearCenters(); 

        // O passo a ser seguido para realizar a edição da conexão
        cy.N2();           // N2 na documentação indica o channels
        cy.menuopen();     // Abre o menu
        cy.Config();       // Abre a configuração
        cy.connedit();     // Essa ação vai fazera seleção de conexão 

        // Realiza a busca após navegar para a área de edição
        cy.buscar();       
    });
});
