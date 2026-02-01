import { Metadata } from 'next'
import Link from 'next/link'
import { Factory, ArrowRight, CheckCircle, AlertTriangle, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Réglementation ICPE - Installations Classées',
  description: 'Guide de la réglementation ICPE en France : nomenclature, régimes de déclaration, enregistrement, autorisation, sites SEVESO.',
}

const regimes = [
  {
    code: 'D',
    nom: 'Déclaration',
    description: 'Activités les moins dangereuses. Simple déclaration en préfecture.',
    color: 'bg-green-500',
    obligations: ['Déclaration en préfecture', 'Respect des prescriptions générales', 'Pas de contrôle préalable'],
  },
  {
    code: 'DC',
    nom: 'Déclaration avec contrôle',
    description: 'Déclaration avec contrôle périodique par un organisme agréé.',
    color: 'bg-yellow-500',
    obligations: ['Déclaration en préfecture', 'Contrôle périodique obligatoire', 'Prescriptions générales renforcées'],
  },
  {
    code: 'E',
    nom: 'Enregistrement',
    description: 'Régime intermédiaire avec examen préalable du dossier.',
    color: 'bg-orange-500',
    obligations: ['Dossier de demande', 'Consultation du public', 'Arrêté préfectoral d\'enregistrement'],
  },
  {
    code: 'A',
    nom: 'Autorisation',
    description: 'Activités les plus dangereuses. Étude d\'impact et enquête publique.',
    color: 'bg-red-500',
    obligations: ['Étude d\'impact', 'Étude de dangers', 'Enquête publique', 'Arrêté préfectoral d\'autorisation'],
  },
]

const seveso = [
  {
    seuil: 'Seuil bas',
    description: 'Établissements présentant des risques importants',
    obligations: ['Politique de prévention des accidents majeurs (PPAM)', 'Système de gestion de la sécurité (SGS)'],
  },
  {
    seuil: 'Seuil haut',
    description: 'Établissements présentant des risques majeurs',
    obligations: ['PPAM et SGS renforcés', 'Étude de dangers approfondie', 'Plan d\'opération interne (POI)', 'Plan particulier d\'intervention (PPI)', 'Information du public'],
  },
]

export default function ReglementationICPE() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-orange-200 mb-4">
            <Link href="/reglementation" className="hover:text-white transition-colors">
              Réglementation
            </Link>
            <span>/</span>
            <span>ICPE</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 p-4 rounded-xl">
              <Factory className="h-10 w-10" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Réglementation ICPE</h1>
              <p className="text-xl text-orange-200">Installations Classées pour la Protection de l&apos;Environnement</p>
            </div>
          </div>
          <p className="text-xl text-orange-100 max-w-3xl">
            Les ICPE sont des installations industrielles ou agricoles susceptibles de créer
            des risques ou des nuisances pour l&apos;environnement.
          </p>
        </div>
      </section>

      {/* Définition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
            <h2 className="text-xl font-bold text-navy-700 mb-3">Qu&apos;est-ce qu&apos;une ICPE ?</h2>
            <p className="text-gray-700">
              <strong>Article L511-1 du Code de l&apos;environnement :</strong> Sont soumis aux dispositions
              du présent titre les usines, ateliers, dépôts, chantiers et, d&apos;une manière générale,
              les installations exploitées ou détenues par toute personne physique ou morale,
              publique ou privée, qui peuvent présenter des dangers ou des inconvénients soit
              pour la commodité du voisinage, soit pour la santé, la sécurité, la salubrité publiques,
              soit pour l&apos;agriculture, soit pour la protection de la nature, de l&apos;environnement
              et des paysages, soit pour l&apos;utilisation rationnelle de l&apos;énergie, soit pour la conservation
              des sites et des monuments ainsi que des éléments du patrimoine archéologique.
            </p>
          </div>
        </div>
      </section>

      {/* Régimes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Les 4 régimes ICPE</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {regimes.map((regime) => (
              <div key={regime.code} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`${regime.color} text-white px-6 py-4 flex items-center gap-3`}>
                  <span className="text-3xl font-bold">{regime.code}</span>
                  <div>
                    <h3 className="font-bold text-lg">{regime.nom}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{regime.description}</p>
                  <h4 className="font-semibold text-navy-700 mb-2">Obligations :</h4>
                  <ul className="space-y-2">
                    {regime.obligations.map((obligation) => (
                      <li key={obligation} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        {obligation}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nomenclature */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">La nomenclature ICPE</h2>

          <div className="bg-gray-50 rounded-xl p-8">
            <p className="text-gray-700 mb-6">
              La nomenclature ICPE est un tableau qui répertorie toutes les activités
              et substances soumises à la réglementation. Elle se compose de 4 000+ rubriques
              organisées en plusieurs familles :
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-navy-700 mb-2">Rubriques 1xxx</h4>
                <p className="text-sm text-gray-600">Substances (toxiques, inflammables, comburantes...)</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-navy-700 mb-2">Rubriques 2xxx</h4>
                <p className="text-sm text-gray-600">Activités (agroalimentaire, bois, métaux, déchets...)</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-navy-700 mb-2">Rubriques 3xxx</h4>
                <p className="text-sm text-gray-600">Activités relevant de la directive IED</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-navy-700 mb-2">Rubriques 4xxx</h4>
                <p className="text-sm text-gray-600">Substances dangereuses (directive SEVESO)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEVESO */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="h-8 w-8 text-orange-500" />
            <h2 className="section-title mb-0">Sites SEVESO</h2>
          </div>

          <p className="text-gray-700 mb-8">
            Les établissements SEVESO sont des sites industriels présentant des risques
            d&apos;accidents majeurs impliquant des substances dangereuses.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {seveso.map((seuil) => (
              <div key={seuil.seuil} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-navy-700 mb-2">{seuil.seuil}</h3>
                <p className="text-gray-600 mb-4">{seuil.description}</p>
                <h4 className="font-semibold text-gray-700 mb-2">Obligations spécifiques :</h4>
                <ul className="space-y-2">
                  {seuil.obligations.map((obligation) => (
                    <li key={obligation} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                      {obligation}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Expertise ICPE et SEVESO
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Accompagnement réglementaire, études de dangers, POI...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Demander un devis
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/boutique"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Guide ICPE
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
