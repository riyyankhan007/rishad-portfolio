"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollObserver from "../components/ScrollObserver";

interface DocumentModalData {
  title: string;
  subtitle: string;
  imageSrc: string;
  pdfUrl?: string;
  badge: string;
}

export default function IpAndAwardsPage() {
  const [modalData, setModalData] = useState<DocumentModalData | null>(null);

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
                German IP, Registered Utility Model &amp; CSIR Awards
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
                Bridging materials science, circular economy engineering, and retail architecture. Explore the verified legal registration granted by the German DPMA (Deutsches Patent- und Markenamt) and national research recognition by India&apos;s Council of Scientific and Industrial Research (CSIR-SERC).
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

        {/* 01. REGISTERED GERMAN UTILITY MODEL & THESIS SHOWCASE */}
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
              <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "40px", alignItems: "center" }} className="patent-showcase-grid">
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
                      OFFICIALLY REGISTERED IP
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
                    During my final year of civil engineering, I investigated circular bio-composites derived from agricultural and organic biodegradable waste to engineer a direct replacement for petrochemical single-use plastics and non-recyclable interior boards. Following scientific evaluation, the German DPMA (Deutsches Patent- und Markenamt) officially registered this utility model under No. 20 2022 106 106.
                  </p>

                  {/* SPECS GRID */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
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

                  {/* ACTION BUTTONS (INSPECT CERTIFICATE REMOVED, THESIS VIEW ADDED) */}
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

                    <a
                      href="/projects/ALTERNATIVE SUSTAINABLE MATERIAL DEVELOPED.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill btn-pill-outline"
                      style={{
                        color: "#ffffff",
                        borderColor: "rgba(255,255,255,0.35)",
                        fontSize: "13px",
                        background: "rgba(255,255,255,0.08)",
                      }}
                    >
                      <span>View Project Thesis (41-Page PDF) ↗</span>
                    </a>
                  </div>
                </div>

                {/* DUAL VISUAL SHOWCASE: DPMA CERTIFICATE & PROJECT THESIS */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                      gap: "14px",
                      width: "100%",
                      maxWidth: "380px",
                    }}
                  >
                    {/* DPMA Certificate Preview */}
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
                        aspectRatio: "1 / 1.414",
                        borderRadius: "var(--radius-md)",
                        overflow: "hidden",
                        boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
                        border: "2px solid rgba(255, 255, 255, 0.2)",
                        background: "#ffffff",
                        cursor: "zoom-in",
                        transition: "all 0.25s ease",
                      }}
                      title="Click to view full DPMA certificate"
                    >
                      <Image
                        src="/patent/patent-preview.jpg"
                        alt="DPMA Registration Certificate No. 20 2022 106 106"
                        fill
                        sizes="190px"
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: "8px",
                          left: "8px",
                          right: "8px",
                          background: "rgba(15, 14, 13, 0.85)",
                          backdropFilter: "blur(6px)",
                          color: "#ffffff",
                          padding: "6px 8px",
                          borderRadius: "var(--radius-xs)",
                          fontSize: "10px",
                          fontFamily: "var(--font-mono)",
                          textAlign: "center",
                          fontWeight: 600,
                        }}
                      >
                        DPMA Certificate 🔍
                      </div>
                    </div>

                    {/* Thesis Report Cover Preview */}
                    <div
                      onClick={() =>
                        setModalData({
                          title: "Project Thesis: Alternative Sustainable Material Developed",
                          subtitle: "Final Year B.E. Civil Engineering Project Report · NMIT Bengaluru · Shaikh Muhammad Rishad et al.",
                          imageSrc: "/projects/thesis-cover.jpg",
                          pdfUrl: "/projects/ALTERNATIVE SUSTAINABLE MATERIAL DEVELOPED.pdf",
                          badge: "RESEARCH THESIS & REPORT (41 PAGES)",
                        })
                      }
                      style={{
                        position: "relative",
                        aspectRatio: "1 / 1.414",
                        borderRadius: "var(--radius-md)",
                        overflow: "hidden",
                        boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
                        border: "2px solid rgba(255, 255, 255, 0.2)",
                        background: "#ffffff",
                        cursor: "zoom-in",
                        transition: "all 0.25s ease",
                      }}
                      title="Click to view Project Thesis cover & details"
                    >
                      <Image
                        src="/projects/thesis-cover.jpg"
                        alt="Project Thesis Report Cover — Shaikh Muhammad Rishad"
                        fill
                        sizes="190px"
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: "8px",
                          left: "8px",
                          right: "8px",
                          background: "rgba(15, 14, 13, 0.85)",
                          backdropFilter: "blur(6px)",
                          color: "var(--accent-brass)",
                          padding: "6px 8px",
                          borderRadius: "var(--radius-xs)",
                          fontSize: "10px",
                          fontFamily: "var(--font-mono)",
                          textAlign: "center",
                          fontWeight: 600,
                        }}
                      >
                        Project Thesis 🔍
                      </div>
                    </div>
                  </div>

                  <span style={{ fontSize: "11.5px", color: "var(--accent-brass)", fontFamily: "var(--font-mono)", textAlign: "center" }}>
                    DPMA München · NMIT Department of Civil Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02. CSIR-SERC FIRST PRIZE AWARD SHOWCASE (WITH AWARD CEREMONY PHOTO) */}
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
              <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "40px", alignItems: "center" }} className="patent-showcase-grid">
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
                    I independently developed and presented a space-saving closed-loop hydroponics cultivation system engineered out of recycled household and domestic solid waste. Presenting the working system before research scientists and structural engineers at CSIR-SERC, our team was awarded First Prize in the Student Competition at the Future Entrepreneurs Connect event held on 8th June 2023 at Vigyan Auditorium, Chennai.
                  </p>

                  {/* SPECS GRID */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
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
                          title: "CSIR First Prize Award Ceremony",
                          subtitle: "Shaikh Muhammad Rishad receiving First Prize plaque at Vigyan Auditorium · CSIR-SERC Chennai (June 2023)",
                          imageSrc: "/projects/Award photo.jpg",
                          pdfUrl: "/certifications/csir-award.pdf",
                          badge: "AWARD CEREMONY · VIGYAN AUDITORIUM",
                        })
                      }
                      className="btn-pill btn-pill-outline"
                    >
                      <span>View Award Ceremony Photo 📷</span>
                    </button>
                  </div>
                </div>

                {/* CSIR DUAL VISUAL SHOWCASE: CEREMONY PHOTO + OFFICIAL CERTIFICATE */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                      gap: "14px",
                      width: "100%",
                      maxWidth: "380px",
                    }}
                  >
                    {/* Award Photo: Rishad with plaque at Vigyan Auditorium */}
                    <div
                      onClick={() =>
                        setModalData({
                          title: "CSIR First Prize Award Ceremony",
                          subtitle: "Shaikh Muhammad Rishad holding First Prize plaque at Vigyan Auditorium · CSIR-SERC Chennai",
                          imageSrc: "/projects/Award photo.jpg",
                          pdfUrl: "/certifications/csir-award.pdf",
                          badge: "AWARD CEREMONY · VIGYAN AUDITORIUM",
                        })
                      }
                      style={{
                        position: "relative",
                        aspectRatio: "1 / 1.414",
                        borderRadius: "var(--radius-md)",
                        overflow: "hidden",
                        boxShadow: "var(--shadow-md)",
                        border: "2px solid var(--accent-terracotta)",
                        background: "#ffffff",
                        cursor: "zoom-in",
                        transition: "all 0.25s ease",
                      }}
                      title="Click to enlarge award ceremony photograph"
                    >
                      <Image
                        src="/projects/Award photo.jpg"
                        alt="Muhammad Rishad holding CSIR First Prize plaque at Vigyan Auditorium"
                        fill
                        sizes="190px"
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: "8px",
                          left: "8px",
                          right: "8px",
                          background: "rgba(20, 18, 16, 0.88)",
                          backdropFilter: "blur(6px)",
                          color: "#ffffff",
                          padding: "6px 8px",
                          borderRadius: "var(--radius-xs)",
                          fontSize: "10px",
                          fontFamily: "var(--font-mono)",
                          textAlign: "center",
                          fontWeight: 600,
                        }}
                      >
                        Ceremony Photo 📷
                      </div>
                    </div>

                    {/* Official Certificate */}
                    <div
                      onClick={() =>
                        setModalData({
                          title: "CSIR-SERC First Prize Award Certificate",
                          subtitle: "Future Entrepreneurs Connect · One Week One Lab Campaign · June 2023",
                          imageSrc: "/certifications/csir-award.jpg",
                          pdfUrl: "/certifications/csir-award.pdf",
                          badge: "COUNCIL OF SCIENTIFIC & INDUSTRIAL RESEARCH",
                        })
                      }
                      style={{
                        position: "relative",
                        aspectRatio: "1 / 1.414",
                        borderRadius: "var(--radius-md)",
                        overflow: "hidden",
                        boxShadow: "var(--shadow-md)",
                        border: "1px solid var(--line-subtle)",
                        background: "#ffffff",
                        cursor: "zoom-in",
                        transition: "all 0.25s ease",
                      }}
                      title="Click to enlarge official CSIR certificate"
                    >
                      <Image
                        src="/certifications/csir-award.jpg"
                        alt="CSIR-SERC First Prize Award Certificate"
                        fill
                        sizes="190px"
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: "8px",
                          left: "8px",
                          right: "8px",
                          background: "rgba(255, 255, 255, 0.92)",
                          backdropFilter: "blur(6px)",
                          color: "var(--ink-primary)",
                          padding: "6px 8px",
                          borderRadius: "var(--radius-xs)",
                          fontSize: "10px",
                          fontFamily: "var(--font-mono)",
                          textAlign: "center",
                          fontWeight: 600,
                          border: "1px solid var(--line-subtle)",
                        }}
                      >
                        Certificate 🔍
                      </div>
                    </div>
                  </div>

                  <span style={{ fontSize: "11.5px", color: "var(--accent-terracotta)", fontFamily: "var(--font-mono)", textAlign: "center", fontWeight: 600 }}>
                    CSIR - Structural Engineering Research Centre · Vigyan Auditorium, Chennai
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
              <span className="section-eyebrow">CONTINUOUS TECHNICAL MASTERY</span>
              <h2 className="section-title">Professional Certifications</h2>
              <p className="section-lead">
                Verified accreditations across Autodesk BIM, structural modeling, building envelope glazing, and civil site engineering.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
                marginTop: "40px",
              }}
            >
              {certificates.map((cert) => (
                <div
                  key={cert.title}
                  style={{
                    background: "var(--bg-canvas)",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--line-subtle)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "var(--shadow-sm)",
                    transition: "all 0.3s ease",
                  }}
                  className="reveal-on-scroll"
                >
                  <div
                    onClick={() =>
                      setModalData({
                        title: cert.title,
                        subtitle: `${cert.issuer} · ${cert.role}`,
                        imageSrc: cert.img,
                        pdfUrl: cert.pdf,
                        badge: cert.badge,
                      })
                    }
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16 / 10",
                      background: "#f0ece1",
                      cursor: "zoom-in",
                      overflow: "hidden",
                      borderBottom: "1px solid var(--line-subtle)",
                    }}
                    title="Click to enlarge certificate"
                  >
                    <Image
                      src={cert.img}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: "rgba(25, 23, 21, 0.78)",
                        backdropFilter: "blur(6px)",
                        color: "#fff",
                        padding: "3px 10px",
                        borderRadius: "var(--radius-pill)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "9.5px",
                        letterSpacing: "0.08em",
                        fontWeight: 600,
                      }}
                    >
                      {cert.badge}
                    </div>
                  </div>

                  <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                    <div>
                      <h3 style={{ fontSize: "16px", fontWeight: 600, color: "var(--ink-primary)", marginBottom: "4px" }}>
                        {cert.title}
                      </h3>
                      <div style={{ fontSize: "12.5px", color: "var(--accent-terracotta)", fontWeight: 500, marginBottom: "8px" }}>
                        {cert.issuer}
                      </div>
                      <p style={{ fontSize: "12px", color: "var(--ink-secondary)", lineHeight: 1.5, margin: 0 }}>
                        {cert.role}
                      </p>
                    </div>

                    <div style={{ marginTop: "18px", paddingTop: "14px", borderTop: "1px solid var(--line-subtle)", display: "flex", gap: "10px" }}>
                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill btn-pill-outline"
                        style={{ fontSize: "11px", padding: "8px 14px", flex: 1, textAlign: "center", justifyContent: "center" }}
                      >
                        <span>Open PDF ↗</span>
                      </a>
                      <button
                        onClick={() =>
                          setModalData({
                            title: cert.title,
                            subtitle: `${cert.issuer} · ${cert.role}`,
                            imageSrc: cert.img,
                            pdfUrl: cert.pdf,
                            badge: cert.badge,
                          })
                        }
                        className="btn-pill btn-pill-outline"
                        style={{ fontSize: "11px", padding: "8px 14px" }}
                      >
                        <span>Inspect 🔍</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA TO SELECTED WORK */}
        <section style={{ padding: "20px 0 60px" }}>
          <div className="shell">
            <div
              style={{
                background: "var(--bg-canvas)",
                borderRadius: "var(--radius-xl)",
                padding: "clamp(32px, 5vw, 60px)",
                textAlign: "center",
                border: "1px solid var(--line-subtle)",
              }}
              className="reveal-on-scroll"
            >
              <span className="section-eyebrow">RESEARCH MEETS BUILT REALITY</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 400, marginBottom: "16px" }}>
                From Material Science to Flagship Retail Architecture
              </h2>
              <p style={{ maxWidth: "680px", margin: "0 auto 28px", color: "var(--ink-secondary)", fontSize: "15px", lineHeight: 1.65 }}>
                Explore how the same commitment to precision, material integrity, and sustainability powers luxury retail environments and high-profile commercial fit-outs.
              </p>
              <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/projects" className="btn-pill btn-pill-primary">
                  <span>Explore Selected Work ↗</span>
                </Link>
                <Link href="/about" className="btn-pill btn-pill-outline">
                  <span>Read Full Bio &amp; Story</span>
                </Link>
                <Link href="/contact" className="btn-pill btn-pill-outline">
                  <span>Get in Touch ↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FULL-SCREEN DOCUMENT INSPECTOR MODAL */}
      {modalData && (
        <div
          onClick={() => setModalData(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(18, 16, 14, 0.88)",
            backdropFilter: "blur(12px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeIn 0.25s ease-out",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#ffffff",
              borderRadius: "var(--radius-xl)",
              maxWidth: "860px",
              width: "100%",
              maxHeight: "92vh",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: "20px 24px",
                borderBottom: "1px solid var(--line-subtle)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "var(--bg-canvas)",
              }}
            >
              <div>
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--accent-terracotta)",
                    background: "var(--accent-terracotta-soft)",
                    padding: "3px 8px",
                    borderRadius: "var(--radius-pill)",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  {modalData.badge}
                </span>
                <h3 style={{ fontSize: "17px", fontWeight: 600, color: "var(--ink-primary)", margin: 0 }}>
                  {modalData.title}
                </h3>
                <p style={{ fontSize: "12px", color: "var(--ink-secondary)", margin: "3px 0 0" }}>
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
            <div style={{ padding: "24px", display: "flex", justifyContent: "center", background: "#f5f3ef", overflowY: "auto" }}>
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
                {modalData.pdfUrl && (
                  <a
                    href={modalData.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-primary"
                    style={{ fontSize: "12px" }}
                  >
                    <span>Open Full PDF Document ↗</span>
                  </a>
                )}
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
