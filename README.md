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

- **Hero em Three.js** — esfera de partículas com ruído 3D no shader, que respira e inclina seguindo o mouse (pausa fora da tela e respeita `prefers-reduced-motion`)
- **Experiência** — o trabalho na Viba Holding descrito por entregas reais
- **Projetos como estudo de caso** — índice numerado + contexto, o que entreguei e tecnologias
- **Tecnologias "onde usei"** — filtro por Viba, clientes e projetos pessoais, com as principais marcadas
- **Tema claro e escuro** — preto e azul, sem piscar no carregamento
- **Detalhes** — nome revelado por máscara, barra de progresso de rolagem, spotlight que segue o cursor nos cards

## 🛠 Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| Estilização | Tailwind CSS v4 (tokens em CSS vars) |
| 3D | Three.js (shader próprio) |
| Animações | Framer Motion |
| Tipografia | DM Serif Display + Manrope |
| Deploy | Vercel |

## 📁 Estrutura

```
components/
├── Navbar.tsx       # Navbar fixa, tema e progresso de rolagem
├── Hero.tsx         # Apresentação + cena 3D
├── HeroScene.tsx    # Three.js: esfera de partículas
├── About.tsx        # Bio + foto
├── Experience.tsx   # Linha do tempo profissional
├── Projects.tsx     # Estudos de caso
├── Skills.tsx       # Tecnologias com filtro "onde usei"
├── Contact.tsx      # E-mail com copiar + redes
├── Section.tsx      # Section/Reveal/Tag compartilhados
├── Spotlight.tsx    # Card com brilho que segue o cursor
└── Footer.tsx
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
