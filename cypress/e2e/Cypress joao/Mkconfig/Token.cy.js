Cypress.Commands.add("loginMKM", (seu_domínio, 
    seu_login, 
    sua_senha, 
    login, 
    seu_tel, email, senha, carro) => {
    cy.visit('https://portal.mkmservice.com/mkconfig/#/logins');

    cy.contains('Aceitar e Fechar').click();

    cy.get('input[name="auth_domain"]').type(seu_domínio);

    cy.get('input[name="auth_login"]').type(seu_login);

    cy.get('input[name="auth_senha"]').type(sua_senha);

    cy.contains('Entrar').click();

    cy.get('button[name="create"] span.MuiTouchRipple-root').click({ force: true });

    cy.get('input[name="nomelgn"]').type(login);

    cy.get('input[type="tel"]').type(seu_tel);

    cy.get('input[name="emaillgn"]').type(email);

    cy.get('input[name="usuariolgn"]').type(carro);

    cy.get('input[name="senhalgn"]').type(senha);

    cy.wait(7000); //Esperar digitar a senha

    cy.get('button[cy-name="create-login"]').click();

});

describe('Teste de Login no MKM Service', () => {
    it('Deve fazer login com sucesso', () => {
        cy.loginMKM

        ('comercial',

        'jsilva',

        'mkom@@2022', 

        'mkmcypress', 

        '11911031972',

        'jsilva@mkom.tec.br',

        '12345', 

        'mkmcypress'

        );
    });
});

