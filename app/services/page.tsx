'use client'

import Link from 'next/link'
import {
  Search, FileCheck, CheckCircle, ArrowRight, Shield, Target, BarChart,
  AlertTriangle, FileText, Users, Wrench, ClipboardCheck, Building2,
  Lock, Award, Zap, BarChart3, Download, GraduationCap, X
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper'
import CTASection from '@/components/CTASection'

const riskCategories = [
  'Chutes de plain-pied', 'Chutes de hauteur', 'Manutention manuelle',
  'Risques mécaniques', 'Risques électriques', 'Risques incendie/explosion',
  'Risques chimiques', 'Risques biologiques', 'Risques psychosociaux (RPS)',
  'Bruit', 'Vibrations', 'Rayonnements', 'Ambiances thermiques',
  'Travail sur écran', 'Travail isolé', 'Circulation interne',
  'Risques routiers', 'Travaux en hauteur', 'Espaces confinés',
  'Amiante', 'Atmosphères explosives (ATEX)', 'Agents CMR',
  'Risques liés aux équipements', 'Risques liés aux co-activités',
  'Risques naturels', 'Risques technologiques', 'Harcèlement moral et sexuel',
  'Addictions', 'Travail de nuit ou posté', 'Déplacements à l\'étranger',
]

const plans = [
  {
    name: 'Essentiel',
    price: 299,
    period: 'unique',
    desc: 'Pour les petites structures qui veulent être en conformité rapidement.',
    highlight: false,
    features: [
      { text: '1 organisation', included: true },
      { text: 'Jusqu\'à 3 unités de travail', included: true },
      { text: 'Évaluations illimitées', included: true },
      { text: 'Gestion des plans d\'action', included: true },
      { text: 'Export PDF conforme DUERP', included: true },
      { text: '1 Admin + 2 Évaluateurs', included: true },
      { text: 'Matrice de risques visuelle', included: false },
      { text: 'Support prioritaire', included: false },
    ],
  },
  {
    name: 'Professionnel',
    price: 599,
    period: 'unique',
    desc: 'Pour les entreprises qui veulent une couverture complète.',
    highlight: true,
    features: [
      { text: '1 organisation', included: true },
      { text: 'Jusqu\'à 10 unités de travail', included: true },
      { text: 'Évaluations illimitées', included: true },
      { text: 'Plans d\'action avec suivi avancé', included: true },
      { text: 'Export PDF, Excel, conformité', included: true },
      { text: '1 Admin + 5 Évaluateurs + Lecteurs illimités', included: true },
      { text: 'Matrice de risques visuelle', included: true },
      { text: 'Support email', included: true },
    ],
  },
  {
    name: 'Entreprise',
    price: 1299,
    period: '/ an',
    desc: 'Pour les grandes structures et les consultants multi-clients.',
    highlight: false,
    features: [
      { text: 'Organisations multiples', included: true },
      { text: 'Unités de travail illimitées', included: true },
      { text: 'Évaluations illimitées', included: true },
      { text: 'Plans d\'action avec Gantt', included: true },
      { text: 'Rapports en marque blanche', included: true },
      { text: 'Utilisateurs illimités', included: true },
      { text: 'Catégories personnalisables', included: true },
      { text: 'Support prioritaire + gestionnaire dédié', included: true },
    ],
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="h-4 w-4" />
                Nos services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Une expertise complète en
                <span className="text-fire-400"> sécurité incendie</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                De la prévention à l&apos;audit de vulnérabilité, en passant par l&apos;évaluation
                des risques professionnels (DUERP) et la formation de vos équipes.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Navigation rapide */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Prévention & Analyse', href: '#prevention' },
              { label: 'Audit de Vulnérabilité', href: '#audit' },
              { label: 'DUERP', href: '#duerp' },
              { label: 'Formation', href: '#formation' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-fire-500 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 1: Prévention & Analyse ===== */}
      <section id="prevention" className="py-24 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-fire-50 text-fire-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Search className="h-4 w-4" />
                Service 1
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-6">
                Prévention & Analyse des Risques
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Nous identifions les dangers, évaluons les risques et mettons en place
                un plan d&apos;action concret pour protéger vos établissements contre les
                risques d&apos;incendie et d&apos;explosion.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Un état des lieux clair de vos risques incendie',
                  'La conformité réglementaire de vos installations',
                  'Un plan d\'action chiffré et priorisé',
                  'La formation de vos équipes aux bons réflexes',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="bg-fire-500 hover:bg-fire-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                Planifier un diagnostic
                <ArrowRight className="h-5 w-5" />
              </Link>
            </FadeIn>

            <FadeIn>
              <div className="space-y-4">
                <div className="bg-fire-500 rounded-xl p-8 text-white">
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <div className="text-white/80 mb-4">Objectif conformité</div>
                  <p className="text-white/90">
                    Notre approche vise la conformité totale de vos installations
                    aux réglementations en vigueur.
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="text-sm font-semibold text-green-800 mb-1">Cas client type</div>
                  <p className="text-green-700 text-sm">
                    Un groupement hospitalier de 12 sites a réduit ses non-conformités
                    de 47 à 3 en 6 mois grâce à notre plan d&apos;action priorisé,
                    passant d&apos;un avis défavorable à un avis favorable de la commission.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 3 étapes */}
          <FadeIn className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy-700">
              3 étapes pour sécuriser vos installations
            </h3>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: '1. Diagnostic terrain',
                desc: 'Nous visitons votre site, identifions les sources de danger et analysons les zones à risque.',
              },
              {
                icon: AlertTriangle,
                title: '2. Évaluation des risques',
                desc: 'Nous classons les risques par niveau de gravité et analysons les scénarios d\'accident possibles.',
              },
              {
                icon: FileText,
                title: '3. Plan d\'action',
                desc: 'Vous recevez un plan d\'action priorisé avec des recommandations concrètes et un planning de mise en œuvre.',
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

      {/* ===== SECTION 2: Audit de Vulnérabilité ===== */}
      <section id="audit" className="py-24 bg-gray-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-navy-700/10 text-navy-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <FileCheck className="h-4 w-4" />
                Service 2
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-6">
                Audit de Vulnérabilité
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                L&apos;audit de vulnérabilité va au-delà de la simple conformité.
                Nous évaluons la capacité réelle de vos installations à résister
                aux risques d&apos;incendie et d&apos;explosion.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Cartographie précise de vos points faibles',
                  'Quantification des risques résiduels',
                  'Dimensionnement des protections nécessaires',
                  'Analyse coût/bénéfice de chaque amélioration',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="bg-fire-500 hover:bg-fire-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                Demander un audit de vulnérabilité
                <ArrowRight className="h-5 w-5" />
              </Link>
            </FadeIn>

            <FadeIn>
              <div className="space-y-4">
                <div className="bg-navy-700 rounded-xl p-8 text-white">
                  <div className="text-4xl font-bold mb-2">Expert</div>
                  <div className="text-white/80 mb-4">Ingénieur certifié INSSI</div>
                  <p className="text-white/90">
                    Notre expertise technique permet une analyse approfondie
                    de la vulnérabilité de vos installations.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="text-sm font-semibold text-blue-800 mb-1">Cas client type</div>
                  <p className="text-blue-700 text-sm">
                    Un site industriel ICPE a identifié 23 vulnérabilités critiques
                    lors de notre audit, dont un risque d&apos;effet domino non détecté.
                    Plan d&apos;action mis en œuvre en 3 mois, validé par la DREAL.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 4 étapes méthode audit */}
          <FadeIn className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy-700">
              4 étapes pour réduire votre vulnérabilité
            </h3>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: '1',
                title: 'Inventaire de vos actifs',
                desc: 'Identification et classification de vos éléments critiques : bâtiments, équipements, stockages, réseaux.',
                items: ['Actifs critiques identifiés', 'Interdépendances cartographiées'],
              },
              {
                num: '2',
                title: 'Analyse des scénarios',
                desc: 'Étude des scénarios d\'incendie et d\'explosion possibles et modélisation de leur propagation.',
                items: ['Sources d\'ignition identifiées', 'Effets domino évalués'],
              },
              {
                num: '3',
                title: 'Évaluation des protections',
                desc: 'Audit de vos moyens de protection existants et mesure de leur efficacité.',
                items: ['Protection passive et active', 'Détection et alarme'],
              },
              {
                num: '4',
                title: 'Rapport et plan d\'amélioration',
                desc: 'Rapport complet avec cartographie des vulnérabilités et plan d\'amélioration chiffré.',
                items: ['Recommandations chiffrées', 'Feuille de route technique'],
              },
            ].map((step) => (
              <StaggerItem key={step.num}>
                <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-br from-navy-700 to-navy-800 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg shrink-0 shadow-lg">
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy-700 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.desc}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {step.items.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
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

          {/* Livrables */}
          <div className="mt-16">
            <FadeIn className="text-center mb-8">
              <h3 className="text-2xl font-bold text-navy-700">Ce que vous recevez</h3>
            </FadeIn>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: FileCheck, title: 'Rapport d\'analyse', desc: 'Document technique complet' },
                { icon: Target, title: 'Matrice de vulnérabilité', desc: 'Cartographie des failles' },
                { icon: BarChart, title: 'Tableaux de bord', desc: 'Indicateurs de suivi' },
                { icon: Wrench, title: 'Plan d\'amélioration', desc: 'Actions chiffrées et priorisées' },
              ].map((item) => (
                <FadeIn key={item.title}>
                  <div className="bg-navy-700 rounded-xl p-6 text-center text-white">
                    <item.icon className="h-10 w-10 text-fire-400 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: DUERP ===== */}
      <section id="duerp" className="py-24 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-fire-500/10 text-fire-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <ClipboardCheck className="h-4 w-4" />
                Service 3
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-6">
                DUERP - Évaluation des Risques Professionnels
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Le Document Unique d&apos;Évaluation des Risques Professionnels est obligatoire
                pour toute entreprise. Notre plateforme digitale vous guide étape par étape :
                30 catégories de risques, calcul automatique et rapport PDF conforme.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Évaluation guidée des 30 familles de risques',
                  'Calcul automatique du risque brut et résiduel',
                  'Plans d\'action intégrés et suivis',
                  'Rapport PDF conforme à la réglementation',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/duerp/demo"
                  className="group bg-fire-500 hover:bg-fire-600 text-white font-semibold py-3 px-6 rounded-xl transition-all inline-flex items-center justify-center gap-2"
                >
                  Essayer la démo gratuite
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white font-semibold py-3 px-6 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                >
                  Demander un devis
                </Link>
              </div>
            </FadeIn>

            <FadeIn>
              {/* Preview card */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-red-50 rounded-xl p-4 text-center border border-red-100">
                    <div className="text-2xl font-bold text-red-600">12</div>
                    <div className="text-xs text-red-500">Élevés</div>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4 text-center border border-orange-100">
                    <div className="text-2xl font-bold text-orange-600">38</div>
                    <div className="text-xs text-orange-500">Moyens</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
                    <div className="text-2xl font-bold text-green-600">157</div>
                    <div className="text-xs text-green-500">Faibles</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Administration', pct: 85 },
                    { name: 'Production', pct: 100 },
                    { name: 'Logistique', pct: 45 },
                  ].map((ut) => (
                    <div key={ut.name} className="flex items-center gap-3">
                      <span className="text-sm text-gray-600 w-28">{ut.name}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-fire-500 h-2.5 rounded-full transition-all"
                          style={{ width: `${ut.pct}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-navy-700 w-12 text-right">{ut.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Obligation légale */}
          <div className="bg-navy-700 rounded-2xl p-8 mb-16">
            <div className="grid md:grid-cols-3 gap-8 text-white text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1,5M+</div>
                <div className="text-gray-300">Entreprises françaises concernées</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">40 ans</div>
                <div className="text-gray-300">Durée de conservation obligatoire</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">30</div>
                <div className="text-gray-300">Catégories de risques évaluées</div>
              </div>
            </div>
          </div>

          {/* Méthodologie */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <FadeIn>
              <h3 className="text-2xl font-bold text-navy-700 mb-6">
                Un calcul de risque éprouvé
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="font-bold text-navy-700 mb-2">Risque Brut = Gravité x Fréquence</div>
                  <p className="text-gray-600 text-sm">Mesure le danger intrinsèque, avant toute mesure de prévention.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="font-bold text-navy-700 mb-2">Risque Résiduel = Risque Brut / Prévention</div>
                  <p className="text-gray-600 text-sm">Mesure le danger réel, en tenant compte des mesures de prévention existantes.</p>
                </div>
                <div className="bg-fire-50 rounded-xl p-6 border border-fire-200">
                  <div className="font-bold text-fire-600 mb-2">Priorité d&apos;action = selon le risque résiduel</div>
                  <p className="text-gray-600 text-sm">Les risques résiduels les plus élevés deviennent automatiquement des plans d&apos;action prioritaires.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="font-bold text-navy-700 mb-6 text-center">Matrice de risques</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className="p-2 text-left text-gray-500">G / F</th>
                        <th className="p-2 text-center text-gray-500">Rare</th>
                        <th className="p-2 text-center text-gray-500">Régulier</th>
                        <th className="p-2 text-center text-gray-500">Fréquent</th>
                        <th className="p-2 text-center text-gray-500">Continu</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { label: 'Mortel', scores: [32, 64, 128, 256] },
                        { label: 'Grave', scores: [16, 32, 64, 128] },
                        { label: 'Sérieux', scores: [8, 16, 32, 64] },
                        { label: 'Léger', scores: [4, 8, 16, 32] },
                        { label: 'Gêne', scores: [2, 4, 8, 16] },
                      ].map((row) => (
                        <tr key={row.label}>
                          <td className="p-2 font-medium text-navy-700 text-xs">{row.label}</td>
                          {row.scores.map((score, i) => (
                            <td key={i} className="p-2 text-center">
                              <span className={`inline-block w-10 py-1 rounded text-xs font-bold ${
                                score >= 64 ? 'bg-red-100 text-red-700' :
                                score >= 9 ? 'bg-orange-100 text-orange-700' :
                                'bg-green-100 text-green-700'
                              }`}>
                                {score}
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-center gap-4 mt-4 text-xs">
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-200" /> Faible</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-orange-200" /> Moyen</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-red-200" /> Élevé</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 30 catégories */}
          <div className="bg-navy-800 rounded-2xl p-8 mb-16">
            <FadeIn className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                30 catégories de risques couvertes
              </h3>
              <p className="text-gray-300 text-sm">
                Toutes les familles de risques professionnels reconnues par la réglementation française.
              </p>
            </FadeIn>
            <div className="flex flex-wrap justify-center gap-2">
              {riskCategories.map((cat) => (
                <span key={cat} className="bg-white/10 text-white text-xs px-3 py-1.5 rounded-full">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Tarifs DUERP */}
          <FadeIn className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy-700 mb-2">
              Tarifs DUERP
            </h3>
            <p className="text-gray-600">
              Un consultant facture entre 2 000 et 5 000 €. Notre plateforme vous offre la même qualité pour une fraction du prix.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div className={`bg-white rounded-2xl p-8 h-full flex flex-col relative ${
                  plan.highlight ? 'border-2 border-fire-500 shadow-xl shadow-fire-500/10' : 'border border-gray-200 shadow-sm'
                }`}>
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-fire-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      Le plus populaire
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-navy-700">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{plan.desc}</p>
                  </div>

                  <div className="mb-8">
                    <span className="text-4xl font-bold text-navy-700">{plan.price} €</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                    {plan.period === 'unique' && (
                      <span className="text-gray-400 text-sm ml-2">HT</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f.text} className={`flex items-start gap-3 text-sm ${f.included ? 'text-gray-700' : 'text-gray-400'}`}>
                        {f.included ? (
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 shrink-0" />
                        )}
                        {f.text}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-colors inline-flex items-center justify-center gap-2 ${
                      plan.highlight
                        ? 'bg-fire-500 hover:bg-fire-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-navy-700'
                    }`}
                  >
                    Commencer
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== SECTION 4: Formation ===== */}
      <section id="formation" className="py-24 bg-gray-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <GraduationCap className="h-4 w-4" />
                Service 4
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-6">
                Formation & Accompagnement
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Nous formons vos équipes aux risques incendie, aux procédures
                d&apos;évacuation et à l&apos;utilisation des moyens de secours.
                Un accompagnement personnalisé pour une montée en compétence durable.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Sensibilisation aux risques incendie',
                  'Manipulation des extincteurs',
                  'Exercices d\'évacuation',
                  'Formation des équipiers de première intervention',
                  'Accompagnement aux commissions de sécurité',
                  'Veille réglementaire personnalisée',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="bg-fire-500 hover:bg-fire-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                Organiser une formation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </FadeIn>

            <FadeIn>
              <div className="space-y-4">
                {[
                  {
                    icon: Users,
                    title: 'Formation sur site',
                    desc: 'Sessions adaptées à votre établissement avec mise en situation réelle.',
                  },
                  {
                    icon: GraduationCap,
                    title: 'Formation en ligne',
                    desc: 'Modules e-learning accessibles à votre rythme avec certificat de réussite.',
                  },
                  {
                    icon: Shield,
                    title: 'Accompagnement réglementaire',
                    desc: 'Suivi continu pour maintenir votre conformité face aux évolutions réglementaires.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-fire-50 p-3 rounded-lg">
                        <item.icon className="h-6 w-6 text-fire-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-700 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Déroulement type
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-4">
              De la prise de contact au rapport final
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 'J0', title: 'Premier échange', desc: 'Compréhension de votre contexte, périmètre et objectifs. Devis en 48h.' },
              { step: 'S1', title: 'Visite sur site', desc: 'Diagnostic terrain, relevé des installations, entretiens avec vos équipes.' },
              { step: 'S2-S3', title: 'Analyse & rapport', desc: 'Rédaction du rapport, matrice de risques, plan d\'action chiffré.' },
              { step: 'S4', title: 'Restitution & suivi', desc: 'Présentation des résultats, priorisation des actions, suivi de 3 mois inclus.' },
            ].map((item, i) => (
              <FadeIn key={item.step}>
                <div className="text-center">
                  <div className="relative mx-auto mb-4">
                    <div className="bg-fire-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mx-auto">
                      {item.step}
                    </div>
                    {i < 3 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-fire-200 -translate-y-1/2" />
                    )}
                  </div>
                  <h3 className="font-bold text-navy-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Identifiez vos failles avant qu'il ne soit trop tard"
        description="Nos experts certifiés CNPP ont accompagné plus de 500 audits. Obtenez votre diagnostic gratuit avec plan d'action concret sous 48h."
      />
    </>
  )
}
