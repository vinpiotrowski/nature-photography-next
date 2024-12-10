import Container from '../atoms/container'
import ContentBlocks from '../organisms/content-blocks'

const Article = ({articleContent}) => {

    const {contentBlocks} = articleContent

    return (
        <Container className='px-2 py-0 md:px-7 md:py-5 lg:px-14 lg:py-5'>
            {contentBlocks && (
                <ContentBlocks contentBlocksContent={contentBlocks} />
            )}
        </Container>
    )
}

export default Article