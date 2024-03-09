import iconGroupProjection from './icon-group-projection'
import imageProjection from './image-projection'

const featuredGalleryProjection = `{
    _type,
    variant,
    textPlacement,
    image ${imageProjection},
    gallery -> {
        slug,
        iconGroup[] ${iconGroupProjection},
        title,
        shortDescription,
    }
}`

export default featuredGalleryProjection