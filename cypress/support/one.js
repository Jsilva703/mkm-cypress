Cypress.Commands.add("block", () => {
  cy.log("Filtrando número");
  cy.get('div[data-tour="Blocklist"]').should("exist").click({ force: true });
  cy.get(".MuiOutlinedInput-input").type("13996341251", { delay: 800 });
  cy.get('button[aria-label="Buscar"][type="button"]').as("searchButton");
  cy.get("@searchButton").click();
});

Cypress.Commands.add("campanha", () => {
  cy.wait(1000);
  cy.contains("Campanha").should("exist").click({ force: true });
});

Cypress.Commands.add("avançada", () => {
  cy.get('button[aria-label="Busca Avançada"]').click();
  cy.contains("Busca Avançada").should("exist");
  cy.wait(1000);
  cy.get('input[name="_id"]').type("10427", { delay: 100 });
  cy.contains("Buscar").click({ force: true }, { timeout: 1000 });
  cy.get(
    '.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk[variant="contained"]'
  ).as("moreVertButton");
  cy.wait(1000);
  cy.get("@moreVertButton").click();
});

Cypress.Commands.add("clonar", () => {
  cy.get('button[aria-label="Clonar esta campanha"]').then(($el) => {
    cy.wrap($el).click();
  });

  for (let i = 0; i < 6; i++) {
    cy.get("button.MuiButton-containedSecondary").click({ multiple: true });
    cy.wait(1000); // Espera 1 segundo antes de clicar novamente
  }
});

Cypress.Commands.add("reportcampaing", () => {
  cy.contains("Campanha").should("be.visible").click({ force: true });
  cy.wait(5000);
  cy.get('span.material-icons[data-tour="menuClose"]').click();
  cy.wait(2000);
  cy.get('button[aria-label="Busca Avançada"]')
    .should("be.visible")
    .click({ force: true });
});

Cypress.Commands.add("textid", () => {
  cy.get('input[name="_id"]').should("be.visible").type("11240");
  cy.contains("Buscar").click({ force: true }, { timeout: 1000 });
  cy.get('[data-tour="downloadCampanha"]').click({ force: true });
});

Cypress.Commands.add("delete", () => {
  cy.findByText("more_vert").click();
  cy.get('button[aria-label="Remover"][type="button"]').click();
});
