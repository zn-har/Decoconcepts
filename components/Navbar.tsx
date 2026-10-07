"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "WORK", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 bg-background/90 backdrop-blur-md border-b border-white/10">
      <Link
        href="/"
        className="font-headline-md text-headline-md font-bold tracking-tighter text-primary hover:opacity-80 transition-opacity"
      >
        DECOCONCEPTS
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item, index) => {
          const isActive =
            item.href === "/"
              ? pathname === "/" || pathname.startsWith("/work")
              : pathname.startsWith(item.href);

          return (
            <React.Fragment key={item.label}>
              {index > 0 && <span className="text-white/30">|</span>}
              <Link
                href={item.href}
                className={`font-label-caps text-label-caps px-2 py-1 transition-colors duration-0 ${
                  isActive
                    ? "text-primary border-b border-primary"
                    : "text-on-surface-variant hover:text-primary hover:bg-primary hover:text-background"
                }`}
              >
                {item.label}
              </Link>
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex items-center justify-center p-2 text-primary hover:bg-primary hover:text-background transition-colors duration-0 border border-white/20"
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/20 flex flex-col p-6 space-y-4 z-50">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-label-caps text-label-caps text-primary py-3 border-b border-white/10 hover:bg-primary hover:text-background px-4"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
