import Container from '../atoms/container'
import ContentBlocks from '../organisms/content-blocks'

const Article = ({articleContent}) => {

    const {contentBlocks} = articleContent

    return (
        <Container className='px-2 sm:px-7 xl:px-14'>
            {contentBlocks && (
                <ContentBlocks contentBlocksContent={contentBlocks} />
            )}
        </Container>
    )
}

export default Article