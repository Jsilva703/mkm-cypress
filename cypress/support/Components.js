const LoginCypress = {
    Seu_domínio: 'meg',
    seu_login: 'cypress',
    sua_senha: '19751906',
};

Cypress.Commands.add("visitarURL", () => {
    cy.visit('https://portal.mkom.tec.br/#/');
});

Cypress.Commands.add("LoginCypress", () => {
    const { Seu_domínio, seu_login, sua_senha } = LoginCypress;

    cy.contains('Aceitar e Fechar').click();
    cy.get('input[name="auth_domain"]').type(Seu_domínio); 
    cy.get('input[name="auth_login"]').type(seu_login); 
    cy.get('input[name="auth_senha"]').type(sua_senha); 
    cy.wait(1000);
    cy.contains('Entrar').click();
});

Cypress.Commands.add("API", () => {
    cy.intercept('**', (req) => {
        if (req.response && req.response.statusCode === 200) {
            req.alias = 'allSuccessfulRequests'; // atribuir um alias às solicitações com status 200
        }
    }).as('allSuccessfulRequests'); // garantir que todas as interceptações sejam atribuídas ao mesmo alias

    cy.wait('@allSuccessfulRequests', { timeout: 50000 });
    cy.wait(2000);
});

Cypress.Commands.add("closeTour", () => {
    cy.wait(2000);
    
    // Fazer a busca pelo elemento "close"
    cy.get('.material-icons').contains('close').click();
});

Cypress.Commands.add('mapearCenters', () => {
    cy.get(':nth-child(1) > center > .paper-lobby').as('N1');
    cy.get(':nth-child(2) > center > .paper-lobby').as('N2');
    cy.get(':nth-child(3) > center > .paper-lobby').as('N3');
    cy.get(':nth-child(4) > center > .paper-lobby').as('N4');
  });

Cypress.Commands.add('N4',() => {

    cy.get('@N4').should('exist').click();
})
Cypress.Commands.add('N3',() => {

    cy.get('@N3').should('exist').click();
})
Cypress.Commands.add('N2',() => {

    cy.get('@N2').should('exist').click();
})
Cypress.Commands.add('N1',() => {

    cy.get('@N1').should('exist').click();
})

Cypress.Commands.add('menuCentrocc', () => {

    cy.wait(2000);
    cy.get('div[data-tour="Centro de Custos"]').should('exist').click({ force: true });
    cy.wait(1000);
})

Cypress.Commands.add('filter1',() => {

    cy.wait(2000)
    cy.get('input[name="codcc"]').type('18861');
    cy.wait(1000);
    cy.get('button[aria-label="Buscar"][type="button"]').click()
    cy.wait(2000)

})

Cypress.Commands.add('CreateCC',() => {

    cy.get('.MuiFab-root > .material-icons').should('exist').click();
    cy.wait(2000)
    cy.contains('Novo Centro de Custo').should('exist');
    cy.get('input[name="dcrcc"]').eq(1).type('wrfsfsdfdfs', {force: true});

})

Cypress.Commands.add('limite', () => {
    cy.get('input[name="limitecc"]').type('5000', {delay: 100});
    cy.contains('Salvar').click();
})

Cypress.Commands.add('block', () => {

    cy.wait(1000);
    cy.get('div[data-tour="Blocklist"]').should('exist').click({ force: true });
    cy.wait(1000);
    cy.get('.MuiOutlinedInput-input').type('11912778807' ,{delay:1000});
    cy.get('button[aria-label="Buscar"][type="button"]').click()
})

Cypress.Commands.add('campanha', () => {
    cy.wait(1000);
    cy.contains('Campanha').should('exist').click({ force: true })
})

Cypress.Commands.add('avançada', () => {

    cy.get('button[aria-label="Busca Avançada"]').click();
    cy.contains('Busca Avançada').should('exist');
    cy.wait(1000);
    cy.get('input[name="_id"]').type('10427', {delay:100});
    cy.contains('Buscar').click( {force: true}, {timeout:1000});
    cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk[variant="contained"]')
     .as('moreVertButton');
     cy.wait(1000);
     cy.get('@moreVertButton').click();
    
})

Cypress.Commands.add('menuopen',() => {
    cy.wait(1000);
    cy.get('span.material-icons[data-tour="menuOpen"]').click();
    cy.wait(1000)
})

Cypress.Commands.add('clonar',() => {

     cy.get('button[aria-label="Clonar esta campanha"]').then($el => {

    cy.wrap($el).click();
                                       })

    for (let i = 0; i < 6; i++) {
        cy.get('button.MuiButton-containedSecondary').click({multiple:true});
        cy.wait(1000); // Espera 1 segundo antes de clicar novamente
      }
      
    
})

Cypress.Commands.add('Sms', () => {

    cy.wait(2000);
    cy.get('div[data-tour="Monitoramento"]').should('exist').click({ force: true });
    cy.wait(1000);
})

Cypress.Commands.add('envio',() => {
    cy.get('span.material-icons[data-tour="addEnvios').then($el => {
        cy.wrap($el).click();
    })
})

