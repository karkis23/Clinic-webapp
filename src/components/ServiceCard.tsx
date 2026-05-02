'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Stethoscope, Scissors, Sparkles, Heart, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

const iconMap: Record<string, any> = {
  Stethoscope, Scissors, Sparkles, Heart, Zap, Shield
}


interface ServiceCardProps {
  title: string
  slug: { current: string }
  icon?: string
  shortDescription: string
  index?: number
}

export function ServiceCard({ title, slug, icon, shortDescription, index = 0 }: ServiceCardProps) {
  const IconComponent = icon && iconMap[icon] ? iconMap[icon] : Stethoscope

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/services/${slug.current}`}
        className="group block bg-white rounded-2xl p-7 border border-border hover:border-primary/30 transition-all shadow-card hover:shadow-card-hover hover:-translate-y-1"
      >
        <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors mb-5">
          <IconComponent size={24} className="text-primary group-hover:text-white transition-colors" />
        </div>

        <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-text-primary group-hover:text-primary transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">
          {shortDescription}
        </p>
        <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
          Learn more <ArrowRight size={16} />
        </span>
      </Link>
    </motion.div>
  )
}

export function ServicesPreview({ services = [] }: { services?: any[] }) {
  const displayServices = services?.slice(0, 3) || []
  
  if (displayServices.length === 0) return null

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From routine checkups to advanced treatments, we offer a full range of healthcare services under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, i) => (
            <ServiceCard key={service._id} {...service} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-md hover:shadow-lg"
          >
            Explore All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
