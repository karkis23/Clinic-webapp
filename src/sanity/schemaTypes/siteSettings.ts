// Sanity schema: Site Settings
const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'clinicName', title: 'Clinic Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    { name: 'phone', title: 'Phone Number', type: 'string' },
    { name: 'whatsapp', title: 'WhatsApp Number', type: 'string', description: 'Include country code, e.g. 919876543210' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'address', title: 'Address', type: 'text' },
    { name: 'workingHours', title: 'Working Hours', type: 'string', description: 'e.g. Mon–Sat: 9AM–7PM' },
    { name: 'heroHeading', title: 'Hero Heading', type: 'string' },
    { name: 'heroSubheading', title: 'Hero Subheading', type: 'text' },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },
  ],
}

export default siteSettings
