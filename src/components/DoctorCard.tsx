'use client'

import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Fallback data when Sanity CMS is not connected
const fallbackDoctors = [
  { _id: '1', name: 'Dr. Arun Sharma', slug: { current: 'dr-arun-sharma' }, qualification: 'MBBS, MD', experience: '15+ Years', specialty: 'General Medicine', bio: 'Expert in internal medicine with a compassionate approach to patient care.' },
  { _id: '2', name: 'Dr. Priya Patel', slug: { current: 'dr-priya-patel' }, qualification: 'MBBS, MD Dermatology', experience: '12+ Years', specialty: 'Dermatology', bio: 'Specialist in advanced skin treatments and cosmetic procedures.' },
  { _id: '3', name: 'Dr. Raj Mehta', slug: { current: 'dr-raj-mehta' }, qualification: 'MBBS, MS', experience: '10+ Years', specialty: 'Cosmetic Surgery', bio: 'Pioneer in minimally invasive cosmetic procedures.' },
]

interface DoctorCardProps {
  name: string
  slug: { current: string }
  qualification: string
  experience: string
  specialty: string
  bio: string
  image?: any
  index?: number
}

export function DoctorCard({ name, slug, qualification, experience, specialty, bio, index = 0 }: DoctorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/doctors/${slug.current}`}
        className="group block bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all shadow-card hover:shadow-card-hover hover:-translate-y-1"
      >
        {/* Image placeholder */}
        <div className="h-64 bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/60 flex items-center justify-center text-3xl">
              👨‍⚕️
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
            {specialty}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-text-primary group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-primary font-medium mt-1">{qualification}</p>
          <p className="text-sm text-text-muted mt-1">{experience} Experience</p>
          <p className="text-sm text-text-secondary mt-3 line-clamp-2">{bio}</p>
          <div className="flex items-center gap-1 mt-4 text-primary text-sm font-medium group-hover:gap-2 transition-all">
            View Profile <ArrowRight size={16} />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function DoctorsPreview() {
  return (
    <section className="py-24 bg-surface-alt relative">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Team</p>
          <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
            Meet Our <span className="gradient-text">Expert Doctors</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Our experienced team of medical professionals is dedicated to providing you with the highest quality care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fallbackDoctors.map((doc, i) => (
            <DoctorCard key={doc._id} {...doc} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors group"
          >
            View All Doctors
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
