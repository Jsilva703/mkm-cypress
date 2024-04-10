describe('Teste de Login no MKM Service', () => {
    it('Deve fazer login com sucesso', () => {
        cy.loginMKM('comercial', 'mkmcypress', '12345', 'cypress-joao', 'nagios', 'teste cypress');
    });
});
