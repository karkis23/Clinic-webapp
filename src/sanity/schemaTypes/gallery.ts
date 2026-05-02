const gallery = {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: (Rule: any) => Rule.required() },
    { name: 'caption', title: 'Caption', type: 'string' },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Clinic Interior', value: 'interior' },
          { title: 'Equipment', value: 'equipment' },
          { title: 'Team', value: 'team' },
          { title: 'Before & After', value: 'before-after' },
        ],
      },
    },
  ],
  preview: {
    select: { title: 'caption', subtitle: 'category', media: 'image' },
  },
}

export default gallery
