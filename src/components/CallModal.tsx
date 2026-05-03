'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, Copy, CheckCircle2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

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
    setTimeout(() => setCopiedIndex(null), 2000)
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-full max-w-sm overflow-hidden pointer-events-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Content */}
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-gray-900 mb-2">
                    Contact Us
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Our team is available to assist you with appointments and inquiries.
                  </p>
                </div>

                <div className="space-y-6">
                  {phones.map((num, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                          {idx === 0 ? 'Primary Line' : 'Secondary Line'}
                        </span>
                        <button
                          onClick={() => handleCopy(num, idx)}
                          className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-primary-dark transition-colors flex items-center gap-1.5"
                        >
                          {copiedIndex === idx ? (
                            <>
                              <CheckCircle2 size={10} />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy size={10} />
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                      
                      <a
                        href={`tel:${num}`}
                        className="flex items-center justify-between group-hover:translate-x-1 transition-transform"
                      >
                        <span className="text-xl font-medium text-gray-900">
                          {num}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          <Phone size={18} />
                        </div>
                      </a>
                      
                      {idx < phones.length - 1 && (
                        <div className="mt-6 border-b border-gray-100" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-gray-100">
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors flex items-center gap-2"
                  >
                    View other contact options
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
