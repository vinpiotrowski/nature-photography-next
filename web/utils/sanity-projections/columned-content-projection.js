import richTextProjection from './rich-text-projection'

const columnedContentProjection = `{
    _type,
    variant,
    columnOneVerticalAlign,
    columnOneBody ${richTextProjection},
    columnTwoVerticalAlign,
    columnTwoBody ${richTextProjection},
    columnThreeVerticalAlign,
    columnThreeBody ${richTextProjection},
    columnFourVerticalAlign,
    columnFourBody ${richTextProjection},
}`

export default columnedContentProjection