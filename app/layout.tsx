import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Prevarie - Audit et Sécurité Incendie',
    template: '%s | Prevarie'
  },
  description: 'Prevarie, expert en audit et sécurité incendie. Analyse de vulnérabilité des risques d\'incendie et d\'explosion. Prévention, audit et accompagnement sur mesure.',
  keywords: ['sécurité incendie', 'audit incendie', 'prévention incendie', 'risques explosion', 'Prevarie', 'consultant sécurité', 'analyse vulnérabilité'],
  authors: [{ name: 'Prevarie' }],
  openGraph: {
    title: 'Prevarie - Audit et Sécurité Incendie',
    description: 'Expert en analyse de vulnérabilité des risques d\'incendie et d\'explosion',
    url: 'https://prevarie.fr',
    siteName: 'Prevarie',
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
