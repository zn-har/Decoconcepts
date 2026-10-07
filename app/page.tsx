import React from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BlueprintDivider } from "@/components/BlueprintDivider";
import { ParallaxProjectCard } from "@/components/ParallaxProjectCard";
import { HeroSection } from "@/components/HeroSection";

export default function HomePage() {
  return (
    <>
      {/* Rich Kerala Architectural Hero Section */}
      <HeroSection />

      {/* Blueprint Divider */}
      <BlueprintDivider
        label="SELECTED KERALA WORKS"
        sublabel="TROPICAL MODERNISM ARCHIVE"
        coordinate="LAT 9.9312° N // LON 76.2673° E [KOCHI DATUM]"
      />

      {/* Asymmetrical Parallax Work Grid */}
      <section
        id="works"
        data-section-id="02 // WORKS"
        className="px-margin-mobile md:px-margin-desktop py-8 grid grid-cols-1 md:grid-cols-12 gap-gutter relative max-w-container-max mx-auto"
      >
        {/* Project 1 (8 Cols - Kochi Nalukettu Residence) */}
        <div className="md:col-span-8 mb-16 md:mb-28">
          <ScrollReveal variant="fade-up" delay={100}>
            <ParallaxProjectCard
              slug="project-alpha"
              title="KOCHI NALUKETTU RESIDENCE"
              location="FORT KOCHI, KERALA"
              year="2024"
              typology="SUNKEN NADUMUTTAM RAIN COURTYARD"
              imageSrc="/images/project_alpha.jpg"
              index="[ 01 / 04 ]"
              aspect="video"
              priority={true}
            />
          </ScrollReveal>
        </div>

        {/* Project 2 (4 Cols, Staggered - The Laterite Monolith) */}
        <div className="md:col-span-4 md:col-start-9 md:mt-36 mb-16 md:mb-28">
          <ScrollReveal variant="fade-up" delay={250}>
            <ParallaxProjectCard
              slug="the-monolith"
              title="THE LATERITE MONOLITH"
              location="CALICUT, KERALA"
              year="2023"
              typology="EXPOSED VETTUKALLU & JALI HUB"
              imageSrc="/images/monolith.jpg"
              index="[ 02 / 04 ]"
              aspect="square"
            />
          </ScrollReveal>
        </div>

        {/* Project 3 (12 Cols Full Bleed Panoramic - Alleppey Backwater Pavilion) */}
        <div className="col-span-1 md:col-span-12 my-12 md:my-20">
          <ScrollReveal variant="scale-in" delay={150}>
            <ParallaxProjectCard
              slug="brutalist-pavilion"
              title="ALLEPPEY BACKWATER PAVILION"
              location="ALLEPPEY, KERALA"
              year="2024"
              typology="FLOATING TEAK RAFTER SANCTUARY"
              imageSrc="/images/vista_pavilion.jpg"
              index="[ 03 / 04 ]"
              aspect="panoramic"
            />
          </ScrollReveal>
        </div>

        {/* Project 4 (12 Cols - The Wayanad Monsoon Villa) */}
        <div className="col-span-1 md:col-span-12 my-12 md:my-20">
          <ScrollReveal variant="fade-up" delay={150}>
            <ParallaxProjectCard
              slug="modernist-villa"
              title="THE WAYANAD MONSOON VILLA"
              location="WAYANAD, KERALA"
              year="2024"
              typology="FULL TROPICAL RESIDENCE"
              imageSrc="/images/modernist_villa_hero.jpg"
              index="[ 04 / 04 ]"
              aspect="panoramic"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Blueprint Divider */}
      <BlueprintDivider
        label="COMMISSION"
        sublabel="STAGE 03"
        coordinate="ELEVATION +18.40m [WESTERN GHATS]"
      />

      {/* Minimalist Architectural CTA */}
      <section
        data-section-id="03 // COMMISSION"
        className="py-24 md:py-36 px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center relative max-w-container-max mx-auto"
      >
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="border border-white/20 p-8 md:p-16 max-w-3xl relative bg-surface-container-low/50 backdrop-blur-sm shadow-2xl">
            {/* Corner Crosses */}
            <span className="absolute top-2 left-2 text-laterite text-[10px] font-mono pointer-events-none select-none">
              +
            </span>
            <span className="absolute top-2 right-2 text-laterite text-[10px] font-mono pointer-events-none select-none">
              +
            </span>
            <span className="absolute bottom-2 left-2 text-laterite text-[10px] font-mono pointer-events-none select-none">
              +
            </span>
            <span className="absolute bottom-2 right-2 text-laterite text-[10px] font-mono pointer-events-none select-none">
              +
            </span>

            <div className="font-mono text-[10px] text-laterite tracking-widest uppercase mb-4">
              [ INQUIRY // COMMISSIONS ACROSS SOUTH ASIA & GLOBALLY ]
            </div>

            <h2 className="font-headline-lg text-primary mb-6">
              INITIATE DIALOGUE
            </h2>

            <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto mb-10 font-light">
              We collaborate with visionary clients to engineer tropical vernacular sanctuaries
              rooted in Thachu Shastra geometry, raw laterite materiality, and monsoon climate truth.
            </p>

            <Link
              href="/contact"
              className="border border-white px-10 py-5 font-label-caps text-[12px] text-primary hover:bg-white hover:text-black tracking-[0.25em] bg-transparent inline-block transition-colors duration-150 cursor-pointer"
            >
              COMMISSION A PROJECT →
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
