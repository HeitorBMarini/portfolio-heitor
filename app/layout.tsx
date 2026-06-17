import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Heitor Borba Marini — Full Stack Developer",
  description:
    "Portfólio de Heitor Borba Marini, Full Stack Developer baseado em São Paulo, Brasil. Especialista em Next.js, React, TypeScript e Node.js.",
  openGraph: {
    title: "Heitor Borba Marini — Full Stack Developer",
    description:
      "Full Stack Developer baseado em São Paulo. Construo interfaces modernas, APIs robustas e sistemas integrados.",
    type: "website",
    images: ["https://avatars.githubusercontent.com/u/123084599?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
