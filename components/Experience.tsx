import { Section, Reveal, Tag } from "@/components/Section";
import { Spotlight } from "@/components/Spotlight";

type Role = { title: string; period: string };

type Job = {
  company: string;
  meta: string;
  roles: Role[];
  current?: boolean;
  summary?: string;
  bullets: string[];
  tech: string[];
};

const jobs: Job[] = [
  {
    company: "ViBA Holding",
    meta: "Tempo integral · São Paulo",
    roles: [{ title: "Analista de Sistemas", period: "abr 2026 → atual" }],
    current: true,
    bullets: [
      "Integrações e automações entre sistemas corporativos, incluindo o ERP Sankhya, o CRM Bitrix24 e APIs REST, com foco em eficiência operacional e qualidade de dados.",
      "Dashboards de monitoramento com Grafana e Prometheus, acompanhando servidores Linux, performance de APIs e indicadores de negócio em tempo real.",
      "Infraestrutura no Azure (Oracle Linux e Ubuntu): servidores WildFly, processos com PM2, automação com cron jobs e resolução de incidentes em produção.",
      "Aplicações web e mobile com Next.js e React Native, modelagem de dados em SQL Server e microsserviços em Node.js.",
      "Implantação e gestão do GLPI como plataforma de helpdesk e SLA, estruturando os fluxos de atendimento e o controle de chamados internos.",
    ],
    tech: ["Next.js", "React Native", "Node.js", "SQL Server", "Sankhya", "Bitrix24", "Grafana", "Prometheus", "Azure", "Linux", "PM2", "GLPI"],
  },
  {
    company: "Doutores da Web",
    meta: "Tempo integral · São Paulo",
    roles: [
      { title: "Desenvolvedor Front-end Pleno", period: "mar 2025 → abr 2026" },
      { title: "Desenvolvedor Front-end Júnior", period: "abr 2024 → mar 2025" },
    ],
    summary: "Dois anos e promovido de júnior a pleno.",
    bullets: [
      "Desenvolvimento de sites com foco em SEO, da criação do layout à integração de dados via SQL e PHP.",
      "Criação e manutenção do sistema interno de gerenciamento da empresa.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "SEO"],
  },
  {
    company: "Sistema Vanguard",
    meta: "Tempo integral · São Paulo",
    roles: [{ title: "Desenvolvedor Full Stack", period: "jun 2023 → fev 2024" }],
    summary: "Analista de dados e desenvolvedor full stack.",
    bullets: [
      "Automações e dashboards com Python.",
      "Criação de telas e sistemas de suporte com React.",
      "Integrações de APIs com PHP e Node.js.",
      "Monitoramento de dados com Grafana.",
    ],
    tech: ["Python", "React", "PHP", "Node.js", "Grafana", "SQL"],
  },
];

const steps = [
  { label: "Full Stack", where: "Vanguard", when: "2023" },
  { label: "Front-end Júnior", where: "Doutores da Web", when: "2024" },
  { label: "Front-end Pleno", where: "Doutores da Web", when: "2025" },
  { label: "Analista de Sistemas", where: "ViBA Holding", when: "2026" },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experiência"
      title={
        <>
          Do front-end à <em className="text-accent">infraestrutura.</em>
        </>
      }
      intro="Comecei fazendo sites e sistemas internos; hoje cuido das integrações, do monitoramento e dos servidores que mantêm a operação de pé."
    >
      {/* Trajetória resumida */}
      <Reveal>
        <ol className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden mb-14">
          {steps.map((s, i) => (
            <li key={s.label} className={`p-5 ${i === steps.length - 1 ? "bg-accent-soft" : "bg-bg"}`}>
              <span className="font-mono text-xs text-faint">{s.when}</span>
              <p className={`font-serif text-xl mt-1.5 ${i === steps.length - 1 ? "text-accent" : "text-fg"}`}>
                {s.label}
              </p>
              <p className="text-xs text-muted mt-0.5">{s.where}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <ol className="relative border-l border-line ml-2 md:ml-0 space-y-8">
        {jobs.map((job, i) => (
          <li key={job.company} className="relative pl-8 md:pl-12">
            <span
              aria-hidden
              className={`absolute -left-[7px] top-8 w-3.5 h-3.5 rounded-full border-2 ${
                job.current ? "bg-accent border-accent" : "bg-bg border-line"
              }`}
            />
            <Reveal delay={i * 0.05}>
              <Spotlight className="rounded-2xl border border-line bg-surface p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3 mb-5">
                  <div>
                    <h3 className="font-serif text-3xl text-fg">{job.company}</h3>
                    <p className="text-xs text-faint mt-1">{job.meta}</p>
                  </div>
                  {job.current && (
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-accent-soft text-accent">
                      Atual
                    </span>
                  )}
                </div>

                <ul className="mb-5 space-y-1.5">
                  {job.roles.map((r) => (
                    <li key={r.title} className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <span className="text-fg font-medium">{r.title}</span>
                      <span className="font-mono text-xs text-muted">{r.period}</span>
                    </li>
                  ))}
                </ul>

                {job.summary && <p className="text-fg/90 leading-relaxed mb-4">{job.summary}</p>}

                <ul className="space-y-3 mb-6">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] text-muted leading-relaxed">
                      <span aria-hidden className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </Spotlight>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
