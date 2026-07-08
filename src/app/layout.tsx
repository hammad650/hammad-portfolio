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
  title: "Muhammad Talha Waseem | Senior Full-Stack Engineer",
  description:
    "Senior Full-Stack Engineer with 5+ years of experience delivering scalable, high-performance applications across web and mobile. Expert in React, Next.js, Node.js, and Flutter with hands-on AI/LLM integration, shipping complex products across Fintech, Healthcare, and Sustainability.",
  keywords: [
    "Senior Full-Stack Engineer",
    "Full-stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Flutter",
    "TypeScript",
    "AI/LLM Integration",
    "LangChain",
    "Web Development",
    "Mobile Development",
    "Muhammad Talha Waseem",
  ],
  authors: [{ name: "Muhammad Talha Waseem" }],
  creator: "Muhammad Talha Waseem",
  publisher: "Muhammad Talha Waseem",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myportfoliome.vercel.app",
    siteName: "Muhammad Talha Waseem Portfolio",
    title: "Muhammad Talha Waseem | Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer with 5+ years of experience delivering scalable web & mobile products with React, Next.js, Node.js, and Flutter, plus hands-on AI/LLM integration.",
    images: [
      {
        url: "https://myportfoliome.vercel.app/DP.jpeg",
        width: 1200,
        height: 630,
        alt: "Muhammad Talha Waseem | Senior Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Talha Waseem | Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer expert in React, Next.js, Node.js, and Flutter with hands-on AI/LLM integration.",
    images: ["https://myportfoliome.vercel.app/DP.jpeg"],
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
    title: "Muhammad Talha Waseem",
  },
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Muhammad Talha Waseem",
      url: "https://myportfoliome.vercel.app",
      image: "https://myportfoliome.vercel.app/DP.jpeg",
      sameAs: ["https://linkedin.com/in/iammtw"],
      jobTitle: "Senior Full-Stack Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Rayymen Technologies",
      },
    }),
  }}
/>;

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
