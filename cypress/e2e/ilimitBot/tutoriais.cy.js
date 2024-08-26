import "../../support/Components";
import "../../support/ilimitbot";

describe("Validar Bots", () => {
  let apiResponses = [];
  before(() => {
    cy.visitarURL();
    cy.clearCookies();
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
    cy.N4();
    cy.menuopen();
  });

  it("Validation Bots", () => {
    cy.tutoriais();
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
