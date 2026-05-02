// GROQ queries for Sanity CMS
import { client } from './sanity'

// ─── Site Settings ───────────────────────────
export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0]{
      clinicName,
      logo,
      phone,
      whatsapp,
      email,
      address,
      workingHours,
      heroHeading,
      heroSubheading,
      heroImage
    }`
  )
}


// ─── Services ────────────────────────────────
export async function getServices() {
  return client.fetch(
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
}

export async function getServiceBySlug(slug: string) {
  return client.fetch(
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
}


// ─── Gallery ─────────────────────────────────
export async function getGalleryImages() {
  return client.fetch(
    `*[_type == "gallery"] | order(_createdAt desc) {
      _id,
      image,
      caption,
      category
    }`
  )
}
