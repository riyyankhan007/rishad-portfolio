import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollObserver from "./components/ScrollObserver";
import InteractiveResume from "./components/InteractiveResume";
import PresentationDeck, { SlideItem } from "./components/PresentationDeck";

const projects = [
  {
    slug: "sureena-chowdhri",
    name: "Sureena Chowdhri — Flagship Boutique Jaipur",
    meta: "JAIPUR · LUXURY DESIGNER BOUTIQUE",
    role: "Adapted Concept Design, Detailed Drawings & Space Planning",
    image: "/projects/sureena-chowdhri/slides/slide-07.jpg",
    quote:
      "“For Sureena Chowdhri's Jaipur flagship, I adapted the concept design into the store environment, developed detailed drawings, and worked on the overall space planning and design elements throughout the project. Balancing traditional Rajasthani arched portals with contemporary luxury, I laid out welcoming bridal consultation lounges, bespoke brass garment rails, and an intuitive circular customer journey that celebrates couture craft.”",
    tags: ["Adapted Concept Design", "Detailed Drawings", "Space Planning", "Store Design Elements"],
  },
  {
    slug: "the-bear-house-pacific-jaipur",
    name: "The Bear House — Pacific Mall Jaipur",
    meta: "JAIPUR · FLAGSHIP STORE",
    role: "Retail Space Planning, Project Management & QA/QC",
    image: "/projects/bear-house-jaipur/slides/slide-01.jpg",
    quote:
      "“When designing this flagship store, my intent was to immerse shoppers in a warm, masculine, architectural atmosphere. I laid out sweeping circulation loops, leading project management, vendor coordination, material selection, and stage-wise QA/QC from initial layout setting to store opening.”",
    tags: ["Retail Space Planning", "Project Management", "QA/QC", "Material Selection"],
  },
  {
    slug: "vox-turquoise-mumbai",
    name: "VOX — Turquoise Mumbai",
    meta: "MUMBAI · LUXURY EXPERIENCE CENTER",
    role: "Spatial Planning, Material Studio & Technical Execution",
    image: "/projects/vox-mumbai/slides/slide-01.jpg",
    quote:
      "“I designed this exclusive experience center by utilizing only the VOX product catalog and architectural systems. Sculpted curved flexi-ply ceiling baffles stretch sightlines, accompanied by an interactive material library for architects, comprehensive BOQ drafting, and vendor management.”",
    tags: ["VOX Catalog Systems", "Material Selection", "Vendor Management", "BOQ & Costing"],
  },
  {
    slug: "the-bear-house-m3m",
    name: "The Bear House — M3M Paragon 57",
    meta: "GURUGRAM · FLAGSHIP STORE",
    role: "Lead Designer & Technical Project Lead",
    image: "/projects/bear-house-m3m/slides/slide-01.jpg",
    quote:
      "“I led this project myself from concept through technical delivery. Mezzanine floor designed, establishing seamless customer flow and sculpted a minimalistic facade design that commands attention from the mall concourse while maintaining strict BOQ, labour coordination, and QA/QC control.”",
    tags: ["Mezzanine Floor Designed", "Store Flow", "Minimalistic Facade", "Project Management"],
  },
];

