import { SectionHeader } from "./SectionHeader";
import hero from "@/assets/hero-antarctic.jpg";
import vessel from "@/assets/vessel.jpg";
import penguins from "@/assets/penguins.jpg";

export function Documentary() {
  const films = [
    { img: hero, ep: "EP. 01", title: "The shelf that walks", duration: "42 min", chapter: "Ice & Time" },
    { img: vessel, ep: "EP. 02", title: "Crossing the Drake", duration: "38 min", chapter: "Maritime" },
    { img: penguins, ep: "EP. 03", title: "Colonies of the long dusk", duration: "29 min", chapter: "Ecology" },
  ];

  return (
    <section id="documentary" className="relative py-32 hairline-t bg-card/30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          index="§ 05"
          label="Documentary"
          title={<>Films from <em className="not-italic text-primary">the white continent</em>.</>}
          subtitle="A growing archive of long-form documentary work produced in collaboration with researchers, captains and indigenous Yagán communities of the austral channels."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40 hairline-t hairline-b">
          {films.map((f) => (
            <a
              key={f.ep}
              href="#"
              className="bg-background group block relative overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden corner-frame">
                <span className="cf-bl" />
                <span className="cf-br" />
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 doc-grayscale group-hover:[filter:grayscale(20%)_contrast(1.05)]"
                />
                <div className="absolute inset-0 graticule-fine opacity-40" />
                <div className="absolute inset-0 scanlines opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-4 left-4 mono-label text-primary bg-background/70 px-2 py-0.5">{f.ep}</div>
                <div className="absolute top-4 right-4 mono-label bg-background/70 px-2 py-0.5">{f.duration}</div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mono-label mb-2 text-primary">— {f.chapter}</div>
                  <h3 className="font-display text-3xl leading-tight">{f.title}</h3>
                  <div className="mono-label mt-4 text-primary opacity-0 group-hover:opacity-100 transition">
                    ▷ View dispatch
                  </div>
                </div>
              </div>

            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
