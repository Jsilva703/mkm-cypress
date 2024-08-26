import "./../../support/Components";

describe("Teste de Login no MKM Service", () => {
  it("Deve fazer login com sucesso", () => {
    cy.visitarURL();
    cy.LoginCypress();
    cy.API();
    cy.closeTour();
    cy.mapearCenters();
    cy.N3();
    cy.menuCentrocc();
    cy.filter1();
    cy.CreateCC();
    cy.limite();
    //cy.closeTour();
  });
});
