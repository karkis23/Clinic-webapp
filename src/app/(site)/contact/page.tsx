import AnimatedSection from '@/components/AnimatedSection'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { getSiteSettings } from '@/lib/queries'
import { ContactForm } from '@/components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ClinicCare for appointments and inquiries.',
}

export default async function ContactPage() {
  const settings = await getSiteSettings()
  
  // Helper to extract URL from iframe string if user pasted the whole tag
  const extractMapUrl = (input: string) => {
    if (!input) return null
    if (input.includes('<iframe')) {
      const match = input.match(/src="([^"]+)"/)
      return match ? match[1] : input
    }
    return input
  }

  const address = settings?.address || '123 Healthcare Avenue, Medical District, City 400001'
  const phone = settings?.phone || '+91 98765 43210'
  const email = settings?.email || 'info@cliniccare.com'
  const whatsapp = settings?.whatsapp || '919876543210'
  const workingHours = settings?.workingHours || 'Monday – Saturday: 9:00 AM – 7:00 PM'
  const rawMapUrl = settings?.googleMapsEmbedUrl || ""
  const mapUrl = extractMapUrl(rawMapUrl) || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5087529627044!2d72.87744857489062!3d19.047329282163385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d0f4449fbd%3A0x5d6cd64773a18d5a!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-surface via-surface-alt to-accent/10 relative">
        <div className="absolute inset-0 line-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="text-5xl sm:text-6xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Have a question or want to book an appointment? We&apos;re here to help. Reach out to us through any of the channels below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-8">
                  Reach Out to Us
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface-alt border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Phone</h4>
                      <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-sm text-text-secondary hover:text-primary transition-colors">
                        {phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface-alt border border-border">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                      <MessageCircle size={20} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">WhatsApp</h4>
                      <a
                        href={`https://wa.me/${whatsapp.replace(/\+/g, '')}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-secondary hover:text-green-600 transition-colors"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface-alt border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                      <a href={`mailto:${email}`} className="text-sm text-text-secondary hover:text-primary transition-colors">
                        {email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface-alt border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Address</h4>
                      <p className="text-sm text-text-secondary whitespace-pre-line">
                        {address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface-alt border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Working Hours</h4>
                      <p className="text-sm text-text-secondary">
                        {workingHours}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.2}>
                <div className="bg-surface-alt rounded-3xl p-8 sm:p-10 border border-border">
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Google Map */}
          <AnimatedSection className="mt-16">
            <div className="rounded-3xl overflow-hidden border border-border shadow-card h-[400px]">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
