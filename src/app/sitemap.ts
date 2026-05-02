import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cliniccare.vercel.app'

  const staticPages = [
    '', '/about', '/doctors', '/services', '/gallery', '/testimonials', '/contact',
  ]

  const doctorSlugs = [
    'dr-arun-sharma', 'dr-priya-patel', 'dr-raj-mehta',
    'dr-kavita-joshi', 'dr-sanjay-gupta', 'dr-meera-nair',
  ]

  const serviceSlugs = [
    'general-consultation', 'skin-treatment', 'hair-loss',
    'acne-care', 'laser-treatment', 'cosmetic-procedures',
    'pediatric-care', 'preventive-health',
  ]

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...doctorSlugs.map((slug) => ({
      url: `${baseUrl}/doctors/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
