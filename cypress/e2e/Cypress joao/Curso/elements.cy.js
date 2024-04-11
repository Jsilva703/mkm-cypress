/// <reference types="cypress" />

describe ('Work basic elements' , () => {
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.reload();
    })

    it('Text', () => {
        //cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        cy.get('body').should('contain','Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...') //have.text vai fazer a busca exata do que está passando no body ou qualquer outro elemento
        cy.get('span').should('contain', 'Cuidado')
    })

    it('Links', () => {

        //cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        cy.get('a[onclick="javascript:voltou()"]').click(); //sempre validar o elemento e o id que está sendo fornecido para o cypress identificar
        cy.reload();
        cy.get('#resultado').should('have.not.text', 'Voltou!'); //validando o retorno na hora de fazer a ação acima
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
        //cy.contains('a', 'Popup2').click(); //Nesse caso tivemos dois elementos iguais, sendo assim em um deles podemos usar o contains para fazer a validação do id passado
        //cy.url().should('eq', 'https://www.wcaquino.me/cypress/frame.html');
        

    })
})