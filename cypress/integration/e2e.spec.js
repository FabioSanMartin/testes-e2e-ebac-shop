/// <reference types="cypress" />

import enderecoPage from '../support/page_objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')
const perfil = require('../fixtures/perfil.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //Login
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        //Adicionar produto
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'XS', 'Red', 1)
        cy.addProdutos2('Atomic Endurance Running Tee', 'S', 'Black', 1)
        cy.addProdutos2('Autumn Pullie', 'XS', 'Green', 1)
        cy.addProdutos2('Augusta Pullover Jacket', 'XS', 'Orange', 1)

        //Checkout
        cy.checkoutPedido1()

        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].pais,
            dadosEndereco[2].endereco,
            dadosEndereco[2].numero,
            dadosEndereco[2].cidade,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep,
            dadosEndereco[2].telefone,
            dadosEndereco[2].email
        )
        cy.checkoutPedido()



    })







});










