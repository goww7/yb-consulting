'use client'

import Link from 'next/link'
import {
  Shield, ArrowRight, CheckCircle, Calendar, FileText, Users, BarChart3,
  ClipboardCheck, Building2, Lock, Zap, Award, Clock, Download, TrendingUp
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper'

const riskCategories = [
  'Chutes de plain-pied', 'Chutes de hauteur', 'Manutention manuelle',
  'Risques mécaniques', 'Risques électriques', 'Risques incendie/explosion',
  'Risques chimiques', 'Risques biologiques', 'Risques psychosociaux (RPS)',
  'Bruit', 'Vibrations', 'Rayonnements', 'Ambiances thermiques',
  'Travail sur écran', 'Travail isolé', 'Circulation interne',
  'Risques routiers', 'Travaux en hauteur', 'Espaces confinés',
  'Amiante', 'Atmosphères explosives (ATEX)', 'Agents CMR',
  'Risques liés aux équipements', 'Risques liés aux co-activités',
  'Risques naturels', 'Risques technologiques', 'Harcèlement',
]

export default function DuerpLanding() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-fire-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 bg-fire-500/20 text-fire-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Shield className="h-4 w-4" />
                  Conforme au Décret n° 2001-1016
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                  Votre <span className="text-fire-400">DUERP</span> en ligne,
                  <span className="block">simple et conforme</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Évaluez les risques professionnels de votre entreprise en quelques heures.
                  27 catégories de risques, calcul automatique, plan d&apos;action intégré
                  et rapport PDF conforme à la réglementation.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/duerp/demo"
                    className="group bg-fire-500 hover:bg-fire-600 text-white font-semibold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
                  >
                    Essayer la démo gratuite
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/duerp/tarifs"
                    className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
                  >
                    Voir les tarifs
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex items-center gap-6 mt-8 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Sans engagement
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Conforme DUERP
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Export PDF
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Preview card */}
            <FadeIn delay={0.3} className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-fire-500 p-2 rounded-lg">
                    <ClipboardCheck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-navy-700">Tableau de bord DUERP</div>
                    <div className="text-xs text-gray-500">Vue d&apos;ensemble</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-red-600">12</div>
                    <div className="text-xs text-red-500">Risques élevés</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-orange-600">38</div>
                    <div className="text-xs text-orange-500">Risques moyens</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-600">157</div>
                    <div className="text-xs text-green-500">Risques faibles</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {['UT1 - Administration', 'UT2 - Production', 'UT3 - Logistique'].map((ut, i) => (
                    <div key={ut} className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-100 rounded-full h-2.5">
                        <div
                          className="bg-fire-500 h-2.5 rounded-full"
                          style={{ width: `${[85, 100, 45][i]}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 w-24 text-right">{ut}</span>
                      <span className="text-xs font-bold text-navy-700">{[85, 100, 45][i]}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Obligation légale */}
      <section className="py-16 bg-gradient-to-r from-navy-700 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-white text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1,5M+</div>
              <div className="text-gray-300">Entreprises françaises concernées par le DUERP</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40 ans</div>
              <div className="text-gray-300">Durée de conservation obligatoire</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">27</div>
              <div className="text-gray-300">Catégories de risques évaluées</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi un DUERP ? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Obligation légale
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-6">
              Le DUERP est obligatoire pour toute entreprise
            </h2>
            <p className="text-gray-600 text-lg">
              Depuis le Décret du 5 novembre 2001, tout employeur doit évaluer les risques
              professionnels et formaliser les résultats dans un Document Unique.
              Ne pas le faire vous expose à des sanctions.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: 'Obligation légale',
                desc: 'Toute entreprise avec au moins 1 salarié doit avoir un DUERP à jour. Mise à jour annuelle obligatoire.',
              },
              {
                icon: Award,
                title: 'Sanctions encourues',
                desc: 'Jusqu\'à 1 500 € d\'amende par infraction (3 000 € en récidive). Responsabilité pénale du dirigeant.',
              },
              {
                icon: Users,
                title: 'Accessible à tous',
                desc: 'Le DUERP doit être consultable par les salariés, le CSE, la médecine du travail et l\'inspection du travail.',
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

      {/* Comment ça marche */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Simple et rapide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-6">
              Créez votre DUERP en 4 étapes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Plus besoin de fichiers Excel complexes. Notre plateforme vous guide
              à chaque étape de l&apos;évaluation.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-4 gap-6">
            {[
              {
                num: '1',
                icon: Building2,
                title: 'Configurez',
                desc: 'Créez vos unités de travail et décrivez les postes de chaque équipe.',
              },
              {
                num: '2',
                icon: ClipboardCheck,
                title: 'Évaluez',
                desc: 'Pour chaque unité, évaluez les 27 catégories de risques avec notre formulaire guidé.',
              },
              {
                num: '3',
                icon: BarChart3,
                title: 'Analysez',
                desc: 'Le calcul automatique vous donne le niveau de risque brut et résiduel en temps réel.',
              },
              {
                num: '4',
                icon: Download,
                title: 'Exportez',
                desc: 'Générez votre rapport DUERP conforme en PDF, prêt pour l\'inspection du travail.',
              },
            ].map((step) => (
              <StaggerItem key={step.num}>
                <div className="relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all h-full border border-gray-100">
                  <div className="absolute -top-4 -left-4 bg-fire-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-fire-500/30">
                    {step.num}
                  </div>
                  <div className="mt-4">
                    <step.icon className="h-10 w-10 text-fire-500 mb-4" />
                    <h3 className="text-xl font-bold text-navy-700 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Méthodologie de calcul */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
                Méthodologie
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-6">
                Un calcul de risque éprouvé en 3 facteurs
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Notre méthode combine gravité, fréquence et prévention pour obtenir
                un score de risque résiduel objectif et actionnable.
              </p>

              <div className="space-y-6">
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
              {/* Risk matrix */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="font-bold text-navy-700 mb-6 text-center">Matrice de risques</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className="p-2 text-left text-gray-500">Gravité / Fréquence</th>
                        <th className="p-2 text-center text-gray-500">Rare (2)</th>
                        <th className="p-2 text-center text-gray-500">Régulier (4)</th>
                        <th className="p-2 text-center text-gray-500">Fréquent (8)</th>
                        <th className="p-2 text-center text-gray-500">Continu (16)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { label: 'Mortel (16)', scores: [32, 64, 128, 256] },
                        { label: 'Grave (8)', scores: [16, 32, 64, 128] },
                        { label: 'Sérieux (4)', scores: [8, 16, 32, 64] },
                        { label: 'Léger (2)', scores: [4, 8, 16, 32] },
                        { label: 'Gêne (1)', scores: [2, 4, 8, 16] },
                      ].map((row) => (
                        <tr key={row.label}>
                          <td className="p-2 font-medium text-navy-700">{row.label}</td>
                          {row.scores.map((score) => (
                            <td key={`${row.label}-${score}`} className="p-2 text-center">
                              <span className={`inline-block w-12 py-1 rounded-lg text-xs font-bold ${
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
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-200" /> Faible (1-8)</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-orange-200" /> Moyen (9-63)</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-red-200" /> Élevé (64+)</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 27 catégories */}
      <section className="py-24 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="text-fire-400 font-semibold text-sm uppercase tracking-wider">
              Couverture complète
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              27 catégories de risques couvertes
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Toutes les familles de risques professionnels reconnues par la réglementation française.
            </p>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-3">
            {riskCategories.map((cat) => (
              <FadeIn key={cat}>
                <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full hover:bg-fire-500/30 transition-colors cursor-default">
                  {cat}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités clés */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Fonctionnalités
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-4">
              Tout ce dont vous avez besoin
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ClipboardCheck, title: 'Évaluation guidée', desc: 'Formulaire étape par étape avec suggestions automatiques et exemples pour chaque risque.' },
              { icon: Zap, title: 'Calcul en temps réel', desc: 'Le risque brut et résiduel se calculent automatiquement à chaque saisie.' },
              { icon: BarChart3, title: 'Tableau de bord', desc: 'Vue d\'ensemble de tous vos risques : par unité de travail, par niveau, par catégorie.' },
              { icon: FileText, title: 'Rapport PDF conforme', desc: 'Générez un DUERP complet au format PDF, prêt pour l\'inspection du travail.' },
              { icon: TrendingUp, title: 'Plans d\'action', desc: 'Créez et suivez vos plans d\'action directement depuis chaque risque évalué.' },
              { icon: Users, title: 'Multi-utilisateurs', desc: 'Invitez vos collaborateurs à évaluer les risques de leur unité de travail.' },
              { icon: Building2, title: 'Multi unités de travail', desc: 'Gérez jusqu\'à 10+ unités de travail indépendantes au sein de votre organisation.' },
              { icon: Lock, title: 'Conformité C2P', desc: 'Suivi automatique des 6 facteurs du Compte Professionnel de Prévention.' },
              { icon: Clock, title: 'Historique 40 ans', desc: 'Conservation et versionnage de vos évaluations conformément à la réglementation.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="bg-fire-50 p-3 rounded-lg shrink-0">
                    <item.icon className="h-6 w-6 text-fire-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-700 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparaison Excel vs Prevarie */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Comparaison
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-4">
              Pourquoi passer au digital ?
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 text-center">
                <div className="p-6 bg-gray-50">
                  <div className="font-bold text-navy-700">Critère</div>
                </div>
                <div className="p-6 bg-gray-100">
                  <div className="font-bold text-gray-500">Excel / Papier</div>
                </div>
                <div className="p-6 bg-fire-500">
                  <div className="font-bold text-white">Prevarie DUERP</div>
                </div>
              </div>
              {[
                { label: 'Temps de création', old: '2-5 jours', new: 'Quelques heures' },
                { label: 'Calcul des risques', old: 'Manuel, erreurs possibles', new: 'Automatique, fiable' },
                { label: 'Rapport conforme', old: 'Mise en page manuelle', new: 'PDF en 1 clic' },
                { label: 'Collaboration', old: 'Fichier partagé, conflits', new: 'Multi-utilisateurs' },
                { label: 'Mise à jour annuelle', old: 'Tout refaire', new: 'Mise à jour incrémentale' },
                { label: 'Plans d\'action', old: 'Fichier séparé', new: 'Intégrés et suivis' },
                { label: 'Coût', old: '2 000 - 5 000 € (consultant)', new: 'À partir de 299 €' },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-3 border-t border-gray-100">
                  <div className="p-4 font-medium text-navy-700 text-sm">{row.label}</div>
                  <div className="p-4 text-gray-500 text-sm text-center bg-gray-50/50">{row.old}</div>
                  <div className="p-4 text-fire-600 font-semibold text-sm text-center bg-fire-50/30">{row.new}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-fire-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à créer votre DUERP ?
              </h2>
              <p className="text-xl text-white/90 mb-10">
                Essayez gratuitement notre outil d&apos;évaluation des risques.
                Aucune carte bancaire requise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/duerp/demo"
                  className="group bg-white text-fire-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
                >
                  Essayer la démo gratuite
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact#rdv"
                  className="border-2 border-white text-white hover:bg-white hover:text-fire-600 font-semibold py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Parler à un expert
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
