import { IoDocumentTextOutline } from 'react-icons/io5'

const article = {
    name: 'article',
    title: 'Article',
    icon: IoDocumentTextOutline,
    preview: {
      select: {
        title: 'title'
      },
      prepare(selection) {
        const {title} = selection
        return {
          title: title,
          subtitle: 'Article Page',
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
        name: 'contentBlocks',
        title: 'Content Blocks',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'columnedContent'},
            ]
          }
        ]
      }
    ]
}

export default article