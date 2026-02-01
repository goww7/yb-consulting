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

export const rapportAuditSchema = z.object({
  // Informations client
  nomClient: z.string().min(2, 'Le nom du client est requis'),
  adresseClient: z.string().min(5, 'L\'adresse est requise'),
  dateAudit: z.string().min(1, 'La date de l\'audit est requise'),

  // Site audité
  nomSite: z.string().min(2, 'Le nom du site est requis'),
  typeSite: z.string().min(1, 'Le type de site est requis'),
  surface: z.string().optional(),

  // Résultats
  niveauRisqueGlobal: z.enum(['faible', 'moyen', 'eleve', 'critique']),
  pointsForts: z.string().min(10, 'Décrivez les points forts'),
  pointsAmeliorer: z.string().min(10, 'Décrivez les points à améliorer'),
  recommandations: z.string().min(10, 'Ajoutez vos recommandations'),

  // Conclusion
  conclusion: z.string().min(10, 'Ajoutez une conclusion'),
})

export type RapportAuditFormData = z.infer<typeof rapportAuditSchema>
