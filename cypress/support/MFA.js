Cypress.Commands.add("Alpha3", () => {
  cy.visit("https://beta.mkom.tec.br/#/");
});

Cypress.Commands.add("código_MFA", () => {
  cy.get('input[placeholder="Código SMS"]').should("exist").type("060012");
  cy.contains("VALIDAR").click({ force: true });
});
