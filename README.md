
<h1 align="center">Minhas Tarefas (To‑Do List)</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React Badge"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript Badge"/>
  <img src="https://img.shields.io/badge/Redux%20Toolkit-1-764ABC?logo=redux&logoColor=white" alt="Redux Toolkit Badge"/>
  <img src="https://img.shields.io/badge/Styled--Components-6-DB7093?logo=styledcomponents&logoColor=white" alt="Styled Components Badge"/>
  <img src="https://img.shields.io/badge/Create%20React%20App-5-09D3AC?logo=createreactapp&logoColor=white" alt="CRA Badge"/>
</p>

<h3 align="left">Aplicação de lista de tarefas construída com React, TypeScript, Redux Toolkit e Styled Components.</h3>

###

<h2 align="left">Sobre o projeto</h2>



<h4 align="left">Este projeto implementa uma lista de tarefas simples, com estados globais via Redux Toolkit. É um exercício prático focado em boas práticas de organização de pastas, tipagem com TypeScript e estilização com Styled Components.</h4>

###

<h2 align="left">Funcionalidades</h2>



<h4 align="left">- Adicionar tarefas (estado inicial com exemplos)<br>- Listar tarefas com título, prioridade e status<br>- Editar descrição (UI preparada)<br>- Remover tarefas<br>- Estado global com Redux Toolkit</h4>

###

<h2 align="left">Stack e bibliotecas</h2>



<h4 align="left">- React 18 + TypeScript<br>- Redux Toolkit (`@reduxjs/toolkit`) e React Redux<br>- Styled Components 6<br>- Create React App (react-scripts)</h4>


<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="30" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="30" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height="30" alt="redux logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" height="30" alt="eslint logo"  />
</div>

###

<h2 align="left">Estrutura do projeto</h2>



<h4 align="left">minhas-tarefas/<br>├─ public/<br>├─ src/<br>│  ├─ components/<br>│  │  └─ Tarefas/           # Card de tarefa (UI)<br>│  ├─ containers/<br>│  │  └─ ListaDeTarefas/    # Lista que consome o estado global<br>│  ├─ models/<br>│  │  └─ Tarefa.ts          # Classe/Tipo de Tarefa<br>│  ├─ store/<br>│  │  ├─ reducers/<br>│  │  │  └─ tarefas.ts      # Slice do Redux Toolkit<br>│  │  └─ index.tsx          # Configuração da store<br>│  ├─ styles/               # Estilos globais e variáveis<br>│  └─ utils/enums/Tarefa.ts # Enums de prioridade e status<br>└─ README.md</h4>

###

<h2 align="left">Como rodar</h2>



<h4 align="left">Pré‑requisitos: Node.js LTS e npm.<br><br>1) Instale as dependências<br><br>```powershell<br>cd "c:\EBAC\Projeto 1\minhas-tarefas"<br>npm install<br>```<br><br>2) Ambiente de desenvolvimento<br><br>```powershell<br>npm start<br>```<br><br>Acesse http://localhost:3000.<br><br>3) Build de produção<br><br>```powershell<br>npm run build<br>```<br><br>Os artefatos ficarão em `build/`.</h4>

###

<h2 align="left">Convenções de código</h2>



<h4 align="left">- Imports relativos com paths consistentes (casing correto)<br>- Redux Toolkit para reducers e actions (slices)<br>- Tipagem explícita com TypeScript</h4>

###

<h2 align="left">Próximos passos (ideias)</h2>



<h4 align="left">- Persistência (ex.: localStorage)<br>- Filtros por status e prioridade<br>- Edição completa do card (título, status, prioridade)</h4>

###

<h3 align="left">Licença<br><br>Uso educacional. Sem licença específica.</h3>

###
