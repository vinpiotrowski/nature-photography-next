import imageProjection from './image-projection'

const photographProjection = `{
    title,
    shortdescription,
    longDescription,
    image ${imageProjection},
    location,
    orderRank
}`

export default photographProjection