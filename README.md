# serverless-challenge

## ℹ Como usar
Para rodar essa aplicação, você vai precisar de [Git](https://git-scm.com/), [Nodejs](https://nodejs.org/en/) instalado no seu computador.

Dentro do seu terminal, digite:
``` bash
# Clonar o repositório
git clone https://github.com/Kattulel/serverless-challenge

# Instalar as dependências
npm i

# configurar credenciais aws no serverless
serverless config credentials --provider aws --key [key] --secret [secret]

# iniciar o deploy
serverless deploy
```
#### Ao finalizar o deploy, a aplicacao está pronta para uso. O serverless vai nos informar o endereço e endpoint das nossas lambdas.



##### Pode dar erro na primeira requisicao feita, mas é normal pois a tabela será criada.

#

## Rotas :

### Criação de Funcionario: 

POST /

body: 
```json 
{
	"nome": "Julio",
	"idade": 20,
	"cargo": "QA"
}
```

### Update de Funcionario: 

PUT /[id]

body:
```json 
{
	"nome": "Julio",
	"idade": 22,
	"cargo": "QA"
}
```

## Consulta de Funcionario:

GET /[id]


## Apagar Funcionário:

DELETE /[id]

