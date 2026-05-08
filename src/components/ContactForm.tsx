'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export function ContactForm() {
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

  if (submitted) {
    return (
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
    )
  }

  return (
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
  )
}
