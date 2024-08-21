Cypress.Commands.add("Integration", () => {
  cy.contains("Integrações").should("be.visible").click();
});
