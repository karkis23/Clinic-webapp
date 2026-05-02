import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}

