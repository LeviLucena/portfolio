# Blog Pessoal de Levi Lucena

Bem-vindo ao meu blog pessoal profissional desenvolvido com Astro, um framework moderno para construção de websites estáticos rápidos e otimizados, inspirado no design minimalista do site errolm.dev.

## 🚀 Tecnologias Utilizadas

- [Astro](https://astro.build/) - Framework web para conteúdo estático
- [Martian Mono](https://github.com/evilmartians/mono) - Fonte tipográfica (adicionar arquivo woff2 na pasta public/fonts/)
- [Font Awesome](https://fontawesome.com/) - Biblioteca de ícones
- [Google Fonts](https://fonts.google.com/) - Fontes tipográficas de fallback

## ✨ Características

- Design minimalista e limpo inspirado em errolm.dev
- Navegação completa: Home, Archive, About, Projects
- Sistema de artigos completo com categorias e tags
- Página dedicada de projetos com todos os projetos profissionais detalhados
- Tecnologias organizadas por categorias com ícones representativos
- Design responsivo e moderno
- Tema claro/escuro alternável
- SEO otimizado
- Velocidade de carregamento otimizada
- Seções completas: 
  - Home (com artigos recentes)
  - About (com informações detalhadas e tecnologias)
  - Projects (com todos os projetos profissionais)
  - Archive (com todos os artigos)

## 📦 Estrutura do Projeto

```
/
├── src/
│   ├── layouts/
│   │   └── BlogLayout.astro
│   ├── pages/
│   │   ├── index.astro (página inicial)
│   │   ├── about.astro (página sobre)
│   │   ├── archive.astro (página de arquivo)
│   │   ├── projects.astro (página de projetos)
│   │   └── posts/[slug].astro (posts individuais)
│   ├── styles/
│   │   └── global.css
│   └── lib/
│       └── posts.js (dados dos posts)
└── public/
    ├── Certificados/ (subdiretórios com certificações)
    └── fonts/ (pasta para armazenar a fonte martian-mono.woff2)
```

## 🔧 Como Executar Localmente

1. Clone este repositório
2. Instale as dependências: `npm install`
3. Execute em modo de desenvolvimento: `npm run dev`
4. Acesse `http://localhost:4321` no seu navegador

## 🚀 Implantação no GitHub Pages

1. Faça o build do projeto: `npm run build`
2. O diretório `dist/` gerado contém os arquivos estáticos prontos para deploy
3. Configure o GitHub Pages para usar a branch `gh-pages` ou a pasta `/docs` no repositório

### Configuração automática com GitHub Actions (recomendado)

Crie um workflow em `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

env:
  PUBLIC_BASE_URL: '/'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Upload Artifacts
        uses: actions/upload-pages-artifact@v1
        with:
          path: 'dist'

  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v1
```

## 📁 Organização de Certificados

Os certificados estão organizados em subpastas dentro de `public/Certificados/`:
- `Certiprof/`
- `Cisco/`
- `Fortinet/`
- `IBM/`
- `Microsoft/`
- `Oracle/`
- `Senai/`

## 🎯 Seções do Blog

1. **Home** - Página inicial com artigos recentes e introdução pessoal
2. **Archive** - Arquivo completo com todos os artigos organizados por data
3. **About** - Informações detalhadas sobre formação acadêmica, habilidades técnicas organizadas por categorias e tecnologias
4. **Projects** - Página dedicada exclusivamente a todos os projetos profissionais com descrições completas, tecnologias utilizadas, áreas de atuação e status
5. **Posts Individuais** - Páginas para cada artigo com conteúdo detalhado e formatação rica

## 🌙 Tema Escuro

O portfolio inclui uma opção de tema claro/escuro que pode ser alternada pelo botão no cabeçalho.

## 📞 Contato

- Email: sr_lucen@yahoo.com.br
- LinkedIn: https://www.linkedin.com/in/levilucena/
- GitHub: https://github.com/LeviLucena