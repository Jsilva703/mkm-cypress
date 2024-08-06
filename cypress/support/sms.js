Cypress.Commands.add("custo", () => {
    // centro de custo do sms
    cy.contains("Centros de Custo").should("be.visible").click({ force: true });
    cy.get('input[name="codcc"]')
      .should("be.visible")
      .type("18861", { delay: 100 });
    cy.get('button[aria-label="Buscar"][type="button"]').click();
  });

  Cypress.Commands.add("Sms", () => {
    cy.wait(2000);
    cy.get('div[data-tour="Monitoramento"]')
      .should("exist")
      .click({ force: true });
    cy.wait(1000);
  });

  Cypress.Commands.add("envio", () => {
    cy.get('span.material-icons[data-tour="addEnvios').then(($el) => {
      cy.wrap($el).click();
    });
  });

  Cypress.Commands.add("lote", () => {
    cy.contains("Envio em Lote").should("exist").click({ force: true });
    cy.get('svg[data-testid="FolderOpenOutlinedIcon"]').click(); //seletor do upload de arquivo
    cy.wait(3000);
    const filePath = "testeone11111 (2).csv"; // arquivo que iremos fazer o upload
    cy.get('input[type="file"]').attachFile(filePath);
    cy.wait(3000);
    cy.get('input[name="dcrmlg"]').type("Envio via cypress", { delay: 100 });
    cy.get('div[role="combobox"]').contains("Selecione").click({ force: true });
    cy.get("li").contains("Cypress").click(); // fazendo um get nos itens da lista a partir do combobox selecionado acima
    cy.wait(3000);
    cy.contains('Próximo').should('be.visible').click();
    cy.contains('Enviar').should('be.visible').click();
    //cy.get('.MuiDialogActions-root > :nth-child(2)').click();
  })

  Cypress.Commands.add("avulso", () => {
    cy.contains("Envio Avulso").should("exist", { timeout: 2000 }).click();
  });

  Cypress.Commands.add("number", () => {
    cy.fillPhoneNumber("11911031972");
    cy.wait(1000);
    //cy.get('div[role="combobox"][aria-labelledby=":r11:-label :r11:"]').click();
    ///cy.contains('Cypress').should('exist').click();
    cy.get('div[role="combobox"]').eq(1).click();
    cy.wait(1000);
    cy.contains("li", "Cypress").click();
    cy.wait(5000);
    cy.get(".MuiDialogActions-root > :nth-child(2)").click();
  });

  Cypress.Commands.add("tutoriais", () => {
    cy.contains("Tutoriais").should("be.visible").click({ force: true });
  });