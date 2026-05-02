const testimonial = {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    { name: 'name', title: 'Patient Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'rating', title: 'Rating', type: 'number', validation: (Rule: any) => Rule.required().min(1).max(5) },
    { name: 'review', title: 'Review', type: 'text', validation: (Rule: any) => Rule.required() },
    { name: 'image', title: 'Photo (optional)', type: 'image', options: { hotspot: true } },
  ],
  preview: {
    select: { title: 'name', subtitle: 'review' },
  },
}

export default testimonial
