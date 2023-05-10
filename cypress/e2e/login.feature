
Feature: Painel Administrador
    Scenario Outline: Acessar painel do Administrador
        Dado que eu acessar o site EBAC Shop
        Quando eu logar com o usuário "<usuário>" e a senha "<usuário>"
        Entao o painel do administrador deve ficar visivel

        Examples:
            | usuario | senha                    |
            | gerente | GD*peToHNJ1#c$sgk08EaYJQ |
