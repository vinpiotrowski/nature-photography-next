import photographProjection from './photograph-projection'

const featuredPhotographsProjection = `{
    _id,
    _type,
    headline,
    intro,
    photographs[] -> ${photographProjection}
}`

export default featuredPhotographsProjection