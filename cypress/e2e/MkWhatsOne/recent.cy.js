import "./../../support/Components";
import "./../../support/one";
import "@testing-library/cypress/add-commands";

describe("Recent and New", () => {
  it("Recent and New", () => {
    cy.visitarURL();
    cy.LoginCypress();
    cy.API();
    cy.closeTour();
    cy.mapearCenters();
    cy.N3();
    cy.menuopen();
    cy.findByText("Recentes e Novidades").should("exist").click();
    cy.menuClose();
  });
});
