import { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase, ArrowRight, CheckCircle, AlertTriangle, Users, FileText, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Code du travail - Sécurité incendie',
  description: 'Obligations de l\'employeur en matière de sécurité incendie selon le Code du travail : formation, évacuation, moyens de secours.',
}

const obligations = [
  {
    titre: 'Consignes de sécurité',
    articles: 'R4227-37 à R4227-41',
    details: [
      'Affichage des consignes dans chaque local > 5 personnes',
      'Noms des responsables d\'évacuation',
      'Plan d\'évacuation visible',
      'Numéros d\'urgence',
    ],
  },
  {
    titre: 'Moyens d\'extinction',
    articles: 'R4227-28 à R4227-33',
    details: [
      '1 extincteur pour 200 m² minimum',
      '1 extincteur par niveau au minimum',
      'Distance maximale de 15 m pour accéder à un extincteur',
      'Vérification annuelle obligatoire',
    ],
  },
  {
    titre: 'Dégagements',
    articles: 'R4227-4 à R4227-14',
    details: [
      'Nombre et largeur selon effectif',
      'Signalisation par pictogrammes',
      'Éclairage de sécurité',
      'Portes ouvrant dans le sens de l\'évacuation (>50 pers.)',
    ],
  },
  {
    titre: 'Formation et exercices',
    articles: 'R4227-39',
    details: [
      'Formation du personnel à la manipulation des extincteurs',
      'Exercices d\'évacuation tous les 6 mois',
      'Consignes particulières pour certains postes',
      'Formation des équipiers de première intervention',
    ],
  },
]

export default function ReglementationCodeTravail() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-green-200 mb-4">
            <Link href="/reglementation" className="hover:text-white transition-colors">
              Réglementation
            </Link>
            <span>/</span>
            <span>Code du travail</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 p-4 rounded-xl">
              <Briefcase className="h-10 w-10" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Code du travail</h1>
              <p className="text-xl text-green-200">Sécurité incendie des travailleurs</p>
            </div>
          </div>
          <p className="text-xl text-green-100 max-w-3xl">
            Obligations de l&apos;employeur en matière de prévention et de lutte contre l&apos;incendie
            pour assurer la sécurité des salariés.
          </p>
        </div>
      </section>

      {/* Principe général */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
            <h2 className="text-xl font-bold text-navy-700 mb-3">Obligation générale de sécurité</h2>
            <p className="text-gray-700">
              <strong>Article L4121-1 du Code du travail :</strong> L&apos;employeur prend les mesures
              nécessaires pour assurer la sécurité et protéger la santé physique et mentale des travailleurs.
              Ces mesures comprennent des actions de prévention des risques professionnels,
              des actions d&apos;information et de formation, la mise en place d&apos;une organisation
              et de moyens adaptés.
            </p>
          </div>
        </div>
      </section>

      {/* Obligations détaillées */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Obligations en matière d&apos;incendie</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {obligations.map((obligation) => (
              <div key={obligation.titre} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-700">{obligation.titre}</h3>
                    <p className="text-sm text-gray-500">Articles {obligation.articles}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {obligation.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exercices d'évacuation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Exercices d&apos;évacuation</h2>

          <div className="bg-green-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-navy-700 mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  Organisation
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Fréquence : <strong>tous les 6 mois</strong> minimum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Implication de tout le personnel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Test des dispositifs d&apos;alarme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Vérification des cheminements</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-navy-700 mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-green-600" />
                  Compte-rendu
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Date et heure de l&apos;exercice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Temps d&apos;évacuation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Difficultés rencontrées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Actions correctives à mener</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  <strong>Important :</strong> Les exercices doivent être consignés dans le registre
                  de sécurité de l&apos;établissement avec la date, le temps d&apos;évacuation et les observations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Effectifs et seuils */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Seuils et effectifs</h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Effectif</th>
                  <th className="px-6 py-4 text-left">Obligations spécifiques</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-6 py-4 font-semibold">&gt; 5 personnes</td>
                  <td className="px-6 py-4 text-gray-700">Consignes de sécurité affichées</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">&gt; 50 personnes</td>
                  <td className="px-6 py-4 text-gray-700">
                    Portes ouvrant dans le sens de l&apos;évacuation, 2 sorties minimum
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">&gt; 50 personnes + matières inflammables</td>
                  <td className="px-6 py-4 text-gray-700">
                    Système d&apos;alarme sonore obligatoire
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">&gt; 700 personnes</td>
                  <td className="px-6 py-4 text-gray-700">
                    Service de sécurité incendie possible
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Formations et accompagnement
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Formation manipulation extincteurs, exercices d&apos;évacuation,
            mise en conformité de vos locaux...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Demander un devis
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/boutique"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Nos formations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
