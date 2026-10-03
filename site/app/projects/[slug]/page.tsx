import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollObserver from "../../components/ScrollObserver";
import PresentationDeck, { SlideItem } from "../../components/PresentationDeck";

interface ProjectData {
  title: string;
  subtitle: string;
  category: string;
  meta: string;
  area: string;
  location: string;
  client: string;
  myRole: string;
  firstPersonIntro: string;
  spatialStrategy: string;
  engineeringExecution: string;
  materials: { name: string; desc: string }[];
  deckSlides: SlideItem[];
  drawingPreviews: { src: string; caption: string }[];
  doc: string;
  nextSlug: string;
  nextTitle: string;
}

const data: Record<string, ProjectData> = {
  "the-bear-house-pacific-jaipur": {
    title: "The Bear House — Pacific Mall Jaipur",
    subtitle: "Flagship Retail Architecture & Comprehensive MEP Coordination",
    category: "Retail Flagship",
    meta: "1,916 SQ FT · Pacific Mall, Jaipur · New Store",
    area: "1,916 SQ FT",
    location: "Pacific Mall, Jaipur, Rajasthan",
    client: "The Bear House",
    myRole: "Retail Space Planning, Fixture Detailing & MEP Coordination",
    firstPersonIntro:
      "“When I was tasked with designing the Pacific Mall Jaipur flagship for The Bear House, my central ambition was to craft an architectural sanctuary for men’s fashion. Spanning 1,916 sq. ft., this store needed to project effortless sophistication while steering high customer volumes smoothly through apparel, footwear, and accessory collections.”",
    spatialStrategy:
      "I broke away from rigid rectilinear aisles by designing fluid circulation loops around custom oak and dark steel display gondolas. At the front entrance, high-lux visual portals immediately seize attention from the mall atrium. Towards the back, I nested the fitting rooms within a discreet, warm-toned alcove with full-height 1200x1200mm mirrors, creating a private and flattering changing environment.",
    engineeringExecution:
      "Because of the extensive footprint, the ceiling plane could easily have become an eyesore of competing services. I developed a complete MEP coordination package in AutoCAD that reconciled lighting tracks with HVAC linear diffusers, audio speakers, fire sprinkler drops, and CCTV monitors. For the central island displays and POS cash counter, I detailed concealed floor trench conduit pathways so that not a single power or data cable is visible to the customer.",
    materials: [
      { name: "Natural White Oak", desc: "Custom millwork, display pedestals, and shelving accents" },
      { name: "Charcoal Powdercoat Metal", desc: "Structural hanging systems and perimeter fixture frames" },
      { name: "Brushed Warm Brass", desc: "Hardware details, brand signages, and delicate trim accents" },
      { name: "Architectural 3000K Lighting", desc: "Multi-circuit tracks calibrated for true garment color rendition" },
    ],
    deckSlides: [
      {
        id: "tbh-j-01",
        image: "/projects/bear-house-jaipur/slides/slide-01.jpg",
        title: "Storefront Portal & Entrance Threshold",
        category: "PERSPECTIVE 01 / ENTRANCE",
        designerNote: "Framed high-lux portal designed to capture shopper sightlines from the main mall concourse. The illuminated brand bear emblem anchors the entrance axis.",
      },
      {
        id: "tbh-j-02",
        image: "/projects/bear-house-jaipur/slides/slide-02.jpg",
        title: "Primary Menswear Runway & Island Gondolas",
        category: "PERSPECTIVE 02 / MAIN RUNWAY",
        designerNote: "Wide 1.8-meter circulation loop flanking custom solid oak gondolas with dark bronze accents, providing effortless customer navigation.",
      },
      {
        id: "tbh-j-03",
        image: "/projects/bear-house-jaipur/slides/slide-03.jpg",
        title: "Perimeter Apparel Display Bay",
        category: "PERSPECTIVE 03 / PERIMETER MERCHANDISING",
        designerNote: "Modular wall standards with concealed bracket slots and warm 3000K LED track illumination to highlight natural garment textures.",
      },
      {
        id: "tbh-j-04",
        image: "/projects/bear-house-jaipur/slides/slide-04.jpg",
        title: "Denim & Casualwear Focal Bay",
        category: "PERSPECTIVE 04 / FOCAL WALL",
        designerNote: "High-density folded display shelving balanced with full-length hanging units for curated multi-piece outfit merchandising.",
      },
      {
        id: "tbh-j-05",
        image: "/projects/bear-house-jaipur/slides/slide-05.jpg",
        title: "Central Accessory Island & Footwear Podiums",
        category: "PERSPECTIVE 05 / PODIUMS",
        designerNote: "Low-profile multi-tier display podiums ensuring sightlines remain open across the entire 1,916 sq ft sales floor without visual clutter.",
      },
      {
        id: "tbh-j-06",
        image: "/projects/bear-house-jaipur/slides/slide-06.jpg",
        title: "Cash Counter & Backlit Brand Signature",
        category: "PERSPECTIVE 06 / POS CHECKOUT",
        designerNote: "Bespoke cash desk with concealed wire raceways for POS terminals, barcode scanners, and packaging storage beneath.",
      },
      {
        id: "tbh-j-07",
        image: "/projects/bear-house-jaipur/slides/slide-07.jpg",
        title: "Fitting Room Transition Corridor",
        category: "PERSPECTIVE 07 / TRIAL CORRIDOR",
        designerNote: "Acoustically softened corridor with directional cove lighting creating a welcoming transition to private fitting rooms.",
      },
      {
        id: "tbh-j-08",
        image: "/projects/bear-house-jaipur/slides/slide-08.jpg",
        title: "Fitting Room Suite Interior",
        category: "PERSPECTIVE 08 / TRIAL ROOM SUITE",
        designerNote: "Spacious 1200x1200mm trial room with glare-free perimeter mirror backlighting, comfortable seating, and ergonomic coat hardware.",
      },
      {
        id: "tbh-j-09",
        image: "/projects/bear-house-jaipur/slides/slide-09.jpg",
        title: "Overview Axis & Ceiling Services Integration",
        category: "PERSPECTIVE 09 / CEILING SERVICES",
        designerNote: "Coordinated ceiling plan showing how HVAC linear diffusers, audio speakers, and sprinkler drops integrate neatly with lighting tracks.",
      },
    ],
    drawingPreviews: [
      { src: "/projects/bear-house-jaipur/mep-p1.jpg", caption: "Comprehensive MEP & Fixture Layout Plan (AutoCAD DWG/PDF)" },
      { src: "/projects/bear-house-jaipur/mep-p3.jpg", caption: "Lighting, Power Trench & Ceiling Diffuser Coordination Sheet" },
    ],
    doc: "/projects/bear-house-jaipur/technical.pdf",
    nextSlug: "vox-turquoise-mumbai",
    nextTitle: "VOX — Turquoise Mumbai",
  },
  "vox-turquoise-mumbai": {
    title: "VOX — Turquoise Mumbai",
    subtitle: "Luxury Material Studio & 22-Sheet Good-For-Construction Package",
    category: "Luxury Material Boutique",
    meta: "471 SQ FT · Turquoise, Mumbai · Full GFC Package",
    area: "471 SQ FT",
    location: "Turquoise, Mumbai, Maharashtra",
    client: "VOX / Do More Design Studio",
    myRole: "Spatial Concept, Curved Ceiling Detailing & Full 22-Sheet GFC",
    firstPersonIntro:
      "“In a boutique of 471 sq. ft., every single millimeter is high-value real estate. My design mission was to create an expansive, serene atmosphere where visiting architects, interior designers, and luxury homeowners could experience premium wall claddings and flooring without feeling confined.”",
    spatialStrategy:
      "To overcome the compact footprint, I designed organic curved flexi-ply ceiling baffles finished in Fronto SV06 Black Oak. These flowing ceiling curves pull the eye gently inward toward the bespoke discussion table and interactive material library. By eliminating harsh 90-degree transitions and adopting fluid curves, the boutique feels nearly double its actual footprint.",
    engineeringExecution:
      "I authored the complete 22-sheet Good-For-Construction (GFC) AutoCAD drawing set for this project. Every junction was resolved prior to fabrication: 75mm custom skirting rebates matching the SPC Oak Mist flooring, false ceiling cove lighting radii, flexi-ply suspension frames at 2100mm height, and recessed architectural channels. The construction team executed the entire space with zero on-site guesswork.",
    materials: [
      { name: "SPC Oak Mist Flooring", desc: "High-traffic commercial composite flooring with realistic timber grain" },
      { name: "Fronto SV06 Black Oak", desc: "Curved flexi-ply ceiling baffles and architectural acoustic slats" },
      { name: "Morning Mist Cove Plaster", desc: "Concealed ambient gypsum ceiling coves with warm LED illumination" },
      { name: "Architectural Bronze Joinery", desc: "Material display drawer slides and presentation table frames" },
    ],
    deckSlides: [
      {
        id: "vox-01",
        image: "/projects/vox-mumbai/slides/slide-01.jpg",
        title: "Entrance Threshold & Curved Ceiling Vista",
        category: "PERSPECTIVE 01 / BOUTIQUE ENTRANCE",
        designerNote: "Sculpted curved flexi-ply ceiling baffles finished in Fronto SV06 Black Oak draw the visitor inward, creating an immediate sense of refined luxury.",
      },
      {
        id: "vox-02",
        image: "/projects/vox-mumbai/slides/slide-02.jpg",
        title: "Discussion Table & Architect Lounge",
        category: "PERSPECTIVE 02 / CONSULTATION AREA",
        designerNote: "Central collaboration table for reviewing sample swatches with visiting architects, framed by oak acoustic baffles and warm recessed cove illumination.",
      },
      {
        id: "vox-03",
        image: "/projects/vox-mumbai/slides/slide-03.jpg",
        title: "Interactive Material Library Wall",
        category: "PERSPECTIVE 03 / MATERIAL LIBRARY",
        designerNote: "Full-height display bays showcasing luxury wall claddings and acoustic timber panels with smooth pull-out swatches.",
      },
      {
        id: "vox-04",
        image: "/projects/vox-mumbai/slides/slide-04.jpg",
        title: "Acoustic Wall Cladding & Slat Detailing",
        category: "PERSPECTIVE 04 / ACOUSTIC SLATS",
        designerNote: "Vertical slat partitions establishing acoustic dampening within a compact 471 SFT boutique while maintaining visual porosity.",
      },
      {
        id: "vox-05",
        image: "/projects/vox-mumbai/slides/slide-05.jpg",
        title: "SPC Oak Mist Flooring Continuity",
        category: "PERSPECTIVE 05 / FLOORING DETAIL",
        designerNote: "Seamless floor layout with 75mm custom skirtings matching the flooring grain to eliminate visual breaks.",
      },
      {
        id: "vox-06",
        image: "/projects/vox-mumbai/slides/slide-06.jpg",
        title: "Gypsum Ceiling Cove & Ambient Illumination",
        category: "PERSPECTIVE 06 / CEILING DETAIL",
        designerNote: "Concealed indirect LED coves in Morning Mist plaster finish designed to visually elevate the slab height.",
      },
      {
        id: "vox-07",
        image: "/projects/vox-mumbai/slides/slide-07.jpg",
        title: "Digital Brand Screen & Information Panel",
        category: "PERSPECTIVE 07 / MEDIA PORTAL",
        designerNote: "Integrated multimedia portal for presenting technical architectural specifications, certifications, and product mockups.",
      },
      {
        id: "vox-08",
        image: "/projects/vox-mumbai/slides/slide-08.jpg",
        title: "Curved Ceiling Detail & Shadow Line Junction",
        category: "PERSPECTIVE 08 / JOINERY JUNCTION",
        designerNote: "Detailed joinery section where curved flexi-ply interfaces cleanly with the false ceiling rebate.",
      },
      {
        id: "vox-09",
        image: "/projects/vox-mumbai/slides/slide-09.jpg",
        title: "Full Panoramic Showroom Perspective",
        category: "PERSPECTIVE 09 / PANORAMIC VIEW",
        designerNote: "Complete perspective demonstrating how disciplined space planning makes a 471 SFT footprint feel generous and uncluttered.",
      },
    ],
    drawingPreviews: [
      { src: "/projects/vox-mumbai/gfc-p3.jpg", caption: "Curved Ceiling & Floor Plan GFC Sheet with exact radii callouts" },
      { src: "/projects/vox-mumbai/gfc-p7.jpg", caption: "Reflected Ceiling Plan (RCP) with Fronto SV06 Black Oak detailing" },
    ],
    doc: "/projects/vox-mumbai/technical.pdf",
    nextSlug: "the-bear-house-m3m",
    nextTitle: "The Bear House — M3M Paragon 57",
  },
  "the-bear-house-m3m": {
    title: "The Bear House — M3M Paragon 57",
    subtitle: "Expressive Visual Merchandising & 3D Interior Architecture",
    category: "Visual Merchandising & Store Concept",
    meta: "Retail Interior · Gurugram · 3D Concept",
    area: "Commercial Retail Bay",
    location: "M3M Paragon 57, Gurugram, Haryana",
    client: "The Bear House",
    myRole: "Concept Space Planning, 3D Photorealistic Visualization & Technical Elevations",
    firstPersonIntro:
      "“For The Bear House at M3M Paragon 57, I investigated high-energy visual merchandising techniques tailored for high-end retail mall shoppers. My goal was crafting an interior that commands attention through transparent storefront glazing and draws shoppers in with dynamic focal walls.”",
    spatialStrategy:
      "I utilized 3D visualization as an iterative design tool to study customer line of sight from multiple angles. I placed back-lit brand statement panels at key visual vanishing points, framed by rhythmic dark metal shelving. Display pedestals of varying heights create dynamic focal points that elevate garments into hero items.",
    engineeringExecution:
      "Behind the photorealistic 3D renders are precise AutoCAD layouts ensuring compliance with mall MEP guidelines. I detailed fixture dimensions, hang bar clearances, drawer storage capacities, and cash counter ergonomics to streamline retail staff operations during peak shopping hours.",
    materials: [
      { name: "Charcoal Oak Veneer", desc: "Deep rich timber panels for backdrops and display islands" },
      { name: "Brushed Champagne Metal", desc: "Precision garment hanging rods and shelf brackets" },
      { name: "Backlit Diffused Graphics", desc: "Evenly illuminated brand imagery at primary customer focal zones" },
      { name: "Honed Limestone Tile", desc: "Neutral, tactile flooring ensuring focus remains on the merchandise" },
    ],
    deckSlides: [
      {
        id: "m3m-01",
        image: "/projects/bear-house-m3m/slides/slide-01.jpg",
        title: "Storefront Visual Merchandising & Entrance",
        category: "SLIDE 01 / STOREFRONT",
        designerNote: "High-contrast storefront portal designed to maximize footfall capture from the mall concourse.",
      },
      {
        id: "m3m-02",
        image: "/projects/bear-house-m3m/slides/slide-02.jpg",
        title: "Perimeter Display Bays & Modular Hanging",
        category: "SLIDE 02 / PERIMETER BAYS",
        designerNote: "Integrated perimeter wardrobe units with adjustable hanging bars and LED strip accent illumination.",
      },
      {
        id: "m3m-03",
        image: "/projects/bear-house-m3m/slides/slide-03.jpg",
        title: "Central Display Podiums & Customer Corridor",
        category: "SLIDE 03 / CENTRAL PODIUMS",
        designerNote: "Sculpted tier pedestals displaying folded merchandise and curated accessory collections.",
      },
      {
        id: "m3m-04",
        image: "/projects/bear-house-m3m/slides/slide-04.jpg",
        title: "Cash Counter & Point-of-Sale Desk",
        category: "SLIDE 04 / CASH DESK",
        designerNote: "Ergonomic checkout station designed with hidden cable trays and integrated storage for packaging.",
      },
      {
        id: "m3m-05",
        image: "/projects/bear-house-m3m/slides/slide-05.jpg",
        title: "Backlit Brand Focal Graphic Wall",
        category: "SLIDE 05 / FOCAL GRAPHIC",
        designerNote: "Evenly diffused brand imagery wall drawing customers deeper into the store volume.",
      },
      {
        id: "m3m-06",
        image: "/projects/bear-house-m3m/slides/slide-06.jpg",
        title: "Footwear Elevation & Tiered Display",
        category: "SLIDE 06 / FOOTWEAR RACKS",
        designerNote: "Dedicated footwear shelving with angled shelf brackets for clear customer viewing.",
      },
      {
        id: "m3m-07",
        image: "/projects/bear-house-m3m/slides/slide-07.jpg",
        title: "Architectural Ceiling Grid & Track Fixtures",
        category: "SLIDE 07 / CEILING LIGHTING",
        designerNote: "Recessed track fixtures calibrated to provide 800 lux on horizontal product surfaces.",
      },
      {
        id: "m3m-08",
        image: "/projects/bear-house-m3m/slides/slide-08.jpg",
        title: "Full Showroom Merchandising Balance",
        category: "SLIDE 08 / OVERALL BALANCE",
        designerNote: "Harmonious composition balancing timber warmth, industrial dark metal, and crisp lighting.",
      },
    ],
    drawingPreviews: [
      { src: "/projects/bear-house-m3m/slides/slide-02.jpg", caption: "3D Perspective Render — Merchandising Bay" },
      { src: "/projects/bear-house-m3m/slides/slide-04.jpg", caption: "Visual Merchandising Detail & Cash Counter Composition" },
    ],
    doc: "",
    nextSlug: "the-bear-house-pacific-jaipur",
    nextTitle: "The Bear House — Pacific Mall Jaipur",
  },
};

