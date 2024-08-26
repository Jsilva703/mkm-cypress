import "../../support/Components";

describe("Edit Connection", () => {
  before(() => {
    cy.visitarURL();
    cy.LoginCypress();
    cy.API();
  });

  beforeEach(() => {
    cy.closeTour();
  });
});
