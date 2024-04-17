// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


const loginCypress = {
    seu_domínio: 'meg',
    seu_login: 'cypress',
    sua_senha: '19751906',
};

Cypress.Commands.add("loginCypress", () => {
    cy.visit('https://beta.mkmservice.com/');

    const { seu_domínio, seu_login, sua_senha } = loginCypress;
    
    cy.contains('Aceitar e Fechar').click();
    cy.get('input[name="auth_domain"]').type(seu_domínio);
    cy.get('input[name="auth_login"]').type(seu_login);
    cy.get('input[name="auth_senha"]').type(sua_senha);
    cy.contains('Entrar').click();

//definir todas as apis que batem ao logar na empresa 
    cy.intercept('POST', 'https://auth.beta.mkmservice.com/token').as('postToken');
    cy.intercept('GET', 'https://core.beta.mkmservice.com/sessions/current').as('getSession');
    cy.intercept('GET', 'https://core.beta.mkmservice.com/sissms/api/empresas/1624').as('getEmpresas');
    cy.intercept('GET', 'https://core.beta.mkmservice.com/health').as('getHealth');
    cy.intercept('POST', 'https://boo-apiprod.mkmservice.com/api/login').as('postLogin');
    cy.intercept('GET', 'https://core.beta.mkmservice.com/core/api/communications?&enabled=true&available=true').as('getCommunications');

   // cy.wait(['@postToken'], {timeout: 7000});
   cy.wait(['@getSession', '@getEmpresas', '@getHealth', '@postLogin', '@getCommunications'], { timeout: 10000 });
    cy.wait(2000);
    cy.get('[name="communicationModal"] > .MuiDialog-container > .MuiPaper-root > .MuiDialogContent-root')
    .should('be.visible')
    .then(() => {
        cy.get('.material-icons').click();
        cy.wait(4000);
        cy.get('.MuiGrid-spacing-xs-1').each(($el) => {
            cy.wrap($el).find(':nth-child(3) > center > .paper-lobby').should('contain', 'MKWhats One');
            cy.wrap($el).find(':nth-child(3) > center >.paper-lobby').click();
            cy.url().should('eq', 'https://beta.mkmservice.com/mkwhatsone/#/recents');
            cy.wait(2000);
            cy.get('.MuiIcon-root[data-tour="menuOpen"]').should('be.visible'); //visualizar o elemento na tela
            cy.get('.MuiIcon-root[data-tour="menuOpen"]').click(); //após realizar a visualização fazer o click no menu
            cy.wait(1000);
            cy.get('[data-tour="Campanha"]').should('be.visible');       
            cy.get('[data-tour="Campanha"]').click(); 
            cy.wait(1000);
            cy.get('[style="border-bottom: 0px; color: inherit; width: calc(73.1111px); max-width: 70px; min-width: 70px; box-sizing: border-box; font-size: inherit; font-family: inherit; font-weight: inherit;"] > div > .MuiButtonBase-root > .material-icons').should('exist').click();
            cy.wait(1000);
            cy.get('.MuiGrid-container > :nth-child(1) > .MuiButtonBase-root > .material-icons').click();
            cy.wait(2000);
            cy.get('[aria-label=""] > .MuiButtonBase-root').should('exist').click();
            cy.wait(6000);
            cy.contains('Preview Mensagem - teste').should('be.visible').click();
            cy.contains('span', 'close').eq(0).click({force: true});
            cy.wait(3000);
            cy.get('[data-tour="downloadCampanha"]').should('be.visible');
            cy.get('[data-tour="downloadCampanha"]').click();
            cy.wait(6000);
            cy.contains('Relatório gerado com sucesso').should('be.visible')
            cy.contains('Clique aqui para baixar').should('have.text', 'Clique aqui para baixar').click();
});  
           it('Criação de Centro de Custo',() => {

         cy.get('[data-tour="Centro de Custos"]').should('exist').click();

})
    });

    
    //cy.get('.material-icons').click();
    //cy.wait(3000); // Esperar por 3 segundos para a resposta antes de continuar
    //cy.get('[data-testid="AddIcon"]').click();
    //cy.get('input[name="name"]').eq(1).type(carro);
    //cy.get('input#tags-filled').type(tag + '{enter}');
    //cy.get('textarea[name="description"]').type(lapis);
    //cy.contains('Salvar').click();  
});


