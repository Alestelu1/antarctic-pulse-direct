import { SectionHeader } from "./SectionHeader";
import ice from "@/assets/ice-texture.jpg";
import kingGeorgeKnowledge from "@/data/generated/king-george-science.json";

export function Science() {
  const fields = [
    { n: "01", t: "Glaciology", d: "Mass balance, ice-shelf calving and subglacial hydrology across the West Antarctic Ice Sheet." },
    { n: "02", t: "Oceanography", d: "Circumpolar deep water, ACC fronts and the thermohaline signature of the Southern Ocean." },
    { n: "03", t: "Atmospheric Science", d: "Polar vortex dynamics, katabatic winds and stratospheric ozone monitoring." },
    { n: "04", t: "Marine Biology", d: "Krill biomass, cetacean migration and benthic ecosystems of the Antarctic shelf." },
  ];

  return (
    <section id="science" className="relative py-32 hairline-t overflow-hidden">
      <img
        src={ice}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.06] mix-blend-screen"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          index="§ 04"
          label="Polar Science"
          title={<>Field research, <em className="not-italic text-primary">observation</em> &amp; instrumentation.</>}
          subtitle="We translate primary scientific work from the polar community into editorial, accessible reporting — without compromising rigor."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40 hairline-t hairline-b">
          {fields.map((f) => (
            <article
              key={f.n}
              className="bg-background/80 backdrop-blur-sm p-8 lg:p-10 group hover:bg-card transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="mono-label text-primary">{f.n}</span>
                <span className="mono-label opacity-50 group-hover:text-primary group-hover:opacity-100 transition">read →</span>
              </div>
              <h3 className="font-display text-3xl mb-3">{f.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.d}</p>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex flex-col gap-3 mb-8 max-w-3xl">
            <span className="mono-label text-primary">Verified knowledge layer · King George Island</span>
            <h3 className="font-display text-3xl md:text-4xl">Chilean science &amp; gateway infrastructure</h3>
            <p className="text-muted-foreground leading-relaxed">
              Canonical statements synchronized from the Austral Beacon AI Lab. Operational conditions and traffic statistics are intentionally excluded.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40 hairline-t hairline-b">
            {kingGeorgeKnowledge.items.map((item) => (
              <article key={item.claimId} className="bg-background/80 backdrop-blur-sm p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="mono-label text-primary">{item.authority}</span>
                  <span className="mono-label opacity-45">{item.claimId}</span>
                </div>
                <h4 className="font-display text-2xl mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.statement}</p>
              </article>
            ))}
          </div>

          <p className="mono-label opacity-45 mt-5">
            Source projection: {kingGeorgeKnowledge.sourceProjectionId}
          </p>
        </div>
      </div>
    </section>
  );
}
