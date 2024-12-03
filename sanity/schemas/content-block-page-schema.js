import { IoDocumentOutline } from 'react-icons/io5'

const contentBlockPage = {
    name: 'contentBlockPage',
    title: 'Content Block Page',
    icon: IoDocumentOutline,
    preview: {
      select: {
        title: 'title'
      },
      prepare(selection) {
        const {title} = selection
        return {
          title: title,
          subtitle: 'Content Block Page',
        }
      }
    },
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'  
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'  
      },  
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'Include leading slash eg. /about',
      },
      {
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'pageHeading',
        title: 'Page Heading',
        type: 'pageHeading'
      },
      {
        name: 'contentBlocks',
        title: 'Content Blocks',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'callout'},
              {type: 'columnedContent'},
              {type: 'featuredArticle'},
              {type: 'featuredPhotographs'},
              {type: 'fiftyFifty'},
              {type: 'galleryCard'},
              {type: 'slideshow'}
            ]
          }
        ]
      }
    ]
}

export default contentBlockPage