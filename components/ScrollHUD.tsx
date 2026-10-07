"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollHUD() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [elevation, setElevation] = useState("0.00");
  const [currentSection, setCurrentSection] = useState("01 // HERO");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;

          setScrollProgress(progress);
          // Scale elevation from +0.00m to +24.80m
          const currentMeters = ((progress / 100) * 24.8).toFixed(2);
          setElevation(currentMeters);
          setShowBackToTop(scrollTop > 250);

          // Detect active section
          const sections = document.querySelectorAll("section[data-section-id]");
          let activeName = "01 // HERO";
          sections.forEach((sec) => {
            const rect = sec.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.15) {
              activeName = sec.getAttribute("data-section-id") || activeName;
            }
          });
          setCurrentSection(activeName);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Precision Progress Line */}
      <div className="fixed top-20 left-0 right-0 z-40 pointer-events-none">
        <div className="w-full h-[1px] bg-white/10 relative">
          <div
            className="h-full bg-white transition-[width] duration-75 ease-out relative"
            style={{ width: `${scrollProgress}%` }}
          >
            {/* Lead crosshair indicator */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1.5 h-1.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          </div>
        </div>

        {/* Precision Telemetry Bar */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-1 flex items-center justify-between font-label-caps text-[10px] text-white/40 tracking-widest bg-background/60 backdrop-blur-sm border-b border-white/5">
          <div className="flex items-center space-x-4">
            <span className="text-white/70">
              ELEVATION: <span className="text-white font-mono">+{elevation}m</span>
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="hidden sm:inline">
              DATUM: <span className="text-white/60">ARABIAN SEA +0.00m</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
            <span className="text-white/80">{currentSection}</span>
          </div>

          <div className="flex items-center space-x-4 font-mono">
            <span className="hidden sm:inline text-white/40">SCALE 1:50</span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-white/90">
              [{Math.round(scrollProgress).toString().padStart(3, "0")}%]
            </span>
          </div>
        </div>
      </div>

      {/* Floating Architectural Return to Datum Button */}
      <div
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 transition-all duration-300 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="group flex items-center space-x-3 bg-surface-container-low/90 backdrop-blur-md border border-white/20 px-4 py-3 hover:bg-white hover:text-black transition-all duration-150 cursor-pointer"
          aria-label="Return to Datum"
        >
          <span className="font-label-caps text-[11px] tracking-widest text-primary group-hover:text-black">
            DATUM +0.00m
          </span>
          <ArrowUp className="w-3.5 h-3.5 text-primary group-hover:text-black transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </>
  );
}
