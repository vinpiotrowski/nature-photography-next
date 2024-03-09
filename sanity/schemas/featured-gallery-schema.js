import { LiaImage, LiaImages } from 'react-icons/lia'

const featuredGallery = {
    name: 'galleryCard',
    title: 'Featured Gallery',
    icon: LiaImages,
    type: 'document',
    preview: {
        select: {
            gallery: 'gallery.title'
        },
        prepare(selection) {
            const {gallery} = selection
            return {
                title: gallery,
                subtitle: 'Featured Gallery'
            }
        }
    },
    fields: [
        {
            name: 'variant',
            title: 'Variant',
            type: 'string',
            options: {
            list: [
                {title: 'Full', value: 'full'},
                {title: 'Half', value: 'half'},
            ], 
            layout: 'radio'
            }
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
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'gallery',
            title: 'Gallery',
            type: 'reference',
            to: [
                {type: 'gallery'}
            ]
        }
    ]
}

export default featuredGallery