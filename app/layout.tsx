import type React from "react"
import type { Metadata } from "next"
import { Ubuntu } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

const ubuntu = Ubuntu({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
})

export const metadata: Metadata = {
  title: "eBay Playbook",
  description: "eBay's brand and design system",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ubuntu.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

