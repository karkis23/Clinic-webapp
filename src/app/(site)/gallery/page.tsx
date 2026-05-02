'use client'

import { useState, useEffect } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { getGalleryImages } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'

const categories = ['All', 'Interior', 'Equipment', 'Team']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [images, setImages] = useState<any[]>([])
  const [selectedImage, setSelectedImage] = useState<any | null>(null)
  
  useEffect(() => {
    getGalleryImages().then(res => {
      setImages(res || [])
    })
  }, [])

  const filtered = activeCategory === 'All'
    ? images
    : images.filter(img => img.category === activeCategory.toLowerCase())

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
                className="group cursor-pointer relative aspect-square rounded-2xl overflow-hidden bg-surface-alt"
                onClick={() => setSelectedImage(img)}
              >
                {img.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={urlFor(img.image).width(600).height(600).url()}
                    alt={img.caption || 'Gallery Image'}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10" />
                )}
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center p-4">
                    <p className="text-white font-semibold text-sm drop-shadow-md">{img.caption}</p>
                    <p className="text-white/80 text-xs capitalize mt-1 drop-shadow-md">{img.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={urlFor(selectedImage.image).width(1200).url()}
                  alt={selectedImage.caption || 'Gallery Image Full'}
                  className="w-full h-full object-contain rounded-xl"
                />
              )}
              {selectedImage.caption && (
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-xl">
                  <p className="text-white text-xl font-semibold">{selectedImage.caption}</p>
                  <p className="text-white/80 capitalize mt-1">{selectedImage.category}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
