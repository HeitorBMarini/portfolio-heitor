import type { Metadata } from "next";
import { DM_Serif_Display, Manrope, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heitor Borba Marini · Desenvolvedor Full Stack",
  description:
    "Desenvolvedor full stack em São Paulo. Construo portais, painéis e integrações entre ERP e CRM com Next.js, React, TypeScript e Node.js.",
  openGraph: {
    title: "Heitor Borba Marini · Desenvolvedor Full Stack",
    description:
      "Portais, painéis e integrações entre ERP e CRM com Next.js, React, TypeScript e Node.js.",
    type: "website",
    images: ["https://avatars.githubusercontent.com/u/123084599?v=4"],
  },
};

// Aplica o tema salvo antes da primeira pintura, para não piscar.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      suppressHydrationWarning
      className={`${manrope.variable} ${dmSerif.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grain antialiased font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
