Cypress.Commands.add("configg", () => {
  // comando do channels
  //cy.get('img[src="assets/mklib/images/icons-2021/avatar.png"]')
  //.should("be.visible")
  //.click();
  cy.get('div[aria-label="cypress"]').dblclick();
  cy.wait(4000);
  cy.get('[data-tour="configuração"] > .MuiStack-root').click({ force: true });
});

Cypress.Commands.add("qrcode", () => {
  // cy.contains('Conexões').should('be.visible').click({force:true})
  // cy.url().should('include', '/connections');

  //cy.wait(2000)
  // cy.get('[data-tour="Conexões"] > :nth-child(2) >').click();
  //cy.get('.PrivateSwitchBase-input').then('exist', 'Streaming(QRCODE)').click();
  // cy.get('[href="https://portal.mkom.tec.br/mkconfig/#/connections"]')
  //.should('exist', 'WhatsApp').click();

  cy.get('[data-tour="Conexões"]').should("be.visible");
  cy.wait(1000);
  cy.get('[data-tour="Conexões"] > :nth-child(2) >').click();
  cy.get('[href="https://portal.mkom.tec.br/mkconfig/#/connections/whatsapp"]')
    .should("exist", "WhatsApp")
    .click();
  cy.wait(2000);
  cy.contains("Streaming(QR Code)").should("be.visible").click();
  cy.url().should(
    "eq",
    "https://portal.mkom.tec.br/mkconfig/#/connections/streaming"
  );
});

Cypress.Commands.add("Filterlogin", () => {
  cy.contains("Logins").should("be.visible").click({ force: true });
  cy.wait(2000);
  cy.get('input[name="codlgn"]').should("exist").type(18422, { delay: 100 });
  cy.get('button[name="search"]').click();
});
