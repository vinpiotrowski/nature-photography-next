import featuredPhotographsProjection from './featured-photographs-projection'
import galleryCardProjection from './gallery-card-projection'

const contentBlocksProjection = `{
    _id,
    _type,
    _type == 'featuredPhotographs' => ${featuredPhotographsProjection},
    _type == 'galleryCard' => ${galleryCardProjection}
}`

export default contentBlocksProjection