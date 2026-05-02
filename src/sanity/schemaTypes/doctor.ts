const doctor = {
  name: 'doctor',
  title: 'Doctors',
  type: 'document',
  fields: [
    { name: 'name', title: 'Full Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 }, validation: (Rule: any) => Rule.required() },
    { name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } },
    { name: 'qualification', title: 'Qualification', type: 'string', description: 'e.g. MBBS, MD Dermatology' },
    { name: 'experience', title: 'Experience', type: 'string', description: 'e.g. 15+ Years' },
    { name: 'specialty', title: 'Specialty', type: 'string' },
    { name: 'bio', title: 'Bio', type: 'text' },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
  preview: {
    select: { title: 'name', subtitle: 'specialty', media: 'image' },
  },
}

export default doctor
