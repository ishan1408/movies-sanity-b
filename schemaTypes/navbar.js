import { defineField, defineType } from 'sanity';

export const navbarSchema = defineType({
  name: 'navbar',
  type: 'document',
  title: 'Navbar',
  fields: [
    defineField({
      name: 'navbarName',
      type: 'string',
      title: 'Navbar Name',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'links',
      type: 'array',
      title: 'Navigation Links',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'url', type: 'string', title: 'URL' },
          ],
        },
      ],
    }),
  ],
});
