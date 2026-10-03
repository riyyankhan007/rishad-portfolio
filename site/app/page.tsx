import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollObserver from "./components/ScrollObserver";
import InteractiveResume from "./components/InteractiveResume";
import BlueprintSpotlight from "./components/BlueprintSpotlight";
import PresentationDeck, { SlideItem } from "./components/PresentationDeck";
import BrandLogos from "./components/BrandLogos";

const projects = [
  {
    slug: "the-bear-house-pacific-jaipur",
    name: "The Bear House — Pacific Mall Jaipur",
    meta: "1,916 SQ FT · JAIPUR · FLAGSHIP STORE",
    role: "Retail Space Planning, Fixture Detailing & MEP Coordination",
    image: "/projects/bear-house-jaipur/slides/slide-01.jpg",
    quote:
      "“When designing this 1,916 sq. ft. flagship, my intent was to immerse shoppers in a warm, masculine, architectural atmosphere. I laid out sweeping circulation loops around custom timber gondolas, carefully balancing retail lighting tracks with HVAC diffuser slots to ensure zero clutter above the customer.”",
    tags: ["Fixture Planning", "MEP Coordination", "Custom Joinery", "Retail Lighting"],
  },
  {
    slug: "vox-turquoise-mumbai",
    name: "VOX — Turquoise Mumbai",
    meta: "471 SQ FT · MUMBAI · LUXURY BOUTIQUE",
    role: "Full GFC Drawing Package & Spatial Planning",
    image: "/projects/vox-mumbai/slides/slide-01.jpg",
    quote:
      "“In a 471 sq. ft. footprint, every millimeter dictates the customer’s sense of luxury. I sculpted organic curved flexi-ply ceiling baffles to stretch sightlines, integrated a tactile material library, and authored a 22-page GFC construction package with precise joinery details.”",
    tags: ["Curved Ceiling Detailing", "GFC Documentation", "Material Library", "SPC Oak Mist"],
  },
  {
    slug: "the-bear-house-m3m",
    name: "The Bear House — M3M Paragon 57",
    meta: "RETAIL INTERIOR · M3M · 3D VISUALIZATION",
    role: "Concept Exploration, 3D Visualization & Technical Drafting",
    image: "/projects/bear-house-m3m/slides/slide-01.jpg",
    quote:
      "“Here I explored high-impact visual merchandising. Through photorealistic 3D rendering and AutoCAD space planning, I sculpted focal walls, perimeter shelving depths, and cash counter ergonomics to maximize retail dwell time and brand resonance.”",
    tags: ["3D Visualization", "Perimeter Shelving", "POS Ergonomics", "Visual Merchandising"],
  },
];

const featuredDeckSlides: SlideItem[] = [
  {
    id: "deck-01",
    image: "/projects/bear-house-jaipur/slides/slide-01.jpg",
    title: "Storefront Portal & Entrance Threshold",
    category: "THE BEAR HOUSE · JAIPUR",
    designerNote: "Framed high-lux portals designed to grab the shopper's eye from the central atrium. Illuminated brand emblem anchors the entrance threshold.",
  },
  {
    id: "deck-02",
    image: "/projects/vox-mumbai/slides/slide-01.jpg",
    title: "Curved Black Oak Ceiling Baffles & Material Studio",
    category: "VOX · TURQUOISE MUMBAI",
    designerNote: "Custom curved flexi-ply baffles finished in Fronto SV06 Black Oak to visually elongate a compact 471 SQ FT footprint.",
  },
  {
    id: "deck-03",
    image: "/projects/bear-house-jaipur/slides/slide-02.jpg",
    title: "Primary Menswear Runway & Custom Timber Gondolas",
    category: "THE BEAR HOUSE · JAIPUR",
    designerNote: "Circulation loop flanking custom solid oak gondolas with dark bronze accents, balancing density with effortless movement.",
  },
  {
    id: "deck-04",
    image: "/projects/vox-mumbai/slides/slide-02.jpg",
    title: "Architect Discussion Lounge & Sample Library",
    category: "VOX · TURQUOISE MUMBAI",
    designerNote: "Central collaboration table for reviewing sample swatches with visiting architects, framed by acoustic slats and warm cove illumination.",
  },
  {
    id: "deck-05",
    image: "/projects/bear-house-m3m/slides/slide-01.jpg",
    title: "Storefront Visual Merchandising & Elevation",
    category: "THE BEAR HOUSE · M3M PARAGON",
    designerNote: "High-contrast storefront portal designed to maximize footfall capture from the mall concourse using precision 3D lighting.",
  },
  {
    id: "deck-06",
    image: "/projects/bear-house-jaipur/slides/slide-06.jpg",
    title: "POS Checkout Counter & Integrated Wire Raceways",
    category: "THE BEAR HOUSE · JAIPUR",
    designerNote: "Bespoke cash desk engineered with concealed wire raceways for POS terminals, barcode scanners, and receipt printers.",
  },
  {
    id: "deck-07",
    image: "/projects/vox-mumbai/slides/slide-09.jpg",
    title: "Panoramic Showroom Experience",
    category: "VOX · TURQUOISE MUMBAI",
    designerNote: "Complete spatial perspective demonstrating how disciplined space planning makes an intimate boutique feel expansive.",
  },
];


