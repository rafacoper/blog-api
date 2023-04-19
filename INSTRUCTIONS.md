# BANCO DE DADOS MYSQL
* MYSQL_USER=root
* MYSQL_PASSWORD=MlRl*1986#
* HOSTNAME=localhost

npm init

npm install sequelize

# No MySQLQ criar as tabela:
CREATE DATABASE IF NOT EXISTS orm_example;

# Gerar e executar as operações:
npm install --save-dev sequelize-cli

# Para usarmos o MySQL com o sequelize:
npm install mysql2 

# Iniciar um projeto com as pastas CONFIG, MODELS, MIGRATIONS, SEEDERS:
npx sequelize-cli init

/////////////////////////////////////////////////////////////////////////
[------------RESUMO--------------------]
npm init -y

npm i express nodemon sequelize mysql2

npm i -D sequelize-cli

npx sequelize-cli init
[--------------------------------------]

# No config.json : alterar de acordo com as informações do usuário:
"development": {
"username": "root",
"password": "",
"database": "orm_example",
"host": "127.0.0.1",
"dialect": "mysql",
"operatorsAliases": false
}

# Criar uma tabela: users
npx sequelize migration:generate --name create-users

# Após criar a migration, criar as tabelas:
npx sequelize db:migrate

# Para desfazer:
npx sequelize db:migrate:undo

# Dropar as tabelas:
npx sequelize db:migrate:undo:users

# Seeder - usado para alimentar o banco de dados com informações necessárias para funcionamento mínimo da aplicação.
npx sequelize seed:generate --name [model_name]

# Comando para executar os seeders:
npx sequelize db:seed:all (cria as tabelas)
npx sequelize db:seed:undo:all

* * * Criar a tabela no banco de dados junto à model. => Se já tiver criado a migration não usar essa operação!!!
npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string

# Managed transactions #

Os métodos de criação de associações que o sequelize disponibiliza são:
* hasOne
* belongsTo
* hasMany
* belongsToMany
