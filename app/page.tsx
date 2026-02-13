'use client'

import Link from 'next/link'
import { Shield, Search, FileCheck, ArrowRight, CheckCircle, Calendar, Building2, Factory, Briefcase, Flame } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Shield className="h-4 w-4" />
                  Expert en sécurité incendie depuis 15 ans
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                  Protégez vos
                  <span className="block text-fire-400">
                    établissements
                  </span>
                  des risques incendie
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Audit, prévention et analyse de vulnérabilité. Une expertise terrain
                  pour sécuriser vos installations ERP, IGH et sites industriels.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/devis"
                    className="group bg-fire-500 hover:bg-fire-600 text-white font-semibold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
                  >
                    Demander un devis gratuit
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact#rdv"
                    className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Réserver un créneau
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Stats cards */}
            <FadeIn delay={0.3} className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-1">500+</div>
                  <div className="text-gray-300 text-sm">Audits réalisés</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-1">15</div>
                  <div className="text-gray-300 text-sm">Ans d&apos;expérience</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-1">100%</div>
                  <div className="text-gray-300 text-sm">Clients satisfaits</div>
                </div>
                <div className="bg-fire-500 rounded-xl p-6 text-center">
                  <Flame className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="text-white text-sm font-medium">Expert INSSI</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Clients types - Bande défilante */}
      <section className="py-8 bg-navy-800 border-y border-navy-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-gray-400">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              <span className="font-medium">ERP</span>
            </div>
            <div className="flex items-center gap-2">
              <Factory className="h-5 w-5" />
              <span className="font-medium">Sites industriels</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              <span className="font-medium">IGH</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              <span className="font-medium">Bureaux</span>
            </div>
            <div className="flex items-center gap-2">
              <Factory className="h-5 w-5" />
              <span className="font-medium">ICPE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Nos Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-6">
              Une expertise complète en sécurité incendie
            </h2>
            <p className="text-gray-600 text-lg">
              De la prévention à l&apos;analyse de vulnérabilité, nous vous accompagnons
              à chaque étape pour garantir la sécurité de vos établissements.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Prévention & Analyse */}
            <StaggerItem>
              <Link href="/services/prevarie" className="group block bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-fire-200 h-full">
                <div className="bg-fire-50 p-4 rounded-xl w-fit mb-6 group-hover:bg-fire-500 transition-colors">
                  <Search className="h-8 w-8 text-fire-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-navy-700 mb-3 group-hover:text-fire-500 transition-colors">
                  Prévention & Analyse
                </h3>
                <p className="text-gray-600 mb-4">
                  Identifiez et maîtrisez les risques d&apos;incendie avant qu&apos;ils ne deviennent des incidents. Diagnostic, évaluation et plan d&apos;action concret.
                </p>
                <div className="flex items-center text-fire-500 font-medium">
                  En savoir plus
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </StaggerItem>

            {/* Audit de Vulnérabilité */}
            <StaggerItem>
              <Link href="/services/inavrie" className="group block bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-fire-200 h-full">
                <div className="bg-fire-50 p-4 rounded-xl w-fit mb-6 group-hover:bg-fire-500 transition-colors">
                  <FileCheck className="h-8 w-8 text-fire-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-navy-700 mb-3 group-hover:text-fire-500 transition-colors">
                  Audit de Vulnérabilité
                </h3>
                <p className="text-gray-600 mb-4">
                  Évaluez la résistance réelle de vos installations face aux risques majeurs. Analyse technique, quantification et solutions sur mesure.
                </p>
                <div className="flex items-center text-fire-500 font-medium">
                  En savoir plus
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Réglementation - Section moderne */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Réglementation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-4">
              Maîtrisez la réglementation française
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Retrouvez toutes les informations sur les normes et réglementations
              en matière de sécurité incendie en France.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'ERP', desc: 'Établissements Recevant du Public', href: '/reglementation/erp', color: 'from-blue-500 to-blue-600' },
              { name: 'IGH', desc: 'Immeubles de Grande Hauteur', href: '/reglementation/igh', color: 'from-purple-500 to-purple-600' },
              { name: 'ICPE', desc: 'Installations Classées', href: '/reglementation/icpe', color: 'from-green-500 to-green-600' },
              { name: 'Code du travail', desc: 'Sécurité au travail', href: '/reglementation/code-travail', color: 'from-orange-500 to-orange-600' },
            ].map((item) => (
              <StaggerItem key={item.name}>
                <Link
                  href={item.href}
                  className="group block relative overflow-hidden rounded-2xl bg-gray-50 p-8 hover:shadow-xl transition-all"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-navy-700 group-hover:text-white transition-colors mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/80 transition-colors text-sm">
                      {item.desc}
                    </p>
                    <ArrowRight className="h-5 w-5 mt-4 text-fire-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pourquoi nous - Stats visuelles */}
      <section className="py-24 bg-navy-800 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-fire-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-fire-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <span className="text-fire-400 font-semibold text-sm uppercase tracking-wider">
                  Notre engagement
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                  Une expertise terrain pour votre sécurité
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Fort de 15 années d&apos;expérience dans les plus grandes entreprises du secteur,
                  nous mettons notre expertise au service de votre conformité et de votre sécurité.
                </p>
              </FadeIn>

              <StaggerContainer className="space-y-4">
                {[
                  'Audit complet de vos installations',
                  'Rapports détaillés et actionnables',
                  'Accompagnement personnalisé',
                  'Veille réglementaire continue',
                ].map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-center gap-3">
                      <div className="bg-fire-500/20 rounded-full p-1">
                        <CheckCircle className="h-5 w-5 text-fire-400" />
                      </div>
                      <span className="text-gray-200">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <FadeIn>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-1">500+</div>
                  <div className="text-gray-300 text-sm">Audits réalisés</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-1">15</div>
                  <div className="text-gray-300 text-sm">Ans d&apos;expérience</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-1">100%</div>
                  <div className="text-gray-300 text-sm">Clients satisfaits</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-1">24h</div>
                  <div className="text-gray-300 text-sm">Réponse garantie</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-fire-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à sécuriser vos installations ?
              </h2>
              <p className="text-xl text-white/90 mb-10">
                Réservez un échange gratuit avec notre expert pour évaluer
                vos besoins en sécurité incendie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/devis"
                  className="group bg-white text-fire-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
                >
                  Demander un devis gratuit
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact#rdv"
                  className="border-2 border-white text-white hover:bg-white hover:text-fire-600 font-semibold py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Prendre rendez-vous
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
