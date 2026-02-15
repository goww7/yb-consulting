'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, ContactFormData, devisSchema, DevisFormData } from '@/lib/validations'
import { Mail, MapPin, Send, CheckCircle, Loader2, FileText, MessageSquare, Building, User, Clipboard, ArrowRight, Clock, Shield, Phone } from 'lucide-react'

const sujets = [
  { value: '', label: 'Sélectionnez un sujet' },
  { value: 'information', label: 'Demande d\'information' },
  { value: 'prevention', label: 'Prévention & Analyse des risques' },
  { value: 'audit', label: 'Audit de Vulnérabilité' },
  { value: 'duerp', label: 'DUERP - Évaluation des risques' },
  { value: 'formation', label: 'Formation' },
  { value: 'autre', label: 'Autre' },
]

const typesPrestation = [
  { value: '', label: 'Sélectionnez un type de prestation' },
  { value: 'prevention', label: 'Prévention & Analyse des Risques' },
  { value: 'audit-vulnerabilite', label: 'Audit de Vulnérabilité' },
  { value: 'audit-complet', label: 'Audit complet (Prévention + Vulnérabilité)' },
  { value: 'duerp', label: 'DUERP - Évaluation des risques professionnels' },
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

type ActiveTab = 'devis' | 'contact'

export default function Contact() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('devis')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const devisForm = useForm<DevisFormData>({
    resolver: zodResolver(devisSchema),
  })

  const onSubmitContact = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setErrorMessage('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', ...data }),
      })
      if (!res.ok) throw new Error()
      setIsSuccess(true)
      contactForm.reset()
      setTimeout(() => setIsSuccess(false), 5000)
    } catch {
      setErrorMessage('Une erreur est survenue. Veuillez réessayer ou nous contacter par email.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const onSubmitDevis = async (data: DevisFormData) => {
    setIsSubmitting(true)
    setErrorMessage('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'devis', ...data }),
      })
      if (!res.ok) throw new Error()
      setIsSuccess(true)
      devisForm.reset()
      setTimeout(() => setIsSuccess(false), 5000)
    } catch {
      setErrorMessage('Une erreur est survenue. Veuillez réessayer ou nous contacter par email.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Obtenez votre diagnostic sécurité gratuit
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Premier échange offert avec notre expert certifié CNPP pour identifier
              vos failles et vous proposer un plan d&apos;action concret. Réponse garantie sous 48h.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Diagnostic', value: 'Gratuit' },
                { label: 'Réponse', value: '< 48h' },
                { label: 'Expert', value: 'Certifié CNPP' },
                { label: 'Devis', value: 'Sur mesure' },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-lg font-bold">{item.value}</div>
                  <div className="text-gray-400 text-xs">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-navy-700 mb-6">Nos coordonnées</h2>

              <div className="space-y-6">
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
                    <p className="text-gray-600">France</p>
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

              <div className="mt-6 p-6 bg-fire-500 rounded-xl text-white">
                <h3 className="font-semibold mb-2">Réponse garantie sous 48h</h3>
                <p className="text-white/90 text-sm">
                  Nous nous engageons à répondre à toutes les demandes sous 48h ouvrées.
                  Pour les demandes urgentes, mentionnez-le dans votre message.
                </p>
              </div>

              {/* What to expect */}
              <div className="mt-6 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-navy-700 mb-4">Ce qui se passe ensuite</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, text: 'Confirmation de réception par email' },
                    { icon: Phone, text: 'Appel de cadrage sous 48h' },
                    { icon: FileText, text: 'Proposition détaillée personnalisée' },
                    { icon: Shield, text: 'Démarrage de la mission' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-fire-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                        {i + 1}
                      </div>
                      <step.icon className="h-4 w-4 text-gray-400 shrink-0" />
                      <span className="text-sm text-gray-600">{step.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => { setActiveTab('devis'); setIsSuccess(false); setErrorMessage('') }}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-semibold text-sm transition-colors ${
                      activeTab === 'devis'
                        ? 'text-fire-500 border-b-2 border-fire-500 bg-fire-50/50'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <FileText className="h-4 w-4" />
                    Demande de devis
                  </button>
                  <button
                    onClick={() => { setActiveTab('contact'); setIsSuccess(false); setErrorMessage('') }}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-semibold text-sm transition-colors ${
                      activeTab === 'contact'
                        ? 'text-fire-500 border-b-2 border-fire-500 bg-fire-50/50'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <MessageSquare className="h-4 w-4" />
                    Question générale
                  </button>
                </div>

                <div className="p-8">
                  {isSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <p className="text-green-700">
                        {activeTab === 'devis'
                          ? 'Votre demande de devis a été envoyée ! Nous vous recontacterons sous 48h.'
                          : 'Votre message a été envoyé avec succès !'}
                      </p>
                    </div>
                  )}

                  {errorMessage && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-700">{errorMessage}</p>
                    </div>
                  )}

                  {/* Devis form */}
                  {activeTab === 'devis' && (
                    <form onSubmit={devisForm.handleSubmit(onSubmitDevis)} className="space-y-8">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="bg-fire-500/10 p-2 rounded-lg">
                            <Building className="h-5 w-5 text-fire-500" />
                          </div>
                          <h2 className="text-xl font-bold text-navy-700">Informations entreprise</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="md:col-span-2">
                            <label htmlFor="entreprise" className="label-field">Nom de l&apos;entreprise <span className="text-red-500">*</span></label>
                            <input type="text" id="entreprise" {...devisForm.register('entreprise')} className={`input-field ${devisForm.formState.errors.entreprise ? 'border-red-500' : ''}`} placeholder="Nom de votre entreprise" />
                            {devisForm.formState.errors.entreprise && <p className="mt-1 text-sm text-red-500">{devisForm.formState.errors.entreprise.message}</p>}
                          </div>
                          <div>
                            <label htmlFor="siret" className="label-field">SIRET</label>
                            <input type="text" id="siret" {...devisForm.register('siret')} className="input-field" placeholder="123 456 789 00012" />
                          </div>
                          <div>
                            <label htmlFor="adresseEntreprise" className="label-field">Adresse <span className="text-red-500">*</span></label>
                            <input type="text" id="adresseEntreprise" {...devisForm.register('adresseEntreprise')} className={`input-field ${devisForm.formState.errors.adresseEntreprise ? 'border-red-500' : ''}`} placeholder="Adresse de l'entreprise" />
                            {devisForm.formState.errors.adresseEntreprise && <p className="mt-1 text-sm text-red-500">{devisForm.formState.errors.adresseEntreprise.message}</p>}
                          </div>
                          <div>
                            <label htmlFor="codePostal" className="label-field">Code postal <span className="text-red-500">*</span></label>
                            <input type="text" id="codePostal" {...devisForm.register('codePostal')} className={`input-field ${devisForm.formState.errors.codePostal ? 'border-red-500' : ''}`} placeholder="75000" />
                            {devisForm.formState.errors.codePostal && <p className="mt-1 text-sm text-red-500">{devisForm.formState.errors.codePostal.message}</p>}
                          </div>
                          <div>
                            <label htmlFor="ville" className="label-field">Ville <span className="text-red-500">*</span></label>
                            <input type="text" id="ville" {...devisForm.register('ville')} className={`input-field ${devisForm.formState.errors.ville ? 'border-red-500' : ''}`} placeholder="Paris" />
                            {devisForm.formState.errors.ville && <p className="mt-1 text-sm text-red-500">{devisForm.formState.errors.ville.message}</p>}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="bg-fire-500/10 p-2 rounded-lg"><User className="h-5 w-5 text-fire-500" /></div>
                          <h2 className="text-xl font-bold text-navy-700">Contact</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="nomContact" className="label-field">Nom du contact <span className="text-red-500">*</span></label>
                            <input type="text" id="nomContact" {...devisForm.register('nomContact')} className={`input-field ${devisForm.formState.errors.nomContact ? 'border-red-500' : ''}`} placeholder="Nom et prénom" />
                            {devisForm.formState.errors.nomContact && <p className="mt-1 text-sm text-red-500">{devisForm.formState.errors.nomContact.message}</p>}
                          </div>
                          <div>
                            <label htmlFor="fonction" className="label-field">Fonction</label>
                            <input type="text" id="fonction" {...devisForm.register('fonction')} className="input-field" placeholder="Directeur, Responsable sécurité..." />
                          </div>
                          <div>
                            <label htmlFor="emailContact" className="label-field">Email <span className="text-red-500">*</span></label>
                            <input type="email" id="emailContact" {...devisForm.register('emailContact')} className={`input-field ${devisForm.formState.errors.emailContact ? 'border-red-500' : ''}`} placeholder="contact@entreprise.fr" />
                            {devisForm.formState.errors.emailContact && <p className="mt-1 text-sm text-red-500">{devisForm.formState.errors.emailContact.message}</p>}
                          </div>
                          <div>
                            <label htmlFor="telephoneContact" className="label-field">Téléphone <span className="text-red-500">*</span></label>
                            <input type="tel" id="telephoneContact" {...devisForm.register('telephoneContact')} className={`input-field ${devisForm.formState.errors.telephoneContact ? 'border-red-500' : ''}`} placeholder="06 00 00 00 00" />
                            {devisForm.formState.errors.telephoneContact && <p className="mt-1 text-sm text-red-500">{devisForm.formState.errors.telephoneContact.message}</p>}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="bg-fire-500/10 p-2 rounded-lg"><Clipboard className="h-5 w-5 text-fire-500" /></div>
                          <h2 className="text-xl font-bold text-navy-700">Votre projet</h2>
                        </div>
                        <div className="space-y-6">
                          <div>
                            <label htmlFor="typePrestation" className="label-field">Type de prestation <span className="text-red-500">*</span></label>
                            <select id="typePrestation" {...devisForm.register('typePrestation')} className={`input-field ${devisForm.formState.errors.typePrestation ? 'border-red-500' : ''}`}>
                              {typesPrestation.map((type) => (<option key={type.value} value={type.value}>{type.label}</option>))}
                            </select>
                            {devisForm.formState.errors.typePrestation && <p className="mt-1 text-sm text-red-500">{devisForm.formState.errors.typePrestation.message}</p>}
                          </div>
                          <div>
                            <label htmlFor="descriptionSite" className="label-field">Description du site <span className="text-red-500">*</span></label>
                            <textarea id="descriptionSite" rows={4} {...devisForm.register('descriptionSite')} className={`input-field resize-none ${devisForm.formState.errors.descriptionSite ? 'border-red-500' : ''}`} placeholder="Décrivez votre site : type d'activité, nombre d'étages, nombre de personnes..." />
                            {devisForm.formState.errors.descriptionSite && <p className="mt-1 text-sm text-red-500">{devisForm.formState.errors.descriptionSite.message}</p>}
                          </div>
                          <div className="grid md:grid-cols-3 gap-6">
                            <div>
                              <label htmlFor="surface" className="label-field">Surface (m²)</label>
                              <input type="text" id="surface" {...devisForm.register('surface')} className="input-field" placeholder="1000" />
                            </div>
                            <div>
                              <label htmlFor="nombreBatiments" className="label-field">Nombre de bâtiments</label>
                              <input type="text" id="nombreBatiments" {...devisForm.register('nombreBatiments')} className="input-field" placeholder="1" />
                            </div>
                            <div>
                              <label htmlFor="delaiSouhaite" className="label-field">Délai souhaité</label>
                              <select id="delaiSouhaite" {...devisForm.register('delaiSouhaite')} className="input-field">
                                {delais.map((d) => (<option key={d.value} value={d.value}>{d.label}</option>))}
                              </select>
                            </div>
                          </div>
                          <div>
                            <label htmlFor="messageComplementaire" className="label-field">Message complémentaire</label>
                            <textarea id="messageComplementaire" rows={3} {...devisForm.register('messageComplementaire')} className="input-field resize-none" placeholder="Informations complémentaires..." />
                          </div>
                        </div>
                      </div>

                      <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                        {isSubmitting ? (<><Loader2 className="h-5 w-5 animate-spin" />Envoi en cours...</>) : (<><Send className="h-5 w-5" />Envoyer la demande de devis</>)}
                      </button>
                    </form>
                  )}

                  {/* Contact form */}
                  {activeTab === 'contact' && (
                    <form onSubmit={contactForm.handleSubmit(onSubmitContact)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="nom" className="label-field">Nom <span className="text-red-500">*</span></label>
                          <input type="text" id="nom" {...contactForm.register('nom')} className={`input-field ${contactForm.formState.errors.nom ? 'border-red-500' : ''}`} placeholder="Votre nom" />
                          {contactForm.formState.errors.nom && <p className="mt-1 text-sm text-red-500">{contactForm.formState.errors.nom.message}</p>}
                        </div>
                        <div>
                          <label htmlFor="prenom" className="label-field">Prénom <span className="text-red-500">*</span></label>
                          <input type="text" id="prenom" {...contactForm.register('prenom')} className={`input-field ${contactForm.formState.errors.prenom ? 'border-red-500' : ''}`} placeholder="Votre prénom" />
                          {contactForm.formState.errors.prenom && <p className="mt-1 text-sm text-red-500">{contactForm.formState.errors.prenom.message}</p>}
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="label-field">Email <span className="text-red-500">*</span></label>
                          <input type="email" id="email" {...contactForm.register('email')} className={`input-field ${contactForm.formState.errors.email ? 'border-red-500' : ''}`} placeholder="votre@email.fr" />
                          {contactForm.formState.errors.email && <p className="mt-1 text-sm text-red-500">{contactForm.formState.errors.email.message}</p>}
                        </div>
                        <div>
                          <label htmlFor="telephone" className="label-field">Téléphone</label>
                          <input type="tel" id="telephone" {...contactForm.register('telephone')} className="input-field" placeholder="06 00 00 00 00" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="sujet" className="label-field">Sujet <span className="text-red-500">*</span></label>
                        <select id="sujet" {...contactForm.register('sujet')} className={`input-field ${contactForm.formState.errors.sujet ? 'border-red-500' : ''}`}>
                          {sujets.map((s) => (<option key={s.value} value={s.value}>{s.label}</option>))}
                        </select>
                        {contactForm.formState.errors.sujet && <p className="mt-1 text-sm text-red-500">{contactForm.formState.errors.sujet.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="message" className="label-field">Message <span className="text-red-500">*</span></label>
                        <textarea id="message" rows={5} {...contactForm.register('message')} className={`input-field resize-none ${contactForm.formState.errors.message ? 'border-red-500' : ''}`} placeholder="Décrivez votre demande..." />
                        {contactForm.formState.errors.message && <p className="mt-1 text-sm text-red-500">{contactForm.formState.errors.message.message}</p>}
                      </div>
                      <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                        {isSubmitting ? (<><Loader2 className="h-5 w-5 animate-spin" />Envoi en cours...</>) : (<><Send className="h-5 w-5" />Envoyer le message</>)}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
