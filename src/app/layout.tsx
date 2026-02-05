import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enterprise OpenClaw - Cut AI Agent Costs by 97%",
  description: "Stop paying $500/night for AI. Enterprise OpenClaw uses intelligent token optimization and multi-model routing to reduce costs by 97%. Start free.",
  keywords: "AI agent, token optimization, cost reduction, Claude, GPT, multi-agent, open source",
  openGraph: {
    title: "Enterprise OpenClaw - Cut AI Agent Costs by 97%",
    description: "Stop paying $500/night for AI. Intelligent token optimization and multi-model routing.",
    type: "website",
    url: "https://enterprise-openclaw.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise OpenClaw - Cut AI Agent Costs by 97%",
    description: "Stop paying $500/night for AI. Intelligent token optimization and multi-model routing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
