"use client";

import React from "react";

interface BrandItem {
  id: string;
  name: string;
  category: string;
  scope: string;
  svg: React.ReactNode;
}

export default function BrandLogos() {
  const brands: BrandItem[] = [
    {
      id: "aditya-birla",
      name: "Aditya Birla Group",
      category: "Retail Outlets",
      scope: "Store Planning & AutoCAD Drafting",
      svg: (
        <svg
          viewBox="0 0 170 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "26px", width: "auto" }}
          aria-label="Aditya Birla Group Logo"
        >
          {/* Aditya Birla Rising Sun Geometric Crest */}
          <g fill="#111111">
            <circle cx="16" cy="17" r="4.2" />
            <path d="M16 5.5L17.5 10.5H14.5L16 5.5Z" />
            <path d="M16 28.5L17.5 23.5H14.5L16 28.5Z" />
            <path d="M5.5 17L10.5 15.5V18.5L5.5 17Z" />
            <path d="M26.5 17L21.5 15.5V18.5L26.5 17Z" />
            <path d="M8.5 9.5L12.5 12.5L11 14L7 11L8.5 9.5Z" />
            <path d="M23.5 24.5L19.5 21.5L21 20L25 23L23.5 24.5Z" />
            <path d="M8.5 24.5L12.5 21.5L11 20L7 23L8.5 24.5Z" />
            <path d="M23.5 9.5L19.5 12.5L21 14L25 11L23.5 9.5Z" />
          </g>
          {/* Typography */}
          <text
            x="36"
            y="15"
            fill="#111111"
            fontFamily="var(--font-serif), Georgia, serif"
            fontSize="10.5"
            fontWeight="700"
            letterSpacing="0.08em"
          >
            ADITYA BIRLA
          </text>
          <text
            x="36"
            y="25"
            fill="#111111"
            fontFamily="var(--font-sans), sans-serif"
            fontSize="8"
            fontWeight="600"
            letterSpacing="0.28em"
          >
            GROUP
          </text>
        </svg>
      ),
    },
    {
      id: "the-bear-house",
      name: "The Bear House",
      category: "Menswear Flagships",
      scope: "Jaipur & M3M Paragon Store Design",
      svg: (
        <svg
          viewBox="0 0 160 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "26px", width: "auto" }}
          aria-label="The Bear House Logo"
        >
          {/* The Bear Silhouette */}
          <g fill="#111111">
            <path d="M19.5 12c-0.8-1.5-2.2-2.2-3.8-2.2 -0.8 0-1.8 0.4-2.5 1 -0.5-0.7-1.3-1-2.2-1 -1.4 0-2.6 0.8-3.1 2 -0.6 0-1.4 0.3-1.9 0.8 -0.8 0.8-0.9 2-0.3 3 0.2 0.3 0.1 0.7-0.1 1 -0.8 1.1-1.3 2.4-1.3 3.8 0 2 1.1 3.8 2.8 4.7 0.4 0.2 0.7 0.7 0.7 1.2v2c0 0.8 0.7 1.5 1.5 1.5h1.2c0.8 0 1.5-0.7 1.5-1.5v-1.5h3v1.5c0 0.8 0.7 1.5 1.5 1.5h1.2c0.8 0 1.5-0.7 1.5-1.5v-2.2c0-0.4 0.2-0.8 0.6-1 1.7-1 2.8-2.8 2.8-4.8 0-1.4-0.5-2.7-1.4-3.7 0.3-0.7 0.2-1.6-0.3-2.3z" />
          </g>
          {/* Typography */}
          <text
            x="32"
            y="15"
            fill="#111111"
            fontFamily="var(--font-sans), sans-serif"
            fontSize="8"
            fontWeight="700"
            letterSpacing="0.2em"
          >
            THE
          </text>
          <text
            x="32"
            y="26"
            fill="#111111"
            fontFamily="var(--font-sans), sans-serif"
            fontSize="11.5"
            fontWeight="800"
            letterSpacing="0.12em"
          >
            BEAR HOUSE
          </text>
        </svg>
      ),
    },
    {
      id: "vox",
      name: "VOX",
      category: "Architectural Systems",
      scope: "Turquoise Mumbai Showroom",
      svg: (
        <svg
          viewBox="0 0 95 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "26px", width: "auto" }}
          aria-label="VOX Logo"
        >
          {/* Bold European Geometric Typography */}
          <g fill="#111111">
            {/* V */}
            <path d="M5 6.5h7.2l6.2 15.5 6.2-15.5h7.2l-10.2 23h-6.2L5 6.5z" />
            {/* O */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48 5c7.2 0 13 5.8 13 13s-5.8 13-13 13-13-5.8-13-13 5.8-13 13-13zm0 6.5c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5-2.9-6.5-6.5-6.5z"
            />
            {/* X */}
            <path d="M66 6.5h7.5l5.5 8 5.5-8h7.5l-8.8 11.5 9.2 11.5h-7.8l-5.6-8.2-5.6 8.2h-7.8l9.2-11.5L66 6.5z" />
          </g>
        </svg>
      ),
    },
    {
      id: "furlenco",
      name: "Furlenco",
      category: "Furniture & Spaces",
      scope: "Retail Interior Experience",
      svg: (
        <svg
          viewBox="0 0 135 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "24px", width: "auto" }}
          aria-label="Furlenco Logo"
        >
          {/* Distinctive lowercase curved wordmark */}
          <text
            x="4"
            y="23"
            fill="#111111"
            fontFamily="var(--font-sans), 'Montserrat', sans-serif"
            fontSize="18.5"
            fontWeight="800"
            letterSpacing="-0.03em"
          >
            furlenco
          </text>
          <circle cx="127" cy="10" r="3" fill="#111111" />
        </svg>
      ),
    },
    {
      id: "nobero",
      name: "Nobero",
      category: "Athleisure Retail",
      scope: "Store Circulation & Fixtures",
      svg: (
        <svg
          viewBox="0 0 120 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "22px", width: "auto" }}
          aria-label="Nobero Logo"
        >
          {/* Bold geometric modern sans */}
          <text
            x="2"
            y="23"
            fill="#111111"
            fontFamily="var(--font-sans), 'Outfit', sans-serif"
            fontSize="16"
            fontWeight="900"
            letterSpacing="0.16em"
          >
            NOBERO
          </text>
        </svg>
      ),
    },
    {
      id: "blr-airport",
      name: "BLR Airport Terminal 2",
      category: "Aviation Infrastructure",
      scope: "Commercial F&B Fit-Outs",
      svg: (
        <svg
          viewBox="0 0 160 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "28px", width: "auto" }}
          aria-label="BLR Airport Terminal 2 Logo"
        >
          {/* Aerodynamic flight crest */}
          <g fill="#111111">
            <path d="M6 17c5-7 12-10 20-8 -3 4-4 8-4 12 -6-1-11-2-16-4z" opacity="0.9" />
            <path d="M12 21c4-4 9-6 15-5 -2 3-3 6-3 9 -5-1-8-2-12-4z" />
          </g>
          <text
            x="36"
            y="16"
            fill="#111111"
            fontFamily="var(--font-sans), sans-serif"
            fontSize="11"
            fontWeight="800"
            letterSpacing="0.08em"
          >
            BLR AIRPORT
          </text>
          <text
            x="36"
            y="26"
            fill="#111111"
            fontFamily="var(--font-mono), monospace"
            fontSize="7.5"
            fontWeight="600"
            letterSpacing="0.18em"
          >
            TERMINAL 2 FIT-OUTS
          </text>
        </svg>
      ),
    },
    {
      id: "bombay-brasserie",
      name: "Bombay Brasserie",
      category: "Hospitality Fit-Out",
      scope: "BLR T2 On-Site Engineering",
      svg: (
        <svg
          viewBox="0 0 165 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "23px", width: "auto" }}
          aria-label="Bombay Brasserie Logo"
        >
          <text
            x="2"
            y="15"
            fill="#111111"
            fontFamily="var(--font-serif), 'Playfair Display', Georgia, serif"
            fontSize="11"
            fontWeight="700"
            letterSpacing="0.14em"
          >
            BOMBAY
          </text>
          <text
            x="2"
            y="26"
            fill="#111111"
            fontFamily="var(--font-sans), sans-serif"
            fontSize="8"
            fontWeight="700"
            letterSpacing="0.32em"
          >
            BRASSERIE
          </text>
          <line x1="78" y1="13" x2="160" y2="13" stroke="#111111" strokeWidth="1" />
          <line x1="95" y1="23" x2="160" y2="23" stroke="#111111" strokeWidth="0.8" />
        </svg>
      ),
    },
    {
      id: "wendys",
      name: "Wendy's",
      category: "International QSR",
      scope: "Commercial Airport Venue",
      svg: (
        <svg
          viewBox="0 0 115 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "24px", width: "auto" }}
          aria-label="Wendy's Logo"
        >
          <text
            x="4"
            y="23"
            fill="#111111"
            fontFamily="var(--font-serif), 'Georgia', serif"
            fontSize="18"
            fontWeight="900"
            fontStyle="italic"
            letterSpacing="-0.02em"
          >
            Wendy&apos;s
          </text>
        </svg>
      ),
    },
  ];

  return (
    <div className="brand-logos-container">
      <div className="brand-logos-header">
        <span className="brand-logos-eyebrow">
          CLIENT BRANDS &amp; VENUES I HAVE DESIGNED / CONSTRUCTED
        </span>
        <span className="brand-logos-count">8 PREMIER RETAIL &amp; COMMERCIAL CLIENTS</span>
      </div>

      <div className="brand-logos-grid">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="brand-logo-card"
            title={`${brand.name} — ${brand.scope}`}
          >
            <div className="brand-logo-mark">{brand.svg}</div>
            <div className="brand-logo-meta">
              <span className="brand-logo-name">{brand.name}</span>
              <span className="brand-logo-scope">{brand.scope}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
