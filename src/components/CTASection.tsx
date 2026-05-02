'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Book your appointment today and experience healthcare that puts you first.
            Our friendly team is ready to help you.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-2xl font-semibold transition-all shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              Book on WhatsApp
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-8 py-4 rounded-2xl font-semibold transition-all backdrop-blur-sm border border-white/20"
            >
              <Phone size={20} />
              Call: +91 98765 43210
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12 text-white/70 text-sm">
            <span className="flex items-center gap-2"><MapPin size={16} /> 123 Healthcare Ave, City</span>
            <span className="flex items-center gap-2"><Clock size={16} /> Mon–Sat: 9AM – 7PM</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function WhyChooseUs() {
  const reasons = [
    { icon: '🏥', title: 'Modern Facility', desc: 'State-of-the-art equipment and hygienic infrastructure for best results.' },
    { icon: '👨‍⚕️', title: 'Expert Doctors', desc: 'Highly qualified specialists with years of clinical experience.' },
    { icon: '💊', title: 'Personalized Care', desc: 'Treatment plans tailored to your individual health needs and goals.' },
    { icon: '⏰', title: 'Convenient Timings', desc: 'Flexible scheduling with minimal wait times for your comfort.' },
    { icon: '💰', title: 'Affordable Pricing', desc: 'Quality healthcare at transparent and competitive prices.' },
    { icon: '❤️', title: 'Patient First', desc: 'Your comfort and wellbeing are at the heart of everything we do.' },
  ]

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why Us</p>
          <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
            Why Choose <span className="gradient-text">ClinicCare</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We combine expertise, technology, and compassion to deliver healthcare you can trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 p-6 rounded-2xl hover:bg-surface-alt transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                {r.icon}
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1 font-[family-name:var(--font-heading)]">{r.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
