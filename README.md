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

#### 4. Remover package-lock.json

    rm -f package-lock.json

#### 5. Atualizar dependências com Yarn

    yarn
