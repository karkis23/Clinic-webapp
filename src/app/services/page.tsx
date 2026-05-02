import { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import { ServiceCard } from '@/components/ServiceCard'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive range of healthcare services — from general consultations to advanced cosmetic procedures.',
}

const services = [
  { _id: '1', title: 'General Consultation', slug: { current: 'general-consultation' }, icon: 'Stethoscope', shortDescription: 'Comprehensive health checkups, diagnosis, and medical consultations with experienced physicians. We take time to listen, understand, and provide tailored treatment plans.' },
  { _id: '2', title: 'Skin Treatment', slug: { current: 'skin-treatment' }, icon: 'Sparkles', shortDescription: 'Advanced dermatological treatments for all skin types and conditions. From acne management to pigmentation correction, our skin experts have you covered.' },
  { _id: '3', title: 'Hair Loss Treatment', slug: { current: 'hair-loss' }, icon: 'Shield', shortDescription: 'Proven therapies including PRP treatment, mesotherapy, and medical management to restore hair growth and improve scalp health effectively.' },
  { _id: '4', title: 'Acne Care', slug: { current: 'acne-care' }, icon: 'Heart', shortDescription: 'Targeted acne solutions including medical treatments, chemical peels, and scar reduction procedures for clear, healthy skin.' },
  { _id: '5', title: 'Laser Treatment', slug: { current: 'laser-treatment' }, icon: 'Zap', shortDescription: 'State-of-the-art laser procedures for skin rejuvenation, hair removal, tattoo removal, and pigmentation correction using FDA-approved technology.' },
  { _id: '6', title: 'Cosmetic Procedures', slug: { current: 'cosmetic-procedures' }, icon: 'Scissors', shortDescription: 'Safe, minimally invasive cosmetic enhancements including fillers, Botox, thread lifts, and body contouring by expert practitioners.' },
  { _id: '7', title: 'Pediatric Care', slug: { current: 'pediatric-care' }, icon: 'Heart', shortDescription: 'Comprehensive pediatric services including vaccinations, growth monitoring, and treatment of childhood illnesses in a child-friendly environment.' },
  { _id: '8', title: 'Preventive Health Checkup', slug: { current: 'preventive-health' }, icon: 'Shield', shortDescription: 'Regular health screening packages designed to detect potential health issues early, including blood tests, ECG, and specialist consultations.' },
]

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-surface via-surface-alt to-accent/10 relative">
        <div className="absolute inset-0 line-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h1 className="text-5xl sm:text-6xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Comprehensive healthcare services delivered with expertise, modern technology, and a patient-first approach.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service._id} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
