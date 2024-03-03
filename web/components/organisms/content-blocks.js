import GalleryCard from './gallery-card'

const ContentBlocks = ({contentBlocksContent}) => {
    return contentBlocksContent.map((contentBlock, index) => {
        switch(contentBlock?._type) {
            case 'galleryCard':
                return (
                    <GalleryCard galleryCardContent={contentBlock} key={index} />
                )
        }
    })
}

export default ContentBlocks