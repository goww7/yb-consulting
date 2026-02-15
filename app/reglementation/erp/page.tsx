import { Metadata } from 'next'
import Link from 'next/link'
import { Building2, ArrowRight, FileText, Users, Shield, ClipboardList, AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Réglementation ERP - Établissements Recevant du Public',
  description: 'Guide complet de la réglementation ERP en France : types, catégories, obligations, registre de sécurité, commissions de sécurité.',
}

const typesERP = [
  { lettre: 'J', nom: 'Structures d\'accueil pour personnes âgées ou handicapées' },
  { lettre: 'L', nom: 'Salles d\'auditions, de conférences, de réunions, de spectacles' },
  { lettre: 'M', nom: 'Magasins de vente, centres commerciaux' },
  { lettre: 'N', nom: 'Restaurants et débits de boissons' },
  { lettre: 'O', nom: 'Hôtels et pensions de famille' },
  { lettre: 'P', nom: 'Salles de danse et salles de jeux' },
  { lettre: 'R', nom: 'Établissements d\'enseignement, colonies de vacances' },
  { lettre: 'S', nom: 'Bibliothèques, centres de documentation' },
  { lettre: 'T', nom: 'Salles d\'expositions' },
  { lettre: 'U', nom: 'Établissements de soins' },
  { lettre: 'V', nom: 'Établissements de culte' },
  { lettre: 'W', nom: 'Administrations, banques, bureaux' },
  { lettre: 'X', nom: 'Établissements sportifs couverts' },
  { lettre: 'Y', nom: 'Musées' },
]

const typesSpeciaux = [
  { lettre: 'PA', nom: 'Établissements de plein air' },
  { lettre: 'CTS', nom: 'Chapiteaux, tentes et structures' },
  { lettre: 'SG', nom: 'Structures gonflables' },
  { lettre: 'PS', nom: 'Parcs de stationnement couverts' },
  { lettre: 'OA', nom: 'Hôtels-restaurants d\'altitude' },
  { lettre: 'GA', nom: 'Gares accessibles au public' },
  { lettre: 'EF', nom: 'Établissements flottants' },
  { lettre: 'REF', nom: 'Refuges de montagne' },
]

const categories = [
  { cat: '1', seuil: '> 1 500 personnes', groupe: '1er groupe' },
  { cat: '2', seuil: '701 à 1 500 personnes', groupe: '1er groupe' },
  { cat: '3', seuil: '301 à 700 personnes', groupe: '1er groupe' },
  { cat: '4', seuil: '≤ 300 personnes (sauf 5e cat.)', groupe: '1er groupe' },
  { cat: '5', seuil: 'Sous les seuils du type', groupe: '2e groupe' },
]

