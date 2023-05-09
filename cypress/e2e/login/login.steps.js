
import {Dado, Quando, Entao } from "cypress-cucumber-preprocessor";
import { dados } from "../cypress/fixtures/dados.json";

Dado('que eu acessar o site EBAC Shop', () => {
    cy.visit('wp-admin')
})

Quando("eu logar com o usuário {string} e a senha {string}", (usuario, senha) => {
    cy.login(dados.usuario, dados.senha)
})

Entao("o painel do administrador deve ficar visivel", () => {
    cy.get('#wp-admin-bar-site-name > [aria-haspopup="true"]').should("be.visible")
})




