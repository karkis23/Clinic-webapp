'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, ArrowRight, Building2, UserCheck, HeartPulse, Clock4, Wallet, ShieldCheck } from 'lucide-react'
import CallModal from './CallModal'

export function CTASection({ settings }: { settings?: any }) {
  const [showCallModal, setShowCallModal] = useState(false)
  const phone = settings?.phone || '+919876543210'

  return (
    <>
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-secondary/60" />
              <span className="text-secondary text-xs font-semibold uppercase tracking-[0.2em]">Get Started</span>
              <div className="h-px w-8 bg-secondary/60" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-5">
              Ready to Start Your<br />Health Journey?
            </h2>
            <p className="text-white/60 text-base max-w-xl mx-auto mb-10 leading-relaxed">
              Book your appointment today and experience healthcare that puts you first.
              Our team is ready to help.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${settings?.whatsapp || '919876543210'}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-primary-dark px-7 py-3.5 rounded-lg font-semibold text-sm transition-all"
              >
                Book Appointment
                <ArrowRight size={16} />
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setShowCallModal(true)
                }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-7 py-3.5 rounded-lg font-medium text-sm transition-all border border-white/10 cursor-pointer"
              >
                <Phone size={16} />
                Call Us
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-12 text-white/40 text-sm">
              <span className="flex items-center gap-2"><MapPin size={14} /> {settings?.address || '123 Healthcare Ave, City'}</span>
              <span className="flex items-center gap-2"><Clock size={14} /> {settings?.workingHours || 'Mon – Sat: 9AM – 7PM'}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <CallModal 
        isOpen={showCallModal} 
        onClose={() => setShowCallModal(false)} 
        phone={phone} 
        secondaryPhone={settings?.secondaryPhone}
      />
    </>
  )
}

export function WhyChooseUs() {
  const reasons = [
    { icon: Building2, title: 'Modern Facility', desc: 'State-of-the-art equipment and hygienic infrastructure for best results.' },
    { icon: UserCheck, title: 'Expert Doctors', desc: 'Highly qualified specialists with years of clinical experience.' },
    { icon: HeartPulse, title: 'Personalized Care', desc: 'Treatment plans tailored to your individual health needs and goals.' },
    { icon: Clock4, title: 'Convenient Timings', desc: 'Flexible scheduling with minimal wait times for your comfort.' },
    { icon: Wallet, title: 'Affordable Pricing', desc: 'Quality healthcare at transparent and competitive prices.' },
    { icon: ShieldCheck, title: 'Patient First', desc: 'Your comfort and wellbeing are at the heart of everything we do.' },
  ]

  return (
    <section className="py-24 bg-surface-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-secondary" />
            <span className="text-secondary text-xs font-semibold uppercase tracking-[0.2em]">Why Us</span>
            <div className="h-px w-8 bg-secondary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
            Why Choose Our Clinic
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-sm leading-relaxed">
            We combine expertise, technology, and compassion to deliver healthcare you can trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex gap-4 p-6 rounded-xl bg-white border border-border hover:border-secondary/30 transition-all hover:shadow-card-hover group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/5 group-hover:bg-secondary/10 flex items-center justify-center shrink-0 transition-colors">
                  <Icon size={20} className="text-primary group-hover:text-secondary transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1 text-sm">{r.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
