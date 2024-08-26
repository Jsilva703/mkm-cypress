describe("envio de mensagem API", () => {
  it("envio para o user", () => {
    const templates = {
      message: "eae",
      message_type: "chat",
    };
    cy.request({
      method: "POST",
      url: "https://channels.beta.mkmservice.com/channel/api/sessions/25538770/send_message",
      body: templates,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NTMzMzgxNTksInVzZXJfaWQiOjE4MzQ1LCJjdXN0b21lcl9pZCI6MTYyNCwiYXVkIjoiYXBpIiwidWlkIjoiMmQ0YjczYmItNmE2MS00NjdkLThiNDEtNTEzMDNhMzRmYmNkIn0.7Mk1AG43ncClF-2CLUqGoGLbltCTe4dfqRWUFvXY0hw",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
