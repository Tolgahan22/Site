import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gamze Yüceer - Balıkesir/Körfez Gayrimenkul Danışmanlığı',
  description: 'Balıkesir/Körfez bölgesinde 10 yılı aşkın deneyimle lüks konut, arsa satış, ekspertiz, kontrat danışmanlığı ve temsilcilik hizmetleri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

