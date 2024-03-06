import imageProjection from './image-projection'

const calloutProjection = `{
    _type,
    headline,
    backgroundImage ${imageProjection},
    linkText,
    link -> {
        slug,
    },
}`

export default calloutProjection