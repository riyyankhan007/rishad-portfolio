import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollObserver from "../components/ScrollObserver";
import InteractiveResume from "../components/InteractiveResume";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "My Story & Resume — Muhammad Rishad",
  description:
    "Learn about Muhammad Rishad's journey from civil engineering at NMIT to retail interior design at Do More Design Studio, commercial airport fit-outs at BLR T2, and his granted German patent.",
};

export default function About() {
  return (
    <>
      <ScrollObserver />
      <Navbar />

      <main style={{ paddingBottom: "100px" }}>
        {/* HERO */}
        <section style={{ paddingTop: "clamp(50px, 7vw, 90px)", paddingBottom: "60px" }}>
          <div className="shell">
            <div style={{ maxWidth: "860px" }}>
              <div className="hero-eyebrow reveal-on-scroll">
                <span>●</span>
                <span>BIOGRAPHY & CREDENTIALS</span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(42px, 5.5vw, 72px)",
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  marginBottom: "28px",
                }}
                className="reveal-on-scroll reveal-delay-1"
              >
                &ldquo;I design spaces where aesthetic intuition is grounded in engineering truth.&rdquo;
              </h1>

              <p
                style={{
                  fontSize: "clamp(18px, 1.4vw, 22px)",
                  lineHeight: 1.6,
                  color: "var(--ink-secondary)",
                }}
                className="reveal-on-scroll reveal-delay-2"
              >
                I am a <strong>Retail Interior Designer and Civil Engineer</strong> based in Bangalore, India. Over the last 2+ years, I have worked across commercial fit-outs, luxury retail stores, and construction documentation &mdash; bridging the gap between evocative spatial design and on-site buildability.
              </p>
            </div>
          </div>
        </section>

        {/* NARRATIVE SECTION */}
        <section style={{ padding: "40px 0 80px" }}>
          <div className="shell">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 0.8fr",
                gap: "clamp(40px, 6vw, 80px)",
                alignItems: "start",
              }}
            >
              <div className="reveal-on-scroll">
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "32px",
                    fontWeight: 400,
                    marginBottom: "20px",
                  }}
                >
                  My Journey: From Structures to Storefronts
                </h2>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    fontSize: "16px",
                    lineHeight: 1.7,
                    color: "var(--ink-secondary)",
                  }}
                >
                  <p>
                    My career began in the rigorous discipline of <strong>Civil Engineering at Nitte Meenakshi Institute of Technology (NMIT Bangalore)</strong>. While studying structural calculations, concrete behavior, and surveying, I realized that what fascinated me most was not just the skeleton of a building &mdash; but how humans experience the interior volume.
                  </p>

                  <p>
                    My baptism by fire came as a <strong>Site Engineer at Shah Enterprises</strong>, supervising fit-out construction inside <strong>Terminal 2 of Bangalore International Airport (BLR T2)</strong>. There, I managed the execution of demanding hospitality and commercial venues including <em>Bombay Brasserie</em>, <em>Wendy&apos;s</em>, and <em>KFC Ultra Bar</em>. Inside an international airport, there is zero tolerance for error: laser benchmarks must align down to the millimeter, fire & life-safety codes are unforgiving, and contractor coordination happens under strict night shifts. That experience taught me how spaces are actually built.
                  </p>

                  <p>
                    Today, at <strong>Do More Design Studio</strong>, I bring that engineering certainty directly into <strong>Retail Interior Design</strong>. I design store concepts, customer circulation routes, custom fixtures, and complete Good-For-Construction (GFC) packages for major brands including <strong>Aditya Birla Group</strong>, <strong>The Bear House</strong>, <strong>VOX</strong>, <strong>Furlenco</strong>, and <strong>Nobero</strong>.
                  </p>

                  <p>
                    When I sketch a curved gypsum ceiling or an oak display gondola, I don&apos;t just ask how it looks in a 3D render. I calculate how the flexi-ply will bend, how the lighting driver will be serviced, and how the joiner will secure the rebate. That is why clients and contractors trust my designs to execute seamlessly on time and on budget.
                  </p>
                </div>
              </div>

              {/* SIDEBAR HIGHLIGHTS */}
              <div
                style={{
                  background: "var(--bg-surface)",
                  borderRadius: "var(--radius-xl)",
                  padding: "36px",
                  border: "1px solid var(--line-subtle)",
                  boxShadow: "var(--shadow-md)",
                }}
                className="reveal-on-scroll reveal-delay-2"
              >
                <div style={{ position: "relative", height: "240px", borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: "24px" }}>
                  <Image
                    src="/projects/bear-house-jaipur/02.jpg"
                    alt="Interior retail environment by Muhammad Rishad"
                    fill
                    sizes="(max-width: 900px) 100vw, 30vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "12px",
                      background: "rgba(255,255,255,0.92)",
                      padding: "6px 12px",
                      borderRadius: "var(--radius-pill)",
                      fontSize: "10px",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    THE BEAR HOUSE · JAIPUR
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "22px",
                    fontWeight: 500,
                    marginBottom: "12px",
                  }}
                >
                  Quick Facts About Me
                </h3>

                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    fontSize: "14px",
                    color: "var(--ink-secondary)",
                  }}
                >
                  <li style={{ display: "flex", gap: "10px" }}>
                    <span style={{ color: "var(--accent-terracotta)", fontWeight: "bold" }}>●</span>
                    <span><strong>Location:</strong> Bangalore, Karnataka, India</span>
                  </li>
                  <li style={{ display: "flex", gap: "10px" }}>
                    <span style={{ color: "var(--accent-terracotta)", fontWeight: "bold" }}>●</span>
                    <span><strong>Degree:</strong> B.E. Civil Engineering (NMIT, GPA 7.65)</span>
                  </li>
                  <li style={{ display: "flex", gap: "10px" }}>
                    <span style={{ color: "var(--accent-terracotta)", fontWeight: "bold" }}>●</span>
                    <span><strong>Patents:</strong> Granted German Patent for Biodegradable Agro-Waste Material</span>
                  </li>
                  <li style={{ display: "flex", gap: "10px" }}>
                    <span style={{ color: "var(--accent-terracotta)", fontWeight: "bold" }}>●</span>
                    <span><strong>Awards:</strong> CSIR Winner &mdash; Future Entrepreneurs Connect</span>
                  </li>
                  <li style={{ display: "flex", gap: "10px" }}>
                    <span style={{ color: "var(--accent-terracotta)", fontWeight: "bold" }}>●</span>
                    <span><strong>Key Software:</strong> AutoCAD 2D, Revit, 3D Visualization, Excel, BOQ</span>
                  </li>
                </ul>

                <div style={{ marginTop: "28px" }}>
                  <a
                    href="/resume/Muhammad_Rishad_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                    download
                  >
                    <span>Download Full Resume PDF</span>
                    <span>↓</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FULL INTERACTIVE RESUME */}
        <section style={{ padding: "40px 0" }}>
          <div className="shell">
            <div className="section-header-centered reveal-on-scroll">
              <span className="section-eyebrow">DETAILED TIMELINE</span>
              <h2 className="section-title">Professional Experience & Accreditations</h2>
              <p className="section-lead">
                Explore each chapter of my career in my own words &mdash; click the tabs below to view my experience, patents, education, and technical capabilities.
              </p>
            </div>

            <div className="reveal-on-scroll reveal-delay-1">
              <InteractiveResume />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}