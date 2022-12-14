
<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
  </p>

<br>


## Ignite Lab NodeJS - Notification Service

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/) - 18.12.1
- [Yarn](https://yarnpkg.com/) - 0.32+git
- [Npm](https://www.npmjs.com/) - 8.19.2

## 💻 Projeto

API 


Resolulção do teste.
<p align="center">
  <img alt="resolucao" src=".github/teste.PNG" width="100%">
</p>


## 🚀 Como Rodar

- Clone o projeto.
- Entre na pasta do projeto e rode npm install (pode usar yarn install de acordo com a sua configuração).
- npx prisma migrate dev
- npx prisma studio (abre uma pagina para ver o banco de dados)
- npm run start:dev para rodar o projeto (localhost:3000).

## 👩🏿‍💻 Rotas

- **`POST /orders`**: Nessa rota você deve receber no corpo da requisição o customer_id e um array de products, contendo o id e a quantity que você deseja adicionar a um novo pedido. Aqui você deve cadastrar na tabela orders um novo pedido, que estará relacionado ao customer_id informado, created_at e updated_at . Já na tabela orders_products, você deve armazenar o product_id, order_id, price e quantity, created_at e updated_at.

Enviar:
```
{
    "costumer_id": "5ea2492c-c93f-4d48-93f1-1e871cee3149",
    "products": [
        {
            "id": "9cc91df5-cf30-47e9-894f-93e8712d820c",
            "quantity": 1
        },
        {
            "id": "e0096c7f-f66d-4786-a738-1611065ad169",
            "quantity": 5
        }
    ]
}
```
Retorna:
```
{
    "customer": {
        "id": "5ea2492c-c93f-4d48-93f1-1e871cee3149",
        "name": "João Mangueira",
        "email": "joao1@joao.com",
        "created_at": "2020-12-09T04:34:05.752Z",
        "updated_at": "2020-12-09T04:34:05.752Z"
    },
    "order_products": [
        {
            "product_id": "9cc91df5-cf30-47e9-894f-93e8712d820c",
            "price": "39.98",
            "quantity": 1,
            "order_id": "62902eaa-e908-4e11-9fcc-89b575d0082c",
            "id": "64b21779-69a4-4ae0-8684-696b1d0588d9",
            "created_at": "2020-12-09T04:36:19.718Z",
            "updated_at": "2020-12-09T04:36:19.718Z"
        },
        {
            "product_id": "e0096c7f-f66d-4786-a738-1611065ad169",
            "price": "39.98",
            "quantity": 5,
            "order_id": "62902eaa-e908-4e11-9fcc-89b575d0082c",
            "id": "08f40368-cae8-48f3-9a06-962f66c448c7",
            "created_at": "2020-12-09T04:36:19.718Z",
            "updated_at": "2020-12-09T04:36:19.718Z"
        }
    ],
    "id": "62902eaa-e908-4e11-9fcc-89b575d0082c",
    "created_at": "2020-12-09T04:36:19.718Z",
    "updated_at": "2020-12-09T04:36:19.718Z"
}
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT.
