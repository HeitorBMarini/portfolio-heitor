import Image from "next/image";
import { Section, Reveal } from "@/components/Section";

const highlights = [
  { label: "Formação", value: "Análise e Desenvolvimento de Sistemas na FIAP" },
  { label: "Onde", value: "São Paulo, Brasil" },
  { label: "Foco", value: "Sistemas internos, portais B2B e integrações com ERP e CRM" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Sobre"
      title={
        <>
          Levo uma regra de negócio{" "}
          <em className="text-accent">do banco até a tela.</em>
        </>
      }
    >
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-20">
        <Reveal className="space-y-5 text-muted leading-relaxed text-[15px] md:text-base">
          <p>
            Sou desenvolvedor full stack e trabalho principalmente com{" "}
            <span className="text-fg">Next.js e React</span> no frontend e{" "}
            <span className="text-fg">Node.js</span> no backend. Gosto de
            pegar um problema da operação e resolver inteiro: a consulta SQL,
            o endpoint, a regra de negócio, a tela e o deploy.
          </p>
          <p>
            Boa parte do meu dia é integração. Faço sistemas conversarem com o{" "}
            <span className="text-fg">Sankhya ERP</span> e o{" "}
            <span className="text-fg">Bitrix24 CRM</span>, automatizo o que
            antes era feito à mão e acompanho tudo em dashboards de
            monitoramento com <span className="text-fg">Grafana</span> e{" "}
            <span className="text-fg">Prometheus</span>.
          </p>
          <p>
            Antes disso, passei dois anos na Doutores da Web fazendo sites com
            foco em SEO e mantendo o sistema interno da empresa, onde fui
            promovido de júnior a pleno.
          </p>
          <p>
            Fora do trabalho, mantenho sites institucionais para clientes e
            projetos pessoais em TypeScript, todos publicados na Vercel.
          </p>

          <dl className="border-t border-line !mt-10">
            {highlights.map((h) => (
              <div key={h.label} className="py-4 border-b border-line grid sm:grid-cols-[140px_1fr] gap-1">
                <dt className="text-[11px] font-semibold tracking-[0.18em] uppercase text-faint pt-0.5">
                  {h.label}
                </dt>
                <dd className="text-fg">{h.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="flex md:justify-end">
          <div className="relative w-full max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-px rounded-2xl"
              style={{ background: "linear-gradient(140deg, var(--accent), transparent 45%, var(--accent-2))" }}
            />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface m-px">
              <Image
                src="https://avatars.githubusercontent.com/u/123084599?v=4"
                alt="Heitor Borba Marini"
                fill
                sizes="(min-width: 768px) 24rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-mono text-xs text-fg/80">
                @HeitorBMarini · 68+ repositórios
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
