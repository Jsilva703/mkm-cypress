describe('Envio de SMS via API', () => {
    it('Deve enviar o SMS com sucesso', () => {
      const dadosSMS = {
        "mailing": {
          "identifier": "Teste API",
          "cost_centre_id": 18909
        },
        "messages": [
          {
            "msisdn": "5511911031972",
            "message": "teste de envio de SMS",
            //"schedule": "2024-06-26T15:14:00", caso aja necessidade pode passar uma data, caso contrário o cypress vai rodar na hora que for acionado
            "reference": "teste"
          }
        ]
      };
  
      
      cy.request({
        method: 'POST',
        url: 'https://sms.mkmservice.com/sms/api/transmission/v1',
        body: dadosSMS,
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NDUwMDE0NDIsInVzZXJfaWQiOjE4MzQ1LCJjdXN0b21lcl9pZCI6MTYyNCwiYXVkIjoiYXBpIiwidWlkIjoiNzEyMDZkNjQtNTIxYS00NzI2LTg3YjAtMDY3MzhhNmUzODUzIn0.78q7_I2WtdpGwPBJQuNtVaBE790j0-Dn1HjJpgEem9c',
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        
        expect(response.status).to.eq(200); 
        //expect(response.body).to.have.property('success', true); // Não foi preciso user esse response.body aguardando o sucess
      });
    });
  });
  