export function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = data[slug];
  if (!p) return {};
  return {
    title: `${p.title} — Retail Interior Design Case Study`,
    description: p.firstPersonIntro,
    openGraph: {
      title: `${p.title} | Muhammad Rishad`,
      description: p.firstPersonIntro,
      images: [{ url: p.deckSlides[0].image }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = data[slug];
  if (!p) notFound();

  return (
    <>
      <ScrollObserver />
      <Navbar />

      <main style={{ paddingBottom: "100px" }}>
        {/* CASE STUDY HERO */}
        <section style={{ paddingTop: "clamp(35px, 5vw, 75px)", paddingBottom: "36px" }}>
          <div className="shell">
            <div style={{ maxWidth: "900px" }}>
              <div className="hero-eyebrow reveal-on-scroll">
                <span>●</span>
                <span>CASE STUDY · {p.category}</span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(34px, 4.8vw, 64px)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  marginBottom: "16px",
                }}
                className="reveal-on-scroll reveal-delay-1"
              >
                {p.title}
              </h1>

              <p
                style={{
                  fontSize: "clamp(16px, 1.25vw, 20px)",
                  lineHeight: 1.6,
                  color: "var(--ink-secondary)",
                  marginBottom: "28px",
                }}
                className="reveal-on-scroll reveal-delay-2"
              >
                {p.subtitle}
              </p>

              {/* SPECIFICATION PILLS */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "12px",
                  padding: "16px 0",
                  borderTop: "1px solid var(--line-subtle)",
                  borderBottom: "1px solid var(--line-subtle)",
                }}
                className="reveal-on-scroll reveal-delay-3"
              >
                <div>
                  <div style={{ fontSize: "9.5px", fontFamily: "var(--font-mono)", color: "var(--ink-muted)", textTransform: "uppercase" }}>
                    AREA
                  </div>
                  <div style={{ fontSize: "12.5px", fontWeight: 600, marginTop: "2px" }}>
                    {p.area}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "9.5px", fontFamily: "var(--font-mono)", color: "var(--ink-muted)", textTransform: "uppercase" }}>
                    LOCATION
                  </div>
                  <div style={{ fontSize: "12.5px", fontWeight: 600, marginTop: "2px" }}>
                    {p.location}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "9.5px", fontFamily: "var(--font-mono)", color: "var(--ink-muted)", textTransform: "uppercase" }}>
                    CLIENT
                  </div>
                  <div style={{ fontSize: "12.5px", fontWeight: 600, marginTop: "2px" }}>
                    {p.client}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "9.5px", fontFamily: "var(--font-mono)", color: "var(--ink-muted)", textTransform: "uppercase" }}>
                    MY ROLE
                  </div>
                  <div style={{ fontSize: "12.5px", fontWeight: 600, marginTop: "2px" }}>
                    {p.category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PPT SLIDEDECK PRESENTATION (SMOOTH ANIMATED SLIDESHOW) */}
        <section style={{ marginBottom: "50px" }}>
          <div className="shell">
            <div className="reveal-on-scroll">
              <PresentationDeck
                projectTitle={p.title}
                deckSubtitle="3D Architectural Perspectives & Client Visual Deck"
                slides={p.deckSlides}
              />
            </div>
          </div>
        </section>

        {/* FIRST PERSON INTRO & STRATEGY */}
        <section style={{ padding: "30px 0 60px" }}>
          <div className="shell">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.15fr 0.85fr",
                gap: "clamp(30px, 5vw, 70px)",
                alignItems: "start",
              }}
            >
              <div className="reveal-on-scroll">
                <span className="section-eyebrow">DESIGN INTENT & PHILOSOPHY</span>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "28px",
                    fontWeight: 400,
                    marginBottom: "18px",
                  }}
                >
                  In My Words: The Spatial Strategy
                </h2>

                <div style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--ink-secondary)", display: "flex", flexDirection: "column", gap: "18px" }}>
                  <p style={{ fontSize: "17px", color: "var(--ink-primary)", fontStyle: "italic", borderLeft: "3px solid var(--accent-terracotta)", paddingLeft: "16px" }}>
                    {p.firstPersonIntro}
                  </p>
                  <p>{p.spatialStrategy}</p>
                  <p>{p.engineeringExecution}</p>
                </div>
              </div>

              {/* MATERIAL PALETTE */}
              <div
                style={{
                  background: "var(--bg-surface)",
                  borderRadius: "var(--radius-xl)",
                  padding: "clamp(22px, 3.5vw, 34px)",
                  border: "1px solid var(--line-subtle)",
                  boxShadow: "var(--shadow-md)",
                }}
                className="reveal-on-scroll reveal-delay-2"
              >
                <span className="section-eyebrow">TACTILE PALETTE</span>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "21px",
                    fontWeight: 500,
                    marginBottom: "18px",
                  }}
                >
                  Specified Materials & Finishes
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {p.materials.map((m) => (
                    <div
                      key={m.name}
                      style={{
                        padding: "12px 14px",
                        background: "var(--bg-canvas)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--line-subtle)",
                      }}
                    >
                      <strong style={{ display: "block", fontSize: "13.5px", color: "var(--ink-primary)" }}>
                        {m.name}
                      </strong>
                      <span style={{ fontSize: "12px", color: "var(--ink-muted)", marginTop: "2px", display: "block" }}>
                        {m.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BEHIND THE DRAWINGS (TECHNICAL CAD & GFC SPOTLIGHT) */}
        <section id="drawings" style={{ padding: "50px 0", background: "var(--bg-subtle)", borderRadius: "var(--radius-xl)", margin: "30px 0" }}>
          <div className="shell">
            <div className="section-header-centered reveal-on-scroll">
              <span className="section-eyebrow">TECHNICAL DOCUMENTATION</span>
              <h2 className="section-title">Behind The Drawings: AutoCAD & GFC Package</h2>
              <p className="section-lead">
                &ldquo;Here is the exact technical engineering that guided contractors on site &mdash; from millwork joins and ceiling coves to MEP coordination.&rdquo;
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: p.drawingPreviews.length > 1 ? "repeat(2, 1fr)" : "1fr",
                gap: "20px",
                marginBottom: "30px",
              }}
            >
              {p.drawingPreviews.map((dwg) => (
                <div
                  key={dwg.src}
                  style={{
                    background: "#ffffff",
                    borderRadius: "var(--radius-lg)",
                    padding: "14px",
                    boxShadow: "var(--shadow-md)",
                    border: "1px solid var(--line-subtle)",
                  }}
                  className="reveal-on-scroll"
                >
                  <div style={{ position: "relative", aspectRatio: "16 / 10", background: "#ffffff", overflow: "hidden", borderRadius: "var(--radius-sm)" }}>
                    <Image
                      src={dwg.src}
                      alt={dwg.caption}
                      fill
                      sizes="(max-width: 900px) 100vw, 45vw"
                      style={{ objectFit: "contain", background: "#ffffff" }}
                    />
                  </div>
                  <div style={{ padding: "10px 4px 2px" }}>
                    <span style={{ fontSize: "10.5px", fontFamily: "var(--font-mono)", color: "var(--accent-terracotta)", fontWeight: 600 }}>
                      AUTOCAD DRAWING SHEET
                    </span>
                    <h4 style={{ fontSize: "13.5px", fontWeight: 600, marginTop: "4px" }}>
                      {dwg.caption}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {p.doc && (
              <div
                style={{
                  textAlign: "center",
                  padding: "20px",
                  background: "var(--bg-surface)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--line-subtle)",
                }}
                className="reveal-on-scroll"
              >
                <p style={{ fontSize: "13.5px", color: "var(--ink-secondary)", marginBottom: "12px" }}>
                  Need to review the complete multi-page PDF technical set with all details, legends, and general notes?
                </p>
                <a
                  href={p.doc}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pill btn-pill-primary"
                >
                  <span>Open Full Construction PDF Package ↗</span>
                </a>
              </div>
            )}
          </div>
        </section>

        {/* NEXT PROJECT NAVIGATION */}
        <section style={{ paddingTop: "40px" }}>
          <div className="shell">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "28px 0",
                borderTop: "1px solid var(--line-subtle)",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <Link href="/projects" style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink-secondary)" }}>
                ← Back to all projects
              </Link>
              <Link
                href={`/projects/${p.nextSlug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13.5px",
                  fontWeight: 600,
                  color: "var(--accent-terracotta)",
                }}
              >
                <span>Next Case Study: {p.nextTitle}</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}