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
    title: "THE WAYANAD CLIFF MONOLITH",
    subtitle: "CANTILEVERED BOARD-MARKED CONCRETE & LATERITE SLAB",
    location: "WAYANAD, KERALA",
    year: "2024",
    scope: "FULL RESIDENTIAL BUILD",
    heroImage: "/images/modernist_villa_hero.jpg",
    intentTitle: "STRUCTURAL MASSING & CLIFF VOID",
    intentText1:
      "Conceived as a raw monolithic volume embedded directly into the steep rocky topography of Wayanad. The residence rejects ornamental embellishment, utilizing massive board-marked concrete cantilevers and unplastered laterite stone to withstand extreme monsoon exposure.",
    intentText2:
      "Stark horizontal fenestrations frame panoramic vistas of misty rain valleys while maintaining uncompromising spatial privacy.",
    fig01Title: "FIG 01. CANTILEVERED VOID",
    fig01Image: "/images/modernist_villa_hero.jpg",
    materialStudyTitle: "Material Study: Board-Marked Concrete & Laterite",
    materialStudyImage: "/images/material_study.jpg",
    elevationTitle: "ELEVATION_WEST_MONSOON",
    elevationImage: "/images/cantilever.jpg",
    nextSlug: "brutalist-pavilion",
    nextTitle: "ALLEPPEY RIPARIAN PAVILION",
  },
  "brutalist-pavilion": {
    slug: "brutalist-pavilion",
    title: "ALLEPPEY RIPARIAN PAVILION",
    subtitle: "RAW CONCRETE COLONNADE & OBSIDIAN WATER COURT",
    location: "ALLEPPEY, KERALA",
    year: "2024",
    scope: "WATERSIDE SANCTUARY & PAVILION",
    heroImage: "/images/vista_pavilion.jpg",
    intentTitle: "LINEAR REPETITION & WATER PLANE",
    intentText1:
      "A pure exercise in architectural reduction. A rhythm of monolithic cast-concrete pillars borders a mirror-finish black stone reflection court, dissolving the boundary between structural discipline and the tranquil riparian lagoon.",
    intentText2:
      "Natural tropical light is channeled across bare mineral surfaces, creating a silent sanctuary of chiaroscuro reflection.",
    fig01Title: "FIG 01. CONCRETE COLONNADE & WATER MIRROR",
    fig01Image: "/images/vista_pavilion.jpg",
    materialStudyTitle: "Material Study: Cast Concrete & Blackened Steel",
    materialStudyImage: "/images/material_study.jpg",
    elevationTitle: "ELEVATION_LAGOON_EAST",
    elevationImage: "/images/vista_pavilion.jpg",
    nextSlug: "the-monolith",
    nextTitle: "THE LATERITE MONOLITH",
  },
  "the-monolith": {
    slug: "the-monolith",
    title: "THE LATERITE MONOLITH",
    subtitle: "UNPLASTERED VETTUKALLU MASONRY & PERFORATED JALI LATTICE",
    location: "CALICUT, KERALA",
    year: "2023",
    scope: "FACADE STRUCTURE & CULTURAL VOID",
    heroImage: "/images/monolith.jpg",
    intentTitle: "PERFORATED GEOMETRY & CLIMATIC COOLING",
    intentText1:
      "A monolithic civic structure engineered with hand-cut unplastered laterite blocks and geometric brick jali screens. The perforated facade acts as a passive climatic breathing filter, converting harsh coastal glare into sharp geometric shadow patterns.",
    intentText2:
      "Vertical structural louvers and monumental interior air chasms induce continuous natural convective cooling without mechanical ventilation.",
    fig01Title: "FIG 01. BRICK JALI SCREEN",
    fig01Image: "/images/monolith.jpg",
    materialStudyTitle: "Material Study: Porous Laterite & Precast Louvers",
    materialStudyImage: "/images/material_study.jpg",
    elevationTitle: "ELEVATION_COASTAL_NORTH",
    elevationImage: "/images/monolith.jpg",
    nextSlug: "project-alpha",
    nextTitle: "THE KOCHI VOID RESIDENCE",
  },
  "project-alpha": {
    slug: "project-alpha",
    title: "THE KOCHI VOID RESIDENCE",
    subtitle: "SUNKEN RAIN APERTURE & POLISHED BLACK OXIDE INTERIORS",
    location: "FORT KOCHI, KERALA",
    year: "2024",
    scope: "MINIMALIST COURTYARD RESIDENCE",
    heroImage: "/images/project_alpha.jpg",
    intentTitle: "CENTRAL APERTURE & CHIAROSCURO LIGHT",
    intentText1:
      "A radical minimalist reinterpretation of the traditional central rain courtyard. A single rectangular roof incision admits torrential rain into a sunken black granite water basin, carving dramatic diagonal light beams through raw concrete interior volumes.",
    intentText2:
      "Monolithic black oxide floors and unadorned structural planes absorb the ambient tropical humidity, staying perpetually cool.",
    fig01Title: "FIG 01. CENTRAL LIGHT WELL",
    fig01Image: "/images/project_alpha.jpg",
    materialStudyTitle: "Material Study: Black Oxide & Raw Concrete",
    materialStudyImage: "/images/material_study.jpg",
    elevationTitle: "ELEVATION_COURTYARD_SECTION",
    elevationImage: "/images/project_alpha.jpg",
    nextSlug: "modernist-villa",
    nextTitle: "THE WAYANAD CLIFF MONOLITH",
  },
};
