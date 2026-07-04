import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import ContactProvider from "@/components/ContactProvider";
import CursorWrapper from "@/components/CursorWrapper";
import Analytics from "./Analytics";
import { GoogleAnalytics } from "@next/third-parties/google";
import Nav from "@/components/Nav";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ascending Heavens | Product Engineering Team for Startups",

  description:
    "Ascending Heavens is a product engineering team that helps startups ship software, AI systems, and data infrastructure faster — without hiring a full in-house team.",

  keywords: [
    "Ascending Heavens",
    "product engineering team",
    "startup software development",
    "AI integration for startups",
    "MVP development",
    "SaaS product development",
    "AI systems and RAG pipelines",
    "data infrastructure for startups",
    "product engineering agency",
    "startup engineering partner"
  ],

  authors: [{ name: "Ascending Heavens Team" }],
  creator: "Ascending Heavens",
  metadataBase: new URL("https://ascending-heavens.com/"),

  openGraph: {
    title: "Ascending Heavens | Product Engineering Team for Startups",
    description:
      "A product engineering partner for startups — software, AI systems, and scalable infrastructure, built by a team that owns outcomes.",
    url: "https://ascending-heavens.com/",
    siteName: "Ascending Heavens",
    images: [
      {
        url: "/favicon.ico", 
        width: 1200,
        height: 630,
        alt: "Ascending Heavens — Product Engineering Team for Startups",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ascending Heavens | Product Engineering Team for Startups",
    description:
      "We help startups ship software, AI systems, and data infrastructure faster.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      
      <body className="min-h-full flex flex-col">
        <Analytics />
         <ContactProvider>
          <Nav/>
          <CursorWrapper/>
          {children}
          <WhatsAppFloat/>
        </ContactProvider>
         <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        </body>
    </html>
  );
}
