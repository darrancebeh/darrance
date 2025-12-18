import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Catalyst",
  description: "Discretionary momentum in code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans tracking-tight relative overflow-x-hidden`}
      >
        {/* --- LAYER 1: Ambient Background Orbs --- */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          {/* Top Left - Momentum Green Glow */}
          <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-momentum-green/20 rounded-full blur-[120px] mix-blend-multiply opacity-60 animate-blob" />
          
          {/* Top Right - Catalyst Blue Glow */}
          <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-catalyst-blue/20 rounded-full blur-[120px] mix-blend-multiply opacity-60 animate-blob animation-delay-2000" />
          
          {/* Bottom - Subtle Anchor */}
          <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-zinc-200/50 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob animation-delay-4000" />
        </div>

        {/* --- LAYER 2: Noise Texture (The "Paper" feel) --- */}
        <div className="fixed inset-0 z-[-1] bg-noise opacity-50 pointer-events-none" />

        {/* --- LAYER 3: Content --- */}
        <main className="mx-auto max-w-3xl px-6 py-20 md:py-32 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}