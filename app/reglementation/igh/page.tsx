import { Metadata } from 'next'
import Link from 'next/link'
import { Building, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Réglementation IGH - Immeubles de Grande Hauteur',
  description: 'Guide de la réglementation IGH en France : définition, classes, dispositions constructives et techniques, moyens de secours.',
}

const classesIGH = [
  { classe: 'GHA', nom: 'Habitation', hauteur: '> 50 m' },
  { classe: 'GHO', nom: 'Hôtel', hauteur: '> 28 m' },
  { classe: 'GHR', nom: 'Enseignement', hauteur: '> 28 m' },
  { classe: 'GHS', nom: 'Dépôt d\'archives', hauteur: '> 28 m' },
  { classe: 'GHU', nom: 'Sanitaire', hauteur: '> 28 m' },
  { classe: 'GHW1', nom: 'Bureaux (28-50m)', hauteur: '28 à 50 m' },
  { classe: 'GHW2', nom: 'Bureaux (>50m)', hauteur: '> 50 m' },
  { classe: 'GHZ', nom: 'Usage mixte', hauteur: '> 28 m' },
  { classe: 'GHTC', nom: 'Tour de contrôle', hauteur: '> 28 m' },
  { classe: 'ITGH', nom: 'Immeuble de Très Grande Hauteur', hauteur: '> 200 m' },
]

export default function ReglementationIGH() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-purple-200 mb-4">
            <Link href="/reglementation" className="hover:text-white transition-colors">
              Réglementation
            </Link>
            <span>/</span>
            <span>IGH</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 p-4 rounded-xl">
              <Building className="h-10 w-10" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Réglementation IGH</h1>
              <p className="text-xl text-purple-200">Immeubles de Grande Hauteur</p>
            </div>
          </div>
          <p className="text-xl text-purple-100 max-w-3xl">
            Réglementation spécifique aux immeubles dont le plancher bas du dernier niveau
            est situé à plus de 28 mètres (50 m pour habitation).
          </p>
        </div>
      </section>

      {/* Définition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
            <h2 className="text-xl font-bold text-navy-700 mb-3">Définition d&apos;un IGH</h2>
            <p className="text-gray-700">
              <strong>Article R146-3 du CCH :</strong> Constitue un immeuble de grande hauteur
              tout corps de bâtiment dont le plancher bas du dernier niveau est situé,
              par rapport au niveau du sol le plus haut utilisable pour les engins des services de secours :
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500" />
                <span>À plus de <strong>50 mètres</strong> pour les immeubles à usage d&apos;habitation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-500" />
                <span>À plus de <strong>28 mètres</strong> pour tous les autres immeubles</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Classes IGH */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Classes d&apos;IGH</h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Classe</th>
                  <th className="px-6 py-4 text-left">Usage</th>
                  <th className="px-6 py-4 text-left">Hauteur seuil</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {classesIGH.map((igh) => (
                  <tr key={igh.classe} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span className="bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded">
                        {igh.classe}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{igh.nom}</td>
                    <td className="px-6 py-4 text-gray-700">{igh.hauteur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Principes de sécurité */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Principes de sécurité IGH</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold text-navy-700 mb-4">Compartimentage</h3>
              <p className="text-gray-600 mb-4">
                L&apos;IGH est divisé en compartiments de 2 500 m² maximum,
                recoupés tous les 75 m de façade.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  Parois CF 2h minimum
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  Portes CF 1h avec ferme-porte
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  Gaines techniques recoupées
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-navy-700 mb-4">Évacuation</h3>
              <p className="text-gray-600 mb-4">
                Principe d&apos;évacuation différée : les occupants se réfugient
                dans un compartiment non sinistré.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  2 escaliers encloisonnés minimum
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  Escaliers en surpression
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  Ascenseurs prioritaires pompiers
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-navy-700 mb-4">Moyens de secours</h3>
              <p className="text-gray-600 mb-4">
                Dispositifs renforcés pour permettre l&apos;intervention des secours.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  Colonne sèche ou humide
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  Détection automatique généralisée
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  Poste central de sécurité
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-navy-700 mb-4">Service de sécurité</h3>
              <p className="text-gray-600 mb-4">
                Présence obligatoire d&apos;un service de sécurité incendie permanent.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  Agents SSIAP 24h/24
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  Chef de service SSIAP 3
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  Rondes régulières
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What could go wrong */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <h2 className="section-title mb-0">Enjeux spécifiques aux IGH</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
              <h3 className="font-bold text-navy-700 mb-2">Évacuation complexe</h3>
              <p className="text-gray-600 text-sm">
                Un défaut de compartimentage ou de désenfumage dans un IGH peut rendre
                l&apos;évacuation impossible. Les conséquences d&apos;un incendie en hauteur
                sont démultipliées par rapport à un bâtiment classique.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500">
              <h3 className="font-bold text-navy-700 mb-2">Coûts de mise en conformité</h3>
              <p className="text-gray-600 text-sm">
                Reporter les travaux de conformité dans un IGH entraîne souvent
                une multiplication des coûts. Un audit précoce permet d&apos;anticiper
                et de lisser les investissements sur plusieurs exercices.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-yellow-500">
              <h3 className="font-bold text-navy-700 mb-2">Service de sécurité défaillant</h3>
              <p className="text-gray-600 text-sm">
                Un service SSIAP sous-dimensionné ou insuffisamment formé est l&apos;une
                des non-conformités les plus fréquentes constatées lors de nos audits IGH.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sécurisez votre IGH avec un expert certifié
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Audit de compartimentage, vérification des moyens de secours, accompagnement SSIAP —
            notre expertise IGH est à votre disposition.
          </p>
          <Link
            href="/contact"
            className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            Planifier un audit IGH
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
