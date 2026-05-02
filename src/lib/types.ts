// TypeScript types for CMS content

export interface SiteSettings {
  clinicName: string
  logo?: SanityImage
  phone: string
  whatsapp: string
  email: string
  address: string
  workingHours: string
  heroHeading: string
  heroSubheading: string
  heroImage?: SanityImage
}

export interface Doctor {
  _id: string
  name: string
  slug: { current: string }
  image?: SanityImage
  qualification: string
  experience: string
  specialty: string
  bio: string
}

export interface Service {
  _id: string
  title: string
  slug: { current: string }
  icon?: string
  image?: SanityImage
  shortDescription: string
  fullDescription?: SanityBlock[]
}

export interface Testimonial {
  _id: string
  name: string
  rating: number
  review: string
  image?: SanityImage
}

export interface GalleryImage {
  _id: string
  image: SanityImage
  caption?: string
  category?: string
}

// Sanity-specific types
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface SanityBlock {
  _type: 'block'
  children: { text: string }[]
  style?: string
}
