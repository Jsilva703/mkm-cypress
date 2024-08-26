import "./../../support/Components";

describe("report", () => {
  it("Report PDF", () => {
    cy.visitarURL();
    cy.LoginCypress();
    cy.API();
    cy.closeTour();
    cy.mapearCenters();
    cy.N2();
    cy.menuopen();
    cy.ReportPDF();
    cy.menuClose();
    cy.Contact();
    cy.ClickPDFIcon();
  });
});
