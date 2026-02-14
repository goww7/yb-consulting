export const STATS = {
  yearsExperience: 20,
  auditsCompleted: 500,
  establishmentsManaged: 80,
  certification: 'INSSI',
  riskCategories: 30,
  clientSatisfaction: 100,
  responseTime: '48h',
} as const

export const CONTACT = {
  email: 'contact@prevarie.fr',
  location: 'France',
  hours: {
    weekdays: '9h00 - 18h00',
    saturday: 'Sur rendez-vous',
    sunday: 'Fermé',
  },
} as const

export const DUERP_PRICING = {
  essentiel: { price: 299, period: 'unique' },
  professionnel: { price: 599, period: 'unique' },
  entreprise: { price: 1299, period: '/ an' },
} as const
