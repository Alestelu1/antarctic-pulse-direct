import { SectionHeader } from "./SectionHeader";

export function Projects() {
  const projects = [
    { tag: "ACTIVE", t: "Beagle Channel Monitoring", y: "2023 — present", d: "Hydroacoustic monitoring of cetacean populations in the Beagle and Murray channels in partnership with Universidad de Magallanes." },
    { tag: "ACTIVE", t: "Cape Horn Biosphere Archive", y: "2024 — present", d: "Open editorial archive of Yagán oral history, sub-Antarctic mosses and the southern fjord ecosystem." },
    { tag: "FIELD", t: "Drake Passage Atlas", y: "2025", d: "Open cartographic atlas of bathymetry, currents and historical wrecks across the Drake Passage." },
    { tag: "ARCHIVE", t: "Stations of the 60th Parallel", y: "2022 — 2024", d: "Photographic and oral history of the permanent research stations operating south of 60°S." },
  ];

  return (
    <section id="projects" className="relative py-32 hairline-t">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          index="§ 06"
          label="Ecosystem Projects"
          title={<>Open research, <em className="not-italic text-primary">field</em> and archive.</>}
        />
        <div className="hairline-t">
          {projects.map((p, i) => (
            <div
              key={p.t}
              className="grid grid-cols-12 gap-6 py-10 hairline-b items-start hover:bg-card/30 transition-colors px-2 -mx-2"
            >
              <div className="col-span-12 sm:col-span-1 mono-label text-primary">0{i + 1}</div>
              <div className="col-span-6 sm:col-span-2 mono-label">
                <span className="inline-block px-2 py-1 border border-border text-primary">{p.tag}</span>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <h3 className="font-display text-3xl">{p.t}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed max-w-xl">{p.d}</p>
              </div>
              <div className="col-span-6 sm:col-span-3 mono-label sm:text-right">
                <div>{p.y}</div>
                <a href="#" className="block mt-2 text-primary hover:underline">View dossier →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
