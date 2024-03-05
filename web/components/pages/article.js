import ContentBlocks from '../organisms/content-blocks'

const Article = ({articleContent}) => {

    const {contentBlocks} = articleContent

    return (
        <>
            {contentBlocks && (
                <ContentBlocks contentBlocksContent={contentBlocks} />
            )

            }
        </>
    )
}

export default Article