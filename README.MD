# API Upload de Imagens

Essa aplicação foi desenvolvida exclusivamente para cadastrar clientes, listá-los e visualizá-los e exclui-los. Através dessa API você consegue fazer cadastro de clientes, visualiza-los e exclui-los.


**STACK PRINCIPAL:** *Typescript, NodeJS, Prisma, Fastify, MongoDB & Padrões REST*

## O QUE FOI UTILIZADO E ABSORVIDO DURANTE O PROJETO

- Criação e Consumo de API's
- Padrões **REST**
- Verbos **HTTP**
- Status Code
- Endpoints Amigáveis
- Banco de Dados não Relacional **MongoDB*, utilizando **Prisma**
- "Travando" Requisições pra API com **fastifycors**
- Variáveis de Ambiente com **DotEnv**
- Testando Requisição pra API com **Insominia**

## GUIA RÁPIDO DE INSTALAÇÃO

*1 - Dependências Iniciais*

Antes de qualquer coisa, você precisa ter instaldo o [`NPM & Node`](https://nodejs.org/en/) + [`Git`](https://git-scm.com/). Para Instalar o  siga o passo a passo de cada link listado abaixo:


- [`NPM & Node`](https://nodejs.org/en/)
- [`Git`](https://git-scm.com/)

*2 - Base de Dados*

Será necessário gerar uma string de conexão com o banco. Para tal crie uma conta no atlas (grátis) e gere essa string. Você pode criar sua conta [Clicando aqui](https://www.mongodb.com/cloud/atlas/register).

OBS.: Caso tenha duvidas, você pode seguir [este tutorial aqui](https://medium.com/reprogramabr/conectando-no-banco-de-dados-cloud-mongodb-atlas-bca63399693f)

Tendo gerado a string, procure pelo arquivo .env.example e siga o passo a passo abaixo:

- colo a string no lugar indicado dentro do arquivo. Deverá ficar algo como `CONECTION_STRING=string-que-vc-criou`
- renomeie o arquivo para .env

*3 - Rodando na Sua Máquina*

Considerando que você executou as etapas acima com êxito, abra o seu terminal e rode os seguintes comandos em suas respectivas ordens:

- `git clone https://github.com/Bruno-Nunes17/customer-registration-api`
- `cd upload-api`
- `npm install`
- `npm start` or `npm run dev`

Pronto! a API estará rodando na porta 3333. Caso você deseje alterar para outra porta, basta adicionar ao aquivo .env do projeto como no exemplo a seguir: `PORT=4000`.
### Edpoints

`POST /customer`: <br/>
Método para fazer o cadastro do cliente. Você deve enviar no corpo da requisição um campo "name" com o nome do cliente e um campo "email" com o email do cliente. <br/>

`GET /customer`:  <br/>
Método para Listar os clientes cadastrados Nessa Ferramenta. Ele retorna uma lista de clientes cadastrados, com nome, email, id, data de criação e data de atualização. <br/>

`DELETE/customer`:  <br/>
Método para deletar um cliente cadastrado. para fazer isso sera necessario enviar na requisição o id do cliente que deseja excluir. <br/>
