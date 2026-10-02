import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"Muhammad Rishad — Civil Engineer & Retail Interior Designer",description:"Portfolio of Muhammad Rishad, Civil Engineer and Retail Interior Designer in Bangalore."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}