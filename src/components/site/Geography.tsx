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
          <div className="col-span-12 lg:col-span-8 bg-background relative aspect-[16/10] overflow-hidden">
            <img
              src={map}
              alt="Bathymetric cartographic chart of the Antarctic Peninsula and Drake Passage"
              loading="lazy"
              width={1600}
              height={1000}
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 radar-overlay" />
            <div className="absolute bottom-4 left-4 mono-label bg-background/80 backdrop-blur px-3 py-1.5">
              Chart 1187 · Antarctic Peninsula · Mercator
            </div>
            <div className="absolute top-4 right-4 mono-label bg-background/80 backdrop-blur px-3 py-1.5 text-primary">
              ◉ live feed
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 bg-background p-8">
            <div className="mono-label mb-6">Index of stations</div>
            <ul className="space-y-5">
              {stations.map((s) => (
                <li key={s.id} className="hairline-b pb-4 last:border-0">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-xl">{s.name}</span>
                    <span className="mono-label text-primary">{s.id}</span>
                  </div>
                  <div className="mono-label mt-1">{s.coord}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
