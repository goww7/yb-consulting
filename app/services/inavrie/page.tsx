import { Metadata } from 'next'
import Link from 'next/link'
import { FileCheck, CheckCircle, ArrowRight, Shield, Target, BarChart, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'INAVRIE - Ingénieur et Analyste de Vulnérabilité',
  description: 'INAVRIE : Ingénieur et Analyste de Vulnérabilité des Risques d\'Incendie et d\'Explosion. Expertise technique approfondie pour évaluer la vulnérabilité de vos installations.',
}

export default function Inavrie() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-fire-500/20 text-fire-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FileCheck className="h-4 w-4" />
                Expertise technique
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">INAVRIE</h1>
              <p className="text-2xl text-fire-500 font-semibold mb-6">
                Ingénieur et Analyste de Vulnérabilité des Risques d&apos;Incendie et d&apos;Explosion
              </p>
              <p className="text-xl text-gray-300 mb-8">
                Une expertise technique pointue pour évaluer et réduire
                la vulnérabilité de vos installations face aux risques majeurs.
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
                    <Target className="h-8 w-8 text-fire-500 mb-2" />
                    <div className="font-semibold">Vulnérabilité</div>
                    <div className="text-sm text-gray-300">Analyse approfondie</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <BarChart className="h-8 w-8 text-fire-500 mb-2" />
                    <div className="font-semibold">Quantification</div>
                    <div className="text-sm text-gray-300">Mesure des risques</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <Shield className="h-8 w-8 text-fire-500 mb-2" />
                    <div className="font-semibold">Protection</div>
                    <div className="text-sm text-gray-300">Solutions adaptées</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <Wrench className="h-8 w-8 text-fire-500 mb-2" />
                    <div className="font-semibold">Ingénierie</div>
                    <div className="text-sm text-gray-300">Expertise technique</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que INAVRIE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Qu&apos;est-ce que INAVRIE ?</h2>
            <p className="text-gray-600 text-lg">
              INAVRIE est notre approche d&apos;ingénierie spécialisée dans l&apos;analyse
              de vulnérabilité. Elle permet d&apos;identifier les failles de vos systèmes
              de protection et de proposer des solutions d&apos;amélioration ciblées.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="bg-fire-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-fire-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">Analyse de vulnérabilité</h3>
              <p className="text-gray-600">
                Identification des points faibles de vos installations,
                évaluation de leur impact potentiel sur la sécurité.
              </p>
            </div>

            <div className="card">
              <div className="bg-fire-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <BarChart className="h-7 w-7 text-fire-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">Quantification des risques</h3>
              <p className="text-gray-600">
                Évaluation chiffrée des risques, probabilité d&apos;occurrence
                et gravité des conséquences potentielles.
              </p>
            </div>

            <div className="card">
              <div className="bg-fire-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="h-7 w-7 text-fire-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">Solutions techniques</h3>
              <p className="text-gray-600">
                Recommandations d&apos;ingénierie pour réduire la vulnérabilité,
                dimensionnement des moyens de protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">Notre méthodologie INAVRIE</h2>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="bg-navy-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-700 mb-3">Cartographie des actifs</h3>
                  <p className="text-gray-600 mb-4">
                    Identification et classification de tous les éléments critiques :
                    bâtiments, équipements, stockages, réseaux, personnel...
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Inventaire des actifs critiques
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Classification par importance
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Interdépendances identifiées
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Valeur de remplacement
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="bg-navy-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-700 mb-3">Analyse des scénarios</h3>
                  <p className="text-gray-600 mb-4">
                    Étude détaillée des scénarios d&apos;incendie et d&apos;explosion possibles,
                    modélisation des phénomènes dangereux et de leur propagation.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Identification des sources d&apos;ignition
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Analyse des combustibles
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Modélisation de propagation
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Évaluation des effets domino
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="bg-navy-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-700 mb-3">Évaluation des protections</h3>
                  <p className="text-gray-600 mb-4">
                    Audit des moyens de protection existants, analyse de leur efficacité
                    et de leur adéquation face aux risques identifiés.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Protection passive (structure)
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Protection active (extinction)
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Détection et alarme
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Organisation des secours
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="bg-navy-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-700 mb-3">Rapport technique détaillé</h3>
                  <p className="text-gray-600 mb-4">
                    Livraison d&apos;un rapport complet avec cartographie des vulnérabilités,
                    recommandations techniques et plan d&apos;amélioration priorisé.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Synthèse des vulnérabilités
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Recommandations chiffrées
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Analyse coût/bénéfice
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Feuille de route technique
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Livrables */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Les livrables INAVRIE</h2>
            <p className="section-subtitle mx-auto">
              Des documents techniques exploitables pour améliorer votre sécurité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <FileCheck className="h-10 w-10 text-fire-500 mx-auto mb-4" />
              <h3 className="font-bold text-navy-700 mb-2">Rapport d&apos;analyse</h3>
              <p className="text-sm text-gray-600">Document technique complet avec méthodologie et résultats</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <Target className="h-10 w-10 text-fire-500 mx-auto mb-4" />
              <h3 className="font-bold text-navy-700 mb-2">Matrice de vulnérabilité</h3>
              <p className="text-sm text-gray-600">Classification des failles par niveau de criticité</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <BarChart className="h-10 w-10 text-fire-500 mx-auto mb-4" />
              <h3 className="font-bold text-navy-700 mb-2">Tableaux de bord</h3>
              <p className="text-sm text-gray-600">Indicateurs de suivi et d&apos;évolution des risques</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <Wrench className="h-10 w-10 text-fire-500 mx-auto mb-4" />
              <h3 className="font-bold text-navy-700 mb-2">Plan d&apos;amélioration</h3>
              <p className="text-sm text-gray-600">Actions techniques priorisées avec estimations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-navy-700 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Évaluez la vulnérabilité de vos installations
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une analyse technique approfondie de vos risques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Demander un devis
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services/prevarie"
              className="border-2 border-white text-white hover:bg-white hover:text-navy-700 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Découvrir PREVARIE
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
