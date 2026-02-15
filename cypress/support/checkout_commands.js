/// <reference types="cypress"/>

Cypress.Commands.add('preencherNome', (fname) => {
    cy.get('#fname').type(fname)
})

Cypress.Commands.add('preencherSobrenome', (lname) => {
    cy.get('#lname').type(lname)
})

Cypress.Commands.add('preencherNomeEmpresa', (cname) => {
    cy.get('#cname').type(cname)
})

Cypress.Commands.add('preencherEmail', (email) => {
    cy.get('#email').type(email)
})

Cypress.Commands.add('preencherPais', () => {
    cy.get('#country').select('usa')
})

Cypress.Commands.add('preencherCidade', () => {
    cy.get('#city').select(2)
})

Cypress.Commands.add('preencherCep', (zip) => {
    cy.get('#zip').type(zip)
})

Cypress.Commands.add('preencherEndereco', (faddress) => {
    cy.get('#faddress').type(faddress)
})

Cypress.Commands.add('preencherNota', (messages) => {
    cy.get('#messages').type(messages)
})

Cypress.Commands.add('clicarSavarAddressBook', () => {
    cy.get('#materialUnchecked').check()
})

Cypress.Commands.add('clicarSalvar', () => {
    cy.get('.checkout-area-bg > .theme-btn-one').click()
})

Cypress.Commands.add('preencherCampos', (fname, lname, cname, email, zip, faddress, messages) => {
    cy.preencherNome(fname)
    cy.preencherSobrenome(lname)
    cy.preencherNomeEmpresa(cname)
    cy.preencherEmail(email)
    cy.preencherPais()
    cy.preencherCidade()
    cy.preencherCep(zip)
    cy.preencherEndereco(faddress)
    cy.preencherNota(messages)
})

Cypress.Commands.add('validarSalvar', () => {
    cy.get('#checkout_one')
        .should('be.visible')
        .should('contain', 'Billings Information registred with success!')
})

Cypress.Commands.add('selecionarMetodoPagamento', () => {
    cy.get('#javascript').check()
})

Cypress.Commands.add('clicarFazerPedido', () => {
    cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
})

Cypress.Commands.add('validarConfirmacaoPedido', () => {
    cy.get('.modal')
        .should('be.visible')
        .should('contain', 'Order success!')
        .should('contain', 'Congrats! Your order was created with sucess!')
})

Cypress.Commands.add('pedidoRealizadoComSucesso', (fname, lname, cname, email, zip, faddress, messages) => {
    cy.preencherCampos(fname, lname, cname, email, zip, faddress, messages)

    cy.clicarSavarAddressBook()

    cy.clicarSalvar()
    cy.validarSalvar()

    cy.selecionarMetodoPagamento()
    cy.clicarFazerPedido()
    cy.validarConfirmacaoPedido()
})