import hero from "@/assets/hero-antarctic.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={hero}
        alt="Antarctic ice shelf at twilight, aerial documentary view"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div className="absolute inset-0 grid-overlay opacity-60" />
      <div className="absolute inset-0 vignette" />

      {/* Coordinates marker */}
      <div className="absolute top-24 right-6 lg:right-10 mono-label text-right space-y-1">
        <div>62°12′S · 58°57′W</div>
        <div className="text-primary">Transmission active</div>
      </div>
      <div className="absolute top-24 left-6 lg:left-10 mono-label">
        <div>Vol. 01 / Dispatch 014</div>
        <div className="opacity-60">Drake Passage · 02:14 UTC</div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-40 pb-24 min-h-screen flex flex-col justify-end">
        <div className="max-w-4xl">
          <div className="mono-label mb-6 text-primary">A polar documentary &amp; editorial platform</div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-[7.5rem] leading-[0.92] tracking-tight text-balance">
            Reporting from <em className="not-italic text-primary">the edge</em> of the continent.
          </h1>
          <p className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Antarctic Pulse documents the Southern Ocean, polar science and the maritime
            geography of Antarctica and Patagonia — broadcast from Puerto Williams,
            the southernmost permanent settlement on Earth.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#mission"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wide hover:bg-ice transition-colors"
            >
              Enter the archive
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#documentary" className="mono-label text-foreground hover:text-primary transition-colors">
              Watch latest dispatch
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border/40 hairline-t">
          {[
            ["14M km²", "Continental ice"],
            ["−89.2°C", "Lowest recorded"],
            ["800 km", "Drake Passage"],
            ["54°56′S", "Puerto Williams"],
          ].map(([v, l]) => (
            <div key={l} className="bg-background/60 backdrop-blur-sm p-5">
              <div className="font-display text-2xl sm:text-3xl">{v}</div>
              <div className="mono-label mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
