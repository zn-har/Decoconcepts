"use client";

import React, { useEffect, useRef, useState } from "react";

interface BlueprintDividerProps {
  label: string;
  sublabel?: string;
  coordinate?: string;
  className?: string;
}

export function BlueprintDivider({
  label,
  sublabel,
  coordinate,
  className = "",
}: BlueprintDividerProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div ref={ref} className={`w-full my-16 md:my-24 relative ${className}`}>
      {/* Animated Hairline Rule */}
      <div className="relative w-full h-[1px] bg-white/10 overflow-hidden">
        <div
          className="h-full bg-white/40 transition-all duration-1000 ease-out origin-left"
          style={{
            transform: inView ? "scaleX(1)" : "scaleX(0)",
          }}
        />
      </div>

      {/* Blueprint Markings and Labels */}
      <div className="flex justify-between items-center -top-3.5 absolute left-0 right-0 px-margin-mobile md:px-margin-desktop pointer-events-none">
        {coordinate ? (
          <div className="bg-background px-3 font-mono text-[10px] text-white/40 border-l border-r border-white/20">
            {coordinate}
          </div>
        ) : (
          <div className="bg-background px-3 font-mono text-[10px] text-white/40 border-l border-r border-white/20">
            +DATUM LVL
          </div>
        )}

        <div className="bg-background px-4 py-0.5 border border-white/20 font-label-caps text-[11px] text-primary flex items-center space-x-2">
          <span>{label}</span>
          {sublabel && (
            <>
              <span className="text-white/30">//</span>
              <span className="text-on-surface-variant">{sublabel}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
