
/// <reference types ="cypress" />
//usei biblioteca do node 'npm faker-br' para ficar gerando novos usuários aleatórios (sempre que precisar ver documentacao dela e usar)


var faker = require('faker-br');


describe('Formulário', () => {
    it('Validar preenchimento do formulário', () => {
        
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)
        let street = faker.address.streetName()
        let gender = faker.name.gender()
        let job = faker.name.jobTitle()
        let company = faker.company.companyName()
        



        cy.visit('https://automacaocombatista.herokuapp.com/users/new')
        cy.get('#user_name').type(nomeFaker)
        cy.get('#user_lastname').type(sobrenomeFaker)
        cy.get('#user_email').type(emailFaker)
        cy.get('#user_address').type(street)
        cy.get('#user_university').type(company)
        cy.get('#user_profile').type(job)
        cy.get('#user_gender').type(gender)
        cy.get('#user_age').type('35')
        cy.get('.actions').click()
        cy.get('#notice').should('be.visible')


    });





});