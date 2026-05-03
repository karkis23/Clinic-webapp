'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, Copy, CheckCircle2 } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function CallModal({ 
  isOpen, 
  onClose, 
  phone,
  secondaryPhone
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  phone: string;
  secondaryPhone?: string;
}) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const phones = [phone, secondaryPhone].filter(Boolean) as string[]

  const handleCopy = (num: string, index: number) => {
    navigator.clipboard.writeText(num)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2500)
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
                  <Phone size={18} />
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg text-text-primary">
                    Contact Us
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
              <div className="p-6 text-center pb-2">
                <p className="text-sm text-text-secondary mb-6">
                  We're available for you. Call us directly to book an appointment or ask any questions.
                </p>
                
                <div className="flex flex-col gap-3">
                  {phones.map((num, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-surface-alt rounded-xl p-2.5 border border-border/50">
                      <div className="flex flex-col items-start pl-3">
                        {phones.length > 1 && (
                          <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider mb-0.5">
                            {idx === 0 ? 'Primary' : 'Secondary'}
                          </span>
                        )}
                        <span className="font-semibold text-text-primary text-base sm:text-lg tracking-wide">
                          {num}
                        </span>
                      </div>
                      <button
                        onClick={() => handleCopy(num, idx)}
                        className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-border hover:border-secondary hover:text-secondary shadow-sm transition-all"
                        title="Copy Phone Number"
                      >
                        {copiedIndex === idx ? <CheckCircle2 size={18} className="text-green-500" /> : <Copy size={18} />}
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="h-6 mt-2 flex items-center justify-center">
                  <AnimatePresence>
                    {copiedIndex !== null && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-green-600 font-medium"
                      >
                        Number copied to clipboard!
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-5 pt-0 flex flex-col gap-3">
                {phones.map((num, idx) => (
                  <a
                    key={idx}
                    href={`tel:${num}`}
                    className={`w-full flex justify-center items-center gap-2 px-5 py-3.5 rounded-xl font-medium transition-colors shadow-sm ${
                      idx === 0 
                        ? "bg-primary hover:bg-primary-dark text-white" 
                        : "bg-surface-alt hover:bg-gray-100 text-text-primary border border-border"
                    }`}
                  >
                    <Phone size={16} />
                    Call {phones.length > 1 ? (idx === 0 ? 'Primary' : 'Secondary') : 'Now'}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
