const LoginCypress = {
    Seu_domínio: 'meg',
    seu_login: 'cypress',
    sua_senha: '19751906',
};

Cypress.Commands.add("visitarURL", () => {
    cy.visit('https://beta.mkmservice.com/');
});

Cypress.Commands.add("LoginCypress", () => {
    const { Seu_domínio, seu_login, sua_senha } = LoginCypress;

    cy.contains('Aceitar e Fechar').click();
    cy.get('input[name="auth_domain"]').type(Seu_domínio); 
    cy.get('input[name="auth_login"]').type(seu_login); 
    cy.get('input[name="auth_senha"]').type(sua_senha); 
    cy.contains('Entrar').click();
});

Cypress.Commands.add("API", () => {
    cy.intercept('**', (req) => {
        if (req.response && req.response.statusCode === 200) {
            req.alias = 'allSuccessfulRequests'; // atribuir um alias às solicitações com status 200
        }
    }).as('allSuccessfulRequests'); // garantir que todas as interceptações sejam atribuídas ao mesmo alias

    cy.wait('@allSuccessfulRequests', { timeout: 20000 });
    cy.wait(2000);
});

Cypress.Commands.add("closeTour", () => {
    cy.wait(2000);
    
    // Selecionar todos os elementos que contêm o texto "close"
    cy.contains('close').each(($button) => {
        cy.wrap($button).click({ force: true }); // Clica em cada botão
        cy.wait(4000);
    });
});





Cypress.Commands.add('mapearCenters', () => {
    cy.get(':nth-child(1) > center > .paper-lobby').as('N1');
    cy.get(':nth-child(2) > center > .paper-lobby').as('N2');
    cy.get(':nth-child(3) > center > .paper-lobby').as('N3');
    cy.get(':nth-child(4) > center > .paper-lobby').as('N4');
  });

Cypress.Commands.add('N4',() => {

    cy.get('@N3').should('exist').click();
})
Cypress.Commands.add('N3',() => {

    cy.get('@N3').should('exist').click();
})
Cypress.Commands.add('N2',() => {

    cy.get('@N3').should('exist').click();
})
Cypress.Commands.add('N1',() => {

    cy.get('@N3').should('exist').click();
})

Cypress.Commands.add('menuCentrocc', () => {

    cy.wait(2000);
    cy.get('div[data-tour="Centro de Custos"]').should('exist').click({ force: true });
    cy.wait(1000);
})

Cypress.Commands.add('filter1',() => {

    cy.get('input[name="codcc"]').type('18861');
    cy.wait(1000);
    cy.get('button[aria-label="Buscar"][type="button"]').click()
    cy.wait(2000)

})

Cypress.Commands.add('CreateCC',() => {

    cy.get('.MuiFab-root > .material-icons').should('exist').click();
    cy.wait(2000)
    cy.contains('Novo Centro de Custo').should('exist');
    cy.get('input[name="dcrcc"]').eq(1).type('teste', {force: true});

})