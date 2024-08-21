import "@testing-library/cypress/add-commands";

Cypress.Commands.add("canais", () => {
  cy.findByText("Bots", "Tutoriais").should("exist").click();
});

Cypress.Commands.add("tutoriais", () => {
  cy.findByText("Tutoriais").should("have.length", 1).click();
});

Cypress.Commands.add("fluxoBot", () => {
  cy.get(
    ":nth-child(1) > :nth-child(1) > .MuiPaper-root > .MuiCardActions-root"
  ).click();
  cy.get(
    'svg path[d="M9 3h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z"]'
  )
    .should("exist")
    .click({ force: true });

  cy.contains("span", "Personalizado").should("be.visible");

  cy.contains("span", "Mkchannels Teste Dev NÃO USAR (Pode quebrar)").should(
    "be.visible"
  );

  cy.contains("span", "Teams").should("be.visible");

  cy.contains("span", "Teste Treinamento").should("be.visible");

  cy.contains("span", "MKChannels").should("be.visible");

  cy.contains("span", "MKChannels Oficial").should("be.visible");
});
