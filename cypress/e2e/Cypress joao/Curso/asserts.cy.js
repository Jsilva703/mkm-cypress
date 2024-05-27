/// <reference types="cypress" />

it('Equality', () => {
    const a = 2;

    expect(a).to.equal(2);
    expect(a, 'Deveria ser apresentado 2').to.equal(2); // Corrigido para verificar igualdade com 2
    expect(a).to.not.equal(3); // Corrigido para verificar que a não é igual a 3
    expect('a').to.not.equal('b');
})

it('truthy', () => {
    const a = true;
    const b = false;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.false;
    expect(a).to.not.be.null;
})

