import type { Metadata } from 'next'
import { JetBrains_Mono, Playfair_Display } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import Navbar from '@/components/Navbar'
import MobileTabBar from '@/components/MobileTabBar'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: "Ilham's Second Brain",
  description: 'An LLM-compiled wiki built on Karpathy\'s method: sources synthesized into interconnected pages, structured as a Memory Palace.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="preload" href="/images/hero-bg.webp" as="image" fetchPriority="high" />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        {children}
        <MobileTabBar />
      </body>
    </html>
  )
}
