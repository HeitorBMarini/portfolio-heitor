"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = {
  key: string;
  label: string;
  dot: string;
  items: string[];
};

const categories: Category[] = [
  {
    key: "FRONT",
    label: "FRONT",
    dot: "bg-blue-400",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Angular", "Tailwind CSS", "Framer Motion", "Electron", "HTML / CSS"],
  },
  {
    key: "MOBILE",
    label: "MOBILE",
    dot: "bg-pink-400",
    items: ["React Native", "Expo", "Async Storage"],
  },
  {
    key: "BACK",
    label: "BACK",
    dot: "bg-emerald-400",
    items: ["Node.js", "Express", "Python", "Java", "Spring Boot", "PHP", "C#", "Flask", "WebSocket", "REST APIs"],
  },
  {
    key: "DB",
    label: "DB",
    dot: "bg-yellow-400",
    items: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    key: "INTEG",
    label: "INTEG",
    dot: "bg-orange-400",
    items: ["Sankhya ERP", "Bitrix24 CRM", "SMTP", "Webhooks", "Shopify / Liquid"],
  },
  {
    key: "DEVOPS",
    label: "DEVOPS",
    dot: "bg-cyan-400",
    items: ["Git", "Docker", "PM2", "Linux", "Vercel"],
  },
  {
    key: "TOOLS",
    label: "TOOLS",
    dot: "bg-violet-400",
    items: ["VS Code", "Figma", "Insomnia", "MobaXterm", "Notion"],
  },
];

export function Stack() {
  const [active, setActive] = useState("FRONT");
  const current = categories.find((c) => c.key === active)!;

  return (
    <section id="stack" className="py-28 px-6 border-t border-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="text-xs text-blue-400 font-mono uppercase tracking-widest mb-5 block">
            // stack & ferramentas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 leading-tight">
            O que uso para{" "}
            <em className="font-serif italic font-normal text-blue-400 not-italic">
              construir.
            </em>
          </h2>
          <p className="text-slate-500 mt-4 text-[15px] max-w-md mx-auto">
            Ferramentas e tecnologias que uso para tirar projetos do papel e
            colocar no ar.
          </p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden shadow-2xl shadow-blue-950/20"
        >
          {/* Terminal header */}
          <div className="px-5 py-3.5 border-b border-slate-800 flex items-center gap-4 bg-slate-900/60">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <p className="text-xs font-mono text-slate-500">
              heitor@portfolio ~ %{" "}
              <span className="text-slate-300">cat stack.json</span>
            </p>
            <span className="ml-auto text-xs font-mono text-slate-600">
              stack.json
            </span>
          </div>

          {/* Terminal body */}
          <div className="grid grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] min-h-[320px]">
            {/* Left: category tabs */}
            <div className="border-r border-slate-800 p-4 flex flex-col gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-mono text-left transition-all cursor-pointer ${
                    active === cat.key
                      ? "bg-blue-500/10 border border-blue-500/25 text-blue-400"
                      : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/40 border border-transparent"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${cat.dot} ${
                      active === cat.key ? "opacity-100" : "opacity-40"
                    }`}
                  />
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Right: badge grid */}
            <div className="p-6 md:p-8 flex items-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-wrap gap-3 content-start"
                >
                  {current.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700/60 bg-slate-800/50 text-slate-300 text-sm font-mono hover:border-blue-500/40 hover:text-blue-300 transition-colors cursor-default select-none"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${current.dot} opacity-70`}
                      />
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
