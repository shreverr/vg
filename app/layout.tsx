import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
});

export const metadata: Metadata = {
  title: "VG Conditioning — Cohort-based CSCS Prep",
  description:
    "VG Conditioning is a coached, cohort-based prep program for the NSCA Certified Strength and Conditioning Specialist exam. Built by S&C pros, for S&C pros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[--bg] text-[--fg] font-sans">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
