import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollObserver from "../components/ScrollObserver";
import InteractiveResume from "../components/InteractiveResume";
import Image from "next/image";

export const metadata = {
  title: "My Story, SOP & Resume — Muhammad Rishad",
  description:
    "Learn about Muhammad Rishad's Statement of Purpose (SOP), journey from civil engineering to retail design across The Bear House, Sureena Chowdhri, VOX, Nobero, BLR T2, and his registered German Utility Model (DPMA).",
};

export default function About() {
  return (
    <>
      <ScrollObserver />
      <Navbar />

      <main style={{ paddingBottom: "100px" }}>
        {/* HERO */}
        <section style={{ paddingTop: "clamp(50px, 7vw, 90px)", paddingBottom: "50px" }}>
          <div className="shell">
            <div style={{ maxWidth: "880px" }}>
              <div className="hero-eyebrow reveal-on-scroll">
                <span>●</span>
                <span>STATEMENT OF PURPOSE &amp; STORY</span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(32px, 4.5vw, 64px)",
                  fontWeight: 400,
                  lineHeight: 1.12,
                  letterSpacing: "-0.02em",
                  marginBottom: "24px",
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
                I am a <strong>Civil Engineering and Retail Designer</strong> based in Bangalore, India. Over the last 2+ years, I have led retail space planning, 3D architectural visualization, site execution, QA/QC, BOQ preparation, and vendor management across marquee brands.
              </p>
            </div>
          </div>
        </section>

        {/* STATEMENT OF PURPOSE (SOP) HIGHLIGHT BANNER */}
        <section style={{ padding: "10px 0 50px" }}>
          <div className="shell">
            <div
              style={{
                background: "var(--bg-surface)",
                borderRadius: "var(--radius-xl)",
                padding: "clamp(28px, 4vw, 48px)",
                border: "1px solid var(--line-subtle)",
                boxShadow: "var(--shadow-md)",
              }}
              className="reveal-on-scroll"
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "22px" }}>
                <div>
                  <span className="section-eyebrow">OFFICIAL STATEMENT</span>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 3.2vw, 36px)", fontWeight: 400, margin: "4px 0 0" }}>
                    Statement of Purpose (SOP)
                  </h2>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "11.5px", color: "var(--accent-terracotta)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "6px" }}>
                    Muhammad Rishad &bull; Civil Engineering and Retail Designer
                  </p>
                </div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <span className="patent-badge-item">Civil Engineering &amp; Retail Design</span>
                  <span className="patent-badge-item">German Utility Model Holder · DPMA</span>
                  <span className="patent-badge-item">CSIR First Prize Winner</span>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px", fontSize: "15.5px", lineHeight: 1.75, color: "var(--ink-secondary)" }}>
                <p>
                  I have always been curious about how things work, how they are built, and how they can be made better. Growing up with a strong interest in nature, sports, and being outdoors, I became increasingly aware of the relationship between what we build and the environment around us. More than simply understanding problems, I have always been drawn to finding practical ways to solve them. This mindset has shaped many of my choices, from taking on research projects outside my required classes to playing competitive sports alongside my studies. Playing university-level football for four years and representing Bangalore Rugby Club at the South Asian Club Championship taught me how to work closely within a team, manage competing pressures, and stay persistent when faced with tough challenges. These experiences built my interest in a field where engineering, creativity, and hands-on problem-solving can be used to make a real impact on people and the environment.
                </p>

                <div
                  style={{
                    background: "var(--bg-subtle)",
                    borderLeft: "3px solid var(--accent-terracotta)",
                    padding: "18px 24px",
                    borderRadius: "0 var(--radius-md) var(--radius-md) 0",
                    fontStyle: "italic",
                    color: "var(--ink-primary)",
                    fontSize: "15.5px",
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;Working directly on sites and in design studios has shown me that sustainability cannot just be a technical afterthought or a checklist item; it has to be built into the very way buildings are planned, designed, and lived in.&rdquo;
                </div>

                <p>
                  After earning my Bachelor&apos;s degree in Civil Engineering, I worked across construction, interior execution, and design. As a site engineer on retail fit-out projects at Bangalore International Airport Terminal 2, I spent my time directly on construction sites, dealing with the daily realities of material coordination, vendors, paperwork, and the challenge of turning architectural drawings into real, functional spaces. Later, working as a retail designer for clothing stores and experience centres gave me a different perspective on how spatial flow, technical constraints, and user needs come together during the design phase.
                </p>

                <p>
                  However, my interest in sustainability grew naturally alongside this work. During my final year of university, I chose to investigate a bio-based alternative material to replace single-use plastics in construction, even though it was completely outside my curriculum. This research eventually led to a Registered German Utility Model for a Sustainable Material Composite Made from Biodegradable Waste (Utility Model No. 20 2022 106 106 - DPMA) registered by the German Patent and Trade Mark Office (Deutsches Patent- und Markenamt). Following that, I independently built a space-saving hydroponic system that used household waste to grow crops. Presenting this to scientists at the Council of Scientific and Industrial Research &ndash; Structural Engineering Research Centre (CSIR-SERC) during the Future Entrepreneurs Connect event&mdash;part of India&apos;s G20 Presidency initiative earned the project first-place recognition. These projects were selfless attempts driven purely by a desire to find solutions for the environment and society, rather than just fulfilling a curriculum requirement. Working directly on sites and in design studios has shown me that sustainability cannot just be a technical afterthought or a checklist item; it has to be built into the very way buildings are planned, designed, and lived in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NARRATIVE SECTION */}
        <section style={{ padding: "20px 0 70px" }}>
          <div className="shell">
            <div className="about-narrative-grid">
              <div className="reveal-on-scroll">
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(26px, 3.2vw, 34px)",
                    fontWeight: 400,
                    marginBottom: "18px",
                  }}
                >
                  My Journey: From Structures to Storefronts
                </h2>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "var(--ink-secondary)",
                  }}
                >
                  <p>
                    My career began in the rigorous discipline of <strong>Civil Engineering at Nitte Meenakshi Institute of Technology (NMIT Bangalore)</strong>. While studying structural calculations, concrete behavior, and surveying, I realized that what fascinated me most was how humans experience the interior volume and brand narrative.
                  </p>

                  <p>
                    My practical grounding came as a <strong>Site Engineer at Shah Enterprises</strong>, supervising fit-out construction inside <strong>Terminal 2 of Bangalore International Airport (BLR T2)</strong>. There, I managed the execution of demanding hospitality and commercial venues including <em>Bombay Brasserie</em>, <em>Wendy&apos;s</em>, and <em>KFC Ultra Bar</em>. Inside an international airport, there is zero tolerance for error: layouts must align perfectly, and contractor coordination happens under strict night shifts. That experience taught me how spaces are actually built.
                  </p>

                  <p>
                    Today, at <strong>Do More Design Studio</strong>, I bring that engineering certainty directly into <strong>Retail Space Planning &amp; Interior Design</strong>. I design store concepts, customer circulation routes, custom fixtures, and technical drawing packages for major brands including <strong>The Bear House</strong>, <strong>Sureena Chowdhri</strong>, <strong>VOX</strong>, <strong>Nobero</strong>, and <strong>Aditya Birla Group</strong>.
                  </p>

                  <p>
                    When I sketch an arched customer threshold or a display island, I don&apos;t just ask how it looks in a 3D render. I calculate how the material bends, how joinery interfaces with flooring, how the labour will fabricate the junction, and how the BOQ reflects real-world costs. That is why clients and contractors trust my designs to execute seamlessly on time and on budget.
                  </p>
                </div>
              </div>

              {/* SIDEBAR HIGHLIGHTS — FACTS ABOUT ME WITH PERSONAL PHOTO */}
              <div className="about-sidebar-card reveal-on-scroll reveal-delay-2">
                <div className="about-sidebar-media" style={{ position: "relative", width: "100%", aspectRatio: "4 / 5", overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
                  <Image
                    src="/rishad-photo.png"
                    alt="Muhammad Rishad — Civil Engineering and Retail Designer"
                    fill
                    sizes="(max-width: 900px) 100vw, 360px"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                  <div className="about-sidebar-badge">
                    MUHAMMAD RISHAD
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "22px",
                    fontWeight: 500,
                    marginTop: "20px",
                    marginBottom: "14px",
                  }}
                >
                  Facts About Me
                </h3>

                <ul className="about-facts-list">
                  <li className="about-fact-item">
                    <span className="about-fact-bullet">●</span>
                    <span><strong>Role:</strong> Civil Engineering and Retail Designer</span>
                  </li>
                  <li className="about-fact-item">
                    <span className="about-fact-bullet">●</span>
                    <span><strong>Location:</strong> Bangalore, Karnataka, India</span>
                  </li>
                  <li className="about-fact-item">
                    <span className="about-fact-bullet">●</span>
                    <span><strong>Degree:</strong> B.E. Civil Engineering (NMIT, GPA 7.65)</span>
                  </li>
                  <li className="about-fact-item">
                    <span className="about-fact-bullet">●</span>
                    <span><strong>Utility Model / IP:</strong> Registered German Utility Model: Sustainable Material Composite Made from Biodegradable Waste (Utility Model No. 20 2022 106 106 - DPMA)</span>
                  </li>
                  <li className="about-fact-item">
                    <span className="about-fact-bullet">●</span>
                    <span><strong>Awards:</strong> CSIR-SERC First Prize Winner &mdash; Hydroponics from Household Waste</span>
                  </li>
                  <li className="about-fact-item">
                    <span className="about-fact-bullet">●</span>
                    <span><strong>Certifications:</strong> Autodesk Certified in BIM Revit Architecture &amp; Structure</span>
                  </li>
                  <li className="about-fact-item">
                    <span className="about-fact-bullet">●</span>
                    <span><strong>Languages:</strong> English, Hindi, Kannada, Telugu, Spanish (Basic), Italian (Basic)</span>
                  </li>
                </ul>

                <div style={{ marginTop: "24px" }}>
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

        {/* FULL INTERACTIVE RESUME & SOP WIDGET */}
        <section style={{ padding: "20px 0" }}>
          <div className="shell">
            <div className="section-header-centered reveal-on-scroll">
              <span className="section-eyebrow">DETAILED TIMELINE</span>
              <h2 className="section-title">Professional Experience, SOP &amp; Accreditations</h2>
              <p className="section-lead">
                Explore each chapter of my career &mdash; click the tabs below to read my Statement of Purpose (SOP), verified work history, registered German utility model, CSIR awards, certifications, and technical capabilities.
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