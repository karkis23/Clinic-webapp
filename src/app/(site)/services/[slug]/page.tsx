import { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import { CTASection } from '@/components/CTASection'
import Link from 'next/link'
import { ArrowLeft, Check, MessageCircle, Stethoscope } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getServiceBySlug, getSiteSettings } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  
  if (!service) return { title: 'Service Not Found' }
  
  return {
    title: `${service.title} | ClinicCare`,
    description: service.shortDescription,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  const settings = await getSiteSettings()

  if (!service) notFound()

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-surface via-surface-alt to-accent/10 relative">
        <div className="absolute inset-0 line-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/services" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={18} /> Back to Services
          </Link>
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
              {service.title}
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">{service.shortDescription}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <AnimatedSection>
                <div className="aspect-[16/9] rounded-2xl bg-surface-alt overflow-hidden mb-12 relative border border-border">
                  {service.image ? (
                    <img
                      src={urlFor(service.image).width(1200).height(675).url()}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Stethoscope size={64} className="text-text-muted/20" />
                    </div>
                  )}
                </div>
                
                <div className="prose prose-lg max-w-none text-text-secondary prose-p:leading-relaxed prose-headings:font-[family-name:var(--font-heading)] prose-headings:text-text-primary">
                  {service.fullDescription ? (
                    <PortableText value={service.fullDescription} />
                  ) : (
                    <p className="italic opacity-60">Complete service details coming soon.</p>
                  )}
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                <AnimatedSection delay={0.2}>
                  <div className="bg-surface-alt rounded-2xl p-8 border border-border shadow-sm">
                    <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-6">Book Appointment</h3>
                    <p className="text-text-secondary text-sm mb-8">
                      Ready to experience our {service.title}? Speak with our specialists to book your session.
                    </p>
                    
                    <div className="space-y-4">
                      <a
                        href={`https://wa.me/${settings?.whatsapp || '919876543210'}?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-secondary hover:bg-secondary-light text-primary-dark w-full py-4 rounded-xl font-bold transition-all shadow-md"
                      >
                        <MessageCircle size={20} />
                        Chat on WhatsApp
                      </a>
                      
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-3 bg-white border border-border hover:bg-surface text-text-primary w-full py-4 rounded-xl font-semibold transition-all"
                      >
                        Other Contact Options
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <div className="bg-primary-dark rounded-2xl p-8 text-white">
                    <h4 className="font-bold mb-4">Why Choose Us?</h4>
                    <ul className="space-y-3">
                      {[
                        'Expert Medical Professionals',
                        'State-of-the-Art Technology',
                        'Patient-Centered Approach',
                        'Strict Hygiene Standards'
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                          <Check size={16} className="text-secondary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection settings={settings} />
    </>
  )
}
