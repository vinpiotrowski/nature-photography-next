import calloutProjection from './callout-projection'
import columnedContentProjection from './columned-content-projection'
import featuredPhotographsProjection from './featured-photographs-projection'
import fiftyFiftyProjection from './fifty-fifty-projection'
import galleryCardProjection from './gallery-card-projection'

const contentBlocksProjection = `{
    _id,
    _type,
    _type == 'callout' => ${calloutProjection},
    _type == 'columnedContent' => ${columnedContentProjection},
    _type == 'featuredPhotographs' => ${featuredPhotographsProjection},
    _type == 'fiftyFifty' => ${fiftyFiftyProjection},
    _type == 'galleryCard' => ${galleryCardProjection}
}`

export default contentBlocksProjection