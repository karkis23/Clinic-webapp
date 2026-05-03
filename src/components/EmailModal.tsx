'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Copy, CheckCircle2 } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function EmailModal({ 
  isOpen, 
  onClose, 
  email 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  email: string;
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary-dark/60 backdrop-blur-[2px] z-[100]"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl border border-border w-full max-w-sm overflow-hidden pointer-events-auto relative"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-border bg-surface-alt/50">
                <div className="flex items-center gap-2 text-primary">
                  <Mail size={18} />
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg text-text-primary">
                    Email Us
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-black/5 text-text-muted hover:text-text-primary transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 text-center">
                <p className="text-sm text-text-secondary mb-6">
                  Send us an email for inquiries, detailed questions, or feedback. We aim to respond within 24 hours.
                </p>
                
                <div className="flex items-center justify-between bg-surface-alt rounded-xl p-2.5 border border-border/50">
                  <span className="font-semibold text-text-primary text-sm sm:text-base tracking-wide pl-3 truncate max-w-[200px]">
                    {email}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-border hover:border-secondary hover:text-secondary shadow-sm transition-all flex-shrink-0"
                    title="Copy Email Address"
                  >
                    {copied ? <CheckCircle2 size={18} className="text-green-500" /> : <Copy size={18} />}
                  </button>
                </div>
                
                <div className="h-4 mt-2">
                  <AnimatePresence>
                    {copied && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-green-600 font-medium"
                      >
                        Email copied to clipboard!
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-5 pt-0 flex justify-center">
                <a
                  href={`mailto:${email}`}
                  className="w-full flex justify-center items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-3.5 rounded-xl font-medium transition-colors shadow-sm"
                >
                  <Mail size={16} />
                  Send Email
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
