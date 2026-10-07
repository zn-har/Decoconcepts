"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Compass } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"villa" | "void" | "monolith">("villa");

  const previews = {
    villa: {
      title: "THE WAYANAD CLIFF MONOLITH",
      location: "WAYANAD, KERALA",
      year: "2024",
      image: "/images/modernist_villa_hero.jpg",
      slug: "modernist-villa",
      tag: "CANTILEVERED TROPICAL RESIDENCE",
      elevation: "+18.40m",
      scale: "1:100",
    },
    void: {
      title: "THE KOCHI VOID RESIDENCE",
      location: "FORT KOCHI, KERALA",
      year: "2024",
      image: "/images/project_alpha.jpg",
      slug: "project-alpha",
      tag: "SUNKEN RAIN APERTURE & BLACK OXIDE",
      elevation: "+03.20m",
      scale: "1:50",
    },
    monolith: {
      title: "THE LATERITE MONOLITH",
      location: "CALICUT, KERALA",
      year: "2023",
      image: "/images/monolith.jpg",
      slug: "the-monolith",
      tag: "EXPOSED MASONRY & JALI HUB",
      elevation: "+26.00m",
      scale: "1:150",
    },
  };

  const current = previews[activeTab];

  return (
    <section
      data-section-id="01 // HERO"
      className="min-h-[92vh] flex flex-col justify-between px-margin-mobile md:px-margin-desktop pt-6 pb-12 relative max-w-container-max mx-auto"
    >
      {/* 1. Top Technical Telemetry Bar */}
      <ScrollReveal variant="fade" delay={50}>
        <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-white/50 border-b border-white/10 pb-4 mb-8">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-white inline-block animate-pulse" />
            <span className="text-white font-semibold">DECOCONCEPTS ARCHITECTS</span>
            <span className="text-white/20">/</span>
            <span>DATUM: ARABIAN SEA +0.00m</span>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-[10px] text-white/40">
            <span>GRID: KOCHI • WAYANAD • CALICUT • ALLEPPEY</span>
            <span>COORD: 9.9312° N // 76.2673° E [MONSOON DATUM]</span>
          </div>

          <div className="font-mono text-white/70">
            [ ARCHIVE // 2024 ]
          </div>
        </div>
      </ScrollReveal>

      {/* 2. Main Hero Split: Left Manifesto + Right Architectural Visual Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-4">
        {/* Left Column: Typographic Monument (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <ScrollReveal variant="clip-left" delay={100} duration={600}>
            <div className="inline-flex items-center space-x-2 bg-surface-container-high/60 border border-white/20 px-3 py-1 mb-6 font-mono text-[10px] text-white tracking-widest uppercase">
              <span className="text-white/40">DISCIPLINE:</span>
              <span>DICHROME MINIMALISM & TROPICAL BRUTALISM</span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="clip-up" delay={200} duration={800}>
            <h1 className="font-display-xl text-primary uppercase tracking-tighter leading-[0.88] select-none">
              TROPICAL
              <br />
              <span className="text-white">MONOLITHS.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={350} duration={700}>
            <div className="mt-8 border-l-2 border-white pl-6 space-y-4 max-w-xl">
              <p className="font-body-lg text-on-surface-variant font-light leading-relaxed">
                Stark geometry meets high-contrast tropical brutalism. We engineer unadorned
                architectural monoliths in Kerala — sculpted from raw board-marked concrete,
                unplastered porous laterite, sunken rain apertures, and polished black oxide planes.
              </p>

              {/* Architectural Highlights Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-surface-container-low border border-white/15 px-3 py-1 font-mono text-[10px] text-white/80">
                  14 BUILT MONOLITHS
                </span>
                <span className="bg-surface-container-low border border-white/15 px-3 py-1 font-mono text-[10px] text-white/80">
                  04 KERALA HUBS
                </span>
                <span className="bg-surface-container-low border border-white/30 px-3 py-1 font-mono text-[10px] text-white">
                  ZERO ORNAMENTATION
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Action Callouts */}
          <ScrollReveal variant="fade-up" delay={500}>
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a
                href="#works"
                className="bg-white text-black font-label-caps text-[11px] px-8 py-4 border border-white hover:bg-transparent hover:text-white transition-colors duration-150 flex items-center space-x-2 tracking-widest font-semibold"
              >
                <span>INSPECT ARCHIVE</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/about"
                className="font-label-caps text-[11px] px-8 py-4 border border-white/30 text-primary hover:border-white hover:bg-surface-container-high transition-colors tracking-widest flex items-center space-x-2"
              >
                <span>STUDIO DISCIPLINE</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/60" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Architectural Blueprint Showcase (5 cols) */}
        <div className="lg:col-span-5">
          <ScrollReveal variant="scale-in" delay={300} duration={800}>
            <div className="border border-white/20 bg-surface-container-low p-4 relative group shadow-2xl">
              {/* Corner Blueprint Crosses */}
              <span className="absolute -top-1.5 -left-1.5 text-white/60 text-[12px] font-mono select-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 text-white/60 text-[12px] font-mono select-none">+</span>
              <span className="absolute -bottom-1.5 -left-1.5 text-white/60 text-[12px] font-mono select-none">+</span>
              <span className="absolute -bottom-1.5 -right-1.5 text-white/60 text-[12px] font-mono select-none">+</span>

              {/* Header Dimension Line */}
              <div className="flex items-center justify-between font-mono text-[9px] text-white/40 pb-2 border-b border-white/10 mb-3">
                <span className="flex items-center space-x-1">
                  <Compass className="w-3 h-3 text-white/70" />
                  <span>FIG 00 // TROPICAL SPATIAL STUDY</span>
                </span>
                <span className="text-white/70">{current.scale} METRIC</span>
              </div>

              {/* Main Visual Display Frame */}
              <Link href={`/work/${current.slug}`} className="block relative group/image overflow-hidden">
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-black border border-white/10">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    priority
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover contrast-125 opacity-90 group-hover/image:opacity-100 group-hover/image:scale-105 transition-all duration-700 ease-out"
                  />

                  {/* Corner Dimension Callout */}
                  <div className="absolute top-3 left-3 bg-black/90 backdrop-blur-sm border border-white/20 px-2.5 py-1 font-mono text-[9px] text-white">
                    ELEV: {current.elevation}
                  </div>

                  {/* Hover Inspect CTA Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="bg-white text-black font-label-caps text-[10px] px-4 py-2 font-bold tracking-widest flex items-center space-x-1">
                      <span>INSPECT CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Interactive Case Study Selector Tabs */}
              <div className="grid grid-cols-3 gap-1 pt-3 border-t border-white/10 mt-3 font-mono text-[9px]">
                <button
                  onClick={() => setActiveTab("villa")}
                  className={`py-2 px-2 text-left border transition-colors ${
                    activeTab === "villa"
                      ? "border-white bg-white text-black font-bold"
                      : "border-white/15 text-white/50 hover:text-white hover:border-white/40"
                  }`}
                >
                  01. WAYANAD
                </button>
                <button
                  onClick={() => setActiveTab("void")}
                  className={`py-2 px-2 text-left border transition-colors ${
                    activeTab === "void"
                      ? "border-white bg-white text-black font-bold"
                      : "border-white/15 text-white/50 hover:text-white hover:border-white/40"
                  }`}
                >
                  02. KOCHI
                </button>
                <button
                  onClick={() => setActiveTab("monolith")}
                  className={`py-2 px-2 text-left border transition-colors ${
                    activeTab === "monolith"
                      ? "border-white bg-white text-black font-bold"
                      : "border-white/15 text-white/50 hover:text-white hover:border-white/40"
                  }`}
                >
                  03. CALICUT
                </button>
              </div>

              {/* Active Project Metadata Footer */}
              <div className="flex items-center justify-between pt-3 mt-1 font-mono text-[10px] text-white/70">
                <span className="font-bold text-white tracking-wider">{current.title}</span>
                <span>{current.location} // {current.year}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 3. Bottom Architectural Specification Matrix (4 Columns) */}
      <ScrollReveal variant="fade-up" delay={600}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 mt-8 border-t border-white/15">
          <div className="border-l border-white/40 pl-4 py-1">
            <span className="font-mono text-[9px] text-white/50 block mb-1">
              [ 01 // TYPOLOGY ]
            </span>
            <p className="font-label-caps text-[11px] text-white">
              Monolithic Voids & Rain Courtyards
            </p>
          </div>

          <div className="border-l border-white/40 pl-4 py-1">
            <span className="font-mono text-[9px] text-white/50 block mb-1">
              [ 02 // MATERIALITY ]
            </span>
            <p className="font-label-caps text-[11px] text-white">
              Unplastered Laterite, Board-Marked Concrete & Oxide
            </p>
          </div>

          <div className="border-l border-white/40 pl-4 py-1">
            <span className="font-mono text-[9px] text-white/50 block mb-1">
              [ 03 // DISCIPLINE ]
            </span>
            <p className="font-label-caps text-[11px] text-white">
              Passive Monsoon Ventilation & Jali Grid Screens
            </p>
          </div>

          <div className="border-l border-white/40 pl-4 py-1">
            <span className="font-mono text-[9px] text-white/50 block mb-1">
              [ 04 // AESTHETIC ]
            </span>
            <p className="font-label-caps text-[11px] text-white">
              High-Contrast Dichrome Minimalism
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
