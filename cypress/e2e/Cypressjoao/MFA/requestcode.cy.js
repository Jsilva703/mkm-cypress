import "../../../support/Components";
import "../../../support/MFA";

describe("Authentication", () => {
  before(() => {
    cy.Alpha3();
    cy.API();
    cy.LoginCypress();
  });

  it("Authentication", () => {
    cy.url().should("eq", "https://beta.mkom.tec.br/#/mfa/requestcode");
    cy.código_MFA();

    cy.getAllCookies().then((cookies) => {
      // Fazendo log dos cookies
      console.log("cookies:", JSON.stringify(cookies, null, 2));
      // Exemplo de uso dos cookies
      cookies.forEach((cookie) => {
        cy.log(`${cookie.name}: ${cookie.value}`);
      });
    });
  });
});
