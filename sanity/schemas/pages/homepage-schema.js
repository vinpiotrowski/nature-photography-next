import { HiOutlineHomeModern } from 'react-icons/hi2'

const homepage = {
    name: 'homepage',
    title: 'Homepage',
    icon: HiOutlineHomeModern,
    preview: {
      select: {
        title: 'title'
      },
      prepare(selection) {
        const {title} = selection
        return {
          title: title,
          subtitle: 'Homepage',
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
        name: 'eyebrowText',
        title: 'Eyebrow Text',
        type: 'string'
      },
      {
        name: 'headline',
        title: 'Headline',
        type: 'string'
      },

    ]
}

export default homepage