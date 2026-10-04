"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlueprintItem {
  id: string;
  title: string;
  project: string;
  scale: string;
  description: string;
  drawingSrc: string;
  renderSrc: string;
  pdfLink: string;
  slug: string;
  specs: string[];
}

const blueprints: BlueprintItem[] = [
  {
    id: "vox-gfc",
    title: "VOX Turquoise Mumbai — 471 SQ FT",
    project: "Curved Ceiling & Floor Plan GFC",
    scale: "GFC REV-0 · 22 Sheets Package",
    description:
      "“In retail interior design, the drawing is the contract between imagination and reality. For this compact 471 SFT luxury boutique, I drafted the custom curved flexi-ply ceiling baffles, recessed cove lighting, and SPC oak mist floor layout down to the millimeter.”",
    drawingSrc: "/projects/vox-mumbai/gfc-p3.jpg",
    renderSrc: "/projects/vox-mumbai/01.jpg",
    pdfLink: "/projects/vox-mumbai/technical.pdf",
    slug: "vox-turquoise-mumbai",
    specs: ["Curved Ceiling Detailing", "SPC Oak Mist Flooring", "Acoustic Wall Panels", "Material Library Layout"],
  },
  {
    id: "tbh-jaipur-gfc",
    title: "The Bear House — Pacific Mall Jaipur",
    project: "Full GFC Construction & MEP Coordination",
    scale: "1,916 SQ FT Flagship · 33 Sheets GFC",
    description:
      "“A retail flagship must look effortless to the shopper. My technical drawing package coordinated multi-tier lighting, power troughs for POS & island cash counters, CCTV security coverage, and HVAC diffuser paths so no utility clashes with custom oak millwork.”",
    drawingSrc: "/projects/bear-house-jaipur/gfc-p4.jpg",
    renderSrc: "/projects/bear-house-jaipur/01.jpg",
    pdfLink: "/projects/bear-house-jaipur/gfc-drawings.pdf",
    slug: "the-bear-house-pacific-jaipur",
    specs: ["33-Sheet GFC Set", "Fixture Zoning & Gondolas", "Power & Electrical Troughs", "1,916 SFT Floor Plate"],
  },
  {
    id: "tbh-m3m-gfc",
    title: "The Bear House — M3M Paragon 57",
    project: "30-Sheet Good-For-Construction (GFC) Package",
    scale: "Commercial Retail Bay · Gurugram",
    description:
      "“Behind the photorealistic 3D visualization is an exhaustive 30-sheet construction drawing package. I engineered the retail fixture layouts, cash counter raceways, false ceiling levels @ 2850mm, and coordinated HVAC ducting paths to ensure flawless on-site execution.”",
    drawingSrc: "/projects/bear-house-m3m/gfc-p3.jpg",
    renderSrc: "/projects/bear-house-m3m/slides/slide-01.jpg",
    pdfLink: "/projects/bear-house-m3m/gfc-drawings.pdf",
    slug: "the-bear-house-m3m",
    specs: ["30-Sheet GFC Set", "Mezzanine & Retail Layout", "Gypsum False Ceiling @ 2850mm", "Lighting Cove & HVAC Routing"],
  },
];

