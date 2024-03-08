import { IoImagesOutline } from 'react-icons/io5'
import { IconPicker } from '../components/icon-picker'
import { IconMediaPreview } from '../components/icon-media-preview'

const gallery = {
    name: 'gallery',
    title: 'Gallery',
    icon: IoImagesOutline,
    type: 'document',
    preview: {
        select: {
          title: 'slug'
        },
        prepare(selection) {
          const {title} = selection
          return {
            title: title?.current,
            subtitle: 'Gallery',
          }
        }
    },
    fields: [
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'Include leading slash eg. /about',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string'
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
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image',
        options: {
          hotspot: true,
        },
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
              {type: 'galleryCard'}
            ]
          }
        ]
      }
    ],
  }
  
  export default gallery