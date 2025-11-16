# Projeto Vite + React

Esse repositório contém um pequeno projeto criado com Vite e React — um ponto de partida para desenvolver uma aplicação front-end com rotas e componentes.

Este README foi criado para documentar o propósito do projeto, listar as tecnologias utilizadas e explicar como rodar e estender a aplicação localmente.

## Estado atual do projeto

- Projeto inicial Vite + React com estrutura em `src/`.
- Rotas simples implementadas em `src/pages` (Home, Atividade, NotFound).
- ESLint presente (ver `eslint.config.js`).

Arquivos importantes:

- `index.html` — entrada da aplicação
- `src/main.jsx` — bootstrap do React
- `src/pages/` — páginas existentes (`Home.jsx`, `Atividade.jsx`, `NotFound.jsx`)
- `vite.config.js` — configuração do Vite

## Tecnologias / Stack

- Vite (dev server e build)
- React 19
- React Router (se usado) / roteamento baseado em componentes
- ESLint para linting

## Como rodar localmente (Windows / PowerShell)

1. Verifique se o Node está instalado (recomendado Node 18+):

```powershell
node -v
npm -v
```

2. Instale as dependências (no diretório do projeto):

```powershell
cd "D:\faculdade\Nova pasta\trabalho\vite-project"
npm install
```

3. Rode o servidor de desenvolvimento (HMR):

```powershell
npm run dev
```

Por padrão o Vite abre em `http://localhost:5173` (o terminal informa a porta se for diferente).

4. Build de produção e preview:

```powershell
npm run build
npm run preview
```

5. Rodar o lint:

```powershell
npm run lint
```

## Estrutura recomendada

- `src/pages/` — páginas da aplicação
- `src/components/` — componentes reutilizáveis
- `src/services/` — clientes HTTP (ex.: `api.js` com axios/fetch)
- `public/` — assets estáticos

## Adicionar CRUD (opções)

Se você precisa que a aplicação faça CRUD, há duas opções simples para testes locais:

1. Consumir uma API REST já existente — crie `src/services/api.js` e aponte para a URL da API (use axios ou fetch).

Exemplo (axios):

```js
// src/services/api.js
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3001",
});

export default api;
```

2. Rodar um backend falso com `json-server` (rápido para testes):

```powershell
npm i -g json-server
json-server --watch db.json --port 3001
```

Você pode adicionar um `db.json` com os recursos `tasks` e `users` para testar endpoints `GET/POST/PUT/DELETE`.

## Estilização (Tailwind)

Se quiser usar Tailwind CSS neste projeto, instale e configure:

```powershell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Adicione no CSS principal as diretivas:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Controle de versão

- Suba este projeto para um repositório no GitHub (se ainda não está lá).
- Use commits claros e pequenos (ex.: `feat: adicionar página de atividades`).
- Trabalhe por branches e abra PRs para features grandes.

## Entrega / README para avaliação

Para cumprir requisitos de avaliação, garanta:

1. A aplicação inicia com `npm run dev` sem erros.
2. O README descreve a stack, como rodar e o que a aplicação faz.
3. Demonstre (ou documente) o fluxo CRUD — mesmo que usando `json-server` ou dados fake.
4. Tenha commits no GitHub com mensagens claras.

## Próximos passos — eu posso fazer por você

- Gerar um `src/services/api.js` de exemplo (axios) e integrar chamadas básicas na `Home.jsx`.
- Adicionar um `db.json` e instruções/scripts para rodar `json-server` localmente.
- Integrar Tailwind e atualizar CSS para usar classes utilitárias.
- Criar um arquivo `LICENSE` (MIT) e exemplos de mensagens de commit.
