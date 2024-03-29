import { BsPostcard } from 'react-icons/bs'

const fiftyFifty = {
    name: 'fiftyFifty',
    title: 'Fifty Fifty',
    icon: BsPostcard,
    type: 'document',
    preview: {
        select: {
            title: 'entryTitle'
        },
        prepare(selection) {
            const {title} = selection
            return {
                title: title,
                subtitle: 'Fifty Fifty'
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
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },

    ]
}

export default fiftyFifty