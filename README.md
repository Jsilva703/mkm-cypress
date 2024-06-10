# mkm-cypress

Este é um projeto de teste da plataforma que utiliza Cypress para validar tanto front-end quanto algumas funcionalidades de back-end, facilitando a localização e correção de possíveis erros.

## Começando

Antes de começar a executar o Cypress, certifique-se de ter seguido os seguintes passos:

1. Clone este repositório em sua máquina local.
2. Verifique se o Cypress e o npm estão instalados em seu sistema.
3. Instale as dependências do Cypress executando `npm install`.
4. Faça as alterações necessárias, as alterações devem ser feitas em branch únicas
5. Certifique-se de sempre trabalhar dentro da pasta `e2e` para os testes de ponta a ponta.


Após concluir essas etapas, você pode começar a executar os testes do Cypress.

Para clonar o repositório, use o seguinte comando:

```bash
git clone [git@github.com:Joao848846/mkm-cypress.git]
```

Para instalar o Cypress e as dependências do npm:

```bash
npm install cypress --save-dev
npm install
```

Document npm install: 

- https://docs.npmjs.com/cli/v10/commands/npm-install

- Certifique-se de que todas as alterações sejam feitas na pasta do repositório.

Para executar os testes do Cypress:

```bash
npm run dev
```

Para executar os testes localmente com o workflow do git:

```bash
npm run teste
```

Uso

- Este projeto é utilizado para testes pós-deploy para garantir a integridade da plataforma.

Para saber mais sobre o Cypress, confira os seguintes recursos:

- https://docs.cypress.io/guides/overview/why-cypress - aprenda sobre os recursos e API do Cypress.

- https://docs.cypress.io/examples/recipes -  um projeto que demonstra vários testes Cypress.

Contribuições:

- Contribuições são bem-vindas! Por favor, valide possíveis testes que possam ajudar a manter a integridade do sistema.
