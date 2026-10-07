import React from "react";

export function DraftingLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Vertical center guideline */}
      <div className="absolute left-1/2 top-0 bottom-0 hairline-y opacity-30 transform -translate-x-1/2" />
      {/* Horizontal guideline */}
      <div className="absolute top-[20%] left-0 right-0 hairline-x opacity-30" />

      {/* Grid columns overlay */}
      <div className="w-full h-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-4 md:grid-cols-12 gap-gutter opacity-10">
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
    </div>
  );
}
