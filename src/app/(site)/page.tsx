// Refresh trigger
import Hero from '@/components/Hero'
import { ServicesPreview } from '@/components/ServiceCard'
import { WhyChooseUs, CTASection } from '@/components/CTASection'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import { ArrowRight, Images, Stethoscope } from 'lucide-react'
import { getSiteSettings, getServices, getGalleryImages } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'

export default async function HomePage() {
  const settings = await getSiteSettings()
  const services = await getServices()
  const galleryImages = await getGalleryImages()
  
  const displayGallery = galleryImages?.slice(0, 4) || []

  return (
    <>
      {/* Hero */}
      <Hero settings={settings} />

      {/* About Preview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="w-full aspect-square max-w-md rounded-2xl bg-gradient-to-br from-primary/5 via-accent/30 to-secondary/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Stethoscope size={36} className="text-primary/30" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-secondary/15 -z-10" />
                <div className="absolute -top-3 -left-3 w-16 h-16 rounded-xl bg-secondary/10 -z-10" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-secondary" />
                <span className="text-secondary text-xs font-semibold uppercase tracking-[0.2em]">About Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-6">
                Compassionate Care,{' '}
                <span className="text-secondary">Modern Medicine</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4 text-sm">
                At our clinic, we believe healthcare should be accessible, personalized, and delivered with warmth.
                We combine years of medical expertise with modern technology to ensure you receive
                the best possible care.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8 text-sm">
                From routine consultations to advanced treatments, our team of dedicated professionals
                is here to guide you on your health journey with compassion and expertise.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium text-sm transition-colors group"
              >
                Learn More About Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesPreview services={services} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Gallery Preview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-secondary" />
                <span className="text-secondary text-xs font-semibold uppercase tracking-[0.2em]">Our Clinic</span>
                <div className="h-px w-8 bg-secondary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                Take a Virtual Tour
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto text-sm">
                Explore our modern facility, advanced equipment, and welcoming environment.
              </p>
            </div>
          </AnimatedSection>

          {displayGallery.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {displayGallery.map((img: any, i: number) => (
                <AnimatedSection key={img._id} delay={i * 0.08}>
                  <div className="aspect-square rounded-xl overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer relative group bg-surface-alt">
                    {img.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={urlFor(img.image).width(600).height(600).url()}
                        alt={img.caption || 'Clinic Gallery'}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Images size={28} className="text-text-muted/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors flex items-end p-4" suppressHydrationWarning>
                      <p className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <p className="text-center text-text-muted text-sm">More photos coming soon.</p>
          )}

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium text-sm transition-colors group"
            >
              View Full Gallery
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection settings={settings} />
    </>
  )
}
