import { beforeEach } from 'mocha';
import '../../../support/Components'

describe('Dashboard', () => {

    before(() => {

        cy.visitarURL();
        cy.LoginCypress();
        cy.API();

    });

    beforeEach(() => {

        cy.closeTour();
    });

    it('Dashboard', () => {

        cy.mapearCenters();
        cy.N2();
        cy.menuopen();
        cy.choosedate();
        cy.buscar();
       
    })
})