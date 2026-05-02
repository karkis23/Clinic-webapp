import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/doctors', label: 'Our Doctors' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
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

export default function Footer() {
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg font-[family-name:var(--font-heading)]">C</span>
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-heading)]">
                Clinic<span className="text-primary-light">Care</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing compassionate, modern healthcare with a personal touch. Your health, our priority.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="tel:+919876543210"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:info@cliniccare.com"
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
                <span>123 Healthcare Avenue,<br />Medical District, City 400001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={18} className="text-primary-light shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={18} className="text-primary-light shrink-0" />
                <a href="mailto:info@cliniccare.com" className="hover:text-white transition-colors">info@cliniccare.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Clock size={18} className="text-primary-light shrink-0" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ClinicCare. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/contact" className="hover:text-primary-light transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-primary-light transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
