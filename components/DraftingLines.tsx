"use client";

import React, { useEffect, useState } from "react";

export function DraftingLines() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Subtle Structural Vertical Center Guideline */}
      <div className="absolute left-1/2 top-0 bottom-0 hairline-y opacity-20 transform -translate-x-1/2" />

      {/* Dynamic Cursor Crosshair Lines (Subtle) */}
      {mousePos.x > 0 && (
        <>
          <div
            className="absolute top-0 bottom-0 w-[0.5px] bg-white/5 pointer-events-none transition-transform duration-75 ease-out"
            style={{ transform: `translateX(${mousePos.x}px)` }}
          />
          <div
            className="absolute left-0 right-0 h-[0.5px] bg-white/5 pointer-events-none transition-transform duration-75 ease-out"
            style={{ transform: `translateY(${mousePos.y}px)` }}
          />
        </>
      )}

      {/* Grid Columns Overlay */}
      <div className="w-full h-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-4 md:grid-cols-12 gap-gutter opacity-[0.07]">
        <div className="col-span-1 border-x border-white/20 h-full" />
        <div className="col-span-1 border-r border-white/20 h-full hidden md:block" />
        <div className="col-span-1 border-r border-white/20 h-full hidden md:block" />
        <div className="col-span-1 border-r border-white/20 h-full" />
        <div className="col-span-1 border-r border-white/20 h-full hidden md:block" />
        <div className="col-span-1 border-r border-white/20 h-full hidden md:block" />
        <div className="col-span-1 border-r border-white/20 h-full" />
        <div className="col-span-1 border-r border-white/20 h-full hidden md:block" />
        <div className="col-span-1 border-r border-white/20 h-full hidden md:block" />
        <div className="col-span-1 border-r border-white/20 h-full" />
        <div className="col-span-1 border-r border-white/20 h-full hidden md:block" />
        <div className="col-span-1 border-r border-white/20 h-full hidden md:block" />
      </div>

      {/* Side Elevation Axis Ticks */}
      <div className="absolute left-2 top-24 bottom-12 flex flex-col justify-between font-mono text-[8px] text-white/15 hidden lg:flex">
        <span>+24.0m</span>
        <span>+18.0m</span>
        <span>+12.0m</span>
        <span>+06.0m</span>
        <span>+00.0m</span>
      </div>

      {/* Corner Architectural Registration Marks */}
      <div className="absolute top-24 left-4 font-mono text-[9px] text-white/20 hidden md:block">
        [SYS // DECO.ARCH]
      </div>
      <div className="absolute top-24 right-4 font-mono text-[9px] text-white/20 hidden md:block text-right">
        [GRID // 1440.MOD]
      </div>
    </div>
  );
}
