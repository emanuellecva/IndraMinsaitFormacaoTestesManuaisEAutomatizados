
/// <reference types ="cypress" />
//usei biblioteca do node 'npm faker-br' para ficar gerando novos usuários aleatórios (sempre que precisar ver documentacao dela e usar)
//https://www.npmjs.com/package/faker-br

var faker = require('faker-br');
//para usar a biblioteca preciso colocar essa linha superior(tá na documentacao dela)

describe('Formulário', () => {
    it('Validar preenchimento do formulário', () => {
        
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)
        

        cy.visit('https://automacaocombatista.herokuapp.com/users/new')
        cy.get('#user_name').type(nomeFaker)
        cy.get('#user_lastname').type(sobrenomeFaker)
        cy.get('#user_email').type(emailFaker)
        cy.get('#user_address').type('Rua José Clementino,33')
        cy.get('#user_university').type('UFPB')
        cy.get('#user_profile').type('Estudante')
        cy.get('#user_gender').type('feminino')
        cy.get('#user_age').type('30')
        cy.get('.actions').click()
        cy.get('#notice').should('be.visible')


    });





});