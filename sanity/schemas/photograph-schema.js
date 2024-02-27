import { orderRankField } from '@sanity/orderable-document-list'

const photograph = {
    name: 'photograph',
    title: 'Photograph',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
          name: 'shortDescription',
          title: 'Short Description',
          type: 'text',
      },
      {
        name: 'longDescription',
        title: 'Long Description',
        type: 'text',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        title: 'Gallery',
        name: 'gallery',
        type: 'reference',
        to: [{type: 'gallery'}]
      },
      orderRankField({
        type: 'photograph',
        hidden: true
      })
    ],
  }
  
  export default photograph