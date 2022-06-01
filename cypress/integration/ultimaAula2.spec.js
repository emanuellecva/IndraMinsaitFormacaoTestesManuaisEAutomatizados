/// <reference types ="cypress" />

describe('Formulario  ', () => {
    beforeEach(() => {
        cy.visit("https://automacaocombatista.herokuapp.com/users/new")
    });

    it('Formulario dados vazios', () => {
        
        cy.get(".tamanhodiv2 > h5").should("have.text", "Novo Usuário!!")

        cy.get('input[value="Criar"]').should("be.visible").click()

        cy.get("#error_explanation > h2").should("contain", "errors proibiu que este usuário fosse salvo")
    });
    
});