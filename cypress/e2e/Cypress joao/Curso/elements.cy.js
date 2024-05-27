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

    it('Text', () => {

        cy.get('#formNome').type('cypress')
        cy.wait(1000);
        cy.get('#formNome').should('have.value', 'cypress')
        cy.get('[data-cy="dataSobrenome"]').type('joao')
        cy.get('[data-cy="dataSobrenome"]').should('have.value', 'joao')
        cy.get('#elementosForm\\:sugestoes').type('1234567')
        .should('have.value', '1234567')
        cy.wait(1000);
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(4) > input').click();
        cy.get('#elementosForm\\:sugestoes').type('1234567')
        .clear()
        .type('joao',{delay:1000})
        .should('have.value','joao')
    })

    it('Radio',() => {
        cy.get('#formSexoMasc').click().should('be.checked')
        cy.get('#formSexoFem').should('not.be.checked')
        cy.get('[name="formSexo"]').should('have.length', 2)
    })

    it('Checkbox',() => {

        cy.get(':nth-child(1) > :nth-child(5) > table > tbody > tr > td > input').click().should('be.checked')
        //cy.get('#formComidaCarne').click().should('be.checked')
        cy.get('[name="formComidaFavorita"]').click({multiple: true}) //Seleciona todos os campos passado com o mesmo name


    })

    it('ComboBox',() => {

    cy.get('[data-test="dataEscolaridade"]')
    .select('Especializacao')
    .should('have.value', 'especializacao')

    cy.get('[data-testid="dataEsportes"]')
      .select(['Natacao','Futebol'])
      .invoke('val') //nunca mudar essa ação quando for necessário selecionar dois valores ao mesmo tempo
      .should('deep.equal', ['natacao','futebol'])


    })

    it('Aplicando a usabilidade do find', () => {

        cy.get('#buttonList', {timeout:5000}).click();
        //cy.wait(2000) recomendado apenas em casos e casos, mas o principal seria usar o timeout onde não paramos a aplicação do cypress
        cy.get('#lista li')
        .find('span')
        .should('contain', 'Item 1', 'Item 2')
        cy.get('#lista li')
        .find('span')
        .should('contain', 'Item 2') 

    })

    it('Invoke', () => {

        const getValue = () => 2;
        const soma = (b,c) => b + c;

        cy.wrap({fn: getValue}).invoke('fn').should('be.equal',2)
        cy.wrap({fn: soma}).invoke('fn', 10, 10).should('be.equal', 20)
        cy.get('#formNome').invoke('val', "texto vai invoke")
        cy.window().invoke('alert', 'Dá pra ver?')
    })
})