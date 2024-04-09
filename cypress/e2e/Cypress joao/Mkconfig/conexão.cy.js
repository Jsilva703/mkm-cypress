Cypress.Commands.add("loginMKM", (seu_domínio, seu_login, sua_senha, carro, tag, lapis) => {
    cy.visit('https://portal.mkmservice.com/mkconfig/#/connections/whatsapp');

    cy.contains('Aceitar e Fechar').click();

    cy.get('input[name="auth_domain"]').type(seu_domínio);

    cy.get('input[name="auth_login"]').type(seu_login);

    cy.get('input[name="auth_senha"]').type(sua_senha);

    cy.contains('Entrar').click();

    cy.wait(3000); //aguardando tempo de resposta para fazermos a ação de add uma nova conexão

    cy.get('[data-testid="AddIcon"]').click();

    cy.wait(2000); // Aguarda 5 segundos

    cy.get('input[name="name"]').eq(1).type(carro)
    
    cy.get('input#tags-filled').type(tag, + '{enter}');

    cy.get('textarea[name="description"]').type(lapis)

    cy.get('[data-testid="ArrowDropDownIcon"]').click();


    
});


describe('Teste de Login no MKM Service', () => {
    it('Deve fazer login com sucesso', () => {
        cy.loginMKM('comercial', 'xxxxxx', 'xxxxx', 'cypress', 'nagios', 'teste cypress');
    });
});
