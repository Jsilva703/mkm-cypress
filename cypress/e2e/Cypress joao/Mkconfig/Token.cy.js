Cypress.Commands.add("loginMKM", (casa, 
    mansão, 
    aceso, 
    login, 
    seu_tel, email, senha, carro) => {
    cy.visit('https://portal.mkmservice.com/mkconfig/#/logins');

    cy.contains('Aceitar e Fechar').click();

    cy.get('input[name="auth_domain"]').type(casa);

    cy.get('input[name="auth_login"]').type(mansão);

    cy.get('input[name="auth_senha"]').type(aceso);

    cy.contains('Entrar').click();

    cy.get('button[name="create"] span.MuiTouchRipple-root').click({ force: true });

    cy.wait(3000); //Aguardando a digitalização do nome

    cy.get('input[name="nomelgn"]').type(login);

   // cy.wait(5000); //Aguardando a digitalização do nome

    cy.get('input[type="tel"]').type(seu_tel);

    cy.get('input[name="emaillgn"]').type(email);

    cy.get('input[name="usuariolgn"]').type(carro);

    cy.get('input[name="senhalgn"]').type(senha);

    cy.wait(5000); //Esperar digitar a senha, as vezes temos uma lentidão da API

    cy.get('button[cy-name="create-login"]').click();

});

describe('Teste de Login no MKM Service', () => {
    it('Deve fazer login com sucesso', () => {
        cy.loginMKM

        ('comercial',

        'jsilva',

        'mkom@@2022', 

        'testecypress', 

        '12345678910',

        'jsilva@mkom.tec.br',

        '12345', 

        'cypressteste'

        );
    });
});

