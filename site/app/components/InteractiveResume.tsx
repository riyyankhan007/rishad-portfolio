"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  badge: string;
  credentialId?: string;
  description: string;
  image: string;
  pdf: string;
}

const certifications: CertificationItem[] = [
  {
    id: "bim-revit-arch",
    title: "BIM Revit Architecture",
    issuer: "Autodesk Authorized Training Center (ATC)",
    badge: "AUTODESK ATC CERTIFIED",
    credentialId: "AP0918097428645239788",
    description: "Parametric 3D architectural modeling, family creation, detailed sectional documentation, and coordinated BIM schedules.",
    image: "/certifications/bim-revit-architecture.jpg",
    pdf: "/certifications/bim-revit-architecture.pdf",
  },
  {
    id: "revit-struct",
    title: "Revit Structure",
    issuer: "Autodesk Authorized Training Center (ATC)",
    badge: "AUTODESK ATC CERTIFIED",
    credentialId: "AP0918097428655239788",
    description: "Structural modeling, foundation detailing, reinforced concrete framing, and structural analytical model coordination.",
    image: "/certifications/revit-structure.jpg",
    pdf: "/certifications/revit-structure.pdf",
  },
  {
    id: "csir-winner",
    title: "CSIR Winner — Future Entrepreneurs Connect",
    issuer: "Council of Scientific and Industrial Research",
    badge: "NATIONAL AWARD WINNER",
    description: "Honored for designing an eco-friendly closed-loop hydroponics cultivation system engineered entirely from recycled household waste.",
    image: "/certifications/csir-award.jpg",
    pdf: "/certifications/csir-award.pdf",
  },
  {
    id: "coursera-gis",
    title: "GIS Data Acquisition & Map Design",
    issuer: "University of Toronto (via Coursera)",
    badge: "UNIVERSITY OF TORONTO",
    credentialId: "coursera.org/verify/89JW27F4V778",
    description: "Geographic information systems, cartographic visualization, coordinate systems, and spatial data modeling.",
    image: "/certifications/coursera-gis.jpg",
    pdf: "/certifications/coursera-gis.pdf",
  },
  {
    id: "glass-buildings",
    title: "Glass in Buildings: Design & Applications",
    issuer: "NPTEL / Architectural Faculty",
    badge: "ADVANCED ARCHITECTURAL MATERIALS",
    description: "Architectural glass selection, acoustic performance, thermal U-values, structural glazing systems, and daylighting standards.",
    image: "/certifications/glass-in-buildings.jpg",
    pdf: "/certifications/glass-in-buildings.pdf",
  },
  {
    id: "civil-internship",
    title: "Civil Engineering Field Internship",
    issuer: "PES Structural & Infrastructure Division",
    badge: "SITE EXECUTION & QA/QC",
    credentialId: "PES/021/2022-23",
    description: "On-site quality supervision, structural load inspections, material quality verification, and construction milestone compliance.",
    image: "/certifications/civil-engineering-internship.jpg",
    pdf: "/certifications/civil-engineering-internship.pdf",
  },
];

