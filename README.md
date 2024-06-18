# mkm-cypress

Este é um projeto de teste da plataforma que utiliza Cypress para validar tanto front-end quanto algumas funcionalidades de back-end, facilitando a localização e correção de possíveis erros.

## Começando

Antes de começar a executar o Cypress, certifique-se de ter seguido os seguintes passos:

1. **Clone este repositório em sua máquina local:**
   ```bash
   git clone git@github.com:Joao848846/mkm-cypress.git

2. **Verifique se o Cypress e o Yarn estão instalados em seu sistema:**
   
 - Se o Yarn não estiver instalado, você pode instalá-lo globalmente através do npm:

   ```bash
   npm install --global yarn
   
3. **Faça as alterações necessárias dentro da pasta do repositório.**
4. **Certifique-se de sempre trabalhar dentro da pasta e2e para os testes de ponta a ponta.**

# Instalação das Dependências

   ```bash
cd mkm-cypress
yarn
```
Certifique-se de que todas as alterações sejam feitas na pasta do repositório.

# Executar Testes do Cypress

Após concluir as etapas acima, você pode começar a executar os testes do Cypress.

Executar na Interface Gráfica do Cypress
Para abrir a interface gráfica do Cypress, execute:

   ```bash
yarn dev
```
Isso abrirá a interface do Cypress, onde você pode selecionar e executar seus testes interativamente.

#Executar Testes em Modo Headless

Para executar os testes Cypress em modo headless (ideal para execução automatizada ou integração contínua, execute apenas com push ou pull request), use o seguinte comando:
   ```bash
yarn teste
```
# Agendamento Automático

- Este projeto possui um cron configurado para rodar automaticamente às segundas e quintas-feiras às 13 horas.

  <br/>

Para visualizar dados das specs

[![mkm-cypress](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/count/jp8ghz/Cypress&style=for-the-badge&logo=cypress)](https://cloud.cypress.io/projects/jp8ghz/runs)

# Uso

-Este projeto é utilizado para testes pós-deploy para garantir a integridade da plataforma.

# Recursos do Cypress

- https://docs.cypress.io/guides/overview/why-cypress - aprenda sobre os recursos e API do Cypress.

- https://docs.cypress.io/examples/recipes -  um projeto que demonstra vários testes Cypress.

