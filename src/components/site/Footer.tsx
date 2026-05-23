export function Footer() {
  const social = [
    { l: "Instagram", h: "#" },
    { l: "YouTube", h: "#" },
    { l: "Vimeo", h: "#" },
    { l: "X / Twitter", h: "#" },
    { l: "Bluesky", h: "#" },
    { l: "Substack", h: "#" },
  ];
  return (
    <footer id="footer" className="relative hairline-t bg-card/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-6">
            <div className="mono-label text-primary mb-4">§ 07 · Transmission</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
              From 54°56′S — <em className="not-italic text-primary">we keep broadcasting</em>.
            </h2>
            <p className="mt-8 text-muted-foreground max-w-md leading-relaxed">
              Subscribe to the dispatch. One letter per month from the austral
              latitudes. No advertising, no tracking.
            </p>
            <form className="mt-8 flex max-w-md hairline-b focus-within:border-primary transition-colors">
              <input
                type="email"
                required
                placeholder="your@email"
                className="flex-1 bg-transparent py-3 outline-none mono-label text-foreground placeholder:text-muted-foreground"
              />
              <button className="mono-label text-primary px-2 hover:text-ice transition-colors">
                Subscribe →
              </button>
            </form>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="mono-label mb-5">Sections</div>
            <ul className="space-y-3 text-sm">
              {["Mission", "Geography", "Routes", "Science", "Documentary", "Projects"].map((s) => (
                <li key={s}><a href={`#${s.toLowerCase()}`} className="hover:text-primary transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="mono-label mb-5">Social</div>
            <ul className="space-y-3 text-sm">
              {social.map((s) => (
                <li key={s.l}><a href={s.h} className="hover:text-primary transition-colors">{s.l} ↗</a></li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-2">
            <div className="mono-label mb-5">Bureau</div>
            <address className="not-italic text-sm text-muted-foreground space-y-2 leading-relaxed">
              <div>Puerto Williams</div>
              <div>Isla Navarino</div>
              <div>Provincia Antártica Chilena</div>
              <div className="text-foreground mt-3">press@antarcticpulse.org</div>
            </address>
          </div>
        </div>

        <div className="mt-20 pt-8 hairline-t flex flex-col sm:flex-row justify-between gap-4 mono-label">
          <div>© {new Date().getFullYear()} Antarctic Pulse · Pulso Antártico</div>
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Part of the <span className="text-foreground">Austral Beacon</span> media network
          </div>
          <div>ISSN pending · CC BY-NC 4.0</div>
        </div>
      </div>
    </footer>
  );
}
