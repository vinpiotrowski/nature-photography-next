import Article from './article'
import Container from '../atoms/container'
import Image from '../atoms/image'
import PageHeading from '../organisms/page-heading'

const ArticleListingPage = ({articleListingPageContent}) => {

    const {backgroundImage, articles, pageHeading} = articleListingPageContent

    const BACKGROUND_IMAGE_SIZE_STEPS = [
        { w: 360, h: 480 }, // 3:4
        { w: 414, h: 552 },
        { w: 640, h: 854 },
        { w: 768, h: 1024 },
        { w: 1024, h: 0 },
        { w: 1280, h: 0 },
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

            {articles.map((article, index) => {
                return (
                    <article key={`article-${index}`}>
                        <Article articleContent={article}  />
                        <Container  className={`bg-white flex flex-col items-center`}>
                            <hr className='h-[1px]' />
                        </Container>
                    </article>
                )
            })} 

        </>
    )
}

export default ArticleListingPage