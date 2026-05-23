export function Nav() {
  const links = [
    { href: "#mission", label: "Mission" },
    { href: "#geography", label: "Geography" },
    { href: "#routes", label: "Routes" },
    { href: "#science", label: "Science" },
    { href: "#documentary", label: "Documentary" },
    { href: "#projects", label: "Projects" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 hairline-b">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--cyan-signal)]" />
          <span className="mono-label text-foreground">Antarctic Pulse</span>
          <span className="mono-label opacity-50 hidden sm:inline">/ Pulso Antártico</span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="mono-label hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#footer" className="mono-label text-primary hidden sm:inline">Contact →</a>
      </div>
    </header>
  );
}
