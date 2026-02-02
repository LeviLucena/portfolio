# Portfolio Levi Lucena

Portfolio profissional com design **Brutalist** de alto contraste, desenvolvido com Astro.

**Live Demo:** [levilucena.github.io/portfolio](https://levilucena.github.io/portfolio/)

![Astro](https://img.shields.io/badge/Astro-5.14.1-FF5D01?style=flat-square&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## Visao Geral

Portfolio minimalista com estetica brutalist, focado em performance e experiencia do usuario. Features incluem seletor de temas dinamico, cursor customizado interativo e animacoes suaves.

## Tecnologias

| Categoria | Tecnologias |
|-----------|-------------|
| **Framework** | Astro 5.14.1 |
| **Estilizacao** | Tailwind CSS, CSS Custom Properties |
| **Fontes** | Anton (headings), Inter (body) |
| **Icones** | Font Awesome 6, Devicon |
| **Deploy** | GitHub Pages + GitHub Actions |

## Features

### Seletor de Temas
8 paletas de cores disponiveis com persistencia via localStorage:

| Tema | Accent Color |
|------|--------------|
| Acid | `#ccff00` (verde acido) |
| Cyber | `#00ffff` (ciano) |
| Neon | `#ff00ff` (magenta) |
| Fire | `#ff6600` (laranja) |
| Ocean | `#00bfff` (azul) |
| Sunset | `#ff4757` (vermelho coral) |
| Gold | `#ffd700` (dourado) |
| Mint | `#00ff7f` (verde menta) |

### Design Brutalist
- Alto contraste com backgrounds escuros
- Tipografia bold em uppercase
- Bordas retas sem border-radius
- Sombras em bloco (box-shadow offset)
- Efeitos hover com inversao de cores

### Interatividade
- Cursor customizado que reage a elementos hover
- Botao magnetico no hero
- Ticker animado com tecnologias
- Transicoes suaves entre paginas

## Estrutura do Projeto

```
portfolio/
├── src/
│   ├── layouts/
│   │   └── BrutalistLayout.astro    # Layout principal
│   ├── pages/
│   │   ├── index.astro              # Home
│   │   ├── about.astro              # Sobre + Tech Stack + Certificacoes
│   │   ├── projects.astro           # Projetos
│   │   ├── archive.astro            # Arquivo de posts
│   │   └── posts/
│   │       └── [slug].astro         # Posts dinamicos
│   ├── lib/
│   │   └── posts.js                 # Dados dos artigos
│   └── styles/
│       └── global.css               # Estilos globais
├── public/
│   └── fonts/                       # Fontes customizadas
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

## Paginas

### Home (`/`)
- Hero com nome e role
- Ticker animado de tecnologias
- Posts recentes em grid

### About (`/about`)
- Informacoes profissionais
- Formacao Academica
- Formacao Complementar (Harvard CS50)
- Tech Stack com icones (80+ tecnologias)
- Certificacoes Profissionais por provedor

### Projects (`/projects`)
- Grid de projetos destacados
- Cards com tecnologias e links
- CTA para GitHub

### Archive (`/archive`)
- Timeline de todos os artigos
- Filtros por categoria
- Numeracao regressiva

### Posts (`/posts/[slug]`)
- Layout completo para artigos
- Posts relacionados
- Card do autor

## Instalacao

```bash
# Clonar repositorio
git clone https://github.com/LeviLucena/portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Executar em desenvolvimento
npm run dev

# Build para producao
npm run build

# Preview do build
npm run preview
```

## Deploy

O deploy e automatico via GitHub Actions. A cada push na branch `main`, o workflow:

1. Faz checkout do codigo
2. Instala dependencias
3. Executa build do Astro
4. Deploy para GitHub Pages

## Customizacao

### Adicionar novo tema

Edite `src/layouts/BrutalistLayout.astro` e adicione:

```css
[data-theme="seu-tema"] {
  --bg-color: #000000;
  --text-color: #ffffff;
  --accent-color: #ff0000;
  --border-color: #333333;
}
```

### Adicionar tecnologia ao Tech Stack

Edite `src/pages/about.astro` no objeto `techStack`:

```javascript
{ name: 'NovaTech', icon: 'devicon-novatech-plain' }
```

### Adicionar certificacao

Edite `src/pages/about.astro` no objeto `certifications`.

## Contato

- **LinkedIn:** [linkedin.com/in/levilucena](https://www.linkedin.com/in/levilucena/)
- **GitHub:** [github.com/LeviLucena](https://github.com/LeviLucena)
- **Kaggle:** [kaggle.com/levilucena](https://www.kaggle.com/levilucena)
- **Amazon:** [E-books](https://www.amazon.com.br/s?i=digital-text&rh=p_27%3ALevi%2BLucena)

## Licenca

Este projeto esta sob a licenca MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por **Levi Lucena** | Design Brutalist
