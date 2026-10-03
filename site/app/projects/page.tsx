import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollObserver from "../components/ScrollObserver";

export const metadata = {
  title: "Selected Retail Projects — Muhammad Rishad",
  description:
    "Explore retail interior design case studies by Muhammad Rishad: The Bear House Pacific Mall Jaipur, VOX Turquoise Mumbai, and The Bear House M3M Paragon 57.",
};

const projects = [
  {
    no: "01",
    slug: "the-bear-house-pacific-jaipur",
    name: "The Bear House — Pacific Mall Jaipur",
    category: "Flagship Retail Store",
    meta: "1,916 SQ FT · JAIPUR · NEW FLAGSHIP",
    image: "/projects/bear-house-jaipur/01.jpg",
    drawingPreview: "/projects/bear-house-jaipur/mep-p1.jpg",
    scope: "Space Planning · Fixture Detailing · MEP Coordination · AutoCAD GFC",
    quote:
      "“My vision for this 1,916 sq ft store was to choreograph an expansive, masculine retail journey. I calibrated circulation aisles around central oak display tables, aligned ambient and accent lighting, and concealed all electrical feeds within floor troughs to maintain a clean ceiling plane.”",
    stats: [
      { label: "Carpet Area", value: "1,916 SQ FT" },
      { label: "Location", value: "Pacific Mall, Jaipur" },
      { label: "Deliverables", value: "Fixture Plans & MEP GFC" },
    ],
  },
  {
    no: "02",
    slug: "vox-turquoise-mumbai",
    name: "VOX — Turquoise Mumbai",
    category: "Luxury Boutique & Material Library",
    meta: "471 SQ FT · MUMBAI · GFC PACKAGE",
    image: "/projects/vox-mumbai/01.jpg",
    drawingPreview: "/projects/vox-mumbai/gfc-p3.jpg",
    scope: "Spatial Concept · Curved Ceiling Detailing · Joinery Sections · 22-Sheet GFC",
    quote:
      "“In a boutique of 471 sq ft, luxury is defined by spatial restraint and tactile precision. I designed curved ceiling baffles, an interactive material library for architects, and a seamless SPC oak mist floor layout. My 22-page GFC drawing set governed every millimeter of joinery.”",
    stats: [
      { label: "Carpet Area", value: "471 SQ FT" },
      { label: "Location", value: "Turquoise, Mumbai" },
      { label: "Deliverables", value: "Full 22-Page GFC Set" },
    ],
  },
  {
    no: "03",
    slug: "the-bear-house-m3m",
    name: "The Bear House — M3M Paragon 57",
    category: "Visual Merchandising & 3D Interior",
    meta: "RETAIL INTERIOR · GURUGRAM · 3D CONCEPT",
    image: "/projects/bear-house-m3m/01.jpg",
    drawingPreview: "/projects/bear-house-m3m/image5.jpeg",
    scope: "3D Visualization · Storefront Impact · Display Elevations · POS Layout",
    quote:
      "“At M3M Paragon 57, I investigated high-contrast retail merchandising. Using photorealistic 3D rendering and technical elevation drafting, I balanced illuminated brand logos, modular perimeter racks, and a welcoming customer cash desk that drives conversion.”",
    stats: [
      { label: "Category", value: "Retail Apparel Concept" },
      { label: "Location", value: "M3M Paragon 57" },
      { label: "Deliverables", value: "3D Visuals & 2D Layouts" },
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
                Retail Interiors, Fixtures & Construction Drawings
              </h1>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.6,
                  color: "var(--ink-secondary)",
                }}
                className="reveal-on-scroll reveal-delay-2"
              >
                &ldquo;Every project here represents a complete synthesis of spatial design, brand merchandising, and buildable AutoCAD documentation. Step inside each project to see the 3D renders alongside the technical drawings that made them real.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* PROJECT LIST */}
        <section>
          <div className="shell">
            <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
              {projects.map((p, idx) => (
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
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.15fr 0.85fr",
                      gap: "clamp(30px, 5vw, 60px)",
                      alignItems: "center",
                    }}
                  >
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

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3, 1fr)",
                          gap: "12px",
                          padding: "16px 0",
                          borderTop: "1px solid var(--line-subtle)",
                          borderBottom: "1px solid var(--line-subtle)",
                          marginBottom: "24px",
                        }}
                      >
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

                      <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
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