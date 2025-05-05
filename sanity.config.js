import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import{seoMetaFields} from "sanity-plugin-seo"

export default defineConfig({
  name: import.meta.env.SANITY_STUDIO_NAME,
  title: import.meta.env.SANITY_STUDIO_TITLE,

  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,

  plugins: [structureTool(), visionTool(),seoMetaFields()],

  schema: {
    types: schemaTypes,
  },
})
