import imageProjection from './image-projection'

const featuredArticleProjection = `{
    _type,
    headline,
    intro,
    image ${imageProjection},
    article -> {
        slug,
        date,
        title,
        description,
    }
}`

export default featuredArticleProjection