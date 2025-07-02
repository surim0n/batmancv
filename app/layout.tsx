import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "BATUX – Bruce Wayne UX Resume",
  description: "Principal UX Designer resume for Bruce Wayne (Batman)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black text-gray-100">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
