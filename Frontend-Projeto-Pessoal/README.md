# Front-end — Projeto Pessoal

Interface em **React + Vite** na porta **3000**, com proxy para a API Spring Boot na porta **8080**.

## Como rodar

1. Suba o backend (PostgreSQL + API):

   ```bash
   # na pasta Projeto-Pessoal (Maven)
   ./mvnw spring-boot:run
   ```

2. Instale e inicie o front:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. Acesse **http://localhost:3000**

- **/** — landing + painel (se estiver logado)
- **/login** — `POST /api/login` (form urlencoded: `login`, `password`) via proxy
- **/cadastro** — `POST /cadastro` com JSON (`UsuarioDTO`: `nome`, `login`, `senha`, `email`, `roles`)

## Produção

`npm run build` gera `frontend/dist/`. Você pode servir esses arquivos como estáticos no Spring ou atrás de um nginx.

## Observação de portas

O `application.yaml` da API usa **`server.port: 8080`** para não conflitar com o Vite na **3000**.
