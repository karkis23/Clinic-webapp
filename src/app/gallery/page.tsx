'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import { motion } from 'framer-motion'

const categories = ['All', 'Interior', 'Equipment', 'Team']

const fallbackImages = Array.from({ length: 12 }, (_, i) => ({
  _id: String(i + 1),
  caption: `Clinic Photo ${i + 1}`,
  category: ['interior', 'equipment', 'team', 'interior'][i % 4],
}))

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? fallbackImages
    : fallbackImages.filter(img => img.category === activeCategory.toLowerCase())

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-surface via-surface-alt to-accent/10 relative">
        <div className="absolute inset-0 line-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Clinic</p>
            <h1 className="text-5xl sm:text-6xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
              Photo <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Take a virtual tour of our modern facility, advanced equipment, and friendly team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'bg-surface-alt text-text-secondary hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <motion.div
                key={img._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center">
                      <p className="text-white font-semibold text-sm">{img.caption}</p>
                      <p className="text-white/70 text-xs capitalize mt-1">{img.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
