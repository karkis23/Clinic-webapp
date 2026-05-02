import { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import { CTASection } from '@/components/CTASection'
import Link from 'next/link'
import { ArrowLeft, Award, Clock, Stethoscope } from 'lucide-react'
import { notFound } from 'next/navigation'

// Fallback doctor data
const doctors: Record<string, any> = {
  'dr-arun-sharma': { name: 'Dr. Arun Sharma', qualification: 'MBBS, MD (Internal Medicine)', experience: '15+ Years', specialty: 'General Medicine', bio: 'Dr. Sharma is a seasoned physician specializing in internal medicine. With over 15 years of clinical practice, he is known for his thorough approach to diagnosis and his ability to manage complex medical conditions with compassion and precision.\n\nHe completed his MBBS from a premier medical college and pursued his MD in Internal Medicine. He regularly attends medical conferences and stays updated with the latest advancements in his field.\n\nDr. Sharma believes in a holistic approach to healthcare, considering not just the symptoms but the overall wellbeing of his patients.' },
  'dr-priya-patel': { name: 'Dr. Priya Patel', qualification: 'MBBS, MD (Dermatology)', experience: '12+ Years', specialty: 'Dermatology', bio: 'Dr. Patel is a renowned dermatologist specializing in advanced skin treatments, cosmetic procedures, and medical dermatology. She brings a blend of clinical expertise and aesthetic sensibility to every consultation.\n\nWith over 12 years of experience, she has successfully treated thousands of patients with conditions ranging from acne and eczema to complex skin disorders.\n\nShe is particularly skilled in laser treatments, chemical peels, and anti-aging procedures.' },
  'dr-raj-mehta': { name: 'Dr. Raj Mehta', qualification: 'MBBS, MS (Cosmetic Surgery)', experience: '10+ Years', specialty: 'Cosmetic Surgery', bio: 'Dr. Mehta is a pioneer in minimally invasive cosmetic procedures. His expertise in laser treatments and aesthetic enhancements has helped hundreds of patients achieve their desired results safely.\n\nHe trained at leading institutions and has introduced several advanced techniques to the clinic.\n\nPatient safety and natural-looking results are the cornerstones of his practice.' },
  'dr-kavita-joshi': { name: 'Dr. Kavita Joshi', qualification: 'MBBS, DNB (Pediatrics)', experience: '8+ Years', specialty: 'Pediatrics', bio: 'Dr. Joshi is a compassionate pediatrician dedicated to the health and wellbeing of children. She believes in building trusting relationships with both young patients and their families.' },
  'dr-sanjay-gupta': { name: 'Dr. Sanjay Gupta', qualification: 'MBBS, MD (Cardiology)', experience: '20+ Years', specialty: 'Cardiology', bio: 'Dr. Gupta is a highly experienced cardiologist with two decades of practice in preventive and interventional cardiology. He is passionate about heart health education and early prevention strategies.' },
  'dr-meera-nair': { name: 'Dr. Meera Nair', qualification: 'BDS, MDS (Orthodontics)', experience: '7+ Years', specialty: 'Dental Care', bio: 'Dr. Nair specializes in dental health, orthodontic treatments, and smile design. Her gentle approach puts even the most anxious patients at ease during their dental procedures.' },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const doctor = doctors[slug]
  if (!doctor) return { title: 'Doctor Not Found' }
  return {
    title: doctor.name,
    description: `${doctor.name} — ${doctor.qualification}. ${doctor.specialty} specialist with ${doctor.experience} experience at ClinicCare.`,
  }
}

export default async function DoctorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doctor = doctors[slug]

  if (!doctor) notFound()

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-surface via-surface-alt to-accent/10 relative">
        <div className="absolute inset-0 line-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/doctors" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={18} /> Back to Doctors
          </Link>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <AnimatedSection>
              <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10 overflow-hidden flex items-center justify-center shadow-xl">
                <span className="text-8xl">👨‍⚕️</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                {doctor.specialty}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                {doctor.name}
              </h1>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-text-secondary">
                  <Award size={18} className="text-primary" />
                  <span className="text-sm">{doctor.qualification}</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <Clock size={18} className="text-primary" />
                  <span className="text-sm">{doctor.experience} Experience</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <Stethoscope size={18} className="text-primary" />
                  <span className="text-sm">{doctor.specialty}</span>
                </div>
              </div>

              <div className="prose prose-gray max-w-none">
                {doctor.bio.split('\n\n').map((paragraph: string, i: number) => (
                  <p key={i} className="text-text-secondary leading-relaxed mb-4">{paragraph}</p>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-lg"
                >
                  Book Appointment with {doctor.name.split(' ')[0]}
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
