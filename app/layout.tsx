import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BRAND } from "@/data/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} | ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Timmitech is a technology and creative studio building web and mobile products, design systems, and brand identities engineered for speed, accessibility, and visual discipline.",
  keywords: [
    "web development",
    "mobile development",
    "UI/UX design",
    "brand identity",
    "Next.js",
    "React",
    "design systems",
    "Timmitech",
  ],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  ),
  openGraph: {
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description:
      "Web and mobile products, design systems, and brand identities engineered for speed, accessibility, and visual discipline.",
    type: "website",
    siteName: BRAND.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description:
      "Web and mobile products, design systems, and brand identities engineered for speed, accessibility, and visual discipline.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg text-ink font-sans`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
