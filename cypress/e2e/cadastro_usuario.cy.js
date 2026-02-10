/// <reference types="cypress"/>
import { faker } from "@faker-js/faker"

const auth = require('../fixtures/auth.json')

describe('Cadastro do usuario', () =>{

    let user
    let password
    let email

    beforeEach(() =>{
        
    
        cy.visit('/register') //URL configurada no cypress.config

        user = faker.person.firstName()
        password = faker.internet.password({length: 6})
        email = faker.internet.email()

    })

    it('Cadastro com sucesso', ()=>{

        cy.preencherNome(user)
        cy.preencherEmail(email)
        cy.preencherSenha(password)
        cy.clicarCadastrar()

        cy.validarCadastro(user)

    })

    it('Cadastro nome vazio', ()=>{
        
        cy.preencherEmail(email)
        cy.preencherSenha(password)
        cy.clicarCadastrar()
        cy.validarNome()

    })

    it('Cadastro email vazio', ()=>{

        cy.preencherNome(user)
        cy.preencherSenha(password)
        cy.clicarCadastrar()
        cy.validarEmail()
        
    })

    it('Cadastro senha vazia', ()=>{

        cy.preencherNome(user)
        cy.preencherEmail(email)
        cy.clicarCadastrar()
        cy.validarSenha()

    })

    it('Cadastro email invalido', ()=>{

        cy.validarEmailInvalido(user, password)
    })

    it('Cadastro senha invalida', ()=>{

        cy.validarSenhaInvalida(user, email)

    })

})