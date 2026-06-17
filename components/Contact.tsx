"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const links = [
  {
    Icon: Mail,
    label: "heitor.marini07@gmail.com",
    desc: "E-mail",
    href: "mailto:heitor.marini07@gmail.com",
  },
  {
    Icon: GithubIcon,
    label: "HeitorBMarini",
    desc: "GitHub",
    href: "https://github.com/HeitorBMarini",
  },
  {
    Icon: LinkedinIcon,
    label: "heitor-borba-marini",
    desc: "LinkedIn",
    href: "https://www.linkedin.com/in/heitor-borba-marini/",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs text-blue-400 font-mono uppercase tracking-widest mb-5 block">
              // contato
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Vamos trabalhar{" "}
              <em className="font-serif italic font-normal text-blue-400">
                juntos?
              </em>
            </h2>
            <p className="text-slate-400 leading-relaxed text-[15px]">
              Estou disponível para projetos freelance, oportunidades full-time
              e parcerias. Entre em contato e vamos conversar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            {links.map(({ Icon, label, desc, href }, i) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="group flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-800/60 hover:border-blue-500/30 hover:bg-slate-900/80 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors shrink-0">
                    <Icon
                      size={17}
                      className="text-slate-400 group-hover:text-blue-400 transition-colors"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-600 mb-0.5 font-mono">{desc}</p>
                    <p className="text-sm text-slate-200 font-medium">{label}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-slate-700 group-hover:text-slate-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
