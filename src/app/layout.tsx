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
  title: "Julius Adereti | Lead Full-Stack Engineer & DevOps Specialist",
  description: "Official portfolio of Julius Adereti (Jhuleebaba) - Lead Full-Stack Software Engineer & DevOps Architect. Creator of Beze Exam Suite, Bezalel SaaS, and custom school portals.",
  keywords: [
    "Julius Adereti",
    "Jhuleebaba",
    "Julius Adereti Software Engineer",
    "Julius Adereti Python",
    "Julius Adereti DevOps",
    "Julius Adereti Portfolio",
    "Julius Adereti Developer",
    "Beze Exam Suite",
    "Bezalel SaaS",
    "School Portal",
    "FastAPI Developer",
    "Python Developer Nigeria",
    "Next.js Developer Nigeria"
  ],
  authors: [{ name: "Julius Adereti", url: "https://github.com/Jhuleebaba" }],
  creator: "Julius Adereti",
  publisher: "Julius Adereti",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Jhuleebaba",
    title: "Julius Adereti | Lead Full-Stack Engineer & DevOps Specialist",
    description: "Official portfolio of Julius Adereti (Jhuleebaba) - Lead Full-Stack Software Engineer & DevOps Architect. Creator of Beze Exam Suite, Bezalel SaaS, and custom school portals.",
    siteName: "Julius Adereti Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julius Adereti | Lead Full-Stack Engineer & DevOps Specialist",
    description: "Official portfolio of Julius Adereti (Jhuleebaba) - Lead Full-Stack Software Engineer & DevOps Architect. Creator of Beze Exam Suite, Bezalel SaaS, and custom school portals.",
    creator: "@jhulee_1",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Julius Adereti",
  "alternateName": "Jhuleebaba",
  "url": "https://github.com/Jhuleebaba",
  "sameAs": [
    "https://www.linkedin.com/in/julius-adereti-682308178",
    "https://x.com/jhulee_1",
    "https://www.facebook.com/julius.aderetiadeyemi",
    "https://github.com/Jhuleebaba"
  ],
  "jobTitle": "Lead Full-Stack Software Engineer & DevOps Architect",
  "knowsAbout": [
    "Software Engineering",
    "DevOps",
    "Python",
    "FastAPI",
    "Next.js",
    "React Native",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "Celery",
    "Redis"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cyber-bg text-slate-100 antialiased scanlines">
        {children}
      </body>
    </html>
  );
}
