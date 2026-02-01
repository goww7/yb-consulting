import Link from 'next/link'
import { Shield, Search, FileCheck, Users, ArrowRight, CheckCircle, Phone } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-fire-500/20 text-fire-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="h-4 w-4" />
                Expert en sécurité incendie
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Protégez vos
                <span className="text-fire-500"> infrastructures</span> contre les risques incendie
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                YB Consulting vous accompagne dans l&apos;analyse de vulnérabilité des risques
                d&apos;incendie et d&apos;explosion. Expertise reconnue, méthodologie rigoureuse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/devis" className="btn-primary inline-flex items-center justify-center gap-2">
                  Demander un devis
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/a-propos" className="btn-outline border-white text-white hover:bg-white hover:text-navy-700 inline-flex items-center justify-center gap-2">
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="bg-gradient-to-br from-fire-500 to-fire-600 rounded-2xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold">15+</div>
                      <div className="text-sm text-gray-200">Années d&apos;expérience</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-sm text-gray-200">Audits réalisés</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-sm text-gray-200">Clients satisfaits</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold">24/7</div>
                      <div className="text-sm text-gray-200">Support disponible</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Services</h2>
            <p className="section-subtitle mx-auto">
              Des solutions complètes pour la prévention et l&apos;analyse des risques incendie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* PREVARIE Card */}
            <div className="card group hover:border-fire-500 border-2 border-transparent">
              <div className="flex items-start gap-4">
                <div className="bg-fire-500/10 p-4 rounded-xl group-hover:bg-fire-500 transition-colors">
                  <Search className="h-8 w-8 text-fire-500 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy-700 mb-2">PREVARIE</h3>
                  <p className="text-fire-500 font-medium mb-4">
                    Prévention et Analyse des Risques d&apos;Incendies et d&apos;Explosions
                  </p>
                  <p className="text-gray-600 mb-6">
                    Identification proactive des risques, mise en place de mesures préventives
                    et élaboration de plans d&apos;action personnalisés pour votre établissement.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Audit préventif complet
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Plan de prévention personnalisé
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Formation du personnel
                    </li>
                  </ul>
                  <Link
                    href="/services/prevarie"
                    className="inline-flex items-center gap-2 text-fire-500 font-semibold hover:gap-4 transition-all"
                  >
                    En savoir plus <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* INAVRIE Card */}
            <div className="card group hover:border-fire-500 border-2 border-transparent">
              <div className="flex items-start gap-4">
                <div className="bg-fire-500/10 p-4 rounded-xl group-hover:bg-fire-500 transition-colors">
                  <FileCheck className="h-8 w-8 text-fire-500 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy-700 mb-2">INAVRIE</h3>
                  <p className="text-fire-500 font-medium mb-4">
                    Ingénieur et Analyste de Vulnérabilité des Risques d&apos;Incendie et d&apos;Explosion
                  </p>
                  <p className="text-gray-600 mb-6">
                    Expertise technique approfondie pour évaluer la vulnérabilité de vos
                    installations face aux risques d&apos;incendie et d&apos;explosion.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Analyse de vulnérabilité
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Rapport technique détaillé
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Recommandations d&apos;amélioration
                    </li>
                  </ul>
                  <Link
                    href="/services/inavrie"
                    className="inline-flex items-center gap-2 text-fire-500 font-semibold hover:gap-4 transition-all"
                  >
                    En savoir plus <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Pourquoi nous choisir ?</h2>
            <p className="section-subtitle mx-auto">
              Une expertise reconnue au service de votre sécurité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-fire-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">Expertise certifiée</h3>
              <p className="text-gray-600">
                Ingénieur spécialisé en risques incendie avec une formation
                et une expérience de terrain reconnues.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-fire-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">Accompagnement personnalisé</h3>
              <p className="text-gray-600">
                Chaque projet est unique. Nous adaptons notre approche
                à vos besoins spécifiques et votre secteur d&apos;activité.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-fire-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">Rapports détaillés</h3>
              <p className="text-gray-600">
                Des rapports clairs et actionnables avec des recommandations
                concrètes pour améliorer votre sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fire-500 to-fire-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à sécuriser vos installations ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour une évaluation gratuite
            de vos besoins en matière de sécurité incendie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="bg-white text-fire-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Demander un devis gratuit
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:0645070708"
              className="border-2 border-white text-white hover:bg-white hover:text-fire-600 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              06 45 07 07 08
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
