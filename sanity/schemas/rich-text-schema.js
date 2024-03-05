import { RxDividerHorizontal } from 'react-icons/rx'
import { IconPicker } from '../components/icon-picker'
import { IconMediaPreview } from '../components/icon-media-preview'

const richText = {
    name: 'richText',
    type: 'array',
    title: 'Rich Text',
    of: [
        {
            type: 'block',
            styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'Heading 1', value: 'h1'},
                {title: 'Heading 2', value: 'h2'},
                {title: 'Heading 3', value: 'h3'},
                {title: 'Heading 4', value: 'h4'},
                {title: 'Quote', value: 'blockquote'},
            ],
            marks: {
                decorators: [
                    {title: 'Strong', value: 'strong'},
                    {title: 'Emphasis', value: 'em'}

                ],
            },
        },
        {
            name: 'divider',
            title: 'Divider',
            type: 'object',
            icon: RxDividerHorizontal,
            fields: [
                {
                    name: 'style',
                    title: 'Style',
                    type: 'string',
                    options: {
                        list: [
                            {title: 'Horizontal', value: 'horizontal'}
                        ]
                    },
                    initialValue: 'horizontal'
                }
            ]
        },
        {
            type: 'image',
            options: {
                hostspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                }
            ]
        },
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
  
        },
    ]
}

export default richText