

/// <reference types ="cypress" />


describe('Teste de Botões', () =>{

    it('Validar Botão ao Clicar', () => {
        cy.visit("https://automacaocombatista.herokuapp.com/buscaelementos/botoes")
        cy.get('[id="teste"]').click()
        cy.get("#div1 > h5").should("have.text", "Você Clicou no Botão!");
    });
    

    it('Validação Clicou Botão 2', () => {
        cy.visit("https://automacaocombatista.herokuapp.com/buscaelementos/botoes")
        cy.get('[type="submit"]').click()
        cy.get('#div4 > h5').should("have.text", "Você Clicou no Botão!");
        cy.get('#div4 > h5').should('be.visible');
    });

    
    it.only('Validar digitação de NOME dentro do formulário', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield')
        cy.get('#first_name').type('Emanuelle').should('have.value', 'Emanuelle')
        cy.get('#last_name').type('Cabral').should('have.value', 'Cabral')
        
    });

    it('Validar digitação de SOBRENOME dentro do formulário', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield')
        cy.get('#last_name').type('Cabral').should('have.value', 'Cabral') 
    });
   

})