'use client'

import Link from 'next/link'
import { Shield, Target, Award, Users, CheckCircle, ArrowRight, GraduationCap, Briefcase, Building2 } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper'

const experiences = [
  {
    poste: 'Responsable HSE',
    secteur: 'Collectivité territoriale',
  },
  {
    poste: 'Coordinateur Sécurité',
    secteur: 'Grande distribution',
  },
  {
    poste: 'Responsable Maintenance - Santé - Sécurité',
    secteur: 'Secteur médico-social (80 établissements)',
  },
]

const formations = [
  {
    diplome: 'Cycle Supérieur Incendie',
    ecole: 'CNPP',
    detail: 'Agrément INSSI',
  },
  {
    diplome: 'Management Santé Sécurité au Travail',
    ecole: 'Cegos',
    detail: 'Certificat Professionnel',
  },
  {
    diplome: 'Cycle Technique Incendie',
    ecole: 'CNPP',
    detail: 'Prévention et sécurité',
  },
  {
    diplome: 'SSIAP 3',
    ecole: 'CREFOPS',
    detail: 'Chef de service sécurité incendie',
  },
]

export default function APropos() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="h-4 w-4" />
                Qui sommes-nous
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                À propos de
                <span className="text-fire-500"> YB Consulting</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Plus de 20 ans d&apos;expérience en hygiène, sécurité et environnement
                au service de la protection de vos installations.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Le Fondateur */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Stats cards */}
            <FadeIn>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-fire-500 text-white rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-1">20+</div>
                  <div className="text-white/80 text-sm">Années d&apos;expérience</div>
                </div>
                <div className="bg-navy-700 text-white rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold mb-1">80</div>
                  <div className="text-white/80 text-sm">Établissements gérés</div>
                </div>
                <div className="bg-gray-100 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-navy-700 mb-1">500+</div>
                  <div className="text-gray-600 text-sm">Audits réalisés</div>
                </div>
                <div className="bg-gray-100 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-navy-700 mb-1">INSSI</div>
                  <div className="text-gray-600 text-sm">Agrément CNPP</div>
                </div>
              </div>
            </FadeIn>

            {/* Content */}
            <div>
              <FadeIn>
                <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
                  Le Fondateur
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-6">
                  Une expertise de terrain incomparable
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Fort de plus de <strong>20 ans d&apos;expérience</strong> dans le domaine de la sécurité
                  incendie et de la prévention des risques, le fondateur de YB Consulting a développé
                  une expertise unique à travers des postes à responsabilité dans des secteurs variés.
                </p>
                <p className="text-gray-600 text-lg mb-8">
                  Cette expérience terrain, acquise notamment dans la gestion de <strong>80 établissements</strong> et
                  la coordination sécurité de grands groupes, permet aujourd&apos;hui d&apos;offrir un accompagnement
                  pragmatique et adapté aux réalités opérationnelles de chaque client.
                </p>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>

      {/* Parcours professionnel */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Parcours
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-4">
              Expériences professionnelles
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Un parcours riche dans les plus grandes organisations du secteur
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border-l-4 border-fire-500 h-full">
                  <div className="bg-fire-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <Briefcase className="h-6 w-6 text-fire-500" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-700 mb-2">{exp.poste}</h3>
                  <p className="text-gray-600">{exp.secteur}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Formations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Certifications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-4">
              Formations & Certifications
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des qualifications reconnues par les plus grands organismes du secteur
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formations.map((formation, index) => (
              <FadeIn key={index}>
                <div className="bg-gray-50 rounded-xl p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="bg-fire-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-navy-700 mb-1">{formation.diplome}</h3>
                  <p className="text-fire-500 font-medium text-sm mb-1">{formation.ecole}</p>
                  <p className="text-gray-500 text-sm">{formation.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences clés */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="text-fire-400 font-semibold text-sm uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Compétences clés
            </h2>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Hygiène, Sécurité, Environnement',
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
                className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-fire-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Notre ADN
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-4">
              Nos Valeurs
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Rigueur',
                desc: 'Chaque analyse est menée avec une méthodologie précise et une attention particulière aux détails.',
              },
              {
                icon: Award,
                title: 'Excellence',
                desc: 'Nous visons l\'excellence dans chaque prestation, avec des rapports clairs et des recommandations actionnables.',
              },
              {
                icon: Building2,
                title: 'Proximité',
                desc: 'Un interlocuteur unique et disponible pour vous accompagner tout au long de votre projet.',
              },
            ].map((value) => (
              <FadeIn key={value.title}>
                <div className="bg-white rounded-xl p-8 shadow-sm text-center">
                  <div className="bg-fire-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-700 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <FadeIn>
                <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
                  Notre raison d&apos;être
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-3 mb-6">
                  Notre Mission
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  YB Consulting a pour mission d&apos;accompagner les entreprises et les collectivités
                  dans la maîtrise des risques d&apos;incendie et d&apos;explosion. Notre approche
                  combine expertise technique, méthodologie rigoureuse et accompagnement personnalisé.
                </p>
                <p className="text-gray-600 text-lg mb-8">
                  Nous intervenons à toutes les étapes de la gestion des risques : de l&apos;analyse
                  initiale à la mise en œuvre des solutions, en passant par la formation
                  de vos équipes.
                </p>
              </FadeIn>

              <div className="flex flex-wrap gap-3">
                {['Expertise reconnue', 'Approche sur mesure', 'Suivi continu'].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <FadeIn>
              <div className="bg-fire-500 rounded-xl p-8 text-white">
                <Shield className="h-12 w-12 mb-5" />
                <h3 className="text-2xl font-bold mb-4">Notre engagement</h3>
                <p className="text-white/90 mb-6">
                  Nous nous engageons à fournir des analyses précises, des recommandations
                  concrètes et un accompagnement de qualité.
                </p>
                <ul className="space-y-3">
                  {[
                    'Transparence dans nos analyses',
                    'Réactivité dans nos interventions',
                    'Excellence dans nos prestations',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-white/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Discutons de votre projet
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bénéficiez de plus de 20 ans d&apos;expérience pour sécuriser vos installations.
          </p>
          <Link
            href="/contact"
            className="bg-fire-500 hover:bg-fire-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Nous contacter
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
