import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Wayloom.ai | AI-Powered Brain Health Monitoring Platform",
  description: "Next-generation cognitive assessment technology. Clinical-grade dementia screening through smartphone devices. Trusted by healthcare professionals and researchers worldwide.",
  keywords: "brain health, dementia screening, cognitive assessment, AI healthcare, digital biomarkers, neuroscience",
  openGraph: {
    title: "Wayloom.ai - Brain Health Monitoring Platform",
    description: "AI-powered cognitive assessment technology delivering clinical-grade dementia screening",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
