import "./../../support/Components";
import "./../../support/one";
import "@testing-library/cypress/add-commands";

describe("Integration Reply Channels", () => {
  it("Integration", () => {
    cy.visitarURL();
    cy.LoginCypress();
    cy.API();
    cy.closeTour();
    cy.mapearCenters();
    cy.N3();
    cy.menuopen();
    cy.findByText("Integrações").should("be.visible").click();
    cy.findByText("Palavras-Chave MKChannels").should("be.visible").click();
    cy.findByLabelText("Palavra-Chave").type("CYPRESS", { delay: 800 });
    cy.buscar();
  });
});
