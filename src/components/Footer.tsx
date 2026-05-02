'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight, CheckCircle } from 'lucide-react'
import { urlFor } from '@/lib/sanity'

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
  const [showToast, setShowToast] = useState(false)

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault()
    const phone = settings?.phone || '+919876543210'
    navigator.clipboard.writeText(phone)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <footer className="bg-surface-dark text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

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
                  className="h-10 w-auto object-contain rounded-lg"
                />
              ) : (
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-[family-name:var(--font-heading)]">
                    {settings?.clinicName ? settings.clinicName.charAt(0) : 'C'}
                  </span>
                </div>
              )}
              <span className="text-xl font-bold font-[family-name:var(--font-heading)]">
                {settings?.clinicName || 'ClinicCare'}
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing compassionate, modern healthcare with a personal touch. Your health, our priority.
            </p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${settings?.whatsapp || '919876543210'}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <MessageCircle size={18} />
              </a>
              <button
                onClick={handleCopyPhone}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center transition-colors cursor-pointer"
              >
                <Phone size={18} />
              </button>
              <a
                href={`mailto:${settings?.email || 'info@cliniccare.com'}`}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-[family-name:var(--font-heading)] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-light text-sm transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-[family-name:var(--font-heading)] mb-6">Our Services</h4>
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
            <h4 className="text-lg font-semibold font-[family-name:var(--font-heading)] mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={18} className="text-primary-light shrink-0 mt-0.5" />
                <span className="whitespace-pre-wrap">{settings?.address || '123 Healthcare Avenue,\nMedical District, City 400001'}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={18} className="text-primary-light shrink-0" />
                <button onClick={handleCopyPhone} className="hover:text-white transition-colors cursor-pointer">{settings?.phone || '+91 98765 43210'}</button>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={18} className="text-primary-light shrink-0" />
                <a href={`mailto:${settings?.email || 'info@cliniccare.com'}`} className="hover:text-white transition-colors">{settings?.email || 'info@cliniccare.com'}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Clock size={18} className="text-primary-light shrink-0" />
                <span className="whitespace-pre-wrap">{settings?.workingHours || 'Mon – Sat: 9:00 AM – 7:00 PM'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {settings?.clinicName || 'ClinicCare'}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/contact" className="hover:text-primary-light transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-primary-light transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>

      {/* Professional Copy Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60]"
          >
            <div className="bg-white px-5 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800">Phone Number Copied!</span>
                <span className="text-xs text-gray-500 font-medium">{settings?.phone || '+919876543210'}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}
