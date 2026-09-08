# No Barco com Jesus

Site oficial de vendas do livro **No Barco com Jesus — Da rejeição à paz que restaura o coração**, de Simone Leite.

## Desenvolvimento local

1. Duplique `.env.example` como `.env.local` e substitua os placeholders quando os dados reais estiverem disponíveis.
2. Instale as dependências com `pnpm install`.
3. Inicie o projeto com `pnpm dev`.
4. Gere a versão de produção com `pnpm build`.

O projeto não possui login, banco de dados, pagamento interno ou armazenamento de dados de clientes.

## Preparação para publicação

Antes de publicar, substitua todo conteúdo marcado com `[PLACEHOLDER]` e configure na Vercel as variáveis listadas em `.env.example`. O Meta Pixel é opcional e permanece desativado quando não recebe um ID numérico.

Execute `pnpm ready:check` para confirmar que domínio, descrição, imagem social, link da Amazon e conteúdo oficial foram preenchidos. Depois, execute `pnpm lint` e `pnpm build:vercel`.

## Publicação na Vercel

1. Envie o projeto para um repositório Git privado.
2. Importe o repositório na Vercel.
3. Cadastre as variáveis de ambiente do arquivo `.env.example` nos ambientes desejados.
4. Faça a primeira publicação. O projeto usa a configuração de `vercel.json` e gera automaticamente a saída compatível com a Vercel.
5. Em **Settings → Domains**, adicione o domínio definitivo e siga os registros DNS informados pela Vercel.
6. Atualize `NEXT_PUBLIC_SITE_URL` com o domínio definitivo, sem barra no final, e publique novamente para atualizar canonical, sitemap e metadados sociais.

O HTTPS é provisionado pela hospedagem após a validação do domínio. Não publique enquanto `pnpm ready:check` indicar pendências.
