export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Built on Trust, Driven by Care'
    },
    {
      name: 'content',
      title: 'Main Content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The primary text for the about page.'
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'stats',
      title: 'Stats & Achievements',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value (e.g. 15+)', type: 'string' },
            { name: 'label', title: 'Label (e.g. Years of Excellence)', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'features',
      title: 'Features / Key Pillars',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }
          ]
        }
      ]
    }
  ]
}
