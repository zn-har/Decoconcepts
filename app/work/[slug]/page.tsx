import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = PROJECTS[params.slug] || PROJECTS["modernist-villa"];

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col justify-end pb-16 px-margin-mobile md:px-margin-desktop mt-4">
        <div className="absolute inset-0 z-0 px-margin-mobile md:px-margin-desktop top-0 bottom-16">
          <div className="w-full h-full relative border border-white/20 overflow-hidden bg-surface-container-low">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              className="object-cover grayscale opacity-80"
            />
            {/* Blueprint Overlay Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/30 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-0 left-1/3 w-[1px] h-full bg-white/30 mix-blend-overlay pointer-events-none" />
          </div>
        </div>

        <div className="relative z-10 max-w-container-max mx-auto w-full grid grid-cols-4 md:grid-cols-12 gap-gutter">
          <div className="col-span-4 md:col-span-8 md:col-start-1 bg-background/90 backdrop-blur-md p-8 border border-white/20 inline-block">
            <h1 className="font-display-xl uppercase leading-none mb-4 tracking-tighter text-primary">
              {project.title}
            </h1>
            <div className="flex flex-col md:flex-row gap-8 mt-8 font-label-caps text-on-surface-variant">
              <div>
                <span className="block text-primary mb-1">LOCATION</span>
                <span>{project.location}</span>
              </div>
              <div>
                <span className="block text-primary mb-1">YEAR</span>
                <span>{project.year}</span>
              </div>
              <div>
                <span className="block text-primary mb-1">SCOPE</span>
                <span>{project.scope}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Blueprint Divider */}
      <div className="w-full h-[1px] bg-white my-16 md:my-24 relative">
        <div className="absolute left-margin-mobile md:left-margin-desktop top-[-4px] w-2 h-2 border border-white rounded-full bg-background" />
        <div className="absolute right-margin-mobile md:right-margin-desktop top-[-4px] w-2 h-2 border border-white rounded-full bg-background" />
      </div>

      {/* Detail Grid Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-gutter items-start">
          {/* Text Block */}
          <div className="col-span-4 md:col-span-4 pr-0 md:pr-8 mb-16 md:mb-0">
            <h2 className="font-headline-md mb-8 border-b border-white/20 pb-4 text-primary">
              {project.intentTitle}
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-6">
              {project.intentText1}
            </p>
            <p className="font-body-lg text-on-surface-variant">
              {project.intentText2}
            </p>
            <a
              href={`#floorplans`}
              className="btn-architectural hover-invert mt-12 px-8 py-4 font-label-caps uppercase w-full text-center inline-block border border-white"
            >
              VIEW FLOORPLANS & TECHNICAL SPEC
            </a>
          </div>

          {/* Asymmetric Image Block 1 */}
          <div className="col-span-4 md:col-span-8 relative group">
            <div className="border border-white p-2 relative aspect-[16/9] md:aspect-[21/9]">
              <Image
                src={project.fig01Image}
                alt={project.fig01Title}
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="absolute bottom-6 left-6 bg-background px-4 py-2 border border-white font-label-caps text-primary">
              {project.fig01Title}
            </div>
          </div>
        </div>
      </section>

      {/* Staggered Layout Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-gutter">
          {/* Small Image Left */}
          <div className="col-span-4 md:col-span-5 md:mt-32 relative">
            <div className="border border-white/50 relative aspect-square">
              {/* Drafting marks */}
              <div className="absolute -top-4 -left-4 w-8 h-[1px] bg-white" />
              <div className="absolute -top-4 -left-4 w-[1px] h-8 bg-white" />
              <Image
                src={project.materialStudyImage}
                alt={project.materialStudyTitle}
                fill
                className="object-cover grayscale"
              />
            </div>
            <p className="font-label-caps mt-4 text-on-surface-variant tracking-widest uppercase">
              {project.materialStudyTitle}
            </p>
          </div>

          {/* Large Image Right */}
          <div className="col-span-4 md:col-span-6 md:col-start-7 mt-16 md:mt-0 relative">
            <div className="border border-white p-4 bg-surface-container-low aspect-[3/4] relative">
              <Image
                src={project.elevationImage}
                alt={project.elevationTitle}
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 rotate-90 hidden md:block">
              <span className="font-label-caps text-on-surface-variant whitespace-nowrap uppercase">
                {project.elevationTitle}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Navigation */}
      <section className="border-t border-white w-full py-16 md:py-24 px-margin-mobile md:px-margin-desktop mt-16 relative overflow-hidden group hover:bg-white transition-colors duration-0">
        <Link href={`/work/${project.nextSlug}`} className="block">
          <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-start md:items-end group-hover:text-background transition-colors duration-0">
            <div>
              <span className="font-label-caps block mb-4">NEXT PROJECT</span>
              <h3 className="font-headline-lg uppercase leading-none tracking-tighter">
                {project.nextTitle}
              </h3>
            </div>
            <div className="mt-8 md:mt-0 font-label-caps flex items-center gap-2">
              VIEW <ArrowRight size={16} />
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
