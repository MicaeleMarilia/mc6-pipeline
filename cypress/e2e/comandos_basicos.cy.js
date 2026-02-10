/// <reference types="cypress"/>

describe('Comandos basicos', () => {

    it('Abrir uma URL', () => {
        cy.visit('https://automationpratice.com.br/login#!')
    })

    it('Abrir uma URL', () => {
        cy.visit('https://automationpratice.com.br/login#!')

        //get() - procurar um elemento
        cy.get('#user') // # para id

        //find() - procurar um elemento
        //diminuir o escopo com o get() antes
        cy.get('.mc-form').find('.form-control') // . para class

        //contains() - procurar um elemento
        //diminuir o escopo com o get() antes
        cy.get('.mc-form').contains('Send')
    })

    it('Preencher um campo', () => {
        cy.visit('https://automationpratice.com.br/login#!')
        cy.get('#user').type('mica@gmail.com')

        cy.get('.mc-form').find('.form-control').type('mica@gmail.com{enter}')
        //Preencher o email e ao final clicar em enter
    })

    it('Clicar em um elemento', () => {
        cy.visit('https://automationpratice.com.br/login#!')
        cy.get('#btnLogin').click()
        //cy.get('#btnLogin').rightclick() //Clique com o botão diretiro
        //cy.get('#btnLogin').dblclick //Clique duplo

    })

    it('Select', () => {
        cy.visit('https://automationpratice.com.br/checkout-one')
        cy.get('#country').select('usa')
        //cy.get('#country').select(2) // Selecionar o elemento pela posição
    })

    it('Checkbox e radio button', () => {
        //Checkbox
        cy.visit('https://automationpratice.com.br/checkout-one')
        cy.get('#materialUnchecked').check()
        //cy.get('#materialUnchecked').uncheck // Para desmarcar

        //Radio button
        cy.get('#css').check()

    })

    it('Validação de texto', () => {
        cy.visit('https://automationpratice.com.br/login#!')
        cy.get('#createAccount').should('be.visible') //Deve ser visivel
        .should('contain', 'Ainda não tem conta?') //Deve conter o texto informado
                                
    })


})