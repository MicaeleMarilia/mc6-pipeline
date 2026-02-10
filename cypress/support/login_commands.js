/// <reference types="cypress"/>

Cypress.Commands.add('preencherUsuario', (user) => {
    cy.get('#user').type(user)
})

Cypress.Commands.add('preencherSenha', (password) => {
    cy.get('#password').type(password)
})

Cypress.Commands.add('clicarCadastrar', () => {
    cy.get('#btnLogin').click()
})

Cypress.Commands.add('validarLogin', (user) => {
    cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', 'Login realizado')

    cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text', `Olá, ${user}`)
})

Cypress.Commands.add('validarEmail', () => {
    cy.get('.invalid_input')
        .should('be.visible')
        .should('have.text', 'E-mail inválido.')
})

Cypress.Commands.add('validarSenha', () => {
    cy.get('.invalid_input')
        .should('be.visible')
        .should('have.text', 'Senha inválida.')
})

Cypress.Commands.add('validarEmailInvalido', (password) => {
    cy.preencherUsuario('emailinvalido@')
    cy.preencherSenha(password)
    cy.clicarCadastrar()
    cy.validarEmail()

})

Cypress.Commands.add('validarSenhaInvalida', (user) => {
    cy.preencherUsuario(user)
    cy.preencherSenha('123')
    cy.clicarCadastrar()
    cy.validarSenha()

})