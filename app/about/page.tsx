import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full max-w-container-max mx-auto">
      {/* About Section (Asymmetrical Layout) */}
      <section className="min-h-[85vh] pt-16 pb-24 px-margin-mobile md:px-margin-desktop blueprint-line relative">
        <div className="absolute left-1/3 top-0 bottom-0 draft-line-vertical hidden lg:block -z-10" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Large Typography / Brand Story */}
          <div className="lg:col-span-8 lg:col-start-1 flex flex-col justify-center">
            <h1 className="font-display-xl text-primary mb-12 uppercase leading-none">
              Structuring
              <br />
              Void Into
              <br />
              Form.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:ml-12">
              <p className="font-body-lg text-on-surface-variant">
                Decoconcepts operates at the intersection of rigid geometry and
                human experience. We do not decorate spaces; we engineer
                environments that command attention through silence and
                structural integrity.
              </p>
              <p className="font-body-sm text-on-surface-variant">
                Founded on the principles of architectural minimalism, our
                practice rejects the superfluous. Every line drawn is a
                commitment to permanence. Every material selected is an anchor to
                reality. Our work is a continuous exploration of high-contrast
                boldness within disciplined boundaries.
              </p>
            </div>
          </div>

          {/* Supporting Imagery / Blueprint Element */}
          <div className="lg:col-span-4 lg:col-start-9 mt-16 lg:mt-0 relative">
            <div className="aspect-[3/4] blueprint-border relative overflow-hidden group bg-surface-container-low">
              <Image
                src="/images/materiality_about.jpg"
                alt="Materiality Study"
                fill
                className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4">
                <span className="font-label-caps text-primary bg-background/80 px-3 py-1 backdrop-blur-sm blueprint-border">
                  FIG 01. MATERIALITY
                </span>
              </div>
            </div>
            {/* Decorative Drafting Lines */}
            <div className="absolute -right-8 top-1/4 w-16 h-px bg-white/30 hidden lg:block" />
            <div className="absolute -bottom-8 left-1/4 w-px h-16 bg-white/30 hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Manifesto / Data Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop blueprint-line">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter blueprint-border p-8 relative bg-surface-container-lowest/50">
          {/* Corner ticks */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary" />

          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-primary">
              01 // PHILOSOPHY
            </span>
            <h3 className="font-headline-md text-primary">Reduction.</h3>
            <p className="font-body-sm text-on-surface-variant">
              Stripping away the unnecessary to reveal the essential
              architecture of a space.
            </p>
          </div>
          <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-white/20 pt-8 md:pt-0 md:pl-8">
            <span className="font-label-caps text-primary">
              02 // METHODOLOGY
            </span>
            <h3 className="font-headline-md text-primary">Precision.</h3>
            <p className="font-body-sm text-on-surface-variant">
              Executing designs with surgical accuracy, where every millimeter
              is accounted for.
            </p>
          </div>
          <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-white/20 pt-8 md:pt-0 md:pl-8">
            <span className="font-label-caps text-primary">03 // OUTCOME</span>
            <h3 className="font-headline-md text-primary">Permanence.</h3>
            <p className="font-body-sm text-on-surface-variant">
              Creating structures and interiors designed to withstand the test
              of time and trend.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
