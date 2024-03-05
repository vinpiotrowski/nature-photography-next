import FiftyFifty from '../molecules/fifty-fifty'
import ColumnedContent from './columned-content'
import FeaturedPhotographs from './featured-photographs'
import GalleryCard from './gallery-card'

const ContentBlocks = ({contentBlocksContent}) => {
    return contentBlocksContent.map((contentBlock, index) => {
        switch(contentBlock?._type) {
            case 'columnedContent':
                return (
                    <ColumnedContent columnedContentContent={contentBlock} key={contentBlock._id} />
                )
            case 'featuredPhotographs':
                return (
                    <FeaturedPhotographs featuredPhotographsContent={contentBlock} key={index} />
                )
            case 'fiftyFifty':
                return (
                    <FiftyFifty fiftyFiftyContent={contentBlock} key={contentBlock._id} />
                )
            case 'galleryCard':
                return (
                    <GalleryCard galleryCardContent={contentBlock} key={index} />
                )
        }
    })
}

export default ContentBlocks