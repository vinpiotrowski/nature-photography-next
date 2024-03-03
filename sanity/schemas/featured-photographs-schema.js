import { IoRibbonOutline } from 'react-icons/io5'

const featuredPhotographs = {
    name: 'featuredPhotographs',
    title: 'Featured Photographs',
    icon: IoRibbonOutline,
    type: 'document',
    preview: {
        select: {
            title: 'headline'
        },
        prepare(selection) {
            const {title} = selection
            return {
                title: title,
                subtitle: 'Featured Photographs'
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
            name: 'photographs',
            title: 'Photographs',
            type: 'array',
            of: [{
              type: 'reference',
              to: [
                {type: 'photograph'}
              ]
            }],
            validation: Rule => Rule.length(3)
        }
    ]
}

export default featuredPhotographs