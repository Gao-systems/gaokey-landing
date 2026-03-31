import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Gaokey — Sovereign Identity Wallet",
  description:
    "Your keys. Your identity. Your internet. Non-custodial identity, payment signing, and AI agent authority for Gao Internet.",
  metadataBase: new URL("https://key.gao.global"),
  openGraph: {
    title: "Gaokey — Sovereign Identity Wallet",
    description: "Your keys. Your identity. Your internet.",
    url: "https://key.gao.global",
    siteName: "Gaokey",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaokey — Sovereign Identity Wallet",
    description: "Your keys. Your identity. Your internet.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0d0d1a] text-[#f0f0f5]">
        {children}
      </body>
    </html>
  );
}
