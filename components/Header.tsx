'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className={`text-2xl font-bold transition-all duration-300 ${
            scrolled 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent' 
              : 'text-white'
          }`}
        >
          Gamze Yüceer
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link 
              href="/" 
              className={`relative font-semibold transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white/90 hover:text-white'
              }`}
            >
              Ana Sayfa
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              href="/services" 
              className={`relative font-semibold transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white/90 hover:text-white'
              }`}
            >
              Hizmetler
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`relative font-semibold transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white/90 hover:text-white'
              }`}
            >
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                scrolled
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 hover:shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20'
              }`}
            >
              İletişim
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-gray-700' : 'text-white'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
          <ul className="px-4 py-4 space-y-4">
            <li>
              <Link href="/" className="block py-2 text-gray-700 font-semibold hover:text-purple-600 transition-colors">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link href="/services" className="block py-2 text-gray-700 font-semibold hover:text-purple-600 transition-colors">
                Hizmetler
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 text-gray-700 font-semibold hover:text-purple-600 transition-colors">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-center">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}


