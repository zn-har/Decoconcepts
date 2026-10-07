"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ParallaxProjectCardProps {
  slug: string;
  title: string;
  location: string;
  year: string;
  typology: string;
  imageSrc: string;
  index: string;
  aspect?: "video" | "square" | "panoramic" | "tall";
  className?: string;
  priority?: boolean;
}

export function ParallaxProjectCard({
  slug,
  title,
  location,
  year,
  typology,
  imageSrc,
  index,
  aspect = "video",
  className = "",
  priority = false,
}: ParallaxProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Intersection observer to only calculate parallax when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "100px 0px 100px 0px" }
    );
    observer.observe(el);

    let animationFrameId: number;

    const handleScroll = () => {
      if (!isInView && !priority) return;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate relative position from center of viewport (-1 to 1)
      const centerDistance = rect.top + rect.height / 2 - viewportHeight / 2;
      const progress = centerDistance / viewportHeight;

      // Smooth parallax translation range: -35px to +35px
      const parallaxVal = Math.round(progress * -45);
      setOffsetY(parallaxVal);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      observer.unobserve(el);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, priority]);

  const getAspectClass = () => {
    switch (aspect) {
      case "square":
        return "aspect-square";
      case "panoramic":
        return "h-[450px] md:h-[580px]";
      case "tall":
        return "h-[500px] md:h-[650px]";
      case "video":
      default:
        return "aspect-[16/10] md:aspect-video";
    }
  };

  return (
    <article
      ref={containerRef}
      className={`relative group ${className}`}
    >
      <Link href={`/work/${slug}`} className="block relative">
        {/* Architectural Card Outer Container */}
        <div
          className={`w-full ${getAspectClass()} border border-white/20 relative overflow-hidden bg-surface-container-low transition-colors duration-200 group-hover:border-white/60`}
        >
          {/* Parallax Image Wrapper */}
          <div
            className="absolute inset-[-10%] w-[120%] h-[120%] transition-transform duration-75 ease-out will-change-transform"
            style={{
              transform: `translate3d(0, ${offsetY}px, 0) scale(1.05)`,
            }}
          >
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1200px"
              priority={priority}
              className="object-cover grayscale opacity-75 contrast-110 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </div>

          {/* Corner Architectural Crosshair Marks */}
          <span className="absolute top-2 left-2 text-white/40 text-[10px] font-mono leading-none pointer-events-none select-none">
            +
          </span>
          <span className="absolute top-2 right-2 text-white/40 text-[10px] font-mono leading-none pointer-events-none select-none">
            +
          </span>
          <span className="absolute bottom-2 left-2 text-white/40 text-[10px] font-mono leading-none pointer-events-none select-none">
            +
          </span>
          <span className="absolute bottom-2 right-2 text-white/40 text-[10px] font-mono leading-none pointer-events-none select-none">
            +
          </span>

          {/* Top Index Badge */}
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-background/90 backdrop-blur-sm border border-white/20 px-3 py-1 font-mono text-[10px] text-white/70 tracking-wider">
              {index} // {typology}
            </div>
          </div>

          {/* Top Right Quick View Indicator */}
          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="bg-white text-black p-2 border border-white flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Bottom Architectural Info Plaque */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-background/95 via-background/80 to-transparent border-t border-white/15 backdrop-blur-[2px] transition-all duration-200 flex flex-col md:flex-row md:items-end justify-between gap-2">
            <div>
              <h3 className="font-headline-md font-bold text-primary tracking-tight group-hover:translate-x-1 transition-transform duration-200">
                {title}
              </h3>
              <p className="font-label-caps text-on-surface-variant text-[11px] mt-1 tracking-widest">
                {location} // {year}
              </p>
            </div>

            <div className="hidden md:flex items-center font-label-caps text-[10px] text-white/50 group-hover:text-white transition-colors">
              <span>EXPLORE SPECIFICATIONS</span>
              <span className="ml-2 font-mono">→</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
