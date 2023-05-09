
const dados = require ('../fixtures/dados.json')

describe('Acessar painel do Administrador', () => {

  context('Dado que eu acessar o site EBAC Shop', () => {
    before(() => {
      cy.visit('wp-admin')
    });

    context(`Quando eu logar com o usuário ${dados.usuario} e a senha ${dados.senha}`, () => {
      beforeEach(() => {
        cy.login(dados.usuario, dados.senha)
      });

      it('Então o painel do administrador deve ficar visivel', () => {
        cy.get('#wp-admin-bar-site-name > [aria-haspopup="true"]').should("be.visible")
      });
    });
  });
});


/*const dados = require ('../fixtures/dados.json')

describe('Acessar painel do Administrador', () => {

  beforeEach(() => {
    cy.visit('wp-admin')
  });

  it('Deve realizar login com sucesso', () => {
    cy.login(dados.usuario, dados.senha)

    cy.get('#wp-admin-bar-site-name > [aria-haspopup="true"]').should("be.visible")
  });
  
});*/