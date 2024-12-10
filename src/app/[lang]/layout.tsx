import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Castori Laboral | Advocats Laboralistes Barcelona',
  description: 'Despatx d\'advocats laboralistes a Barcelona especialitzats en dret laboral, acomiadaments, assetjament laboral i indemnitzacions.',
}

export default async function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Suspense fallback={<div>Loading...</div>}>
            <Header lang={lang} />
          </Suspense>
          <main className="flex-grow">
            {children}
          </main>
          <Suspense fallback={<div>Loading...</div>}>
            <Footer lang={lang} />
          </Suspense>
        </div>
      </body>
    </html>
  )
}
