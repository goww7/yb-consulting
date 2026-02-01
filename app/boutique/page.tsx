'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, FileText, BookOpen, Video, Users, Download, CheckCircle, Star, Filter } from 'lucide-react'

type Product = {
  id: string
  name: string
  description: string
  price: number
  category: string
  type: 'document' | 'formation' | 'service'
  popular?: boolean
  features: string[]
}

const products: Product[] = [
  // Documents
  {
    id: 'reg-erp-guide',
    name: 'Guide complet réglementation ERP',
    description: 'Guide exhaustif de la réglementation ERP avec tableaux récapitulatifs, exemples et cas pratiques.',
    price: 49,
    category: 'ERP',
    type: 'document',
    popular: true,
    features: ['PDF téléchargeable', '150+ pages', 'Mises à jour incluses', 'Tableaux récapitulatifs'],
  },
  {
    id: 'registre-securite',
    name: 'Modèle de registre de sécurité',
    description: 'Modèle complet de registre de sécurité conforme à la réglementation, personnalisable.',
    price: 29,
    category: 'ERP',
    type: 'document',
    features: ['Format Word modifiable', 'Conforme réglementation', 'Guide de remplissage', 'Fiches annexes'],
  },
  {
    id: 'check-list-commission',
    name: 'Check-list visite commission',
    description: 'Liste de vérification complète pour préparer la visite de la commission de sécurité.',
    price: 19,
    category: 'ERP',
    type: 'document',
    features: ['PDF + Excel', '200+ points de contrôle', 'Par type d\'ERP', 'Conseils pratiques'],
  },
  {
    id: 'plan-evacuation',
    name: 'Kit plan d\'évacuation',
    description: 'Modèles de plans d\'évacuation et consignes de sécurité à personnaliser.',
    price: 39,
    category: 'Général',
    type: 'document',
    features: ['Fichiers sources modifiables', 'Pictogrammes inclus', 'Consignes types', 'Guide affichage'],
  },
  {
    id: 'guide-icpe',
    name: 'Guide réglementation ICPE',
    description: 'Comprendre la réglementation ICPE : nomenclature, régimes, obligations.',
    price: 59,
    category: 'ICPE',
    type: 'document',
    features: ['PDF téléchargeable', '100+ pages', 'Nomenclature commentée', 'Cas pratiques'],
  },
  {
    id: 'dossier-autorisation',
    name: 'Modèle dossier autorisation ERP',
    description: 'Trame complète pour constituer un dossier d\'autorisation de travaux ou d\'ouverture ERP.',
    price: 79,
    category: 'ERP',
    type: 'document',
    popular: true,
    features: ['Word modifiable', 'Notices explicatives', 'Exemples remplis', 'Pièces à joindre'],
  },
  // Formations
  {
    id: 'formation-erp-base',
    name: 'Formation ERP - Les fondamentaux',
    description: 'Formation en ligne sur les bases de la réglementation ERP. Accessible 1 an.',
    price: 199,
    category: 'ERP',
    type: 'formation',
    popular: true,
    features: ['4h de vidéo', 'Quiz interactifs', 'Certificat', 'Accès 1 an'],
  },
  {
    id: 'formation-registre',
    name: 'Formation tenue du registre de sécurité',
    description: 'Maîtrisez la tenue du registre de sécurité et les vérifications obligatoires.',
    price: 149,
    category: 'ERP',
    type: 'formation',
    features: ['2h de vidéo', 'Exercices pratiques', 'Modèles inclus', 'Accès 1 an'],
  },
  {
    id: 'formation-evacuation',
    name: 'Formation guide-file / serre-file',
    description: 'Formation complète pour les équipiers d\'évacuation.',
    price: 99,
    category: 'Général',
    type: 'formation',
    features: ['1h30 de vidéo', 'Mise en situation', 'Attestation', 'Accès 6 mois'],
  },
  // Services
  {
    id: 'audit-erp',
    name: 'Audit de conformité ERP',
    description: 'Audit complet de votre établissement avec rapport détaillé et plan d\'action.',
    price: 890,
    category: 'ERP',
    type: 'service',
    popular: true,
    features: ['Visite sur site', 'Rapport complet', 'Plan d\'action', 'Suivi 3 mois'],
  },
  {
    id: 'accompagnement-commission',
    name: 'Accompagnement commission de sécurité',
    description: 'Préparation et accompagnement pour la visite de la commission de sécurité.',
    price: 490,
    category: 'ERP',
    type: 'service',
    features: ['Pré-visite', 'Check-list complète', 'Présence jour J', 'Compte-rendu'],
  },
  {
    id: 'veille-reglementaire',
    name: 'Veille réglementaire annuelle',
    description: 'Abonnement annuel à notre veille réglementaire personnalisée.',
    price: 290,
    category: 'Général',
    type: 'service',
    features: ['Newsletter mensuelle', 'Alertes textes', 'Synthèses commentées', 'Hotline'],
  },
]

