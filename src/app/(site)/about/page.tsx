import { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import { CTASection } from '@/components/CTASection'
import { Shield, Heart, Eye, Users } from 'lucide-react'
import { getAboutPage } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about ClinicCare — our story, mission, values, and commitment to delivering exceptional healthcare.',
}

export default async function AboutPage() {
  const aboutData = await getAboutPage()

  // Default fallbacks if no data in Sanity
  const title = aboutData?.title || 'Built on Trust, Driven by Care'
  const content = aboutData?.content
  const stats = aboutData?.stats || [
    { value: '15+', label: 'Years of Excellence' }
  ]
  const features = aboutData?.features || [
    { title: 'Advanced Equipment' },
    { title: 'Sterile Environment' },
    { title: 'Patient Comfort' }
  ]

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-surface via-surface-alt to-accent/10 relative">
        <div className="absolute inset-0 line-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
            <h1 className="text-5xl sm:text-6xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
              Our <span className="gradient-text">Story</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              A trusted healthcare partner serving our community with excellence, compassion, and modern medical care.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection>
              <div className="relative">
                <div className="w-full aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10 flex items-center justify-center overflow-hidden">
                  {aboutData?.image ? (
                    <img 
                      src={urlFor(aboutData.image).width(800).url()} 
                      alt="About ClinicCare"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-8xl">🏥</span>
                  )}
                </div>
                {/* Visual Flair Stat Card */}
                {stats.length > 0 && stats[0].value && (
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-border hidden sm:block">
                    <p className="text-3xl font-bold font-[family-name:var(--font-heading)] text-primary">{stats[0].value}</p>
                    <p className="text-sm text-text-muted">{stats[0].label}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-6">
                {title}
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed about-portable-text">
                {content ? (
                  <PortableText value={content} />
                ) : (
                  <>
                    <p>
                      ClinicCare was founded with a simple mission — to make quality healthcare accessible
                      to everyone. What started as a small practice has grown into a trusted healthcare
                      destination, serving thousands of patients across our community.
                    </p>
                    <p>
                      Our founder, driven by a passion for patient-centered care, established this clinic
                      to bridge the gap between advanced medical technology and the warmth of personal attention
                      that every patient deserves.
                    </p>
                    <p>
                      Today, we continue that legacy with a team of experienced doctors, modern equipment,
                      and a commitment to continuous improvement in healthcare delivery.
                    </p>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Dedicated Stats Grid */}
          {stats.length > 0 && (
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 py-16 border-y border-border/50">
              {stats.map((stat: any, i: number) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="text-center min-w-[200px] flex-1 max-w-[280px]">
                    <p className="text-5xl font-bold font-[family-name:var(--font-heading)] text-primary mb-3">
                      {stat.value || '•'}
                    </p>
                    <p className="text-xs text-text-secondary font-bold uppercase tracking-[0.2em] leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Values</p>
              <h2 className="text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                Mission & <span className="gradient-text">Values</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Trust & Safety', desc: 'We prioritize patient safety with strict clinical protocols and certified practices.' },
              { icon: Heart, title: 'Compassion', desc: 'Every patient is treated with empathy, respect, and genuine concern for their wellbeing.' },
              { icon: Eye, title: 'Transparency', desc: 'Clear communication about diagnoses, treatments, and costs — no hidden surprises.' },
              { icon: Users, title: 'Community', desc: 'We are dedicated to improving the health of our community through accessible care.' },
            ].map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="text-center p-8 bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <value.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-text-primary mb-2 font-[family-name:var(--font-heading)]">{value.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Facility</p>
              <h2 className="text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                Modern <span className="gradient-text">Infrastructure</span>
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-sm">
                Our clinic is equipped with the latest medical technology and designed for your comfort.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10 flex items-center justify-center overflow-hidden relative group">
                  {item.image ? (
                    <img 
                      src={urlFor(item.image).width(600).url()} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : null}
                  <div className={`absolute inset-0 flex items-center justify-center ${item.image ? 'bg-black/20 group-hover:bg-black/40 transition-colors' : ''}`}>
                    <p className={`font-semibold ${item.image ? 'text-white' : 'text-text-secondary'}`}>{item.title}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
