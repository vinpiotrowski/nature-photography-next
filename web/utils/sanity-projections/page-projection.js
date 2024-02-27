import iconGroupProjection from './icon-group-projection'
import imageProjection from './image-projection'
import pageHeadingProjection from './page-heading-projection'

const pageProjection = `{
    _type,
    (_type == 'contentBlockPage') => {
        title,
        description,
        backgroundImage ${imageProjection},
        pageHeading ${pageHeadingProjection}
    },
    (_type == 'gallery') => {
        iconGroup[] ${iconGroupProjection},
        title,
        subtitle,
        shortDescription,
        longDescription,
        backgroundImage ${imageProjection},
    },
}`

export default pageProjection