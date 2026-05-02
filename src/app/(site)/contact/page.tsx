'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setLoading(false)
    setSubmitted(true)
  }

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
                      <a href="tel:+919876543210" className="text-sm text-text-secondary hover:text-primary transition-colors">
                        +91 98765 43210
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
                        href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
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
                      <a href="mailto:info@cliniccare.com" className="text-sm text-text-secondary hover:text-primary transition-colors">
                        info@cliniccare.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface-alt border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Address</h4>
                      <p className="text-sm text-text-secondary">
                        123 Healthcare Avenue,<br />
                        Medical District, City 400001
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
                        Monday – Saturday: 9:00 AM – 7:00 PM<br />
                        Sunday: Closed
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
                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-text-secondary max-w-md mx-auto">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-8 text-primary font-semibold hover:text-primary-dark transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-2">
                        Send Us a Message
                      </h3>
                      <p className="text-text-secondary text-sm mb-8">
                        Fill out the form below and we&apos;ll respond promptly.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">Full Name</label>
                            <input
                              type="text"
                              required
                              placeholder="Your name"
                              className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">Phone Number</label>
                            <input
                              type="tel"
                              required
                              placeholder="+91 98765 43210"
                              className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2">Service Interested In</label>
                          <select className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all">
                            <option value="">Select a service</option>
                            <option>General Consultation</option>
                            <option>Skin Treatment</option>
                            <option>Hair Loss Treatment</option>
                            <option>Acne Care</option>
                            <option>Laser Treatment</option>
                            <option>Cosmetic Procedures</option>
                            <option>Pediatric Care</option>
                            <option>Health Checkup</option>
                            <option>Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2">Your Message</label>
                          <textarea
                            required
                            rows={4}
                            placeholder="Tell us about your concern or question..."
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-70"
                        >
                          {loading ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={18} />
                              Send Message
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Google Map */}
          <AnimatedSection className="mt-16">
            <div className="rounded-3xl overflow-hidden border border-border shadow-card h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5087529627044!2d72.87744857489062!3d19.047329282163385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d0f4449fbd%3A0x5d6cd64773a18d5a!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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
