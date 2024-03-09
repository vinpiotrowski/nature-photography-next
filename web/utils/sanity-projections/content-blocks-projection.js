import calloutProjection from './callout-projection'
import columnedContentProjection from './columned-content-projection'
import featuredArticleProjection from './featured-article-projection'
import featuredPhotographsProjection from './featured-photographs-projection'
import fiftyFiftyProjection from './fifty-fifty-projection'
import featuredGalleryProjection from './featured-gallery-projection'

const contentBlocksProjection = `{
    _id,
    _type,
    _type == 'callout' => ${calloutProjection},
    _type == 'columnedContent' => ${columnedContentProjection},
    _type == 'featuredArticle' => ${featuredArticleProjection},
    _type == 'featuredPhotographs' => ${featuredPhotographsProjection},
    _type == 'fiftyFifty' => ${fiftyFiftyProjection},
    _type == 'galleryCard' => ${featuredGalleryProjection}
}`

export default contentBlocksProjection