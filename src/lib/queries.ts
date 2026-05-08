// GROQ queries for Sanity CMS
import { client } from './sanity'

// Helper to add timeout to fetch calls
async function fetchWithTimeout<T>(fetcher: () => Promise<T>, timeoutMs = 5000): Promise<T | null> {
  try {
    const result = await Promise.race([
      fetcher(),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('Sanity fetch timeout')), timeoutMs)
      ),
    ])
    return result
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return null
  }
}

// ─── Site Settings ───────────────────────────
export async function getSiteSettings() {
  return fetchWithTimeout(() =>
    client.fetch(
      `*[_type == "siteSettings"][0]{
      clinicName,
      logo,
      phone,
      secondaryPhone,
      whatsapp,
      email,
      instagram,
      address,
      workingHours,
      heroHeading,
      heroSubheading,
      heroImage,
      heroImages,
      googleMapsEmbedUrl
    }`
    )
  )
}


// ─── Services ────────────────────────────────
export async function getServices() {
  return fetchWithTimeout(() =>
    client.fetch(
      `*[_type == "service"] | order(order asc) {
      _id,
      title,
      slug,
      icon,
      image,
      shortDescription,
      fullDescription
    }`
    )
  )
}

export async function getServiceBySlug(slug: string) {
  return fetchWithTimeout(() =>
    client.fetch(
      `*[_type == "service" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      icon,
      image,
      shortDescription,
      fullDescription
    }`,
      { slug }
    )
  )
}


// ─── Gallery ─────────────────────────────────
export async function getGalleryImages() {
  return fetchWithTimeout(() =>
    client.fetch(
      `*[_type == "gallery"] | order(_createdAt desc) {
      _id,
      image,
      caption,
      category
    }`
    )
  )
}
// ─── About Page ──────────────────────────────
export async function getAboutPage() {
  return fetchWithTimeout(() =>
    client.fetch(
      `*[_type == "aboutPage"][0]{
      title,
      content,
      image,
      stats,
      features
    }`
    )
  )
}
