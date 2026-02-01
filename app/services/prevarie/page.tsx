'use client'

import Link from 'next/link'
import { Search, CheckCircle, ArrowRight, Shield, FileText, Users, AlertTriangle } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper'

export default function Prevarie() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Search className="h-4 w-4" />
                  Service spécialisé
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">PREVARIE</h1>
                <p className="text-xl text-fire-400 font-semibold mb-6">
                  Prévention et Analyse des Risques d&apos;Incendies et d&apos;Explosions
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Une approche proactive pour identifier et maîtriser les risques
                  avant qu&apos;ils ne deviennent des incidents.
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
                  { icon: Shield, title: 'Prévention', desc: 'Anticipation des risques' },
                  { icon: Search, title: 'Analyse', desc: 'Évaluation approfondie' },
                  { icon: FileText, title: 'Plans', desc: 'Actions concrètes' },
                  { icon: Users, title: 'Formation', desc: 'Équipes formées' },
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

      {/* Qu'est-ce que PREVARIE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Notre méthodologie
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-6">
              Qu&apos;est-ce que PREVARIE ?
            </h2>
            <p className="text-gray-600 text-lg">
              PREVARIE est notre approche méthodologique pour la prévention et l&apos;analyse
              des risques d&apos;incendie et d&apos;explosion. Elle combine diagnostic terrain,
              analyse réglementaire et recommandations opérationnelles.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'Diagnostic initial',
                desc: 'Visite sur site, analyse de l\'existant, identification des sources de danger et des zones à risque.',
              },
              {
                icon: AlertTriangle,
                title: 'Évaluation des risques',
                desc: 'Classification des risques par niveau de criticité, analyse des scénarios d\'accident potentiels.',
              },
              {
                icon: FileText,
                title: 'Plan d\'action',
                desc: 'Recommandations priorisées, planning de mise en œuvre, indicateurs de suivi.',
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
                  Pourquoi PREVARIE
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-6">
                  Une approche préventive complète
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  La prévention est la clé d&apos;une sécurité incendie efficace. Notre approche
                  PREVARIE vous permet d&apos;anticiper les risques et de mettre en place les
                  mesures adaptées avant tout incident.
                </p>

                <div className="space-y-3">
                  {[
                    'Identification exhaustive des risques',
                    'Conformité réglementaire garantie',
                    'Plan d\'action priorisé et budgétisé',
                    'Formation et sensibilisation des équipes',
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
              <div className="bg-fire-500 rounded-xl p-8 text-white">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-white/80 mb-4">Objectif conformité</div>
                <p className="text-white/90">
                  Notre méthodologie vise la conformité totale de vos installations
                  aux réglementations en vigueur.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Prestations détaillées */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Détails
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-4">
              Nos prestations PREVARIE
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-8">
            {[
              {
                num: '1',
                title: 'Audit préventif complet',
                desc: 'Évaluation exhaustive de votre établissement : moyens de secours, issues de secours, désenfumage, compartimentage, stockages, process...',
                items: ['Vérification des moyens d\'extinction', 'Analyse du système de détection', 'Contrôle des évacuations', 'Évaluation du compartimentage'],
              },
              {
                num: '2',
                title: 'Analyse réglementaire',
                desc: 'Vérification de la conformité aux réglementations en vigueur : Code du travail, règlement de sécurité ERP, réglementation ICPE...',
                items: ['Conformité Code du travail', 'Réglementation ERP/IGH', 'Exigences ICPE/SEVESO', 'Normes techniques'],
              },
              {
                num: '3',
                title: 'Plan de prévention personnalisé',
                desc: 'Élaboration d\'un plan d\'action sur mesure avec priorisation des actions, estimation budgétaire et planning de mise en œuvre.',
                items: ['Actions priorisées', 'Estimations budgétaires', 'Planning de réalisation', 'Indicateurs de suivi'],
              },
              {
                num: '4',
                title: 'Formation du personnel',
                desc: 'Sensibilisation et formation de vos équipes aux risques incendie, aux procédures d\'évacuation et à l\'utilisation des moyens de secours.',
                items: ['Sensibilisation aux risques', 'Manipulation extincteurs', 'Exercices d\'évacuation', 'Formation équipiers'],
              },
            ].map((prestation) => (
              <StaggerItem key={prestation.num}>
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-br from-fire-500 to-fire-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl shrink-0 shadow-lg shadow-fire-500/30">
                      {prestation.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy-700 mb-3">{prestation.title}</h3>
                      <p className="text-gray-600 mb-6">{prestation.desc}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {prestation.items.map((item) => (
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

      {/* CTA */}
      <section className="py-16 bg-fire-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Anticipez les risques avec PREVARIE
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une analyse préventive de vos installations.
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
              href="/services/inavrie"
              className="border-2 border-white text-white hover:bg-white hover:text-fire-600 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Découvrir INAVRIE
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
