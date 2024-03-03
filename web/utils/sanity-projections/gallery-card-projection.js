import iconGroupProjection from './icon-group-projection'
import imageProjection from './image-projection'

const galleryCardProjection = `{
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

export default galleryCardProjection