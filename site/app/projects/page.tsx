import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollObserver from "../components/ScrollObserver";

export const metadata = {
  title: "Selected Retail Projects — Muhammad Rishad",
  description:
    "Explore retail space planning and interior design case studies by Muhammad Rishad: Sureena Chowdhri Jaipur, The Bear House Pacific Mall Jaipur, VOX Turquoise Mumbai, and The Bear House M3M Paragon 57.",
};

const projects = [
  {
    no: "01",
    slug: "sureena-chowdhri",
    name: "Sureena Chowdhri — Flagship Boutique Jaipur",
    category: "Luxury Designer Boutique",
    meta: "JAIPUR · LUXURY COUTURE CONCEPT",
    image: "/projects/sureena-chowdhri/slides/slide-07.jpg",
    scope: "Adapted Concept Design · Detailed Drawings · Space Planning · Store Design Elements",
    quote:
      "“For Sureena Chowdhri's Jaipur flagship, I adapted the concept design into the store environment, developed detailed drawings, and worked on the overall space planning and design elements throughout the project. Balancing traditional arched portals with contemporary luxury, I laid out welcoming bridal consultation lounges, bespoke brass garment rails, and an intuitive circular customer journey that celebrates couture craft.”",
    stats: [
      { label: "Location", value: "Jaipur, Rajasthan" },
      { label: "Role", value: "Concept Adaptation & Space Planning" },
      { label: "Deliverables", value: "3D Visual Deck & Project Document" },
    ],
  },
  {
    no: "02",
    slug: "the-bear-house-pacific-jaipur",
    name: "The Bear House — Pacific Mall Jaipur",
    category: "Flagship Retail Store",
    meta: "JAIPUR · NEW FLAGSHIP",
    image: "/projects/bear-house-jaipur/01.jpg",
    drawingPreview: "/projects/bear-house-jaipur/mep-p1.jpg",
    scope: "Space Planning · Project Management · QA/QC · Material Selection",
    quote:
      "“My vision for this flagship store was to choreograph an expansive, masculine retail journey. I calibrated circulation aisles around central display islands, aligned ambient and accent lighting, and led project management and QA/QC to ensure every fixture junction was executed with precision.”",
    stats: [
      { label: "Location", value: "Pacific Mall, Jaipur" },
      { label: "Execution", value: "Project Management & QA/QC" },
      { label: "Deliverables", value: "Full Construction Drawing Set" },
    ],
  },
  {
    no: "03",
    slug: "vox-turquoise-mumbai",
    name: "VOX — Turquoise Mumbai",
    category: "Luxury Experience Center & Material Studio",
    meta: "MUMBAI · MATERIAL STUDIO",
    image: "/projects/vox-mumbai/01.jpg",
    drawingPreview: "/projects/vox-mumbai/gfc-p3.jpg",
    scope: "VOX Catalog Systems · Curved Ceiling Detailing · Material Selection · BOQ",
    quote:
      "“I designed this exclusive experience center by utilizing only the VOX product catalog and architectural systems. Sculpted curved flexi-ply ceiling baffles stretch sightlines, accompanied by an interactive material library for architects, comprehensive BOQ drafting, and vendor management.”",
    stats: [
      { label: "Location", value: "Turquoise, Mumbai" },
      { label: "Catalog Integration", value: "100% VOX Products" },
      { label: "Deliverables", value: "Architectural Drawing Package & BOQ" },
    ],
  },
  {
    no: "04",
    slug: "the-bear-house-m3m",
    name: "The Bear House — M3M Paragon 57",
    category: "Visual Merchandising & Store Architecture",
    meta: "GURUGRAM · FLAGSHIP STORE",
    image: "/projects/bear-house-m3m/01.jpg",
    drawingPreview: "/projects/bear-house-m3m/image5.jpeg",
    scope: "Lead Project Designer · Mezzanine Floor Designed · Facade Design",
    quote:
      "“I led this project myself from concept through technical delivery. Mezzanine floor designed, establishing seamless customer flow and sculpted a minimalistic facade design that commands attention from the mall concourse while maintaining strict BOQ, labour coordination, and QA/QC control.”",
    stats: [
      { label: "Location", value: "M3M Paragon 57, Gurugram" },
      { label: "Design Feature", value: "Mezzanine floor designed" },
      { label: "Key Features", value: "Mezzanine Flow & Minimalistic Facade" },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />

      <main style={{ paddingBottom: "100px" }}>
        {/* HEADER */}
        <section style={{ paddingTop: "clamp(50px, 7vw, 90px)", paddingBottom: "50px" }}>
          <div className="shell">
            <div style={{ maxWidth: "800px" }}>
              <div className="hero-eyebrow reveal-on-scroll">
                <span>●</span>
                <span>PROJECT PORTFOLIO</span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(42px, 5.5vw, 68px)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  marginBottom: "24px",
                }}
                className="reveal-on-scroll reveal-delay-1"
              >
                Retail Interiors, Space Planning &amp; Technical Execution
              </h1>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.6,
                  color: "var(--ink-secondary)",
                }}
                className="reveal-on-scroll reveal-delay-2"
              >
                &ldquo;Every project here represents a complete synthesis of spatial planning, brand merchandising, and buildable technical documentation. Explore each case study to view 3D visual perspectives alongside technical drawing sets.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* PROJECT LIST */}
        <section>
          <div className="shell">
            <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
              {projects.map((p) => (
                <div
                  key={p.slug}
                  className="reveal-on-scroll"
                  style={{
                    background: "var(--bg-surface)",
                    borderRadius: "var(--radius-xl)",
                    padding: "clamp(28px, 4vw, 50px)",
                    border: "1px solid var(--line-subtle)",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <div className="project-listing-row">
                    {/* Media preview */}
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "16 / 10",
                        borderRadius: "var(--radius-lg)",
                        overflow: "hidden",
                        background: "var(--bg-subtle)",
                        boxShadow: "var(--shadow-sm)",
                      }}
                    >
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "16px",
                          left: "16px",
                          background: "rgba(25, 23, 21, 0.85)",
                          color: "#ffffff",
                          padding: "6px 14px",
                          borderRadius: "var(--radius-pill)",
                          fontSize: "11px",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {p.no} / {p.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "11px",
                          letterSpacing: "0.12em",
                          color: "var(--accent-terracotta)",
                          textTransform: "uppercase",
                          fontWeight: 600,
                          display: "block",
                          marginBottom: "8px",
                        }}
                      >
                        {p.meta}
                      </span>

                      <h2
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "clamp(26px, 3vw, 38px)",
                          fontWeight: 500,
                          lineHeight: 1.18,
                          marginBottom: "16px",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {p.name}
                      </h2>

                      <p
                        style={{
                          fontSize: "15px",
                          lineHeight: "1.65",
                          color: "var(--ink-secondary)",
                          marginBottom: "24px",
                          fontStyle: "italic",
                          paddingLeft: "16px",
                          borderLeft: "2px solid var(--accent-brass)",
                        }}
                      >
                        {p.quote}
                      </p>

                      <div className="project-listing-stats">
                        {p.stats.map((s) => (
                          <div key={s.label}>
                            <div
                              style={{
                                fontSize: "10px",
                                fontFamily: "var(--font-mono)",
                                color: "var(--ink-muted)",
                                textTransform: "uppercase",
                              }}
                            >
                              {s.label}
                            </div>
                            <div
                              style={{
                                fontSize: "12px",
                                fontWeight: 600,
                                color: "var(--ink-primary)",
                                marginTop: "3px",
                              }}
                            >
                              {s.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap", marginTop: "24px" }}>
                        <Link
                          href={`/projects/${p.slug}`}
                          className="btn-pill btn-pill-primary"
                        >
                          <span>Explore Project Case Study</span>
                          <span>↗</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}