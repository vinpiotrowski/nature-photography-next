import richTextProjection from './rich-text-projection'

const columnedContentProjection = `{
    _type,
    variant,
    useNoneBackground,
    eliminateTopPadding,
    eliminateBottomPadding,
    columnOneHorizontalAlign,
    columnOneVerticalAlign,
    columnOneBody ${richTextProjection},
    columnTwoHorizontalAlign,
    columnTwoVerticalAlign,
    columnTwoBody ${richTextProjection},
    columnThreeHorizontalAlign,
    columnThreeVerticalAlign,
    columnThreeBody ${richTextProjection},
    columnFourHorizontalAlign,
    columnFourVerticalAlign,
    columnFourBody ${richTextProjection},
}`

export default columnedContentProjection