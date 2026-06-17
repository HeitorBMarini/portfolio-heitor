<h1 align="center">heitor.dev — Portfólio Pessoal</h1>

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/123084599?v=4" width="96" style="border-radius:50%" alt="Heitor Borba Marini" />
</p>

<p align="center">
  <strong>Next.js 16 · Tailwind CSS v4 · Framer Motion · TypeScript</strong>
</p>

<p align="center">
  <a href="https://portfolio-heitor-mocha.vercel.app" target="_blank">🌐 Ver ao vivo</a>
  &nbsp;·&nbsp;
  <a href="https://www.linkedin.com/in/heitor-borba-marini/" target="_blank">💼 LinkedIn</a>
  &nbsp;·&nbsp;
  <a href="mailto:heitor.marini07@gmail.com">✉️ E-mail</a>
</p>

---

## ✨ Destaques

- **Hero animado** — orbs com blur em movimento, efeito typewriter ciclando entre roles e ícone `</>` com ring giratório
- **Stack interativa** — terminal estilo macOS com 7 categorias e badges animados por categoria
- **Projetos em destaque** — 5 cards clicáveis com status badge (LIVE / PROD / OPEN SOURCE)
- **Tipografia mista** — Geist Sans + Lora itálico nas headings para contraste editorial
- **100% responsivo** — layout adaptado para mobile, tablet e desktop
- **Dark theme** — paleta azul/índigo com orbs animados no fundo

## 🛠 Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| Estilização | Tailwind CSS v4 |
| Animações | Framer Motion |
| Tipografia | Geist Sans + Lora (Google Fonts) |
| Deploy | Vercel |
| Linguagem | TypeScript |

## 📁 Estrutura

```
portfolio-heitor/
├── app/
│   ├── layout.tsx       # Metadata SEO + fontes
│   ├── page.tsx         # Composição das seções
│   └── globals.css      # Tema dark + keyframes
└── components/
    ├── Navbar.tsx        # Navbar fixa com blur on scroll
    ├── Hero.tsx          # Fullscreen com orbs + typewriter
    ├── About.tsx         # Bio + foto
    ├── Stack.tsx         # Terminal interativo de tecnologias
    ├── Projects.tsx      # Grid de projetos em destaque
    ├── Contact.tsx       # Links de contato animados
    ├── Footer.tsx        # Rodapé
    └── icons.tsx         # SVGs de GitHub e LinkedIn
```

## 🚀 Rodando localmente

```bash
git clone https://github.com/HeitorBMarini/portfolio-heitor.git
cd portfolio-heitor
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

---

<p align="center">Desenvolvido por <strong>Heitor Borba Marini</strong> · São Paulo, Brasil</p>