const featuredDeckSlides: SlideItem[] = [
  {
    id: "deck-sc-01",
    image: "/projects/sureena-chowdhri/slides/slide-07.jpg",
    title: "Storefront Arched Facade & Portal Threshold",
    category: "SUREENA CHOWDHRI · JAIPUR",
    designerNote: "Minimalist arched facade blending traditional Jaipur heritage with contemporary couture retail. Symmetrical window showcases draw shoppers into the central hall.",
  },
  {
    id: "deck-sc-02",
    image: "/projects/sureena-chowdhri/slides/slide-09.jpg",
    title: "Main Retail Runway & Arched Display Niches",
    category: "SUREENA CHOWDHRI · JAIPUR",
    designerNote: "Fluid central customer circulation path framed by recessed plaster display niches and custom warm brass hanging systems.",
  },
  {
    id: "deck-sc-03",
    image: "/projects/sureena-chowdhri/slides/slide-11.jpg",
    title: "Bridal Consultation Lounge & Private Salon",
    category: "SUREENA CHOWDHRI · JAIPUR",
    designerNote: "Dedicated couture discussion lounge designed for intimate bridal shopping experiences with custom curved banquette seating and warm diffused cove lighting.",
  },
  {
    id: "deck-sc-04",
    image: "/projects/sureena-chowdhri/slides/slide-14.jpg",
    title: "Luxury Trial Suite & Backlit Arched Vanity",
    category: "SUREENA CHOWDHRI · JAIPUR",
    designerNote: "Private fitting suite with full-length perimeter backlit arched mirror, acoustic wall linings, and warm daylight-accurate illumination.",
  },
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
    designerNote: "Custom curved flexi-ply baffles finished in Fronto SV06 Black Oak designed exclusively using the VOX catalog to visually elongate the boutique footprint.",
  },
  {
    id: "deck-03",
    image: "/projects/bear-house-jaipur/slides/slide-02.jpg",
    title: "Primary Menswear Runway & Custom Display Island",
    category: "THE BEAR HOUSE · JAIPUR",
    designerNote: "Circulation loop flanking custom solid oak display fixtures with dark bronze accents, balancing density with effortless customer movement.",
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
    title: "Storefront Visual Merchandising & Minimalistic Facade",
    category: "THE BEAR HOUSE · M3M PARAGON",
    designerNote: "Minimalistic facade design and high-contrast entrance portal delivering mezzanine floor designed visibility and clear line of sight to the upper level.",
  },
  {
    id: "deck-06",
    image: "/projects/bear-house-jaipur/slides/slide-06.jpg",
    title: "POS Checkout Counter & Integrated Wire Raceways",
    category: "THE BEAR HOUSE · JAIPUR",
    designerNote: "Bespoke cash desk engineered with concealed wire raceways for POS terminals, barcode scanners, and receipt printers.",
  },
];

