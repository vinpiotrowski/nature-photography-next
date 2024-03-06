import { BsMegaphone } from 'react-icons/bs'

const callout = {
    name: 'callout',
    title: 'Callout',
    icon: BsMegaphone,
    type: 'document',
    preview: {
        select: {
          title: 'headline'
        },
        prepare(selection) {
          const {title} = selection
          return {
            title: title,
            subtitle: 'Callout',
          }
        }
    },
    fields: [
      {
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'headline',
        title: 'Headline',
        type: 'string',
      },
      {
        name: 'linkText',
        title: 'link Text',
        type: 'string'
      },
      {
        name: 'link',
        title: 'Link',
        type: 'reference',
        to: [
            {type: 'article'},
            {type: 'contentBlockPage'},
            {type: 'gallery'}
        ]
      },
    ],
  }
  
  export default callout