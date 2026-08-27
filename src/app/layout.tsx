import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
  display: "swap",
});

const SITE = "https://darrancebeh.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Darrance Beh — Strategy, Data & Commercial Analytics",
    template: "%s · Darrance Beh",
  },
  description:
    "Darrance Beh Heng Shek turns data into commercial decisions. Incoming Strategy & Operations at PwC South East Asia Consulting; Data Science at Citi; ex-L'Oréal Malaysia–Singapore.",
  keywords: [
    "Darrance Beh",
    "strategy consulting",
    "strategy and operations",
    "commercial analytics",
    "data scientist",
    "PwC",
    "Citi",
    "L'Oreal",
    "Malaysia",
  ],
  authors: [{ name: "Darrance Beh Heng Shek", url: SITE }],
  creator: "Darrance Beh Heng Shek",
  openGraph: {
    type: "website",
    url: SITE,
    title: "Darrance Beh — Strategy, Data & Commercial Analytics",
    description:
      "Turning data into commercial decisions. Incoming Strategy & Operations at PwC South East Asia Consulting; Data Science at Citi; ex-L'Oréal Malaysia–Singapore.",
    siteName: "Darrance Beh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darrance Beh — Strategy, Data & Commercial Analytics",
    description:
      "Turning data into commercial decisions. Incoming Strategy & Operations at PwC South East Asia Consulting; Data Science at Citi; ex-L'Oréal Malaysia–Singapore.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable} ${instrument.variable} h-full`}
    >
      <body className="grain min-h-full bg-ink text-bone antialiased">{children}</body>
    </html>
  );
}
