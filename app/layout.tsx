import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import {
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
  PORTFOLIO_TITLE,
  SITE_URL,
} from "@/lib/site-identity";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: {
    default: PORTFOLIO_TITLE,
    template: "%s | Eugine Jose",
  },
  keywords: [
    "Application Modernization",
    "Flutter",
    "Laravel",
    ".NET",
    "TypeScript",
    "Software Engineer",
    "Offline-first Applications",
  ],
  authors: [{ name: "Eugine Jose" }],
  description:
    "Application modernization with Flutter, Laravel, and .NET, focused on practical, maintainable software across mobile, web, and desktop.",
  openGraph: {
    title: PORTFOLIO_TITLE,
    description:
      "Application modernization with Flutter, Laravel, .NET, and TypeScript across mobile, web, and desktop.",
    url: `${SITE_URL}/`,
    siteName: "Eugine Jose Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Eugine Jose — Software Engineer specializing in application modernization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PORTFOLIO_TITLE,
    description:
      "Application modernization, Flutter, Laravel, and .NET engineering.",
    images: [
      {
        url: "/opengraph-image",
        alt: "Eugine Jose — Software Engineer specializing in application modernization",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
      },
    ],
    apple: [
      {
        url: "/favicon.svg",
      },
    ],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eugine Jose",
  jobTitle: "Software Engineer",
  url: `${SITE_URL}/`,
  sameAs: [GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-md bg-background px-4 py-2 text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgressBar />
          <Header />
          <main id="main-content" className="grow" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        {process.env.VERCEL === "1" && <Analytics />}
      </body>
    </html>
  );
}
