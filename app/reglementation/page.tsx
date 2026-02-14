import { Metadata } from 'next'
import Link from 'next/link'
import { Book, Building2, Building, Factory, Briefcase, ArrowRight, FileText, Scale, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Réglementation Incendie en France',
  description: 'Guide complet de la réglementation incendie en France : ERP, IGH, ICPE, Code du travail. Textes officiels, obligations et conseils pratiques.',
}

const categories = [
  {
    title: 'ERP',
    subtitle: 'Établissements Recevant du Public',
    description: 'Réglementation complète des ERP : classement, obligations, registre de sécurité, commissions de sécurité.',
    icon: Building2,
    href: '/reglementation/erp',
    color: 'bg-blue-500',
    items: ['Types et catégories', 'Règlement de sécurité', 'Commissions de sécurité', 'Registre de sécurité'],
  },
  {
    title: 'IGH',
    subtitle: 'Immeubles de Grande Hauteur',
    description: 'Réglementation spécifique aux IGH : définition, classes, dispositions constructives et techniques.',
    icon: Building,
    href: '/reglementation/igh',
    color: 'bg-purple-500',
    items: ['Classification IGH', 'Règles constructives', 'Moyens de secours', 'Exploitation'],
  },
  {
    title: 'ICPE',
    subtitle: 'Installations Classées',
    description: 'Installations classées pour la protection de l\'environnement : nomenclature, régimes, SEVESO.',
    icon: Factory,
    href: '/reglementation/icpe',
    color: 'bg-orange-500',
    items: ['Nomenclature ICPE', 'Régimes (D, E, A, S)', 'Sites SEVESO', 'Études de dangers'],
  },
  {
    title: 'Code du travail',
    subtitle: 'Sécurité des travailleurs',
    description: 'Obligations de l\'employeur en matière de sécurité incendie : formation, évacuation, moyens de secours.',
    icon: Briefcase,
    href: '/reglementation/code-travail',
    color: 'bg-green-500',
    items: ['Obligations employeur', 'Formation incendie', 'Consignes de sécurité', 'Exercices d\'évacuation'],
  },
]

const textesCles = [
  {
    title: 'Arrêté du 25 juin 1980',
    description: 'Règlement de sécurité contre les risques d\'incendie dans les ERP',
    type: 'ERP',
  },
  {
    title: 'Code de la construction',
    description: 'Articles R143-2 à R143-47 relatifs à la protection contre l\'incendie',
    type: 'Général',
  },
  {
    title: 'Arrêté du 30 décembre 2011',
    description: 'Règlement de sécurité pour les IGH',
    type: 'IGH',
  },
  {
    title: 'Code de l\'environnement',
    description: 'Livre V - Titre Ier relatif aux ICPE',
    type: 'ICPE',
  },
]

export default function Reglementation() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Scale className="h-4 w-4" />
              Guide réglementaire
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Réglementation Incendie en France</h1>
            <p className="text-xl text-gray-300">
              Naviguez dans la réglementation française en matière de sécurité incendie.
              Textes officiels, obligations et conseils pratiques pour chaque type d&apos;établissement.
            </p>
          </div>
        </div>
      </section>

      {/* Catégories principales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Par type d&apos;établissement</h2>
            <p className="section-subtitle mx-auto">
              Sélectionnez le type d&apos;établissement pour accéder à la réglementation applicable
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="card group hover:border-fire-500 border-2 border-transparent"
              >
                <div className="flex items-start gap-4">
                  <div className={`${category.color} p-4 rounded-xl text-white group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold text-navy-700">{category.title}</h3>
                      <ArrowRight className="h-5 w-5 text-fire-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-fire-500 font-medium mb-3">{category.subtitle}</p>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-fire-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Textes clés */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Textes réglementaires clés</h2>
            <p className="section-subtitle mx-auto">
              Les principaux textes de référence en matière de sécurité incendie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {textesCles.map((texte) => (
              <div key={texte.title} className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
                <div className="bg-navy-700/10 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-navy-700" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-navy-700">{texte.title}</h3>
                    <span className="text-xs bg-fire-500/10 text-fire-500 px-2 py-0.5 rounded-full">
                      {texte.type}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{texte.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Besoin d'aide */}
      <section className="py-20 bg-gradient-to-r from-fire-500 to-fire-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AlertTriangle className="h-12 w-12 mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Besoin d&apos;un accompagnement réglementaire ?
              </h2>
              <p className="text-white/90 mb-6">
                La réglementation incendie est complexe et en constante évolution.
                Nos experts vous accompagnent pour garantir la conformité de vos établissements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  Audit de conformité réglementaire
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  Veille réglementaire personnalisée
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  Accompagnement aux commissions de sécurité
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-fire-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Demander un devis
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/boutique"
                className="border-2 border-white text-white hover:bg-white hover:text-fire-600 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <Book className="h-5 w-5" />
                Nos documents
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
