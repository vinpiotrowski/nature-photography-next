import imageProjection from './image-projection'
import richTextProjection from './rich-text-projection'

const slideshowProjection = `{
    _type,
    useNoneBackground,
    eliminateTopPadding,
    eliminateBottomPadding,
    textPlacement,
    headline,
    body ${richTextProjection},
    frameImage ${imageProjection},
    images[] ${imageProjection},
}`

export default slideshowProjection