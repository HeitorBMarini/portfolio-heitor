"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const HeroScene = dynamic(() => import("@/components/HeroScene"), { ssr: false });

const facts = [
  { label: "Agora", value: "Analista de Sistemas na ViBA Holding" },
  { label: "Stack principal", value: "Next.js · React · TypeScript · Node.js" },
  { label: "Formação", value: "ADS, FIAP" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

// Cada linha do nome sobe de dentro de uma máscara
function RevealLine({ children, delay }: { children: string; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center px-6 pt-28 pb-16 overflow-hidden">
      {/* Cena 3D */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.3 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 opacity-35 lg:opacity-100">
          <HeroScene />
        </div>
      </motion.div>

      {/* Grade sutil + vinheta para manter o texto legível */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--muted) 1px, transparent 1px), linear-gradient(90deg, var(--muted) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none bg-gradient-to-t from-bg to-transparent"
      />

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <motion.p
            {...fade(0)}
            className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-7"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
              <span className="relative w-2 h-2 rounded-full bg-accent" />
            </span>
            Desenvolvedor Full Stack · São Paulo
          </motion.p>

          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight text-fg mb-8">
            <RevealLine delay={0.1}>Heitor</RevealLine>
            <RevealLine delay={0.22}>Marini</RevealLine>
          </h1>

          <motion.p
            {...fade(0.45)}
            className="text-xl md:text-2xl leading-snug text-fg/90 max-w-xl mb-6 font-medium"
          >
            Construo portais, painéis e as integrações que ligam o ERP ao CRM:{" "}
            <span className="text-accent">do SQL à tela que a equipe usa todo dia.</span>
          </motion.p>

          <motion.p {...fade(0.55)} className="text-muted leading-relaxed max-w-xl mb-10">
            Desenvolvo aplicações web e mobile com{" "}
            <span className="text-fg">Next.js</span>,{" "}
            <span className="text-fg">React</span> e{" "}
            <span className="text-fg">Node.js</span>, integro sistemas via APIs
            REST, automatizo processos e crio soluções com{" "}
            <span className="text-fg">IA generativa</span>, com dados em SQL e
            monitoramento em tempo real.
          </motion.p>

          <motion.div {...fade(0.65)} className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-fg text-sm font-semibold hover:brightness-110 hover:-translate-y-0.5 transition"
            >
              Ver projetos
              <ArrowDown size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-line bg-bg/40 backdrop-blur text-fg text-sm font-semibold hover:border-accent/60 hover:-translate-y-0.5 transition"
            >
              <Mail size={15} />
              Falar comigo
            </a>
            <div className="flex items-center gap-1 ml-1">
              <a
                href="https://github.com/HeitorBMarini"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 grid place-items-center rounded-lg text-muted hover:text-fg hover:bg-surface transition-colors"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/heitor-borba-marini/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 grid place-items-center rounded-lg text-muted hover:text-fg hover:bg-surface transition-colors"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.dl
          {...fade(0.8)}
          className="mt-16 grid sm:grid-cols-3 gap-px max-w-3xl rounded-xl overflow-hidden border border-line bg-line"
        >
          {facts.map((f) => (
            <div key={f.label} className="bg-bg/80 backdrop-blur px-5 py-4">
              <dt className="text-[11px] font-semibold tracking-[0.18em] uppercase text-faint mb-1">
                {f.label}
              </dt>
              <dd className="text-sm text-fg">{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
