'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { rapportAuditSchema, RapportAuditFormData } from '@/lib/validations'
import { generateAuditPDF } from '@/lib/pdf-generator'
import { FileText, Download, Building, ClipboardCheck, AlertTriangle } from 'lucide-react'

const typesSite = [
  { value: '', label: 'Sélectionnez un type' },
  { value: 'industriel', label: 'Site industriel' },
  { value: 'logistique', label: 'Entrepôt / Logistique' },
  { value: 'erp', label: 'ERP (Établissement Recevant du Public)' },
  { value: 'igh', label: 'IGH (Immeuble de Grande Hauteur)' },
  { value: 'bureaux', label: 'Bureaux' },
  { value: 'icpe', label: 'Site ICPE / SEVESO' },
  { value: 'autre', label: 'Autre' },
]

const niveauxRisque = [
  { value: 'faible', label: 'Faible', color: 'bg-green-500' },
  { value: 'moyen', label: 'Moyen', color: 'bg-yellow-500' },
  { value: 'eleve', label: 'Élevé', color: 'bg-orange-500' },
  { value: 'critique', label: 'Critique', color: 'bg-red-500' },
]

export default function RapportAudit() {
  const [isGenerating, setIsGenerating] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RapportAuditFormData>({
    resolver: zodResolver(rapportAuditSchema),
    defaultValues: {
      niveauRisqueGlobal: 'moyen',
    },
  })

  const selectedRisque = watch('niveauRisqueGlobal')

  const onSubmit = async (data: RapportAuditFormData) => {
    setIsGenerating(true)
    // Petit délai pour l'UX
    await new Promise((resolve) => setTimeout(resolve, 500))
    generateAuditPDF(data)
    setIsGenerating(false)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="h-4 w-4" />
              Outil interne
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Générateur de rapport d&apos;audit</h1>
            <p className="text-xl text-gray-300">
              Créez des rapports d&apos;audit professionnels au format PDF.
              Remplissez les informations et téléchargez votre rapport.
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Section Client */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-fire-500/10 p-2 rounded-lg">
                    <Building className="h-5 w-5 text-fire-500" />
                  </div>
                  <h2 className="text-xl font-bold text-navy-700">Informations client</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label htmlFor="nomClient" className="label-field">
                      Nom du client <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nomClient"
                      {...register('nomClient')}
                      className={`input-field ${errors.nomClient ? 'border-red-500' : ''}`}
                      placeholder="Nom de l'entreprise cliente"
                    />
                    {errors.nomClient && (
                      <p className="mt-1 text-sm text-red-500">{errors.nomClient.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="adresseClient" className="label-field">
                      Adresse <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="adresseClient"
                      {...register('adresseClient')}
                      className={`input-field ${errors.adresseClient ? 'border-red-500' : ''}`}
                      placeholder="Adresse complète"
                    />
                    {errors.adresseClient && (
                      <p className="mt-1 text-sm text-red-500">{errors.adresseClient.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="dateAudit" className="label-field">
                      Date de l&apos;audit <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="dateAudit"
                      {...register('dateAudit')}
                      className={`input-field ${errors.dateAudit ? 'border-red-500' : ''}`}
                    />
                    {errors.dateAudit && (
                      <p className="mt-1 text-sm text-red-500">{errors.dateAudit.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Section Site */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-fire-500/10 p-2 rounded-lg">
                    <ClipboardCheck className="h-5 w-5 text-fire-500" />
                  </div>
                  <h2 className="text-xl font-bold text-navy-700">Site audité</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <label htmlFor="nomSite" className="label-field">
                      Nom du site <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nomSite"
                      {...register('nomSite')}
                      className={`input-field ${errors.nomSite ? 'border-red-500' : ''}`}
                      placeholder="Ex: Usine de production - Site Nord"
                    />
                    {errors.nomSite && (
                      <p className="mt-1 text-sm text-red-500">{errors.nomSite.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="surface" className="label-field">
                      Surface (m²)
                    </label>
                    <input
                      type="text"
                      id="surface"
                      {...register('surface')}
                      className="input-field"
                      placeholder="5000"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="typeSite" className="label-field">
                      Type de site <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="typeSite"
                      {...register('typeSite')}
                      className={`input-field ${errors.typeSite ? 'border-red-500' : ''}`}
                    >
                      {typesSite.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.typeSite && (
                      <p className="mt-1 text-sm text-red-500">{errors.typeSite.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Section Résultats */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-fire-500/10 p-2 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-fire-500" />
                  </div>
                  <h2 className="text-xl font-bold text-navy-700">Résultats de l&apos;audit</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="label-field">
                      Niveau de risque global <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                      {niveauxRisque.map((niveau) => (
                        <label
                          key={niveau.value}
                          className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedRisque === niveau.value
                              ? 'border-navy-700 bg-navy-700/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            value={niveau.value}
                            {...register('niveauRisqueGlobal')}
                            className="sr-only"
                          />
                          <span className={`w-3 h-3 rounded-full ${niveau.color}`} />
                          <span className="font-medium">{niveau.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pointsForts" className="label-field">
                      Points forts <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="pointsForts"
                      rows={4}
                      {...register('pointsForts')}
                      className={`input-field resize-none ${errors.pointsForts ? 'border-red-500' : ''}`}
                      placeholder="Listez les points positifs observés lors de l'audit..."
                    />
                    {errors.pointsForts && (
                      <p className="mt-1 text-sm text-red-500">{errors.pointsForts.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="pointsAmeliorer" className="label-field">
                      Points à améliorer <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="pointsAmeliorer"
                      rows={4}
                      {...register('pointsAmeliorer')}
                      className={`input-field resize-none ${errors.pointsAmeliorer ? 'border-red-500' : ''}`}
                      placeholder="Listez les points nécessitant des améliorations..."
                    />
                    {errors.pointsAmeliorer && (
                      <p className="mt-1 text-sm text-red-500">{errors.pointsAmeliorer.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="recommandations" className="label-field">
                      Recommandations <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="recommandations"
                      rows={4}
                      {...register('recommandations')}
                      className={`input-field resize-none ${errors.recommandations ? 'border-red-500' : ''}`}
                      placeholder="Détaillez vos recommandations d'amélioration..."
                    />
                    {errors.recommandations && (
                      <p className="mt-1 text-sm text-red-500">{errors.recommandations.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="conclusion" className="label-field">
                      Conclusion <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="conclusion"
                      rows={4}
                      {...register('conclusion')}
                      className={`input-field resize-none ${errors.conclusion ? 'border-red-500' : ''}`}
                      placeholder="Rédigez la conclusion générale de l'audit..."
                    />
                    {errors.conclusion && (
                      <p className="mt-1 text-sm text-red-500">{errors.conclusion.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isGenerating}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Génération en cours...
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5" />
                    Générer et télécharger le rapport PDF
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
