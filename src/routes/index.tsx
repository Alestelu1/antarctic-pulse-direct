import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Mission } from "@/components/site/Mission";
import { Geography } from "@/components/site/Geography";
import { Routes as SouthernRoutes } from "@/components/site/Routes";
import { Science } from "@/components/site/Science";
import { Documentary } from "@/components/site/Documentary";
import { Projects } from "@/components/site/Projects";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Antarctic Pulse · Pulso Antártico — Polar documentary & editorial" },
      {
        name: "description",
        content:
          "Documentary and editorial platform covering Antarctica, the Southern Ocean, polar science and maritime routes — broadcast from Puerto Williams, southern Chile.",
      },
      { property: "og:title", content: "Antarctic Pulse · Pulso Antártico" },
      {
        property: "og:description",
        content:
          "Polar documentary and editorial reporting from Antarctica, Patagonia and the Southern Ocean.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsMediaOrganization",
          name: "Antarctic Pulse",
          alternateName: "Pulso Antártico",
          url: "/",
          description:
            "Polar documentary and editorial media platform covering Antarctica and the Southern Ocean.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Puerto Williams",
            addressRegion: "Magallanes y Antártica Chilena",
            addressCountry: "CL",
          },
          parentOrganization: { "@type": "Organization", name: "Austral Beacon" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Mission />
        <Geography />
        <SouthernRoutes />
        <Science />
        <Documentary />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
