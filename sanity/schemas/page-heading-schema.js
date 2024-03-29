import { BsCardHeading } from 'react-icons/bs'
import { IconPicker } from '../components/icon-picker'
import { IconMediaPreview } from '../components/icon-media-preview'

const pageHeading = {
    name: 'pageHeading',
    title: 'Page Heading',
    icon: BsCardHeading,
    preview: {
      select: {
        title: 'headline'
      },
      prepare(selection) {
        const {title} = selection
        return {
          title: title,
          subtitle: 'Page Heading',
        }
      }
    },
    type: 'object',
    fields: [
      {
        name: 'variant',
        title: 'Variant',
        type: 'string',
        options: {
          list: [
            {title: 'Regular', value: 'reg'},
            {title: 'Chonky', value: 'chonky'},
            {title: 'Pointy', value: 'pointy'},
            {title: 'Simple', value: 'simple'}
          ], 
          layout: 'radio'
        }
      },
      {
        name: 'iconGroup',
        title: 'Icon Group',
        type: 'array',
        of: [
          {
            name: 'icon',
            title: 'Icon Item',
            type: 'object',
            fields: [
              {
                name: 'icon',
                title: 'Icon',
                type: 'string',
                components: {
                  input: IconPicker
                }
              }
            ],
            preview: {
              select: {
                icon: 'icon'
              },
              prepare(selection) {
                const {icon} = selection
                return {
                  title: icon,
                  media: IconMediaPreview(icon)
                }
              }
            }

          }
        ]
      },
      {
        name: 'headline',
        title: 'Headline',
        type: 'string'  
      },
      {
        name: 'intro',
        title: 'Intro',
        type: 'text'  
      },
      {
        name: 'link',
        title: 'Link',
        description: 'Optional call-to-action that will appear below the intro',
        type: 'link'
      }
    ]
}

export default pageHeading