const categories = ['Tous', 'ERP', 'ICPE', 'Général']
const types = [
  { value: 'all', label: 'Tous les types', icon: Filter },
  { value: 'document', label: 'Documents', icon: FileText },
  { value: 'formation', label: 'Formations', icon: Video },
  { value: 'service', label: 'Services', icon: Users },
]

export default function Boutique() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [selectedType, setSelectedType] = useState('all')

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'Tous' || product.category === selectedCategory
    const typeMatch = selectedType === 'all' || product.type === selectedType
    return categoryMatch && typeMatch
  })

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-fire-500/20 text-fire-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShoppingCart className="h-4 w-4" />
              Boutique en ligne
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Documents & Services</h1>
            <p className="text-xl text-gray-300">
              Guides pratiques, modèles de documents, formations et services d&apos;accompagnement
              pour maîtriser la sécurité incendie de vos établissements.
            </p>
          </div>
        </div>
      </section>

      {/* Filtres et produits */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filtres */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Catégories */}
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Catégorie</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === cat
                          ? 'bg-fire-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Types */}
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Type</label>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setSelectedType(type.value)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                        selectedType === type.value
                          ? 'bg-navy-700 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <type.icon className="h-4 w-4" />
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Résultats */}
          <p className="text-gray-600 mb-6">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
          </p>

          {/* Grille produits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Badge type */}
                <div className="relative">
                  <div className={`h-2 ${
                    product.type === 'document' ? 'bg-blue-500' :
                    product.type === 'formation' ? 'bg-purple-500' : 'bg-green-500'
                  }`} />
                  {product.popular && (
                    <div className="absolute top-4 right-4 bg-fire-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Populaire
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Type badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      product.type === 'document' ? 'bg-blue-100 text-blue-700' :
                      product.type === 'formation' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {product.type === 'document' ? 'Document' :
                       product.type === 'formation' ? 'Formation' : 'Service'}
                    </span>
                    <span className="text-xs text-gray-500">{product.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-700 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                  {/* Features */}
                  <ul className="space-y-1 mb-6">
                    {product.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Prix et CTA */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-2xl font-bold text-navy-700">{product.price}€</span>
                      {product.type === 'service' && <span className="text-sm text-gray-500"> HT</span>}
                    </div>
                    <button className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
                      {product.type === 'document' ? (
                        <>
                          <Download className="h-4 w-4" />
                          Acheter
                        </>
                      ) : product.type === 'formation' ? (
                        <>
                          <BookOpen className="h-4 w-4" />
                          S&apos;inscrire
                        </>
                      ) : (
                        <>
                          <Users className="h-4 w-4" />
                          Demander
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Pourquoi choisir nos documents ?</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-fire-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-fire-500" />
              </div>
              <h3 className="font-bold text-navy-700 mb-2">Conformes</h3>
              <p className="text-sm text-gray-600">Documents conformes à la réglementation en vigueur</p>
            </div>

            <div className="text-center">
              <div className="bg-fire-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-fire-500" />
              </div>
              <h3 className="font-bold text-navy-700 mb-2">Téléchargement immédiat</h3>
              <p className="text-sm text-gray-600">Accès instantané après paiement sécurisé</p>
            </div>

            <div className="text-center">
              <div className="bg-fire-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-fire-500" />
              </div>
              <h3 className="font-bold text-navy-700 mb-2">Modifiables</h3>
              <p className="text-sm text-gray-600">Formats Word/Excel pour personnalisation</p>
            </div>

            <div className="text-center">
              <div className="bg-fire-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-fire-500" />
              </div>
              <h3 className="font-bold text-navy-700 mb-2">Support expert</h3>
              <p className="text-sm text-gray-600">Questions ? Notre équipe vous répond</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA personnalisé */}
      <section className="py-16 bg-gradient-to-r from-fire-500 to-fire-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d&apos;un document sur mesure ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nous pouvons créer des documents personnalisés adaptés à votre établissement et vos besoins spécifiques.
          </p>
          <Link
            href="/contact"
            className="bg-white text-fire-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </>
  )
}
