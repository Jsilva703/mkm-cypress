describe("MODO 1 API", () => {
  it("Executar envio da campanha", () => {
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toISOString();

    const modo1 = {
      name: "teste API",
      templates: [
        {
          text: "Texto numero 1",
        },
      ],
      costCenter: {
        _id: 18861,
      },
      urlMailing:
        "https://mkdocs-201908.s3.sa-east-1.amazonaws.com:443/652/production/43d56d6daeb2d36d7e78fc52b54dceeb_652/production/testeone11111.csv",
      startTime: "08:00",
      endTime: "23:00",
      scheduledAt: dataFormatada,
      daysWeek: [1, 2, 3, 4, 5],
      connectionsId: [7310],
    };

    // Envia o JSON para a API usando cy.request()
    cy.request({
      method: "POST",
      url: "https://whatsappcross-api.mkmservice.com/api/campaigns/mode1",
      body: modo1,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NTU5MDc0MjQsInVzZXJfaWQiOjE4MzQ1LCJjdXN0b21lcl9pZCI6MTYyNCwiYXVkIjoiYXBpIiwidWlkIjoiNzliZDg4NTUtMDQ1Ny00MDA5LTg5MjMtYmFlYTRiYWQ2MDA2In0.ghT8Ql4FBv9H-0xlUaig0u9u3WoHyhn9DDenIMa8Yos",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      // Verifica se a resposta da API foi bem-sucedida
      expect(response.status).to.eq(200); // Verifica se o status é 200 OK
    });
  });
});
