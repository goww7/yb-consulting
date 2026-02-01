'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { devisSchema, DevisFormData } from '@/lib/validations'
import { FileText, Send, CheckCircle, Loader2, Building, User, Clipboard } from 'lucide-react'

const typesPrestation = [
  { value: '', label: 'Sélectionnez un type de prestation' },
  { value: 'prevarie', label: 'PREVARIE - Prévention et Analyse des Risques' },
  { value: 'inavrie', label: 'INAVRIE - Analyse de Vulnérabilité' },
  { value: 'audit-complet', label: 'Audit complet (PREVARIE + INAVRIE)' },
  { value: 'formation', label: 'Formation sécurité incendie' },
  { value: 'accompagnement', label: 'Accompagnement réglementaire' },
  { value: 'autre', label: 'Autre prestation' },
]

const delais = [
  { value: '', label: 'Sélectionnez un délai' },
  { value: 'urgent', label: 'Urgent (< 1 mois)' },
  { value: 'normal', label: 'Normal (1 à 3 mois)' },
  { value: 'flexible', label: 'Flexible (> 3 mois)' },
]

export default function Devis() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DevisFormData>({
    resolver: zodResolver(devisSchema),
  })

  const onSubmit = async (data: DevisFormData) => {
    setIsSubmitting(true)
    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Devis form data:', data)
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-fire-500/20 text-fire-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="h-4 w-4" />
              Devis gratuit
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Demande de devis</h1>
            <p className="text-xl text-gray-300">
              Décrivez votre projet et recevez un devis personnalisé sous 48h.
              Notre équipe analyse chaque demande avec attention.
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <p className="text-green-700">
                  Votre demande de devis a été envoyée avec succès !
                  Nous vous recontacterons dans les 48h.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Section Entreprise */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-fire-500/10 p-2 rounded-lg">
                    <Building className="h-5 w-5 text-fire-500" />
                  </div>
                  <h2 className="text-xl font-bold text-navy-700">Informations entreprise</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label htmlFor="entreprise" className="label-field">
                      Nom de l&apos;entreprise <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="entreprise"
                      {...register('entreprise')}
                      className={`input-field ${errors.entreprise ? 'border-red-500' : ''}`}
                      placeholder="Nom de votre entreprise"
                    />
                    {errors.entreprise && (
                      <p className="mt-1 text-sm text-red-500">{errors.entreprise.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="siret" className="label-field">
                      SIRET
                    </label>
                    <input
                      type="text"
                      id="siret"
                      {...register('siret')}
                      className="input-field"
                      placeholder="123 456 789 00012"
                    />
                  </div>

                  <div>
                    <label htmlFor="adresseEntreprise" className="label-field">
                      Adresse <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="adresseEntreprise"
                      {...register('adresseEntreprise')}
                      className={`input-field ${errors.adresseEntreprise ? 'border-red-500' : ''}`}
                      placeholder="Adresse de l'entreprise"
                    />
                    {errors.adresseEntreprise && (
                      <p className="mt-1 text-sm text-red-500">{errors.adresseEntreprise.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="codePostal" className="label-field">
                      Code postal <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="codePostal"
                      {...register('codePostal')}
                      className={`input-field ${errors.codePostal ? 'border-red-500' : ''}`}
                      placeholder="75000"
                    />
                    {errors.codePostal && (
                      <p className="mt-1 text-sm text-red-500">{errors.codePostal.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="ville" className="label-field">
                      Ville <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="ville"
                      {...register('ville')}
                      className={`input-field ${errors.ville ? 'border-red-500' : ''}`}
                      placeholder="Paris"
                    />
                    {errors.ville && (
                      <p className="mt-1 text-sm text-red-500">{errors.ville.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Section Contact */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-fire-500/10 p-2 rounded-lg">
                    <User className="h-5 w-5 text-fire-500" />
                  </div>
                  <h2 className="text-xl font-bold text-navy-700">Contact</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nomContact" className="label-field">
                      Nom du contact <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nomContact"
                      {...register('nomContact')}
                      className={`input-field ${errors.nomContact ? 'border-red-500' : ''}`}
                      placeholder="Nom et prénom"
                    />
                    {errors.nomContact && (
                      <p className="mt-1 text-sm text-red-500">{errors.nomContact.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="fonction" className="label-field">
                      Fonction
                    </label>
                    <input
                      type="text"
                      id="fonction"
                      {...register('fonction')}
                      className="input-field"
                      placeholder="Directeur, Responsable sécurité..."
                    />
                  </div>

                  <div>
                    <label htmlFor="emailContact" className="label-field">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="emailContact"
                      {...register('emailContact')}
                      className={`input-field ${errors.emailContact ? 'border-red-500' : ''}`}
                      placeholder="contact@entreprise.fr"
                    />
                    {errors.emailContact && (
                      <p className="mt-1 text-sm text-red-500">{errors.emailContact.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="telephoneContact" className="label-field">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telephoneContact"
                      {...register('telephoneContact')}
                      className={`input-field ${errors.telephoneContact ? 'border-red-500' : ''}`}
                      placeholder="06 00 00 00 00"
                    />
                    {errors.telephoneContact && (
                      <p className="mt-1 text-sm text-red-500">{errors.telephoneContact.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Section Projet */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-fire-500/10 p-2 rounded-lg">
                    <Clipboard className="h-5 w-5 text-fire-500" />
                  </div>
                  <h2 className="text-xl font-bold text-navy-700">Votre projet</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="typePrestation" className="label-field">
                      Type de prestation <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="typePrestation"
                      {...register('typePrestation')}
                      className={`input-field ${errors.typePrestation ? 'border-red-500' : ''}`}
                    >
                      {typesPrestation.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.typePrestation && (
                      <p className="mt-1 text-sm text-red-500">{errors.typePrestation.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="descriptionSite" className="label-field">
                      Description du site / bâtiment <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="descriptionSite"
                      rows={4}
                      {...register('descriptionSite')}
                      className={`input-field resize-none ${errors.descriptionSite ? 'border-red-500' : ''}`}
                      placeholder="Décrivez votre site : type d'activité, nombre d'étages, nombre de personnes, stockages particuliers..."
                    />
                    {errors.descriptionSite && (
                      <p className="mt-1 text-sm text-red-500">{errors.descriptionSite.message}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="surface" className="label-field">
                        Surface (m²)
                      </label>
                      <input
                        type="text"
                        id="surface"
                        {...register('surface')}
                        className="input-field"
                        placeholder="1000"
                      />
                    </div>

                    <div>
                      <label htmlFor="nombreBatiments" className="label-field">
                        Nombre de bâtiments
                      </label>
                      <input
                        type="text"
                        id="nombreBatiments"
                        {...register('nombreBatiments')}
                        className="input-field"
                        placeholder="1"
                      />
                    </div>

                    <div>
                      <label htmlFor="delaiSouhaite" className="label-field">
                        Délai souhaité
                      </label>
                      <select
                        id="delaiSouhaite"
                        {...register('delaiSouhaite')}
                        className="input-field"
                      >
                        {delais.map((delai) => (
                          <option key={delai.value} value={delai.value}>
                            {delai.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="messageComplementaire" className="label-field">
                      Message complémentaire
                    </label>
                    <textarea
                      id="messageComplementaire"
                      rows={3}
                      {...register('messageComplementaire')}
                      className="input-field resize-none"
                      placeholder="Informations complémentaires, contraintes particulières..."
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Envoyer la demande de devis
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
