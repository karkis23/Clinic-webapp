import Hero from '@/components/Hero'
import { ServicesPreview } from '@/components/ServiceCard'
import { WhyChooseUs, CTASection } from '@/components/CTASection'
import { DoctorsPreview } from '@/components/DoctorCard'
import { TestimonialsPreview } from '@/components/TestimonialCard'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import { ArrowRight, Images } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* About Preview */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="w-full aspect-square max-w-md rounded-3xl bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl">🏥</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-primary/10 -z-10" />
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-accent/30 -z-10" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
              <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-6">
                Compassionate Care, <span className="gradient-text">Modern Medicine</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                At ClinicCare, we believe healthcare should be accessible, personalized, and delivered with warmth.
                Our clinic combines years of medical expertise with modern technology to ensure you receive
                the best possible care.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                From routine consultations to advanced treatments, our team of dedicated professionals
                is here to guide you on your health journey with compassion and expertise.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors group"
              >
                Learn More About Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesPreview />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Doctors */}
      <DoctorsPreview />

      {/* Testimonials */}
      <TestimonialsPreview />

      {/* Gallery Preview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Clinic</p>
              <h2 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                Take a <span className="gradient-text">Virtual Tour</span>
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Explore our modern facility, advanced equipment, and welcoming environment.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10 overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer relative group">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Images size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors group"
            >
              View Full Gallery
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
