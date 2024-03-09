import Callout from '../molecules/callout'
import ColumnedContent from './columned-content'
import FeaturedArticle from './featured-article'
import FeaturedPhotographs from './featured-photographs'
import FiftyFifty from '../molecules/fifty-fifty'
import FeaturedGallery from './featured-gallery'

const ContentBlocks = ({contentBlocksContent}) => {
    return contentBlocksContent.map((contentBlock, index) => {
        switch(contentBlock?._type) {
            case 'callout':
                return (
                    <Callout calloutContent={contentBlock} key={contentBlock._id} />
                )
            case 'columnedContent':
                return (
                    <ColumnedContent columnedContentContent={contentBlock} key={contentBlock._id} />
                )
            case 'featuredArticle':
                return (
                    <FeaturedArticle featuredArticleContent={contentBlock} key={contentBlock._id} />
                )
            case 'featuredPhotographs':
                return (
                    <FeaturedPhotographs featuredPhotographsContent={contentBlock} key={contentBlock._id} />
                )
            case 'fiftyFifty':
                return (
                    <FiftyFifty fiftyFiftyContent={contentBlock} key={contentBlock._id} />
                )
            case 'galleryCard':
                return (
                    <FeaturedGallery featuredGalleryContent={contentBlock} position={index} key={contentBlock._id} />
                )
        }
    })
}

export default ContentBlocks