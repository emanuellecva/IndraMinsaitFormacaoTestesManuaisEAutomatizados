
/// <reference types ="cypress" />
//usei biblioteca do node 'npm faker-br' para ficar gerando novos usuários aleatórios (sempre que precisar ver documentacao dela e usar)


const { contains } = require('cypress/types/jquery');
const faker = require('faker-br');


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
        cy.get('#user_name').should('be.visible').type(nomeFaker)
        cy.get('#user_lastname').should('be.visible').type(sobrenomeFaker)
        cy.get('#user_email').should('be.visible').type(emailFaker)
        cy.get('#user_address').should('be.visible').type(street)
        cy.get('#user_university').should('be.visible').type(company)
        cy.get('#user_profile').should('be.visible').type(job)
        cy.get('#user_gender').should('be.visible').type(gender)
        cy.get('#user_age').should('be.visible').type('35')
        
        cy.get('.actions').click()
        cy.get('#notice').should('be.visible')
        cy.get('.row.center').should("contain", 'Usuário Criado com sucesso')

        cy.contains("p", "Nome").should("contain", nomeFaker)


    });





});