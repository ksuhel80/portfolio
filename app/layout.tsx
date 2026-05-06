import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BFCacheHandler from "@/components/BFCacheHandler";
import { personalInfo } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${personalInfo.name} - Full Stack AI Developer`,
  description: "Full Stack Developer specializing in AI-powered web applications. Building with React, Next.js, Python and LangChain. Available for freelance projects.",
  keywords: "AI developer, full stack developer, Next.js, React, Python, LangChain, chatbot developer, freelance",
  openGraph: {
    title: `${personalInfo.name} - Full Stack AI Developer`,
    description: "Building intelligent web applications with React, Next.js, Python and AI",
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    siteName: personalInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - Full Stack AI Developer`,
    description: "Building intelligent web applications with React, Next.js, Python and AI",
  },
  alternates: {
    canonical: "https://yourportfolio.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BFCacheHandler />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
