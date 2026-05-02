import { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import { TestimonialCard } from '@/components/TestimonialCard'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Read what our patients say about their experience at ClinicCare. Real reviews from real patients.',
}

const testimonials = [
  { _id: '1', name: 'Anita Verma', rating: 5, review: 'Excellent experience! The doctors are very knowledgeable and the staff is incredibly caring. I felt comfortable from the moment I walked in. The treatment was explained thoroughly and the results exceeded my expectations.' },
  { _id: '2', name: 'Rajesh Kumar', rating: 5, review: 'Best clinic in the area. Modern equipment, clean environment, and professional service. I have been visiting for over a year now and every visit has been consistent in quality. Highly recommended!' },
  { _id: '3', name: 'Sneha Reddy', rating: 4, review: 'Very happy with my treatment results. The doctor took time to explain everything clearly and the follow-up care was exceptional. The staff is always friendly and helpful.' },
  { _id: '4', name: 'Vikram Singh', rating: 5, review: 'The laser treatment I received was outstanding. Minimal pain and great results. The clinic maintains very high standards of hygiene and safety. Would definitely recommend to anyone.' },
  { _id: '5', name: 'Meera Iyer', rating: 5, review: 'I was nervous about my first cosmetic procedure but the team made me feel completely at ease. The results are natural-looking and I couldn\'t be happier. Thank you, ClinicCare!' },
  { _id: '6', name: 'Arjun Nair', rating: 4, review: 'Great experience with the hair loss treatment program. After just a few sessions, I could see visible improvement. The doctor is very patient and answers all questions thoroughly.' },
  { _id: '7', name: 'Pooja Sharma', rating: 5, review: 'My daughter\'s pediatric care at ClinicCare has been wonderful. Dr. Joshi is so gentle with children and makes the visit a positive experience. We are very grateful.' },
  { _id: '8', name: 'Karthik Menon', rating: 5, review: 'The preventive health checkup package was comprehensive and well-organized. Everything was completed efficiently, and the detailed report with recommendations was very helpful.' },
]

export default function TestimonialsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-surface via-surface-alt to-accent/10 relative">
        <div className="absolute inset-0 line-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Patient Stories</p>
            <h1 className="text-5xl sm:text-6xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
              What Our <span className="gradient-text">Patients Say</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Real experiences from real patients. Your trust drives us to deliver excellence every single day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Overall Rating Banner */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-12 text-center">
              <div>
                <p className="text-5xl font-bold font-[family-name:var(--font-heading)] text-primary">4.9</p>
                <p className="text-sm text-text-muted mt-1">Overall Rating</p>
              </div>
              <div className="w-px h-16 bg-border hidden sm:block" />
              <div>
                <p className="text-5xl font-bold font-[family-name:var(--font-heading)] text-text-primary">500+</p>
                <p className="text-sm text-text-muted mt-1">Patient Reviews</p>
              </div>
              <div className="w-px h-16 bg-border hidden sm:block" />
              <div>
                <p className="text-5xl font-bold font-[family-name:var(--font-heading)] text-text-primary">98%</p>
                <p className="text-sm text-text-muted mt-1">Would Recommend</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t._id} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
