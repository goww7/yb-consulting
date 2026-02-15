import Link from 'next/link'
import {
  Shield, Search, FileCheck, ArrowRight, CheckCircle, Building2, Factory, Briefcase,
  ClipboardCheck, Award, GraduationCap, ShoppingCart, HeartPulse, School, Warehouse,
  HelpCircle, Clock, Zap
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper'
import CTASection from '@/components/CTASection'
import { STATS } from '@/lib/constants'

const faqItems = [
  {
    question: 'Combien coûte un audit de sécurité incendie ?',
    answer: 'Le coût dépend de la taille et du type de votre établissement. Nos audits démarrent à partir de 890 € HT pour un ERP. Contactez-nous pour un devis personnalisé gratuit sous 48h.',
  },
  {
    question: 'Combien de temps dure un audit ?',
    answer: 'La visite sur site dure généralement 1 journée. Le rapport complet avec plan d\'action vous est remis sous 2 semaines. L\'ensemble du processus, de la prise de contact à la restitution, prend 3 à 4 semaines.',
  },
  {
    question: 'Quelles réglementations couvrez-vous ?',
    answer: 'Nous couvrons l\'ensemble de la réglementation incendie française : ERP (arrêté du 25 juin 1980), IGH (arrêté du 30 décembre 2011), ICPE et SEVESO (Code de l\'environnement), et Code du travail (articles R4227).',
  },
  {
    question: 'Le DUERP est-il obligatoire ?',
    answer: 'Oui, le Document Unique d\'Évaluation des Risques Professionnels est obligatoire pour toute entreprise dès le 1er salarié (article R4121-1 du Code du travail). Il doit être mis à jour au minimum chaque année et conservé 40 ans.',
  },
  {
    question: 'Proposez-vous un suivi après l\'audit ?',
    answer: 'Oui. Chaque audit inclut un suivi de 3 mois pour accompagner la mise en œuvre des recommandations. Nous proposons aussi un abonnement de veille réglementaire annuel pour rester conforme aux évolutions.',
  },
  {
    question: 'Intervenez-vous dans toute la France ?',
    answer: 'Oui, nous intervenons sur l\'ensemble du territoire national. Pour les sites hors métropole ou à l\'étranger, contactez-nous pour étudier les modalités d\'intervention.',
  },
]

export default function Home() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      {/* FAQ JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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
                Ne laissez pas un défaut de conformité mettre en danger vos équipes
                et votre activité. Prevarie identifie vos failles et vous guide vers
                une sécurité incendie sans compromis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group bg-fire-500 hover:bg-fire-600 text-white font-semibold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-fire-500/25"
                >
                  Obtenir mon diagnostic gratuit
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/duerp/demo"
                  className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                >
                  Essayer la démo DUERP
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

      {/* Trust badges */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-fire-500" />
              <div>
                <div className="font-bold text-navy-700 text-sm">Certifié INSSI</div>
                <div className="text-gray-500 text-xs">Agrément CNPP</div>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden md:block" />
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-fire-500" />
              <div>
                <div className="font-bold text-navy-700 text-sm">Réponse sous 48h</div>
                <div className="text-gray-500 text-xs">Garantie contractuelle</div>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden md:block" />
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-fire-500" />
              <div>
                <div className="font-bold text-navy-700 text-sm">{STATS.auditsCompleted}+ audits</div>
                <div className="text-gray-500 text-xs">0 incident client</div>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden md:block" />
            <div className="flex items-center gap-3">
              <Zap className="h-8 w-8 text-fire-500" />
              <div>
                <div className="font-bold text-navy-700 text-sm">100% conformité</div>
                <div className="text-gray-500 text-xs">Objectif chaque audit</div>
              </div>
            </div>
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

      {/* Industry solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Par secteur
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-4">
              Des solutions adaptées à votre secteur
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Chaque secteur a ses propres contraintes réglementaires. Notre expertise couvre
              les environnements les plus exigeants.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: HeartPulse,
                title: 'Santé & Médico-social',
                desc: 'ERP de type U, évacuation des personnes à mobilité réduite, commissions de sécurité.',
                stat: '80 établissements gérés',
              },
              {
                icon: School,
                title: 'Enseignement & Collectivités',
                desc: 'ERP de type R, exercices d\'évacuation, registres de sécurité, formation du personnel.',
                stat: 'Protocoles éprouvés',
              },
              {
                icon: Warehouse,
                title: 'Industrie & Logistique',
                desc: 'ICPE, ATEX, SEVESO, étude de dangers, plans d\'action incendie/explosion.',
                stat: 'Risques complexes maîtrisés',
              },
              {
                icon: Building2,
                title: 'Tertiaire & Commerce',
                desc: 'ERP de types M et W, conformité SSI, accompagnement ouverture et exploitation.',
                stat: 'Conformité garantie',
              },
            ].map((sector) => (
              <StaggerItem key={sector.title}>
                <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="bg-navy-700 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                    <sector.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-700 mb-2">{sector.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{sector.desc}</p>
                  <div className="flex items-center gap-2 text-fire-500 text-sm font-semibold">
                    <CheckCircle className="h-4 w-4" />
                    {sector.stat}
                  </div>
                </div>
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
                desc: 'Agrément délivré par le Centre National de Prévention et de Protection, référence nationale en sécurité incendie. Moins de 5% des consultants détiennent cette certification.',
              },
              {
                icon: Shield,
                title: 'Spécialiste incendie exclusif',
                desc: 'Contrairement aux consultants généralistes HSE, nous nous concentrons exclusivement sur la sécurité incendie et explosion. Cette spécialisation garantit une expertise de pointe.',
              },
              {
                icon: CheckCircle,
                title: 'Résultats concrets garantis',
                desc: 'Des recommandations actionnables avec un plan d\'action chiffré. Nos clients réduisent en moyenne de 85% leurs non-conformités dès le premier audit.',
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

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Les réponses aux questions les plus courantes sur nos services.
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <StaggerContainer className="space-y-4">
              {faqItems.map((item) => (
                <StaggerItem key={item.question}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="flex items-start gap-3 text-lg font-bold text-navy-700 mb-3">
                      <HelpCircle className="h-6 w-6 text-fire-500 shrink-0 mt-0.5" />
                      {item.question}
                    </h3>
                    <p className="text-gray-600 pl-9">{item.answer}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn className="text-center mt-10">
              <p className="text-gray-600 mb-4">Vous avez d&apos;autres questions ?</p>
              <Link
                href="/contact"
                className="bg-fire-500 hover:bg-fire-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                Posez votre question
                <ArrowRight className="h-5 w-5" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Obtenez votre diagnostic sécurité gratuit"
        description="Échangez avec notre expert certifié CNPP pour identifier vos failles et obtenir un plan d'action concret. Réponse garantie sous 48h."
      />
    </>
  )
}
