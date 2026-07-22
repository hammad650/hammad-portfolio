import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://myportfoliome.vercel.app"),
  title: "Hammad Zahid | Frontend Developer",
  description:
    "Frontend Developer with 4+ years of experience specializing in React, Next.js, and TypeScript, building responsive and high-performance web applications. Proven track record developing CMS-integrated platforms, admin dashboards, and data-driven interfaces.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "Web Development",
    "Hammad Zahid",
  ],
  authors: [{ name: "Hammad Zahid" }],
  creator: "Hammad Zahid",
  publisher: "Hammad Zahid",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myportfoliome.vercel.app",
    siteName: "Hammad Zahid Portfolio",
    title: "Hammad Zahid | Frontend Developer",
    description:
      "Frontend Developer with 4+ years of experience building responsive, high-performance web applications with React, Next.js, and TypeScript.",
    images: [
      {
        url: "https://myportfoliome.vercel.app/img/hammad.jpeg",
        width: 1200,
        height: 630,
        alt: "Hammad Zahid | Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hammad Zahid | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and TypeScript.",
    images: ["https://myportfoliome.vercel.app/img/hammad.jpeg"],
  },
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
  verification: {
    google: "your-google -verification-code",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Hammad Zahid",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} antialiased`}>
        <main className="font-sans max-w-5xl mx-auto px-4 sm:px-6">
          <Navbar />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
