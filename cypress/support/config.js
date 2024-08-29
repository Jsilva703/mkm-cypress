Cypress.Commands.add("configg", () => {
  cy.get('div[aria-label="cypress"]').dblclick();
  cy.wait(4000);
  cy.get('[data-tour="configuração"] > .MuiStack-root').click({ force: true });
});

Cypress.Commands.add("qrcode", () => {
  cy.get('[data-tour="Conexões"]').should("be.visible");
  cy.wait(1000);
  cy.get('[data-tour="Conexões"] > :nth-child(2) >').click();
  cy.contains("span", "WhatsApp").should("be.visible").click();
  cy.wait(2000);
  cy.contains("Streaming(QR Code)").should("be.visible").click();
});

Cypress.Commands.add("Filterlogin", () => {
  cy.contains("Logins").should("be.visible").click({ force: true });
  cy.wait(2000);
  cy.get('input[name="codlgn"]').should("exist").type(18422, { delay: 100 });
  cy.get('button[name="search"]').click();
});

Cypress.Commands.add("profile", () => {
  cy.get('[data-tour="Conexões"]').should("be.visible");
  cy.wait(1000);
  cy.get('[data-tour="Conexões"] > :nth-child(2) >').click();
  cy.contains("span", "WhatsApp").should("be.visible").click();
  cy.get(".MuiAvatar-img.css-1hy9t21").closest("button").eq(0).click();
  cy.findByTestId("ArrowDropDownIcon").click();
});
