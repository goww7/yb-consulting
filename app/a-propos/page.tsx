import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Target, Award, Users, CheckCircle, ArrowRight, GraduationCap, Briefcase, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Découvrez YB Consulting, expert en audit et sécurité incendie. Plus de 20 ans d\'expérience en HSE et prévention des risques incendie.',
}

const experiences = [
  {
    poste: 'Responsable HSE',
    entreprise: 'Ville de Maisons-Alfort',
    periode: 'Mai 2025 - Présent',
    lieu: 'Maisons-Alfort, Île-de-France',
  },
  {
    poste: 'Coordinateur Sécurité',
    entreprise: 'Fnac Darty',
    periode: 'Oct 2023 - Mai 2025',
    lieu: 'France',
    description: 'Hygiène, sécurité, environnement (HSE), Prévention et maîtrise des risques incendie',
  },
  {
    poste: 'Responsable Maintenance - Santé - Sécurité',
    entreprise: 'Centre d\'Action Sociale Protestante',
    periode: 'Jan 2008 - Fév 2023',
    duree: '15 ans',
    lieu: 'Région de Paris',
    description: 'Gestion de 80 établissements',
  },
]

const formations = [
  {
    diplome: 'Cycle Supérieur Incendie',
    ecole: 'CNPP',
    annee: '2015 - 2017',
    detail: 'Agrément INSSI',
  },
  {
    diplome: 'Management de la Santé Sécurité au Travail',
    ecole: 'Cegos',
    annee: '2021',
    detail: 'Certificat Professionnel',
  },
  {
    diplome: 'Cycle Technique Incendie',
    ecole: 'CNPP',
    annee: '2011',
    detail: 'Prévention et technique de sécurité',
  },
  {
    diplome: 'SSIAP 3',
    ecole: 'CREFOPS',
    annee: '2003',
    detail: 'Chef de service de sécurité incendie',
  },
]

export default function APropos() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de YB Consulting</h1>
            <p className="text-xl text-gray-300">
              Plus de 20 ans d&apos;expérience en hygiène, sécurité et environnement
              au service de la protection de vos installations.
            </p>
          </div>
        </div>
      </section>

      {/* Le Fondateur */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-fire-500/10 text-fire-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="h-4 w-4" />
                Le Fondateur
              </div>
              <h2 className="section-title">Une expertise de terrain</h2>
              <p className="text-gray-600 text-lg mb-6">
                Fort de plus de <strong>20 ans d&apos;expérience</strong> dans le domaine de la sécurité
                incendie et de la prévention des risques, le fondateur de YB Consulting a développé
                une expertise unique à travers des postes à responsabilité dans des secteurs variés.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Cette expérience terrain, acquise notamment dans la gestion de <strong>80 établissements</strong> et
                la coordination sécurité de grands groupes, permet aujourd&apos;hui d&apos;offrir un accompagnement
                pragmatique et adapté aux réalités opérationnelles de chaque client.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-navy-700/10 text-navy-700 px-4 py-2 rounded-full text-sm font-medium">
                  +20 ans d&apos;expérience
                </span>
                <span className="bg-navy-700/10 text-navy-700 px-4 py-2 rounded-full text-sm font-medium">
                  80 établissements gérés
                </span>
                <span className="bg-navy-700/10 text-navy-700 px-4 py-2 rounded-full text-sm font-medium">
                  Agrément INSSI
                </span>
              </div>
            </div>

            {/* Parcours */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-navy-700 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-fire-500" />
                Parcours professionnel
              </h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-5 border-l-4 border-fire-500">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-navy-700">{exp.poste}</h4>
                      {exp.duree && (
                        <span className="bg-fire-500 text-white text-xs px-2 py-1 rounded-full">
                          {exp.duree}
                        </span>
                      )}
                    </div>
                    <p className="text-fire-500 font-medium">{exp.entreprise}</p>
                    <p className="text-sm text-gray-500">{exp.periode} • {exp.lieu}</p>
                    {exp.description && (
                      <p className="text-sm text-gray-600 mt-2">{exp.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title flex items-center justify-center gap-3">
              <GraduationCap className="h-8 w-8 text-fire-500" />
              Formations & Certifications
            </h2>
            <p className="section-subtitle mx-auto">
              Des qualifications reconnues pour garantir un haut niveau d&apos;expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formations.map((formation, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-navy-700 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  {formation.annee}
                </div>
                <h3 className="font-bold text-navy-700 mb-2">{formation.diplome}</h3>
                <p className="text-fire-500 font-medium text-sm mb-2">{formation.ecole}</p>
                <p className="text-gray-600 text-sm">{formation.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences clés */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Compétences clés</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Hygiène, Sécurité, Environnement (HSE)',
              'Prévention incendie',
              'Gestion de la sécurité',
              'Audit de conformité',
              'Gestion des risques',
              'Management',
              'Formation',
              'Réglementation ERP',
              'SSIAP',
              'Gestion de projet',
              'Rédaction de rapports',
              'Accompagnement réglementaire',
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-fire-500 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Notre Mission</h2>
              <p className="text-gray-600 text-lg mb-6">
                YB Consulting a pour mission d&apos;accompagner les entreprises et les collectivités
                dans la maîtrise des risques d&apos;incendie et d&apos;explosion. Notre approche
                combine expertise technique, méthodologie rigoureuse et accompagnement personnalisé.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Nous intervenons à toutes les étapes de la gestion des risques : de l&apos;analyse
                initiale à la mise en œuvre des solutions, en passant par la formation
                de vos équipes.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Expertise reconnue</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Approche sur mesure</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Suivi continu</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-fire-500 to-fire-600 rounded-2xl p-8 text-white">
              <Shield className="h-16 w-16 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Notre engagement</h3>
              <p className="text-white/90 mb-6">
                Nous nous engageons à fournir des analyses précises, des recommandations
                concrètes et un accompagnement de qualité pour garantir la sécurité
                de vos installations et de vos collaborateurs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  Transparence dans nos analyses
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  Réactivité dans nos interventions
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  Excellence dans nos prestations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Valeurs</h2>
            <p className="section-subtitle mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-fire-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-fire-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">Rigueur</h3>
              <p className="text-gray-600">
                Chaque analyse est menée avec une méthodologie précise
                et une attention particulière aux détails.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-fire-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-fire-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Nous visons l&apos;excellence dans chaque prestation,
                avec des rapports clairs et des recommandations actionnables.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-fire-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-fire-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">Proximité</h3>
              <p className="text-gray-600">
                Un interlocuteur unique et disponible pour vous accompagner
                tout au long de votre projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'intervention */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Domaines d&apos;intervention</h2>
            <p className="section-subtitle mx-auto">
              Des compétences pointues au service de votre sécurité
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-navy-700 mb-4">Types d&apos;établissements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Établissements industriels et logistiques</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Établissements recevant du public (ERP)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Immeubles de grande hauteur (IGH)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Sites SEVESO et ICPE</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Collectivités et administrations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-navy-700 mb-4">Prestations</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Audit de conformité réglementaire</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Analyse des risques d&apos;incendie et d&apos;explosion</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Étude de vulnérabilité</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Plans de prévention et d&apos;intervention</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Formation et sensibilisation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discutons de votre projet
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bénéficiez de plus de 20 ans d&apos;expérience pour sécuriser vos installations.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Nous contacter
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
