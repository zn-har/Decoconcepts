import React from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BlueprintDivider } from "@/components/BlueprintDivider";

export default function AboutPage() {
  return (
    <div className="w-full max-w-container-max mx-auto">
      {/* About Section (Asymmetrical Layout) */}
      <section className="min-h-[85vh] pt-16 pb-24 px-margin-mobile md:px-margin-desktop relative">
        <div className="absolute left-1/3 top-0 bottom-0 draft-line-vertical hidden lg:block -z-10" />
        
        {/* Top Telemetry */}
        <div className="flex items-center justify-between text-[11px] font-mono text-white/40 border-b border-white/10 pb-4 mb-12">
          <span>PRACTICE PROFILE // EST. 2018</span>
          <span>KOCHI • CALICUT • WAYANAD</span>
          <span>LAT 9.9312° N // LON 76.2673° E</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Large Typography / Brand Story */}
          <div className="lg:col-span-8 lg:col-start-1 flex flex-col justify-center">
            <ScrollReveal variant="clip-up">
              <h1 className="font-display-xl text-primary mb-12 uppercase leading-none">
                Structuring
                <br />
                <span className="text-white">Tropical Void</span>
                <br />
                Into Form.
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:ml-8 border-l-2 border-white pl-6">
                <p className="font-body-lg text-on-surface-variant leading-relaxed">
                  Decoconcepts operates at the intersection of stark geometric discipline
                  and tropical brutalism. We reject decorative clichés; we sculpt
                  monolithic sanctuaries that command presence through raw unplastered masonry,
                  monsoon responsiveness, and razor-sharp chiaroscuro light.
                </p>
                <p className="font-body-sm text-on-surface-variant leading-relaxed">
                  Drawing from Kerala&apos;s climate-responsive legacy and radical architectural reduction,
                  every structural element is essential. We combine raw board-marked concrete,
                  porous unadorned laterite, perforated breathing jalis, and seamless black oxide planes
                  to craft spaces of profound silence.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Supporting Imagery / Materiality Study */}
          <div className="lg:col-span-4 lg:col-start-9 mt-16 lg:mt-0 relative">
            <ScrollReveal variant="scale-in" delay={300}>
              <div className="aspect-[3/4] border border-white/20 relative overflow-hidden group bg-surface-container-low shadow-2xl">
                {/* Corner Crosshairs */}
                <span className="absolute top-2 left-2 text-white/40 text-[10px] font-mono select-none">+</span>
                <span className="absolute top-2 right-2 text-white/40 text-[10px] font-mono select-none">+</span>
                <span className="absolute bottom-2 left-2 text-white/40 text-[10px] font-mono select-none">+</span>
                <span className="absolute bottom-2 right-2 text-white/40 text-[10px] font-mono select-none">+</span>

                <Image
                  src="/images/materiality_about.jpg"
                  alt="Raw Concrete and Steel Structural Column"
                  fill
                  quality={95}
                  className="object-cover contrast-125 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-label-caps text-primary bg-black/90 px-3 py-2 backdrop-blur-sm border border-white/30 flex items-center justify-between">
                    <span>FIG 01. STRUCTURAL INTERSECTION</span>
                    <span className="font-mono text-[9px] text-white/60">RAW CONCRETE & STEEL</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            {/* Decorative Drafting Lines */}
            <div className="absolute -right-8 top-1/4 w-16 h-px bg-white/30 hidden lg:block" />
            <div className="absolute -bottom-8 left-1/4 w-px h-16 bg-white/30 hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Blueprint Divider */}
      <BlueprintDivider
        label="DISCIPLINE PILLARS"
        sublabel="STRUCTURAL METHODOLOGY"
        coordinate="ARABIAN SEA DATUM"
      />

      {/* Manifesto / Data Section */}
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop">
        <ScrollReveal variant="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter border border-white/20 p-8 relative bg-surface-container-lowest/70 shadow-2xl">
            {/* Corner ticks */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white" />

            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] text-white/50">
                01 // REDUCTION
              </span>
              <h3 className="font-headline-md text-primary">Structural Truth.</h3>
              <p className="font-body-sm text-on-surface-variant leading-relaxed">
                Stripping away all decorative cladding to reveal the raw monumental power of
                cast concrete, unplastered masonry, and geometric shadow.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-white/20 pt-8 md:pt-0 md:pl-8">
              <span className="font-mono text-[10px] text-white/50">
                02 // CLIMATIC GEOMETRY
              </span>
              <h3 className="font-headline-md text-primary">Passive Aeration.</h3>
              <p className="font-body-sm text-on-surface-variant leading-relaxed">
                Engineering perforated brick and laterite jali breeze screens that naturally
                channel coastal winds through double-height voids, eliminating thermal load.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-white/20 pt-8 md:pt-0 md:pl-8">
              <span className="font-mono text-[10px] text-white/50">
                03 // MONUMENTAL VOID
              </span>
              <h3 className="font-headline-md text-primary">Monsoon Light.</h3>
              <p className="font-body-sm text-on-surface-variant leading-relaxed">
                Sunken rain courtyards and crisp diagonal skylight incisions framing the drama
                of tropical rainfall across polished black oxide floors.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
