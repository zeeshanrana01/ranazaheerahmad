import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AiCanvasBackground from "@/components/AiCanvasBackground";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ranazaheerahmad.vercel.app"),
  title: "Engr. Rana Zaheer Ahmad Shakir | Electronics & IT Network Engineer",
  description:
    "Official portfolio of Engr. Rana Zaheer Ahmad Shakir. 15+ Years Experienced Electronics & IT Systems Supervisor at Saudi Binladin Group (Al Safa & Mina Royal Palaces Makkah). Saudi Council of Engineers (SCE) Verified & NEBOSH Level 7 H&S Certified.",
  keywords: [
    "Rana Zaheer Ahmad Shakir",
    "Electronics Engineer",
    "IT Computer Network Engineer",
    "Saudi Binladin Group",
    "Al Safa Royal Palace Makkah",
    "Mina Royal Palace",
    "Data Center MDF IDF",
    "Fire Alarm System DN24",
    "FM200 Fire Suppression",
    "CCTV Surveillance Makkah",
    "Saudi Council of Engineers",
    "NEBOSH H&S"
  ],
  authors: [{ name: "Rana Zaheer Ahmad Shakir" }],
  openGraph: {
    title: "Engr. Rana Zaheer Ahmad Shakir | Electronics & IT Network Engineer",
    description:
      "15+ Years Experienced Electronics & IT Systems Supervisor at Saudi Binladin Group (Al Safa & Mina Royal Palaces Makkah). Verified Saudi Council of Engineers & NEBOSH Certified.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/avatar_fb.jpg",
        width: 720,
        height: 720,
        alt: "Engr. Rana Zaheer Ahmad Shakir"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-[#040816] text-slate-200 antialiased selection:bg-blue-600 selection:text-white overflow-x-hidden min-h-screen ambient-glow relative">
        {/* Dynamic Executive AI Background Canvas */}
        <AiCanvasBackground />

        {/* Top Scroll Indicator */}
        <ScrollProgressBar />

        {/* Page Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
