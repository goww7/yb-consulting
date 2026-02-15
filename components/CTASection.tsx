import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/MotionWrapper'

type CTASectionProps = {
  variant?: 'default' | 'compact'
  title?: string
  description?: string
}

export default function CTASection({
  variant = 'default',
  title = 'Obtenez votre diagnostic sécurité gratuit',
  description = 'Échangez avec notre expert certifié CNPP pour identifier vos failles et obtenir un plan d\'action concret. Réponse garantie sous 48h.',
}: CTASectionProps) {
  if (variant === 'compact') {
    return (
      <section className="py-10 bg-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white text-lg font-semibold text-center sm:text-left">{title}</p>
          <Link
            href="/contact"
            className="bg-fire-500 hover:bg-fire-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2 shrink-0"
          >
            Nous contacter
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-fire-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {title}
            </h2>
            <p className="text-xl text-white/90 mb-10">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group bg-white text-fire-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
              >
                Obtenir mon diagnostic gratuit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
