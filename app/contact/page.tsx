'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, ContactFormData } from '@/lib/validations'
import { Calendar, Mail, MapPin, Send, CheckCircle, Loader2, Clock, ArrowRight } from 'lucide-react'

const sujets = [
  { value: '', label: 'Sélectionnez un sujet' },
  { value: 'information', label: 'Demande d\'information' },
  { value: 'prevention', label: 'Prévention & Analyse des risques' },
  { value: 'audit', label: 'Audit de Vulnérabilité' },
  { value: 'formation', label: 'Formation' },
  { value: 'autre', label: 'Autre' },
]

const creneaux = [
  { jour: 'Lundi', horaires: ['9h00', '10h00', '11h00', '14h00', '15h00', '16h00'] },
  { jour: 'Mardi', horaires: ['9h00', '10h00', '11h00', '14h00', '15h00', '16h00'] },
  { jour: 'Mercredi', horaires: ['9h00', '10h00', '11h00', '14h00', '15h00', '16h00'] },
  { jour: 'Jeudi', horaires: ['9h00', '10h00', '11h00', '14h00', '15h00', '16h00'] },
  { jour: 'Vendredi', horaires: ['9h00', '10h00', '11h00', '14h00', '15h00', '16h00'] },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedJour, setSelectedJour] = useState<string | null>(null)
  const [selectedHoraire, setSelectedHoraire] = useState<string | null>(null)
  const [rdvConfirmed, setRdvConfirmed] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Contact form data:', data)
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
    setTimeout(() => setIsSuccess(false), 5000)
  }

  const handleRdvConfirm = () => {
    if (selectedJour && selectedHoraire) {
      setRdvConfirmed(true)
      setTimeout(() => setRdvConfirmed(false), 5000)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl text-gray-300">
              Une question ? Un projet ? Prenez rendez-vous ou envoyez-nous un message.
              Notre équipe vous répondra dans les meilleurs délais.
            </p>
          </div>
        </div>
      </section>

      {/* Prise de rendez-vous */}
      <section id="rdv" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-fire-500/10 text-fire-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Calendar className="h-4 w-4" />
                Rendez-vous en ligne
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
                Réservez un créneau d&apos;échange
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Choisissez le jour et l&apos;heure qui vous conviennent pour un échange gratuit
                de 30 minutes avec notre expert en sécurité incendie.
              </p>
            </div>

            {rdvConfirmed ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-700 mb-2">Rendez-vous confirmé</h3>
                <p className="text-green-600 text-lg">
                  Votre rendez-vous du <strong>{selectedJour} à {selectedHoraire}</strong> a été enregistré.
                  Vous recevrez un email de confirmation avec les détails de connexion.
                </p>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-2xl p-8">
                {/* Sélection du jour */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-navy-700 mb-4 flex items-center gap-2">
                    <span className="bg-fire-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Choisissez un jour
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {creneaux.map((c) => (
                      <button
                        key={c.jour}
                        onClick={() => { setSelectedJour(c.jour); setSelectedHoraire(null) }}
                        className={`p-4 rounded-xl text-center font-medium transition-all ${
                          selectedJour === c.jour
                            ? 'bg-fire-500 text-white shadow-lg shadow-fire-500/30'
                            : 'bg-white text-gray-700 hover:bg-fire-50 border border-gray-200'
                        }`}
                      >
                        {c.jour}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sélection de l'horaire */}
                {selectedJour && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-navy-700 mb-4 flex items-center gap-2">
                      <span className="bg-fire-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      Choisissez un horaire
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                      {creneaux.find(c => c.jour === selectedJour)?.horaires.map((h) => (
                        <button
                          key={h}
                          onClick={() => setSelectedHoraire(h)}
                          className={`p-3 rounded-xl text-center font-medium transition-all flex items-center justify-center gap-2 ${
                            selectedHoraire === h
                              ? 'bg-navy-700 text-white shadow-lg'
                              : 'bg-white text-gray-700 hover:bg-navy-50 border border-gray-200'
                          }`}
                        >
                          <Clock className="h-4 w-4" />
                          {h}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Confirmation */}
                {selectedJour && selectedHoraire && (
                  <div className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-xl p-6 border border-gray-200">
                    <div>
                      <p className="text-gray-600 text-sm">Votre rendez-vous</p>
                      <p className="text-navy-700 font-bold text-lg">{selectedJour} à {selectedHoraire} - 30 min</p>
                      <p className="text-gray-500 text-sm">Échange gratuit - Visioconférence ou téléphone</p>
                    </div>
                    <button
                      onClick={handleRdvConfirm}
                      className="mt-4 sm:mt-0 bg-fire-500 hover:bg-fire-600 text-white font-semibold py-3 px-8 rounded-xl transition-colors inline-flex items-center gap-2"
                    >
                      Confirmer
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Informations de contact */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-navy-700 mb-6">Nos coordonnées</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-fire-500/10 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-fire-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-700">Rendez-vous</h3>
                    <a href="#rdv" className="text-fire-500 hover:text-fire-600 font-medium transition-colors">
                      Réserver un créneau en ligne
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-fire-500/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-fire-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-700">Email</h3>
                    <a href="mailto:contact@prevarie.fr" className="text-gray-600 hover:text-fire-500 transition-colors">
                      contact@prevarie.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-fire-500/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-fire-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-700">Localisation</h3>
                    <p className="text-gray-600">
                      France
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                <h3 className="font-semibold text-navy-700 mb-3">Disponibilités</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>9h00 - 18h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi</span>
                    <span>Sur rendez-vous</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Formulaire */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-navy-700 mb-6">Envoyez-nous un message</h2>

                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p className="text-green-700">Votre message a été envoyé avec succès !</p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nom" className="label-field">
                        Nom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nom"
                        {...register('nom')}
                        className={`input-field ${errors.nom ? 'border-red-500' : ''}`}
                        placeholder="Votre nom"
                      />
                      {errors.nom && (
                        <p className="mt-1 text-sm text-red-500">{errors.nom.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="prenom" className="label-field">
                        Prénom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        {...register('prenom')}
                        className={`input-field ${errors.prenom ? 'border-red-500' : ''}`}
                        placeholder="Votre prénom"
                      />
                      {errors.prenom && (
                        <p className="mt-1 text-sm text-red-500">{errors.prenom.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="label-field">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="votre@email.fr"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="telephone" className="label-field">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        {...register('telephone')}
                        className={`input-field ${errors.telephone ? 'border-red-500' : ''}`}
                        placeholder="06 00 00 00 00"
                      />
                      {errors.telephone && (
                        <p className="mt-1 text-sm text-red-500">{errors.telephone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sujet" className="label-field">
                      Sujet <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="sujet"
                      {...register('sujet')}
                      className={`input-field ${errors.sujet ? 'border-red-500' : ''}`}
                    >
                      {sujets.map((sujet) => (
                        <option key={sujet.value} value={sujet.value}>
                          {sujet.label}
                        </option>
                      ))}
                    </select>
                    {errors.sujet && (
                      <p className="mt-1 text-sm text-red-500">{errors.sujet.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="label-field">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message')}
                      className={`input-field resize-none ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Décrivez votre demande..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
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
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
