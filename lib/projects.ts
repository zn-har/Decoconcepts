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
    title: "THE WAYANAD MONSOON VILLA",
    subtitle: "EXPOSED LATERITE, TEAK TIMBERS & SLOPED TERRACOTTA GABLES",
    location: "WAYANAD, KERALA",
    year: "2024",
    scope: "FULL TROPICAL RESIDENCE",
    heroImage: "/images/modernist_villa_hero.jpg",
    intentTitle: "TROPICAL VERNACULAR LOGIC",
    intentText1:
      "Conceived as a dialogue between Kerala's traditional Thachu Shastra principles and tropical modernism, the villa sits harmoniously in the mist-laden Western Ghats. Raw porous laterite stone (Vettukallu) walls anchor the structure, while massive sloped terracotta tile gables shield against torrential monsoon rains.",
    intentText2:
      "Seamless floor-to-ceiling glass pavilions open onto black granite reflection pools, merging interior warmth with lush rainforest greenery.",
    fig01Title: "FIG 01. TIMBER RAFTER DETAIL",
    fig01Image: "/images/modernist_villa_hero.jpg",
    materialStudyTitle: "Material Study: Exposed Laterite & Seasoned Teak",
    materialStudyImage: "/images/material_study.jpg",
    elevationTitle: "ELEVATION_WEST_MONSOON",
    elevationImage: "/images/cantilever.jpg",
    nextSlug: "brutalist-pavilion",
    nextTitle: "ALLEPPEY BACKWATER PAVILION",
  },
  "brutalist-pavilion": {
    slug: "brutalist-pavilion",
    title: "ALLEPPEY BACKWATER PAVILION",
    subtitle: "FLOATING TEAK TIMBER RAFTERS & WATER REFLECTION SANCTUARY",
    location: "ALLEPPEY, KERALA",
    year: "2024",
    scope: "WATERSIDE SANCTUARY & PAVILION",
    heroImage: "/images/vista_pavilion.jpg",
    intentTitle: "RIPARIAN GEOMETRY",
    intentText1:
      "Hovering gently over the tranquil Kerala backwaters, this pavilion reinterprets the traditional Kettuvallam boatcraft through a minimalist structural canopy. Deeply overhanging eaves and timber louvers deflect tropical heat while capturing cooling water breezes.",
    intentText2:
      "A mirror-finish black stone reflection pool dissolves the boundary between the architectural envelope and the palm-fringed lagoon.",
    fig01Title: "FIG 01. WATER MIRROR & TIMBER COLONNADE",
    fig01Image: "/images/vista_pavilion.jpg",
    materialStudyTitle: "Material Study: Handcrafted Teak & Brass Hardware",
    materialStudyImage: "/images/material_study.jpg",
    elevationTitle: "ELEVATION_LAGOON_EAST",
    elevationImage: "/images/vista_pavilion.jpg",
    nextSlug: "the-monolith",
    nextTitle: "THE LATERITE MONOLITH",
  },
  "the-monolith": {
    slug: "the-monolith",
    title: "THE LATERITE MONOLITH",
    subtitle: "EXPOSED VETTUKALLU MASONRY & TERRACOTTA JALI SCREENS",
    location: "CALICUT, KERALA",
    year: "2023",
    scope: "TROPICAL FACADE & CULTURAL HUB",
    heroImage: "/images/monolith.jpg",
    intentTitle: "PASSIVE CLIMATE DISCIPLINE",
    intentText1:
      "A monumental exploration of Kerala vernacular cooling inspired by Laurie Baker. Hand-cut porous laterite stone blocks form a breathable monolithic envelope, articulated by intricate terracotta brick jali screens that filter harsh sunlight into rhythmic dappled shadows.",
    intentText2:
      "Seasoned Malabar teak louvers pivot to channel the coastal breeze through high-volume vertical voids, eliminating the need for artificial cooling.",
    fig01Title: "FIG 01. BRICK JALI LATTICE",
    fig01Image: "/images/monolith.jpg",
    materialStudyTitle: "Material Study: Porous Vettukallu & Terracotta Jali",
    materialStudyImage: "/images/material_study.jpg",
    elevationTitle: "ELEVATION_COASTAL_NORTH",
    elevationImage: "/images/monolith.jpg",
    nextSlug: "project-alpha",
    nextTitle: "KOCHI NALUKETTU RESIDENCE",
  },
  "project-alpha": {
    slug: "project-alpha",
    title: "KOCHI NALUKETTU RESIDENCE",
    subtitle: "REINVENTED NADUMUTTAM RAIN COURTYARD & BLACK OXIDE INTERIORS",
    location: "FORT KOCHI, KERALA",
    year: "2024",
    scope: "COURTYARD RESIDENCE & INTERIOR",
    heroImage: "/images/project_alpha.jpg",
    intentTitle: "CENTRAL VOID & MONSOON HARVEST",
    intentText1:
      "A contemporary revival of the classical four-hall Kerala Nalukettu. At its core lies the open-to-sky Nadumuttam, where monsoon rainfall cascades into a sunken black granite water basin surrounded by traditional hand-carved teak pillars.",
    intentText2:
      "Hand-polished black oxide floors with inlaid brass motifs create a calm, tactile ground plane that stays naturally cool under the tropical sun.",
    fig01Title: "FIG 01. SUNKEN RAIN BASIN",
    fig01Image: "/images/project_alpha.jpg",
    materialStudyTitle: "Material Study: Polished Black Oxide & Brass Inlay",
    materialStudyImage: "/images/material_study.jpg",
    elevationTitle: "ELEVATION_COURTYARD_SECTION",
    elevationImage: "/images/project_alpha.jpg",
    nextSlug: "modernist-villa",
    nextTitle: "THE WAYANAD MONSOON VILLA",
  },
};
