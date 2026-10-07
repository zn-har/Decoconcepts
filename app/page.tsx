import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center px-margin-mobile md:px-margin-desktop relative pb-24 pt-12">
        <h1 className="font-display-xl text-primary max-w-7xl relative z-10 uppercase tracking-tighter">
          ARCHITECTURAL
          <br />
          MASTERY.
        </h1>
        <p className="font-body-lg text-on-surface-variant mt-8 max-w-2xl border-l border-white/20 pl-6">
          Structural integrity meets high-contrast minimalism. We design spaces
          that command attention through deliberate geometry and stark
          dichotomy.
        </p>
      </section>

      {/* Blueprint Divider */}
      <div className="w-full h-px bg-white/20 my-12 relative">
        <div className="absolute right-margin-mobile md:right-margin-desktop -top-3 font-label-caps text-on-surface-variant bg-background px-4">
          SELECTED WORKS // 2024
        </div>
      </div>

      {/* Asymmetrical Work Grid */}
      <section className="px-margin-mobile md:px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-12 gap-gutter relative max-w-container-max mx-auto">
        {/* Project 1 (8 Cols) */}
        <article className="md:col-span-8 relative group mb-12 md:mb-24">
          <Link href="/work/project-alpha" className="block">
            <div className="aspect-video w-full border border-white/20 relative overflow-hidden bg-surface-container-low">
              <Image
                src="/images/project_alpha.jpg"
                alt="Project Alpha"
                fill
                className="object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-background/90 border-t border-r border-white/20">
                <h2 className="font-label-caps text-primary">
                  PROJECT ALPHA // TOKYO
                </h2>
              </div>
            </div>
          </Link>
        </article>

        {/* Project 2 (4 Cols, Staggered) */}
        <article className="md:col-span-4 md:col-start-9 md:mt-48 relative group mb-12">
          <Link href="/work/the-monolith" className="block">
            <div className="aspect-square w-full border border-white/20 relative overflow-hidden bg-surface-container-low">
              <Image
                src="/images/monolith.jpg"
                alt="The Monolith"
                fill
                className="object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-background/90 border-t border-r border-white/20">
                <h2 className="font-label-caps text-primary">THE MONOLITH</h2>
              </div>
            </div>
          </Link>
        </article>

        {/* Project 3 (12 Cols full bleed) */}
        <article className="col-span-1 md:col-span-12 relative group my-12">
          <Link href="/work/brutalist-pavilion" className="block">
            <div className="h-[550px] w-full border border-white/20 relative overflow-hidden bg-surface-container-low">
              <Image
                src="/images/vista_pavilion.jpg"
                alt="Vista Pavilion"
                fill
                className="object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background border border-white/20 p-8 text-center group-hover:bg-primary group-hover:text-background transition-colors duration-0">
                <h2 className="font-headline-md font-bold mb-2">
                  VISTA PAVILION
                </h2>
                <p className="font-label-caps">VIEW CASE STUDY</p>
              </div>
            </div>
          </Link>
        </article>

        {/* Project 4 (12 Cols) */}
        <article className="col-span-1 md:col-span-12 relative group my-12">
          <Link href="/work/modernist-villa" className="block">
            <div className="h-[550px] w-full border border-white/20 relative overflow-hidden bg-surface-container-low">
              <Image
                src="/images/modernist_villa_hero.jpg"
                alt="The Modernist Villa"
                fill
                className="object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute bottom-6 left-6 bg-background/90 border border-white/20 p-6">
                <h2 className="font-headline-md font-bold mb-1">
                  THE MODERNIST VILLA
                </h2>
                <p className="font-label-caps text-on-surface-variant">
                  OSLO, NORWAY // 2023
                </p>
              </div>
            </div>
          </Link>
        </article>
      </section>

      {/* Minimalist CTA */}
      <section className="py-28 px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center relative border-t border-white/20">
        <h2 className="font-headline-lg text-primary mb-8 max-w-4xl">
          INITIATE DIALOGUE
        </h2>
        <Link
          href="/contact"
          className="border border-white/30 px-12 py-6 font-label-caps text-primary hover-invert tracking-widest bg-transparent inline-block"
        >
          COMMISSION A PROJECT
        </Link>
      </section>
    </>
  );
}
