import "./../../support/Components";
import "./../../support/one";

describe("Clonar Campanha", () => {
  it("Clonar campanha", () => {
    cy.visitarURL();
    cy.LoginCypress();
    cy.API();
    cy.closeTour();
    cy.mapearCenters();
    cy.N3();
    cy.menuopen();
    cy.campanha();
    cy.avançada();
    cy.clonar();
  });
});
