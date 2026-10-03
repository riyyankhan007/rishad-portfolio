import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammad-rishad.com"),
  title: {
    default: "Muhammad Rishad — Retail Interior Designer & Civil Engineer",
    template: "%s | Muhammad Rishad",
  },
  description:
    "Portfolio of Muhammad Rishad, Retail Interior Designer & Civil Engineer based in Bangalore. Specializing in high-end retail space planning, 3D visualization, GFC documentation, and turnkey site execution.",
  keywords: [
    "Retail Interior Designer",
    "Civil Engineer",
    "Bangalore Interior Designer",
    "Retail Space Planning",
    "Store Architecture",
    "GFC Drawings",
    "AutoCAD",
    "Commercial Fit-out",
    "The Bear House",
    "VOX Mumbai",
    "Muhammad Rishad",
  ],
  authors: [{ name: "Muhammad Rishad" }],
  openGraph: {
    title: "Muhammad Rishad — Retail Interior Designer & Civil Engineer",
    description:
      "Crafting immersive retail environments with spatial sensibility and civil engineering precision. Explore flagship retail designs, 3D visualizations, and GFC construction packages.",
    url: "https://muhammad-rishad.com",
    siteName: "Muhammad Rishad Portfolio",
    images: [
      {
        url: "/projects/bear-house-jaipur/01.jpg",
        width: 1200,
        height: 630,
        alt: "The Bear House Flagship Retail Store by Muhammad Rishad",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rishad — Retail Interior Designer & Civil Engineer",
    description:
      "Bridging the art of retail interior design with structural & MEP engineering precision.",
    images: ["/projects/bear-house-jaipur/01.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F2EB",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="site-wrapper">{children}</div>
      </body>
    </html>
  );
}