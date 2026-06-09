'use client'; // This is a client component
import Button from '../atoms/button'
import Container from '../atoms/container'
import Heading from '../atoms/heading'
import Image from '../atoms/image'
import Paragraph from '../atoms/paragraph'
import { SlideInAnimation } from '../atoms/animations';

const FeaturedArticle = ({featuredArticleContent, className}) => {

    const {headline, intro, article, image} = featuredArticleContent

    const IMAGE_SIZE_STEPS = [
        { w: 640, h: 640 },
        { w: 768, h: 768 },
        { w: 1024, h: 0 },
        { w: 1280, h: 0 },
        { w: 1536, h: 0 },
        { w: 1920, h: 0 }
      ]

    return (
        <section data-name='featured-article' className='bg-white py-3 relative z-1'>
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
                    <SlideInAnimation>
                        <Image
                            containerClassName=''
                            imageContent={image} 
                            alt={''}
                            sizeSteps={IMAGE_SIZE_STEPS} 
                            />
                    </SlideInAnimation>

                    <SlideInAnimation
                        className='bg-np-neutral-darkest bottom-0 flex flex-col gap-3 items-center justify-center p-7 -mt-3 text-np-neutral-light text-center w-full
                            lg:max-w-prose lg:absolute lg:-bottom-14 lg:left-10 lg:ml-10 lg:p-10'>
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
                    </SlideInAnimation>
                </div>
            </Container>
        </section>
    )
}

export default FeaturedArticle