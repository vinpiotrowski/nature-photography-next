import imageProjection from './image-projection'

const photographProjection = `{
    title,
    shortDescription,
    longDescription,
    image ${imageProjection},
    location,
    orderRank
}`

export default photographProjection