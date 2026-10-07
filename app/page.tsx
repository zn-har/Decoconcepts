import React from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BlueprintDivider } from "@/components/BlueprintDivider";
import { ParallaxProjectCard } from "@/components/ParallaxProjectCard";
import { ArrowDown } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        data-section-id="01 // HERO"
        className="min-h-[85vh] flex flex-col justify-between px-margin-mobile md:px-margin-desktop relative pb-16 pt-12 max-w-container-max mx-auto"
      >
        {/* Top Technical Metadata Stamp */}
        <ScrollReveal variant="fade" delay={100}>
          <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-white/50 border-b border-white/10 pb-4 mb-12">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-white inline-block" />
              <span>DATUM: BASELINE +0.00m</span>
            </span>
            <span className="hidden sm:inline">
              GRID: TOKYO // OSLO // ZURICH // KYOTO
            </span>
            <span>ARCHITECTURAL ARCHIVE [2023–2024]</span>
          </div>
        </ScrollReveal>

        {/* Hero Title and Statement */}
        <div className="my-auto py-12">
          <ScrollReveal variant="clip-up" delay={200} duration={800}>
            <h1 className="font-display-xl text-primary max-w-7xl uppercase tracking-tighter leading-[0.9]">
              ARCHITECTURAL
              <br />
              MASTERY.
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={400} duration={800}>
            <div className="mt-10 max-w-2xl border-l-2 border-white/40 pl-6 space-y-3">
              <p className="font-body-lg text-on-surface-variant font-light leading-relaxed">
                Structural integrity meets high-contrast minimalism. We design spaces
                that command attention through deliberate geometry and stark
                dichotomy.
              </p>
              <div className="font-mono text-[10px] text-white/40 tracking-wider">
                MONOLITHIC CONCRETE // POLISHED BASALT // ANODIZED STEEL
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Hero Bottom Anchor / Scroll Prompt */}
        <ScrollReveal variant="fade" delay={600}>
          <div className="flex items-center justify-between pt-8 border-t border-white/10">
            <a
              href="#works"
              className="inline-flex items-center space-x-3 font-label-caps text-[11px] text-primary hover:text-white/70 transition-colors group cursor-pointer"
            >
              <span className="border border-white/30 p-2 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </span>
              <span>SCROLL TO INSPECT WORKS</span>
            </a>

            <div className="font-mono text-[10px] text-white/40 hidden md:block">
              [ REF: SEC-01 TO SEC-04 ]
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Blueprint Divider */}
      <BlueprintDivider
        label="SELECTED WORKS"
        sublabel="CURATED EDITIONS"
        coordinate="LAT 35.6762° N // LON 139.6503° E"
      />

      {/* Asymmetrical Parallax Work Grid */}
      <section
        id="works"
        data-section-id="02 // WORKS"
        className="px-margin-mobile md:px-margin-desktop py-8 grid grid-cols-1 md:grid-cols-12 gap-gutter relative max-w-container-max mx-auto"
      >
        {/* Project 1 (8 Cols - Project Alpha) */}
        <div className="md:col-span-8 mb-16 md:mb-28">
          <ScrollReveal variant="fade-up" delay={100}>
            <ParallaxProjectCard
              slug="project-alpha"
              title="PROJECT ALPHA"
              location="TOKYO, JAPAN"
              year="2024"
              typology="INTERIOR ARCHITECTURE"
              imageSrc="/images/project_alpha.jpg"
              index="[ 01 / 04 ]"
              aspect="video"
              priority={true}
            />
          </ScrollReveal>
        </div>

        {/* Project 2 (4 Cols, Staggered - The Monolith) */}
        <div className="md:col-span-4 md:col-start-9 md:mt-36 mb-16 md:mb-28">
          <ScrollReveal variant="fade-up" delay={250}>
            <ParallaxProjectCard
              slug="the-monolith"
              title="THE MONOLITH"
              location="ZURICH, SWITZERLAND"
              year="2023"
              typology="FACADE STRUCTURE"
              imageSrc="/images/monolith.jpg"
              index="[ 02 / 04 ]"
              aspect="square"
            />
          </ScrollReveal>
        </div>

        {/* Project 3 (12 Cols Full Bleed Panoramic - Vista Pavilion) */}
        <div className="col-span-1 md:col-span-12 my-12 md:my-20">
          <ScrollReveal variant="scale-in" delay={150}>
            <ParallaxProjectCard
              slug="brutalist-pavilion"
              title="VISTA PAVILION"
              location="KYOTO, JAPAN"
              year="2024"
              typology="EXHIBITION PAVILION & VOID STUDY"
              imageSrc="/images/vista_pavilion.jpg"
              index="[ 03 / 04 ]"
              aspect="panoramic"
            />
          </ScrollReveal>
        </div>

        {/* Project 4 (12 Cols - The Modernist Villa) */}
        <div className="col-span-1 md:col-span-12 my-12 md:my-20">
          <ScrollReveal variant="fade-up" delay={150}>
            <ParallaxProjectCard
              slug="modernist-villa"
              title="THE MODERNIST VILLA"
              location="OSLO, NORWAY"
              year="2023"
              typology="FULL RESIDENTIAL BUILD"
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
        coordinate="ELEVATION +18.40m"
      />

      {/* Minimalist Architectural CTA */}
      <section
        data-section-id="03 // COMMISSION"
        className="py-24 md:py-36 px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center relative max-w-container-max mx-auto"
      >
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="border border-white/20 p-8 md:p-16 max-w-3xl relative bg-surface-container-low/50 backdrop-blur-sm">
            {/* Corner Crosses */}
            <span className="absolute top-2 left-2 text-white/40 text-[10px] font-mono pointer-events-none select-none">
              +
            </span>
            <span className="absolute top-2 right-2 text-white/40 text-[10px] font-mono pointer-events-none select-none">
              +
            </span>
            <span className="absolute bottom-2 left-2 text-white/40 text-[10px] font-mono pointer-events-none select-none">
              +
            </span>
            <span className="absolute bottom-2 right-2 text-white/40 text-[10px] font-mono pointer-events-none select-none">
              +
            </span>

            <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-4">
              [ INQUIRY // NEW COMMISSIONS 2025–2026 ]
            </div>

            <h2 className="font-headline-lg text-primary mb-6">
              INITIATE DIALOGUE
            </h2>

            <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto mb-10 font-light">
              We collaborate with discerning clients worldwide to create structural
              landmarks rooted in geometric clarity and spatial truth.
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
