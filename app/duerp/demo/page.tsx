'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ClipboardCheck, ArrowRight, ArrowLeft, CheckCircle, AlertTriangle,
  BarChart3, Shield, Info, Calendar, ChevronDown
} from 'lucide-react'

// --- Reference Data ---

const riskCategories = [
  { id: 1, name: 'Chutes de plain-pied', example_phenomenon: 'Sol glissant, encombré ou dégradé', example_situation: 'Déplacement sur sol mouillé ou inégal', example_damage: 'Entorse, fracture, traumatisme crânien' },
  { id: 2, name: 'Chutes de hauteur', example_phenomenon: 'Travail en hauteur sans protection', example_situation: 'Utilisation d\'échelle ou escabeau', example_damage: 'Fractures, traumatismes graves' },
  { id: 3, name: 'Manutention manuelle', example_phenomenon: 'Port de charges lourdes ou répétitives', example_situation: 'Manipulation quotidienne de colis', example_damage: 'Lombalgie, TMS, hernie discale' },
  { id: 4, name: 'Risques mécaniques', example_phenomenon: 'Machines avec pièces en mouvement', example_situation: 'Utilisation de machines-outils', example_damage: 'Coupures, écrasement, amputation' },
  { id: 5, name: 'Risques électriques', example_phenomenon: 'Prises surchargées, câbles endommagés', example_situation: 'Branchement de plusieurs appareils', example_damage: 'Brûlures, électrisation, électrocution' },
  { id: 6, name: 'Incendie / Explosion', example_phenomenon: 'Stockage de produits inflammables', example_situation: 'Manipulation de produits à risque', example_damage: 'Brûlures, intoxication, décès' },
  { id: 7, name: 'Risques chimiques', example_phenomenon: 'Utilisation de produits chimiques', example_situation: 'Nettoyage avec produits dangereux', example_damage: 'Irritations, allergies, intoxication' },
  { id: 8, name: 'Risques biologiques', example_phenomenon: 'Contact avec agents infectieux', example_situation: 'Travail en milieu hospitalier ou insalubre', example_damage: 'Infections, maladies professionnelles' },
  { id: 9, name: 'Risques psychosociaux (RPS)', example_phenomenon: 'Surcharge de travail, conflits', example_situation: 'Pression hiérarchique, isolement', example_damage: 'Stress, burn-out, dépression' },
  { id: 10, name: 'Bruit', example_phenomenon: 'Exposition à un bruit élevé (>80 dB)', example_situation: 'Travail à proximité de machines bruyantes', example_damage: 'Fatigue auditive, surdité' },
  { id: 11, name: 'Travail sur écran', example_phenomenon: 'Posture statique prolongée devant écran', example_situation: 'Travail de bureau quotidien', example_damage: 'TMS, fatigue visuelle, maux de tête' },
  { id: 12, name: 'Circulation interne', example_phenomenon: 'Croisement piétons/véhicules', example_situation: 'Déplacements dans les locaux ou le parking', example_damage: 'Collision, écrasement' },
  { id: 13, name: 'Risques routiers', example_phenomenon: 'Déplacements professionnels fréquents', example_situation: 'Trajets domicile-travail, missions', example_damage: 'Accident de la route' },
  { id: 14, name: 'Travail isolé', example_phenomenon: 'Salarié travaillant seul', example_situation: 'Intervention en dehors des horaires ou en site isolé', example_damage: 'Malaise sans secours, accident non détecté' },
]

const gravityLevels = [
  { value: 1, label: 'Gêne, fatigue', desc: 'Inconfort sans conséquence médicale' },
  { value: 2, label: 'Accident bénin', desc: 'Sans arrêt de travail' },
  { value: 4, label: 'Accident avec arrêt', desc: 'Arrêt de travail temporaire' },
  { value: 8, label: 'Accident grave', desc: 'Conséquences durables, IPP' },
  { value: 16, label: 'Accident mortel', desc: 'Décès ou handicap majeur' },
]

const frequencyLevels = [
  { value: 2, label: 'Exceptionnelle', desc: 'Moins d\'une fois par semaine' },
  { value: 4, label: 'Périodique', desc: 'Au moins une fois par semaine' },
  { value: 8, label: 'Fréquente', desc: 'Moins de 4 heures par jour' },
  { value: 16, label: 'Continue', desc: 'Plus de 4 heures par jour' },
]

