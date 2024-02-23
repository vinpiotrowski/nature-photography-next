import imageProjection from './image-projection'
import pageHeadingProjection from './page-heading-projection'

const pageProjection = `{
    _type,
    backgroundImage ${imageProjection},
    pageHeading ${pageHeadingProjection}
}`

export default pageProjection