import imageProjection from './image-projection'

const photographProjection = `{
    title,
    shortdescription,
    longDescription,
    image ${imageProjection},
    location
}`

export default photographProjection