/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json')

import endereco from '../support/page_objects/endereco.page'


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    //     //TODO 
            cy.addProdutos('Ajax Full-Zip Sweatshirt', 'M', 'Green', 2) //  Produto 3
            cy.addProdutos('Argus All-Weather Tank', 'M', 'Gray', 2)    //  Produto 6
            cy.addProdutos('Arcadio Gym Short', '33', 'Red', 3)         //  Produto 5
            cy.addProdutos('Atlas Fitness Tank', 'XS', 'Blue', 2)       //  Produto 8

            cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()  

            cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
            //indo pro carrinho 

            endereco.editarEndereco()
            //mudando dados da entrega

            cy.get('[class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"]').click()
            //clica nos termos

            cy.get('[data-value="Finalizar compra"]').click()

            cy.get('.page-title').should('PEDIDO RECEBIDO') 
            
    });
})