import imageProjection from './image-projection'

const pageProjection = `{
    _type,
    (_type == 'homepage') => {
        backgroundImage ${imageProjection},
        eyebrowText,
        headline,
    }
}`

export default pageProjection