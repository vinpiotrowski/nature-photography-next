import { RiPagesLine } from 'react-icons/ri'

const page = {
    name: 'page',
    title: 'Page',
    icon: RiPagesLine,
    preview: {
      select: {
        title: 'title'
      },
      prepare(selection) {
        const {title} = selection
        return {
          title: title,
          subtitle: 'Page',
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
        description: 'Homepage must have a value of \'/\'',
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
      }
    ]
}

export default page