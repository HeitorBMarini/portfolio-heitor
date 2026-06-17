"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, GraduationCap, Code2, Briefcase } from "lucide-react";

const facts = [
  { icon: MapPin, text: "São Paulo, Brasil" },
  { icon: GraduationCap, text: "Análise e Desenvolvimento de Sistemas — FIAP" },
  { icon: Briefcase, text: "Full Stack Developer na Viba Holding" },
  { icon: Code2, text: "68+ repositórios públicos no GitHub" },
];

export function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs text-blue-400 font-mono uppercase tracking-widest mb-5 block">
              // sobre mim
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-7 leading-tight">
              Transformando ideias em{" "}
              <em className="font-serif italic font-normal text-blue-400">
                código que funciona.
              </em>
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed text-[15px]">
              <p>
                Sou Full Stack Developer com experiência em construir sistemas
                completos — de interfaces modernas a APIs robustas e integrações
                complexas com ERPs e CRMs.
              </p>
              <p>
                Trabalho com <span className="text-slate-200">Next.js</span>,{" "}
                <span className="text-slate-200">React</span>,{" "}
                <span className="text-slate-200">TypeScript</span> e{" "}
                <span className="text-slate-200">Node.js</span> no dia a dia,
                com foco em código limpo, performance e entrega de valor real
                para o negócio.
              </p>
              <p>
                Atualmente construo e mantenho o ecossistema digital da Viba
                Holding, incluindo portais B2B, sistemas de automação de vendas
                e integrações com Sankhya ERP e Bitrix24 CRM.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              {facts.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 text-sm text-slate-500"
                >
                  <Icon size={14} className="text-blue-400 shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl border border-blue-500/10" />
              <div className="absolute -inset-7 rounded-3xl border border-slate-800/40" />

              <div className="relative w-72 h-72 md:w-[340px] md:h-[340px] rounded-2xl overflow-hidden">
                <Image
                  src="https://avatars.githubusercontent.com/u/123084599?v=4"
                  alt="Heitor Borba Marini"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070f]/30 to-transparent" />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
