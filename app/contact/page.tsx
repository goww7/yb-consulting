'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, ContactFormData } from '@/lib/validations'
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react'

const sujets = [
  { value: '', label: 'Sélectionnez un sujet' },
  { value: 'information', label: 'Demande d\'information' },
  { value: 'prevarie', label: 'Service PREVARIE' },
  { value: 'inavrie', label: 'Service INAVRIE' },
  { value: 'formation', label: 'Formation' },
  { value: 'autre', label: 'Autre' },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

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
    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Contact form data:', data)
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl text-gray-300">
              Une question ? Un projet ? N&apos;hésitez pas à nous contacter.
              Notre équipe vous répondra dans les meilleurs délais.
            </p>
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
                    <Phone className="h-6 w-6 text-fire-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-700">Téléphone</h3>
                    <a href="tel:0645070708" className="text-gray-600 hover:text-fire-500 transition-colors">
                      06 45 07 07 08
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-fire-500/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-fire-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-700">Email</h3>
                    <a href="mailto:contact@yb-consulting.fr" className="text-gray-600 hover:text-fire-500 transition-colors">
                      contact@yb-consulting.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-fire-500/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-fire-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-700">Adresse</h3>
                    <p className="text-gray-600">
                      Adresse à définir<br />
                      France
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                <h3 className="font-semibold text-navy-700 mb-3">Horaires d&apos;ouverture</h3>
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
