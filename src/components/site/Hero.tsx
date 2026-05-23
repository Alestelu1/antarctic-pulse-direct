import hero from "@/assets/hero-antarctic.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden corner-frame pt-[5.25rem]">
      <span className="cf-bl" />
      <span className="cf-br" />

      <img
        src={hero}
        alt="Antarctic ice shelf at twilight, aerial documentary view"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover doc-grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
      <div className="absolute inset-0 graticule-fine opacity-70" />
      <div className="absolute inset-0 grid-overlay opacity-80" />
      <div className="absolute inset-0 scanlines opacity-60 pointer-events-none" />
      <div className="absolute inset-0 vignette" />

      {/* Crosshair / map reticle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="relative w-[420px] h-[420px] max-w-[60vw] max-h-[60vw] opacity-25">
          <div className="absolute inset-0 border border-primary/40 rounded-full" />
          <div className="absolute inset-[20%] border border-primary/30 rounded-full" />
          <div className="absolute inset-[40%] border border-primary/20 rounded-full" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/30" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/30" />
        </div>
      </div>

      {/* Coordinate corners */}
      <div className="absolute top-[5.75rem] right-6 lg:right-10 mono-label text-right space-y-1 z-10">
        <div className="text-foreground">62°12′04″S · 58°57′41″W</div>
        <div className="opacity-60">Datum WGS-84 · Proj. UPS</div>
        <div className="text-primary mt-2">◉ Transmission active</div>
      </div>
      <div className="absolute top-[5.75rem] left-6 lg:left-10 mono-label z-10">
        <div className="text-foreground">Vol. 01 / Dispatch 014</div>
        <div className="opacity-60">Drake Passage · 02:14 UTC</div>
        <div className="opacity-60">Chart 1187 · Mercator</div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-32 pb-20 min-h-screen flex flex-col justify-end">
        <div className="max-w-5xl">
          <div className="mono-label mb-6 text-primary flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            Polar documentary &amp; editorial bureau
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-[8rem] leading-[0.9] tracking-tight text-balance">
            Field reports from <em className="not-italic text-primary">the 60th</em> parallel south.
          </h1>
          <p className="mt-10 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed border-l border-border pl-6">
            An independent editorial platform documenting the Southern Ocean, polar science
            and the maritime geography of Antarctica — broadcast from Puerto Williams,
            the southernmost permanent settlement on Earth.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#mission"
              className="group inline-flex items-center gap-3 border border-primary text-primary px-6 py-3 mono-label hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Enter the archive
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#documentary" className="mono-label text-foreground hover:text-primary transition-colors border-b border-border pb-1">
              Latest dispatch · EP. 03
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border/40 hairline-t hairline-b">
          {[
            ["14.0 M km²", "Continental ice sheet"],
            ["−89.2 °C", "Lowest recorded · Vostok"],
            ["800 km", "Drake Passage transit"],
            ["54°56′S", "Bureau · Puerto Williams"],
          ].map(([v, l]) => (
            <div key={l} className="bg-background/70 backdrop-blur-sm p-5 relative">
              <div className="absolute top-2 right-2 mono-label opacity-30">0{[v].length}</div>
              <div className="font-display text-2xl sm:text-3xl">{v}</div>
              <div className="mono-label mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
