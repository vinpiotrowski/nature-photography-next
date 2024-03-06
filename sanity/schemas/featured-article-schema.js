import { PiNewspaperClipping } from 'react-icons/pi'

const featuredArticle = {
    name: 'featuredArticle',
    title: 'Featured Article',
    icon: PiNewspaperClipping,
    type: 'document',
    preview: {
        select: {
            title: 'headline'
        },
        prepare(selection) {
            const {title} = selection
            return {
                title: title,
                subtitle: 'Featured Article'
            }
        }
    },
    fields: [
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
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'article',
            title: 'Article',
            type: 'reference',
            to: [
              {type: 'article'}
            ]
        }
    ]
}

export default featuredArticle