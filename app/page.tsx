import Link from 'next/link'
import {
  Shield, Search, FileCheck, ArrowRight, CheckCircle, Building2, Factory, Briefcase,
  ClipboardCheck, Award, GraduationCap, ShoppingCart
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper'
import CTASection from '@/components/CTASection'
import { STATS } from '@/lib/constants'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-fire-500/20 text-fire-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Shield className="h-4 w-4" />
                Plus de {STATS.yearsExperience} ans d&apos;expertise
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Audit et Sécurité
                <span className="text-fire-400"> Incendie</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Prevarie accompagne les entreprises et collectivités dans la prévention
                des risques d&apos;incendie et d&apos;explosion. Expertise terrain, méthodologie
                rigoureuse et accompagnement personnalisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group bg-fire-500 hover:bg-fire-600 text-white font-semibold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-fire-500/25"
                >
                  Demander un devis gratuit
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                >
                  Découvrir nos services
                </Link>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold mb-1">{STATS.yearsExperience}+</div>
                  <div className="text-gray-300 text-sm">Années d&apos;expérience</div>
                </div>
                <div className="bg-fire-500 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold mb-1">{STATS.auditsCompleted}+</div>
                  <div className="text-white/80 text-sm">Audits réalisés</div>
                </div>
                <div className="bg-fire-500 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold mb-1">{STATS.establishmentsManaged}</div>
                  <div className="text-white/80 text-sm">Établissements gérés</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold mb-1">{STATS.certification}</div>
                  <div className="text-gray-300 text-sm">Agrément CNPP</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Nos services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-4">
              Une expertise complète en sécurité incendie
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              De la prévention à l&apos;audit, en passant par l&apos;évaluation des risques
              professionnels et la formation de vos équipes.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                title: 'Prévention & Analyse',
                desc: 'Diagnostic terrain, évaluation des risques et plan d\'action priorisé pour vos installations.',
                href: '/services#prevention',
              },
              {
                icon: FileCheck,
                title: 'Audit de Vulnérabilité',
                desc: 'Évaluation approfondie de la capacité de vos installations à résister aux risques.',
                href: '/services#audit',
              },
              {
                icon: ClipboardCheck,
                title: 'DUERP',
                desc: 'Évaluation des risques professionnels : 30 catégories, calcul automatique, rapport conforme.',
                href: '/services#duerp',
              },
              {
                icon: GraduationCap,
                title: 'Formation',
                desc: 'Formation incendie, exercices d\'évacuation, accompagnement aux commissions de sécurité.',
                href: '/services#formation',
              },
            ].map((service) => (
              <StaggerItem key={service.title}>
                <Link href={service.href} className="block group">
                  <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-xl transition-all group-hover:bg-white border border-transparent group-hover:border-fire-500/20">
                    <div className="bg-fire-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-700 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                    <span className="text-fire-500 font-semibold inline-flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
                      En savoir plus
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir Prevarie ?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Une expertise reconnue, des certifications de référence et un accompagnement terrain.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Certifié INSSI / CNPP',
                desc: 'Agrément délivré par le Centre National de Prévention et de Protection, référence nationale en sécurité incendie.',
              },
              {
                icon: Shield,
                title: '20+ ans d\'expérience',
                desc: 'Expertise forgée dans des postes à responsabilité : collectivités, grande distribution, secteur médico-social.',
              },
              {
                icon: CheckCircle,
                title: 'Approche pragmatique',
                desc: 'Des recommandations concrètes et actionnables, adaptées à vos réalités opérationnelles et votre budget.',
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <div className="bg-fire-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Réglementation */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Base réglementaire
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-4">
              Réglementation incendie
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Consultez nos guides pratiques par type d&apos;établissement.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'ERP', subtitle: 'Établissements Recevant du Public', href: '/reglementation/erp', icon: Building2, color: 'bg-blue-500' },
              { title: 'IGH', subtitle: 'Immeubles de Grande Hauteur', href: '/reglementation/igh', icon: Building2, color: 'bg-purple-500' },
              { title: 'ICPE', subtitle: 'Installations Classées', href: '/reglementation/icpe', icon: Factory, color: 'bg-orange-500' },
              { title: 'Code du travail', subtitle: 'Sécurité des travailleurs', href: '/reglementation/code-travail', icon: Briefcase, color: 'bg-green-500' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Link
                  href={item.href}
                  className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-fire-500/20"
                >
                  <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-700 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{item.subtitle}</p>
                  <span className="text-fire-500 text-sm font-semibold inline-flex items-center gap-1">
                    Consulter
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Boutique teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
                Nos ressources
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-6">
                Documents, formations et services
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Guides pratiques, modèles réglementaires, formations en ligne et services
                d&apos;accompagnement pour maîtriser la sécurité incendie de vos établissements.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Guides ERP et ICPE conformes à la réglementation',
                  'Modèles de registres et check-lists',
                  'Formations en ligne avec certificat',
                  'Services d\'accompagnement personnalisés',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/boutique"
                className="bg-fire-500 hover:bg-fire-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Voir la boutique
              </Link>
            </FadeIn>

            <FadeIn>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Documents', count: '6', color: 'bg-blue-50 text-blue-600 border-blue-200' },
                  { label: 'Formations', count: '3', color: 'bg-purple-50 text-purple-600 border-purple-200' },
                  { label: 'Services', count: '3', color: 'bg-green-50 text-green-600 border-green-200' },
                ].map((item) => (
                  <div key={item.label} className={`${item.color} border rounded-2xl p-6 text-center`}>
                    <div className="text-3xl font-bold mb-1">{item.count}</div>
                    <div className="text-sm font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
