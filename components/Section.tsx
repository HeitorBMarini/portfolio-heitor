"use client";

import { motion } from "framer-motion";

type Props = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, intro, children }: Props) {
  return (
    <section id={id} className="px-6 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            {eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.08] text-fg">
            {title}
          </h2>
          {intro && (
            <p className="mt-5 text-muted leading-relaxed text-[15px] md:text-base">
              {intro}
            </p>
          )}
        </motion.header>
        {children}
      </div>
    </section>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md border border-line bg-surface-2/60 text-xs text-muted">
      {children}
    </span>
  );
}
