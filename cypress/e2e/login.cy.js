/// <reference types="cypress"/>

import { faker } from "@faker-js/faker"

describe('Login', () => {

    const tamanhostelas = ['samsung-s10', 'iphone-x', 'ipad-2', 'macbook-16']

    let user
    let password

    tamanhostelas.forEach(tamanho => {

        beforeEach(() => {

            cy.viewport(tamanho)  //Configurar o tamanho da tela
            cy.visit('/login')

            user = faker.internet.email()
            password = faker.internet.password({ length: 6 })

        })

        it(`Login com sucesso - Tela ${tamanho}`, () => {

            cy.preencherUsuario(user)
            cy.preencherSenha(password)
            cy.clicarCadastrar()

            cy.validarLogin(user)

        })

        it('Login email vazio', () => {

            cy.preencherSenha(password)
            cy.clicarCadastrar()

            cy.validarEmail()

        })

        it('Login senha vazia', () => {

            cy.preencherUsuario(user)
            cy.clicarCadastrar()

            cy.validarSenha()


        })

        it('Login email invalido', () => {

            cy.validarEmailInvalido(password)

        })

        it('Login senha invalida', () => {

            cy.validarSenhaInvalida(user)

        })
    })
})