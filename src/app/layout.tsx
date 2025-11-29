import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tiago Santos | Dev Front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
