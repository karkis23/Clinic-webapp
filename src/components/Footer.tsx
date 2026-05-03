'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react'
import { urlFor } from '@/lib/sanity'
import CallModal from './CallModal'
import EmailModal from './EmailModal'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact Us' },
]

const services = [
  'General Consultation',
  'Skin Treatment',
  'Hair Loss Treatment',
  'Cosmetic Procedures',
  'Laser Treatment',
  'Acne Care',
]

export default function Footer({ settings }: { settings?: any }) {
  const [showCallModal, setShowCallModal] = useState(false)
  const [showEmailModal, setShowEmailModal] = useState(false)

  const handleCallClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowCallModal(true)
  }

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowEmailModal(true)
  }

  const instagramLink = settings?.instagram || 'https://instagram.com/cliniccare'

  return (
    <>
      <footer className="bg-surface-dark text-white relative overflow-hidden">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6">
                {settings?.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={urlFor(settings.logo).url()} 
                    alt={settings?.clinicName || 'Clinic Logo'} 
                    className="h-9 w-auto object-contain rounded-lg"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                    <span className="text-primary-dark font-bold text-sm font-[family-name:var(--font-heading)]">
                      {settings?.clinicName ? settings.clinicName.charAt(0) : 'C'}
                    </span>
                  </div>
                )}
                <span className="text-lg font-bold font-[family-name:var(--font-heading)]">
                  {settings?.clinicName || 'ClinicCare'}
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Providing compassionate, modern healthcare with a personal touch. Your health, our priority.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleCallClick}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-secondary/20 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Phone size={16} className="text-gray-400" />
                </button>
                <button
                  onClick={handleEmailClick}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-secondary/20 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Mail size={16} className="text-gray-400" />
                </button>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-secondary/20 flex items-center justify-center transition-colors cursor-pointer group"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-gray-400"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-300">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-secondary text-sm transition-colors flex items-center gap-1 group"
                    >
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-300">Our Services</h4>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s}>
                    <span className="text-gray-400 text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-300">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin size={16} className="text-secondary shrink-0 mt-0.5" />
                  <span className="whitespace-pre-wrap">{settings?.address || '123 Healthcare Avenue,\nMedical District, City 400001'}</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Phone size={16} className="text-secondary shrink-0" />
                  <button onClick={handleCallClick} className="hover:text-white transition-colors cursor-pointer">{settings?.phone || '+91 98765 43210'}</button>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Mail size={16} className="text-secondary shrink-0" />
                  <button onClick={handleEmailClick} className="hover:text-white transition-colors cursor-pointer">{settings?.email || 'info@cliniccare.com'}</button>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Clock size={16} className="text-secondary shrink-0" />
                  <span className="whitespace-pre-wrap">{settings?.workingHours || 'Mon – Sat: 9:00 AM – 7:00 PM'}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} {settings?.clinicName || 'ClinicCare'}. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <Link href="/contact" className="hover:text-secondary transition-colors">Privacy Policy</Link>
              <Link href="/contact" className="hover:text-secondary transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>

      <CallModal 
        isOpen={showCallModal} 
        onClose={() => setShowCallModal(false)} 
        phone={settings?.phone || '+919876543210'} 
        secondaryPhone={settings?.secondaryPhone}
      />
      <EmailModal 
        isOpen={showEmailModal} 
        onClose={() => setShowEmailModal(false)} 
        email={settings?.email || 'info@cliniccare.com'} 
      />
    </>
  )
}
