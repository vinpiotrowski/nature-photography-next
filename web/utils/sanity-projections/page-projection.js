import contentBlocksProjection from './content-blocks-projection'
import iconGroupProjection from './icon-group-projection'
import imageProjection from './image-projection'
import pageHeadingProjection from './page-heading-projection'
import photographProjection from './photograph-projection'

const pageProjection = `{
    _type,
    (_type == 'contentBlockPage') => {
        title,
        description,
        backgroundImage ${imageProjection},
        pageHeading ${pageHeadingProjection},
        contentBlocks[] -> ${contentBlocksProjection}
    },
    (_type == 'gallery') => {
        iconGroup[] ${iconGroupProjection},
        title,
        subtitle,
        shortDescription,
        longDescription,
        backgroundImage ${imageProjection},
        'photographs': *[ _type == 'photograph' && references(^._id) ] ${photographProjection} | order(orderRank)
    },
}`

export default pageProjection