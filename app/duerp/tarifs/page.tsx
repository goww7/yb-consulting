'use client'

import Link from 'next/link'
import { CheckCircle, ArrowRight, Calendar, Shield, Zap, Building2, X } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper'

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
      { text: 'Suivi C2P', included: false },
      { text: 'Support prioritaire', included: false },
    ],
  },
  {
    name: 'Professionnel',
    price: 599,
    period: 'unique',
    desc: 'Pour les entreprises qui veulent une couverture complète et un suivi avancé.',
    highlight: true,
    features: [
      { text: '1 organisation', included: true },
      { text: 'Jusqu\'à 10 unités de travail', included: true },
      { text: 'Évaluations illimitées', included: true },
      { text: 'Plans d\'action avec suivi avancé', included: true },
      { text: 'Export PDF, Excel, conformité', included: true },
      { text: '1 Admin + 5 Évaluateurs + Lecteurs illimités', included: true },
      { text: 'Matrice de risques visuelle', included: true },
      { text: 'Suivi C2P automatique', included: true },
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
      { text: 'Catégories de risques personnalisables', included: true },
      { text: 'Analyse des tendances historiques', included: true },
      { text: 'Support prioritaire + gestionnaire dédié', included: true },
    ],
  },
]

const addons = [
  { name: 'Unité de travail supplémentaire', price: '49 €', desc: 'Par unité additionnelle (forfaits Essentiel & Pro)' },
  { name: 'Siège évaluateur supplémentaire', price: '29 € / mois', desc: 'Par évaluateur additionnel' },
  { name: 'Accompagnement expert Prevarie', price: '499 €', desc: 'Revue complète par un consultant certifié' },
]

const faqs = [
  {
    q: 'Qu\'est-ce que le DUERP exactement ?',
    a: 'Le Document Unique d\'Évaluation des Risques Professionnels (DUERP) est un document obligatoire pour toute entreprise ayant au moins 1 salarié. Il recense et évalue les risques professionnels auxquels sont exposés les travailleurs.',
  },
  {
    q: 'Le DUERP est-il vraiment obligatoire ?',
    a: 'Oui, depuis le Décret n° 2001-1016 du 5 novembre 2001. Ne pas avoir de DUERP à jour expose l\'employeur à une amende de 1 500 € (3 000 € en récidive) et engage sa responsabilité pénale en cas d\'accident.',
  },
  {
    q: 'À quelle fréquence faut-il le mettre à jour ?',
    a: 'Le DUERP doit être mis à jour au minimum une fois par an, et à chaque changement important : nouveau poste, nouvel équipement, accident du travail, modification de l\'organisation...',
  },
  {
    q: 'Combien de temps faut-il conserver le DUERP ?',
    a: 'Depuis la loi du 2 août 2021, le DUERP et ses mises à jour successives doivent être conservés pendant 40 ans minimum.',
  },
  {
    q: 'Puis-je importer mon DUERP Excel existant ?',
    a: 'Oui, notre assistant d\'import vous guide pour transférer vos données depuis un fichier Excel existant vers la plateforme Prevarie.',
  },
  {
    q: 'Le rapport PDF est-il accepté par l\'inspection du travail ?',
    a: 'Absolument. Notre rapport respecte la structure et les exigences réglementaires du DUERP. Il est conçu pour être immédiatement présentable lors d\'un contrôle.',
  },
]

export default function DuerpTarifs() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-fire-500/20 text-fire-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="h-4 w-4" />
              Tarifs DUERP Prevarie
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Votre conformité DUERP à partir de 299 €
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Un consultant facture entre 2 000 et 5 000 €. Notre plateforme vous donne
              les mêmes résultats, à votre rythme, pour une fraction du prix.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    href="/contact#rdv"
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

          {/* Add-ons */}
          <FadeIn className="mt-16">
            <h3 className="text-2xl font-bold text-navy-700 text-center mb-8">Options supplémentaires</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {addons.map((addon) => (
                <div key={addon.name} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-fire-500 mb-2">{addon.price}</div>
                  <div className="font-semibold text-navy-700 mb-1">{addon.name}</div>
                  <div className="text-gray-500 text-sm">{addon.desc}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
              Inclus dans tous les forfaits
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: '30 catégories de risques', desc: 'Toutes les familles de risques réglementaires' },
              { icon: Shield, title: 'Calcul automatique', desc: 'Risque brut et résiduel en temps réel' },
              { icon: Building2, title: 'Rapport PDF conforme', desc: 'Prêt pour l\'inspection du travail' },
              { icon: Calendar, title: 'Mises à jour incluses', desc: 'Accès aux nouvelles fonctionnalités' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="text-center">
                  <div className="bg-fire-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-fire-500" />
                  </div>
                  <h3 className="font-bold text-navy-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
              Questions fréquentes
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <FadeIn key={faq.q}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-navy-700 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-fire-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d&apos;aide pour choisir ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Échangez gratuitement avec notre expert. Il vous aidera à déterminer
              le forfait adapté à votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/duerp/demo"
                className="bg-white text-fire-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
              >
                Essayer la démo gratuite
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact#rdv"
                className="border-2 border-white text-white hover:bg-white hover:text-fire-600 font-semibold py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Prendre rendez-vous
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
