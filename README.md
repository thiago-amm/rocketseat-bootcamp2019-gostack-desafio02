# Rocketseat

## Bootcamp 2019 - GoStack

### Desafio 02

#### 1. Criar o projeto

    mkdir meetapp
    cd meetapp
    yarn init -y

#### 2. Instalar dependências

    yarn add express
    yarn add nodemon sucrase -D

#### 3. ESLint + Prettier + EditorConfig

    Instalar o ESLint (validador de regras de codificação)

    yarn add eslint -D

    yarn eslint --init

    Instalar plugin do ESlint no VSCode

    Adicionar no settings.json:

        "eslint.autoFixOnSave": true,
        "eslint.validate": [
            {
                "language": "javascript",
                "autoFix": true
            },
            {
                "language": "javascriptreact",
                "autoFix": true
            },
            {
                "language": "typescript",
                "autoFix": true
            },
            {
                "language": "typescriptreact",
                "autoFix": true
            }
        ]

    Editar regras de validação no .eslintrc.js adicionando:

        "class-methods-use-this": "off"
        "no-param-reassign": "off"
        "camelcase": "off"
        "no-unused-vars": ["error": { "argsIgnorePattern": "next" }]

    Instalar Prettier (formatador de código)

        yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

        Editar .eslintrc.js

            adicionar extends: ['airbnb-base', 'prettier']

            plugins: ['prettier']

            adicionar em rules "prettier/prettier": "error" para que
            erros do Prettier possam ser usados pelo ESLint advertir o
            programador.

        Criar arquivo .prettierrc afim de resolver conflitos de regras
        duplicadas entre o AirBNB e o Prettier como o uso ou não de aspas
        simples ou duplas.

        Definir como conteúdo de .prettierrc:
            {
                "singleQuote": true,
                "trailingComma": "es5"
            }

    Definir no ESLint fixing automático em vários arquivos de um diretório
        yarn eslint --fix src --ext .js

    Instalação do plugin EditorConfig no VSCode
    O EditorConfig estabelece um conjunto de regras homogêneas e centralizadas
    afim de configurar diversos editores de código diferentes.

        Criar o arquivo .editorconfig
        Adicionar conteúdo básico:
            root = true

            [*]
            ident_style = space
            ident_size = 2
            charset = utf-8
            trim_trailing_whitespace = true
            insert_final_newline = true

#### 4. Remover package-lock.json

    rm -f package-lock.json

#### 5. Atualizar dependências com Yarn

    yarn

#### 6. Criação de Container Docker para o Postgres

    docker run --name meetapp -e POSTGRES_PASSWORD=meetapp -p 5432:5432 -d postgres

#### 7. Instalar o Sequelize

    yarn add sequelize
    yarn add sequelize-cli -D

#### 8. Configurar o Sequelize

    8.1 Criar arquivo .sequelizerc no diretório do projeto (meetapp)
    8.2 Criar a configuração da conexão com o banco de dados.
        8.2.1 mkdir meetapp/src/config/database.js
            module.exports = {
                dialect: 'postgres',
                host: 'localhost',
                username: 'postgres',
                password: 'meetapp',
                database: 'meetapp',
                define: {
                    timestamps: true,
                    underscored: true,
                    underscoredAll: true,
                },
            };
    8.3 Criar diretório app/models no projeto
        8.3.1 mkdir meetapp/src/app/models
    8.4 Criar diretório database
        8.4.1 mkdir meetapp/src/database
    8.5 Criar diretório database/migrations
        8.5.1 mkdir meetapp/src/database/migrations

#### 9. Instalar o driver do Sequelize para conexão com o Postgres

    9.1 yarn add pg pg-hstore

#### 10. Criar a tabela de usuários da aplicação

    yarn sequelize migration:create --name=create-users

    10.1 Editar a migration create-users e definir a criação da tabela users
         com as colunas id (integer, not null, auto increment, primary key),
         name (string, not null),
         email (string, not null, unique),
         password_hash (string, not null),
         created_at (date, not null),
         updated_at (date, not null)

    10.2 Executar a migration create-users
        yarn sequelize db:migrate
#### 11. Instalar módulo para bcryptjs para gerar o hash das senhas
    yarn add bcryptjs

#### 12. Instalar módulo para suporte ao JWT
    yarn add jsonwebtoken
