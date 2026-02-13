import Link from 'next/link'
import { Calendar, Mail, MapPin, Linkedin, Flame } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-fire-500 to-fire-600 p-2 rounded-lg">
                <Flame className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Prevarie</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Expert en audit et sécurité incendie. Nous accompagnons les entreprises
              dans l&apos;analyse de vulnérabilité des risques d&apos;incendie et d&apos;explosion.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-navy-700 p-2 rounded-lg hover:bg-fire-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services/prevarie" className="text-gray-400 hover:text-white transition-colors">
                  Prévention & Analyse
                </Link>
              </li>
              <li>
                <Link href="/services/inavrie" className="text-gray-400 hover:text-white transition-colors">
                  Audit de Vulnérabilité
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-fire-500" />
                <Link href="/contact#rdv" className="text-gray-400 hover:text-white transition-colors">
                  Prendre rendez-vous
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-fire-500" />
                <a href="mailto:contact@prevarie.fr" className="text-gray-400 hover:text-white transition-colors">
                  contact@prevarie.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-fire-500 mt-1" />
                <span className="text-gray-400">
                  France
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Prevarie. Tous droits réservés.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
