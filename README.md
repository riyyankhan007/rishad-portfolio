# Muhammad Rishad — Portfolio & Technical Archive

An architecture, retail interior design, and civil engineering portfolio for **Muhammad Rishad** — Civil Engineer & Retail Designer. Built with a bespoke editorial aesthetic that reflects both high-end retail visual design and precision on-site engineering execution.

---

## Overview

Muhammad Rishad operates at the intersection of engineering rigor, luxury retail design, and material innovation. Based in Bangalore, he manages the end-to-end retail pipeline across space planning, 3D visualization, GFC/construction documentation, MEP coordination, BOQ preparation, and on-site QC execution.

### Key Highlights & Credentials
- **German Utility Model Holder**: Registered German Utility Model for an eco-friendly composite material alternative to single-use plastics (*DPMA Registration No. 20 2022 106 106*).
- **CSIR National Award**: First Prize Winner awarded by CSIR-SERC Chennai under India's G20 Presidency Initiative.
- **Autodesk ATC Certified**: BIM Revit Architecture & Revit Structure.
- **40+ Retail Stores**: Adapted design, services, and construction details across commercial fit-outs and retail spaces for Aditya Birla Group, VOX, Sureena Chowdhri, The Bear House, Sleepwell, and Furlenco.

---

## Featured Projects

1. **VOX Turquoise Mumbai Experience Center (471 SFT)**
   - Material studio & experience center showcasing VOX architectural wall and ceiling systems.
   - Comprehensive GFC packages, joinery details, and lighting layout.

2. **The Bear House — Pacific Mall, Jaipur (1,916 SQ FT)**
   - Complete retail store space planning, elevation drafting, and MEP coordination.
   - High-traffic customer circulation flow and custom merchandising fixtures.

3. **The Bear House — M3M Paragon 57**
   - Structural mezzanine level planning, minimalist facade design, and execution documentation.

4. **Sureena Chowdhri — Flagship Store, Jaipur (957 SFT)**
   - Luxury ethnic couture retail boutique blending traditional craftsmanship with contemporary retail spatial design.

5. **Intellectual Property & Sustainable Materials**
   - Agro-waste circular composite research and registered German DPMA Utility Model.

---

## Tech Stack & Architecture

- **Framework**: Next.js 15 (App Router, Server Components & Static Site Generation)
- **Language**: TypeScript
- **Styling**: Handcrafted Vanilla CSS Design System (Custom typography tokens, warm architectural neutrals, glassmorphism, responsive fluid typography)
- **Interactive Components**:
  - `InteractiveResume`: Multi-tab interactive career manifesto, experience timeline, IP & awards, Autodesk certifications, and verified skill matrix.
  - Interactive PDF viewers and drawing set downloads.
  - Responsive mobile drawer navigation and touch-optimized galleries.
- **Deployment**: Vercel / Node.js static export ready

---

## Project Structure

```text
rishad_potfolio_2/
├── portfolio-assets/                 # Authoritative source files & raw media
│   ├── bear-house-jaipur/           # GFC & MEP PDF drawing packages
│   ├── bear-house-m3m/              # Drawing sets & layout plans
│   ├── sureena-chowdhri/            # GFC sets & concept presentations
│   ├── vox-mumbai/                  # Full GFC drawing packages
│   ├── certifications/              # Autodesk, CSIR, and university certificates
│   ├── Patent/                      # German DPMA utility model documents
│   └── resume/                      # Latest authoritative resume PDF
│
├── site/                            # Production Next.js web application
│   ├── app/
│   │   ├── about/                   # Professional journey & personal manifesto
│   │   ├── contact/                 # Contact channels & credential requests
│   │   ├── ip/                      # Dedicated German IP & CSIR research page
│   │   ├── patents/                 # Aliased route for patents & research
│   │   ├── projects/                # Filterable retail project showcase
│   │   │   └── [slug]/              # Detailed case study & drawing pages
│   │   ├── components/              # Reusable UI components (Navbar, Footer, InteractiveResume)
│   │   ├── globals.css              # Editorial architectural styling & tokens
│   │   ├── layout.tsx               # Root layout, Google Fonts (Playfair + Inter + JetBrains Mono)
│   │   └── page.tsx                 # Homepage overview & interactive portfolio
│   ├── public/                      # Web-optimized assets, drawing PDFs, and resume
│   └── package.json
│
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Running Locally

```bash
# Navigate to the website workspace
cd site

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
cd site
npm run build
npm run start
```

---

## Authoritative Documentation Standards

- All dates, qualifications, project scopes, and credentials reflect verified source documentation from Muhammad Rishad's official curriculum vitae and DPMA/CSIR certificates.
- Latest Resume PDF is stored at `site/public/resume/Muhammad_Rishad_Resume.pdf` and directly downloadable from all site navigation endpoints.
