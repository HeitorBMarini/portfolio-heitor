"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const ROLES = [
  "Full Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Node.js Developer",
  "TypeScript Dev",
];

function useTypewriter(texts: string[], typeSpeed = 72, deleteSpeed = 38, pause = 1800) {
  const [display, setDisplay] = useState("");
  const idxRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = texts[idxRef.current];

      if (!deletingRef.current) {
        if (charRef.current < current.length) {
          charRef.current++;
          setDisplay(current.slice(0, charRef.current));
          timer = setTimeout(tick, typeSpeed);
        } else {
          timer = setTimeout(() => {
            deletingRef.current = true;
            tick();
          }, pause);
        }
      } else {
        if (charRef.current > 0) {
          charRef.current--;
          setDisplay(current.slice(0, charRef.current));
          timer = setTimeout(tick, deleteSpeed);
        } else {
          deletingRef.current = false;
          idxRef.current = (idxRef.current + 1) % texts.length;
          timer = setTimeout(tick, typeSpeed);
        }
      }
    };

    timer = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return display;
}

export function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16">
      {/* ── Animated orbs ─────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[-5%] left-[-5%] w-[650px] h-[650px] rounded-full blur-[90px]"
          style={{ background: "rgba(59,130,246,0.38)" }}
          animate={{ x: [0, 50, -25, 0], y: [0, -70, 35, 0], scale: [1, 1.12, 0.94, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-5%] right-[-5%] w-[560px] h-[560px] rounded-full blur-[90px]"
          style={{ background: "rgba(99,102,241,0.32)" }}
          animate={{ x: [0, -55, 28, 0], y: [0, 55, -30, 0], scale: [1, 0.88, 1.1, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[35%] right-[10%] w-[320px] h-[320px] rounded-full blur-[80px]"
          style={{ background: "rgba(139,92,246,0.22)" }}
          animate={{ x: [0, 35, -18, 0], y: [0, -45, 22, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Content ───────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">

        {/* Animated icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-7 relative"
        >
          {/* Float wrapper */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Spinning gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              className="w-28 h-28 rounded-full p-[2px]"
              style={{
                background:
                  "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)",
              }}
            >
              <div className="w-full h-full rounded-full bg-[#07070f] flex items-center justify-center">
                <span
                  className="text-3xl font-mono font-bold"
                  style={{
                    background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {"</>"}
                </span>
              </div>
            </motion.div>

            {/* Glow under the ring */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-30 -z-10"
              style={{ background: "radial-gradient(circle, #3b82f6, #8b5cf6, transparent)" }}
            />

            {/* Floating tech badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute -top-3 -right-16 px-2.5 py-1 rounded-full bg-slate-900 border border-blue-500/30 text-blue-400 text-[10px] font-mono shadow-lg whitespace-nowrap"
            >
              TypeScript
            </motion.div>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute -bottom-2 -left-14 px-2.5 py-1 rounded-full bg-slate-900 border border-violet-500/30 text-violet-400 text-[10px] font-mono shadow-lg whitespace-nowrap"
            >
              Node.js
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute top-10 -left-16 px-2.5 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono shadow-lg whitespace-nowrap"
            >
              Next.js
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs text-blue-400 font-mono tracking-wide">
            Disponível para projetos
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-100 mb-5 leading-[1.08]"
        >
          Heitor Borba Marini
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38 }}
          className="mb-6 h-8 flex items-center justify-center"
        >
          <span className="text-lg md:text-xl text-blue-400 font-mono">
            {role}
            <span className="cursor-blink ml-0.5 text-blue-300">|</span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48 }}
          className="text-slate-400 max-w-md leading-relaxed mb-10 text-base md:text-lg"
        >
          Construo produtos digitais completos — interfaces modernas, APIs
          robustas e integrações complexas. Formado em ADS pela{" "}
          <span className="text-slate-300">FIAP</span>, baseado em{" "}
          <span className="text-slate-300">São Paulo</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58 }}
          className="flex items-center gap-4 flex-wrap justify-center"
        >
          <a
            href="https://github.com/HeitorBMarini"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-100 text-sm font-medium transition-all hover:-translate-y-0.5 border border-slate-700/60"
          >
            <GithubIcon size={15} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/heitor-borba-marini/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all hover:-translate-y-0.5"
          >
            <LinkedinIcon size={15} />
            LinkedIn
          </a>
          <a
            href="#projects"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-slate-700/60 text-slate-300 text-sm hover:border-blue-500/40 hover:text-blue-400 transition-all"
          >
            Ver projetos
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-14 flex items-center gap-0 text-xs text-slate-600 font-mono divide-x divide-slate-800"
        >
          <span className="pr-6">📍 São Paulo, BR</span>
          <span className="px-6">68+ repos</span>
          <span className="pl-6">FIAP — ADS</span>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-700"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
