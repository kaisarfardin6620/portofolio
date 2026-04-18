import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
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
  title: "Abdullah Kaisar Fardin — AI Developer",
  description:
    "Portfolio of Abdullah Kaisar Fardin (@kaisarfardin6620) — AI developer specializing in Generative AI systems and scalable backend engineering.",
  openGraph: {
    title: "Abdullah Kaisar Fardin — AI Developer",
    description:
      "AI developer specializing in Generative AI systems and scalable backend engineering.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Kaisar Fardin — AI Developer",
    description:
      "AI developer specializing in Generative AI systems and scalable backend engineering.",
    creator: "@kaisarfardin6620",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-grid">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
