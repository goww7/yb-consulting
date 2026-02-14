'use client'

import Link from 'next/link'
import { FileCheck, CheckCircle, ArrowRight, Shield, Target, BarChart, Wrench, Calendar } from 'lucide-react'
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
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Audit de Vulnérabilité</h1>
                <p className="text-xl text-fire-400 font-semibold mb-6">
                  Mesurez et réduisez vos failles face aux risques incendie
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Nous analysons en profondeur la résistance de vos installations
                  et vous fournissons des solutions techniques concrètes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/devis"
                    className="bg-fire-500 hover:bg-fire-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
                  >
                    Demander un devis
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/contact#rdv"
                    className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Prendre rendez-vous
                  </Link>
                </div>
              </FadeIn>
            </div>

            <FadeIn className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Target, title: 'Vulnérabilité', desc: 'Trouver les failles' },
                  { icon: BarChart, title: 'Quantification', desc: 'Mesurer les risques' },
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

      {/* En quoi ça consiste */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              En quoi ça consiste
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-6">
              Aller au-delà de la simple conformité
            </h2>
            <p className="text-gray-600 text-lg">
              L&apos;audit de vulnérabilité évalue la capacité réelle de vos installations
              à résister aux risques d&apos;incendie et d&apos;explosion. On identifie
              les failles et on propose des solutions concrètes.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Trouver les failles',
                desc: 'Identification des points faibles de vos installations et évaluation de leur impact sur la sécurité.',
              },
              {
                icon: BarChart,
                title: 'Mesurer les risques',
                desc: 'Évaluation chiffrée : probabilité d\'occurrence, gravité des conséquences, coûts potentiels.',
              },
              {
                icon: Wrench,
                title: 'Proposer des solutions',
                desc: 'Recommandations techniques pour réduire la vulnérabilité et dimensionner les protections.',
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

      {/* Ce que vous obtenez */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <FadeIn>
                <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
                  Vos avantages
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-6">
                  Ce que vous obtenez
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Une vision complète et chiffrée de la vulnérabilité de vos installations,
                  avec des recommandations actionnables.
                </p>

                <div className="space-y-3">
                  {[
                    'Cartographie précise de vos points faibles',
                    'Quantification des risques résiduels',
                    'Dimensionnement des protections nécessaires',
                    'Analyse coût/bénéfice de chaque amélioration',
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

      {/* Notre méthode en 4 étapes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Notre méthode
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-4">
              4 étapes pour réduire votre vulnérabilité
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-8">
            {[
              {
                num: '1',
                title: 'Inventaire de vos actifs',
                desc: 'Nous identifions et classons tous vos éléments critiques : bâtiments, équipements, stockages, réseaux, personnel.',
                items: ['Actifs critiques identifiés', 'Classification par importance', 'Interdépendances cartographiées', 'Valeur de remplacement estimée'],
              },
              {
                num: '2',
                title: 'Analyse des scénarios',
                desc: 'Nous étudions les scénarios d\'incendie et d\'explosion possibles et modélisons leur propagation.',
                items: ['Sources d\'ignition identifiées', 'Combustibles analysés', 'Propagation modélisée', 'Effets domino évalués'],
              },
              {
                num: '3',
                title: 'Évaluation des protections',
                desc: 'Nous auditons vos moyens de protection existants et mesurons leur efficacité face aux risques identifiés.',
                items: ['Protection passive (structure)', 'Protection active (extinction)', 'Détection et alarme', 'Organisation des secours'],
              },
              {
                num: '4',
                title: 'Rapport et plan d\'amélioration',
                desc: 'Vous recevez un rapport complet avec la cartographie des vulnérabilités et un plan d\'amélioration chiffré.',
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

      {/* Ce que vous recevez */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="text-fire-400 font-semibold text-sm uppercase tracking-wider">
              Livrables
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Ce que vous recevez
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Des documents techniques concrets pour améliorer votre sécurité
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileCheck, title: 'Rapport d\'analyse', desc: 'Document technique complet' },
              { icon: Target, title: 'Matrice de vulnérabilité', desc: 'Cartographie des failles' },
              { icon: BarChart, title: 'Tableaux de bord', desc: 'Indicateurs de suivi' },
              { icon: Wrench, title: 'Plan d\'amélioration', desc: 'Actions chiffrées et priorisées' },
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
            Connaissez-vous les failles de vos installations ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Échangez gratuitement avec notre expert pour évaluer votre niveau de vulnérabilité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#rdv"
              className="bg-white text-fire-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Prendre rendez-vous
            </Link>
            <Link
              href="/services/prevarie"
              className="border-2 border-white text-white hover:bg-white hover:text-fire-600 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Découvrir la Prévention & Analyse
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
