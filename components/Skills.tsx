"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";

type Where = "Viba" | "DW" | "Vanguard" | "Clientes" | "Pessoais";

type Skill = {
  name: string;
  main?: boolean;
  where: Where[];
};

type Group = { title: string; skills: Skill[] };

const WHERE_LABEL: Record<Where, string> = {
  Viba: "ViBA Holding",
  DW: "Doutores da Web",
  Vanguard: "Sistema Vanguard",
  Clientes: "Sites para clientes",
  Pessoais: "Projetos pessoais",
};

const groups: Group[] = [
  {
    title: "Frontend e mobile",
    skills: [
      { name: "Next.js", main: true, where: ["Viba", "Clientes", "Pessoais"] },
      { name: "React", main: true, where: ["Viba", "Vanguard", "Clientes", "Pessoais"] },
      { name: "TypeScript", main: true, where: ["Clientes", "Pessoais"] },
      { name: "JavaScript", where: ["DW", "Vanguard", "Pessoais"] },
      { name: "HTML e CSS", where: ["DW", "Vanguard", "Clientes", "Pessoais"] },
      { name: "SEO", where: ["DW", "Clientes"] },
      { name: "React Native", main: true, where: ["Viba", "Pessoais"] },
      { name: "Expo e Expo Router", where: ["Viba", "Pessoais"] },
      { name: "NativeWind", where: ["Viba", "Pessoais"] },
      { name: "Tailwind CSS", where: ["Clientes", "Pessoais"] },
      { name: "Framer Motion", where: ["Clientes", "Pessoais"] },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", main: true, where: ["Viba", "Vanguard"] },
      { name: "Microsserviços", where: ["Viba"] },
      { name: "APIs REST", where: ["Viba", "Vanguard", "Pessoais"] },
      { name: "PHP", where: ["DW", "Vanguard"] },
      { name: "Python", where: ["Vanguard"] },
      { name: "Java / Spring Boot", where: [] },
    ],
  },
  {
    title: "Dados e integrações",
    skills: [
      { name: "SQL Server", main: true, where: ["Viba"] },
      { name: "SQL", where: ["Viba", "DW", "Vanguard"] },
      { name: "Sankhya ERP", main: true, where: ["Viba"] },
      { name: "Bitrix24 CRM", main: true, where: ["Viba"] },
      { name: "Análise de dados e dashboards", where: ["Vanguard"] },
      { name: "MySQL / PostgreSQL", where: [] },
    ],
  },
  {
    title: "Infraestrutura e operação",
    skills: [
      { name: "Linux (Oracle Linux, Ubuntu)", main: true, where: ["Viba"] },
      { name: "Azure", where: ["Viba"] },
      { name: "Grafana", main: true, where: ["Viba", "Vanguard"] },
      { name: "Prometheus", where: ["Viba"] },
      { name: "PM2 e cron jobs", where: ["Viba"] },
      { name: "WildFly", where: ["Viba"] },
      { name: "GLPI (helpdesk e SLA)", where: ["Viba"] },
      { name: "Vercel", where: ["Clientes", "Pessoais"] },
      { name: "Git e GitHub", where: ["Viba", "Clientes", "Pessoais"] },
    ],
  },
];

const filters: ("Tudo" | Where)[] = ["Tudo", "Viba", "DW", "Vanguard", "Clientes", "Pessoais"];

export function Skills() {
  const [filter, setFilter] = useState<"Tudo" | Where>("Tudo");

  const visible = groups
    .map((g) => ({
      ...g,
      skills: filter === "Tudo" ? g.skills : g.skills.filter((s) => s.where.includes(filter)),
    }))
    .filter((g) => g.skills.length > 0);

  return (
    <Section
      id="skills"
      eyebrow="Tecnologias"
      title={
        <>
          O que uso, <em className="text-accent">e onde usei.</em>
        </>
      }
      intro="Organizado por área. Cada tecnologia mostra onde aparece no meu trabalho; as marcadas como principais são a base do que faço hoje."
    >
      <div role="group" aria-label="Filtrar por onde usei" className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={`px-4 py-2 rounded-full text-sm border transition-colors cursor-pointer ${
                active
                  ? "bg-fg text-bg border-fg"
                  : "border-line text-muted hover:text-fg hover:border-accent/50"
              }`}
            >
              {f === "Tudo" ? "Tudo" : WHERE_LABEL[f]}
            </button>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
        <AnimatePresence mode="popLayout">
          {visible.map((g) => (
            <motion.div
              key={g.title}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-serif text-2xl text-fg mb-4">{g.title}</h3>
              <ul className="border-t border-line">
                {g.skills.map((s) => (
                  <li
                    key={s.name}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3.5 border-b border-line"
                  >
                    <span className="flex items-center gap-2.5 text-fg">
                      {s.name}
                      {s.main && (
                        <span className="text-[10px] font-semibold tracking-[0.15em] uppercase px-2 py-0.5 rounded bg-accent-soft text-accent">
                          Principal
                        </span>
                      )}
                    </span>
                    <span className="text-xs text-faint">
                      {s.where.length
                        ? s.where.map((w) => WHERE_LABEL[w]).join(" · ")
                        : "Experiência geral"}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
