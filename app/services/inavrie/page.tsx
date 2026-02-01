'use client'

import Link from 'next/link'
import { FileCheck, CheckCircle, ArrowRight, Shield, Target, BarChart, Wrench } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper'

export default function Inavrie() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <FileCheck className="h-4 w-4" />
                  Expertise technique
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">INAVRIE</h1>
                <p className="text-xl text-fire-400 font-semibold mb-6">
                  Ingénieur et Analyste de Vulnérabilité des Risques d&apos;Incendie et d&apos;Explosion
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Une expertise technique pointue pour évaluer et réduire
                  la vulnérabilité de vos installations face aux risques majeurs.
                </p>
                <Link
                  href="/devis"
                  className="bg-fire-500 hover:bg-fire-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  Demander un devis
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </FadeIn>
            </div>

            <FadeIn className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Target, title: 'Vulnérabilité', desc: 'Analyse approfondie' },
                  { icon: BarChart, title: 'Quantification', desc: 'Mesure des risques' },
                  { icon: Shield, title: 'Protection', desc: 'Solutions adaptées' },
                  { icon: Wrench, title: 'Ingénierie', desc: 'Expertise technique' },
                ].map((item) => (
                  <div key={item.title} className="bg-white/10 rounded-xl p-5">
                    <item.icon className="h-8 w-8 text-fire-400 mb-3" />
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="text-sm text-gray-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que INAVRIE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Notre expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-6">
              Qu&apos;est-ce que INAVRIE ?
            </h2>
            <p className="text-gray-600 text-lg">
              INAVRIE est notre approche d&apos;ingénierie spécialisée dans l&apos;analyse
              de vulnérabilité. Elle permet d&apos;identifier les failles de vos systèmes
              de protection et de proposer des solutions d&apos;amélioration ciblées.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Analyse de vulnérabilité',
                desc: 'Identification des points faibles de vos installations, évaluation de leur impact potentiel sur la sécurité.',
              },
              {
                icon: BarChart,
                title: 'Quantification des risques',
                desc: 'Évaluation chiffrée des risques, probabilité d\'occurrence et gravité des conséquences potentielles.',
              },
              {
                icon: Wrench,
                title: 'Solutions techniques',
                desc: 'Recommandations d\'ingénierie pour réduire la vulnérabilité, dimensionnement des moyens de protection.',
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all group h-full">
                  <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-fire-500 transition-colors">
                    <item.icon className="h-7 w-7 text-fire-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-700 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <FadeIn>
                <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
                  Expertise technique
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-6">
                  Une analyse de vulnérabilité approfondie
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  L&apos;analyse de vulnérabilité permet d&apos;aller au-delà de la simple conformité
                  réglementaire. Elle évalue la capacité réelle de vos installations à
                  résister aux risques d&apos;incendie et d&apos;explosion.
                </p>

                <div className="space-y-3">
                  {[
                    'Identification des points faibles critiques',
                    'Quantification des risques résiduels',
                    'Dimensionnement des protections',
                    'Analyse coût/bénéfice des améliorations',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn>
              <div className="bg-navy-700 rounded-xl p-8 text-white">
                <div className="text-4xl font-bold mb-2">Expert</div>
                <div className="text-white/80 mb-4">Ingénieur certifié INSSI</div>
                <p className="text-white/90">
                  Notre expertise technique permet une analyse approfondie
                  de la vulnérabilité de vos installations.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Méthodologie
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-4">
              Notre approche INAVRIE
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-8">
            {[
              {
                num: '1',
                title: 'Cartographie des actifs',
                desc: 'Identification et classification de tous les éléments critiques : bâtiments, équipements, stockages, réseaux, personnel...',
                items: ['Inventaire des actifs critiques', 'Classification par importance', 'Interdépendances identifiées', 'Valeur de remplacement'],
              },
              {
                num: '2',
                title: 'Analyse des scénarios',
                desc: 'Étude détaillée des scénarios d\'incendie et d\'explosion possibles, modélisation des phénomènes dangereux et de leur propagation.',
                items: ['Identification des sources d\'ignition', 'Analyse des combustibles', 'Modélisation de propagation', 'Évaluation des effets domino'],
              },
              {
                num: '3',
                title: 'Évaluation des protections',
                desc: 'Audit des moyens de protection existants, analyse de leur efficacité et de leur adéquation face aux risques identifiés.',
                items: ['Protection passive (structure)', 'Protection active (extinction)', 'Détection et alarme', 'Organisation des secours'],
              },
              {
                num: '4',
                title: 'Rapport technique détaillé',
                desc: 'Livraison d\'un rapport complet avec cartographie des vulnérabilités, recommandations techniques et plan d\'amélioration priorisé.',
                items: ['Synthèse des vulnérabilités', 'Recommandations chiffrées', 'Analyse coût/bénéfice', 'Feuille de route technique'],
              },
            ].map((step) => (
              <StaggerItem key={step.num}>
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-br from-navy-700 to-navy-800 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl shrink-0 shadow-lg">
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy-700 mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-6">{step.desc}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {step.items.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Livrables */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="text-fire-400 font-semibold text-sm uppercase tracking-wider">
              Livrables
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Les livrables INAVRIE
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Des documents techniques exploitables pour améliorer votre sécurité
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileCheck, title: 'Rapport d\'analyse', desc: 'Document technique complet' },
              { icon: Target, title: 'Matrice de vulnérabilité', desc: 'Classification des failles' },
              { icon: BarChart, title: 'Tableaux de bord', desc: 'Indicateurs de suivi' },
              { icon: Wrench, title: 'Plan d\'amélioration', desc: 'Actions priorisées' },
            ].map((item) => (
              <FadeIn key={item.title}>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <item.icon className="h-10 w-10 text-fire-400 mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-fire-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Évaluez la vulnérabilité de vos installations
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une analyse technique approfondie de vos risques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="bg-white text-fire-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Demander un devis
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services/prevarie"
              className="border-2 border-white text-white hover:bg-white hover:text-fire-600 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Découvrir PREVARIE
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
