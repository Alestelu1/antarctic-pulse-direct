import { SectionHeader } from "./SectionHeader";
import map from "@/assets/map-antarctic.jpg";

export function Geography() {
  const stations = [
    { id: "BAS-01", name: "Antarctic Peninsula", coord: "65°00′S 63°00′W" },
    { id: "BAS-02", name: "South Shetland Islands", coord: "62°00′S 58°00′W" },
    { id: "BAS-03", name: "Weddell Sea", coord: "73°00′S 45°00′W" },
    { id: "BAS-04", name: "Ross Ice Shelf", coord: "81°30′S 175°00′W" },
    { id: "BAS-05", name: "Transantarctic Range", coord: "85°00′S 175°00′E" },
    { id: "BAS-06", name: "Queen Maud Land", coord: "72°30′S 12°00′E" },
  ];

  return (
    <section id="geography" className="relative py-32 hairline-t bg-card/30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          index="§ 02"
          label="Antarctic Geography"
          title={<>Mapping the continent <em className="not-italic text-primary">that moves</em>.</>}
          subtitle="A continuously updated cartography of the Antarctic shelf, the bathymetry of the Southern Ocean, and the seasonal extent of sea ice."
        />

        <div className="grid grid-cols-12 gap-px bg-border/40 hairline-t hairline-b">
          <div className="col-span-12 lg:col-span-8 bg-background relative aspect-[16/10] overflow-hidden corner-frame">
            <span className="cf-bl" />
            <span className="cf-br" />
            <img
              src={map}
              alt="Bathymetric cartographic chart of the Antarctic Peninsula and Drake Passage"
              loading="lazy"
              width={1600}
              height={1000}
              className="absolute inset-0 h-full w-full object-cover doc-grayscale opacity-80"
            />
            <div className="absolute inset-0 graticule opacity-90" />
            <div className="absolute inset-0 graticule-fine" />
            <div className="absolute inset-0 radar-overlay opacity-90" />
            <div className="absolute inset-0 scanlines opacity-50" />

            {/* Latitude rulers */}
            <div className="absolute left-3 top-8 bottom-8 flex flex-col justify-between mono-label text-[0.6rem] opacity-70">
              {["60°S", "65°S", "70°S", "75°S", "80°S"].map((l) => (
                <span key={l} className="bg-background/70 px-1">{l}</span>
              ))}
            </div>
            <div className="absolute top-3 left-12 right-12 flex justify-between mono-label text-[0.6rem] opacity-70">
              {["80°W", "60°W", "40°W", "20°W", "0°"].map((l) => (
                <span key={l} className="bg-background/70 px-1">{l}</span>
              ))}
            </div>

            {/* Station markers */}
            {[
              { top: "32%", left: "28%", id: "BAS-01" },
              { top: "48%", left: "42%", id: "BAS-03" },
              { top: "62%", left: "55%", id: "BAS-05" },
            ].map((m) => (
              <div key={m.id} className="absolute" style={{ top: m.top, left: m.left }}>
                <div className="relative">
                  <div className="h-2 w-2 bg-primary rounded-full shadow-[0_0_12px_var(--cyan-signal)]" />
                  <div className="absolute -inset-2 border border-primary/40 rounded-full animate-ping" />
                  <div className="absolute top-3 left-3 mono-label text-[0.6rem] bg-background/80 px-1.5 py-0.5 text-primary whitespace-nowrap">
                    {m.id}
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute bottom-4 left-4 mono-label bg-background/85 backdrop-blur px-3 py-1.5">
              Chart 1187 · Antarctic Peninsula · Mercator · 1:4 000 000
            </div>
            <div className="absolute top-4 right-4 mono-label bg-background/85 backdrop-blur px-3 py-1.5 text-primary">
              ◉ LIVE FEED · SCAR
            </div>
            <div className="absolute bottom-4 right-4 mono-label bg-background/85 backdrop-blur px-3 py-1.5 flex items-center gap-2">
              <span className="inline-block w-8 h-px bg-foreground" />
              200 NM
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 bg-background p-8">
            <div className="mono-label mb-6 flex items-center justify-between">
              <span>Index of stations</span>
              <span className="text-primary">N=06</span>
            </div>
            <ul className="space-y-5">
              {stations.map((s) => (
                <li key={s.id} className="hairline-b pb-4 last:border-0">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-xl">{s.name}</span>
                    <span className="mono-label text-primary">{s.id}</span>
                  </div>
                  <div className="mono-label mt-1 flex items-center justify-between">
                    <span>{s.coord}</span>
                    <span className="opacity-50">ACTIVE</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
