export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  scope: string;
  heroImage: string;
  intentTitle: string;
  intentText1: string;
  intentText2: string;
  fig01Title: string;
  fig01Image: string;
  materialStudyTitle: string;
  materialStudyImage: string;
  elevationTitle: string;
  elevationImage: string;
  nextSlug: string;
  nextTitle: string;
}

export const PROJECTS: Record<string, Project> = {
  "modernist-villa": {
    slug: "modernist-villa",
    title: "THE MODERNIST VILLA",
    subtitle: "STRUCTURAL MONOLITH IN SCANDINAVIAN BEDROCK",
    location: "OSLO, NORWAY",
    year: "2023",
    scope: "FULL ARCHITECTURAL BUILD",
    heroImage: "/images/modernist_villa_hero.jpg",
    intentTitle: "STRUCTURAL INTENT",
    intentText1:
      "Conceived as a monolith rising from the Scandinavian bedrock, the villa employs a strict grid logic. Every intersection of concrete and glass is mathematically derived from the site's natural topography.",
    intentText2:
      "The absence of ornamentation forces attention onto the purity of volume and the interplay of natural light across raw surfaces.",
    fig01Title: "FIG 01. INTERIOR VOID",
    fig01Image: "/images/interior_void.jpg",
    materialStudyTitle: "Material Study: Concrete & Steel",
    materialStudyImage: "/images/material_study.jpg",
    elevationTitle: "ELEVATION_SOUTH",
    elevationImage: "/images/cantilever.jpg",
    nextSlug: "brutalist-pavilion",
    nextTitle: "VISTA PAVILION",
  },
  "brutalist-pavilion": {
    slug: "brutalist-pavilion",
    title: "VISTA PAVILION",
    subtitle: "A MONUMENTAL EXPONSE OF POLISHED REFLECTION AND SILENCE",
    location: "KYOTO, JAPAN",
    year: "2024",
    scope: "EXHIBITION PAVILION & VOID STUDY",
    heroImage: "/images/vista_pavilion.jpg",
    intentTitle: "SPATIAL DYNAMICS",
    intentText1:
      "Designed as a stark sanctuary of silence, the Vista Pavilion channels natural daylight through narrow vertical incisions, slicing across dark polished stone.",
    intentText2:
      "The minimal linear geometry frames the surrounding landscape as living architectural artwork.",
    fig01Title: "FIG 01. LIGHT CANYON",
    fig01Image: "/images/project_alpha.jpg",
    materialStudyTitle: "Material Study: Polished Basalt & Glass",
    materialStudyImage: "/images/materiality_about.jpg",
    elevationTitle: "ELEVATION_EAST",
    elevationImage: "/images/monolith.jpg",
    nextSlug: "the-monolith",
    nextTitle: "THE MONOLITH",
  },
  "the-monolith": {
    slug: "the-monolith",
    title: "THE MONOLITH",
    subtitle: "BRUTALIST EXTERIOR & RIGID VERTICAL LOUVERS",
    location: "ZURICH, SWITZERLAND",
    year: "2023",
    scope: "FACADE & HIGH-RISE STRUCTURE",
    heroImage: "/images/monolith.jpg",
    intentTitle: "GEOMETRIC DISCIPLINE",
    intentText1:
      "A brutalist exterior facade featuring rigid vertical louvers and heavy concrete masses, casting deep, sharp shadows across urban space.",
    intentText2:
      "The dichrome massing emphasizes the contrast of solid stone and void intervals.",
    fig01Title: "FIG 01. STRUCTURAL FACADE",
    fig01Image: "/images/monolith.jpg",
    materialStudyTitle: "Material Study: Precast Concrete & Louvers",
    materialStudyImage: "/images/material_study.jpg",
    elevationTitle: "ELEVATION_NORTH",
    elevationImage: "/images/modernist_villa_hero.jpg",
    nextSlug: "project-alpha",
    nextTitle: "PROJECT ALPHA",
  },
  "project-alpha": {
    slug: "project-alpha",
    title: "PROJECT ALPHA",
    subtitle: "INTERIOR ARCHITECTURE & DRAMATIC SHADOWPLAY",
    location: "TOKYO, JAPAN",
    year: "2024",
    scope: "INTERIOR ARCHITECTURE",
    heroImage: "/images/project_alpha.jpg",
    intentTitle: "INTERIOR VOLUMES",
    intentText1:
      "A stark minimalist architectural interior featuring dramatic lighting, sharp geometric shadows, and raw concrete textures.",
    intentText2:
      "Shot in ultra-high resolution with deep charcoal and pure white tones, emphasizing structural lines.",
    fig01Title: "FIG 01. VOID INTERSECTION",
    fig01Image: "/images/interior_void.jpg",
    materialStudyTitle: "Material Study: Raw Slate & Anodized Metal",
    materialStudyImage: "/images/materiality_about.jpg",
    elevationTitle: "ELEVATION_WEST",
    elevationImage: "/images/cantilever.jpg",
    nextSlug: "modernist-villa",
    nextTitle: "THE MODERNIST VILLA",
  },
};
