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
  title: "Darrance Beh | Quant Trader & CS Student",
  description: "Lancaster University CS student and active quant trader. Founder of Prism Lake. Seeking trading and research roles at quantitative firms and investment banks. Track record: RM600 → 6-figures.",
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
            {/* Top Left - Subtle Green Glow */}
            <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-momentum-green/15 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-blob" />
          
          {/* Top Right - Subtle Warm Accent */}
          <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-accent-warm/12 rounded-full blur-[120px] mix-blend-multiply opacity-40 animate-blob animation-delay-2000" />
          
          {/* Bottom - Warm Cream Base */}
          <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-cream-200/60 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob animation-delay-4000" />
        </div>

        {/* --- LAYER 2: Noise Texture (The "Paper" feel) --- */}
        <div className="fixed inset-0 z-[-1] bg-noise opacity-50 pointer-events-none" />

        {/* --- LAYER 2.5: Floating Glassmorphic Elements --- */}
        <div className="fixed inset-0 z-[0] overflow-hidden pointer-events-none">
          {/* Top Right Glass Card */}
          <div className="absolute top-[15%] right-[5%] w-64 h-40 bg-cream-100/40 backdrop-blur-xl border border-zinc-900/10 rounded-2xl rotate-12 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)]" />
          
          {/* Left Side Glass Accent */}
          <div className="absolute top-[45%] left-[-5%] w-48 h-48 bg-white/30 backdrop-blur-2xl border border-zinc-900/5 rounded-full shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)]" />
          
          {/* Bottom Right Glass Card */}
          <div className="absolute bottom-[20%] right-[8%] w-56 h-32 bg-cream-100/35 backdrop-blur-xl border border-zinc-900/8 rounded-2xl -rotate-6 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)]" />
          
          {/* Mid-left Glass Square */}
          <div className="absolute top-[60%] left-[10%] w-32 h-32 bg-white/25 backdrop-blur-2xl border border-zinc-900/10 rounded-xl rotate-45 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)]" />
        </div>

        {/* --- LAYER 3: Content --- */}
        <main className="mx-auto max-w-3xl px-6 py-20 md:py-32 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}