import "../../../support/Components";

describe("Tutorial", () => {
  before(() => {
    cy.visitarURL();
    cy.LoginCypress();
    cy.API();
  });

  beforeEach(() => {
    cy.closeTour();
  });

  it("Edit Connection", () => {
    cy.mapearCenters();
    cy.N1();
    cy.menuopen();
    cy.tutoriais();
  });
});
