import { MdOutlineCameraRoll } from 'react-icons/md'

const slideshow = {
    name: 'slideshow',
    title: 'Slideshow',
    icon: MdOutlineCameraRoll,
    type: 'document',
    preview: {
        select: {
            title: 'entryTitle'
        },
        prepare(selection) {
            const {title} = selection
            return {
                title: title,
                subtitle: 'Slideshow'
            }
        }
    },
    fields: [
        {
            name: 'entryTitle',
            title: 'Entry Title',
            description: 'For CMS use only',
            type: 'string'
        },
        {
            name: 'useNoneBackground',
            title: 'Use Transparent Background?',
            type: 'boolean'
        },
        {
            name: 'eliminateTopPadding',
            title: 'Eliminate Top Padding?',
            type: 'boolean'
        },
        {
            name: 'eliminateBottomPadding',
            title: 'Eliminate Bottom Padding?',
            type: 'boolean'
        },
        {
            name: 'textPlacement',
            title: 'Text Placement',
            type: 'string',
            options: {
            list: [
                {title: 'Left', value: 'left'},
                {title: 'Right', value: 'right'},
            ], 
            layout: 'radio'
            }
        },
        {
            name: 'headline',
            title: 'Headline',
            type: 'string'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'richText'
        },
        {
            name: 'frameImage',
            title: 'Frame Image',
            description: 'A very specific image to be used as the camera frame',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'images',
            title: 'Slideshow Images',
            type: 'array',
            of: [
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                    options: {
                        hotspot: true,
                    },
                },
            ],
            options: {
                layout: 'grid',
            }
        },
    ]
}

export default slideshow