"use client";

import { useState } from "react";
import Image from "next/image";

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
    description: "Honored for designing an eco-friendly closed-loop hydroponics cultivation system engineered entirely from recycled agro-waste composites.",
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
  const [activeTab, setActiveTab] = useState<"experience" | "patents" | "certifications" | "education" | "skills">("experience");

  return (
    <div className="resume-widget">
      <div className="resume-tabs-nav">
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
          Patents & Honors
        </button>
        <button
          className={`resume-tab-btn ${activeTab === "certifications" ? "active" : ""}`}
          onClick={() => setActiveTab("certifications")}
        >
          Certifications & BIM
        </button>
        <button
          className={`resume-tab-btn ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          Education & Background
        </button>
        <button
          className={`resume-tab-btn ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => setActiveTab("skills")}
        >
          Tools & Capabilities
        </button>
      </div>

      {activeTab === "experience" && (
        <div className="timeline-list">
          <div className="timeline-entry">
            <div className="timeline-meta">
              <div className="timeline-period">OCT 2024 — PRESENT</div>
              <div className="timeline-company">Do More Design Studio</div>
              <div style={{ fontSize: "11px", color: "var(--accent-terracotta)", marginTop: "4px" }}>
                Bangalore, India
              </div>
            </div>
            <div>
              <h3 className="timeline-role">2D Designer & Retail Interior Planner</h3>
              <p className="timeline-description">
                &ldquo;Here I spearhead retail layout planning and technical drawing documentation for premier national and international brands. My daily focus is crafting stores that elevate visual merchandising while ensuring flawless constructability.&rdquo;
              </p>
              <ul className="timeline-bullets">
                <li className="timeline-bullet-item">
                  I design retail store and restaurant layouts using AutoCAD for brands including <strong>Aditya Birla Group</strong> retail outlets, <strong>The Bear House</strong>, <strong>VOX</strong>, <strong>Furlenco</strong>, and <strong>Nobero</strong>.
                </li>
                <li className="timeline-bullet-item">
                  I develop complete GFC (Good For Construction) packages: floor layouts, reflected ceiling plans (RCP), lighting grids, wall fixture elevations, and joinery details.
                </li>
                <li className="timeline-bullet-item">
                  I coordinate directly with mall technical teams, MEP consultants, and fabrication vendors to ensure seamless integration of HVAC, electrical troughs, and brand aesthetic guidelines.
                </li>
                <li className="timeline-bullet-item">
                  I prepare comprehensive BOQs, material schedules, and cost estimations to assist procurement and budgeting.
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
              <h3 className="timeline-role">Inspection QC Engineer</h3>
              <p className="timeline-description">
                &ldquo;In this quality control role, I evaluated physical built spaces against stringent engineering standards, building codes, and facility guidelines.&rdquo;
              </p>
              <ul className="timeline-bullets">
                <li className="timeline-bullet-item">
                  Conducted comprehensive property and fit-out site inspections ensuring adherence to civil, architectural, and safety guidelines.
                </li>
                <li className="timeline-bullet-item">
                  Verified corrective actions directly with contractors and vendors, enforcing quality assurance benchmarks.
                </li>
                <li className="timeline-bullet-item">
                  Authored technical inspection reports featuring photographic punch-lists, defect tracking, and compliance notes.
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
              <h3 className="timeline-role">Site Engineer — Commercial Fit-Outs</h3>
              <p className="timeline-description">
                &ldquo;I had hands-on site management responsibilities executing high-stakes commercial food & retail fit-outs inside Terminal 2 of Bangalore International Airport.&rdquo;
              </p>
              <ul className="timeline-bullets">
                <li className="timeline-bullet-item">
                  Supervised execution of premier commercial fit-out projects: <strong>Bombay Brasserie</strong>, <strong>Wendy&apos;s</strong>, and <strong>KFC Ultra Bar</strong> at <strong>Bangalore International Airport Terminal 2</strong>.
                </li>
                <li className="timeline-bullet-item">
                  Coordinated daily site activities, laser-level benching, contractor supervision, labor allocations, and tight airport airside security protocols.
                </li>
                <li className="timeline-bullet-item">
                  Managed on-site technical QA/QC, stage-wise inspections, billings, material reconciliation, and progress reports.
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
              <h3 className="timeline-role">Sustainability Engineering Intern</h3>
              <p className="timeline-description">
                &ldquo;Gained early research and field experience integrating circular economy principles into large-scale engineering infrastructure.&rdquo;
              </p>
              <ul className="timeline-bullets">
                <li className="timeline-bullet-item">
                  Assisted in the design and technical documentation of a 100 TPD (Tonnes Per Day) biogas digester facility.
                </li>
                <li className="timeline-bullet-item">
                  Conducted field data collection, environmental sampling, and site inspections at decentralized solid waste management centers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === "patents" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="patent-banner" style={{ margin: 0 }}>
            <div className="patent-content">
              <span className="patent-eyebrow">
                GRANTED INTERNATIONAL PATENT · DPMA GERMANY
              </span>
              <h3>German Patent Granted: Biodegradable Agro-Waste Material</h3>
              <p>
                &ldquo;I developed a patented bio-composite material derived from agricultural waste designed as an eco-friendly direct replacement for single-use plastics. The German Patent Office officially granted the patent, recognizing its innovation in circular materials and reducing commercial waste footprints.&rdquo;
              </p>
              <div className="patent-badges-row">
                <span className="patent-badge-item">🇩🇪 German Patent Office Granted (G11861DE)</span>
                <span className="patent-badge-item">🌱 Circular Agro-Waste Composite</span>
                <span className="patent-badge-item">♻ Sustainable Material Science</span>
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
                  <span>Open Official German Patent Certificate (G11861DE) ↗</span>
                </a>
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
                  alt="German Patent Certificate G11861DE"
                  fill
                  sizes="220px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span style={{ fontSize: "11px", color: "var(--accent-brass)", fontFamily: "var(--font-mono)", textAlign: "center" }}>
                Official DPMA Certificate G11861DE
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
                CSIR Winner &mdash; Future Entrepreneurs Connect
              </h4>
              <p style={{ fontSize: "14px", color: "var(--ink-secondary)", lineHeight: 1.65, marginBottom: "16px" }}>
                Winner of CSIR &ndash; Future Entrepreneurs Connect for designing an eco-friendly closed-loop hydroponics cultivation system engineered entirely from recycled materials.
              </p>
              <a
                href="/certifications/csir-award.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-primary"
              >
                <span>View Official CSIR Award Certificate PDF ↗</span>
              </a>
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
                      border: "1px solid var(--line-subtle)",
                      background: "#ffffff",
                      marginBottom: "14px",
                    }}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="340px"
                      style={{ objectFit: "contain", background: "#fcfbfa" }}
                    />
                  </div>

                  <span
                    style={{
                      fontSize: "10.5px",
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent-terracotta)",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {cert.badge}
                  </span>

                  <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontWeight: 500, marginBottom: "4px", color: "var(--ink-primary)" }}>
                    {cert.title}
                  </h4>

                  <span style={{ fontSize: "12px", color: "var(--ink-muted)", display: "block", marginBottom: "8px" }}>
                    {cert.issuer} {cert.credentialId ? `· ${cert.credentialId}` : ""}
                  </span>

                  <p style={{ fontSize: "13px", color: "var(--ink-secondary)", lineHeight: 1.55 }}>
                    {cert.description}
                  </p>
                </div>

                <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid var(--line-subtle)" }}>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-secondary"
                    style={{ width: "100%", justifyContent: "center", fontSize: "12px" }}
                  >
                    <span>View Official Certificate PDF ↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

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
              <h3 className="timeline-role">Bachelor of Engineering (B.E.) in Civil Engineering</h3>
              <div
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  background: "var(--accent-terracotta-soft)",
                  color: "var(--accent-terracotta)",
                  padding: "4px 12px",
                  borderRadius: "var(--radius-pill)",
                  marginBottom: "14px",
                  fontWeight: 600,
                }}
              >
                GPA: 7.65 / 10.0
              </div>
              <p className="timeline-description">
                &ldquo;My civil engineering training provided the rigorous foundation behind my spatial work: understanding structural load paths, concrete & steel behavior, building services, surveying, and material mechanics. This allows me to design retail interiors that are structurally sound, code-compliant, and immediately buildable.&rdquo;
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "14px" }}>
                <span className="skill-tag-pill">Structural Engineering</span>
                <span className="skill-tag-pill">Construction Technology</span>
                <span className="skill-tag-pill">Surveying & Benchmarking</span>
                <span className="skill-tag-pill">Building Materials</span>
                <span className="skill-tag-pill">MEP Systems</span>
              </div>
            </div>
          </div>

          <div className="timeline-entry">
            <div className="timeline-meta">
              <div className="timeline-period">LANGUAGES</div>
              <div className="timeline-company">Multilingual Communication</div>
            </div>
            <div>
              <h3 className="timeline-role">Field & Stakeholder Communication</h3>
              <p className="timeline-description">
                &ldquo;Managing fit-outs requires communicating clearly with corporate clients, design directors, municipal reviewers, and on-site craftsmen. I am fluent across four major languages:&rdquo;
              </p>
              <div className="resume-languages-grid">
                <div className="language-badge-card">
                  <div className="lang-title">English</div>
                  <div className="lang-level">Professional</div>
                </div>
                <div className="language-badge-card">
                  <div className="lang-title">Hindi</div>
                  <div className="lang-level">Fluent</div>
                </div>
                <div className="language-badge-card">
                  <div className="lang-title">Kannada</div>
                  <div className="lang-level">Native</div>
                </div>
                <div className="language-badge-card">
                  <div className="lang-title">Telugu</div>
                  <div className="lang-level">Fluent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "skills" && (
        <div className="skills-container-grid">
          <div className="skill-card">
            <div className="skill-card-badge">TECHNICAL & CAD</div>
            <h4>Drafting & Modeling</h4>
            <div className="skill-tags-cloud">
              <span className="skill-tag-pill">AutoCAD 2D</span>
              <span className="skill-tag-pill">Revit Architecture</span>
              <span className="skill-tag-pill">GFC Drawing Packages</span>
              <span className="skill-tag-pill">Reflected Ceiling Plans</span>
              <span className="skill-tag-pill">Millwork & Joinery Details</span>
              <span className="skill-tag-pill">Elevation Drafting</span>
              <span className="skill-tag-pill">3D Space Visualization</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-badge">RETAIL DESIGN</div>
            <h4>Spatial & Visual Experience</h4>
            <div className="skill-tags-cloud">
              <span className="skill-tag-pill">Retail Space Planning</span>
              <span className="skill-tag-pill">Customer Circulation Flow</span>
              <span className="skill-tag-pill">Visual Merchandising (VM)</span>
              <span className="skill-tag-pill">Fixture Detailing & Gondolas</span>
              <span className="skill-tag-pill">Material Palette Selection</span>
              <span className="skill-tag-pill">Retail Lighting Design</span>
              <span className="skill-tag-pill">Cash Counter & POS Ergonomics</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-badge">ENGINEERING & SITE</div>
            <h4>Execution & Coordination</h4>
            <div className="skill-tags-cloud">
              <span className="skill-tag-pill">MEP Coordination</span>
              <span className="skill-tag-pill">HVAC & Diffuser Alignment</span>
              <span className="skill-tag-pill">Site Supervision & QA/QC</span>
              <span className="skill-tag-pill">Bill of Quantities (BOQ)</span>
              <span className="skill-tag-pill">Vendor & Labor Management</span>
              <span className="skill-tag-pill">Laser Level Setting</span>
              <span className="skill-tag-pill">Commercial Fit-Outs</span>
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
