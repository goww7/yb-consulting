'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, FileText, BookOpen, Video, Users, Download, CheckCircle, Star, Filter, ArrowRight } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper'

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
      <section className="bg-navy-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <ShoppingCart className="h-4 w-4" />
                Boutique en ligne
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Documents & Services
              </h1>
              <p className="text-lg text-gray-300">
                Guides pratiques, modèles de documents, formations et services d&apos;accompagnement
                pour maîtriser la sécurité incendie de vos établissements.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Filtres et produits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filtres */}
          <FadeIn>
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-10 border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Catégories */}
                <div className="flex-1">
                  <label className="text-sm font-semibold text-navy-700 mb-3 block">Catégorie</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          selectedCategory === cat
                            ? 'bg-fire-500 text-white shadow-lg shadow-fire-500/30'
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
                  <label className="text-sm font-semibold text-navy-700 mb-3 block">Type</label>
                  <div className="flex flex-wrap gap-2">
                    {types.map((type) => (
                      <button
                        key={type.value}
                        onClick={() => setSelectedType(type.value)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                          selectedType === type.value
                            ? 'bg-navy-700 text-white shadow-lg'
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
          </FadeIn>

          {/* Résultats */}
          <FadeIn>
            <p className="text-gray-600 mb-8 font-medium">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
            </p>
          </FadeIn>

          {/* Grille produits */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <StaggerItem key={product.id}>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all group border border-gray-100">
                  {/* Badge type */}
                  <div className="relative">
                    <div className={`h-1.5 ${
                      product.type === 'document' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                      product.type === 'formation' ? 'bg-gradient-to-r from-purple-400 to-purple-600' : 'bg-gradient-to-r from-green-400 to-green-600'
                    }`} />
                    {product.popular && (
                      <div className="absolute top-4 right-4 bg-fire-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg shadow-fire-500/30">
                        <Star className="h-3 w-3" />
                        Populaire
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Type badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        product.type === 'document' ? 'bg-blue-50 text-blue-600' :
                        product.type === 'formation' ? 'bg-purple-50 text-purple-600' : 'bg-green-50 text-green-600'
                      }`}>
                        {product.type === 'document' ? 'Document' :
                         product.type === 'formation' ? 'Formation' : 'Service'}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">{product.category}</span>
                    </div>

                    <h3 className="text-lg font-bold text-navy-700 mb-2 group-hover:text-fire-500 transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-5 line-clamp-2">{product.description}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Prix et CTA */}
                    <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                      <div>
                        <span className="text-2xl font-bold text-navy-700">{product.price}€</span>
                        {product.type === 'service' && <span className="text-sm text-gray-500 ml-1">HT</span>}
                      </div>
                      <button className="bg-gradient-to-r from-fire-500 to-fire-600 hover:from-fire-600 hover:to-fire-700 text-white font-semibold py-2.5 px-5 rounded-xl transition-all text-sm flex items-center gap-2 shadow-lg shadow-fire-500/20">
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Nos garanties
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-4">
              Pourquoi choisir nos documents ?
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle, title: 'Conformes', desc: 'Documents conformes à la réglementation en vigueur' },
              { icon: Download, title: 'Téléchargement immédiat', desc: 'Accès instantané après paiement sécurisé' },
              { icon: FileText, title: 'Modifiables', desc: 'Formats Word/Excel pour personnalisation' },
              { icon: Users, title: 'Support expert', desc: 'Questions ? Notre équipe vous répond' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="text-center group">
                  <div className="bg-fire-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-fire-500 transition-colors">
                    <item.icon className="h-8 w-8 text-fire-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-navy-700 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA personnalisé */}
      <section className="py-16 bg-fire-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Besoin d&apos;un document sur mesure ?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Nous pouvons créer des documents personnalisés adaptés à votre établissement.
          </p>
          <Link
            href="/contact"
            className="bg-white text-fire-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Contactez-nous
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
