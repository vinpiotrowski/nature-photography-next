import FeaturedPhotographs from './featured-photographs'
import GalleryCard from './gallery-card'

const ContentBlocks = ({contentBlocksContent}) => {
    return contentBlocksContent.map((contentBlock, index) => {
        switch(contentBlock?._type) {
            case 'featuredPhotographs':
                return (
                    <FeaturedPhotographs featuredPhotographsContent={contentBlock} key={index} />
                )
            case 'galleryCard':
                return (
                    <GalleryCard galleryCardContent={contentBlock} key={index} />
                )
        }
    })
}

export default ContentBlocks