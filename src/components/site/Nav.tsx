export function Nav() {
  const links = [
    { href: "#mission", label: "Mission" },
    { href: "#geography", label: "Geography" },
    { href: "#routes", label: "Routes" },
    { href: "#science", label: "Science" },
    { href: "#documentary", label: "Documentary" },
    { href: "#projects", label: "Projects" },
  ];

  const ticker = [
    "DRAKE 54°S — SW 38 KT · SEA 4.2 M",
    "SCAR ADV 2026/03 — SEA-ICE EXTENT 17.4 M KM²",
    "PUERTO WILLIAMS METAR — 982 HPA · −3°C · VIS 9 KM",
    "M/V AURORA AUSTRALIS — DEP USHUAIA 02:14 UTC",
    "BAS HALLEY VI — RELOCATION CYCLE 09 LOGGED",
    "AIS · ANTARCTIC SOUND — 6 VESSELS ACTIVE",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 hairline-b">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--cyan-signal)] animate-pulse" />
          <span className="mono-label text-foreground">Antarctic Pulse</span>
          <span className="mono-label opacity-50 hidden sm:inline">/ Pulso Antártico</span>
          <span className="mono-label opacity-40 hidden lg:inline">· EST 2024 · ISSN PEND.</span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="mono-label hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#footer" className="mono-label text-primary hidden sm:inline">Bureau →</a>
      </div>

      {/* Maritime intelligence ticker */}
      <div className="hairline-t bg-background/90 overflow-hidden">
        <div className="flex items-center gap-4 px-4 h-7">
          <span className="mono-label text-primary shrink-0 hairline-b border-b-0 pr-3 border-r border-border">
            ◉ LIVE FEED
          </span>
          <div className="flex-1 overflow-hidden relative">
            <div className="ticker-marquee whitespace-nowrap flex gap-10 mono-label opacity-80">
              {[...ticker, ...ticker].map((t, i) => (
                <span key={i} className="shrink-0">
                  <span className="text-primary mr-2">·</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <span className="mono-label opacity-60 hidden md:inline shrink-0">UTC {new Date().toISOString().slice(11, 16)}</span>
        </div>
      </div>
    </header>
  );
}
