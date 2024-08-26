describe("Solicitando código MFA", () => {
  it("MFA", () => {
    const mfa = {
      login: "jsilva",
      password: "12345",
      domain: "mkomchannels",
    };

    cy.request({
      method: "POST",
      url: "https://auth.beta.mkmservice.com/token",
      body: mfa,
      headers: {
        //Authorization: "Bearer",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
