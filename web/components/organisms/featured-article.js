import Button from '../atoms/button'
import Container from '../atoms/container'
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
            <Container className='flex flex-col gap-7 items-center justify-center py-7 md:py-20 md:gap-14'>
                <div className='np-heading flex flex-col gap-5 max-w-screen-md text-center md:gap-7'>
                    <Heading className='uppercase' variant='h2'>
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
                    <div className='np-panel bottom-0 left-0 flex flex-col gap-3 justify-center p-7 w-full
                        lg:max-w-prose lg:absolute lg:py-10 lg:px-14 lg:translate-x-[7vw] lg:translate-y-7'>
                            <Paragraph className='text-[#989898]'>
                                <strong>{article?.date}</strong>
                            </Paragraph>
                            <Heading variant='h3' className='font-bold text-white'>
                                {article?.title}
                            </Heading>
                            <Paragraph className='text-[#989898]'>
                                {article?.description}
                            </Paragraph>
                            <Button linkContent={{
                                internalRef: article?.slug?.current,
                                text: 'Read More',
                                variant: 'internal'
                            }} />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FeaturedArticle