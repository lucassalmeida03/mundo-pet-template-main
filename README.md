📌 Projeto de Agendamento
Aplicação web para gerenciamento de agendamentos, desenvolvida com JavaScript, HTML semântico e CSS utilizando nesting.
O projeto conta com Webpack para empacotamento, Babel para compatibilidade de código e JSON Server para simular uma API REST.

🚀 Funcionalidades

📅 Agendar um atendimento

🔍 Filtrar agendamentos por data

❌ Remover agendamentos

🔄 Atualização em tempo real com consulta à API


🛠️ Tecnologias e Pacotes Utilizados

Front-end:

HTML5 (estruturação semântica)

CSS3 com nesting

JavaScript (ES6+)

dayjs para manipulação de datas


Empacotamento e Build:

webpack (webpack, webpack-cli, webpack-dev-server)

html-webpack-plugin

copy-webpack-plugin

css-loader e style-loader


Transpilação:

@babel/core

@babel/preset-env

babel-loader


Back-end Fake API:

json-server


📂 Instalação e Uso

# 1. Clonar o repositório
git clone https://github.com/lucassalmeida03/mundo-pet-template-main.git

# 2. Acessar a pasta do projeto
cd NOME_DO_REPOSITORIO

# 3. Instalar as dependências
npm install

▶️ Como rodar o projeto

1. Iniciar o servidor da API - 
npm run server


A API estará disponível, por padrão, em:

http://localhost:3333/schedules

2. Iniciar o servidor de desenvolvimento - 
npm run dev

o Webpack Dev Server já vai abrir a aba automaticamente.

💡 Importante:

A aplicação consome a API local, então mantenha o JSON Server rodando.
Caso a porta seja diferente, ajuste no código ou abra a URL correta da API.

