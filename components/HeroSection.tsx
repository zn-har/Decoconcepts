"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Compass } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"villa" | "pavilion" | "monolith">("villa");

  const previews = {
    villa: {
      title: "THE MODERNIST VILLA",
      location: "OSLO, NORWAY",
      year: "2023",
      image: "/images/modernist_villa_hero.jpg",
      slug: "modernist-villa",
      tag: "RESIDENTIAL MONOLITH",
      elevation: "+14.20m",
      scale: "1:100",
    },
    pavilion: {
      title: "VISTA PAVILION",
      location: "KYOTO, JAPAN",
      year: "2024",
      image: "/images/vista_pavilion.jpg",
      slug: "brutalist-pavilion",
      tag: "EXHIBITION VOID",
      elevation: "+08.50m",
      scale: "1:75",
    },
    monolith: {
      title: "THE MONOLITH",
      location: "ZURICH, SWITZERLAND",
      year: "2023",
      image: "/images/monolith.jpg",
      slug: "the-monolith",
      tag: "FACADE STRUCTURE",
      elevation: "+22.00m",
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
            <span className="text-white/80 font-semibold">STUDIO SPECIFICATION</span>
            <span className="text-white/20">/</span>
            <span>DATUM: BASELINE +0.00m</span>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-[10px] text-white/40">
            <span>GRID: TOKYO • OSLO • ZURICH • KYOTO</span>
            <span>COORD: 35.6762° N // 139.6503° E</span>
          </div>

          <div className="font-mono text-white/70">
            [ ARCHIVE EDITION // 2024 ]
          </div>
        </div>
      </ScrollReveal>

      {/* 2. Main Hero Split: Left Manifesto + Right Architectural Visual Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-4">
        {/* Left Column: Typographic Monument (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <ScrollReveal variant="clip-left" delay={100} duration={600}>
            <div className="inline-flex items-center space-x-2 bg-surface-container-high/60 border border-white/15 px-3 py-1 mb-6 font-mono text-[10px] text-white/80 tracking-widest uppercase">
              <span className="text-white/40">DISCIPLINE:</span>
              <span>BRUTALIST & HIGH-CONTRAST MINIMALISM</span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="clip-up" delay={200} duration={800}>
            <h1 className="font-display-xl text-primary uppercase tracking-tighter leading-[0.88] select-none">
              ARCHITECTURAL
              <br />
              <span className="text-white/90">MASTERY.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={350} duration={700}>
            <div className="mt-8 border-l-2 border-white/50 pl-6 space-y-4 max-w-xl">
              <p className="font-body-lg text-on-surface-variant font-light leading-relaxed">
                Structural integrity meets high-contrast minimalism. We sculpt spaces
                that command presence through pure geometry, monolithic raw materials, and stark chiaroscuro shadowplay.
              </p>

              {/* Architectural Highlights Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-surface-container-low border border-white/15 px-3 py-1 font-mono text-[10px] text-white/70">
                  14 BUILT MONOLITHS
                </span>
                <span className="bg-surface-container-low border border-white/15 px-3 py-1 font-mono text-[10px] text-white/70">
                  04 GLOBAL HUBS
                </span>
                <span className="bg-surface-container-low border border-white/15 px-3 py-1 font-mono text-[10px] text-white/70">
                  100% UNCOMPROMISING GEOMETRY
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
                <span>EXPLORE ARCHIVE</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/about"
                className="font-label-caps text-[11px] px-8 py-4 border border-white/30 text-primary hover:border-white hover:bg-surface-container-high transition-colors tracking-widest flex items-center space-x-2"
              >
                <span>STUDIO PHILOSOPHY</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/60" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Architectural Blueprint Showcase (5 cols) */}
        <div className="lg:col-span-5">
          <ScrollReveal variant="scale-in" delay={300} duration={800}>
            <div className="border border-white/25 bg-surface-container-low p-4 relative group">
              {/* Corner Blueprint Crosses */}
              <span className="absolute -top-1.5 -left-1.5 text-white/60 text-[12px] font-mono select-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 text-white/60 text-[12px] font-mono select-none">+</span>
              <span className="absolute -bottom-1.5 -left-1.5 text-white/60 text-[12px] font-mono select-none">+</span>
              <span className="absolute -bottom-1.5 -right-1.5 text-white/60 text-[12px] font-mono select-none">+</span>

              {/* Header Dimension Line */}
              <div className="flex items-center justify-between font-mono text-[9px] text-white/40 pb-2 border-b border-white/10 mb-3">
                <span className="flex items-center space-x-1">
                  <Compass className="w-3 h-3 text-white/60" />
                  <span>FIG 00 // ELEVATION MATRIX</span>
                </span>
                <span>{current.scale} METRIC</span>
              </div>

              {/* Main Visual Display Frame */}
              <Link href={`/work/${current.slug}`} className="block relative group/image overflow-hidden">
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-black/60 border border-white/10">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover grayscale contrast-125 opacity-85 group-hover/image:opacity-100 group-hover/image:scale-105 transition-all duration-700 ease-out"
                  />

                  {/* Corner Dimension Callout */}
                  <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm border border-white/20 px-2.5 py-1 font-mono text-[9px] text-white/80">
                    ELEV: {current.elevation}
                  </div>

                  {/* Hover Inspect CTA Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="bg-white text-black font-label-caps text-[10px] px-4 py-2 font-bold tracking-widest flex items-center space-x-1">
                      <span>INSPECT BLUEPRINT</span>
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
                  01. VILLA
                </button>
                <button
                  onClick={() => setActiveTab("pavilion")}
                  className={`py-2 px-2 text-left border transition-colors ${
                    activeTab === "pavilion"
                      ? "border-white bg-white text-black font-bold"
                      : "border-white/15 text-white/50 hover:text-white hover:border-white/40"
                  }`}
                >
                  02. PAVILION
                </button>
                <button
                  onClick={() => setActiveTab("monolith")}
                  className={`py-2 px-2 text-left border transition-colors ${
                    activeTab === "monolith"
                      ? "border-white bg-white text-black font-bold"
                      : "border-white/15 text-white/50 hover:text-white hover:border-white/40"
                  }`}
                >
                  03. MONOLITH
                </button>
              </div>

              {/* Active Project Metadata Footer */}
              <div className="flex items-center justify-between pt-3 mt-1 font-mono text-[10px] text-white/60">
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
          <div className="border-l border-white/20 pl-4 py-1">
            <span className="font-mono text-[9px] text-white/40 block mb-1">
              [ 01 // TYPOLOGY ]
            </span>
            <p className="font-label-caps text-[11px] text-white/90">
              Monolithic Residential & Cultural Voids
            </p>
          </div>

          <div className="border-l border-white/20 pl-4 py-1">
            <span className="font-mono text-[9px] text-white/40 block mb-1">
              [ 02 // MATERIALITY ]
            </span>
            <p className="font-label-caps text-[11px] text-white/90">
              Raw Cast Concrete, Basalt Stone & Steel
            </p>
          </div>

          <div className="border-l border-white/20 pl-4 py-1">
            <span className="font-mono text-[9px] text-white/40 block mb-1">
              [ 03 // DISCIPLINE ]
            </span>
            <p className="font-label-caps text-[11px] text-white/90">
              High-Contrast Minimalist Spatial Geometry
            </p>
          </div>

          <div className="border-l border-white/20 pl-4 py-1">
            <span className="font-mono text-[9px] text-white/40 block mb-1">
              [ 04 // RECOGNITION ]
            </span>
            <p className="font-label-caps text-[11px] text-white/90">
              Mies Crown Hall Americas Prize Nominee
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
