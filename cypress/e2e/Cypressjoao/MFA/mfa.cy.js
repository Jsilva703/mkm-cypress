describe("Solicitando código MFA"),
  () => {
    it("MFA", () => {
      const mfa = {
        login: "fabio",
        password: "123",
        domain: "mkomchannels",
      };
      cy.request({
        method: "POST",
        url: "https://auth.beta.mkmservice.com/token/test",
        body: mfa,
        headers: {
          Authorization: "Bearer",
          "content-Type": "aplication/json",
          Referer: "https://alpha3.mkom.tec.br/",
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  };