export default function BlueprintSpotlight() {
  const [selectedItem, setSelectedItem] = useState<BlueprintItem>(blueprints[0]);
  const [viewMode, setViewMode] = useState<"render" | "drawing">("render");

  return (
    <section className="blueprint-section">
      <div className="shell">
        <div className="blueprint-header">
          <span className="section-eyebrow">THE DRAFTING TABLE</span>
          <h2 className="section-title">From 3D Vision to Technical Reality</h2>
          <p>
            &ldquo;I don&apos;t just visualize retail concepts &mdash; I draw the exact construction blueprints that builders, joiners, and MEP contractors execute on site. Toggle between the photorealistic design render and my actual AutoCAD GFC drawing package below.&rdquo;
          </p>

          <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
            {blueprints.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                  background: selectedItem.id === item.id ? "var(--accent-brass)" : "rgba(255,255,255,0.1)",
                  color: selectedItem.id === item.id ? "#191715" : "#ffffff",
                  transition: "all 0.25s ease",
                }}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="blueprint-card" style={{ padding: "clamp(20px, 4vw, 36px)" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--accent-brass)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                }}
              >
                {selectedItem.scale}
              </span>
              <h3 style={{ fontSize: "24px", color: "#ffffff", marginTop: "4px" }}>
                {selectedItem.project}
              </h3>
            </div>

            {/* Toggle Switch */}
            <div
              style={{
                display: "inline-flex",
                background: "rgba(0, 0, 0, 0.4)",
                padding: "4px",
                borderRadius: "var(--radius-pill)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <button
                onClick={() => setViewMode("render")}
                style={{
                  padding: "8px 18px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "12px",
                  fontWeight: 600,
                  background: viewMode === "render" ? "var(--accent-terracotta)" : "transparent",
                  color: "#ffffff",
                  transition: "all 0.25s ease",
                }}
              >
                3D Interior Render
              </button>
              <button
                onClick={() => setViewMode("drawing")}
                style={{
                  padding: "8px 18px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "12px",
                  fontWeight: 600,
                  background: viewMode === "drawing" ? "var(--accent-brass)" : "transparent",
                  color: viewMode === "drawing" ? "#191715" : "#ffffff",
                  transition: "all 0.25s ease",
                }}
              >
                AutoCAD / GFC Blueprint
              </button>
            </div>
          </div>

          {/* Interactive Visual Window */}
          <div
            className="blueprint-image-container"
            style={{
              aspectRatio: "16 / 9",
              minHeight: "clamp(220px, 35vw, 420px)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.1)",
              width: "100%",
            }}
          >
            {viewMode === "render" ? (
              <Image
                src={selectedItem.renderSrc}
                alt={`${selectedItem.title} 3D Render`}
                fill
                sizes="(max-width: 900px) 100vw, 80vw"
                style={{ objectFit: "cover" }}
                priority
              />
            ) : (
              <Image
                src={selectedItem.drawingSrc}
                alt={`${selectedItem.title} Construction Drawing`}
                fill
                sizes="(max-width: 900px) 100vw, 80vw"
                style={{ objectFit: "contain", background: "#ffffff" }}
              />
            )}

            <div
              style={{
                position: "absolute",
                bottom: "14px",
                right: "14px",
                background: "rgba(25, 23, 21, 0.85)",
                color: "#ffffff",
                padding: "5px 12px",
                borderRadius: "var(--radius-pill)",
                fontSize: "10.5px",
                fontFamily: "var(--font-mono)",
                backdropFilter: "blur(8px)",
              }}
            >
              {viewMode === "render" ? "● VISUAL INTENT" : "● GFC TECHNICAL SHEET"}
            </div>
          </div>

          <div className="blueprint-bottom-grid">
            <p style={{ color: "#d6cfc4", fontSize: "14.5px", lineHeight: "1.65" }}>
              {selectedItem.description}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {selectedItem.specs.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: "11px",
                      background: "rgba(255, 255, 255, 0.08)",
                      color: "var(--accent-brass)",
                      padding: "4px 10px",
                      borderRadius: "var(--radius-pill)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "14px", marginTop: "10px" }}>
                <Link
                  href={`/projects/${selectedItem.slug}`}
                  style={{
                    color: "var(--accent-brass)",
                    fontSize: "13px",
                    fontWeight: 600,
                    textDecoration: "underline",
                  }}
                >
                  Read full project case study ↗
                </Link>
                <a
                  href={selectedItem.pdfLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#ffffff",
                    fontSize: "13px",
                    opacity: 0.8,
                  }}
                >
                  View full PDF package ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
