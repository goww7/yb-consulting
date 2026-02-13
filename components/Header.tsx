'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Calendar, Flame, ChevronDown } from 'lucide-react'

type NavItem = {
  name: string
  href: string
  submenu?: { name: string; href: string }[]
}

const navigation: NavItem[] = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/a-propos' },
  {
    name: 'Services',
    href: '#',
    submenu: [
      { name: 'Prévention & Analyse', href: '/services/prevarie' },
      { name: 'Audit de Vulnérabilité', href: '/services/inavrie' },
    ]
  },
  {
    name: 'Réglementation',
    href: '/reglementation',
    submenu: [
      { name: 'ERP', href: '/reglementation/erp' },
      { name: 'IGH', href: '/reglementation/igh' },
      { name: 'ICPE', href: '/reglementation/icpe' },
      { name: 'Code du travail', href: '/reglementation/code-travail' },
    ]
  },
  { name: 'Boutique', href: '/boutique' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const handleMouseEnter = (name: string) => {
    setOpenSubmenu(name)
  }

  const handleMouseLeave = () => {
    setOpenSubmenu(null)
  }

  const toggleMobileSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-fire-500 to-fire-600 p-2 rounded-lg">
              <Flame className="h-8 w-8 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-navy-700">Prevarie</span>
              <p className="text-xs text-gray-500">Audit et Sécurité Incendie</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              item.submenu ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-fire-500 font-medium transition-colors flex items-center gap-1 py-2"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSubmenu === item.name ? 'rotate-180' : ''}`} />
                  </Link>
                  {openSubmenu === item.name && (
                    <>
                      {/* Bridge element to prevent gap */}
                      <div className="absolute top-full left-0 h-2 w-full" />
                      <div className="absolute top-full left-0 pt-2 w-52 z-50">
                        <div className="bg-white rounded-lg shadow-lg py-2 border">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block px-4 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-fire-500 transition-colors"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-fire-500 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}

            {/* Calendly CTA */}
            <Link
              href="/contact#rdv"
              className="flex items-center gap-2 btn-primary"
            >
              <Calendar className="h-4 w-4" />
              <span>Prendre rendez-vous</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {navigation.map((item) => (
              item.submenu ? (
                <div key={item.name}>
                  <button
                    onClick={() => toggleMobileSubmenu(item.name)}
                    className="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-100 font-medium flex justify-between items-center"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  {openSubmenu === item.name && (
                    <div className="bg-gray-50">
                      {item.href !== '#' && (
                        <Link
                          href={item.href}
                          className="block py-2 px-8 text-fire-500 font-medium"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Voir tout
                        </Link>
                      )}
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block py-2 px-8 text-gray-600 hover:text-fire-500"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-4 text-gray-700 hover:bg-gray-100 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="px-4 pt-4">
              <Link
                href="/contact#rdv"
                className="flex items-center justify-center gap-2 btn-primary w-full"
              >
                <Calendar className="h-4 w-4" />
                <span>Prendre rendez-vous</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
