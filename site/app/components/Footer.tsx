import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "var(--accent-terracotta)",
                  color: "#fff",
                  padding: "4px 10px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "11px",
                  fontWeight: 600,
                }}
              >
                AVAILABLE FOR NEW PROJECTS
              </span>
            </div>
            <h3>Muhammad Rishad</h3>
            <p>
              Civil Engineering and Retail Designer based in Bangalore.
              Transforming commercial footprints into elevated brand environments
              grounded in AutoCAD precision, BOQ rigor, and practical site execution.
            </p>
          </div>

          <div className="footer-links-col">
            <h4>Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <Link href="/">Overview</Link>
              </li>
              <li>
                <Link href="/projects">Selected Work</Link>
              </li>
              <li>
                <Link href="/about">Story and Resume</Link>
              </li>
              <li>
                <Link href="/contact">Inquiries &amp; Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Direct Connection</h4>
            <ul className="footer-links-list">
              <li>
                <a href="mailto:shaikh.rishad7@gmail.com">
                  shaikh.rishad7@gmail.com ↗
                </a>
              </li>
              <li>
                <a href="mailto:rishad.muhammad313@gmail.com">
                  rishad.muhammad313@gmail.com ↗
                </a>
              </li>
              <li>
                <a href="tel:+919182397856">+91 9182397856 ↗</a>
              </li>
              <li>
                <a
                  href="https://wa.me/919182397856?text=Hi%20Muhammad%20Rishad,%20I%20saw%20your%20retail%20portfolio%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Quick Chat ↗
                </a>
              </li>
              <li>
                <span style={{ color: "#9e978c", fontSize: "14px" }}>
                  Bangalore, Karnataka, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} Muhammad Rishad. Civil Engineering and Retail Designer.
          </div>
          <div style={{ display: "flex", gap: "24px", fontFamily: "var(--font-mono)", fontSize: "11px" }}>
            <span>AUTOCAD · REVIT · BIM</span>
            <span>BLR · T2 ALUMNI</span>
            <span>GERMAN PATENT HOLDER</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
