import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Noto_Sans_Bengali } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { generateOrganizationSchema } from "@/lib/schema"
import { CLINIC } from "@/data/clinic"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-bengali",
})

export const metadata: Metadata = {
  title: "Nirapod Laser Physiotherapy Center - Expert Physiotherapy in Dhaka",
  description:
    "Advanced physiotherapy and laser treatment center in Dhaka, Bangladesh. Expert care for neurological, orthopedic, and geriatric conditions by specialized physiotherapists.",
  keywords: "physiotherapy, laser therapy, orthopedic, neurological, Dhaka, Bangladesh, rehabilitation",
  authors: [{ name: "Nirapod Laser Physiotherapy Center" }],

  creator: "NLPC",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "www.nirapodphysiotherapy.com/",
    siteName: "Nirapod Laser Physiotherapy Center",
    images: [
      {
        url: "/NLPC logo.png",
        width: 1200,
        height: 630,
        alt: "Nirapod Laser Physiotherapy Center",
      },
    ],
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
    google: "your-google-site-verification",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#003087" },
    { media: "(prefers-color-scheme: dark)", color: "#003087" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = generateOrganizationSchema(CLINIC)

  return (
    <html lang="en" className={`${inter.variable} ${notoBengali.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Dummy Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-N2F5LS4P');
            `,
          }}
        />

        {/* Structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://nirapodlaser.com" />
      </head>

      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
