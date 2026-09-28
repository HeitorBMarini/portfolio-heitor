"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/Section";

const EMAIL = "heitor.marini07@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <section id="contact" className="px-6 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            Contato
          </p>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1] text-fg max-w-3xl">
            Tem um sistema para construir ou integrar?{" "}
            <em className="text-accent">Vamos conversar.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid md:grid-cols-[1.3fr_1fr] gap-6">
          <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-faint mb-3">
              E-mail
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="block font-serif text-2xl sm:text-3xl text-fg hover:text-accent transition-colors break-all"
            >
              {EMAIL}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-fg text-sm font-semibold hover:brightness-110 transition"
              >
                Enviar e-mail
                <ArrowUpRight size={15} />
              </a>
              <button
                onClick={copy}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-line text-fg text-sm font-semibold hover:border-accent/60 transition-colors cursor-pointer"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                <span aria-live="polite">{copied ? "Copiado" : "Copiar endereço"}</span>
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            {[
              { Icon: LinkedinIcon, label: "LinkedIn", handle: "heitor-borba-marini", href: "https://www.linkedin.com/in/heitor-borba-marini/" },
              { Icon: GithubIcon, label: "GitHub", handle: "HeitorBMarini", href: "https://github.com/HeitorBMarini" },
            ].map(({ Icon, label, handle, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-line bg-surface p-6 hover:border-accent/50 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <span className="w-11 h-11 grid place-items-center rounded-xl bg-surface-2 text-muted group-hover:text-accent transition-colors">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-faint">
                      {label}
                    </span>
                    <span className="block text-fg">{handle}</span>
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-faint group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
