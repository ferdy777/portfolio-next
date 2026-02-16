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
  title: "Gbenga - Senior Software Engineer",
  description:
    "Portfolio of Gbenga, a Senior Software Engineer specializing in full-stack development, cloud architecture, and system design.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Gbenga", url: "https://yourwebsite.com" }],
  creator: "Gbenga",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Gbenga - Senior Software Engineer",
    description:
      "Portfolio of Gbenga, a Senior Software Engineer specializing in full-stack development.",
    images: [
      {
        url: "https://yourwebsite.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gbenga Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gbenga - Senior Software Engineer",
    description:
      "Portfolio of Gbenga, a Senior Software Engineer specializing in full-stack development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
