import { SectionHeader } from "./SectionHeader";
import vessel from "@/assets/vessel.jpg";

export function Routes() {
  const routes = [
    { code: "R-01", from: "Puerto Williams", to: "King George Island", distance: "1,040 km", time: "48–60 h", note: "Drake Passage crossing · prevailing westerlies" },
    { code: "R-02", from: "Punta Arenas", to: "Bahía Fildes", distance: "1,180 km", time: "52 h", note: "Magallanes corridor · pilot waters" },
    { code: "R-03", from: "Ushuaia", to: "Antarctic Sound", distance: "1,260 km", time: "60 h", note: "Beagle Channel · iceberg alley" },
    { code: "R-04", from: "Puerto Williams", to: "Cape Horn", distance: "120 km", time: "8 h", note: "Approach to the Southern Ocean" },
  ];

  return (
    <section id="routes" className="relative py-32 hairline-t">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          index="§ 03"
          label="Southern Routes"
          title={<>The corridors of <em className="not-italic text-primary">the Southern Ocean</em>.</>}
          subtitle="Vessel logs, navigational thresholds and seasonal transit windows from Patagonia to the Antarctic Peninsula."
        />

        <div className="grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 lg:col-span-5 relative aspect-[4/5] overflow-hidden">
            <img
              src={vessel}
              alt="Research vessel transiting the Southern Ocean near Puerto Williams"
              loading="lazy"
              width={1600}
              height={2000}
              className="absolute inset-0 h-full w-full object-cover grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="mono-label text-primary">M/V Aurora Australis · 54°56′S</div>
              <div className="font-display text-2xl mt-2">Day 03 — Drake Passage</div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="hairline-t">
              {routes.map((r) => (
                <div key={r.code} className="grid grid-cols-12 gap-4 py-6 hairline-b group hover:bg-card/40 transition-colors px-2 -mx-2">
                  <div className="col-span-2 mono-label text-primary">{r.code}</div>
                  <div className="col-span-10 sm:col-span-6">
                    <div className="font-display text-xl">{r.from}</div>
                    <div className="mono-label mt-1">→ {r.to}</div>
                    <div className="text-sm text-muted-foreground mt-2">{r.note}</div>
                  </div>
                  <div className="col-span-6 sm:col-span-2 mono-label">
                    <div className="text-foreground">{r.distance}</div>
                    <div className="opacity-60 mt-1">distance</div>
                  </div>
                  <div className="col-span-6 sm:col-span-2 mono-label">
                    <div className="text-foreground">{r.time}</div>
                    <div className="opacity-60 mt-1">transit</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
