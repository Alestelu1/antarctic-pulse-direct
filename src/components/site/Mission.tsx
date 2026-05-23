import { SectionHeader } from "./SectionHeader";

export function Mission() {
  return (
    <section id="mission" className="relative py-32 hairline-t">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          index="§ 01"
          label="Mission"
          title={<>An editorial signal from the <em className="not-italic text-primary">austral latitudes</em>.</>}
        />
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-3 md:col-start-4">
            <p className="font-display text-2xl leading-snug text-balance">
              "We publish what the maps no longer show — the moving edge of the ice, the corridors of the sea, the silence between stations."
            </p>
            <p className="mono-label mt-6">— Editorial Charter, 2024</p>
          </div>
          <div className="col-span-12 md:col-span-5 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Antarctic Pulse / <span className="text-foreground">Pulso Antártico</span> is an
              independent documentary and editorial platform covering Antarctica, the Southern
              Ocean and the maritime corridors of southern Chile. We work at the intersection
              of polar science, geography and long-form journalism.
            </p>
            <p>
              Our dispatches are produced from Puerto Williams and aboard expedition vessels
              transiting the Drake Passage. We collaborate with researchers, hydrographers and
              field stations across the continent.
            </p>
            <ul className="hairline-t pt-6 space-y-3 text-foreground">
              {[
                "Long-form documentary & editorial publishing",
                "Maritime intelligence for the Southern Ocean",
                "Open cartography of austral routes",
                "Independent · non-partisan · field-based",
              ].map((i) => (
                <li key={i} className="flex gap-4">
                  <span className="mono-label text-primary pt-1">●</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
