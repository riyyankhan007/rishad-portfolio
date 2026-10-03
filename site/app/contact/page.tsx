"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollObserver from "../components/ScrollObserver";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Retail Interior Design",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <ScrollObserver />
      <Navbar />

      <main style={{ paddingBottom: "100px" }}>
        <section style={{ paddingTop: "clamp(50px, 7vw, 90px)", paddingBottom: "60px" }}>
          <div className="shell">
            <div style={{ maxWidth: "800px" }}>
              <div className="hero-eyebrow reveal-on-scroll">
                <span>●</span>
                <span>DIRECT CONNECTION</span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(42px, 5.5vw, 72px)",
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  marginBottom: "24px",
                }}
                className="reveal-on-scroll reveal-delay-1"
              >
                Let&apos;s build something <em>precise</em>.
              </h1>

              <p
                style={{
                  fontSize: "clamp(18px, 1.4vw, 21px)",
                  lineHeight: 1.6,
                  color: "var(--ink-secondary)",
                }}
                className="reveal-on-scroll reveal-delay-2"
              >
                &ldquo;I am currently open to new retail interior projects, commercial fit-outs, GFC documentation consultations, and full-time senior design & execution roles in Bangalore and nationwide.&rdquo;
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="shell">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(40px, 6vw, 80px)",
                alignItems: "start",
              }}
            >
              {/* CONTACT DETAILS & INFO */}
              <div className="reveal-on-scroll">
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "26px",
                    fontWeight: 500,
                    marginBottom: "24px",
                  }}
                >
                  Reach Me Directly
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <a
                    href="mailto:rishad.muhammad313@gmail.com"
                    style={{
                      background: "var(--bg-surface)",
                      padding: "24px",
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid var(--line-subtle)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <div>
                      <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--accent-terracotta)", textTransform: "uppercase", display: "block" }}>
                        EMAIL ADDRESS
                      </span>
                      <strong style={{ fontSize: "16px", color: "var(--ink-primary)", marginTop: "4px", display: "block" }}>
                        rishad.muhammad313@gmail.com
                      </strong>
                    </div>
                    <span style={{ fontSize: "20px", color: "var(--accent-terracotta)" }}>↗</span>
                  </a>

                  <a
                    href="tel:+919182397856"
                    style={{
                      background: "var(--bg-surface)",
                      padding: "24px",
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid var(--line-subtle)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <div>
                      <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--accent-terracotta)", textTransform: "uppercase", display: "block" }}>
                        PHONE / CALL
                      </span>
                      <strong style={{ fontSize: "16px", color: "var(--ink-primary)", marginTop: "4px", display: "block" }}>
                        +91 9182397856
                      </strong>
                    </div>
                    <span style={{ fontSize: "20px", color: "var(--accent-terracotta)" }}>↗</span>
                  </a>

                  <a
                    href="https://wa.me/919182397856?text=Hi%20Rishad,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "var(--bg-surface)",
                      padding: "24px",
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid var(--line-subtle)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <div>
                      <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--accent-terracotta)", textTransform: "uppercase", display: "block" }}>
                        WHATSAPP CHAT
                      </span>
                      <strong style={{ fontSize: "16px", color: "var(--ink-primary)", marginTop: "4px", display: "block" }}>
                        Instant WhatsApp Messaging
                      </strong>
                    </div>
                    <span style={{ fontSize: "20px", color: "var(--accent-terracotta)" }}>↗</span>
                  </a>

                  <div
                    style={{
                      background: "var(--bg-subtle)",
                      padding: "24px",
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid var(--line-subtle)",
                    }}
                  >
                    <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--ink-muted)", textTransform: "uppercase", display: "block" }}>
                      HEADQUARTERS & BASE
                    </span>
                    <strong style={{ fontSize: "16px", color: "var(--ink-primary)", marginTop: "4px", display: "block" }}>
                      Bangalore, Karnataka, India
                    </strong>
                    <p style={{ fontSize: "13px", color: "var(--ink-secondary)", marginTop: "6px" }}>
                      Available for on-site client coordination across Bangalore and travel for nationwide retail rollouts.
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: "28px" }}>
                  <a
                    href="/resume/Muhammad_Rishad_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-outline"
                    style={{ width: "100%", justifyContent: "center" }}
                    download
                  >
                    <span>Download Official Resume PDF (145 KB)</span>
                    <span>↓</span>
                  </a>
                </div>
              </div>

              {/* INTERACTIVE INQUIRY FORM */}
              <div
                style={{
                  background: "var(--bg-surface)",
                  borderRadius: "var(--radius-xl)",
                  padding: "clamp(30px, 4vw, 44px)",
                  border: "1px solid var(--line-subtle)",
                  boxShadow: "var(--shadow-md)",
                }}
                className="reveal-on-scroll reveal-delay-2"
              >
                <span className="section-eyebrow">PROJECT INQUIRY FORM</span>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "24px",
                    fontWeight: 500,
                    marginBottom: "10px",
                  }}
                >
                  Send Me a Direct Note
                </h3>
                <p style={{ fontSize: "14px", color: "var(--ink-secondary)", marginBottom: "24px" }}>
                  Tell me about your site footprint, location, and timeline. I reply within 24 hours.
                </p>

                {submitted ? (
                  <div
                    style={{
                      padding: "30px",
                      background: "var(--accent-sage-soft)",
                      borderRadius: "var(--radius-lg)",
                      textAlign: "center",
                      border: "1px solid rgba(81, 99, 83, 0.2)",
                    }}
                  >
                    <div style={{ fontSize: "36px", marginBottom: "12px" }}>✓</div>
                    <h4 style={{ fontSize: "18px", fontWeight: 600, color: "var(--ink-primary)", marginBottom: "8px" }}>
                      Thank you for reaching out!
                    </h4>
                    <p style={{ fontSize: "14px", color: "var(--ink-secondary)", lineHeight: 1.5 }}>
                      I have received your project details and will review your requirements promptly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-pill btn-pill-outline"
                      style={{ marginTop: "20px" }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, marginBottom: "6px" }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--line-medium)",
                          background: "var(--bg-canvas)",
                          fontSize: "14px",
                          fontFamily: "inherit",
                        }}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 600, marginBottom: "6px" }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          style={{
                            width: "100%",
                            padding: "12px 16px",
                            borderRadius: "var(--radius-sm)",
                            border: "1px solid var(--line-medium)",
                            background: "var(--bg-canvas)",
                            fontSize: "14px",
                            fontFamily: "inherit",
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 600, marginBottom: "6px" }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 ..."
                          style={{
                            width: "100%",
                            padding: "12px 16px",
                            borderRadius: "var(--radius-sm)",
                            border: "1px solid var(--line-medium)",
                            background: "var(--bg-canvas)",
                            fontSize: "14px",
                            fontFamily: "inherit",
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, marginBottom: "6px" }}>
                        Project Focus
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--line-medium)",
                          background: "var(--bg-canvas)",
                          fontSize: "14px",
                          fontFamily: "inherit",
                        }}
                      >
                        <option value="Retail Interior Design">Retail Interior Design & Space Planning</option>
                        <option value="GFC Construction Documentation">AutoCAD / GFC Construction Drawings</option>
                        <option value="3D Visualization & Concepts">3D Visualization & Brand Concepts</option>
                        <option value="Commercial Fit-out Execution">Commercial Fit-Out & Site QA/QC</option>
                        <option value="Full-time Role / Collaboration">Senior Role or Career Opportunity</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, marginBottom: "6px" }}>
                        Project Details & Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about the location, square footage, brand vision, or timeline..."
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--line-medium)",
                          background: "var(--bg-canvas)",
                          fontSize: "14px",
                          fontFamily: "inherit",
                          resize: "vertical",
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-pill btn-pill-primary"
                      style={{ justifyContent: "center", marginTop: "8px", padding: "14px 24px" }}
                    >
                      <span>Submit Inquiry</span>
                      <span>↗</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}