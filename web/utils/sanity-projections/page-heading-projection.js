import iconGroupProjection from './icon-group-projection'
import linkProjection from './link-projection'

const pageHeadingProjection = `{
    headline,
    iconGroup[] ${iconGroupProjection},
    intro,
    link ${linkProjection},
    variant
}`

export default pageHeadingProjection