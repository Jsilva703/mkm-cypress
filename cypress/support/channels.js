Cypress.Commands.add("Integration", () => {
  cy.contains("Integrações").should("be.visible").click();
});

Cypress.Commands.add("satisfaçao", () => {
  cy.contains("span", "Pesquisa de Satisfação").should("be.visible").click();
  cy.contains("span", "Gerenciar").should("exist").click();
  cy.findByLabelText("Descrição").type("1", { delay: 800 });
});

Cypress.Commands.add("download", () => {
  cy.findByRole("button", { name: /Download/i }).click();
});