const marqueeWords = [
  "Retail Interior Design",
  "GFC Construction Packages",
  "Fixture & Millwork Detailing",
  "MEP & HVAC Coordination",
  "3D Architectural Visualization",
  "Site Execution & QA/QC",
  "Retail Space Planning",
  "Sustainable Material Innovation",
];

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="shell">
            <div className="hero-grid">
              <div>
                <div className="hero-eyebrow reveal-on-scroll">
                  <span>●</span>
                  <span>Retail Interior Designer & Civil Engineer</span>
                </div>

                <h1 className="hero-title reveal-on-scroll reveal-delay-1">
                  Designing retail spaces that <em>inspire emotion</em> and build with precision.
                </h1>

                <p className="hero-first-person reveal-on-scroll reveal-delay-2">
                  I am <strong>Muhammad Rishad</strong>. I design retail environments where spatial beauty, customer psychology, and brand storytelling meet unyielding engineering constructability. Having a civil engineering degree isn&apos;t just my technical credential &mdash; it is my design superpower, ensuring every curved cove, fixture junction, and lighting grid translates flawlessly from paper to store opening.
                </p>

                <div className="hero-actions reveal-on-scroll reveal-delay-3">
                  <Link href="/projects" className="btn-pill btn-pill-primary">
                    <span>Explore Selected Work</span>
                    <span>↗</span>
                  </Link>
                  <a
                    href="#resume"
                    className="btn-pill btn-pill-outline"
                  >
                    <span>My Story & Credentials</span>
                    <span>↓</span>
                  </a>
                </div>

                <div className="hero-stats reveal-on-scroll reveal-delay-4">
                  <div className="hero-stat-item">
                    <b>1,916+</b>
                    <span>SQ FT Flagship Scope</span>
                  </div>
                  <div className="hero-stat-item">
                    <b>2+ Yrs</b>
                    <span>Commercial & Retail</span>
                  </div>
                  <div className="hero-stat-item">
                    <b>1 Patent</b>
                    <span>German Patent Granted</span>
                  </div>
                </div>
              </div>

              {/* HERO VISUAL FRAME */}
              <div className="hero-visual-card reveal-on-scroll reveal-delay-2">
                <Image
                  src="/projects/bear-house-jaipur/slides/slide-01.jpg"
                  alt="The Bear House Pacific Mall Jaipur retail interior designed by Muhammad Rishad"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="hero-visual-badge">FEATURED FLAGSHIP</div>
                <div className="hero-visual-caption">
                  <h3>The Bear House &mdash; Pacific Mall Jaipur</h3>
                  <p>
                    Full retail space planning, fixture detailing & MEP technical coordination for a 1,916 SQ FT flagship store.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE BAND */}
        <div className="marquee-wrapper" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((copyIndex) => (
              <div key={copyIndex} style={{ display: "flex", alignItems: "center" }}>
                {marqueeWords.map((word) => (
                  <div key={word} className="marquee-item">
                    <span>{word}</span>
                    <i>◆</i>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* BRANDS & CLIENT SPACES (SOLID BLACK BRAND LOGOS & TYPOGRAPHY) */}
        <section className="brand-logos-section">
          <div className="shell">
            <BrandLogos />
          </div>
        </section>

        {/* PHILOSOPHY & DUAL LENS SECTION */}
        <section className="philosophy-section reveal-on-scroll">
          <div className="shell">
            <div className="section-header-centered">
              <span className="section-eyebrow">THE DUAL DISCIPLINE</span>
              <h2 className="section-title">
                Where Interior Elegance Meets Engineering Truth
              </h2>
              <p className="section-lead">
                &ldquo;Too many designs fail at the construction phase because the designer doesn&apos;t understand site realities, and too many engineered spaces feel sterile because they lack spatial poetry. I bridge both worlds.&rdquo;
              </p>
            </div>

            <div className="dual-lens-grid">
              <div className="dual-lens-card designer">
                <div className="dual-lens-number">01 / AESTHETIC SENSIBILITY</div>
                <h3>The Retail Interior Designer</h3>
                <p>
                  &ldquo;I treat retail spaces as immersive brand theaters. Every foot of customer journey is intentionally choreographed &mdash; from threshold transitions and focal product podiums to tactile materials like warm oak, micro-cement, and fluted acoustic surfaces. I design spaces where customers love to linger and shop.&rdquo;
                </p>
                <div className="dual-lens-tags">
                  <span className="dual-lens-tag">Customer Circulation Loops</span>
                  <span className="dual-lens-tag">Visual Merchandising</span>
                  <span className="dual-lens-tag">Atmospheric Lighting</span>
                  <span className="dual-lens-tag">Curved Architectural Baffles</span>
                  <span className="dual-lens-tag">Material Board Curation</span>
                </div>
              </div>

              <div className="dual-lens-card engineer">
                <div className="dual-lens-number">02 / TECHNICAL RIGOR</div>
                <h3>The Civil & MEP Engineer</h3>
                <p>
                  &ldquo;Design without constructability is just a sketch. My background in Civil Engineering (B.E., NMIT) enables me to speak the exact language of structural engineers, mall MEP inspectors, and master joiners. I coordinate HVAC diffusers, electrical troughs, slab core cuts, and laser levels before a single wall is framed.&rdquo;
                </p>
                <div className="dual-lens-tags">
                  <span className="dual-lens-tag">GFC Drawing Sets</span>
                  <span className="dual-lens-tag">MEP & HVAC Integration</span>
                  <span className="dual-lens-tag">Detailed Joinery Sections</span>
                  <span className="dual-lens-tag">Bill of Quantities (BOQ)</span>
                  <span className="dual-lens-tag">Airport T2 QA/QC Standards</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="projects-section">
          <div className="shell">
            <div className="projects-header-bar reveal-on-scroll">
              <div>
                <span className="section-eyebrow">CURATED PORTFOLIO</span>
                <h2 className="section-title">Selected Retail Projects</h2>
              </div>
              <Link href="/projects" className="btn-pill btn-pill-outline">
                <span>View All Works</span>
                <span>↗</span>
              </Link>
            </div>

            <div className="projects-flow-grid">
              {projects.map((p, index) => (
                <div
                  key={p.slug}
                  className={`project-feature-card reveal-on-scroll reveal-delay-${(index % 3) + 1}`}
                >
                  <div className="project-media-side">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 900px) 100vw, 55vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="project-media-tag">{`0${index + 1} / CASE STUDY`}</div>
                  </div>

                  <div className="project-content-side">
                    <div className="project-meta-pills">
                      <span className="project-meta-pill">{p.meta}</span>
                    </div>

                    <h3 className="project-title">{p.name}</h3>

                    <div className="project-quote-first-person">
                      {p.quote}
                    </div>

                    <div className="project-spec-grid">
                      <div className="project-spec-item">
                        <label>My Scope</label>
                        <p>{p.role}</p>
                      </div>
                      <div className="project-spec-item">
                        <label>Focus</label>
                        <p>{p.tags[0]} & {p.tags[1]}</p>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
                      <Link
                        href={`/projects/${p.slug}`}
                        className="btn-pill btn-pill-primary"
                      >
                        <span>Explore Full Case Study</span>
                        <span>↗</span>
                      </Link>
                      <Link
                        href={`/projects/${p.slug}#drawings`}
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "var(--accent-terracotta)",
                          textDecoration: "underline",
                        }}
                      >
                        Inspect AutoCAD Drawings ↗
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PPT SLIDEDECK PRESENTATION (SMOOTH ANIMATED SLIDESHOW) */}
        <section style={{ padding: "30px 0 50px" }}>
          <div className="shell">
            <div className="section-header-centered reveal-on-scroll">
              <span className="section-eyebrow">CLIENT PRESENTATION DECK</span>
              <h2 className="section-title">3D Visual Perspectives & Presentation Slides</h2>
              <p className="section-lead">
                &ldquo;Here are high-resolution visual slides directly from my client concept presentations. Tap through the deck to examine lighting, materiality, and fixture layouts.&rdquo;
              </p>
            </div>

            <div className="reveal-on-scroll reveal-delay-1">
              <PresentationDeck
                projectTitle="Retail Concepts & 3D Visual Deck"
                deckSubtitle="The Bear House, VOX & Commercial Environments"
                slides={featuredDeckSlides}
              />
            </div>
          </div>
        </section>

        {/* BLUEPRINT SPOTLIGHT (AUTOCAD & GFC COMPARISON) */}
        <div className="reveal-on-scroll">
          <BlueprintSpotlight />
        </div>

        {/* RESUME & CREDENTIALS SECTION */}
        <section id="resume" className="resume-section">
          <div className="shell">
            <div className="section-header-centered reveal-on-scroll">
              <span className="section-eyebrow">VERIFIED CREDENTIALS</span>
              <h2 className="section-title">My Journey, Experience & Resume</h2>
              <p className="section-lead">
                &ldquo;Here is the complete record of my work across Do More Design Studio, Bangalore International Airport Terminal 2 commercial fit-outs, my civil engineering degree, and my granted German patent.&rdquo;
              </p>
            </div>

            <div className="reveal-on-scroll reveal-delay-1">
              <InteractiveResume />
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section style={{ padding: "60px 0 90px" }}>
          <div className="shell">
            <div
              style={{
                background: "linear-gradient(135deg, var(--bg-subtle) 0%, var(--bg-surface) 100%)",
                borderRadius: "var(--radius-xl)",
                padding: "clamp(30px, 5vw, 60px)",
                border: "1px solid var(--line-subtle)",
                boxShadow: "var(--shadow-md)",
                textAlign: "center",
                maxWidth: "1000px",
                margin: "0 auto",
              }}
              className="reveal-on-scroll"
            >
              <span className="section-eyebrow">START A COLLABORATION</span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(28px, 3.8vw, 48px)",
                  fontWeight: 400,
                  marginBottom: "16px",
                  lineHeight: 1.15,
                }}
              >
                Let&apos;s build a space that captivates your customers.
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--ink-secondary)",
                  maxWidth: "680px",
                  margin: "0 auto 30px",
                  lineHeight: 1.6,
                }}
              >
                Whether you need a flagship retail store planned from scratch, 3D visualization concepts, or full Good-For-Construction technical drawing sets, I am ready to bring your vision to life.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="mailto:rishad.muhammad313@gmail.com"
                  className="btn-pill btn-pill-primary"
                >
                  <span>Email Me Directly</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://wa.me/919182397856?text=Hi%20Rishad,%20I%20would%20like%20to%20discuss%20a%20retail%20design%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-outline"
                >
                  <span>WhatsApp Message</span>
                  <span>↗</span>
                </a>
                <Link href="/contact" className="btn-pill btn-pill-outline">
                  <span>View All Contact Details</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}