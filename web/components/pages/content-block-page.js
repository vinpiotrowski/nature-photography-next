import ContentBlocks from '../organisms/content-blocks'
import PageHeading from '../organisms/page-heading'

const ContentBlockPage = ({contentBlockPageContent}) => {

    const {contentBlocks, pageHeading} = contentBlockPageContent

    return (
        <>
            <PageHeading
                pageHeadingContent={pageHeading}
            />
            {contentBlocks && (
                <ContentBlocks contentBlocksContent={contentBlocks} />
            )}
        </>
    )
}

export default ContentBlockPage