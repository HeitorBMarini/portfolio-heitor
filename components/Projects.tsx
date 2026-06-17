"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

type Status = "LIVE" | "PROD" | "OPEN SOURCE";

type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  url?: string;
  status: Status;
};

const projects: Project[] = [
  {
    name: "SafeD Site",
    description:
      "Site institucional moderno para a SafeD. Next.js 15, Tailwind CSS e Framer Motion — foco em performance, acessibilidade e animações fluidas.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/HeitorBMarini/safed-site",
    url: "https://safed-site.vercel.app",
    status: "LIVE",
  },
  {
    name: "Lepseg",
    description:
      "Plataforma web completa desenvolvida em TypeScript e Next.js. Interface responsiva com múltiplas seções, deploy em produção na Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/HeitorBMarini/lepseg",
    url: "https://lepseg.vercel.app",
    status: "LIVE",
  },
  {
    name: "Weather App",
    description:
      "App de previsão do tempo em tempo real com TypeScript. Consome API de clima, exibe temperatura, umidade e condições por cidade.",
    tech: ["TypeScript", "Next.js", "API OpenWeather"],
    github: "https://github.com/HeitorBMarini/weather-app",
    url: "https://weather-app-git-dev-heitorbmarinis-projects.vercel.app",
    status: "LIVE",
  },
  {
    name: "Souza Martins",
    description:
      "Site institucional desenvolvido em TypeScript e Next.js. Interface moderna e responsiva com múltiplas seções, animações e deploy em produção.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/HeitorBMarini/souza-martins",
    status: "PROD",
  },
  {
    name: "Busca CEP",
    description:
      "Ferramenta de consulta de CEP com TypeScript e React. Integração com a API ViaCEP para retornar endereços completos com validação de entrada.",
    tech: ["TypeScript", "React", "ViaCEP API"],
    github: "https://github.com/HeitorBMarini/busca-cep",
    url: "https://busca-cep-steel.vercel.app",
    status: "OPEN SOURCE",
  },
];

const statusStyle: Record<Status, string> = {
  LIVE: "text-blue-400 bg-blue-400/8 border-blue-400/25",
  PROD: "text-indigo-400 bg-indigo-400/8 border-indigo-400/25",
  "OPEN SOURCE": "text-sky-400 bg-sky-400/8 border-sky-400/25",
};

export function Projects() {
  return (
    <section id="projects" className="py-28 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs text-blue-400 font-mono uppercase tracking-widest mb-5 block">
            // trabalhos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Projetos em{" "}
            <em className="font-serif italic font-normal text-blue-400">
              destaque.
            </em>
          </h2>
          <p className="text-slate-500 mt-3 text-[15px] max-w-lg">
            Uma seleção dos projetos mais relevantes que construí nos últimos anos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url ?? project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group p-6 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-blue-500/25 hover:bg-slate-900/60 transition-all duration-300 flex flex-col cursor-pointer${i === projects.length - 1 ? " lg:col-start-2" : ""}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span
                    className={`inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full border mb-3 ${statusStyle[project.status]}`}
                  >
                    {project.status}
                  </span>
                  <h3 className="text-base font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                </div>
                <div className="flex gap-3 shrink-0 mt-1">
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.github, "_blank"); }}
                    className="text-slate-600 hover:text-slate-300 transition-colors cursor-pointer"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={16} />
                  </button>
                  {project.url && (
                    <button
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.url, "_blank"); }}
                      className="text-slate-600 hover:text-slate-300 transition-colors cursor-pointer"
                      aria-label="Ver ao vivo"
                    >
                      <ExternalLink size={16} />
                    </button>
                  )}
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-400 text-xs border border-slate-700/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/HeitorBMarini"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-200 transition-colors group"
          >
            Ver todos os 68+ repositórios no GitHub
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
