import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, localBusinessSchema, websiteSchema, SITE_URL } from "@/lib/seo";
import { company } from "@/data/company";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s`,
  },
  description: `${company.name} provides kitchen remodeling, bathroom remodeling, painting, flooring, drywall repair, and demolition across the Dallas–Fort Worth Metroplex. Free estimates: ${company.phoneDisplay}.`,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      {/*
        Plain HTML <script> tags (not next/script) so they're literal,
        static markup in the server-rendered <head> -- required for Google
        Search Console's "Google Analytics" domain-verification method,
        which scans raw HTML and won't see anything next/script injects at
        runtime, even with strategy="beforeInteractive".
      */}
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SZN03QS8DJ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-SZN03QS8DJ');`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd data={[organizationSchema(), localBusinessSchema(), websiteSchema()]} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-primary"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}
