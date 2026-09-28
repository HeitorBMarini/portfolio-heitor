export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-10 border-t border-line">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-muted">
          <span className="font-serif text-fg text-base">Heitor Borba Marini</span>
          <span className="mx-2 text-faint">·</span>© {year}
        </p>
        <a href="#" className="text-faint hover:text-accent transition-colors">
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}
