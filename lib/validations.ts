import { z } from 'zod'

export const contactSchema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  prenom: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  telephone: z.string().min(10, 'Numéro de téléphone invalide').optional().or(z.literal('')),
  sujet: z.string().min(1, 'Veuillez sélectionner un sujet'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

export type ContactFormData = z.infer<typeof contactSchema>

export const devisSchema = z.object({
  // Informations entreprise
  entreprise: z.string().min(2, 'Le nom de l\'entreprise est requis'),
  siret: z.string().optional(),
  adresseEntreprise: z.string().min(5, 'L\'adresse est requise'),
  codePostal: z.string().min(5, 'Code postal invalide'),
  ville: z.string().min(2, 'La ville est requise'),

  // Contact
  nomContact: z.string().min(2, 'Le nom du contact est requis'),
  fonction: z.string().optional(),
  emailContact: z.string().email('Email invalide'),
  telephoneContact: z.string().min(10, 'Numéro de téléphone invalide'),

  // Projet
  typePrestation: z.string().min(1, 'Veuillez sélectionner un type de prestation'),
  descriptionSite: z.string().min(10, 'Veuillez décrire votre site'),
  surface: z.string().optional(),
  nombreBatiments: z.string().optional(),
  delaiSouhaite: z.string().optional(),
  messageComplementaire: z.string().optional(),
})

export type DevisFormData = z.infer<typeof devisSchema>