Cypress.Commands.add("loginCypress3",() => {
    cy.visit('https://alpha3.mkmservice.com/')
    const { seu_domínio, seu_login, sua_senha } = loginCypress;


    cy.contains('Aceitar e Fechar').click();
    cy.get('input[name="auth_domain"]').type(seu_domínio);
    cy.get('input[name="auth_login"]').type(seu_login);
    cy.get('input[name="auth_senha"]').type(sua_senha);
    cy.contains('Entrar').click();
    cy.intercept('GET', 'https://core.beta.mkmservice.com/sessions/current').as('getSession');
    cy.intercept('GET', 'https://core.beta.mkmservice.com/sissms/api/empresas/1624').as('getEmpresas');
    cy.intercept('GET', 'https://core.beta.mkmservice.com/health').as('getHealth');
    cy.intercept('POST', 'https://boo-apiprod.mkmservice.com/api/login').as('postLogin');
    cy.intercept('GET', 'https://core.beta.mkmservice.com/core/api/communications?&enabled=true&available=true').as('getCommunications');

   // cy.wait(['@postToken'], {timeout: 7000});
    cy.wait ([

        '@getSession',
        '@getEmpresas',
        '@getHealth',
        '@postLogin',
        '@getCommunications',

    ])

    cy.wait(2000);
    cy.get('[name="communicationModal"] > .MuiDialog-container > .MuiPaper-root > .MuiDialogContent-root')
    .should('be.visible')
    .then(() => {
        cy.get('.material-icons').click();
        cy.wait(4000);
        cy.get('.MuiGrid-spacing-xs-1').each(($el) => {
            cy.wrap($el).find(':nth-child(4) > center > .paper-lobby').should('contain', 'MKConfig');
            cy.wrap($el).find(':nth-child(4) > center >.paper-lobby').click();
            cy.url().should('eq', 'https://alpha3.mkmservice.com/mkconfig/#/recents');
            cy.wait(2000);
            cy.get('.MuiIcon-root[data-tour="menuOpen"]').should('be.visible'); //visualizar o elemento na tela
            cy.get('.MuiIcon-root[data-tour="menuOpen"]').click(); //após realizar a visualização fazer o click no menu
            cy.wait(1000);
            cy.get('[data-tour="Conexões"]').should('be.visible');
            cy.wait(1000);
            cy.get('[data-tour="Conexões"] > :nth-child(2) >').click();
            cy.get('[href="https://alpha3.mkmservice.com/mkconfig/#/connections/whatsapp"]').should('exist', 'WhatsApp').click();
            cy.wait(2000);
            cy.get('.PrivateSwitchBase-input').then('exist', 'Streaming(QRCODE)').click();
            cy.url().should('eq', 'https://alpha3.mkmservice.com/mkconfig/#/connections/streaming');

      
});  
    });
    
   
    
    
    
    
    
})

Cypress.Commands.add("loginCypress4", () => {
    cy.visit('https://alpha3.mkmservice.com/');

    const { seu_domínio, seu_login, sua_senha } = loginCypress;

    cy.contains('Aceitar e Fechar').click();
    cy.get('input[name="auth_domain"]').type(seu_domínio);
    cy.get('input[name="auth_login"]').type(seu_login);
    cy.get('input[name="auth_senha"]').type(sua_senha);
    cy.contains('Entrar').click();
    cy.intercept('GET', 'https://core.beta.mkmservice.com/sessions/current').as('getSession');
    cy.intercept('GET', 'https://core.beta.mkmservice.com/sissms/api/empresas/1624').as('getEmpresas');
    cy.intercept('GET', 'https://core.beta.mkmservice.com/health').as('getHealth');
    cy.intercept('POST', 'https://boo-apiprod.mkmservice.com/api/login').as('postLogin');
    cy.intercept('GET', 'https://core.beta.mkmservice.com/core/api/communications?&enabled=true&available=true').as('getCommunications');

   // cy.wait(['@postToken'], {timeout: 7000});
    cy.wait ([

        '@getSession',
        '@getEmpresas',
        '@getHealth',
        '@postLogin',
        '@getCommunications',

        ])

        cy.wait(2000);
        cy.get('[name="communicationModal"] > .MuiDialog-container > .MuiPaper-root > .MuiDialogContent-root')
        .should('be.visible')
        .then(() => {
            cy.get('.material-icons').click();
            cy.wait(4000)
        });
    


   
})