# zcinema-server-test

## Depedências para inicializar o projeto
* Postgres
* Node.js

Neste caso, usaremos o [yarn ](https://yarnpkg.com/) como gerenciador de pacotes do Node.js. Estamos assumindo <br/> que o Postgres esteja ativo na porta 5432 da máquina local ou container (Docker).
## Passo a passo
* No diretório raiz do projeto execute:
```
yarn
```

* Em seguida, criaremos o banco:
```
yarn sequelize db:create cinema-db

* Agora, executaremos as migrations:
```
yarn sequelize db:migrate

* Por fim, executaremos a aplicação:
```
yarn dev

Pronto! Aplicação deve estar rodando 100% agora.

