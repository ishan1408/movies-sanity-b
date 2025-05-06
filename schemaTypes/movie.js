import { defineField, defineType } from 'sanity'

export const movieSchema = defineType({
  name: 'movies',
  type: 'document',
  title: 'Movie',
  groups:[
    {
        name:"main",
        title:"Main",
        default:true
    },
    {
        name:"seo",
        title:"SEO",
    }
  ],
  fields: [
    defineField({
        name:"seoText",
        title:"SEO Text",
        type:"seoMetaFields",
        group:"seo"
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Movie Title',
      group:"main"
    }),
    defineField({
      name: 'director',
      type: 'string',
      title: 'Director',
      group:"main"

    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      group:"main"

    }),
    defineField({
      name: 'releaseDate',
      type: 'date',
      title: 'Release Date',
      group:"main"

    }),
    defineField({
      name: 'isFeatured',
      type: 'boolean',
      title: 'Is Featured?',
      group:"main"

    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: Rule => Rule.min(0).max(10),
      group:'main',
    }),
    defineField({
      name: 'poster',
      type: 'image',
      title: 'Poster Image',
      group:'main',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        },
      ],
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Image Gallery',
      group:"main",

      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'genre',
      type: 'array',
      title: 'Genres',
      of: [{ type: 'string' }],
      group:"main"

    }),
  ],
})
