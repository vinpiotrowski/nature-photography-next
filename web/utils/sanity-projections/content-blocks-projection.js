import galleryCardProjection from './gallery-card-projection'

const contentBlocksProjection = `{
    _id,
    _type,
    _type == 'galleryCard' => ${galleryCardProjection}
}`

export default contentBlocksProjection