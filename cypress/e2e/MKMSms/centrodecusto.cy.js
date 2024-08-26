import "../../../support/Components";
import '../../../support/sms';

describe("Alterar centro de custo", () => {
  before(() => {
    cy.visitarURL();
    cy.LoginCypress();
    cy.API();
  });

  beforeEach(() => {
    cy.closeTour();
  });

  it("Alterar centro de custo", () => {
    cy.mapearCenters();
    cy.N1();
    cy.menuopen();
    cy.custo();
    cy.wait(2000);
    cy.menuClose();
  });
});