export default function InteractiveResume() {
  const [activeTab, setActiveTab] = useState<"sop" | "experience" | "patents" | "certifications" | "education" | "skills">("sop");

  return (
    <div className="resume-widget">
      <div className="resume-tabs-nav">
        <button
          className={`resume-tab-btn ${activeTab === "sop" ? "active" : ""}`}
          onClick={() => setActiveTab("sop")}
        >
          Statement of Purpose (SOP)
        </button>
        <button
          className={`resume-tab-btn ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          My Experience
        </button>
        <button
          className={`resume-tab-btn ${activeTab === "patents" ? "active" : ""}`}
          onClick={() => setActiveTab("patents")}
        >
          IP &amp; CSIR Awards
        </button>
        <button
          className={`resume-tab-btn ${activeTab === "certifications" ? "active" : ""}`}
          onClick={() => setActiveTab("certifications")}
        >
          Certifications &amp; BIM
        </button>
        <button
          className={`resume-tab-btn ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          Education &amp; Background
        </button>
        <button
          className={`resume-tab-btn ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => setActiveTab("skills")}
        >
          Tools &amp; Capabilities
        </button>
      </div>

      {/* TAB 1: STATEMENT OF PURPOSE (SOP) */}
      {activeTab === "sop" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              background: "var(--bg-surface)",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(24px, 4vw, 42px)",
              border: "1px solid var(--line-subtle)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
              <div>
                <span className="section-eyebrow">PROFESSIONAL MANIFESTO</span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px, 3.2vw, 34px)", fontWeight: 500, lineHeight: 1.2, marginTop: "4px" }}>
                  Statement of Purpose
                </h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "11.5px", color: "var(--accent-terracotta)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "6px" }}>
                  Muhammad Rishad &bull; Civil Engineering and Retail Designer
                </p>
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <span className="patent-badge-item">Civil Engineering &amp; Retail Design</span>
                <span className="patent-badge-item">German Utility Model Holder · DPMA</span>
                <span className="patent-badge-item">CSIR First Prize Winner</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "15px", lineHeight: 1.75, color: "var(--ink-secondary)" }}>
              {/* OFFICIAL RESUME SUMMARY */}
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(199, 91, 57, 0.08) 0%, rgba(206, 155, 62, 0.08) 100%)",
                  border: "1px solid rgba(199, 91, 57, 0.25)",
                  borderRadius: "var(--radius-lg)",
                  padding: "20px 24px",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontFamily: "var(--font-mono)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--accent-terracotta)",
                    fontWeight: 600,
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Executive Summary &bull; Official Resume Profile
                </span>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "var(--ink-primary)",
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  &ldquo;I am a Civil Engineer and Retail Designer who operates at the absolute intersection of engineering, design, and intellectual innovation. Based in Bangalore, I have spent the last 2.5+ years bringing spaces to life for marquee brands, managing the entire pipeline across space planning, layout development, 3D visualisation, BOQ preparation, and hands-on site QC and execution. More than an engineer or designer, I am an expansive, lateral thinker driven by intense intellectual curiosity. Validated by a Council of Scientific and Industrial Research (CSIR) award and a Registered German Utility Model (DPMA).&rdquo;
                </p>
              </div>

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
                However, my interest in sustainability grew naturally alongside this work. During my final year of university, I chose to investigate a bio-based alternative material to replace single-use plastics in construction, even though it was completely outside my curriculum. This research eventually led to a Registered German Utility Model for a Sustainable Material Composite Made from Biodegradable Waste (Utility Model No. 20 2022 106 106 - DPMA) officially registered by the German DPMA (Deutsches Patent- und Markenamt). Following that, I independently built a space-saving hydroponic system that used household waste to grow crops. Presenting this to scientists at the Council of Scientific and Industrial Research &ndash; Structural Engineering Research Centre (CSIR-SERC) during the Future Entrepreneurs Connect event&mdash;part of India&apos;s G20 Presidency initiative earned the project first-place recognition. These projects were selfless attempts driven purely by a desire to find solutions for the environment and society, rather than just fulfilling a curriculum requirement. Working directly on sites and in design studios has shown me that sustainability cannot just be a technical afterthought or a checklist item; it has to be built into the very way buildings are planned, designed, and lived in.
              </p>

              <div style={{ paddingTop: "10px", borderTop: "1px solid var(--line-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "14px" }}>
                <div>
                  <strong style={{ display: "block", color: "var(--ink-primary)", fontSize: "14px" }}>Muhammad Rishad</strong>
                  <span style={{ fontSize: "12px", color: "var(--ink-muted)" }}>Bangalore, Karnataka, India &bull; Available Nationwide</span>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href="/resume/Muhammad_Rishad_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-primary"
                    download
                  >
                    <span>Download Official Resume PDF</span>
                    <span>↓</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MY EXPERIENCE */}
      {activeTab === "experience" && (
        <div className="timeline-list">
          <div className="timeline-entry">
            <div className="timeline-meta">
              <div className="timeline-period">OCT 2025 — PRESENT</div>
              <div className="timeline-company">DO MORE DESIGN PVT LTD</div>
              <div style={{ fontSize: "11px", color: "var(--accent-terracotta)", marginTop: "4px" }}>
                Bangalore, India
              </div>
            </div>
            <div>
              <h3 className="timeline-role">Retail Designer</h3>
              <p className="timeline-description">
                &ldquo;Operating across space planning, layout development, 3D visualisation, BOQ preparation, and hands-on site QC and execution for marquee brands.&rdquo;
              </p>
              <ul className="timeline-bullets">
                <li className="timeline-bullet-item">
                  Developed and adapted retail/interior designs from brand language into 2D layouts and 3D models for <strong>Aditya Birla Group brands</strong>, <strong>VOX</strong>, <strong>Sureena Chowdhri</strong>, <strong>The Bear House</strong>, <strong>Sleepwell</strong> &amp; <strong>Furlenco</strong>.
                </li>
                <li className="timeline-bullet-item">
                  Produced GFC/construction drawings, façade studies and design documentation using <strong>AutoCAD</strong> &amp; <strong>SketchUp</strong>, translating 3D design intent into execution-ready details.
                </li>
                <li className="timeline-bullet-item">
                  Coordinated MEP, site conditions, materials and design revisions with clients, consultants, vendors, mall teams and site execution teams.
                </li>
                <li className="timeline-bullet-item">
                  Prepared BOQs, quantities and specifications, supporting procurement, budgeting and project execution.
                </li>
                <li className="timeline-bullet-item">
                  Developed site-specific technical and engineering solutions across <strong>40+ retail stores</strong>, adapting design, services and construction details to existing site constraints while maintaining brand standards and execution feasibility.
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-entry">
            <div className="timeline-meta">
              <div className="timeline-period">JUN 2024 — JUN 2025</div>
              <div className="timeline-company">Altisource</div>
              <div style={{ fontSize: "11px", color: "var(--ink-muted)", marginTop: "4px" }}>
                Bangalore, India
              </div>
            </div>
            <div>
              <h3 className="timeline-role">Inspection QC Analyst</h3>
              <p className="timeline-description">
                &ldquo;Conducted property/site inspections ensuring rigorous adherence to civil, facility, and safety guidelines.&rdquo;
              </p>
              <ul className="timeline-bullets">
                <li className="timeline-bullet-item">
                  Conducted property/site inspections ensuring adherence to civil and facility guidelines.
                </li>
                <li className="timeline-bullet-item">
                  Verified corrective actions with contractors and vendors while maintaining quality control.
                </li>
                <li className="timeline-bullet-item">
                  Prepared detailed inspection reports with findings, photographic records, and compliance notes.
                </li>
                <li className="timeline-bullet-item">
                  Assisted in monitoring safety practices and compliance on assigned properties.
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-entry">
            <div className="timeline-meta">
              <div className="timeline-period">MAY 2023 — MAY 2024</div>
              <div className="timeline-company">Shah Enterprises</div>
              <div style={{ fontSize: "11px", color: "var(--accent-terracotta)", marginTop: "4px" }}>
                BLR Airport Terminal 2
              </div>
            </div>
            <div>
              <h3 className="timeline-role">Site Engineer</h3>
              <p className="timeline-description">
                &ldquo;Supervised execution of commercial fit-out projects inside Terminal 2 of Bangalore International Airport.&rdquo;
              </p>
              <ul className="timeline-bullets">
                <li className="timeline-bullet-item">
                  Supervised execution of commercial fit-out projects (<strong>Bombay Brasserie</strong>, <strong>Wendy&apos;s</strong>, <strong>KFC Ultra Bar</strong> at Bangalore International Airport Terminal 2).
                </li>
                <li className="timeline-bullet-item">
                  Coordinated daily site activities, layout setting, and contractor/labor management.
                </li>
                <li className="timeline-bullet-item">
                  Ensured quality standards and safety compliance throughout construction stages.
                </li>
                <li className="timeline-bullet-item">
                  Managed project documentation including billing, payroll, progress reports, and vendor procurement.
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-entry">
            <div className="timeline-meta">
              <div className="timeline-period">AUG 2022 — SEP 2022</div>
              <div className="timeline-company">Ecoparadigm</div>
              <div style={{ fontSize: "11px", color: "var(--ink-muted)", marginTop: "4px" }}>
                Bangalore, India
              </div>
            </div>
            <div>
              <h3 className="timeline-role">Sustainability Intern</h3>
              <p className="timeline-description">
                &ldquo;Gained early research and field experience integrating circular economy principles into engineering infrastructure.&rdquo;
              </p>
              <ul className="timeline-bullets">
                <li className="timeline-bullet-item">
                  Assisted in design &amp; documentation of a 100 TPD biogas digester.
                </li>
                <li className="timeline-bullet-item">
                  Managed vendor relations and procurement documentation.
                </li>
                <li className="timeline-bullet-item">
                  Conducted site inspections at waste management centres.
                </li>
                <li className="timeline-bullet-item">
                  Conducted field data collection, waste management analysis, and environmental sampling.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PATENTS & HONORS */}
      {activeTab === "patents" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="patent-banner" style={{ margin: 0 }}>
            <div className="patent-content">
              <span className="patent-eyebrow">
                REGISTERED GERMAN UTILITY MODEL · DPMA GERMANY
              </span>
              <h3>Registered German Utility Model: Sustainable Material Composite Made from Biodegradable Waste</h3>
              <p>
                &ldquo;I developed a registered German utility model for an eco-friendly sustainable material composite made from biodegradable waste (Utility Model No. 20 2022 106 106 - DPMA), designed as a circular direct replacement for single-use plastics in construction and commercial applications. Officially registered with the German DPMA (Deutsches Patent- und Markenamt).&rdquo;
              </p>
              <div className="patent-badges-row">
                <span className="patent-badge-item">Utility Model No. 20 2022 106 106 · DPMA</span>
                <span className="patent-badge-item">Circular Agro-Waste Composite</span>
                <span className="patent-badge-item">Sustainable Material Science</span>
              </div>
              <div style={{ marginTop: "22px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
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
                  <span>Open Official German Utility Model Certificate (No. 20 2022 106 106 - DPMA) ↗</span>
                </a>
                <Link
                  href="/ip"
                  className="btn-pill btn-pill-outline"
                  style={{
                    color: "#ffffff",
                    borderColor: "rgba(255,255,255,0.3)",
                    fontSize: "13px",
                  }}
                >
                  <span>Explore Dedicated IP &amp; Awards Page ↗</span>
                </Link>
              </div>
            </div>
            <div className="patent-award-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "220px",
                  aspectRatio: "1 / 1.41",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "#ffffff",
                }}
              >
                <Image
                  src="/patent/patent-preview.jpg"
                  alt="German Utility Model Certificate No. 20 2022 106 106 - DPMA"
                  fill
                  sizes="220px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span style={{ fontSize: "11px", color: "var(--accent-brass)", fontFamily: "var(--font-mono)", textAlign: "center" }}>
                Official DPMA Registration No. 20 2022 106 106
              </span>
            </div>
          </div>

          <div
            style={{
              background: "var(--bg-surface)",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(22px, 3.5vw, 34px)",
              border: "1px solid var(--line-subtle)",
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <div>
              <span className="section-eyebrow">NATIONAL INNOVATION HONOR</span>
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 500, marginBottom: "10px" }}>
                CSIR-SERC First Prize Winner &mdash; Future Entrepreneurs Connect
              </h4>
              <p style={{ fontSize: "14px", color: "var(--ink-secondary)", lineHeight: 1.65, marginBottom: "16px" }}>
                Awarded First Prize by the Council of Scientific and Industrial Research – Structural Engineering Research Centre (CSIR-SERC) Chennai during the One Week One Lab Campaign for engineering a space-saving hydroponics cultivation system from household waste.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="/certifications/csir-award.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-primary"
                >
                  <span>View Official CSIR Award Certificate PDF ↗</span>
                </a>
                <Link
                  href="/patents"
                  className="btn-pill btn-pill-outline"
                >
                  <span>Read Full Research &amp; Award Story ↗</span>
                </Link>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "240px",
                  aspectRatio: "1.41 / 1",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                  border: "1px solid var(--line-subtle)",
                  background: "#ffffff",
                }}
              >
                <Image
                  src="/certifications/csir-award.jpg"
                  alt="CSIR Certificate of Recognition"
                  fill
                  sizes="240px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: CERTIFICATIONS & BIM */}
      {activeTab === "certifications" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: "20px" }}>
            {certifications.map((cert) => (
              <div
                key={cert.id}
                style={{
                  background: "var(--bg-surface)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--line-subtle)",
                  padding: "18px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "1.41 / 1",
                      borderRadius: "var(--radius-sm)",
                      overflow: "hidden",
                      marginBottom: "14px",
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--line-subtle)",
                    }}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="320px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent-terracotta)",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    {cert.badge}
                  </span>
                  <h4 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "4px" }}>
                    {cert.title}
                  </h4>
                  <p style={{ fontSize: "12px", color: "var(--ink-muted)", marginBottom: "8px" }}>
                    {cert.issuer}
                  </p>
                  <p style={{ fontSize: "13px", color: "var(--ink-secondary)", lineHeight: 1.5 }}>
                    {cert.description}
                  </p>
                </div>

                <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid var(--line-subtle)" }}>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "var(--accent-terracotta)",
                      textDecoration: "underline",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span>View Official Certificate (PDF)</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: EDUCATION & BACKGROUND */}
      {activeTab === "education" && (
        <div className="timeline-list">
          <div className="timeline-entry">
            <div className="timeline-meta">
              <div className="timeline-period">2019 — 2023</div>
              <div className="timeline-company">Nitte Meenakshi Institute of Technology</div>
              <div style={{ fontSize: "11px", color: "var(--accent-terracotta)", marginTop: "4px" }}>
                Bangalore, India
              </div>
            </div>
            <div>
              <h3 className="timeline-role">B.E. in Civil Engineering</h3>
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 10px",
                  borderRadius: "var(--radius-pill)",
                  background: "var(--accent-brass-soft)",
                  color: "var(--accent-brass)",
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "14px",
                  fontWeight: 600,
                }}
              >
                GPA: 7.65 / 10.0
              </div>
              <p className="timeline-description">
                &ldquo;My civil engineering training provided the rigorous foundation behind my spatial work: understanding structural load paths, concrete &amp; steel behavior, building services, surveying, and material mechanics. This allows me to design retail interiors that are structurally sound, code-compliant, and immediately buildable.&rdquo;
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "14px" }}>
                <span className="skill-tag-pill">Structural Engineering</span>
                <span className="skill-tag-pill">Construction Technology</span>
                <span className="skill-tag-pill">Surveying &amp; Benchmarking</span>
                <span className="skill-tag-pill">Building Materials</span>
                <span className="skill-tag-pill">QA/QC Compliance</span>
              </div>
            </div>
          </div>

          <div className="timeline-entry">
            <div className="timeline-meta">
              <div className="timeline-period">LANGUAGES</div>
              <div className="timeline-company">Multilingual Communication</div>
            </div>
            <div>
              <h3 className="timeline-role">Field &amp; Stakeholder Communication</h3>
              <p className="timeline-description">
                &ldquo;Managing fit-outs requires communicating clearly with corporate clients, design directors, municipal reviewers, and on-site craftsmen. I communicate across six languages:&rdquo;
              </p>
              <div className="resume-languages-grid">
                <div className="language-badge-card">
                  <div className="lang-title">English</div>
                  <div className="lang-level">Fluent</div>
                </div>
                <div className="language-badge-card">
                  <div className="lang-title">Hindi</div>
                  <div className="lang-level">Fluent</div>
                </div>
                <div className="language-badge-card">
                  <div className="lang-title">Kannada</div>
                  <div className="lang-level">Fluent</div>
                </div>
                <div className="language-badge-card">
                  <div className="lang-title">Telugu</div>
                  <div className="lang-level">Fluent</div>
                </div>
                <div className="language-badge-card">
                  <div className="lang-title">Spanish</div>
                  <div className="lang-level">Conversational</div>
                </div>
                <div className="language-badge-card">
                  <div className="lang-title">Italian</div>
                  <div className="lang-level">Basic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: TOOLS & CAPABILITIES */}
      {activeTab === "skills" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* CORE RESUME SKILLS HIGHLIGHT */}
          <div
            style={{
              background: "var(--bg-surface)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--line-subtle)",
              padding: "20px 24px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--accent-terracotta)",
                fontWeight: 600,
                display: "block",
                marginBottom: "12px",
              }}
            >
              Primary Skillset &bull; Verified Resume Competencies
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {[
                "Auto (CAD)",
                "REVIT (BIM)",
                "Sketchup",
                "BOQ & Costing",
                "Vendor Management",
                "Project Management",
                "Excel",
                "PowerPoint",
              ].map((skill) => (
                <span
                  key={skill}
                  style={{
                    display: "inline-block",
                    padding: "8px 16px",
                    borderRadius: "var(--radius-pill)",
                    background: "var(--bg-subtle)",
                    border: "1px solid var(--line-subtle)",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--ink-primary)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-container-grid">
            <div className="skill-card">
              <div className="skill-card-badge">TECHNICAL &amp; CAD</div>
              <h4>Drafting &amp; Modeling</h4>
              <div className="skill-tags-cloud">
                <span className="skill-tag-pill">AutoCAD 2D</span>
                <span className="skill-tag-pill">Revit Architecture</span>
                <span className="skill-tag-pill">Revit Structure</span>
                <span className="skill-tag-pill">Sketchup 3D</span>
                <span className="skill-tag-pill">GFC Drawing Sets</span>
                <span className="skill-tag-pill">Elevation Drafting</span>
                <span className="skill-tag-pill">Spatial Layout Planning</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-card-badge">RETAIL DESIGN</div>
              <h4>Spatial &amp; Visual Experience</h4>
              <div className="skill-tags-cloud">
                <span className="skill-tag-pill">Retail Space Planning</span>
                <span className="skill-tag-pill">Customer Circulation Flow</span>
                <span className="skill-tag-pill">Visual Merchandising (VM)</span>
                <span className="skill-tag-pill">Material Selection</span>
                <span className="skill-tag-pill">Retail Lighting Design</span>
                <span className="skill-tag-pill">Façade Studies</span>
                <span className="skill-tag-pill">Store Space Optimization</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-card-badge">ENGINEERING &amp; SITE</div>
              <h4>Execution &amp; Coordination</h4>
              <div className="skill-tags-cloud">
                <span className="skill-tag-pill">Project Management</span>
                <span className="skill-tag-pill">Vendor Management</span>
                <span className="skill-tag-pill">Site Execution &amp; Supervision</span>
                <span className="skill-tag-pill">QA/QC Standards</span>
                <span className="skill-tag-pill">Bill of Quantities (BOQ)</span>
                <span className="skill-tag-pill">MEP Coordination</span>
                <span className="skill-tag-pill">Commercial Fit-Outs</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="resume-download-banner">
        <div style={{ maxWidth: "560px" }}>
          <strong style={{ display: "block", fontSize: "14.5px" }}>
            Want to review my official resume document?
          </strong>
          <span style={{ fontSize: "12.5px", color: "var(--ink-secondary)", display: "block", marginTop: "4px" }}>
            Includes complete verified corporate history, academic credentials, and project references.
          </span>
        </div>
        <a
          href="/resume/Muhammad_Rishad_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill btn-pill-primary resume-download-btn"
          download
        >
          <span>Download Official Resume PDF</span>
          <span>↓</span>
        </a>
      </div>
    </div>
  );
}
