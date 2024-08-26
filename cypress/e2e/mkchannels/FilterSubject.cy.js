import "./../../support/Components";

describe("Subject", () => {
  it("Edit dpto", () => {
    cy.visitarURL();
    cy.LoginCypress();
    cy.API();
    cy.closeTour();
    cy.mapearCenters();
    cy.N2();
    cy.menuopen();
    cy.Config();
    cy.Subject();
    cy.menuClose();
    cy.idsub();
  });
});
