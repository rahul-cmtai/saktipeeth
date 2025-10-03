import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Shree Mahavidya Shaktipeeth - Divine Spiritual Journey",
  description:
    "Experience the divine energy and spiritual awakening at Shree Mahavidya Shaktipeeth. A sacred place of worship, rituals, and spiritual transformation.",
  keywords: "Shaktipeeth, Mahavidya, Temple, Spiritual, Divine, Worship, Rituals",
  generator: "sakti peeth",
  metadataBase: new URL("https://www.shreemahavidya.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Shree Mahavidya Shaktipeeth - Divine Spiritual Journey",
    description:
      "Experience the divine energy and spiritual awakening at Shree Mahavidya Shaktipeeth.",
    siteName: "Shree Mahavidya Shaktipeeth",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Shree Mahavidya Shaktipeeth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Mahavidya Shaktipeeth - Divine Spiritual Journey",
    description:
      "Experience the divine energy and spiritual awakening at Shree Mahavidya Shaktipeeth.",
    images: ["/hero.png"],
  },
  icons: {
    icon: "/placeholder-logo.svg",
    shortcut: "/placeholder-logo.svg",
    apple: "/placeholder-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
