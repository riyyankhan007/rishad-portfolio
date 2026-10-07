import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammad-rishad.com"),
  title: {
    default: "Muhammad Rishad — Civil Engineering and Retail Designer",
    template: "%s | Muhammad Rishad",
  },
  description:
    "Portfolio of Muhammad Rishad, Civil Engineering and Retail Designer based in Bangalore. Specializing in retail space planning, 3D visualization, spatial design, project management, QA/QC, and site execution.",
  keywords: [
    "Muhammad Rishad",
    "Civil Engineering and Retail Designer",
    "Civil Engineering",
    "Retail Design",
    "Spatial Design",
    "Interior Design",
    "Store Architecture",
    "AutoCAD",
    "Revit",
    "Commercial Fit-out",
  ],
  authors: [{ name: "Muhammad Rishad" }],
  openGraph: {
    title: "Muhammad Rishad — Civil Engineering and Retail Designer",
    description:
      "Crafting immersive retail environments with spatial sensibility and civil engineering precision. Explore flagship retail designs, 3D visualizations, and turnkey execution.",
    url: "https://muhammad-rishad.com",
    siteName: "Muhammad Rishad Portfolio",
    images: [
      {
        url: "/projects/sureena-chowdhri/slides/slide-07.jpg",
        width: 1200,
        height: 630,
        alt: "Sureena Chowdhri Flagship Store by Muhammad Rishad",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rishad — Civil Engineering and Retail Designer",
    description:
      "Bridging the art of retail space planning and interior design with civil engineering precision.",
    images: ["/projects/sureena-chowdhri/slides/slide-07.jpg"],
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