// Sanity client configuration
import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'dol70uz3',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
