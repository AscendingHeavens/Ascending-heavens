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
  title: "Ascending Heavens | Website Development & Digital Solutions Agency",
  
  description:
    "Ascending Heavens is a modern website development agency delivering high-performance websites, scalable web apps, and digital solutions to help businesses grow online.",

  keywords: [
    "Ascending Heavens",
    "website development",
    "web development agency",
    "Next.js development",
    "frontend development",
    "full stack development",
    "custom websites",
    "digital solutions agency",
    "web design India",
    "SEO optimized websites"
  ],

  authors: [{ name: "Ascending Heavens Team" }],
  creator: "Ascending Heavens",
  metadataBase: new URL("https://ascending-heavens.com/"),

  openGraph: {
    title: "Ascending Heavens | Website Development Agency",
    description:
      "Build powerful, scalable, and visually stunning websites with Ascending Heavens.",
    url: "https://ascending-heavens.com/",
    siteName: "Ascending Heavens",
    images: [
      {
        url: "/favicon.ico", 
        width: 1200,
        height: 630,
        alt: "Ascending Heavens Website Development Agency",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ascending Heavens | Website Development Agency",
    description:
      "We craft high-performance websites and digital experiences.",
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
