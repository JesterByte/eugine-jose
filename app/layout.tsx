import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ParticleBackground from "@/components/ParticleBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://eugine-jose.vercel.app",
  ),
  title: "Eugine Jose – Web & Mobile Developer",
  keywords: [
    "Software Engineer",
    "Full-stack Developer Philippines",
    "Laravel",
    "Flutter",
    "Next.js",
    "Bitrix24 API",
  ],
  authors: [{ name: "Eugine Jose" }],
  description:
    "Software Engineer specializing in Backend Reliability, Business Automation, and Mobile Development. Awarded 'Thesis of the Year' and 'Web Developer of the Year.'",
  openGraph: {
    title: "Eugine Jose | Software Engineer",
    description:
      "Architecting reliable backend systems and fluid mobile experiences.",
    url: "https://your-portfolio-domain.com", // Update this after deployment
    siteName: "Eugine Jose Portfolio",
    images: [
      {
        url: "/preview.png", // Create a 1200x630 image and put it in /public
        width: 1200,
        height: 630,
        alt: "Eugine Jose Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eugine Jose | Software Engineer",
    description: "Building the future with Next.js, Flutter, and Laravel.",
    images: ["/preview.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        href: "/favicon.svg",
      },
    ],
    apple: [
      {
        url: "/favicon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground min-h-screen flex flex-col scroll-smooth`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgressBar />
          <ParticleBackground />
          <Header />
          <main className="grow" role="main">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
