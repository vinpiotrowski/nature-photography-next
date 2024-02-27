import Image from '../atoms/image'
import PageHeading from '../organisms/page-heading'

const ContentBlockPage = ({contentBlockPageContent}) => {

    const {backgroundImage, pageHeading} = contentBlockPageContent

    const BACKGROUND_IMAGE_SIZE_STEPS = [
        { w: 360, h: 480 }, // 3:4
        { w: 414, h: 552 },
        { w: 768, h: 1024 },
        { w: 1366, h: 0 }, // honor aspect ratio
        { w: 1536, h: 0 },
        { w: 1920, h: 0 }
      ]

    return (
        <>
            <Image
                alt={''}
                className={'absolute top-0 z-0'}
                imageContent={backgroundImage}
                sizeSteps={BACKGROUND_IMAGE_SIZE_STEPS}
            />

            <PageHeading
                pageHeadingContent={pageHeading}
            />
        </>
    )
}

export default ContentBlockPage