export default function ReglementationERP() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-200 mb-4">
            <Link href="/reglementation" className="hover:text-white transition-colors">
              Réglementation
            </Link>
            <span>/</span>
            <span>ERP</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 p-4 rounded-xl">
              <Building2 className="h-10 w-10" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Réglementation ERP</h1>
              <p className="text-xl text-blue-200">Établissements Recevant du Public</p>
            </div>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Tout savoir sur la réglementation applicable aux ERP en France :
            classement, obligations, commissions de sécurité et registre de sécurité.
          </p>
        </div>
      </section>

      {/* Définition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <h2 className="text-xl font-bold text-navy-700 mb-3">Qu&apos;est-ce qu&apos;un ERP ?</h2>
            <p className="text-gray-700">
              <strong>Article R143-2 du Code de la construction et de l&apos;habitation :</strong><br />
              &quot;Constituent des établissements recevant du public tous bâtiments, locaux et enceintes
              dans lesquels des personnes sont admises, soit librement, soit moyennant une rétribution
              ou une participation quelconque, ou dans lesquels sont tenues des réunions ouvertes à tout
              venant ou sur invitation, payantes ou non.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Classification */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Classification des ERP</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Types */}
            <div>
              <h3 className="text-xl font-bold text-navy-700 mb-6 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-500" />
                Types d&apos;ERP (selon l&apos;activité)
              </h3>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-navy-700 text-white px-4 py-3 font-semibold">
                  Types courants
                </div>
                <div className="divide-y">
                  {typesERP.map((type) => (
                    <div key={type.lettre} className="px-4 py-3 flex items-start gap-3">
                      <span className="bg-blue-500 text-white text-sm font-bold w-8 h-8 rounded flex items-center justify-center shrink-0">
                        {type.lettre}
                      </span>
                      <span className="text-gray-700 text-sm">{type.nom}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden mt-6">
                <div className="bg-orange-500 text-white px-4 py-3 font-semibold">
                  Types spéciaux
                </div>
                <div className="divide-y">
                  {typesSpeciaux.map((type) => (
                    <div key={type.lettre} className="px-4 py-3 flex items-start gap-3">
                      <span className="bg-orange-500 text-white text-sm font-bold px-2 h-8 rounded flex items-center justify-center shrink-0">
                        {type.lettre}
                      </span>
                      <span className="text-gray-700 text-sm">{type.nom}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Catégories */}
            <div>
              <h3 className="text-xl font-bold text-navy-700 mb-6 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                Catégories (selon l&apos;effectif)
              </h3>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-navy-700 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Cat.</th>
                      <th className="px-4 py-3 text-left">Effectif</th>
                      <th className="px-4 py-3 text-left">Groupe</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {categories.map((cat) => (
                      <tr key={cat.cat} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <span className="bg-fire-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center">
                            {cat.cat}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-700">{cat.seuil}</td>
                        <td className="px-4 py-3">
                          <span className={`text-sm px-2 py-1 rounded ${cat.groupe === '1er groupe' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                            {cat.groupe}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-yellow-800">Important</p>
                    <p className="text-sm text-yellow-700">
                      Les ERP du 1er groupe (catégories 1 à 4) sont soumis à l&apos;avis
                      de la commission de sécurité avant ouverture et lors de visites périodiques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Obligations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Obligations de l&apos;exploitant</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <ClipboardList className="h-7 w-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">Registre de sécurité</h3>
              <p className="text-gray-600 mb-4">
                Document obligatoire consignant toutes les informations relatives à la sécurité.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Vérifications techniques
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Exercices d&apos;évacuation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Formations du personnel
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Travaux réalisés
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">Moyens de secours</h3>
              <p className="text-gray-600 mb-4">
                Installation et maintenance des équipements de sécurité incendie.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Extincteurs (vérification annuelle)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Système de détection incendie
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Éclairage de sécurité
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Désenfumage
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">Formation & Organisation</h3>
              <p className="text-gray-600 mb-4">
                Formation du personnel et organisation de la sécurité.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Formation manipulation extincteurs
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Exercices d&apos;évacuation (2/an)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Consignes de sécurité affichées
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Service de sécurité (si requis)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commissions de sécurité */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Commissions de sécurité</h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-navy-700 mb-4">Visites périodiques</h3>
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left">Catégorie</th>
                      <th className="px-4 py-2 text-left">Périodicité</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-2">1ère catégorie</td>
                      <td className="px-4 py-2">2 ans (ou 3 ans selon type)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">2ème catégorie</td>
                      <td className="px-4 py-2">3 ans (ou 5 ans selon type)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">3ème catégorie</td>
                      <td className="px-4 py-2">3 ans (ou 5 ans selon type)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">4ème catégorie</td>
                      <td className="px-4 py-2">3 ans (ou 5 ans selon type)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">5ème catégorie</td>
                      <td className="px-4 py-2">Pas de visite périodique obligatoire</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-lg font-bold text-navy-700 mb-4">Avis de la commission</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="font-semibold text-green-800">Avis favorable</p>
                      <p className="text-sm text-green-700">L&apos;établissement peut ouvrir ou poursuivre son exploitation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                    <div>
                      <p className="font-semibold text-red-800">Avis défavorable</p>
                      <p className="text-sm text-red-700">Le maire peut ordonner la fermeture jusqu&apos;à mise en conformité.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What could go wrong */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <h2 className="section-title mb-0">Ce que vous risquez en cas de non-conformité</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
              <h3 className="font-bold text-navy-700 mb-2">Fermeture administrative</h3>
              <p className="text-gray-600 text-sm">
                Un avis défavorable de la commission de sécurité peut entraîner
                la fermeture immédiate de votre établissement par arrêté du maire.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500">
              <h3 className="font-bold text-navy-700 mb-2">Responsabilité pénale</h3>
              <p className="text-gray-600 text-sm">
                En cas d&apos;incendie, l&apos;exploitant engage sa responsabilité pénale personnelle.
                Les peines peuvent aller jusqu&apos;à 5 ans d&apos;emprisonnement et 75 000 € d&apos;amende.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-yellow-500">
              <h3 className="font-bold text-navy-700 mb-2">Défaut d&apos;assurance</h3>
              <p className="text-gray-600 text-sm">
                Une non-conformité avérée peut entraîner l&apos;annulation de votre contrat
                d&apos;assurance et le refus d&apos;indemnisation en cas de sinistre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ne risquez pas un avis défavorable
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nos experts ont accompagné des centaines d&apos;ERP vers la conformité. Audit, préparation
            aux commissions de sécurité, mise à jour du registre — nous vous guidons à chaque étape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Obtenir un diagnostic gratuit
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/boutique"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Documents et modèles ERP
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
