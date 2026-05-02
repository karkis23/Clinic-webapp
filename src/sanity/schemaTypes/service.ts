const service = {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule: any) => Rule.required() },
    { name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name, e.g. Stethoscope, Heart, Scissors' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'shortDescription', title: 'Short Description', type: 'text', rows: 3 },
    { name: 'fullDescription', title: 'Full Description', type: 'array', of: [{ type: 'block' }] },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
  preview: {
    select: { title: 'title', media: 'image' },
  },
}

export default service
