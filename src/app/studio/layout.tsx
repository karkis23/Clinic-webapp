import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ClinicCare CMS Studio',
  description: 'Content management dashboard for ClinicCare',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      {children}
    </div>
  )
}
