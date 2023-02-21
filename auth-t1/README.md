This is a [Next.js](https://nextjs.org/) project.

## Começo

Executar o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Acessar em [http://localhost:3000](http://localhost:3000).

## Autenticação

Esta seção descreve a estratégia de autenticação.

-  Uso de uma beckend para gerar um token de autenticação.
-  O objetivo do token é proteger o acesso aos dados que estão presentes no backend.
-  Passos:

   -  Usuário enviar credenciais via formulário no _frontend_ e o _backend_ valida e devolve um o token
   -  O front armazena o cookie com o token e outras informações do usuário
   -  Um componene de contexto é criado para tornar as informações dos usuários disponíveis em várias partes da aplicação

-  Detalhes:

   -  Acesso a rota de autenticação. Neste caso utilizando 'axios' e organizando um arquivo `http.js` para gerenciar essa questão.
   -  A estratrégia para tornar os dados acessíveis em várias parte da aplicação é o padrão "Contexto" e "Provedor"
   -  Um componente de contexto é criado
   -  Esse componente é colocado em volta de todas as páginas no código principal da aplicação (`_app.js`)

-  Pacotes necessários:
   -  Nookies

## Mais sobre Next.js

Referências importantes:

-  [Next.js Documentation](https://nextjs.org/docs)
-  [Learn Next.js](https://nextjs.org/learn)

## Deploy

Uma forma simples de realizar o deploy é via [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Para mais detalhes ver [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Referências

-  [Configuração do CORS no Nest](https://docs.nestjs.com/security/cors)
-  [Ajuste do CORS: Autenticação com Next.js em 1:20:00](https://www.youtube.com/watch?v=ntnb1nsIpKw)
-  [React Authentication Crash Course With Firebase And Routing](https://www.youtube.com/watch?v=PKwu15ldZ7k)
-  [Next.js - Autenticação JWT com back-end próprio - Code/Drops #72](https://www.youtube.com/watch?v=pvrKHpXGO8E)
-  [The Net Ninja - Next.js Tutorial](https://www.youtube.com/watch?v=MJT_WXdSPjE&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=4)
