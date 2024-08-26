import "../../../support/Components";
import "../../../support/config";

describe("Filter Login", () => {
  beforeEach(() => {
    cy.visitarURL();
    cy.LoginCypress();
    //cy.pesquisa();
    cy.API();
    cy.closeTour();
    cy.mapearCenters();
  });

  it("Deve fazer login com sucesso", () => {
    cy.configg();
    cy.menuopen();
    cy.Filterlogin();
  });
});
