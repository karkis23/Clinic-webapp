import { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import { ServiceCard } from '@/components/ServiceCard'
import { CTASection } from '@/components/CTASection'
import { getServices } from '@/lib/queries'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive range of healthcare services — from general consultations to advanced cosmetic procedures.',
}


export default async function ServicesPage() {
  const sanityServices = await getServices()
  const displayServices = sanityServices || []

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
            {displayServices.map((service: any, i: number) => (
              <ServiceCard key={service._id} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
