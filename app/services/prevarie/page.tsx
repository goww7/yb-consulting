import { Metadata } from 'next'
import Link from 'next/link'
import { Search, CheckCircle, ArrowRight, Shield, FileText, Users, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'PREVARIE - Prévention et Analyse des Risques',
  description: 'PREVARIE : Prévention et Analyse des Risques d\'Incendies et d\'Explosions. Identification proactive des risques et mise en place de mesures préventives.',
}

export default function Prevarie() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-fire-500/20 text-fire-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Search className="h-4 w-4" />
                Service spécialisé
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">PREVARIE</h1>
              <p className="text-2xl text-fire-500 font-semibold mb-6">
                Prévention et Analyse des Risques d&apos;Incendies et d&apos;Explosions
              </p>
              <p className="text-xl text-gray-300 mb-8">
                Une approche proactive pour identifier et maîtriser les risques
                avant qu&apos;ils ne deviennent des incidents.
              </p>
              <Link href="/devis" className="btn-primary inline-flex items-center gap-2">
                Demander un devis
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <Shield className="h-8 w-8 text-fire-500 mb-2" />
                    <div className="font-semibold">Prévention</div>
                    <div className="text-sm text-gray-300">Anticipation des risques</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <Search className="h-8 w-8 text-fire-500 mb-2" />
                    <div className="font-semibold">Analyse</div>
                    <div className="text-sm text-gray-300">Évaluation approfondie</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <FileText className="h-8 w-8 text-fire-500 mb-2" />
                    <div className="font-semibold">Plans</div>
                    <div className="text-sm text-gray-300">Actions concrètes</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <Users className="h-8 w-8 text-fire-500 mb-2" />
                    <div className="font-semibold">Formation</div>
                    <div className="text-sm text-gray-300">Équipes formées</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que PREVARIE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Qu&apos;est-ce que PREVARIE ?</h2>
            <p className="text-gray-600 text-lg">
              PREVARIE est notre approche méthodologique pour la prévention et l&apos;analyse
              des risques d&apos;incendie et d&apos;explosion. Elle combine diagnostic terrain,
              analyse réglementaire et recommandations opérationnelles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="bg-fire-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Search className="h-7 w-7 text-fire-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">Diagnostic initial</h3>
              <p className="text-gray-600">
                Visite sur site, analyse de l&apos;existant, identification des sources
                de danger et des zones à risque.
              </p>
            </div>

            <div className="card">
              <div className="bg-fire-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="h-7 w-7 text-fire-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">Évaluation des risques</h3>
              <p className="text-gray-600">
                Classification des risques par niveau de criticité,
                analyse des scénarios d&apos;accident potentiels.
              </p>
            </div>

            <div className="card">
              <div className="bg-fire-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <FileText className="h-7 w-7 text-fire-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">Plan d&apos;action</h3>
              <p className="text-gray-600">
                Recommandations priorisées, planning de mise en œuvre,
                indicateurs de suivi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prestations détaillées */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">Nos prestations PREVARIE</h2>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="bg-fire-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-700 mb-3">Audit préventif complet</h3>
                  <p className="text-gray-600 mb-4">
                    Évaluation exhaustive de votre établissement : moyens de secours,
                    issues de secours, désenfumage, compartimentage, stockages, process...
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Vérification des moyens d&apos;extinction
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Analyse du système de détection
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Contrôle des évacuations
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Évaluation du compartimentage
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="bg-fire-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-700 mb-3">Analyse réglementaire</h3>
                  <p className="text-gray-600 mb-4">
                    Vérification de la conformité aux réglementations en vigueur :
                    Code du travail, règlement de sécurité ERP, réglementation ICPE...
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Conformité Code du travail
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Réglementation ERP/IGH
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Exigences ICPE/SEVESO
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Normes techniques
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="bg-fire-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-700 mb-3">Plan de prévention personnalisé</h3>
                  <p className="text-gray-600 mb-4">
                    Élaboration d&apos;un plan d&apos;action sur mesure avec priorisation
                    des actions, estimation budgétaire et planning de mise en œuvre.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Actions priorisées
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Estimations budgétaires
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Planning de réalisation
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Indicateurs de suivi
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="bg-fire-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-700 mb-3">Formation du personnel</h3>
                  <p className="text-gray-600 mb-4">
                    Sensibilisation et formation de vos équipes aux risques incendie,
                    aux procédures d&apos;évacuation et à l&apos;utilisation des moyens de secours.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Sensibilisation aux risques
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Manipulation extincteurs
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Exercices d&apos;évacuation
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Formation équipiers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-fire-500 to-fire-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
