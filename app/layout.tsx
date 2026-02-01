import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'YB Consulting - Audit et Sécurité Incendie',
    template: '%s | YB Consulting'
  },
  description: 'YB Consulting, expert en audit et sécurité incendie. Analyse de vulnérabilité des risques d\'incendie et d\'explosion. Services PREVARIE et INAVRIE.',
  keywords: ['sécurité incendie', 'audit incendie', 'prévention incendie', 'risques explosion', 'PREVARIE', 'INAVRIE', 'consultant sécurité'],
  authors: [{ name: 'YB Consulting' }],
  openGraph: {
    title: 'YB Consulting - Audit et Sécurité Incendie',
    description: 'Expert en analyse de vulnérabilité des risques d\'incendie et d\'explosion',
    url: 'https://yb-consulting.fr',
    siteName: 'YB Consulting',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
