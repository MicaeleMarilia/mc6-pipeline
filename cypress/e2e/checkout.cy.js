/// <reference types="cypress"/>
import { faker } from "@faker-js/faker"


describe('Checkout', () => {

    let fname
    let lname
    let cname
    let email
    let zip
    let faddress
    let messages
    let password

    beforeEach(() => {


        cy.visit('/checkout-one') //URL configurada no cypress.config

        fname = faker.person.firstName()
        lname = faker.person.lastName()
        cname = faker.company.name()
        email = faker.internet.email()
        password = faker.internet.password()
        zip = faker.location.zipCode()
        faddress = faker.location.direction()
        messages = faker.hacker.phrase()

    })

   it.only('Compra com sucesso', () => {
        cy.pedidoRealizadoComSucesso(fname, lname, cname, email, zip, faddress, messages)

    }) 

    it('Compra nome vazio', () => {

    })

    it('Compra sobrenome vazio', () => {

    })

    it('Compra nome empresa vazio', () => {

    })

    it('Compra email vazio', () => {

    })

    it('Compra pais vazio', () => {

    })

    it('Compra estado/cidade vazio', () => {

    })

    it('Compra cep vazio', () => {

    })

    it('Compra endereco vazio', () => {

    })

    it('Compra notas vazia', () => {

    })


    it('Salvar informacoes de faturamento com sucesso', () => {

    })

    it('Validar dados do pagamento vazio', () => {

    })




})