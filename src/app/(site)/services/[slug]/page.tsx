import { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import { CTASection } from '@/components/CTASection'
import Link from 'next/link'
import { ArrowLeft, Check, MessageCircle } from 'lucide-react'
import { notFound } from 'next/navigation'

const services: Record<string, any> = {
  'general-consultation': {
    title: 'General Consultation',
    shortDescription: 'Comprehensive health checkups and medical consultations with experienced physicians.',
    content: [
      'Our general consultation service provides thorough medical evaluations conducted by experienced physicians who take the time to understand your health concerns.',
      'During your visit, our doctor will conduct a comprehensive assessment including medical history review, physical examination, and any necessary diagnostic tests to provide an accurate diagnosis.',
      'We believe in a patient-centered approach where you are actively involved in your healthcare decisions. Our doctors explain conditions clearly and discuss treatment options so you can make informed choices.',
    ],
    benefits: ['Thorough health assessment', 'Personalized treatment plans', 'Follow-up care coordination', 'Referrals to specialists when needed', 'Health education and prevention guidance'],
  },
  'skin-treatment': {
    title: 'Skin Treatment',
    shortDescription: 'Advanced dermatological treatments for all skin types and conditions.',
    content: [
      'Our dermatology department offers a full spectrum of skin treatments using the latest medical advances and technology.',
      'Whether you are dealing with acne, pigmentation, eczema, psoriasis, or aging concerns, our experienced dermatologists create customized treatment plans for optimal results.',
      'We use FDA-approved treatments and maintain the highest standards of safety and hygiene in all our procedures.',
    ],
    benefits: ['Advanced diagnostic tools', 'Customized treatment protocols', 'Minimal downtime procedures', 'Long-lasting results', 'Expert aftercare support'],
  },
  'hair-loss': {
    title: 'Hair Loss Treatment',
    shortDescription: 'Proven therapies to restore hair growth and improve scalp health.',
    content: [
      'Hair loss can significantly impact confidence. Our comprehensive hair restoration services address the root causes of hair loss with proven medical and cosmetic treatments.',
      'We offer PRP therapy, mesotherapy, medical management, and advanced scalp treatments tailored to your specific type of hair loss.',
      'Our specialists conduct thorough scalp analysis and blood work to determine the underlying causes before recommending the most effective treatment plan.',
    ],
    benefits: ['Comprehensive scalp analysis', 'PRP & mesotherapy treatments', 'Medical hair restoration', 'Nutritional counseling', 'Ongoing monitoring and adjustments'],
  },
  'acne-care': {
    title: 'Acne Care',
    shortDescription: 'Targeted acne solutions for clear, healthy skin.',
    content: [
      'Acne affects people of all ages and can be a source of significant distress. Our acne care program combines medical treatment with skincare guidance for lasting results.',
      'We offer medical-grade treatments including chemical peels, extraction therapy, LED light therapy, and prescription medications tailored to the severity and type of acne.',
      'Our approach goes beyond treating active acne — we also address acne scars and develop maintenance routines to prevent future breakouts.',
    ],
    benefits: ['Customized acne treatment plans', 'Scar reduction therapies', 'Chemical peel options', 'Skincare routine guidance', 'Long-term prevention strategies'],
  },
  'laser-treatment': {
    title: 'Laser Treatment',
    shortDescription: 'State-of-the-art laser procedures for skin rejuvenation and correction.',
    content: [
      'Our clinic houses the latest laser technology for a wide range of skin treatments, from hair removal and pigmentation correction to skin resurfacing and scar treatment.',
      'All laser procedures are performed by trained professionals using FDA-approved equipment, ensuring both safety and efficacy.',
      'We provide thorough pre-treatment consultations and post-treatment care to ensure optimal results and patient satisfaction.',
    ],
    benefits: ['FDA-approved laser equipment', 'Trained laser specialists', 'Minimal discomfort procedures', 'Visible results after few sessions', 'Comprehensive aftercare'],
  },
  'cosmetic-procedures': {
    title: 'Cosmetic Procedures',
    shortDescription: 'Safe, minimally invasive cosmetic enhancements by expert practitioners.',
    content: [
      'Our cosmetic department offers a curated selection of non-surgical and minimally invasive procedures designed to enhance your natural beauty.',
      'From dermal fillers and Botox to thread lifts and body contouring, each procedure is performed with precision by our experienced aesthetic practitioners.',
      'We prioritize natural-looking results that enhance rather than alter your appearance, always keeping your safety as our top priority.',
    ],
    benefits: ['Natural-looking results', 'Minimally invasive techniques', 'Expert aesthetic practitioners', 'Personalized treatment plans', 'Comprehensive consultation process'],
  },
  'pediatric-care': {
    title: 'Pediatric Care',
    shortDescription: 'Comprehensive pediatric services in a child-friendly environment.',
    content: [
      'Our pediatric department is designed to make healthcare a positive experience for children and their families.',
      'We provide well-child visits, vaccinations, acute illness management, and developmental screenings in a warm, child-friendly environment.',
    ],
    benefits: ['Child-friendly environment', 'Vaccination programs', 'Growth monitoring', 'Developmental screenings', 'Parental guidance'],
  },
  'preventive-health': {
    title: 'Preventive Health Checkup',
    shortDescription: 'Regular health screening packages for early detection.',
    content: [
      'Prevention is better than cure. Our preventive health checkup packages are designed to identify potential health risks before they become serious conditions.',
      'Each package includes comprehensive blood work, diagnostic imaging, specialist consultations, and a detailed health report with personalized recommendations.',
    ],
    benefits: ['Comprehensive blood panels', 'Cardiac health screening', 'Diabetes risk assessment', 'Cancer screening markers', 'Personalized health report'],
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services[slug]
  if (!service) return { title: 'Service Not Found' }
  return {
    title: service.title,
    description: service.shortDescription,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services[slug]

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10 mb-10 flex items-center justify-center">
                  <span className="text-6xl">🏥</span>
                </div>
                <div className="space-y-5">
                  {service.content.map((p: string, i: number) => (
                    <p key={i} className="text-text-secondary leading-relaxed">{p}</p>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2}>
              <div className="bg-surface-alt rounded-2xl p-7 border border-border sticky top-28">
                <h3 className="font-bold font-[family-name:var(--font-heading)] text-text-primary mb-5 text-lg">Key Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((b: string) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-text-secondary">
                      <Check size={16} className="text-primary shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <a
                    href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white w-full py-3.5 rounded-xl font-semibold transition-all shadow-md text-sm"
                  >
                    <MessageCircle size={18} />
                    Book This Service
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
