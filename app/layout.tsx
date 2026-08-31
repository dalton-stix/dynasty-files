import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://dynasty-files.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Dynasty Files",
    template: "%s — The Dynasty Files",
  },
  description:
    "Same league. New receipts. The weekly newsletter of a 12-team dynasty fantasy football league running since 2019.",
  openGraph: {
    title: "The Dynasty Files",
    description:
      "Same league. New receipts. The weekly newsletter of a 12-team dynasty fantasy football league running since 2019.",
    siteName: "The Dynasty Files",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "The Dynasty Files",
    description: "Same league. New receipts.",
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
      className={`${fraunces.variable} ${inter.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