const marqueeWords = [
  "Civil Engineering",
  "Retail Design",
  "Interior & Spatial Design",
  "Project Management",
  "Labour & Vendor Management",
  "Site Execution & QA/QC",
  "Bill of Quantities (BOQ)",
  "Material Selection",
  "3D Architectural Visualization",
  "Sustainable Innovation",
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
                  <span>Civil Engineering &amp; Retail Design</span>
                </div>

                <h1
                  className="hero-title reveal-on-scroll reveal-delay-1"
                  style={{
                    fontSize: "clamp(46px, 6.2vw, 78px)",
                    lineHeight: 1.05,
                    marginBottom: "10px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Muhammad Rishad
                </h1>

                <div
                  className="reveal-on-scroll reveal-delay-1"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(22px, 2.6vw, 32px)",
                    color: "var(--accent-terracotta)",
                    fontWeight: 400,
                    marginBottom: "20px",
                    lineHeight: 1.25,
                  }}
                >
                  Civil Engineering and Retail Designer
                </div>

                <p className="hero-first-person reveal-on-scroll reveal-delay-2">
                  I position myself at the intersection of design, engineering and innovation.
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
                    <span>My Story &amp; Credentials</span>
                    <span>↓</span>
                  </a>
                </div>

                <div className="hero-stats reveal-on-scroll reveal-delay-4">
                  <div className="hero-stat-item">
                    <b>4+ Flagships</b>
                    <span>Retail Stores Delivered</span>
                  </div>
                  <div className="hero-stat-item">
                    <b>2+ Yrs</b>
                    <span>Commercial &amp; Retail</span>
                  </div>
                  <div className="hero-stat-item">
                    <b>1 Patent</b>
                    <span>German Patent Granted</span>
                  </div>
                </div>
              </div>

              {/* HERO VISUAL FRAME — PERSONAL PHOTOGRAPH */}
              <div className="hero-visual-card reveal-on-scroll reveal-delay-2">
                <Image
                  src="/rishad-photo.png"
                  alt="Muhammad Rishad — Civil Engineering and Retail Designer"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 45vw"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
                <div className="hero-visual-badge">MUHAMMAD RISHAD</div>
                <div className="hero-visual-caption">
                  <h3>Civil Engineering and Retail Designer</h3>
                  <p>
                    Combining technical civil engineering rigor with retail design and practical innovation.
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

        {/* THE TRIPLE DISCIPLINE: DESIGN, ENGINEERING & INNOVATION (3 CARDS + SUREENA CHOWDHRI RENDERS) */}
        <section className="philosophy-section reveal-on-scroll">
          <div className="shell">
            <div className="section-header-centered">
              <span className="section-eyebrow">THE TRIPLE DISCIPLINE</span>
              <h2 className="section-title">
                Civil Engineering, Retail Design &amp; Spatial Innovation
              </h2>
              <p className="section-lead">
                &ldquo;Exceptional retail environments require an uncompromised balance: captivating spatial design that elevates the brand, rigorous civil engineering that ensures buildability, and practical innovation that solves complex challenges.&rdquo;
              </p>
            </div>

            {/* THREE DISCIPLINE CARDS */}
            <div className="triple-lens-grid">
              {/* CARD 1: DESIGN */}
              <div className="dual-lens-card designer">
                <div className="dual-lens-number">01 / CREATIVE DIRECTION</div>
                <h3>Retail &amp; Spatial Design</h3>
                <p>
                  &ldquo;I lead retail space planning and interior design where spatial flow and brand storytelling elevate commercial environments. From intuitive customer circulation loops and visual merchandising focal walls to tactile material palettes, I craft destinations that captivate shoppers and drive engagement.&rdquo;
                </p>
                <div className="dual-lens-tags">
                  <span className="dual-lens-tag">Retail Space Planning</span>
                  <span className="dual-lens-tag">Customer Circulation Flow</span>
                  <span className="dual-lens-tag">Visual Merchandising</span>
                  <span className="dual-lens-tag">Material Selection</span>
                  <span className="dual-lens-tag">Spatial Layout Planning</span>
                  <span className="dual-lens-tag">Lighting Design</span>
                </div>
              </div>

              {/* CARD 2: ENGINEERING */}
              <div className="dual-lens-card engineer">
                <div className="dual-lens-number">02 / TECHNICAL RIGOR</div>
                <h3>Civil Engineering</h3>
                <p>
                  &ldquo;Design without constructability is only a drawing. Grounded in my Civil Engineering degree and hands-on site management at Bangalore International Airport Terminal 2 commercial fit-outs, I manage full <strong>site execution</strong>, <strong>QA/QC standards</strong>, comprehensive <strong>Bill of Quantities (BOQ)</strong>, <strong>vendor management</strong>, and end-to-end <strong>project management</strong> with exacting technical capabilities.&rdquo;
                </p>
                <div className="dual-lens-tags">
                  <span className="dual-lens-tag">Site Execution &amp; Supervision</span>
                  <span className="dual-lens-tag">QA/QC Standards</span>
                  <span className="dual-lens-tag">Bill of Quantities (BOQ)</span>
                  <span className="dual-lens-tag">Vendor Management</span>
                  <span className="dual-lens-tag">Project Management</span>
                  <span className="dual-lens-tag">Labour Coordination</span>
                  <span className="dual-lens-tag">Structural Load Coordination</span>
                </div>
              </div>

              {/* CARD 3: INNOVATION */}
              <div className="dual-lens-card innovator">
                <div className="dual-lens-number">03 / APPLIED RESEARCH</div>
                <h3>Practical Innovation</h3>
                <p>
                  &ldquo;Combined multidisciplinary knowledge with innovation to develop practical, thoughtful solutions for complex design challenges. I hold a granted <strong>German Patent (DE202023101691U1)</strong> for an eco-friendly biodegradable material substitute for single-use plastics, and was awarded by the <strong>CSIR</strong> for engineering a closed-loop hydroponics cultivation system from household waste.&rdquo;
                </p>
                <div className="dual-lens-tags">
                  <span className="dual-lens-tag">German Patent Granted</span>
                  <span className="dual-lens-tag">CSIR Award Winner</span>
                  <span className="dual-lens-tag">Hydroponics from Household Waste</span>
                  <span className="dual-lens-tag">Autodesk BIM Certified</span>
                  <span className="dual-lens-tag">Sustainable Material Science</span>
                  <span className="dual-lens-tag">Multidisciplinary Problem Solving</span>
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
                <h2 className="section-title">Selected Works</h2>
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
                        <label>Core Focus</label>
                        <p>{p.tags[0]} &amp; {p.tags[1]}</p>
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
                        {p.slug === "sureena-chowdhri" ? "Inspect Project Document ↗" : "Inspect Technical Drawings ↗"}
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
              <h2 className="section-title">3D Visual Perspectives &amp; Presentation Slides</h2>
              <p className="section-lead">
                &ldquo;High-resolution visual slides rendered for client presentations across Sureena Chowdhri, The Bear House, and VOX. Tap through to examine spatial proportion, materiality, and lighting atmospheres.&rdquo;
              </p>
            </div>

            <div className="reveal-on-scroll reveal-delay-1">
              <PresentationDeck
                projectTitle="Retail Concepts &amp; 3D Visual Deck"
                deckSubtitle="Sureena Chowdhri, The Bear House &amp; VOX"
                slides={featuredDeckSlides}
              />
            </div>
          </div>
        </section>

        {/* RESUME & CREDENTIALS SECTION */}
        <section id="resume" className="resume-section">
          <div className="shell">
            <div className="section-header-centered reveal-on-scroll">
              <span className="section-eyebrow">VERIFIED CREDENTIALS</span>
              <h2 className="section-title">My Journey, Experience &amp; Resume</h2>
              <p className="section-lead">
                &ldquo;Explore my Statement of Purpose (SOP), project leadership across Do More Design Studio, commercial airport fit-out execution at BLR T2, civil engineering degree, and granted German patent.&rdquo;
              </p>
            </div>

            <div className="reveal-on-scroll reveal-delay-1">
              <InteractiveResume />
            </div>
          </div>
        </section>

        {/* CALL TO ACTION — CONTENT SECTION (CENTER-ALIGNED) */}
        <section style={{ padding: "60px 0 90px" }}>
          <div className="shell">
            <div
              style={{
                background: "linear-gradient(135deg, var(--bg-subtle) 0%, var(--bg-surface) 100%)",
                borderRadius: "var(--radius-xl)",
                padding: "clamp(36px, 5vw, 64px)",
                border: "1px solid var(--line-subtle)",
                boxShadow: "var(--shadow-md)",
                textAlign: "center",
                maxWidth: "960px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              className="reveal-on-scroll"
            >
              <span
                className="section-eyebrow"
                style={{ textAlign: "center", display: "inline-block" }}
              >
                START A COLLABORATION
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(28px, 3.8vw, 48px)",
                  fontWeight: 400,
                  marginBottom: "16px",
                  lineHeight: 1.15,
                  textAlign: "center",
                }}
              >
                Let&apos;s build spaces that captivate you.
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--ink-secondary)",
                  maxWidth: "680px",
                  margin: "0 auto 32px",
                  lineHeight: 1.6,
                  textAlign: "center",
                }}
              >
                Whether you need a flagship retail store planned from scratch, 3D visualization concepts, technical drawing sets, or turnkey vendor &amp; site management, I am ready to bring your vision to reality.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
                <a
                  href="mailto:shaikh.rishad7@gmail.com"
                  className="btn-pill btn-pill-primary"
                >
                  <span>Email Me Directly</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://wa.me/919182397856?text=Hi%20Muhammad%20Rishad,%20I%20would%20like%20to%20discuss%20a%20retail%20design%20project."
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