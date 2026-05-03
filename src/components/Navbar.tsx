'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ArrowRight } from 'lucide-react'
import { urlFor } from '@/lib/sanity'
import CallModal from './CallModal'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar({ settings }: { settings?: any }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showCallModal, setShowCallModal] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === '/'
  const isDarkText = scrolled || !isHomePage

  const handleCallClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowCallModal(true)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isDarkText
            ? 'bg-white/95 backdrop-blur-xl shadow-nav py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              {settings?.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img 
                  src={urlFor(settings.logo).url()} 
                  alt={settings?.clinicName || 'Clinic Logo'} 
                  className="h-9 w-auto object-contain"
                />
              ) : (
                <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-sm font-[family-name:var(--font-heading)]">
                    {settings?.clinicName ? settings.clinicName.charAt(0) : 'C'}
                  </span>
                </div>
              )}
              <span className={`text-lg font-bold font-[family-name:var(--font-heading)] transition-colors ${isDarkText ? 'text-text-primary' : 'text-white'}`}>
                {settings?.clinicName || 'ClinicCare'}
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-[13px] font-medium transition-colors ${isDarkText ? 'text-text-secondary hover:text-primary' : 'text-white/80 hover:text-white'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={handleCallClick}
                className={`flex items-center gap-2 text-[13px] font-medium transition-colors cursor-pointer ${isDarkText ? 'text-text-secondary hover:text-primary' : 'text-white/80 hover:text-white'}`}
              >
                <Phone size={14} />
                <span>Call Now</span>
              </button>
              <a
                href={`https://wa.me/${settings?.whatsapp || '919876543210'}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all"
              >
                Book Appointment
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${isDarkText ? 'text-text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-t border-border overflow-hidden"
            >
              <div className="px-4 py-5 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-text-primary hover:text-primary hover:bg-surface-alt rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 border-t border-border mt-3 space-y-3">
                  <button
                    onClick={(e) => {
                      handleCallClick(e)
                      setIsOpen(false)
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-text-secondary hover:text-primary transition-colors cursor-pointer"
                  >
                    <Phone size={16} /> Call Now
                  </button>
                  <a
                    href={`https://wa.me/${settings?.whatsapp || '919876543210'}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Centralized Call Modal */}
      <CallModal 
        isOpen={showCallModal} 
        onClose={() => setShowCallModal(false)} 
        phone={settings?.phone || '+919876543210'} 
        secondaryPhone={settings?.secondaryPhone}
      />
    </>
  )
}

