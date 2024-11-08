import contentBlocksProjection from './content-blocks-projection'
import iconGroupProjection from './icon-group-projection'
import imageProjection from './image-projection'
import pageHeadingProjection from './page-heading-projection'
import photographProjection from './photograph-projection'

const pageProjection = `{
    _id,
    _type,
    (_type == 'article') => {
        title,
        description,
        contentBlocks[] -> ${contentBlocksProjection}
    },
    (_type == 'articleListing') => {
        iconGroup[] ${iconGroupProjection},
        title,
        description,
        backgroundImage ${imageProjection},
        pageHeading ${pageHeadingProjection},
        'articles': *[_type == 'article'] {title, description, slug, contentBlocks[] -> ${contentBlocksProjection}, orderRank} | order(orderRank)
    },
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
        'photographs': *[ _type == 'photograph' && references(^._id) ] ${photographProjection} | order(orderRank),
        contentBlocks[] -> ${contentBlocksProjection}
    },
}`

export default pageProjection