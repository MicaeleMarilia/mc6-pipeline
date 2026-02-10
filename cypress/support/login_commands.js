/// <reference types="cypress"/>

Cypress.Commands.add('preencherUsuario', (user) => {
    cy.get('#user').type(user)
})

Cypress.Commands.add('preencherSenhaLg', (password) => {
    cy.get('#password').type(password)
})

Cypress.Commands.add('clicarLogin', () => {
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

Cypress.Commands.add('validarEmailLg', () => {
    cy.get('.invalid_input')
        .should('be.visible')
        .should('have.text', 'E-mail inválido.')
})

Cypress.Commands.add('validarSenhaLg', () => {
    cy.get('.invalid_input')
        .should('be.visible')
        .should('have.text', 'Senha inválida.')
})

Cypress.Commands.add('validarEmailInvalidoLg', (password) => {
    cy.preencherUsuario('emailinvalido@')
    cy.preencherSenhaLg(password)
    cy.clicarLogin()
    cy.validarEmailLg()

})

Cypress.Commands.add('validarSenhaInvalidaLg', (user) => {
    cy.preencherUsuario(user)
    cy.preencherSenhaLg('123')
    cy.clicarLogin()
    cy.validarSenhaLg()

})