"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="shell">
        <div className="navbar-inner">
          <Link href="/" className="brand-badge" onClick={() => setMobileMenuOpen(false)}>
            <div className="brand-monogram">MR</div>
            <div className="brand-meta">
              <span className="brand-name">Muhammad Rishad</span>
              <span className="brand-role">Retail Interior Designer · Civil Eng.</span>
            </div>
          </Link>

          <nav className="nav-links">
            <Link
              href="/"
              className={`nav-item ${pathname === "/" ? "active" : ""}`}
            >
              Overview
            </Link>
            <Link
              href="/projects"
              className={`nav-item ${pathname.startsWith("/projects") ? "active" : ""}`}
            >
              Selected Work
            </Link>
            <Link
              href="/about"
              className={`nav-item ${pathname === "/about" ? "active" : ""}`}
            >
              My Story & Resume
            </Link>
            <Link
              href="/contact"
              className={`nav-item ${pathname === "/contact" ? "active" : ""}`}
            >
              Contact
            </Link>
          </nav>

          <div className="nav-actions">
            <a
              href="/resume/Muhammad_Rishad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-outline hide-on-phone"
              download
            >
              <span>Resume PDF</span>
              <span style={{ fontSize: "11px" }}>↓</span>
            </a>
            <Link href="/contact" className="btn-pill btn-pill-primary hide-on-phone">
              <span>Let&apos;s Talk</span>
              <span>↗</span>
            </Link>
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              style={{
                display: "none",
                fontSize: "22px",
                width: "44px",
                height: "44px",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--line-medium)",
                background: "rgba(255,255,255,0.8)",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--ink-primary)",
                cursor: "pointer",
              }}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* FULL MOBILE OVERLAY DRAWER */}
        {mobileMenuOpen && (
          <div
            className="mobile-menu-drawer"
            style={{
              position: "fixed",
              top: "70px",
              left: 0,
              right: 0,
              bottom: 0,
              height: "calc(100vh - 70px)",
              background: "rgba(247, 244, 238, 0.98)",
              backdropFilter: "blur(24px)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              zIndex: 999,
              animation: "drawerSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both",
              overflowY: "auto",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", paddingTop: "12px" }}>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  fontFamily: "var(--font-serif)",
                  color: pathname === "/" ? "var(--accent-terracotta)" : "var(--ink-primary)",
                  padding: "8px 0",
                  borderBottom: "1px solid var(--line-subtle)",
                }}
              >
                01 / Overview & Home
              </Link>
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  fontFamily: "var(--font-serif)",
                  color: pathname.startsWith("/projects") ? "var(--accent-terracotta)" : "var(--ink-primary)",
                  padding: "8px 0",
                  borderBottom: "1px solid var(--line-subtle)",
                }}
              >
                02 / Selected Retail Work
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  fontFamily: "var(--font-serif)",
                  color: pathname === "/about" ? "var(--accent-terracotta)" : "var(--ink-primary)",
                  padding: "8px 0",
                  borderBottom: "1px solid var(--line-subtle)",
                }}
              >
                03 / My Story & Resume
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  fontFamily: "var(--font-serif)",
                  color: pathname === "/contact" ? "var(--accent-terracotta)" : "var(--ink-primary)",
                  padding: "8px 0",
                  borderBottom: "1px solid var(--line-subtle)",
                }}
              >
                04 / Contact & Inquiries
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingBottom: "24px" }}>
              <a
                href="/resume/Muhammad_Rishad_Resume.pdf"
                className="btn-pill btn-pill-outline"
                style={{ width: "100%", justifyContent: "center", padding: "14px" }}
                download
              >
                <span>Download Resume PDF (145 KB)</span>
                <span>↓</span>
              </a>
              <Link
                href="/contact"
                className="btn-pill btn-pill-primary"
                onClick={() => setMobileMenuOpen(false)}
                style={{ width: "100%", justifyContent: "center", padding: "14px" }}
              >
                <span>Start a Project Discussion ↗</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes drawerSlideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 860px) {
          .nav-links {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
        @media (max-width: 600px) {
          .hide-on-phone {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
