import "./../../support/Components";
import "./../../support/one";
import "@testing-library/cypress/add-commands";

describe("Filtro de blocklist", () => {
  it("Fazer a busca", () => {
    cy.visitarURL();
    cy.LoginCypress();
    cy.API();
    cy.closeTour();
    cy.mapearCenters();
    cy.N3();
    cy.block();
    cy.delete();
  });
  after(() => {
    // Limpeza após todos os testes
    cy.clearCookies();
    // Evite o uso de cy.reload() aqui para evitar problemas de navegação
  });
});
