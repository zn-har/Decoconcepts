"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fade-up" | "clip-left" | "clip-up" | "fade" | "scale-in";
  delay?: number;
  threshold?: number;
  duration?: number;
}

export function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  threshold = 0.15,
  duration = 700,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  const getVariantStyles = () => {
    switch (variant) {
      case "clip-up":
        return {
          clipPath: isVisible
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
          opacity: isVisible ? 1 : 0,
        };
      case "clip-left":
        return {
          clipPath: isVisible
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 0, 0 0, 0 100%, 0 100%)",
          transform: isVisible ? "translateX(0)" : "translateX(-20px)",
          opacity: isVisible ? 1 : 0,
        };
      case "scale-in":
        return {
          transform: isVisible ? "scale(1)" : "scale(0.96)",
          opacity: isVisible ? 1 : 0,
        };
      case "fade":
        return {
          opacity: isVisible ? 1 : 0,
        };
      case "fade-up":
      default:
        return {
          transform: isVisible ? "translateY(0)" : "translateY(36px)",
          opacity: isVisible ? 1 : 0,
        };
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...getVariantStyles(),
        transitionProperty: "transform, opacity, clip-path",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
