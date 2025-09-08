import { defineType, defineField } from 'sanity'

export const pageSchema = defineType({
  name: 'page',
  title: 'Page',  
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    }),
    defineField({ 
      name: 'table',
      title: 'Table',
      type: 'reference',
      to: [{ type: 'table' }], // 🔑 reference до документів типу "table"
    }),
  ],
});
