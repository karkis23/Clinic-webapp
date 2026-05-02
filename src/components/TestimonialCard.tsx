'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  rating: number
  review: string
  index?: number
}

export function TestimonialCard({ name, rating, review, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-7 border border-border shadow-card hover:shadow-card-hover transition-all relative"
    >
      <Quote size={32} className="text-primary/10 absolute top-6 right-6" />

      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}
          />
        ))}
      </div>

      <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-4">
        &ldquo;{review}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-border-light">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center">
          <span className="text-sm font-bold text-primary">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold text-sm text-text-primary">{name}</p>
          <p className="text-xs text-text-muted">Patient</p>
        </div>
      </div>
    </motion.div>
  )
}

// Fallback data
const fallbackTestimonials = [
  { _id: '1', name: 'Anita Verma', rating: 5, review: 'Excellent experience! The doctors are very knowledgeable and the staff is incredibly caring. I felt comfortable from the moment I walked in.' },
  { _id: '2', name: 'Rajesh Kumar', rating: 5, review: 'Best clinic in the area. Modern equipment, clean environment, and professional service. Highly recommended for skin treatments.' },
  { _id: '3', name: 'Sneha Reddy', rating: 4, review: 'Very happy with my treatment results. The doctor took time to explain everything clearly and the follow-up care was exceptional.' },
  { _id: '4', name: 'Vikram Singh', rating: 5, review: 'The laser treatment I received was outstanding. Minimal pain and great results. The clinic maintains very high standards.' },
]

export function TestimonialsPreview() {
  return (
    <section className="py-24 bg-surface-alt relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Patient Stories</p>
          <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Real experiences from real patients. Your health journey matters to us.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fallbackTestimonials.map((t, i) => (
            <TestimonialCard key={t._id} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
