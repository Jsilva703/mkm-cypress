import "./../../support/sms";
import "./../../support/Components";

describe("SMS-Envio", () => {
  it("SMS", () => {
    cy.visitarURL();
    cy.LoginCypress();
    cy.API();
    cy.closeTour();
    cy.mapearCenters();
    cy.N1();
    cy.menuopen();
    cy.Sms();
    cy.envio();
    cy.avulso();
    cy.number();
  });
});
