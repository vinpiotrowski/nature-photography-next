import Button from '../atoms/button'
import Container from '../atoms/container'
import { FadeInWhenVisible } from '../atoms/animations'
import Heading from '../atoms/heading'
import Image from '../atoms/image'
import Paragraph from '../atoms/paragraph'

const FeaturedArticle = ({featuredArticleContent, className}) => {

    const {headline, intro, article, image} = featuredArticleContent

    const IMAGE_SIZE_STEPS = [
        { w: 360, h: 360 }, 
        { w: 414, h: 414 },
        { w: 640, h: 640 },
        { w: 768, h: 768 },
        { w: 1024, h: 0 },
        { w: 1280, h: 0 },
        { w: 1536, h: 0 },
        { w: 1920, h: 0 }
      ]

    return (
        <section data-name='featured-article' className='bg-white py-3 relative z-1'>
            <FadeInWhenVisible>
            <Container className='flex flex-col gap-7 items-center justify-center relative'>
                <div className='np-heading flex flex-col gap-5 max-w-screen-md text-center md:gap-7'>
                    <Heading className='uppercase' variant='h2' styleAs='h3'>
                        {headline}
                    </Heading>
                    <Paragraph variant='chonky'>
                        {intro}
                    </Paragraph>
                </div>
                <div className='flex flex-col justify-center items-center relative lg:flex-row'>
                    <Image
                        className=''
                        imageContent={image} 
                        alt={''}
                        sizeSteps={IMAGE_SIZE_STEPS} 
                    />
                    <div className='bg-np-grey-dark bottom-0 left-0 flex flex-col gap-3 items-center justify-center p-7 text-np-grey-light text-center w-full
                        lg:max-w-prose lg:p-10 lg:absolute lg:translate-x-[7vw] lg:translate-y-7'>
                            {false && (
                                <Paragraph className=''>
                                    <strong>{article?.date}</strong>
                                </Paragraph>
                            )}
                            <Heading variant='h3' styleAs='h4' className=''>
                                {article?.title}
                            </Heading>
                            <Paragraph className=''>
                                {article?.description}
                            </Paragraph>
                            <Button linkContent={{
                                internalRef: article?.slug?.current,
                                text: 'Read Article',
                                variant: 'internal'
                            }} />
                    </div>
                </div>
            </Container>
            </FadeInWhenVisible>
        </section>
    )
}

export default FeaturedArticle