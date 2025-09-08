import {defineType, defineField} from 'sanity'

export const tableSchema = defineType({
  name: 'table',
  type: 'document',
  title: 'Table',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'columns',
      type: 'array',
      title: 'Columns',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'rows',
      type: 'array',
      title: 'Rows',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'cells',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    }),
  ],
})
