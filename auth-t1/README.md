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

- Uso de uma beckend para gerar um token de autenticação.
- O objetivo do token é proteger o acesso aos dados que estão presentes no backend.
- Passos: 
  - Usuário enviar credenciais via formulário no _frontend_ e o _backend_ valida e devolve um o token.
  - O fronte armazena o cookie 

- Detalhes:
  - Acesso a rota de autenticação. Neste caso utilizando 'axios' e organizando um arquivo `http.js` para gerenciar essa questão.
  - A estratrégia para tornar os dados acessíveis em várias parte da aplicação é o padrão "Contexto" e "Provedor" 

- Pacotes necessários: 
  - Nookies 

## Mais sobre Next.js 

Referências importantes: 

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)


## Deploy  

Uma forma simples de realizar o deploy é via [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Para mais detalhes ver [Next.js deployment documentation](https://nextjs.org/docs/deployment).


## Referências 

* [Configuração do CORS no Nest](https://docs.nestjs.com/security/cors)
* [Ajuste do CORS: Autenticação com Next.js em  1:20:00](https://www.youtube.com/watch?v=ntnb1nsIpKw) 