const preventionLevels = [
  { value: 1, label: 'Aucune mesure', desc: 'Aucune prévention en place' },
  { value: 2, label: 'Mesure partielle', desc: 'Au moins une mesure en place' },
  { value: 4, label: 'Mesures complètes', desc: 'Procédures, EPI, formation' },
  { value: 8, label: 'Protections collectives', desc: 'Moyens collectifs en place' },
  { value: 16, label: 'Protection optimale', desc: 'Protections collectives + suivi' },
]

function getRiskLevel(score: number) {
  if (score >= 64) return { level: 'Élevé', color: 'bg-red-100 text-red-700 border-red-200', dot: 'bg-red-500' }
  if (score >= 9) return { level: 'Moyen', color: 'bg-orange-100 text-orange-700 border-orange-200', dot: 'bg-orange-500' }
  return { level: 'Faible', color: 'bg-green-100 text-green-700 border-green-200', dot: 'bg-green-500' }
}

type Evaluation = {
  categoryId: number
  categoryName: string
  phenomenon: string
  situation: string
  damage: string
  gravity: number
  frequency: number
  grossRisk: number
  prevention: string
  preventionLevel: number
  residualRisk: number
  actions: string
}

export default function DuerpDemo() {
  const [step, setStep] = useState<'config' | 'evaluate' | 'results'>('config')
  const [unitName, setUnitName] = useState('')
  const [evaluations, setEvaluations] = useState<Evaluation[]>([])

  // Evaluation form state
  const [selectedCategory, setSelectedCategory] = useState(riskCategories[0])
  const [phenomenon, setPhenomenon] = useState('')
  const [situation, setSituation] = useState('')
  const [damage, setDamage] = useState('')
  const [gravity, setGravity] = useState(0)
  const [frequency, setFrequency] = useState(0)
  const [preventionText, setPreventionText] = useState('')
  const [preventionLevel, setPreventionLevel] = useState(0)
  const [actions, setActions] = useState('')
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)

  const grossRisk = gravity * frequency
  const residualRisk = preventionLevel > 0 ? Math.round((grossRisk / preventionLevel) * 100) / 100 : 0

  const resetForm = () => {
    setPhenomenon('')
    setSituation('')
    setDamage('')
    setGravity(0)
    setFrequency(0)
    setPreventionText('')
    setPreventionLevel(0)
    setActions('')
  }

  const fillExample = () => {
    setPhenomenon(selectedCategory.example_phenomenon)
    setSituation(selectedCategory.example_situation)
    setDamage(selectedCategory.example_damage)
  }

  const canSave = phenomenon && situation && damage && gravity > 0 && frequency > 0 && preventionLevel > 0

  const saveEvaluation = () => {
    if (!canSave) return
    const newEval: Evaluation = {
      categoryId: selectedCategory.id,
      categoryName: selectedCategory.name,
      phenomenon,
      situation,
      damage,
      gravity,
      frequency,
      grossRisk,
      prevention: preventionText,
      preventionLevel,
      residualRisk,
      actions,
    }
    setEvaluations([...evaluations, newEval])
    resetForm()
  }

  const highRisks = evaluations.filter(e => e.residualRisk >= 64).length
  const medRisks = evaluations.filter(e => e.residualRisk >= 9 && e.residualRisk < 64).length
  const lowRisks = evaluations.filter(e => e.residualRisk < 9).length

  // Step: Configuration
  if (step === 'config') {
    return (
      <>
        <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-fire-400 text-sm font-semibold mb-4">
              <Shield className="h-4 w-4" />
              Démo DUERP Prevarie
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Essayez l&apos;évaluation des risques</h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              Cette démo vous permet de tester le processus d&apos;évaluation sur une unité de travail.
              Aucun compte requis.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-fire-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <h2 className="text-xl font-bold text-navy-700">Nommez votre unité de travail</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Une unité de travail regroupe les salariés exposés aux mêmes risques
                (ex : Administration, Production, Logistique...).
              </p>
              <input
                type="text"
                value={unitName}
                onChange={(e) => setUnitName(e.target.value)}
                className="input-field mb-6"
                placeholder="Ex : Administration, Production, Logistique..."
              />
              <button
                onClick={() => unitName.trim() && setStep('evaluate')}
                disabled={!unitName.trim()}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Commencer l&apos;évaluation
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      </>
    )
  }

  // Step: Results
  if (step === 'results') {
    return (
      <>
        <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-fire-400 text-sm font-semibold mb-4">
              <BarChart3 className="h-4 w-4" />
              Résultats - {unitName}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Synthèse de votre évaluation</h1>
            <p className="text-gray-300">
              {evaluations.length} risque{evaluations.length > 1 ? 's' : ''} évalué{evaluations.length > 1 ? 's' : ''} pour l&apos;unité &quot;{unitName}&quot;
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Summary cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-navy-700">{evaluations.length}</div>
                <div className="text-gray-500 text-sm">Risques évalués</div>
              </div>
              <div className="bg-red-50 rounded-xl p-6 text-center border border-red-100">
                <div className="text-3xl font-bold text-red-600">{highRisks}</div>
                <div className="text-red-500 text-sm">Risques élevés</div>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 text-center border border-orange-100">
                <div className="text-3xl font-bold text-orange-600">{medRisks}</div>
                <div className="text-orange-500 text-sm">Risques moyens</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center border border-green-100">
                <div className="text-3xl font-bold text-green-600">{lowRisks}</div>
                <div className="text-green-500 text-sm">Risques faibles</div>
              </div>
            </div>

            {/* Evaluations table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-navy-700">Catégorie</th>
                      <th className="px-4 py-3 text-left font-semibold text-navy-700">Phénomène dangereux</th>
                      <th className="px-4 py-3 text-center font-semibold text-navy-700">G</th>
                      <th className="px-4 py-3 text-center font-semibold text-navy-700">F</th>
                      <th className="px-4 py-3 text-center font-semibold text-navy-700">Brut</th>
                      <th className="px-4 py-3 text-center font-semibold text-navy-700">P</th>
                      <th className="px-4 py-3 text-center font-semibold text-navy-700">Résiduel</th>
                      <th className="px-4 py-3 text-center font-semibold text-navy-700">Niveau</th>
                    </tr>
                  </thead>
                  <tbody>
                    {evaluations.map((ev, i) => {
                      const level = getRiskLevel(ev.residualRisk)
                      return (
                        <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-navy-700">{ev.categoryName}</td>
                          <td className="px-4 py-3 text-gray-600 max-w-xs truncate">{ev.phenomenon}</td>
                          <td className="px-4 py-3 text-center">{ev.gravity}</td>
                          <td className="px-4 py-3 text-center">{ev.frequency}</td>
                          <td className="px-4 py-3 text-center font-bold">{ev.grossRisk}</td>
                          <td className="px-4 py-3 text-center">{ev.preventionLevel}</td>
                          <td className="px-4 py-3 text-center font-bold">{ev.residualRisk}</td>
                          <td className="px-4 py-3 text-center">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${level.color}`}>
                              {level.level}
                            </span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Actions needed */}
            {(highRisks > 0 || medRisks > 0) && (
              <div className="bg-fire-50 border border-fire-200 rounded-xl p-6 mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-fire-500" />
                  <h3 className="font-bold text-navy-700 text-lg">Plans d&apos;action requis</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {highRisks + medRisks} risque{(highRisks + medRisks) > 1 ? 's' : ''} nécessite{(highRisks + medRisks) > 1 ? 'nt' : ''} un plan d&apos;action.
                  Avec la version complète, vous pouvez créer et suivre vos plans d&apos;action directement.
                </p>
                {evaluations
                  .filter(e => e.residualRisk >= 9)
                  .sort((a, b) => b.residualRisk - a.residualRisk)
                  .map((ev, i) => {
                    const level = getRiskLevel(ev.residualRisk)
                    return (
                      <div key={i} className="flex items-center gap-3 py-2 border-t border-fire-200 first:border-0">
                        <span className={`w-2.5 h-2.5 rounded-full ${level.dot}`} />
                        <span className="font-medium text-navy-700">{ev.categoryName}</span>
                        <span className="text-gray-500 text-sm">- {ev.phenomenon}</span>
                        <span className={`ml-auto px-3 py-0.5 rounded-full text-xs font-bold ${level.color}`}>
                          {ev.residualRisk}
                        </span>
                      </div>
                    )
                  })}
              </div>
            )}

            {/* CTA */}
            <div className="bg-navy-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">
                Cette démo ne couvre qu&apos;une unité de travail
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                La version complète vous permet de gérer jusqu&apos;à 10+ unités, exporter un PDF conforme,
                suivre vos plans d&apos;action et collaborer avec votre équipe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/duerp/tarifs"
                  className="bg-fire-500 hover:bg-fire-600 text-white font-semibold py-3 px-8 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                >
                  Voir les tarifs
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact#rdv"
                  className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Parler à un expert
                </Link>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => { setStep('evaluate'); }}
                className="text-fire-500 hover:text-fire-600 font-medium inline-flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Revenir à l&apos;évaluation
              </button>
            </div>
          </div>
        </section>
      </>
    )
  }

  // Step: Evaluate
  return (
    <>
      <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-fire-400 text-sm font-semibold mb-1">
                <ClipboardCheck className="h-4 w-4" />
                Évaluation - {unitName}
              </div>
              <div className="text-gray-300 text-sm">
                {evaluations.length} risque{evaluations.length > 1 ? 's' : ''} évalué{evaluations.length > 1 ? 's' : ''}
                {evaluations.length > 0 && (
                  <span className="ml-2">
                    (<span className="text-red-400">{highRisks} élevé{highRisks > 1 ? 's' : ''}</span>
                    {' / '}
                    <span className="text-orange-400">{medRisks} moyen{medRisks > 1 ? 's' : ''}</span>
                    {' / '}
                    <span className="text-green-400">{lowRisks} faible{lowRisks > 1 ? 's' : ''}</span>)
                  </span>
                )}
              </div>
            </div>
            {evaluations.length > 0 && (
              <button
                onClick={() => setStep('results')}
                className="bg-fire-500 hover:bg-fire-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors inline-flex items-center gap-2 text-sm"
              >
                <BarChart3 className="h-4 w-4" />
                Voir la synthèse
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">

            {/* Category selector */}
            <div className="mb-8">
              <label className="label-field">Catégorie de risque</label>
              <div className="relative">
                <button
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="input-field w-full text-left flex items-center justify-between"
                >
                  <span>{selectedCategory.name}</span>
                  <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${showCategoryDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showCategoryDropdown && (
                  <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-64 overflow-y-auto">
                    {riskCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => { setSelectedCategory(cat); setShowCategoryDropdown(false); resetForm() }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-sm ${
                          selectedCategory.id === cat.id ? 'bg-fire-50 text-fire-600 font-medium' : 'text-gray-700'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={fillExample}
                className="mt-2 text-fire-500 hover:text-fire-600 text-sm font-medium inline-flex items-center gap-1"
              >
                <Info className="h-3.5 w-3.5" />
                Remplir avec un exemple
              </button>
            </div>

            {/* Phenomenon, Situation, Damage */}
            <div className="space-y-6 mb-8">
              <div>
                <label className="label-field">Phénomène dangereux <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={phenomenon}
                  onChange={(e) => setPhenomenon(e.target.value)}
                  className="input-field"
                  placeholder="Qu'est-ce qui peut causer un dommage ?"
                />
              </div>
              <div>
                <label className="label-field">Situation dangereuse <span className="text-red-500">*</span></label>
                <textarea
                  value={situation}
                  onChange={(e) => setSituation(e.target.value)}
                  className="input-field resize-none"
                  rows={2}
                  placeholder="Comment les salariés sont-ils exposés ?"
                />
              </div>
              <div>
                <label className="label-field">Dommage possible <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={damage}
                  onChange={(e) => setDamage(e.target.value)}
                  className="input-field"
                  placeholder="Quel dommage peut résulter de cette exposition ?"
                />
              </div>
            </div>

            {/* Gravity */}
            <div className="mb-8">
              <label className="label-field">Gravité <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mt-2">
                {gravityLevels.map((g) => (
                  <button
                    key={g.value}
                    onClick={() => setGravity(g.value)}
                    className={`p-3 rounded-xl border-2 text-left transition-all ${
                      gravity === g.value
                        ? 'border-fire-500 bg-fire-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-bold text-sm text-navy-700">{g.value}</div>
                    <div className="text-xs text-gray-600">{g.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Frequency */}
            <div className="mb-8">
              <label className="label-field">Fréquence d&apos;exposition <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mt-2">
                {frequencyLevels.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setFrequency(f.value)}
                    className={`p-3 rounded-xl border-2 text-left transition-all ${
                      frequency === f.value
                        ? 'border-fire-500 bg-fire-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-bold text-sm text-navy-700">{f.value}</div>
                    <div className="text-xs text-gray-600">{f.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Gross risk display */}
            {gravity > 0 && frequency > 0 && (
              <div className={`rounded-xl p-4 mb-8 border ${getRiskLevel(grossRisk).color}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">Risque brut (Gravité x Fréquence)</div>
                    <div className="text-xs opacity-75">{gravity} x {frequency}</div>
                  </div>
                  <div className="text-3xl font-bold">{grossRisk}</div>
                </div>
              </div>
            )}

            {/* Prevention measures */}
            <div className="mb-6">
              <label className="label-field">Mesures de prévention existantes</label>
              <textarea
                value={preventionText}
                onChange={(e) => setPreventionText(e.target.value)}
                className="input-field resize-none"
                rows={2}
                placeholder="Quelles mesures sont déjà en place ? (formation, EPI, procédures...)"
              />
            </div>

            {/* Prevention level */}
            <div className="mb-8">
              <label className="label-field">Niveau de prévention <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mt-2">
                {preventionLevels.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => setPreventionLevel(p.value)}
                    className={`p-3 rounded-xl border-2 text-left transition-all ${
                      preventionLevel === p.value
                        ? 'border-navy-700 bg-navy-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-bold text-sm text-navy-700">{p.value}</div>
                    <div className="text-xs text-gray-600">{p.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Residual risk display */}
            {gravity > 0 && frequency > 0 && preventionLevel > 0 && (
              <div className={`rounded-xl p-4 mb-8 border ${getRiskLevel(residualRisk).color}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">Risque résiduel (Brut / Prévention)</div>
                    <div className="text-xs opacity-75">{grossRisk} / {preventionLevel}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getRiskLevel(residualRisk).color}`}>
                      {getRiskLevel(residualRisk).level}
                    </span>
                    <div className="text-3xl font-bold">{residualRisk}</div>
                  </div>
                </div>
                {residualRisk >= 9 && (
                  <div className="mt-3 pt-3 border-t border-current/20 flex items-center gap-2 text-sm">
                    <AlertTriangle className="h-4 w-4" />
                    Plan d&apos;action recommandé
                  </div>
                )}
              </div>
            )}

            {/* Improvement actions */}
            <div className="mb-8">
              <label className="label-field">Actions d&apos;amélioration proposées</label>
              <textarea
                value={actions}
                onChange={(e) => setActions(e.target.value)}
                className="input-field resize-none"
                rows={2}
                placeholder="Quelles mesures supplémentaires proposez-vous ?"
              />
            </div>

            {/* Save buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={saveEvaluation}
                disabled={!canSave}
                className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <CheckCircle className="h-5 w-5" />
                Enregistrer ce risque
              </button>
              {evaluations.length > 0 && (
                <button
                  onClick={() => setStep('results')}
                  className="bg-navy-700 hover:bg-navy-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <BarChart3 className="h-5 w-5" />
                  Voir la synthèse ({evaluations.length})
                </button>
              )}
            </div>
          </div>

          {/* Recent evaluations */}
          {evaluations.length > 0 && (
            <div className="mt-8">
              <h3 className="font-bold text-navy-700 mb-4">Risques déjà évalués ({evaluations.length})</h3>
              <div className="space-y-2">
                {[...evaluations].reverse().map((ev, i) => {
                  const level = getRiskLevel(ev.residualRisk)
                  return (
                    <div key={i} className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
                      <span className={`w-3 h-3 rounded-full shrink-0 ${level.dot}`} />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-navy-700 text-sm">{ev.categoryName}</div>
                        <div className="text-gray-500 text-xs truncate">{ev.phenomenon}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs text-gray-500">Résiduel</div>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${level.color}`}>
                          {ev.residualRisk}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
