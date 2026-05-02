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

// ─── Doctors ─────────────────────────────────
export async function getDoctors() {
  return client.fetch(
    `*[_type == "doctor"] | order(order asc) {
      _id,
      name,
      slug,
      image,
      qualification,
      experience,
      specialty,
      bio
    }`
  )
}

export async function getDoctorBySlug(slug: string) {
  return client.fetch(
    `*[_type == "doctor" && slug.current == $slug][0]{
      _id,
      name,
      slug,
      image,
      qualification,
      experience,
      specialty,
      bio
    }`,
    { slug }
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

// ─── Testimonials ────────────────────────────
export async function getTestimonials() {
  return client.fetch(
    `*[_type == "testimonial"] | order(_createdAt desc) {
      _id,
      name,
      rating,
      review,
      image
    }`
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