Cypress.Commands.add('avulso',() => {
    cy.contains('Envio Avulso').should('exist', {timeout:2000}).click();
})

Cypress.Commands.add('fillPhoneNumber', (phoneNumber) => {
    cy.get('textarea[name="mailling_dados_phones"]').type(phoneNumber);
  });
  

Cypress.Commands.add('number', () => {
    cy.fillPhoneNumber('11911031972');
    cy.wait(1000);
    //cy.get('div[role="combobox"][aria-labelledby=":r11:-label :r11:"]').click();
     ///cy.contains('Cypress').should('exist').click();
    cy.get('div[role="combobox"]').eq(1).click(); 
    cy.wait(1000);
    cy.contains('li', 'Cypress').click(); 
    cy.wait(5000);
    cy.get('.MuiDialogActions-root > :nth-child(2)').click();
    
});

Cypress.Commands.add('atendimento', () => {

    cy.wait(5000)
    cy.contains('Atendimento').should('exist').click();

})

Cypress.Commands.add('menuClose', () => {

    cy.wait(1000);
    cy.get('span.material-icons[data-tour="menuClose"]').click();
    cy.wait(3000);
})

Cypress.Commands.add('createAttendence', () => {

    cy.get('#atendimento').should('exist').click();

})

Cypress.Commands.add('Cross', () => {

    cy.get('.whatsapp-cross-icon').should('exist').click(); // Validação da mídia a ser seleciona para criar o atendimento 
    cy.wait(2000);
    cy.get('input[name="channel_session.identifier"]')
    .should('exist')
    .type('11911031972');
    cy.get('div[role="combobox"]').eq(1).click(); 
    cy.wait(1000);
    cy.contains('li', 'Cypress').click();


})

Cypress.Commands.add('Listbox', () => {

    cy.get('div[role="combobox"]').eq(0).click(); 
    cy.wait(1000);
    cy.contains('li', '9912').click(); // Selecionar a conexão para criar o atendimento passando o ID
    cy.wait(1000);
    // Verifica se o campo de texto existe e insere um conteúdo
    cy.get('textarea[name="channel_session.content"]')
    .should('exist')
    .clear()  // Limpa o campo antes de preencher
    .type('Joaozinho é foda', {delay:100}); // Exemplo de ação: preencher o campo com um texto
    cy.contains('Enviar').should('exist')
    .click();

})

//Cypress.Commands.add('Closeinfo', () => {

        //cy.get('.MuiDialogContent-root.css-1ty026z', { timeout: 0 }).then($el => {
       // if ($el.length) {
          // Se o elemento estiver presente, clique no botão de confirmação dentro do elemento
        //  cy.wrap($el).find('Confirmar').click(); // Substitua 'button.confirm-button' pelo seletor correto do botão de confirmação
           // }
      //});
//})

Cypress.Commands.add('Closeinfo', () => {

    cy.wait(1000);
    cy.contains('Confirmar')
    .click({force:true});
})

Cypress.Commands.add('Config', () => { 
    
    
    cy.contains('.MuiTypography-root.MuiTypography-body1.MuiListItemText-primary.css-1ti72ph', 'Configurações', { timeout: 0 }).then($el => {
        if ($el.length) {
          // Se o elemento estiver presente, execute o clique
          cy.wrap($el).click();
        }
      });


})

Cypress.Commands.add('Subject', () => {

    timeout:1000;
    cy.contains('Departamentos').should('exist').click()
    cy.wait(1000)
})

Cypress.Commands.add('idsub', () => {

    cy.get('input[name="id"]')
  .type('6070', { delay: 1000 })
  .should('have.value', '6070')
  .screenshot();

    cy.get('button[aria-label="Buscar"][type="button"]').click({ force: true });

    cy.wait(5000); // Espera algum tempo para o resultado da busca ser carregado

    cy.get('input[name="id"]').clear(); // Limpa o campo de texto após clicar no botão de busca


})

Cypress.Commands.add('ReportPDF', () => {

    cy.contains('Painel de Gestão').should('exist').click();
    cy.wait(5000);
    cy.contains('button', 'Fila de Espera').should('be.visible').click();
    cy.wait(5000);
    cy.get('.MuiListItemSecondaryAction-root > .MuiButtonBase-root > .material-icons').click({force: true})
})

Cypress.Commands.add('Contact', () => {

    cy.get('.MuiAccordionSummary-content').contains('h4', 'Dados do Contato').should('be.visible').click();
    cy.wait(4000);
    cy.contains('label', 'Protocolo')
    .parent() // Assume que o input está no mesmo contêiner pai
    .find('input') // Encontra o input dentro do contêiner pai
    .should('exist')
    .and('be.visible')
    .type('24988460', { delay: 300 }).type('{enter}', { force: true });

});

Cypress.Commands.add('ClickPDFIcon', () => {
    // Encontra o ícone com a classe 'material-icons' e o texto 'picture_as_pdf'
    cy.get('span.material-icons')
      .contains('picture_as_pdf')
      .should('be.visible')
      .click({ force: true }) // Força o clique mesmo que o elemento não esteja em um estado interativo usual
      .screenshot();
  });
  
