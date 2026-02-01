import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Target, Award, Users, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Découvrez YB Consulting, expert en audit et sécurité incendie. Notre mission : protéger vos infrastructures contre les risques d\'incendie et d\'explosion.',
}

export default function APropos() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de YB Consulting</h1>
            <p className="text-xl text-gray-300">
              Expert en audit et sécurité incendie, nous mettons notre expertise
              au service de la protection de vos installations.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-20 bg-white">
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
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Expertise reconnue</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Approche sur mesure</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
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
      <section className="py-20 bg-gray-50">
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
                <Users className="h-8 w-8 text-fire-500" />
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

      {/* Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Notre Expertise</h2>
            <p className="section-subtitle mx-auto">
              Des compétences pointues au service de votre sécurité
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-navy-700 mb-4">Domaines d&apos;intervention</h3>
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

            <div className="bg-gray-50 rounded-xl p-8">
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
            Contactez-nous pour échanger sur vos besoins en matière de sécurité incendie.
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
