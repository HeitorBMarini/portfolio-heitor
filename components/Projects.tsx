import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Section, Reveal, Tag } from "@/components/Section";
import { Spotlight } from "@/components/Spotlight";
import { LivePreview } from "@/components/LivePreview";

type Project = {
  slug: string;
  name: string;
  kind: string;
  tagline: string;
  about: string;
  delivered: string[];
  tech: string[];
  github?: string;
  url?: string;
  /** Página local exibida como miniatura ao vivo no card */
  preview?: string;
  urlLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "painel-saas",
    name: "Painel SaaS",
    kind: "Protótipo próprio · demo interativa",
    tagline: "Um painel SaaS de gestão financeira, feito do zero, a partir de problemas que já resolvi no dia a dia.",
    about:
      "Depois de um tempo mexendo com automação financeira, juntei o que aprendi num protótipo: conciliação bancária automática, boletos, fluxo de caixa e faturamento por cliente e segmento, numa interface que qualquer negócio pode usar. Com menos módulos, serve até para controle financeiro pessoal. Todos os dados são fictícios.",
    delivered: [
      "Conciliação bancária por conta, separando o que bateu, o que ficou ambíguo e o que não tem correspondência.",
      "Emissão e acompanhamento de boletos, faturamento por cliente e segmento e contas a pagar.",
      "Fluxo de caixa projetado e indicadores de carteira e prazo médio de recebimento.",
      "Gráficos e indicadores animados, sem números \"mortos\" na tela.",
      "Busca e filtros em tempo real nas tabelas, e modo claro e escuro completo.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "SVG"],
    url: "/demos/painel-saas.html",
    urlLabel: "Abrir a demo",
    preview: "/demos/painel-saas.html",
  },
  {
    slug: "safed",
    name: "SafeD",
    kind: "Site para cliente",
    tagline: "Site institucional rápido, acessível e com animações suaves.",
    about:
      "A SafeD precisava de uma presença online que passasse confiança e carregasse rápido em qualquer aparelho.",
    delivered: [
      "Layout responsivo do zero, com seções animadas por Framer Motion.",
      "Atenção a acessibilidade e performance: imagens otimizadas e renderização no servidor.",
      "Deploy contínuo na Vercel a cada push.",
    ],
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/HeitorBMarini/safed-site",
    url: "https://safed-site.vercel.app",
  },
  {
    slug: "lepseg",
    name: "Lepseg",
    kind: "Site para cliente",
    tagline: "Plataforma web com várias seções e conteúdo institucional.",
    about:
      "Site completo para apresentar a empresa, seus serviços e canais de contato numa navegação única.",
    delivered: [
      "Interface responsiva com múltiplas seções e componentes reaproveitáveis.",
      "Tipagem de ponta a ponta com TypeScript.",
      "Publicado em produção na Vercel.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/HeitorBMarini/lepseg",
    url: "https://lepseg.vercel.app",
  },
  {
    slug: "souza-martins",
    name: "Souza Martins",
    kind: "Site para cliente",
    tagline: "Site institucional moderno, com animações e várias seções.",
    about:
      "Presença digital para o escritório, com foco em apresentar serviços de forma clara.",
    delivered: [
      "Interface moderna e responsiva em Next.js.",
      "Animações de entrada e navegação por seções.",
      "Em produção.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/HeitorBMarini/souza-martins",
  },
  {
    slug: "weather",
    name: "Weather App",
    kind: "Projeto pessoal",
    tagline: "Previsão do tempo em tempo real por cidade.",
    about:
      "Consulta uma API de clima e mostra temperatura, umidade e condições atuais da cidade buscada.",
    delivered: [
      "Consumo da API OpenWeather com tratamento de erro para cidades inexistentes.",
      "Interface simples, focada na leitura rápida dos dados.",
    ],
    tech: ["Next.js", "TypeScript", "OpenWeather API"],
    github: "https://github.com/HeitorBMarini/weather-app",
    url: "https://weather-app-git-dev-heitorbmarinis-projects.vercel.app",
  },
  {
    slug: "busca-cep",
    name: "Busca CEP",
    kind: "Open source",
    tagline: "Endereço completo a partir do CEP, com validação.",
    about:
      "Ferramenta pequena e direta que consulta a ViaCEP e devolve o endereço completo.",
    delivered: [
      "Validação do formato do CEP antes de chamar a API.",
      "Mensagens claras para CEP inválido ou não encontrado.",
    ],
    tech: ["React", "TypeScript", "ViaCEP API"],
    github: "https://github.com/HeitorBMarini/busca-cep",
    url: "https://busca-cep-steel.vercel.app",
  },
];

function addressOf(p: Project) {
  const target = p.url ?? p.github ?? "";
  if (target.startsWith("/")) return "portfolio" + target;
  const u = new URL(target);
  return p.url ? u.host : u.host + u.pathname;
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projetos"
      title={
        <>
          Produto, sites para clientes e <em className="text-accent">projetos próprios.</em>
        </>
      }
      intro="Todos publicados. O Painel SaaS é uma demo com dados fictícios: dá para clicar e explorar."
    >
      {/* Índice */}
      <Reveal>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden mb-16">
          {projects.map((p, i) => (
            <li key={p.slug} className="bg-bg">
              <a
                href={`#project-${p.slug}`}
                className="group block h-full p-5 hover:bg-surface transition-colors"
              >
                <span className="font-mono text-xs text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-xl text-fg mt-2 group-hover:text-accent transition-colors">
                  {p.name}
                </p>
                <p className="text-xs text-muted mt-1 leading-relaxed">{p.kind}</p>
              </a>
            </li>
          ))}
        </ol>
      </Reveal>

      <div className="space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.slug}>
            <Spotlight
              id={`project-${p.slug}`}
              className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-14 rounded-2xl border border-line bg-surface p-6 md:p-10"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-8 bg-line" />
                  <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-faint">
                    {p.kind}
                  </span>
                </div>
                <h3 className="font-serif text-4xl md:text-5xl text-fg leading-none mb-4">
                  {p.name}
                </h3>
                <p className="text-lg text-fg/85 leading-snug mb-8">{p.tagline}</p>

                {/* Janela de navegador estilizada */}
                <div className="rounded-xl border border-line bg-bg overflow-hidden mt-auto">
                  <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-line">
                    <span className="w-2.5 h-2.5 rounded-full bg-line" />
                    <span className="w-2.5 h-2.5 rounded-full bg-line" />
                    <span className="w-2.5 h-2.5 rounded-full bg-line" />
                    <span className="ml-3 truncate font-mono text-[11px] text-faint">
                      {addressOf(p)}
                    </span>
                  </div>
                  {p.preview && (
                    <a
                      href={p.url ?? p.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/preview relative block border-b border-line"
                    >
                      <LivePreview src={p.preview} title={`Prévia de ${p.name}`} />
                      <span className="absolute inset-0 grid place-items-center bg-bg/0 group-hover/preview:bg-bg/60 transition-colors">
                        <span className="opacity-0 group-hover/preview:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-accent-fg text-sm font-semibold">
                          Explorar a demo
                          <ArrowUpRight size={14} />
                        </span>
                      </span>
                      <span className="sr-only">Abrir a demo de {p.name} (abre em nova aba)</span>
                    </a>
                  )}
                  <div className="flex flex-wrap gap-3 p-4">
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-accent-fg text-sm font-semibold hover:brightness-110 transition"
                      >
                        {p.urlLabel ?? "Visitar o site"}
                        <ArrowUpRight size={14} />
                        <span className="sr-only">{p.name} (abre em nova aba)</span>
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-line text-fg text-sm font-semibold hover:border-accent/60 transition-colors"
                      >
                        <GithubIcon size={14} />
                        Código
                        <span className="sr-only">de {p.name} no GitHub (abre em nova aba)</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-7">
                <div>
                  <h4 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-faint mb-2">
                    O contexto
                  </h4>
                  <p className="text-muted leading-relaxed">{p.about}</p>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-faint mb-3">
                    O que entreguei
                  </h4>
                  <ul className="space-y-2.5">
                    {p.delivered.map((d) => (
                      <li key={d} className="flex gap-3 text-muted leading-relaxed">
                        <span aria-hidden className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-faint mb-3">
                    Tecnologias
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <a
          href="https://github.com/HeitorBMarini"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
        >
          Ver todos os 68+ repositórios no GitHub
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </Reveal>
    </Section>
  );
}
