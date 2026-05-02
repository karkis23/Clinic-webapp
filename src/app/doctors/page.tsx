import { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import { DoctorCard } from '@/components/DoctorCard'
import { CTASection } from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Our Doctors',
  description: 'Meet our team of experienced, qualified doctors dedicated to providing you the highest quality medical care.',
}

// Fallback data — will be replaced by Sanity CMS
const doctors = [
  { _id: '1', name: 'Dr. Arun Sharma', slug: { current: 'dr-arun-sharma' }, qualification: 'MBBS, MD (Internal Medicine)', experience: '15+ Years', specialty: 'General Medicine', bio: 'Dr. Sharma is a seasoned physician specializing in internal medicine. With over 15 years of clinical practice, he is known for his thorough approach to diagnosis and his ability to manage complex medical conditions with compassion and precision.' },
  { _id: '2', name: 'Dr. Priya Patel', slug: { current: 'dr-priya-patel' }, qualification: 'MBBS, MD (Dermatology)', experience: '12+ Years', specialty: 'Dermatology', bio: 'Dr. Patel is a renowned dermatologist specializing in advanced skin treatments, cosmetic procedures, and medical dermatology. She brings a blend of clinical expertise and aesthetic sensibility to every consultation.' },
  { _id: '3', name: 'Dr. Raj Mehta', slug: { current: 'dr-raj-mehta' }, qualification: 'MBBS, MS (Cosmetic Surgery)', experience: '10+ Years', specialty: 'Cosmetic Surgery', bio: 'Dr. Mehta is a pioneer in minimally invasive cosmetic procedures. His expertise in laser treatments and aesthetic enhancements has helped hundreds of patients achieve their desired results safely.' },
  { _id: '4', name: 'Dr. Kavita Joshi', slug: { current: 'dr-kavita-joshi' }, qualification: 'MBBS, DNB (Pediatrics)', experience: '8+ Years', specialty: 'Pediatrics', bio: 'Dr. Joshi is a compassionate pediatrician dedicated to the health and wellbeing of children. She believes in building trusting relationships with both young patients and their families.' },
  { _id: '5', name: 'Dr. Sanjay Gupta', slug: { current: 'dr-sanjay-gupta' }, qualification: 'MBBS, MD (Cardiology)', experience: '20+ Years', specialty: 'Cardiology', bio: 'Dr. Gupta is a highly experienced cardiologist with two decades of practice in preventive and interventional cardiology. He is passionate about heart health education and early prevention strategies.' },
  { _id: '6', name: 'Dr. Meera Nair', slug: { current: 'dr-meera-nair' }, qualification: 'BDS, MDS (Orthodontics)', experience: '7+ Years', specialty: 'Dental Care', bio: 'Dr. Nair specializes in dental health, orthodontic treatments, and smile design. Her gentle approach puts even the most anxious patients at ease during their dental procedures.' },
]

export default function DoctorsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-surface via-surface-alt to-accent/10 relative">
        <div className="absolute inset-0 line-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Team</p>
            <h1 className="text-5xl sm:text-6xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
              Meet Our <span className="gradient-text">Doctors</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Our team of expert physicians combines deep clinical knowledge with genuine care for every patient.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doc, i) => (
              <DoctorCard key={doc._id} {...doc} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
