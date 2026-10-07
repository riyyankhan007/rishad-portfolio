import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollObserver from "../../components/ScrollObserver";
import PresentationDeck, { SlideItem } from "../../components/PresentationDeck";

interface DocumentItem {
  label: string;
  url: string;
  badge?: string;
  desc?: string;
}

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
  doc?: string;
  docs?: DocumentItem[];
  nextSlug: string;
  nextTitle: string;
}

const data: Record<string, ProjectData> = {
  "sureena-chowdhri": {
    title: "Sureena Chowdhri — Flagship Boutique Jaipur",
    subtitle: "Heritage Arched Architecture, Bridal Salon & 3D Concept Design",
    category: "Luxury Designer Boutique",
    meta: "Jaipur, Rajasthan · Luxury Designer Boutique",
    area: "Luxury Designer Flagship",
    location: "Jaipur, Rajasthan",
    client: "Sureena Chowdhri",
    myRole: "Store Environment Concept Adaptation, Detailed Drawings & Space Planning",
    firstPersonIntro:
      "“For the Jaipur flagship boutique of luxury designer brand Sureena Chowdhri, I adapted the concept design into the store environment, developed detailed drawings, and worked on the overall space planning and design elements throughout the project.”",
    spatialStrategy:
      "My design intent was to celebrate the timeless romance of Rajasthani architectural heritage within a contemporary luxury retail setting. I sculpted sweeping arched portals, private couture bridal consultation lounges, and delicate brass hanging details that frame each garment like a work of art, while choreographing an intuitive circular customer journey past recessed lime-plaster wall niches.",
    engineeringExecution: "",
    materials: [],
    deckSlides: [
      {
        id: "sc-slide-07",
        image: "/projects/sureena-chowdhri/slides/slide-07.jpg",
        title: "Storefront Facade & Arched Entrance Portal",
        category: "SLIDE 07 / STOREFRONT FACADE",
        designerNote: "Minimalist arched facade blending traditional Jaipur architecture with contemporary high-fashion retail.",
      },
      {
        id: "sc-slide-08",
        image: "/projects/sureena-chowdhri/slides/slide-08.jpg",
        title: "Symmetrical Showcase Window & Display Framing",
        category: "SLIDE 08 / WINDOW DISPLAY",
        designerNote: "Recessed display showcase framed with clean plaster reveal lines to hero featured seasonal couture.",
      },
      {
        id: "sc-slide-09",
        image: "/projects/sureena-chowdhri/slides/slide-09.jpg",
        title: "Central Retail Runway & Arched Display Niches",
        category: "SLIDE 09 / CENTRAL RUNWAY",
        designerNote: "Fluid customer walkway flanked by brass perimeter hanging systems and warm micro-cement plaster.",
      },
      {
        id: "sc-slide-10",
        image: "/projects/sureena-chowdhri/slides/slide-10.jpg",
        title: "Perimeter Couture Hanging Systems & Warm Illumination",
        category: "SLIDE 10 / PERIMETER MERCHANDISING",
        designerNote: "Satin brass hanging bars engineered to support heavy bridal ensembles with concealed anchor detailing.",
      },
      {
        id: "sc-slide-11",
        image: "/projects/sureena-chowdhri/slides/slide-11.jpg",
        title: "Bridal Consultation Lounge & Private Salon",
        category: "SLIDE 11 / CONSULTATION SALON",
        designerNote: "Dedicated couture discussion lounge designed for intimate bridal shopping experiences with custom curved banquette seating.",
      },
      {
        id: "sc-slide-12",
        image: "/projects/sureena-chowdhri/slides/slide-12.jpg",
        title: "Bespoke Cash Desk & Brass Brand Signature",
        category: "SLIDE 12 / CASH COUNTER",
        designerNote: "Custom fluted cash desk featuring recessed cable routing, discreet storage, and illuminated brand signage.",
      },
      {
        id: "sc-slide-13",
        image: "/projects/sureena-chowdhri/slides/slide-13.jpg",
        title: "Fitting Room Threshold & Curved Corridor",
        category: "SLIDE 13 / TRIAL CORRIDOR",
        designerNote: "Acoustically softened transition corridor guiding clients from the sales floor to private trial suites.",
      },
      {
        id: "sc-slide-14",
        image: "/projects/sureena-chowdhri/slides/slide-14.jpg",
        title: "Luxury Trial Suite & Backlit Arched Vanity Mirror",
        category: "SLIDE 14 / TRIAL SUITE 1",
        designerNote: "Spacious private fitting suite featuring full-length perimeter backlit arched mirror and warm daylight-accurate illumination.",
      },
      {
        id: "sc-slide-15",
        image: "/projects/sureena-chowdhri/slides/slide-15.jpg",
        title: "Secondary Trial Suite & Fitting Ergonomics",
        category: "SLIDE 15 / TRIAL SUITE 2",
        designerNote: "Ergonomically planned fitting room with tailored accessory hooks, luxurious lounge bench, and plush velvet curtains.",
      },
      {
        id: "sc-slide-16",
        image: "/projects/sureena-chowdhri/slides/slide-16.jpg",
        title: "Puja Niche & Cultural Architectural Feature",
        category: "SLIDE 16 / ARCHITECTURAL NICHE",
        designerNote: "Reverent architectural niche thoughtfully integrated into the layout honoring cultural traditions.",
      },
      {
        id: "sc-slide-17",
        image: "/projects/sureena-chowdhri/slides/slide-17.jpg",
        title: "Digital Display Feature & Window Integration",
        category: "SLIDE 17 / MULTIMEDIA PORTAL",
        designerNote: "Multimedia integration zone designed for digital campaign showcases and runway film projection.",
      },
      {
        id: "sc-slide-18",
        image: "/projects/sureena-chowdhri/slides/slide-18.jpg",
        title: "Back-of-House (BOH) Transition & Service Access",
        category: "SLIDE 18 / BOH TRANSITION",
        designerNote: "Discreet staff and stockroom access point maintaining pristine customer-facing aesthetics.",
      },
      {
        id: "sc-slide-19",
        image: "/projects/sureena-chowdhri/slides/slide-19.jpg",
        title: "Material Detail: Warm Textured Plaster & Brushed Brass",
        category: "SLIDE 19 / MATERIAL TACTILITY",
        designerNote: "Close-up perspective highlighting tactile synergy between earthy micro-cement plaster and metallic brass.",
      },
      {
        id: "sc-slide-20",
        image: "/projects/sureena-chowdhri/slides/slide-20.jpg",
        title: "Ceiling Lighting Grid & Architectural Coves",
        category: "SLIDE 20 / CEILING COVES",
        designerNote: "Concealed 3000K LED coves and precision spotlight tracks highlighting fabric embroidery textures.",
      },
      {
        id: "sc-slide-21",
        image: "/projects/sureena-chowdhri/slides/slide-21.jpg",
        title: "Full Storefront Perspective & Concourse Presence",
        category: "SLIDE 21 / FULL PERSPECTIVE",
        designerNote: "Elevated view showing transparent storefront presence inviting footfall into the tranquil interior.",
      },
      {
        id: "sc-slide-22",
        image: "/projects/sureena-chowdhri/slides/slide-22.jpg",
        title: "Couture Merchandising Wall & Accessory Shelving",
        category: "SLIDE 22 / ACCESSORY BAYS",
        designerNote: "Custom tiered brass accessory shelving designed for clutch bags, jewellery, and bridal footwear.",
      },
      {
        id: "sc-slide-23",
        image: "/projects/sureena-chowdhri/slides/slide-23.jpg",
        title: "Lounge Seating Axis & Customer Dwell Space",
        category: "SLIDE 23 / LOUNGE AXIS",
        designerNote: "Plush seating arrangement positioned to maximize customer dwell time during personalized appointments.",
      },
      {
        id: "sc-slide-24",
        image: "/projects/sureena-chowdhri/slides/slide-24.jpg",
        title: "Twilight Storefront Illumination & Warm Glow",
        category: "SLIDE 24 / EVENING ELEVATION",
        designerNote: "Evening perspective showcasing warm amber illumination framing the arched storefront facade.",
      },
      {
        id: "sc-slide-25",
        image: "/projects/sureena-chowdhri/slides/slide-25.jpg",
        title: "Master Architectural Concept Overview",
        category: "SLIDE 25 / CONCEPT OVERVIEW",
        designerNote: "Comprehensive 3D visual summary representing the full fusion of heritage archways and modern retail design.",
      },
    ],
    drawingPreviews: [],
    doc: "/projects/sureena-chowdhri/sureena-chowdhri-design-concept.pdf",
    docs: [
      {
        label: "Open Official Sureena Chowdhri Design Concept (PDF)",
        url: "/projects/sureena-chowdhri/sureena-chowdhri-design-concept.pdf",
        badge: "OFFICIAL PROJECT DOCUMENT · PDF",
        desc: "Complete official Sureena Chowdhri Jaipur design concept presentation, store environment spatial planning, and interior visual deck.",
      },
    ],
    nextSlug: "the-bear-house-pacific-jaipur",
    nextTitle: "The Bear House — Pacific Mall Jaipur",
  },
  "the-bear-house-pacific-jaipur": {
    title: "The Bear House — Pacific Mall Jaipur",
    subtitle: "Flagship Retail Architecture, Project Management & QA/QC",
    category: "Retail Flagship",
    meta: "Pacific Mall, Jaipur · Flagship Store",
    area: "Flagship Retail Store",
    location: "Pacific Mall, Jaipur, Rajasthan",
    client: "The Bear House",
    myRole: "Retail Space Planning, Project Management, QA/QC & Material Selection",
    firstPersonIntro:
      "“When I was tasked with designing the Pacific Mall Jaipur flagship for The Bear House, my central ambition was to craft an architectural sanctuary for men’s fashion. This store needed to project effortless sophistication while steering high customer volumes smoothly through apparel, footwear, and accessory collections.”",
    spatialStrategy:
      "I broke away from rigid rectilinear aisles by designing fluid circulation loops around custom oak display islands. At the front entrance, high-lux visual portals immediately seize attention from the mall atrium. Towards the back, I nested the fitting rooms within a discreet, warm-toned alcove with full-height mirrors, creating a private and flattering changing environment.",
    engineeringExecution:
      "I led project management, labour and vendor management, and stage-wise QA/QC from initial layout setting to store opening. I developed a complete technical coordination package in AutoCAD that reconciled lighting tracks, audio speakers, fire sprinkler drops, and CCTV monitors. For the central island displays and POS cash counter, I detailed concealed floor trench conduit pathways so that not a single power or data cable is visible to the customer.",
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
        title: "Primary Menswear Runway & Custom Display Island",
        category: "PERSPECTIVE 02 / MAIN RUNWAY",
        designerNote: "Wide circulation loop flanking custom solid oak fixtures with dark bronze accents, providing effortless customer navigation.",
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
        designerNote: "Low-profile multi-tier display podiums ensuring sightlines remain open across the sales floor without visual clutter.",
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
        designerNote: "Spacious trial room with glare-free perimeter mirror backlighting, comfortable seating, and ergonomic coat hardware.",
      },
      {
        id: "tbh-j-09",
        image: "/projects/bear-house-jaipur/slides/slide-09.jpg",
        title: "Overview Axis & Ceiling Services Integration",
        category: "PERSPECTIVE 09 / CEILING SERVICES",
        designerNote: "Coordinated ceiling plan showing how linear diffusers, audio speakers, and sprinkler drops integrate neatly with lighting tracks.",
      },
    ],
    drawingPreviews: [
      { src: "/projects/bear-house-jaipur/gfc-p4.jpg", caption: "Sheet 04: Overall Store Fixture & Merchandise Zoning Layout" },
      { src: "/projects/bear-house-jaipur/gfc-p7.jpg", caption: "Sheet 07: Flooring Layout & Custom Skirting Detailing" },
      { src: "/projects/bear-house-jaipur/gfc-p11.jpg", caption: "Sheet 11: Gypsum False Ceiling Plan & Cove Detail" },
      { src: "/projects/bear-house-jaipur/gfc-p14.jpg", caption: "Sheet 14: Retail Lighting Fixture & Track Distribution Plan" },
      { src: "/projects/bear-house-jaipur/mep-p1.jpg", caption: "Sheet 01: Comprehensive Electrical Distribution Layout Plan" },
      { src: "/projects/bear-house-jaipur/mep-p3.jpg", caption: "Sheet 03: Multi-tier Lighting & Power Trench Coordination" },
    ],
    doc: "/projects/bear-house-jaipur/gfc-drawings.pdf",
    docs: [
      {
        label: "Open Complete Architectural Construction PDF Set (33 Sheets)",
        url: "/projects/bear-house-jaipur/gfc-drawings.pdf",
        badge: "33 SHEETS · CONSTRUCTION SET",
        desc: "Complete architectural construction set covering fixture zoning, floor tile layout, false ceiling coves, and wall sections.",
      },
      {
        label: "Open Engineering & Services Package (PDF)",
        url: "/projects/bear-house-jaipur/mep-drawings.pdf",
        badge: "ENGINEERING PACKAGE",
        desc: "Full engineering set coordinating multi-circuit lighting, power floor raceways, and safety systems.",
      },
    ],
    nextSlug: "vox-turquoise-mumbai",
    nextTitle: "VOX — Turquoise Mumbai",
  },
  "vox-turquoise-mumbai": {
    title: "VOX — Turquoise Mumbai",
    subtitle: "Luxury Material Studio & Catalog-Driven Architecture",
    category: "Luxury Material Boutique",
    meta: "Turquoise, Mumbai · Experience Center",
    area: "Luxury Experience Center",
    location: "Turquoise, Mumbai, Maharashtra",
    client: "VOX / Do More Design Studio",
    myRole: "Spatial Concept, VOX Catalog System Design, Curved Ceiling Detailing & Technical Set",
    firstPersonIntro:
      "“I designed this exclusive experience center by utilizing only the VOX product catalog and architectural systems. My design mission was to create an expansive, serene atmosphere where visiting architects, interior designers, and luxury homeowners could experience premium wall claddings and flooring without feeling confined.”",
    spatialStrategy:
      "To maximize the footprint, I designed organic curved flexi-ply ceiling baffles finished in Fronto SV06 Black Oak. These flowing ceiling curves pull the eye gently inward toward the bespoke discussion table and interactive material library. By eliminating harsh 90-degree transitions and adopting fluid curves, the boutique feels generous and welcoming.",
    engineeringExecution:
      "I authored the complete technical construction drawing set for this project. Every junction was resolved prior to fabrication: custom skirting rebates matching the SPC Oak Mist flooring, false ceiling cove lighting radii, flexi-ply suspension frames, and recessed architectural channels. Supported with meticulous BOQ and vendor management, the construction team executed the entire space with zero on-site guesswork.",
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
        designerNote: "Vertical slat partitions establishing acoustic dampening within the boutique while maintaining visual porosity.",
      },
      {
        id: "vox-05",
        image: "/projects/vox-mumbai/slides/slide-05.jpg",
        title: "SPC Oak Mist Flooring Continuity",
        category: "PERSPECTIVE 05 / FLOORING DETAIL",
        designerNote: "Seamless floor layout with custom skirtings matching the flooring grain to eliminate visual breaks.",
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
        designerNote: "Complete perspective demonstrating how disciplined space planning makes the footprint feel generous and uncluttered.",
      },
    ],
    drawingPreviews: [
      { src: "/projects/vox-mumbai/gfc-p3.jpg", caption: "Curved Ceiling & Floor Plan Drawing Sheet with exact radii callouts" },
      { src: "/projects/vox-mumbai/gfc-p7.jpg", caption: "Reflected Ceiling Plan with Fronto SV06 Black Oak detailing" },
    ],
    doc: "/projects/vox-mumbai/technical.pdf",
    docs: [
      {
        label: "Open Complete Construction PDF Set (22 Sheets)",
        url: "/projects/vox-mumbai/technical.pdf",
        badge: "22 SHEETS · TECHNICAL SET",
        desc: "Complete 22-sheet AutoCAD set covering organic curved ceiling baffles, recessed lighting, and joinery sections.",
      },
    ],
    nextSlug: "the-bear-house-m3m",
    nextTitle: "The Bear House — M3M Paragon 57",
  },
  "the-bear-house-m3m": {
    title: "The Bear House — M3M Paragon 57",
    subtitle: "Mezzanine Floor Designed, Customer Flow & Minimalistic Facade",
    category: "Visual Merchandising & Store Concept",
    meta: "M3M Paragon 57, Gurugram · Flagship Store",
    area: "Flagship Retail Bay & Mezzanine Level",
    location: "M3M Paragon 57, Gurugram, Haryana",
    client: "The Bear House",
    myRole: "Lead Designer & Technical Project Lead",
    firstPersonIntro:
      "“I led this project myself from concept through technical delivery. Mezzanine floor designed, establishing seamless customer flow and sculpted a minimalistic facade design that commands attention from the mall concourse while maintaining strict BOQ, labour coordination, and QA/QC control.”",
    spatialStrategy:
      "I utilized 3D visualization and space planning to choreograph a seamless transition between the ground floor and the mezzanine level. By placing back-lit brand statement panels at key visual vanishing points and designing a clean, minimalistic facade, the store captures shopper interest from distant mall walkways. Display pedestals of varying heights guide visitors organically up the mezzanine flow.",
    engineeringExecution:
      "Behind the photorealistic 3D renders is an exhaustive 30-sheet technical drawing package. I detailed fixture dimensions, hang bar clearances, mezzanine stair transitions, and cash counter ergonomics to streamline retail staff operations during peak shopping hours. I authored the BOQ and supervised vendor alignment to ensure buildability.",
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
        title: "Storefront Visual Merchandising & Minimalistic Facade",
        category: "SLIDE 01 / FACADE",
        designerNote: "Minimalistic facade design and high-contrast entrance portal delivering mezzanine floor designed visibility and clear line of sight to the upper level.",
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
        designerNote: "Sculpted tier pedestals displaying folded merchandise and curated accessory collections along the mezzanine axis.",
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
        designerNote: "Harmonious composition balancing timber warmth, industrial dark metal, and crisp lighting across both levels.",
      },
    ],
    drawingPreviews: [
      { src: "/projects/bear-house-m3m/gfc-p3.jpg", caption: "Sheet 03: Mezzanine & Ground Level Fixture Layout Plan" },
      { src: "/projects/bear-house-m3m/gfc-p6.jpg", caption: "Sheet 06: Flooring Layout & Ceramic Tile Spec Legend" },
      { src: "/projects/bear-house-m3m/gfc-p11.jpg", caption: "Sheet 11: Gypsum False Ceiling Plan" },
      { src: "/projects/bear-house-m3m/gfc-p15.jpg", caption: "Sheet 15: Air Distribution & Ceiling Grid Plan" },
    ],
    doc: "/projects/bear-house-m3m/gfc-drawings.pdf",
    docs: [
      {
        label: "Open Complete Construction PDF Set (30 Sheets)",
        url: "/projects/bear-house-m3m/gfc-drawings.pdf",
        badge: "30 SHEETS · CONSTRUCTION SET",
        desc: "Complete 30-sheet drawing package with mezzanine zoning, ceiling coves, electrical trench, and joinery details.",
      },
    ],
    nextSlug: "sureena-chowdhri",
    nextTitle: "Sureena Chowdhri — Flagship Boutique Jaipur",
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
              <div className="case-study-specs-bar reveal-on-scroll reveal-delay-3">
                <div>
                  <div style={{ fontSize: "9.5px", fontFamily: "var(--font-mono)", color: "var(--ink-muted)", textTransform: "uppercase" }}>
                    SCOPE
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
                    {p.myRole}
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
            <div className="case-study-strategy-grid" style={p.materials.length === 0 ? { display: "block" } : {}}>
              <div className="reveal-on-scroll" style={p.materials.length === 0 ? { maxWidth: "860px", margin: "0 auto" } : {}}>
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
                  {p.spatialStrategy && <p>{p.spatialStrategy}</p>}
                  {p.engineeringExecution && <p>{p.engineeringExecution}</p>}
                </div>
              </div>

              {/* MATERIAL PALETTE (TACTILE PALETTE) — REMOVED FOR SUREENA CHOWDHRI */}
              {p.materials && p.materials.length > 0 && (
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
                    Specified Materials &amp; Finishes
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
              )}
            </div>
          </div>
        </section>

        {/* BEHIND THE DRAWINGS (TECHNICAL SPOTLIGHT) */}
        <section id="drawings" style={{ padding: "50px 0", background: "var(--bg-subtle)", borderRadius: "var(--radius-xl)", margin: "30px 0" }}>
          <div className="shell">
            <div className="section-header-centered reveal-on-scroll">
              <span className="section-eyebrow">TECHNICAL DOCUMENTATION</span>
              <h2 className="section-title">
                {p.drawingPreviews && p.drawingPreviews.length > 0 ? "Behind The Drawings: Technical Layouts & Blueprints" : "Official Project & Design Documentation"}
              </h2>
              <p className="section-lead">
                {p.drawingPreviews && p.drawingPreviews.length > 0
                  ? "“Here is the exact technical engineering that guided contractors on site — from spatial zoning and floor plans to joinery detailing.”"
                  : "“Access the verified project documentation and comprehensive design concept presentation below.”"}
              </p>
            </div>

            {p.drawingPreviews && p.drawingPreviews.length > 0 && (
              <div className="case-study-drawings-grid">
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
                        TECHNICAL DRAWING SHEET
                      </span>
                      <h4 style={{ fontSize: "13.5px", fontWeight: 600, marginTop: "4px" }}>
                        {dwg.caption}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {((p.docs && p.docs.length > 0) || p.doc) && (
              <div
                style={{
                  padding: "clamp(22px, 3.5vw, 36px)",
                  background: "var(--bg-surface)",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid var(--line-subtle)",
                  boxShadow: "var(--shadow-sm)",
                  marginTop: "28px",
                }}
                className="reveal-on-scroll"
              >
                <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 20px" }}>
                  <span
                    style={{
                      fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent-terracotta)",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    COMPLETE TECHNICAL DRAWING PACKAGES
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "21px",
                      fontWeight: 500,
                      marginTop: "6px",
                      marginBottom: "8px",
                      color: "var(--ink-primary)",
                    }}
                  >
                    Official Construction Blueprints & Coordination Sets
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "var(--ink-secondary)", lineHeight: 1.6 }}>
                    Direct access to verified technical construction drawings with notes, dimensions, and legends.
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  {p.docs && p.docs.length > 0 ? (
                    p.docs.map((docItem, idx) => (
                      <div
                        key={docItem.url}
                        style={{
                          flex: "1 1 320px",
                          maxWidth: "460px",
                          background: "var(--bg-canvas)",
                          padding: "20px",
                          borderRadius: "var(--radius-lg)",
                          border: idx === 0 ? "1.5px solid var(--accent-terracotta)" : "1px solid var(--line-subtle)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          gap: "14px",
                          boxShadow: idx === 0 ? "var(--shadow-sm)" : "none",
                        }}
                      >
                        <div>
                          {docItem.badge && (
                            <span
                              style={{
                                display: "inline-block",
                                fontSize: "10.5px",
                                fontFamily: "var(--font-mono)",
                                color: idx === 0 ? "var(--accent-terracotta)" : "var(--ink-secondary)",
                                background: idx === 0 ? "var(--accent-terracotta-soft)" : "rgba(0, 0, 0, 0.04)",
                                padding: "3px 10px",
                                borderRadius: "var(--radius-pill)",
                                fontWeight: 600,
                                marginBottom: "10px",
                              }}
                            >
                              {docItem.badge}
                            </span>
                          )}
                          <h4 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "6px", color: "var(--ink-primary)" }}>
                            {docItem.label}
                          </h4>
                          {docItem.desc && (
                            <p style={{ fontSize: "12.5px", color: "var(--ink-secondary)", lineHeight: 1.55 }}>
                              {docItem.desc}
                            </p>
                          )}
                        </div>
                        <a
                          href={docItem.url}
                          target="_blank"
                          rel="noreferrer"
                          className={idx === 0 ? "btn-pill btn-pill-primary" : "btn-pill btn-pill-secondary"}
                          style={{ justifyContent: "center", width: "100%" }}
                        >
                          <span>{docItem.label} ↗</span>
                        </a>
                      </div>
                    ))
                  ) : (
                    <a
                      href={p.doc}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-pill btn-pill-primary"
                    >
                      <span>Open Technical Drawing ↗</span>
                    </a>
                  )}
                </div>
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