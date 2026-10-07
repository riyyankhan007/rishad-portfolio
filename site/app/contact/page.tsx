"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollObserver from "../components/ScrollObserver";
import Link from "next/link";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("shaikh.rishad7@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <ScrollObserver />
      <Navbar />

      <main style={{ paddingBottom: "100px" }}>
        {/* HERO — CENTER ALIGNED */}
        <section style={{ paddingTop: "clamp(50px, 7vw, 90px)", paddingBottom: "40px" }}>
          <div className="shell">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <div
                className="hero-eyebrow reveal-on-scroll"
                style={{ justifyContent: "center", display: "inline-flex" }}
              >
                <span>●</span>
                <span>DIRECT CONTACT</span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(38px, 5.2vw, 68px)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginTop: "16px",
                  marginBottom: "16px",
                }}
                className="reveal-on-scroll reveal-delay-1"
              >
                Muhammad Rishad
              </h1>

              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--accent-terracotta)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: "20px",
                }}
                className="reveal-on-scroll reveal-delay-1"
              >
                Civil Engineering and Retail Designer
              </div>

              <p
                style={{
                  fontSize: "clamp(17px, 1.3vw, 20px)",
                  lineHeight: 1.6,
                  color: "var(--ink-secondary)",
                  maxWidth: "680px",
                  margin: "0 auto",
                }}
                className="reveal-on-scroll reveal-delay-2"
              >
                &ldquo;Available for retail interior design commissions, spatial layout planning, turnkey site execution supervision, BOQ preparation, and design leadership in Bangalore and nationwide.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT DETAILS CARDS (CENTER-ALIGNED) */}
        <section style={{ padding: "20px 0 60px" }}>
          <div className="shell">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
                maxWidth: "1000px",
                margin: "0 auto",
              }}
              className="reveal-on-scroll"
            >
              {/* EMAIL CARD — CENTERED */}
              <div
                style={{
                  background: "var(--bg-surface)",
                  borderRadius: "var(--radius-xl)",
                  padding: "36px 32px",
                  border: "1px solid var(--line-subtle)",
                  boxShadow: "var(--shadow-sm)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent-terracotta)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      display: "block",
                      marginBottom: "10px",
                      fontWeight: 600,
                    }}
                  >
                    Direct Email
                  </span>
                  <div style={{ marginBottom: "14px" }}>
                    <span style={{ fontSize: "11px", color: "var(--ink-muted)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "2px" }}>
                      Main Email
                    </span>
                    <a
                      href="mailto:shaikh.rishad7@gmail.com"
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "var(--ink-primary)",
                        display: "block",
                        wordBreak: "break-all",
                        lineHeight: 1.3,
                      }}
                    >
                      shaikh.rishad7@gmail.com
                    </a>
                  </div>
                  <div>
                    <span style={{ fontSize: "11px", color: "var(--ink-muted)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "2px" }}>
                      Alternative Email
                    </span>
                    <a
                      href="mailto:rishad.muhammad313@gmail.com"
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "var(--ink-primary)",
                        display: "block",
                        wordBreak: "break-all",
                        lineHeight: 1.3,
                      }}
                    >
                      rishad.muhammad313@gmail.com
                    </a>
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--ink-secondary)", marginTop: "14px", lineHeight: 1.5 }}>
                    Typically responds within 24 hours for project inquiries and design briefs.
                  </p>
                </div>

                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                  <a
                    href="mailto:shaikh.rishad7@gmail.com"
                    className="btn-pill btn-pill-primary"
                    style={{ fontSize: "13px" }}
                  >
                    <span>Send Email ↗</span>
                  </a>
                  <button
                    onClick={copyEmail}
                    className="btn-pill btn-pill-outline"
                    style={{ fontSize: "13px" }}
                  >
                    <span>{copied ? "Copied! ✓" : "Copy Email"}</span>
                  </button>
                </div>
              </div>

              {/* PHONE & WHATSAPP CARD — CENTERED */}
              <div
                style={{
                  background: "var(--bg-surface)",
                  borderRadius: "var(--radius-xl)",
                  padding: "36px 32px",
                  border: "1px solid var(--line-subtle)",
                  boxShadow: "var(--shadow-sm)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent-terracotta)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      display: "block",
                      marginBottom: "10px",
                      fontWeight: 600,
                    }}
                  >
                    Direct Phone &amp; WhatsApp
                  </span>
                  <a
                    href="tel:+919182397856"
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "var(--ink-primary)",
                      display: "block",
                    }}
                  >
                    +91 9182397856
                  </a>
                  <p style={{ fontSize: "13px", color: "var(--ink-secondary)", marginTop: "12px", lineHeight: 1.5 }}>
                    Direct mobile line for discussions, site consultations, and urgent rollouts.
                  </p>
                </div>

                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                  <a
                    href="tel:+919182397856"
                    className="btn-pill btn-pill-primary"
                    style={{ fontSize: "13px" }}
                  >
                    <span>Call Direct ↗</span>
                  </a>
                  <a
                    href="https://wa.me/919182397856?text=Hi%20Muhammad%20Rishad,%20I%20would%20like%20to%20discuss%20a%20retail%20design%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-outline"
                    style={{ fontSize: "13px" }}
                  >
                    <span>WhatsApp Chat ↗</span>
                  </a>
                </div>
              </div>

              {/* LOCATION & BASE CARD — CENTERED */}
              <div
                style={{
                  background: "var(--bg-surface)",
                  borderRadius: "var(--radius-xl)",
                  padding: "36px 32px",
                  border: "1px solid var(--line-subtle)",
                  boxShadow: "var(--shadow-sm)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent-terracotta)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      display: "block",
                      marginBottom: "10px",
                      fontWeight: 600,
                    }}
                  >
                    Based In
                  </span>
                  <strong
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "var(--ink-primary)",
                      display: "block",
                    }}
                  >
                    Bangalore, Karnataka, India
                  </strong>
                  <p style={{ fontSize: "13px", color: "var(--ink-secondary)", marginTop: "12px", lineHeight: 1.5 }}>
                    Available for on-site client meetings, contractor briefing, and travel nationwide for retail flagship rollouts.
                  </p>
                </div>

                <div>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "6px 14px",
                      borderRadius: "var(--radius-pill)",
                      background: "var(--bg-subtle)",
                      fontSize: "12px",
                      color: "var(--ink-secondary)",
                      border: "1px solid var(--line-subtle)",
                    }}
                  >
                    Available for Nationwide Travel
                  </span>
                </div>
              </div>

              {/* RESUME & CREDENTIALS CARD — CENTERED */}
              <div
                style={{
                  background: "var(--bg-surface)",
                  borderRadius: "var(--radius-xl)",
                  padding: "36px 32px",
                  border: "1px solid var(--line-subtle)",
                  boxShadow: "var(--shadow-sm)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent-terracotta)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      display: "block",
                      marginBottom: "10px",
                      fontWeight: 600,
                    }}
                  >
                    Verified Credentials
                  </span>
                  <strong
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "var(--ink-primary)",
                      display: "block",
                    }}
                  >
                    Official Resume &amp; Portfolio
                  </strong>
                  <p style={{ fontSize: "13px", color: "var(--ink-secondary)", marginTop: "12px", lineHeight: 1.5 }}>
                    Verified documentation of work history, German patent certificate, CSIR award, and Autodesk BIM accreditations.
                  </p>
                </div>

                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                  <a
                    href="/resume/Muhammad_Rishad_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-primary"
                    style={{ fontSize: "13px" }}
                    download
                  >
                    <span>Download Resume PDF ↓</span>
                  </a>
                  <Link
                    href="/about"
                    className="btn-pill btn-pill-outline"
                    style={{ fontSize: "13px" }}
                  >
                    <span>Read Story &amp; SOP ↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}