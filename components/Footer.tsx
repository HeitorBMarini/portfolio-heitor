export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm">
          <span className="text-blue-400">heitor</span>
          <span className="text-slate-600">.dev</span>
        </p>

        <p className="text-xs text-slate-700 order-last md:order-none">
          © {year} Heitor Borba Marini · Feito com Next.js & Tailwind CSS
        </p>

        <div className="flex gap-6">
          {[
            { href: "https://github.com/HeitorBMarini", label: "GitHub" },
            { href: "https://www.linkedin.com/in/heitor-borba-marini/", label: "LinkedIn" },
            { href: "mailto:heitor.marini07@gmail.com", label: "E-mail" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
