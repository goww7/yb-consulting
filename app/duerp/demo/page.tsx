'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  ClipboardCheck, ArrowRight, ArrowLeft, CheckCircle, AlertTriangle,
  BarChart3, Shield, Info, Calendar, ChevronDown, Plus, Lightbulb, ListChecks,
  Trash2, Pencil, Printer, X, Building2
} from 'lucide-react'

// --- Reference Data ---

const workUnitSuggestions = [
  'Administration',
  'Production',
  'Logistique / Entrepôt',
  'Maintenance',
  'Accueil / Réception',
  'Atelier',
  'Chantier',
  'Laboratoire',
  'Cuisine / Restauration',
  'Magasin / Commerce',
  'Bureau d\'études',
  'Service informatique',
  'Nettoyage / Entretien',
  'Transport / Livraison',
]

const workUnitRiskSuggestions: Record<string, number[]> = {
  'Administration': [1, 5, 9, 11, 13, 27],
  'Production': [1, 3, 4, 5, 6, 7, 10, 12, 15, 23],
  'Logistique / Entrepôt': [1, 2, 3, 4, 12, 23],
  'Maintenance': [2, 4, 5, 14, 15, 18, 19, 23, 24],
  'Accueil / Réception': [1, 5, 9, 11, 27],
  'Atelier': [1, 3, 4, 5, 6, 7, 10, 15, 23],
  'Chantier': [1, 2, 3, 4, 6, 10, 14, 17, 18, 20, 24, 25],
  'Laboratoire': [5, 7, 8, 16, 22],
  'Cuisine / Restauration': [1, 3, 6, 7, 17, 28],
  'Magasin / Commerce': [1, 3, 5, 9, 12, 27],
  'Bureau d\'études': [5, 9, 11, 13, 27],
  'Service informatique': [5, 9, 11, 14, 27],
  'Nettoyage / Entretien': [1, 3, 5, 7, 14],
  'Transport / Livraison': [1, 3, 13, 14, 17, 29],
}

