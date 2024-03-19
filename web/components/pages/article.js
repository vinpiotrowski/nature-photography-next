import Container from '../atoms/container'
import ContentBlocks from '../organisms/content-blocks'

const Article = ({articleContent}) => {

    const {contentBlocks} = articleContent

    return (
        <Container>
            {contentBlocks && (
                <ContentBlocks contentBlocksContent={contentBlocks} />
            )}
        </Container>
    )
}

export default Article