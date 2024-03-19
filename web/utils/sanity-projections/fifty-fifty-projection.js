import imageProjection from './image-projection'
import richTextProjection from './rich-text-projection'

const fiftyFiftyProjection = `{
    _type,
    useNoneBackground,
    eliminateTopPadding,
    eliminateBottomPadding,
    textPlacement,
    headline,
    body ${richTextProjection},
    image ${imageProjection},
}`

export default fiftyFiftyProjection