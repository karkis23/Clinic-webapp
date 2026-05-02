'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-surface via-surface-alt to-accent/20">
      {/* Background pattern */}
      <div className="absolute inset-0 line-pattern opacity-40" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Trusted Healthcare Partner
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] text-text-primary leading-[1.1] mb-6">
              Your Health,{' '}
              <span className="gradient-text">Our Priority</span>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-xl">
              Experience compassionate care with modern medicine. Our team of expert doctors
              provides personalized treatment plans tailored to your unique health needs.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <MessageCircle size={20} />
                Book on WhatsApp
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 bg-white hover:bg-gray-50 text-text-primary px-8 py-4 rounded-2xl font-semibold transition-all shadow-md border border-border hover:-translate-y-0.5"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold font-[family-name:var(--font-heading)] text-primary">15+</p>
                <p className="text-sm text-text-muted">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-bold font-[family-name:var(--font-heading)] text-primary">10K+</p>
                <p className="text-sm text-text-muted">Happy Patients</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-bold font-[family-name:var(--font-heading)] text-primary">4.9</p>
                <p className="text-sm text-text-muted">Patient Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Image placeholder - replaced by generated image or Sanity CMS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/20 via-accent/30 to-secondary/10 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-4xl">🏥</span>
                    </div>
                    <p className="text-text-secondary text-sm">Hero image from Sanity CMS</p>
                  </div>
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Certified Clinic</p>
                    <p className="text-xs text-text-muted">NABH Accredited</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-16"
        >
          <ArrowDown size={24} className="text-text-muted" />
        </motion.div>
      </div>
    </section>
  )
}
