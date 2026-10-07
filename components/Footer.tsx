import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-12 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8 bg-background border-t border-white relative z-10">
      <div className="flex flex-col items-center md:items-start">
        <Link
          href="/"
          className="font-headline-md text-headline-md text-primary font-bold"
        >
          DECOCONCEPTS
        </Link>
        <span className="font-mono text-[9px] text-white/60 tracking-wider mt-1">
          TROPICAL BRUTALISM & MINIMALISM // KOCHI • WAYANAD • CALICUT
        </span>
      </div>
      <div className="font-label-caps text-label-caps text-on-surface-variant text-center md:text-left">
        ©2024 DECOCONCEPTS ARCHITECTS. ALL RIGHTS RESERVED.
      </div>
      <div className="flex space-x-6">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-0"
        >
          INSTAGRAM
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-0"
        >
          LINKEDIN
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-0"
        >
          TWITTER
        </a>
      </div>
    </footer>
  );
}
