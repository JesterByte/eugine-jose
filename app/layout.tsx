import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eugine-jose.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: "Eugine Jose | Software Engineer",
  keywords: [
    "Software Engineer",
    "Full-stack Software Engineer",
    "Application Modernization",
    "Laravel",
    "Flutter",
    "C#",
    ".NET",
    "MVVM",
    "Offline-first Applications",
  ],
  authors: [{ name: "Eugine Jose" }],
  description:
    "Backend-minded full-stack software engineer focused on application modernization, Flutter, Laravel, and .NET. Building maintainable mobile, web, and desktop software.",
  openGraph: {
    title: "Eugine Jose | Software Engineer & Application Modernization",
    description:
      "Modernizing legacy applications and building reliable mobile, web, and desktop software.",
    url: "https://eugine-jose.vercel.app",
    siteName: "Eugine Jose Portfolio",
    images: [
      {
        url: "/preview.png",
        alt: "Eugine Jose Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eugine Jose | Software Engineer",
    description:
      "Application modernization, Flutter, Laravel, and .NET engineering.",
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
          <main id="main-content" className="grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
