'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, ArrowRight, Award, Users, Star } from 'lucide-react'
import { urlFor } from '@/lib/sanity'
import CallModal from './CallModal'

export default function Hero({ settings }: { settings?: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showCallModal, setShowCallModal] = useState(false)

  // Determine images to use (prioritize new heroImages array, fallback to legacy heroImage, then unsplash)
  const heroImages = settings?.heroImages?.length > 0 
    ? settings.heroImages 
    : settings?.heroImage 
      ? [settings.heroImage] 
      : []

  const fallbackImage = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop'
  
  // Create array of valid URLs
  const imageUrls = heroImages.length > 0 
    ? heroImages.map((img: any) => urlFor(img).url())
    : [fallbackImage]

  // Auto-slide effect
  useEffect(() => {
    if (imageUrls.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [imageUrls.length])

  return (
    <>
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-between overflow-hidden bg-primary-dark pt-28 pb-8">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${imageUrls[currentImageIndex]})` }}
            />
          </AnimatePresence>
          
          {/* Elegant Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/60 to-primary-dark/90 z-10" />
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex-grow flex flex-col justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center w-full"
          >
            {/* Top Label */}
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <div className="h-px w-12 bg-secondary" />
              <span className="text-secondary text-xs sm:text-sm font-semibold uppercase tracking-[0.25em]">
                Trusted Healthcare
              </span>
              <div className="h-px w-12 bg-secondary" />
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-[family-name:var(--font-heading)] text-white leading-[1.15] mb-8 sm:mb-10 max-w-4xl drop-shadow-sm pt-2">
              {settings?.heroHeading ? (
                <span className="whitespace-pre-wrap">{settings.heroHeading}</span>
              ) : (
                <>
                  Exceptional Care,<br />
                  <span className="text-secondary">Trusted Results</span>
                </>
              )}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed mb-10 sm:mb-12 max-w-2xl font-light px-4">
              {settings?.heroSubheading || 'Providing comprehensive medical care with a focus on precision, compassion, and your long-term wellbeing. Your health deserves nothing less.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16 sm:mb-20 w-full sm:w-auto px-6">
              <a
                href={`https://wa.me/${settings?.whatsapp || '919876543210'}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-primary-dark px-8 py-4 rounded-full font-semibold text-base transition-all hover:shadow-lg hover:shadow-secondary/20 w-full sm:w-auto"
              >
                Book Appointment
                <ArrowRight size={18} />
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setShowCallModal(true)
                }}
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-base transition-all border border-white/30 backdrop-blur-sm w-full sm:w-auto cursor-pointer"
              >
                <Phone size={18} />
                Contact Us
              </button>
            </div>

            {/* Trust Indicators (Stats) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-8 sm:pt-10 border-t border-white/10 w-full max-w-4xl">
              <div className="flex flex-col items-center justify-center gap-2">
                <Award size={28} className="text-secondary mb-1 sm:mb-2" />
                <p className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-heading)]">15+</p>
                <p className="text-xs sm:text-sm text-white/60 uppercase tracking-widest font-medium">Years Experience</p>
              </div>
              
              <div className="flex flex-col items-center justify-center gap-2 relative">
                <Users size={28} className="text-secondary mb-1 sm:mb-2" />
                <p className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-heading)]">10K+</p>
                <p className="text-xs sm:text-sm text-white/60 uppercase tracking-widest font-medium">Happy Patients</p>
                
                {/* Dividers for desktop */}
                <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10 -ml-6" />
                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10 -mr-6" />
              </div>
              
              <div className="flex flex-col items-center justify-center gap-2">
                <Star size={28} className="text-secondary mb-1 sm:mb-2" />
                <p className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-heading)]">4.9/5</p>
                <p className="text-xs sm:text-sm text-white/60 uppercase tracking-widest font-medium">Patient Rating</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Slider indicators */}
        {imageUrls.length > 1 && (
          <div className="relative z-20 flex gap-2 mt-16 sm:mt-12">
            {imageUrls.map((_: string, i: number) => (
              <button
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={`w-2.5 h-2.5 sm:w-2 sm:h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-secondary w-8 sm:w-6' : 'bg-white/40 hover:bg-white/60'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </section>

      <CallModal 
        isOpen={showCallModal} 
        onClose={() => setShowCallModal(false)} 
        phone={settings?.phone || '+919876543210'} 
        secondaryPhone={settings?.secondaryPhone}
      />
    </>
  )
}
