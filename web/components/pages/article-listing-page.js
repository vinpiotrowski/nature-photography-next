import Article from './article'
import Image from '../atoms/image'
import PageHeading from '../organisms/page-heading'

const ArticleListingPage = ({articleListingPageContent}) => {

    const {backgroundImage, articles, pageHeading} = articleListingPageContent

    const BACKGROUND_IMAGE_SIZE_STEPS = [
        { w: 640, h: 854 },// 3:4
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
                className={'absolute max-w-100 opacity-65 top-0 w-full z-0 md:opacity-85'}
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
                    </article>
                )
            })} 

        </>
    )
}

export default ArticleListingPage