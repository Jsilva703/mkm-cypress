import "./../../../support/Components";
import "./../../../support/config";

describe("Streaming QRCODE", () => {
  let apiResponses = [];
  before(() => {
    cy.clearCookies();
    cy.visitarURL();
    cy.clearCookies(); // adaptação para limpar possíveis problemas de autenticação
    cy.clearLocalStorage();
    cy.LoginCypress();
    cy.API();
  });

  beforeEach(() => {
    cy.intercept("GET", "**/api/**", (req) => {
      req.reply((res) => {
        apiResponses.push({
          url: req.url,
          statusCode: res.statusCode,
          body: res.body,
        });
      });
    }).as("apiRequest");
    cy.closeTour();
    cy.mapearCenters();
    cy.configg();
    cy.menuopen();
  });

  it("Validation Function", () => {
    cy.qrcode();
  });

  afterEach(function () {
    if (this.currentTest.state === "failed") {
      cy.screenshot(`screenshot-${this.currentTest.title}`);
      cy.log(`O teste falhou: ${this.currentTest.title}`);
    } else {
      cy.log(`O teste passou: ${this.currentTest.title}`);
    }
  });

  after(() => {
    cy.log("All tests completed");
    cy.task("log", JSON.stringify(apiResponses, null, 2));
  });
});
