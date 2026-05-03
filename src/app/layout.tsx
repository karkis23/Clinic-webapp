import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ClinicCare | Premium Healthcare Clinic',
    template: '%s | ClinicCare',
  },
  description: 'ClinicCare offers expert medical consultations, advanced skin treatments, cosmetic procedures, and personalized healthcare. Book your appointment today.',
  keywords: ['clinic', 'doctor', 'healthcare', 'dermatology', 'skin treatment', 'cosmetic procedures', 'hospital'],
  openGraph: {
    title: 'ClinicCare | Premium Healthcare Clinic',
    description: 'Expert medical care with modern technology. Book your appointment today.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'ClinicCare',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

