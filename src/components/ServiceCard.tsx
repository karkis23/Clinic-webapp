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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="h-full"
    >
      <Link
        href={`/services/${slug.current}`}
        className="group flex flex-col h-full bg-white rounded-xl p-6 border border-border hover:border-secondary/30 transition-all shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
      >
        <div className="w-11 h-11 rounded-lg bg-primary/5 group-hover:bg-secondary/10 flex items-center justify-center transition-colors mb-4 flex-shrink-0">
          <IconComponent size={20} className="text-primary group-hover:text-secondary transition-colors" />
        </div>

        <h3 className="text-base font-bold font-[family-name:var(--font-heading)] text-text-primary group-hover:text-primary transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-3">
          {shortDescription}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
          Learn more <ArrowRight size={14} />
        </span>
      </Link>
    </motion.div>
  )
}

export function ServicesPreview({ services = [] }: { services?: any[] }) {
  const displayServices = services?.slice(0, 3) || []
  
  if (displayServices.length === 0) return null

  return (
    <section className="py-24 bg-surface-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-secondary" />
            <span className="text-secondary text-xs font-semibold uppercase tracking-[0.2em]">What We Offer</span>
            <div className="h-px w-8 bg-secondary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
            Our Services
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-sm">
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
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-medium text-sm transition-all"
          >
            Explore All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
