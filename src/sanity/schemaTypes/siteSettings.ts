// Sanity schema: Site Settings
const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'clinicName', title: 'Clinic Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    { name: 'phone', title: 'Phone Number', type: 'string' },
    { name: 'secondaryPhone', title: 'Secondary Phone Number', type: 'string', description: 'Optional second contact number' },
    { name: 'whatsapp', title: 'WhatsApp Number', type: 'string', description: 'Include country code, e.g. 919876543210' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'instagram', title: 'Instagram Link', type: 'url', description: 'Full URL to Instagram profile' },
    { name: 'address', title: 'Address', type: 'text' },
    { name: 'workingHours', title: 'Working Hours', type: 'string', description: 'e.g. Mon–Sat: 9AM–7PM' },
    { name: 'heroHeading', title: 'Hero Heading', type: 'string' },
    { name: 'heroSubheading', title: 'Hero Subheading', type: 'text' },
    { name: 'heroImage', title: 'Hero Image (Legacy)', type: 'image', options: { hotspot: true } },
    { 
      name: 'heroImages', 
      title: 'Hero Images (Slider)', 
      type: 'array', 
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Upload multiple images here to create a background slider.'
    },
    {
      name: 'googleMapsEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'text',
      rows: 3,
      description: 'Paste your Google Maps embed link here. You can paste the whole <iframe> tag or just the link (starting with https://www.google.com/maps/embed...).'
    },
  ],
}

export default siteSettings
