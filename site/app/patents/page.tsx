"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollObserver from "../components/ScrollObserver";

interface CertificateModalData {
  title: string;
  subtitle: string;
  imageSrc: string;
  pdfUrl: string;
  badge: string;
}

export default function PatentsPage() {
  const [modalData, setModalData] = useState<CertificateModalData | null>(null);

  const certificates = [
    {
      title: "Autodesk BIM Revit Architecture",
      issuer: "Autodesk Authorized Training Center",
      role: "BIM Modeling & Spatial Coordination",
      pdf: "/certifications/bim-revit-architecture.pdf",
      img: "/certifications/bim-revit-architecture.jpg",
      badge: "CAD / BIM CERTIFIED",
    },
    {
      title: "Autodesk Revit Structure",
      issuer: "Autodesk Authorized Training Center",
      role: "Structural Detailing & Load Coordination",
      pdf: "/certifications/revit-structure.pdf",
      img: "/certifications/revit-structure.jpg",
      badge: "STRUCTURAL BIM",
    },
    {
      title: "Glass in Buildings: Design & Application",
      issuer: "Saint-Gobain / CEPT University",
      role: "Architectural Glazing & Daylighting",
      pdf: "/certifications/glass-in-buildings.pdf",
      img: "/certifications/glass-in-buildings.jpg",
      badge: "MATERIAL SCIENCE",
    },
    {
      title: "Geographic Information Systems (GIS)",
      issuer: "Coursera / UC Davis",
      role: "Spatial Mapping & Geospatial Analysis",
      pdf: "/certifications/coursera-gis.pdf",
      img: "/certifications/coursera-gis.jpg",
      badge: "SPATIAL DATA",
    },
    {
      title: "Civil Engineering Site Execution",
      issuer: "Site Engineer Internship Certification",
      role: "Commercial Fit-Outs & Site Supervision",
      pdf: "/certifications/civil-engineering-internship.pdf",
      img: "/certifications/civil-engineering-internship.jpg",
      badge: "SITE EXECUTION",
    },
  ];

  return (
    <>
      <ScrollObserver />
      <Navbar />

      <main style={{ paddingBottom: "100px" }}>
        {/* HERO SECTION */}
        <section style={{ paddingTop: "clamp(50px, 7vw, 90px)", paddingBottom: "40px" }}>
          <div className="shell">
            <div style={{ maxWidth: "880px" }}>
              <div className="hero-eyebrow reveal-on-scroll">
                <span>●</span>
                <span>INTELLECTUAL PROPERTY &amp; NATIONAL HONORS</span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(36px, 5.2vw, 68px)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  marginBottom: "24px",
                }}
                className="reveal-on-scroll reveal-delay-1"
              >
                Patents, Registered Utility Model &amp; CSIR Awards
              </h1>

              <p
                style={{
                  fontSize: "clamp(17px, 1.35vw, 21px)",
                  lineHeight: 1.65,
                  color: "var(--ink-secondary)",
                  marginBottom: "28px",
                }}
                className="reveal-on-scroll reveal-delay-2"
              >
                Bridging materials science, circular economy engineering, and retail architecture. Explore the verified legal registration granted by the German Patent and Trade Mark Office (DPMA) and national research recognition by India&apos;s Council of Scientific and Industrial Research (CSIR-SERC).
              </p>

              {/* STAT PILLS */}
              <div
                style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
                className="reveal-on-scroll reveal-delay-3"
              >
                <span className="patent-badge-item" style={{ background: "rgba(196, 98, 59, 0.12)", color: "var(--accent-terracotta)", borderColor: "rgba(196, 98, 59, 0.25)" }}>
                  ● Registered German Utility Model · DPMA
                </span>
                <span className="patent-badge-item" style={{ background: "rgba(196, 98, 59, 0.12)", color: "var(--accent-terracotta)", borderColor: "rgba(196, 98, 59, 0.25)" }}>
                  ● CSIR-SERC First Prize Award
                </span>
                <span className="patent-badge-item" style={{ background: "rgba(0,0,0,0.06)", color: "var(--ink-primary)" }}>
                  IPC Classification: C08L 97/00
                </span>
                <span className="patent-badge-item" style={{ background: "rgba(0,0,0,0.06)", color: "var(--ink-primary)" }}>
                  G20 Presidency National Initiative
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 01. REGISTERED GERMAN UTILITY MODEL SHOWCASE */}
        <section style={{ padding: "30px 0 60px" }}>
          <div className="shell">
            <div
              className="reveal-on-scroll"
              style={{
                background: "linear-gradient(135deg, #181614 0%, #29241f 100%)",
                borderRadius: "var(--radius-xl)",
                padding: "clamp(28px, 4.5vw, 56px)",
                color: "#ffffff",
                boxShadow: "var(--shadow-lg)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "40px", alignItems: "center" }} className="patent-showcase-grid">
                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent-brass)",
                        fontSize: "11px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      BUNDESREPUBLIK DEUTSCHLAND · DPMA
                    </span>
                    <span
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        color: "#ffffff",
                        padding: "3px 10px",
                        borderRadius: "var(--radius-pill)",
                        fontSize: "10.5px",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      OFFICIALLY REGISTERED
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(26px, 3.2vw, 42px)",
                      fontWeight: 400,
                      lineHeight: 1.15,
                      marginBottom: "16px",
                      color: "#ffffff",
                    }}
                  >
                    Registered German Utility Model: Sustainable Material Composite Made from Biodegradable Waste
                  </h2>

                  <p
                    style={{
                      fontStyle: "italic",
                      color: "#c2bba8",
                      fontSize: "14px",
                      marginBottom: "20px",
                      lineHeight: 1.6,
                      borderLeft: "2px solid var(--accent-brass)",
                      paddingLeft: "14px",
                    }}
                  >
                    Urkunde über die Eintragung des Gebrauchsmusters Nr. 20 2022 106 106 — DPMA:
                    <br />
                    <strong>„Nachhaltige Materialzusammensetzung aus biologisch abbaubaren Abfällen“</strong>
                  </p>

                  <p style={{ fontSize: "15px", color: "#e3ded7", lineHeight: 1.7, marginBottom: "26px" }}>
                    During my final year of civil engineering, I investigated circular bio-composites derived from agricultural and organic biodegradable waste to engineer a direct replacement for petrochemical single-use plastics and non-recyclable interior boards. Following scientific evaluation, the German Patent and Trade Mark Office (Deutsches Patent- und Markenamt) officially registered this utility model under No. 20 2022 106 106.
                  </p>

                  {/* SPECS GRID */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "14px",
                      padding: "20px",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      marginBottom: "28px",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "#a8a196", textTransform: "uppercase" }}>
                        Utility Model Number
                      </div>
                      <div style={{ fontSize: "13.5px", fontWeight: 600, color: "var(--accent-brass)", marginTop: "3px" }}>
                        20 2022 106 106 - DPMA
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "#a8a196", textTransform: "uppercase" }}>
                        IPC Classification
                      </div>
                      <div style={{ fontSize: "13.5px", fontWeight: 600, color: "#ffffff", marginTop: "3px" }}>
                        C08L 97/00 (Lignin Bio-composites)
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "#a8a196", textTransform: "uppercase" }}>
                        Issuing Authority
                      </div>
                      <div style={{ fontSize: "13.5px", fontWeight: 600, color: "#ffffff", marginTop: "3px" }}>
                        DPMA München, Germany
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "#a8a196", textTransform: "uppercase" }}>
                        Signatory
                      </div>
                      <div style={{ fontSize: "13.5px", fontWeight: 600, color: "#ffffff", marginTop: "3px" }}>
                        Cornelia Rudloff-Schäffer (President)
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "#a8a196", textTransform: "uppercase" }}>
                        Date of Registration
                      </div>
                      <div style={{ fontSize: "13.5px", fontWeight: 600, color: "#ffffff", marginTop: "3px" }}>
                        11.11.2022 (Filing: 31.10.2022)
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "#a8a196", textTransform: "uppercase" }}>
                        Co-Holders &amp; Institution
                      </div>
                      <div style={{ fontSize: "12.5px", fontWeight: 500, color: "#ffffff", marginTop: "3px" }}>
                        Shaikh Muhammad Rishad et al. / NMIT
                      </div>
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
                    <a
                      href="/patent/german-patent-G11861DE.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill"
                      style={{
                        background: "var(--accent-brass)",
                        color: "#191715",
                        fontWeight: 600,
                        fontSize: "13px",
                      }}
                    >
                      <span>Open Official DPMA Certificate (PDF) ↗</span>
                    </a>
                    <button
                      onClick={() =>
                        setModalData({
                          title: "Registered German Utility Model (DPMA)",
                          subtitle: "Urkunde Nr. 20 2022 106 106: Nachhaltige Materialzusammensetzung aus biologisch abbaubaren Abfällen",
                          imageSrc: "/patent/patent-preview.jpg",
                          pdfUrl: "/patent/german-patent-G11861DE.pdf",
                          badge: "OFFICIAL REGISTRATION CERTIFICATE",
                        })
                      }
                      className="btn-pill btn-pill-outline"
                      style={{
                        color: "#ffffff",
                        borderColor: "rgba(255,255,255,0.3)",
                        fontSize: "13px",
                      }}
                    >
                      <span>Inspect Certificate High-Res 🔍</span>
                    </button>
                  </div>
                </div>

                {/* Certificate Visual Card */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
                  <div
                    onClick={() =>
                      setModalData({
                        title: "Registered German Utility Model (DPMA)",
                        subtitle: "Urkunde Nr. 20 2022 106 106: Nachhaltige Materialzusammensetzung aus biologisch abbaubaren Abfällen",
                        imageSrc: "/patent/patent-preview.jpg",
                        pdfUrl: "/patent/german-patent-G11861DE.pdf",
                        badge: "OFFICIAL REGISTRATION CERTIFICATE",
                      })
                    }
                    style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: "320px",
                      aspectRatio: "1 / 1.414",
                      borderRadius: "var(--radius-lg)",
                      overflow: "hidden",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
                      border: "2px solid rgba(255, 255, 255, 0.2)",
                      background: "#ffffff",
                      cursor: "zoom-in",
                      transition: "transform 0.3s ease",
                    }}
                    title="Click to view full certificate"
                  >
                    <Image
                      src="/patent/patent-preview.jpg"
                      alt="Urkunde über die Eintragung des Gebrauchsmusters Nr. 20 2022 106 106 - DPMA"
                      fill
                      sizes="320px"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "12px",
                        left: "12px",
                        right: "12px",
                        background: "rgba(15, 14, 13, 0.85)",
                        backdropFilter: "blur(8px)",
                        color: "#ffffff",
                        padding: "8px 12px",
                        borderRadius: "var(--radius-md)",
                        fontSize: "11px",
                        fontFamily: "var(--font-mono)",
                        textAlign: "center",
                      }}
                    >
                      Click to Enlarge Certificate 🔍
                    </div>
                  </div>
                  <span style={{ fontSize: "11.5px", color: "var(--accent-brass)", fontFamily: "var(--font-mono)", textAlign: "center" }}>
                    Deutsches Patent- und Markenamt · München
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02. CSIR-SERC FIRST PRIZE AWARD SHOWCASE */}
        <section style={{ padding: "30px 0 60px" }}>
          <div className="shell">
            <div
              className="reveal-on-scroll"
              style={{
                background: "var(--bg-surface)",
                borderRadius: "var(--radius-xl)",
                padding: "clamp(28px, 4.5vw, 56px)",
                border: "1px solid var(--line-subtle)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "40px", alignItems: "center" }} className="patent-showcase-grid">
                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent-terracotta)",
                        fontSize: "11px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      CSIR-SERC · MINISTRY OF SCIENCE &amp; TECHNOLOGY, GOVT. OF INDIA
                    </span>
                    <span
                      style={{
                        background: "rgba(196, 98, 59, 0.12)",
                        color: "var(--accent-terracotta)",
                        padding: "3px 10px",
                        borderRadius: "var(--radius-pill)",
                        fontSize: "10.5px",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600,
                      }}
                    >
                      FIRST PRIZE WINNER
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(26px, 3.2vw, 42px)",
                      fontWeight: 500,
                      lineHeight: 1.15,
                      marginBottom: "16px",
                      color: "var(--ink-primary)",
                    }}
                  >
                    CSIR-SERC First Prize Award: Future Entrepreneurs Connect
                  </h2>

                  <p
                    style={{
                      fontSize: "14.5px",
                      color: "var(--ink-secondary)",
                      fontStyle: "italic",
                      borderLeft: "2px solid var(--accent-terracotta)",
                      paddingLeft: "14px",
                      marginBottom: "20px",
                      lineHeight: 1.6,
                    }}
                  >
                    Awarded by Council of Scientific &amp; Industrial Research &ndash; Structural Engineering Research Centre (CSIR-SERC) Chennai
                    during the One Week One Lab Campaign conducted under India&apos;s G20 Presidency Initiative.
                  </p>

                  <p style={{ fontSize: "15px", color: "var(--ink-secondary)", lineHeight: 1.7, marginBottom: "26px" }}>
                    I independently developed and presented a space-saving closed-loop hydroponics cultivation system engineered out of recycled household and domestic solid waste. Presenting the working system before research scientists and structural engineers at CSIR-SERC, our team was awarded First Prize in the Student Competition at the Future Entrepreneurs Connect event held on 8th June 2023.
                  </p>

                  {/* SPECS GRID */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "14px",
                      padding: "20px",
                      background: "var(--bg-canvas)",
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid var(--line-subtle)",
                      marginBottom: "28px",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--ink-muted)", textTransform: "uppercase" }}>
                        Recognition
                      </div>
                      <div style={{ fontSize: "13.5px", fontWeight: 600, color: "var(--accent-terracotta)", marginTop: "3px" }}>
                        First Prize Award
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--ink-muted)", textTransform: "uppercase" }}>
                        Issuing Laboratory
                      </div>
                      <div style={{ fontSize: "13.5px", fontWeight: 600, color: "var(--ink-primary)", marginTop: "3px" }}>
                        CSIR-SERC Chennai, India
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--ink-muted)", textTransform: "uppercase" }}>
                        National Initiative
                      </div>
                      <div style={{ fontSize: "13.5px", fontWeight: 600, color: "var(--ink-primary)", marginTop: "3px" }}>
                        One Week One Lab Campaign (G20)
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--ink-muted)", textTransform: "uppercase" }}>
                        Date of Award
                      </div>
                      <div style={{ fontSize: "13.5px", fontWeight: 600, color: "var(--ink-primary)", marginTop: "3px" }}>
                        8th June 2023
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--ink-muted)", textTransform: "uppercase" }}>
                        Authorized Signatories
                      </div>
                      <div style={{ fontSize: "13.5px", fontWeight: 600, color: "var(--ink-primary)", marginTop: "3px" }}>
                        Dr. N. Anandavalli (Director) &amp; K. Sathish Kumar
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--ink-muted)", textTransform: "uppercase" }}>
                        Team &amp; Mentor
                      </div>
                      <div style={{ fontSize: "12.5px", fontWeight: 500, color: "var(--ink-primary)", marginTop: "3px" }}>
                        Shaikh Muhammad Rishad et al. / Dr. Megha Kulkarni
                      </div>
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
                    <a
                      href="/certifications/csir-award.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill btn-pill-primary"
                    >
                      <span>Open Official CSIR Certificate (PDF) ↗</span>
                    </a>
                    <button
                      onClick={() =>
                        setModalData({
                          title: "CSIR-SERC First Prize Award",
                          subtitle: "Future Entrepreneurs Connect · One Week One Lab Campaign · June 2023",
                          imageSrc: "/certifications/csir-award.jpg",
                          pdfUrl: "/certifications/csir-award.pdf",
                          badge: "COUNCIL OF SCIENTIFIC & INDUSTRIAL RESEARCH",
                        })
                      }
                      className="btn-pill btn-pill-outline"
                    >
                      <span>Inspect Certificate High-Res 🔍</span>
                    </button>
                  </div>
                </div>

                {/* Certificate Visual Card */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
                  <div
                    onClick={() =>
                      setModalData({
                        title: "CSIR-SERC First Prize Award",
                        subtitle: "Future Entrepreneurs Connect · One Week One Lab Campaign · June 2023",
                        imageSrc: "/certifications/csir-award.jpg",
                        pdfUrl: "/certifications/csir-award.pdf",
                        badge: "COUNCIL OF SCIENTIFIC & INDUSTRIAL RESEARCH",
                      })
                    }
                    style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: "320px",
                      aspectRatio: "1 / 1.414",
                      borderRadius: "var(--radius-lg)",
                      overflow: "hidden",
                      boxShadow: "var(--shadow-lg)",
                      border: "1px solid var(--line-subtle)",
                      background: "#ffffff",
                      cursor: "zoom-in",
                      transition: "transform 0.3s ease",
                    }}
                    title="Click to view full certificate"
                  >
                    <Image
                      src="/certifications/csir-award.jpg"
                      alt="CSIR-SERC First Prize Award Certificate"
                      fill
                      sizes="320px"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "12px",
                        left: "12px",
                        right: "12px",
                        background: "rgba(255, 255, 255, 0.92)",
                        backdropFilter: "blur(8px)",
                        color: "var(--ink-primary)",
                        padding: "8px 12px",
                        borderRadius: "var(--radius-md)",
                        fontSize: "11px",
                        fontFamily: "var(--font-mono)",
                        textAlign: "center",
                        fontWeight: 600,
                        border: "1px solid var(--line-subtle)",
                      }}
                    >
                      Click to Enlarge Certificate 🔍
                    </div>
                  </div>
                  <span style={{ fontSize: "11.5px", color: "var(--accent-terracotta)", fontFamily: "var(--font-mono)", textAlign: "center", fontWeight: 600 }}>
                    CSIR - Structural Engineering Research Centre · Chennai
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. PROFESSIONAL TECHNICAL CERTIFICATIONS GRID */}
        <section style={{ padding: "30px 0 60px" }}>
          <div className="shell">
            <div className="section-header-centered reveal-on-scroll">
              <span className="section-eyebrow">PROFESSIONAL ACCREDITATIONS</span>
              <h2 className="section-title">Technical Certifications &amp; Engineering Credentials</h2>
              <p className="section-lead">
                Verified industry certifications covering Autodesk BIM Revit Architecture, Structural Detailing, Saint-Gobain Glass Design, and Spatial Data Analytics.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "24px",
                marginTop: "40px",
              }}
              className="reveal-on-scroll reveal-delay-1"
            >
              {certificates.map((cert) => (
                <div
                  key={cert.title}
                  style={{
                    background: "var(--bg-surface)",
                    borderRadius: "var(--radius-lg)",
                    padding: "20px",
                    border: "1px solid var(--line-subtle)",
                    boxShadow: "var(--shadow-sm)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      onClick={() =>
                        setModalData({
                          title: cert.title,
                          subtitle: cert.issuer,
                          imageSrc: cert.img,
                          pdfUrl: cert.pdf,
                          badge: cert.badge,
                        })
                      }
                      style={{
                        position: "relative",
                        aspectRatio: "1.41 / 1",
                        borderRadius: "var(--radius-md)",
                        overflow: "hidden",
                        background: "var(--bg-subtle)",
                        marginBottom: "16px",
                        border: "1px solid var(--line-subtle)",
                        cursor: "zoom-in",
                      }}
                      title="Click to enlarge"
                    >
                      <Image
                        src={cert.img}
                        alt={cert.title}
                        fill
                        sizes="300px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <span
                      style={{
                        fontSize: "10px",
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent-terracotta)",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                      }}
                    >
                      {cert.badge}
                    </span>
                    <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "6px 0 4px", lineHeight: 1.3 }}>
                      {cert.title}
                    </h3>
                    <p style={{ fontSize: "12px", color: "var(--ink-muted)", marginBottom: "4px" }}>
                      {cert.issuer}
                    </p>
                    <p style={{ fontSize: "13px", color: "var(--ink-secondary)", lineHeight: 1.5 }}>
                      {cert.role}
                    </p>
                  </div>

                  <div style={{ marginTop: "16px", display: "flex", gap: "10px" }}>
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill btn-pill-outline"
                      style={{ fontSize: "12px", padding: "8px 14px", width: "100%", justifyContent: "center" }}
                    >
                      <span>View PDF Certificate ↗</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04. DUAL-LENS PHILOSOPHY CALLOUT */}
        <section style={{ padding: "30px 0 60px" }}>
          <div className="shell">
            <div
              style={{
                background: "var(--bg-subtle)",
                borderRadius: "var(--radius-xl)",
                padding: "clamp(30px, 5vw, 60px)",
                border: "1px solid var(--line-subtle)",
                textAlign: "center",
                maxWidth: "920px",
                margin: "0 auto",
              }}
              className="reveal-on-scroll"
            >
              <span className="section-eyebrow">CIRCULAR DESIGN PHILOSOPHY</span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(26px, 3.5vw, 42px)",
                  fontWeight: 400,
                  marginBottom: "18px",
                  lineHeight: 1.2,
                }}
              >
                How Material Research Informs Retail Execution
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.75,
                  color: "var(--ink-secondary)",
                  maxWidth: "760px",
                  margin: "0 auto 30px",
                }}
              >
                In retail design, stores often undergo rapid renovations every few years, generating enormous construction and plastic waste. My background in developing a registered German utility model for biodegradable waste composites and designing hydroponic closed loops drives my approach: engineering spaces that are durable, modular, buildable down to the millimeter, and conscious of their long-term material lifecycle.
              </p>

              <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/projects" className="btn-pill btn-pill-primary">
                  <span>Explore Retail Projects &amp; Drawing Sets ↗</span>
                </Link>
                <Link href="/about" className="btn-pill btn-pill-outline">
                  <span>Read Statement of Purpose (SOP) →</span>
                </Link>
                <Link href="/contact" className="btn-pill btn-pill-outline">
                  <span>Start a Discussion ↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FULL-RESOLUTION CERTIFICATE ZOOM MODAL */}
      {modalData && (
        <div
          onClick={() => setModalData(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(15, 14, 13, 0.88)",
            backdropFilter: "blur(12px)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeIn 0.25s ease both",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "var(--bg-surface)",
              borderRadius: "var(--radius-xl)",
              maxWidth: "850px",
              width: "100%",
              maxHeight: "92vh",
              overflowY: "auto",
              boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
              border: "1px solid var(--line-subtle)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 24px",
                borderBottom: "1px solid var(--line-subtle)",
                position: "sticky",
                top: 0,
                background: "var(--bg-surface)",
                zIndex: 2,
              }}
            >
              <div>
                <span style={{ fontSize: "10.5px", fontFamily: "var(--font-mono)", color: "var(--accent-terracotta)", fontWeight: 600 }}>
                  {modalData.badge}
                </span>
                <h3 style={{ fontSize: "18px", fontWeight: 600, margin: "2px 0 0" }}>
                  {modalData.title}
                </h3>
                <p style={{ fontSize: "12px", color: "var(--ink-secondary)", margin: 0 }}>
                  {modalData.subtitle}
                </p>
              </div>
              <button
                onClick={() => setModalData(null)}
                style={{
                  background: "var(--bg-subtle)",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  fontSize: "18px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--ink-primary)",
                }}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Image Content */}
            <div style={{ padding: "24px", display: "flex", justifyContent: "center", background: "#f5f3ef" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "600px",
                  aspectRatio: "1 / 1.414",
                  boxShadow: "var(--shadow-lg)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  background: "#ffffff",
                }}
              >
                <Image
                  src={modalData.imageSrc}
                  alt={modalData.title}
                  fill
                  sizes="600px"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div
              style={{
                padding: "16px 24px",
                borderTop: "1px solid var(--line-subtle)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
                background: "var(--bg-surface)",
              }}
            >
              <span style={{ fontSize: "12px", color: "var(--ink-muted)", fontFamily: "var(--font-mono)" }}>
                Verified Official Document
              </span>
              <div style={{ display: "flex", gap: "12px" }}>
                <a
                  href={modalData.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-primary"
                  style={{ fontSize: "12px" }}
                >
                  <span>Open Full PDF Document ↗</span>
                </a>
                <button
                  onClick={() => setModalData(null)}
                  className="btn-pill btn-pill-outline"
                  style={{ fontSize: "12px" }}
                >
                  <span>Close Window</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