const riskCategories = [
  { id: 1, name: 'Chutes de plain-pied', example_phenomenon: 'Sol glissant, encombré ou dégradé', example_situation: 'Déplacement sur sol mouillé ou inégal', example_damage: 'Entorse, fracture, traumatisme crânien', example_prevention: 'Revêtement antidérapant, nettoyage régulier, balisage des zones humides', example_actions: 'Installer des bandes antidérapantes dans les zones à risque, former le personnel au rangement' },
  { id: 2, name: 'Chutes de hauteur', example_phenomenon: 'Travail en hauteur sans protection', example_situation: 'Utilisation d\'échelle ou escabeau', example_damage: 'Fractures, traumatismes graves', example_prevention: 'Garde-corps, harnais, vérification périodique des équipements', example_actions: 'Remplacer les échelles par des plateformes sécurisées, installer des lignes de vie' },
  { id: 3, name: 'Manutention manuelle', example_phenomenon: 'Port de charges lourdes ou répétitives', example_situation: 'Manipulation quotidienne de colis', example_damage: 'Lombalgie, TMS, hernie discale', example_prevention: 'Formation gestes et postures, aides à la manutention disponibles', example_actions: 'Acquérir des transpalettes électriques, réorganiser le stockage pour limiter le port de charges' },
  { id: 4, name: 'Risques mécaniques', example_phenomenon: 'Machines avec pièces en mouvement', example_situation: 'Utilisation de machines-outils', example_damage: 'Coupures, écrasement, amputation', example_prevention: 'Protecteurs fixes sur machines, arrêt d\'urgence, consignes affichées', example_actions: 'Mettre en conformité les machines anciennes, renforcer la formation des opérateurs' },
  { id: 5, name: 'Risques électriques', example_phenomenon: 'Prises surchargées, câbles endommagés', example_situation: 'Branchement de plusieurs appareils', example_damage: 'Brûlures, électrisation, électrocution', example_prevention: 'Vérification annuelle des installations, habilitation électrique du personnel', example_actions: 'Mettre aux normes le tableau électrique, remplacer les câbles défectueux' },
  { id: 6, name: 'Incendie / Explosion', example_phenomenon: 'Stockage de produits inflammables', example_situation: 'Manipulation de produits à risque', example_damage: 'Brûlures, intoxication, décès', example_prevention: 'Extincteurs vérifiés, exercices d\'évacuation annuels, stockage conforme', example_actions: 'Installer un système de détection incendie, créer une armoire ventilée pour les produits inflammables' },
  { id: 7, name: 'Risques chimiques', example_phenomenon: 'Utilisation de produits chimiques', example_situation: 'Nettoyage avec produits dangereux', example_damage: 'Irritations, allergies, intoxication', example_prevention: 'Fiches de données de sécurité accessibles, EPI fournis (gants, masques)', example_actions: 'Substituer les produits les plus dangereux par des alternatives moins nocives' },
  { id: 8, name: 'Risques biologiques', example_phenomenon: 'Contact avec agents infectieux', example_situation: 'Travail en milieu hospitalier ou insalubre', example_damage: 'Infections, maladies professionnelles', example_prevention: 'Protocole d\'hygiène, vaccination, équipements de protection', example_actions: 'Mettre en place un protocole de décontamination, renforcer la traçabilité des expositions' },
  { id: 9, name: 'Risques psychosociaux (RPS)', example_phenomenon: 'Surcharge de travail, conflits', example_situation: 'Pression hiérarchique, isolement', example_damage: 'Stress, burn-out, dépression', example_prevention: 'Entretiens réguliers, cellule d\'écoute, gestion de la charge de travail', example_actions: 'Former les managers à la détection des signaux faibles, mettre en place un baromètre social' },
  { id: 10, name: 'Bruit', example_phenomenon: 'Exposition à un bruit élevé (>80 dB)', example_situation: 'Travail à proximité de machines bruyantes', example_damage: 'Fatigue auditive, surdité', example_prevention: 'Bouchons d\'oreilles, casques antibruit, encoffrement des machines', example_actions: 'Réaliser une cartographie du bruit, installer des écrans acoustiques' },
  { id: 11, name: 'Travail sur écran', example_phenomenon: 'Posture statique prolongée devant écran', example_situation: 'Travail de bureau quotidien', example_damage: 'TMS, fatigue visuelle, maux de tête', example_prevention: 'Écran réglable, siège ergonomique, pauses régulières', example_actions: 'Équiper les postes de supports écran réglables, proposer des séances d\'ostéopathie' },
  { id: 12, name: 'Circulation interne', example_phenomenon: 'Croisement piétons/véhicules', example_situation: 'Déplacements dans les locaux ou le parking', example_damage: 'Collision, écrasement', example_prevention: 'Marquage au sol, séparation des flux, miroirs aux angles morts', example_actions: 'Créer un plan de circulation interne, installer des ralentisseurs et une signalétique' },
  { id: 13, name: 'Risques routiers', example_phenomenon: 'Déplacements professionnels fréquents', example_situation: 'Trajets domicile-travail, missions', example_damage: 'Accident de la route', example_prevention: 'Véhicules entretenus, formation éco-conduite, politique de déplacement', example_actions: 'Équiper les véhicules de service d\'aides à la conduite, limiter les déplacements non essentiels' },
  { id: 14, name: 'Travail isolé', example_phenomenon: 'Salarié travaillant seul', example_situation: 'Intervention en dehors des horaires ou en site isolé', example_damage: 'Malaise sans secours, accident non détecté', example_prevention: 'Dispositif d\'alerte PTI-DATI, procédure de vérification régulière', example_actions: 'Équiper chaque travailleur isolé d\'un dispositif PTI, instaurer un système de pointage régulier' },
  { id: 15, name: 'Vibrations', example_phenomenon: 'Utilisation d\'outils vibrants (marteau-piqueur, meuleuse)', example_situation: 'Manipulation prolongée d\'outils portatifs vibrants', example_damage: 'Syndrome du canal carpien, troubles vasculaires, TMS', example_prevention: 'Outils anti-vibrations, limitation du temps d\'exposition, gants anti-vibrations', example_actions: 'Remplacer les outils les plus vibrants par des modèles amortis, organiser une rotation des tâches' },
  { id: 16, name: 'Rayonnements', example_phenomenon: 'Exposition aux rayonnements ionisants ou non ionisants', example_situation: 'Travail à proximité de sources radioactives, soudage à l\'arc, UV', example_damage: 'Brûlures cutanées, lésions oculaires, cancers', example_prevention: 'Dosimétrie individuelle, écrans de protection, zonage radiologique', example_actions: 'Mettre en place un suivi dosimétrique renforcé, remplacer les sources par des alternatives non irradiantes' },
  { id: 17, name: 'Ambiances thermiques', example_phenomenon: 'Exposition à des températures extrêmes (chaud ou froid)', example_situation: 'Travail en chambre froide, en extérieur l\'été, près de fours', example_damage: 'Coup de chaleur, hypothermie, malaise, gelures', example_prevention: 'Vêtements adaptés, pauses en zone tempérée, eau fraîche à disposition', example_actions: 'Installer une climatisation ou un chauffage d\'appoint, aménager les horaires en période de canicule' },
  { id: 18, name: 'Travaux en hauteur', example_phenomenon: 'Intervention sur toiture, pylône ou structure élevée', example_situation: 'Maintenance d\'équipements en hauteur sans nacelle', example_damage: 'Chute mortelle, polytraumatismes', example_prevention: 'Nacelle élévatrice, filets de sécurité, formation travail en hauteur', example_actions: 'Privilégier les interventions depuis le sol, installer des points d\'ancrage permanents' },
  { id: 19, name: 'Espaces confinés', example_phenomenon: 'Intervention dans un espace clos (cuve, regard, silo)', example_situation: 'Nettoyage ou maintenance dans une cuve sans ventilation', example_damage: 'Asphyxie, intoxication, explosion', example_prevention: 'Détecteur de gaz, ventilation forcée, autorisation de travail spécifique', example_actions: 'Rédiger des procédures d\'entrée en espace confiné, former le personnel au sauvetage' },
  { id: 20, name: 'Amiante', example_phenomenon: 'Présence d\'amiante dans les bâtiments ou équipements', example_situation: 'Intervention sur flocage, calorifugeage ou dalles amiantées', example_damage: 'Asbestose, mésothéliome, cancer du poumon', example_prevention: 'Repérage amiante avant travaux, intervention par entreprise certifiée', example_actions: 'Réaliser un diagnostic amiante complet, planifier le désamiantage des zones identifiées' },
  { id: 21, name: 'Atmosphères explosives (ATEX)', example_phenomenon: 'Présence de gaz, vapeurs ou poussières inflammables', example_situation: 'Stockage de solvants, silos à grains, stations de peinture', example_damage: 'Explosion, brûlures graves, décès', example_prevention: 'Zonage ATEX, matériel anti-étincelles, ventilation, détection de gaz', example_actions: 'Réaliser une étude ATEX, remplacer l\'éclairage par du matériel certifié ATEX' },
  { id: 22, name: 'Agents CMR (Cancérogènes, Mutagènes, Reprotoxiques)', example_phenomenon: 'Utilisation de substances classées CMR', example_situation: 'Manipulation de peintures, solvants, poussières de bois', example_damage: 'Cancers professionnels, troubles de la fertilité', example_prevention: 'Substitution des produits CMR, captage à la source, suivi médical renforcé', example_actions: 'Remplacer les produits CMR par des alternatives, installer une aspiration localisée aux postes de travail' },
  { id: 23, name: 'Risques liés aux équipements de travail', example_phenomenon: 'Équipements non conformes ou mal entretenus', example_situation: 'Utilisation d\'un chariot élévateur sans maintenance', example_damage: 'Renversement, écrasement, blessures', example_prevention: 'Vérifications périodiques obligatoires, carnet de maintenance, CACES', example_actions: 'Mettre à jour le registre de vérification, former les utilisateurs aux contrôles avant usage' },
  { id: 24, name: 'Risques liés aux co-activités', example_phenomenon: 'Intervention simultanée de plusieurs entreprises', example_situation: 'Chantier avec sous-traitants, maintenance pendant l\'exploitation', example_damage: 'Collision d\'engins, chutes d\'objets, exposition croisée', example_prevention: 'Plan de prévention, protocole de sécurité, coordination SPS', example_actions: 'Systématiser les réunions de coordination, mettre à jour les plans de prévention annuellement' },
  { id: 25, name: 'Risques naturels', example_phenomenon: 'Exposition aux intempéries, inondations, séismes', example_situation: 'Travail en extérieur, site en zone inondable', example_damage: 'Blessures, noyade, effondrement de structures', example_prevention: 'Plan d\'urgence, surveillance météo, aménagement des locaux', example_actions: 'Élaborer un plan de continuité d\'activité, installer des dispositifs d\'alerte météo' },
  { id: 26, name: 'Risques technologiques', example_phenomenon: 'Proximité d\'un site industriel classé Seveso', example_situation: 'Implantation à proximité d\'une usine chimique ou d\'un dépôt pétrolier', example_damage: 'Explosion, nuage toxique, contamination', example_prevention: 'Plan Particulier d\'Intervention (PPI), exercices d\'évacuation, alerte', example_actions: 'Participer aux exercices PPI, installer un système de confinement des locaux' },
  { id: 27, name: 'Harcèlement moral et sexuel', example_phenomenon: 'Comportements hostiles, propos déplacés, pressions répétées', example_situation: 'Relations hiérarchiques abusives, remarques à caractère sexuel', example_damage: 'Dépression, anxiété, désinsertion professionnelle', example_prevention: 'Référent harcèlement désigné, procédure de signalement, charte de bonne conduite', example_actions: 'Former l\'ensemble du personnel à la prévention du harcèlement, mettre en place un dispositif d\'alerte anonyme' },
  { id: 28, name: 'Addictions', example_phenomenon: 'Consommation d\'alcool, drogues ou médicaments psychotropes', example_situation: 'Pot d\'entreprise, prise de médicaments altérant la vigilance, pression sociale', example_damage: 'Accident du travail, troubles du comportement, perte de vigilance', example_prevention: 'Règlement intérieur mis à jour, sensibilisation, éthylotest disponible', example_actions: 'Mettre en place un programme de prévention des addictions, former les managers au repérage' },
  { id: 29, name: 'Risques liés au travail de nuit ou posté', example_phenomenon: 'Horaires décalés, travail de nuit, rotation de postes', example_situation: 'Travail en 3x8, gardes de nuit, astreintes fréquentes', example_damage: 'Troubles du sommeil, fatigue chronique, risque cardiovasculaire', example_prevention: 'Suivi médical renforcé, aménagement des plannings, salle de repos', example_actions: 'Limiter les postes de nuit consécutifs, aménager des espaces de micro-sieste' },
  { id: 30, name: 'Risques liés aux déplacements à l\'étranger', example_phenomenon: 'Missions dans des zones à risque sanitaire ou sécuritaire', example_situation: 'Déplacements professionnels en zone endémique ou instable', example_damage: 'Maladies tropicales, agression, enlèvement', example_prevention: 'Vaccinations, assurance rapatriement, briefing sécurité avant départ', example_actions: 'Établir une procédure de suivi des déplacements, fournir un kit santé-sécurité voyage' },
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

type WorkUnit = {
  name: string
  evaluations: Evaluation[]
}

const STORAGE_KEY = 'duerp-demo-data'
const MAX_UNITS = 3

// --- Risk Matrix Component ---

function RiskMatrix({ evaluations }: { evaluations: Evaluation[] }) {
  const countMap = new Map<string, number>()
  evaluations.forEach(ev => {
    const key = `${ev.gravity}-${ev.frequency}`
    countMap.set(key, (countMap.get(key) || 0) + 1)
  })

  const gValues = [16, 8, 4, 2, 1]
  const fValues = [2, 4, 8, 16]

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-xs text-navy-700 font-semibold border border-gray-200 bg-gray-50">
              G \ F
            </th>
            {fValues.map(f => {
              const fl = frequencyLevels.find(x => x.value === f)
              return (
                <th key={f} className="p-2 text-center text-navy-700 font-semibold border border-gray-200 bg-gray-50">
                  <div className="text-xs">{fl?.label}</div>
                  <div className="text-[10px] text-gray-400 font-normal">({f})</div>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {gValues.map(g => {
            const gl = gravityLevels.find(x => x.value === g)
            return (
              <tr key={g}>
                <td className="p-2 font-semibold text-navy-700 border border-gray-200 bg-gray-50">
                  <div className="text-xs">{gl?.label}</div>
                  <div className="text-[10px] text-gray-400 font-normal">({g})</div>
                </td>
                {fValues.map(f => {
                  const score = g * f
                  const level = getRiskLevel(score)
                  const count = countMap.get(`${g}-${f}`) || 0
                  return (
                    <td
                      key={f}
                      className={`p-2 text-center border border-gray-200 ${level.color} relative`}
                    >
                      <div className="font-bold text-sm">{score}</div>
                      {count > 0 && (
                        <div className="absolute -top-1 -right-1 bg-navy-700 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                          {count}
                        </div>
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-green-100 border border-green-200" /> Faible (&lt;9)</div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-orange-100 border border-orange-200" /> Moyen (9-63)</div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-red-100 border border-red-200" /> Élevé (64+)</div>
        <div className="flex items-center gap-1.5"><span className="w-5 h-5 rounded-full bg-navy-700 text-white text-[10px] flex items-center justify-center font-bold">2</span> Nombre de risques</div>
      </div>
    </div>
  )
}

// --- Toast Component ---

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up print:hidden">
      <div className="bg-navy-700 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3">
        <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />
        <span className="font-medium text-sm">{message}</span>
        <button onClick={onClose} className="text-white/60 hover:text-white ml-2">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

// --- Main Component ---

export default function DuerpDemo() {
  const [step, setStep] = useState<'config' | 'evaluate' | 'results'>('config')
  const [workUnits, setWorkUnits] = useState<WorkUnit[]>([])
  const [activeUnitIndex, setActiveUnitIndex] = useState(0)
  const [unitName, setUnitName] = useState('')
  const [hydrated, setHydrated] = useState(false)

  // Toast
  const [toast, setToast] = useState<string | null>(null)

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
  const [categorySearch, setCategorySearch] = useState('')
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [showAddUnit, setShowAddUnit] = useState(false)
  const [newUnitName, setNewUnitName] = useState('')
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null)
  const formRef = useRef<HTMLDivElement>(null)

  // --- localStorage ---
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const data = JSON.parse(saved)
        if (data.workUnits?.length > 0) {
          setWorkUnits(data.workUnits)
          setActiveUnitIndex(data.activeUnitIndex || 0)
          setStep(data.step === 'config' ? 'evaluate' : data.step || 'evaluate')
        }
      }
    } catch { /* ignore */ }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    if (workUnits.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ workUnits, activeUnitIndex, step }))
    }
  }, [workUnits, activeUnitIndex, step, hydrated])

  // --- Derived ---
  const activeUnit = workUnits[activeUnitIndex]
  const evaluations = activeUnit?.evaluations || []
  const allEvaluations = workUnits.flatMap(u => u.evaluations)

  const evaluatedCategoryIds = new Set(evaluations.map(e => e.categoryId))
  const filteredCategories = riskCategories.filter(cat =>
    cat.name.toLowerCase().includes(categorySearch.toLowerCase())
  )

  const grossRisk = gravity * frequency
  const residualRisk = preventionLevel > 0 ? Math.round((grossRisk / preventionLevel) * 100) / 100 : 0

  const highRisks = evaluations.filter(e => e.residualRisk >= 64).length
  const medRisks = evaluations.filter(e => e.residualRisk >= 9 && e.residualRisk < 64).length
  const lowRisks = evaluations.filter(e => e.residualRisk < 9).length

  const allHighRisks = allEvaluations.filter(e => e.residualRisk >= 64).length
  const allMedRisks = allEvaluations.filter(e => e.residualRisk >= 9 && e.residualRisk < 64).length
  const allLowRisks = allEvaluations.filter(e => e.residualRisk < 9).length

  // Suggested categories for current unit
  const suggestedCategoryIds = activeUnit ? (workUnitRiskSuggestions[activeUnit.name] || []) : []
  const suggestedCategories = riskCategories.filter(
    c => suggestedCategoryIds.includes(c.id) && !evaluatedCategoryIds.has(c.id)
  )

  // --- Helpers ---
  const resetForm = () => {
    setPhenomenon('')
    setSituation('')
    setDamage('')
    setGravity(0)
    setFrequency(0)
    setPreventionText('')
    setPreventionLevel(0)
    setActions('')
    setEditingIndex(null)
  }

  const fillExample = () => {
    setPhenomenon(selectedCategory.example_phenomenon)
    setSituation(selectedCategory.example_situation)
    setDamage(selectedCategory.example_damage)
    setPreventionText(selectedCategory.example_prevention)
    setActions(selectedCategory.example_actions)
  }

  const showToast = (message: string) => {
    setToast(message)
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
    setWorkUnits(prev => {
      const updated = [...prev]
      if (editingIndex !== null) {
        updated[activeUnitIndex] = {
          ...updated[activeUnitIndex],
          evaluations: updated[activeUnitIndex].evaluations.map((e, i) =>
            i === editingIndex ? newEval : e
          ),
        }
      } else {
        updated[activeUnitIndex] = {
          ...updated[activeUnitIndex],
          evaluations: [...updated[activeUnitIndex].evaluations, newEval],
        }
      }
      return updated
    })
    showToast(editingIndex !== null ? 'Risque modifié avec succès' : 'Risque enregistré avec succès')
    resetForm()
  }

  const deleteEvaluation = (index: number) => {
    setWorkUnits(prev => {
      const updated = [...prev]
      updated[activeUnitIndex] = {
        ...updated[activeUnitIndex],
        evaluations: updated[activeUnitIndex].evaluations.filter((_, i) => i !== index),
      }
      return updated
    })
    setDeleteConfirm(null)
    showToast('Risque supprimé')
  }

  const editEvaluation = (index: number) => {
    const ev = evaluations[index]
    const cat = riskCategories.find(c => c.id === ev.categoryId) || riskCategories[0]
    setSelectedCategory(cat)
    setPhenomenon(ev.phenomenon)
    setSituation(ev.situation)
    setDamage(ev.damage)
    setGravity(ev.gravity)
    setFrequency(ev.frequency)
    setPreventionText(ev.prevention)
    setPreventionLevel(ev.preventionLevel)
    setActions(ev.actions)
    setEditingIndex(index)
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const addSampleEvaluation = () => {
    const cat = riskCategories[0] // Chutes de plain-pied
    const sampleEval: Evaluation = {
      categoryId: cat.id,
      categoryName: cat.name,
      phenomenon: cat.example_phenomenon,
      situation: cat.example_situation,
      damage: cat.example_damage,
      gravity: 4,
      frequency: 8,
      grossRisk: 32,
      prevention: cat.example_prevention,
      preventionLevel: 4,
      residualRisk: 8,
      actions: cat.example_actions,
    }
    setWorkUnits(prev => {
      const updated = [...prev]
      updated[activeUnitIndex] = {
        ...updated[activeUnitIndex],
        evaluations: [...updated[activeUnitIndex].evaluations, sampleEval],
      }
      return updated
    })
    showToast('Exemple ajouté — à vous de jouer !')
  }

  const startDemo = () => {
    if (!unitName.trim()) return
    setWorkUnits([{ name: unitName.trim(), evaluations: [] }])
    setActiveUnitIndex(0)
    setStep('evaluate')
  }

  const addWorkUnit = () => {
    if (!newUnitName.trim() || workUnits.length >= MAX_UNITS) return
    setWorkUnits(prev => [...prev, { name: newUnitName.trim(), evaluations: [] }])
    setActiveUnitIndex(workUnits.length)
    setNewUnitName('')
    setShowAddUnit(false)
    resetForm()
    showToast(`Unité "${newUnitName.trim()}" ajoutée`)
  }

  const clearDemoData = () => {
    localStorage.removeItem(STORAGE_KEY)
    setWorkUnits([])
    setActiveUnitIndex(0)
    setUnitName('')
    resetForm()
    setStep('config')
  }

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
              Cette démo vous permet de tester le processus d&apos;évaluation sur jusqu&apos;à {MAX_UNITS} unités de travail.
              Aucun compte requis. Vos données sont sauvegardées localement.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-xl mx-auto px-4">
            {/* Resume previous session */}
            {hydrated && workUnits.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-fire-200">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-5 w-5 text-fire-500" />
                  <h3 className="font-bold text-navy-700">Session précédente trouvée</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Vous avez {workUnits.length} unité{workUnits.length > 1 ? 's' : ''} de travail avec {allEvaluations.length} risque{allEvaluations.length > 1 ? 's' : ''} évalué{allEvaluations.length > 1 ? 's' : ''}.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {workUnits.map((u, i) => (
                    <span key={i} className="bg-fire-50 text-fire-700 border border-fire-200 text-sm px-3 py-1 rounded-lg">
                      {u.name} ({u.evaluations.length})
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setStep('evaluate')}
                    className="btn-primary flex-1 flex items-center justify-center gap-2"
                  >
                    Reprendre
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <button
                    onClick={clearDemoData}
                    className="border border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors text-sm"
                  >
                    Recommencer
                  </button>
                </div>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-fire-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <h2 className="text-xl font-bold text-navy-700">Nommez votre unité de travail</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Une unité de travail regroupe les salariés exposés aux mêmes risques.
                Choisissez parmi les suggestions ou saisissez votre propre nom.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {workUnitSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setUnitName(suggestion)}
                    className={`px-3 py-1.5 rounded-lg text-sm border transition-all ${
                      unitName === suggestion
                        ? 'border-fire-500 bg-fire-50 text-fire-700 font-medium'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={unitName}
                onChange={(e) => setUnitName(e.target.value)}
                className="input-field mb-6"
                placeholder="Ou saisissez un nom personnalisé..."
              />
              <button
                onClick={startDemo}
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
        {/* Print styles */}
        <style jsx global>{`
          @media print {
            nav, footer, .print\\:hidden { display: none !important; }
            body { font-size: 11px; }
            section { padding: 8px 0 !important; }
            .shadow-lg, .shadow { box-shadow: none !important; }
            @page { margin: 1.5cm; }
          }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-up { animation: slide-up 0.3s ease-out; }
        `}</style>

        <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-16 print:py-4 print:bg-white print:text-navy-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-fire-400 text-sm font-semibold mb-4 print:text-navy-700">
              <BarChart3 className="h-4 w-4" />
              Résultats — DUERP Démo
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 print:text-2xl">Synthèse de votre évaluation</h1>
            <p className="text-gray-300 print:text-gray-600">
              {allEvaluations.length} risque{allEvaluations.length > 1 ? 's' : ''} évalué{allEvaluations.length > 1 ? 's' : ''} dans {workUnits.length} unité{workUnits.length > 1 ? 's' : ''} de travail
            </p>
            <div className="flex items-center gap-3 mt-4 print:hidden">
              <button
                onClick={() => window.print()}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-5 rounded-lg transition-colors inline-flex items-center gap-2 text-sm border border-white/20"
              >
                <Printer className="h-4 w-4" />
                Imprimer / PDF
              </button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Summary cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-navy-700">{allEvaluations.length}</div>
                <div className="text-gray-500 text-sm">Risques évalués</div>
              </div>
              <div className="bg-red-50 rounded-xl p-6 text-center border border-red-100">
                <div className="text-3xl font-bold text-red-600">{allHighRisks}</div>
                <div className="text-red-500 text-sm">Risques élevés</div>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 text-center border border-orange-100">
                <div className="text-3xl font-bold text-orange-600">{allMedRisks}</div>
                <div className="text-orange-500 text-sm">Risques moyens</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center border border-green-100">
                <div className="text-3xl font-bold text-green-600">{allLowRisks}</div>
                <div className="text-green-500 text-sm">Risques faibles</div>
              </div>
            </div>

            {/* Risk Matrix */}
            {allEvaluations.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-6 mb-12">
                <h3 className="font-bold text-navy-700 text-lg mb-4 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-fire-500" />
                  Matrice des risques bruts
                </h3>
                <RiskMatrix evaluations={allEvaluations} />
              </div>
            )}

            {/* Per-unit evaluations */}
            {workUnits.map((unit, unitIdx) => {
              if (unit.evaluations.length === 0) return null
              return (
                <div key={unitIdx} className="mb-12">
                  <h3 className="font-bold text-navy-700 text-lg mb-4 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-fire-500" />
                    {unit.name}
                    <span className="text-sm font-normal text-gray-500">({unit.evaluations.length} risque{unit.evaluations.length > 1 ? 's' : ''})</span>
                  </h3>
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
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
                            <th className="px-4 py-3 text-left font-semibold text-navy-700 print:hidden">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {unit.evaluations.map((ev, i) => {
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
                                <td className="px-4 py-3 text-gray-500 text-xs max-w-xs truncate print:hidden">{ev.actions || '—'}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Actions needed */}
            {(allHighRisks > 0 || allMedRisks > 0) && (
              <div className="bg-fire-50 border border-fire-200 rounded-xl p-6 mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-fire-500" />
                  <h3 className="font-bold text-navy-700 text-lg">Plans d&apos;action requis</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {allHighRisks + allMedRisks} risque{(allHighRisks + allMedRisks) > 1 ? 's' : ''} nécessite{(allHighRisks + allMedRisks) > 1 ? 'nt' : ''} un plan d&apos;action.
                  Avec la version complète, vous pouvez créer et suivre vos plans d&apos;action directement.
                </p>
                {allEvaluations
                  .filter(e => e.residualRisk >= 9)
                  .sort((a, b) => b.residualRisk - a.residualRisk)
                  .map((ev, i) => {
                    const level = getRiskLevel(ev.residualRisk)
                    return (
                      <div key={i} className="flex items-center gap-3 py-2 border-t border-fire-200 first:border-0">
                        <span className={`w-2.5 h-2.5 rounded-full ${level.dot}`} />
                        <span className="font-medium text-navy-700">{ev.categoryName}</span>
                        <span className="text-gray-500 text-sm">— {ev.phenomenon}</span>
                        <span className={`ml-auto px-3 py-0.5 rounded-full text-xs font-bold ${level.color}`}>
                          {ev.residualRisk}
                        </span>
                      </div>
                    )
                  })}
              </div>
            )}

            {/* CTA */}
            <div className="bg-navy-800 rounded-2xl p-8 text-center text-white print:hidden">
              <h3 className="text-2xl font-bold mb-4">
                Cette démo ne couvre que {MAX_UNITS} unités de travail
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

            <div className="mt-6 flex items-center justify-center gap-6 print:hidden">
              <button
                onClick={() => setStep('evaluate')}
                className="text-fire-500 hover:text-fire-600 font-medium inline-flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Revenir à l&apos;évaluation
              </button>
              <button
                onClick={clearDemoData}
                className="text-gray-400 hover:text-gray-600 text-sm inline-flex items-center gap-1"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Effacer les données
              </button>
            </div>
          </div>
        </section>

        {toast && <Toast message={toast} onClose={() => setToast(null)} />}
      </>
    )
  }

  // Step: Evaluate
  return (
    <>
      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
      `}</style>

      <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-fire-400 text-sm font-semibold mb-1">
                <ClipboardCheck className="h-4 w-4" />
                Évaluation — {activeUnit?.name}
              </div>
              <div className="text-gray-300 text-sm">
                {evaluations.length === 0 ? (
                  <span>Commencez par ajouter des risques ci-dessous</span>
                ) : (
                  <>
                    {evaluations.length} risque{evaluations.length > 1 ? 's' : ''} évalué{evaluations.length > 1 ? 's' : ''}
                    <span className="ml-2">
                      (<span className="text-red-400">{highRisks} élevé{highRisks > 1 ? 's' : ''}</span>
                      {' / '}
                      <span className="text-orange-400">{medRisks} moyen{medRisks > 1 ? 's' : ''}</span>
                      {' / '}
                      <span className="text-green-400">{lowRisks} faible{lowRisks > 1 ? 's' : ''}</span>)
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setStep('config')}
                className="text-white/70 hover:text-white text-sm inline-flex items-center gap-1 transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Configuration
              </button>
              {allEvaluations.length > 0 && (
                <button
                  onClick={() => setStep('results')}
                  className="bg-fire-500 hover:bg-fire-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors inline-flex items-center gap-2 text-sm"
                >
                  <BarChart3 className="h-4 w-4" />
                  Voir la synthèse ({allEvaluations.length})
                </button>
              )}
            </div>
          </div>

          {/* Unit tabs */}
          {workUnits.length > 0 && (
            <div className="flex items-center gap-2 mt-4 overflow-x-auto">
              {workUnits.map((unit, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveUnitIndex(i); resetForm() }}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                    i === activeUnitIndex
                      ? 'bg-white/20 text-white'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80'
                  }`}
                >
                  <Building2 className="h-3.5 w-3.5" />
                  {unit.name}
                  <span className="text-xs opacity-70">({unit.evaluations.length})</span>
                </button>
              ))}
              {workUnits.length < MAX_UNITS && (
                <button
                  onClick={() => setShowAddUnit(true)}
                  className="px-3 py-1.5 rounded-lg text-sm text-white/50 hover:text-white/80 hover:bg-white/10 transition-all inline-flex items-center gap-1"
                >
                  <Plus className="h-3.5 w-3.5" />
                  Ajouter
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Add unit modal */}
      {showAddUnit && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-navy-700 text-lg">Ajouter une unité de travail</h3>
              <button onClick={() => setShowAddUnit(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {workUnitSuggestions
                .filter(s => !workUnits.some(u => u.name === s))
                .slice(0, 8)
                .map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setNewUnitName(suggestion)}
                    className={`px-3 py-1 rounded-lg text-xs border transition-all ${
                      newUnitName === suggestion
                        ? 'border-fire-500 bg-fire-50 text-fire-700 font-medium'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {suggestion}
                  </button>
                ))}
            </div>
            <input
              type="text"
              value={newUnitName}
              onChange={(e) => setNewUnitName(e.target.value)}
              className="input-field mb-4"
              placeholder="Nom de l'unité..."
              autoFocus
            />
            <div className="flex gap-3">
              <button
                onClick={addWorkUnit}
                disabled={!newUnitName.trim()}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Ajouter
              </button>
              <button
                onClick={() => { setShowAddUnit(false); setNewUnitName('') }}
                className="border border-gray-300 text-gray-600 hover:bg-gray-50 py-2 px-4 rounded-lg transition-colors"
              >
                Annuler
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              {MAX_UNITS - workUnits.length} unité{MAX_UNITS - workUnits.length > 1 ? 's' : ''} restante{MAX_UNITS - workUnits.length > 1 ? 's' : ''} dans la démo
            </p>
          </div>
        </div>
      )}

      <section className="py-8 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Onboarding guide - shown when no risks added yet */}
          {evaluations.length === 0 && (
            <div className="bg-gradient-to-r from-fire-50 to-orange-50 border border-fire-200 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-fire-500 text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-700 text-lg mb-2">Comment ça marche ?</h3>
                  <p className="text-gray-600 mb-4">
                    Évaluez les risques de votre unité <strong>&quot;{activeUnit?.name}&quot;</strong> en 3 étapes simples :
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-fire-500 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">1</div>
                      <div>
                        <div className="font-semibold text-navy-700 text-sm">Choisissez un risque</div>
                        <div className="text-xs text-gray-500">Sélectionnez une catégorie dans la liste et décrivez le danger</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-fire-500 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">2</div>
                      <div>
                        <div className="font-semibold text-navy-700 text-sm">Coter le risque</div>
                        <div className="text-xs text-gray-500">Évaluez la gravité, la fréquence et le niveau de prévention</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-fire-500 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">3</div>
                      <div>
                        <div className="font-semibold text-navy-700 text-sm">Enregistrez & répétez</div>
                        <div className="text-xs text-gray-500">Enregistrez puis ajoutez autant de risques que nécessaire</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-fire-200">
                    <button
                      onClick={addSampleEvaluation}
                      className="bg-fire-500 hover:bg-fire-600 text-white font-semibold py-2 px-5 rounded-lg transition-colors inline-flex items-center gap-2 text-sm"
                    >
                      <ListChecks className="h-4 w-4" />
                      Ajouter un exemple pour commencer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Suggested risks */}
          {suggestedCategories.length > 0 && evaluations.length < 6 && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-4 w-4 text-blue-500" />
                <span className="font-semibold text-navy-700 text-sm">Risques suggérés pour &quot;{activeUnit?.name}&quot;</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestedCategories.slice(0, 6).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat)
                      resetForm()
                      setPhenomenon(cat.example_phenomenon)
                      setSituation(cat.example_situation)
                      setDamage(cat.example_damage)
                      setPreventionText(cat.example_prevention)
                      setActions(cat.example_actions)
                      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className="px-3 py-1.5 rounded-lg text-xs border border-blue-300 bg-white text-blue-700 hover:bg-blue-100 transition-all font-medium"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={formRef} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">

            {/* Section header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`${editingIndex !== null ? 'bg-amber-500' : 'bg-fire-500'} text-white w-8 h-8 rounded-full flex items-center justify-center`}>
                  {editingIndex !== null ? <Pencil className="h-4 w-4" /> : <Plus className="h-5 w-5" />}
                </div>
                <div>
                  <h2 className="font-bold text-navy-700 text-lg">
                    {editingIndex !== null
                      ? 'Modifier le risque'
                      : evaluations.length === 0
                        ? 'Ajoutez votre premier risque'
                        : 'Ajouter un nouveau risque'}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {editingIndex !== null
                      ? 'Modifiez les champs puis cliquez sur Enregistrer'
                      : 'Remplissez le formulaire puis cliquez sur Enregistrer'}
                  </p>
                </div>
              </div>
              {editingIndex !== null && (
                <button
                  onClick={resetForm}
                  className="text-gray-400 hover:text-gray-600 text-sm inline-flex items-center gap-1"
                >
                  <X className="h-4 w-4" />
                  Annuler
                </button>
              )}
            </div>

            {/* Category selector */}
            <div className="mb-8">
              <label className="label-field">Catégorie de risque ({riskCategories.length} catégories disponibles)</label>
              <div className="relative">
                <button
                  onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); setCategorySearch('') }}
                  className="input-field w-full text-left flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    {selectedCategory.name}
                    {evaluatedCategoryIds.has(selectedCategory.id) && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">Déjà évalué</span>
                    )}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${showCategoryDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showCategoryDropdown && (
                  <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg">
                    <div className="p-2 border-b border-gray-100">
                      <input
                        type="text"
                        value={categorySearch}
                        onChange={(e) => setCategorySearch(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-500 focus:border-transparent"
                        placeholder="Rechercher une catégorie..."
                        autoFocus
                      />
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {filteredCategories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => { setSelectedCategory(cat); setShowCategoryDropdown(false); setCategorySearch(''); resetForm() }}
                          className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-sm flex items-center justify-between ${
                            selectedCategory.id === cat.id ? 'bg-fire-50 text-fire-600 font-medium' : 'text-gray-700'
                          }`}
                        >
                          <span>{cat.name}</span>
                          {evaluatedCategoryIds.has(cat.id) && (
                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                          )}
                        </button>
                      ))}
                      {filteredCategories.length === 0 && (
                        <div className="px-4 py-3 text-sm text-gray-500 text-center">Aucune catégorie trouvée</div>
                      )}
                    </div>
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
                className={`${editingIndex !== null ? 'bg-amber-500 hover:bg-amber-600' : ''} btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <CheckCircle className="h-5 w-5" />
                {editingIndex !== null ? 'Enregistrer la modification' : 'Enregistrer ce risque'}
              </button>
              {allEvaluations.length > 0 && editingIndex === null && (
                <button
                  onClick={() => setStep('results')}
                  className="bg-navy-700 hover:bg-navy-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <BarChart3 className="h-5 w-5" />
                  Voir la synthèse ({allEvaluations.length})
                </button>
              )}
            </div>
          </div>

          {/* Recent evaluations */}
          {evaluations.length > 0 && (
            <div className="mt-8">
              <h3 className="font-bold text-navy-700 mb-4">
                Risques évalués dans &quot;{activeUnit?.name}&quot; ({evaluations.length})
              </h3>
              <div className="space-y-2">
                {[...evaluations].map((ev, i) => {
                  const actualIndex = i
                  const level = getRiskLevel(ev.residualRisk)
                  return (
                    <div key={actualIndex} className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm group">
                      <span className={`w-3 h-3 rounded-full shrink-0 ${level.dot}`} />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-navy-700 text-sm">{ev.categoryName}</div>
                        <div className="text-gray-500 text-xs truncate">{ev.phenomenon}</div>
                      </div>
                      <div className="text-right shrink-0 mr-2">
                        <div className="text-xs text-gray-500">Résiduel</div>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${level.color}`}>
                          {ev.residualRisk}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => editEvaluation(actualIndex)}
                          className="p-1.5 rounded-lg text-gray-400 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                          title="Modifier"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        {deleteConfirm === actualIndex ? (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => deleteEvaluation(actualIndex)}
                              className="px-2 py-1 rounded text-xs font-bold bg-red-500 text-white hover:bg-red-600"
                            >
                              Supprimer
                            </button>
                            <button
                              onClick={() => setDeleteConfirm(null)}
                              className="px-2 py-1 rounded text-xs text-gray-500 hover:bg-gray-100"
                            >
                              Non
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeleteConfirm(actualIndex)}
                            className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                            title="Supprimer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}

      {/* Upgrade comparison & next steps */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-3">
              Vous aimez la démo ? Passez à la version complète
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              La démo vous montre les bases. Les versions Pro vous permettent de couvrir
              l&apos;intégralité de vos risques et de générer un DUERP conforme.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
              <div className="text-sm font-semibold text-gray-500 mb-2">Démo gratuite</div>
              <div className="text-2xl font-bold text-navy-700 mb-4">0 €</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  3 unités de travail max
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  30 catégories de risques
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 text-gray-300 mt-0.5 shrink-0" />
                  Pas de sauvegarde
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 text-gray-300 mt-0.5 shrink-0" />
                  Pas d&apos;export PDF
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
              <div className="text-sm font-semibold text-gray-500 mb-2">Essentiel</div>
              <div className="text-2xl font-bold text-navy-700 mb-1">299 €</div>
              <div className="text-xs text-gray-500 mb-4">HT - paiement unique</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  3 unités de travail
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  Évaluations illimitées
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  Export PDF conforme
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  Plans d&apos;action
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-fire-500 shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-fire-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Recommandé
              </div>
              <div className="text-sm font-semibold text-fire-500 mb-2">Professionnel</div>
              <div className="text-2xl font-bold text-navy-700 mb-1">599 €</div>
              <div className="text-xs text-gray-500 mb-4">HT - paiement unique</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  10 unités de travail
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  Matrice visuelle
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  Suivi avancé plans d&apos;action
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  Support email
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
              <div className="text-sm font-semibold text-gray-500 mb-2">Entreprise</div>
              <div className="text-2xl font-bold text-navy-700 mb-1">1 299 €</div>
              <div className="text-xs text-gray-500 mb-4">HT / an</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  Organisations multiples
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  Unités illimitées
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  Rapports marque blanche
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  Support prioritaire
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-navy-700 rounded-2xl p-8 text-white text-center">
            <div className="text-lg font-semibold mb-2">
              Un consultant facture entre 2 000 et 5 000 € pour un DUERP
            </div>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Notre plateforme vous offre la même qualité pour une fraction du prix,
              avec des mises à jour continues et un accompagnement intégré.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-fire-500 hover:bg-fire-600 text-white font-semibold py-3 px-8 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
              >
                Passer à la version complète
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services#duerp"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
              >
                Voir le détail des offres
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
