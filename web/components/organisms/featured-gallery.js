import Button from '../atoms/button'
import Container from '../atoms/container'
import { FadeInWhenVisible } from '../atoms/animations'
import Heading from '../atoms/heading'
import IconGroup from '../molecules/icon-group'
import Image from '../atoms/image'
import Paragraph from '../atoms/paragraph'

const FeaturedGallery = ({featuredGalleryContent, position}) => {
    const {variant, textPlacement, image, gallery} = featuredGalleryContent

    const HALF_IMAGE_SIZE_STEPS = [
        { w: 360, h: 360 }, 
        { w: 414, h: 414 },
        { w: 640, h: 640 },
        { w: 768, h: 768 },
        { w: 1024, h: 1536 }, // 2:3 aspect ratio
        { w: 1280, h: 1920 }
      ]

      const FULL_IMAGE_SIZE_STEPS = [
        { w: 360, h: 360 }, 
        { w: 414, h: 414 },
        { w: 640, h: 640 },
        { w: 768, h: 768 },
        { w: 1024, h: 0 },
        { w: 1280, h: 0 },
        { w: 1536, h: 0 },
        { w: 1920, h: 0 }
      ]

    const linkContent = {internalRef: gallery?.slug?.current, text: 'View Gallery', variant: 'internal'}
    const flexDirection = textPlacement == 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
    const textPanel = textPlacement == 'left' ? 'lg:translate-x-[7vw]' : 'lg:left-auto lg:right-0 lg:-translate-x-[7vw]'
    const pullUp = position == 0 ? '-mt-24 lg:-mt-32' : ''

    if(variant == 'half') {
        return (
            <section data-name='featured-gallery' className='bg-white -mt-1 py-3 relative z-1'>
                <FadeInWhenVisible>
                <Container className={`flex flex-col gap-3 items-center ${flexDirection} ${pullUp} md:gap-5 lg:gap-14 lg:px-24 xl:px-40`}>
                    <div className='basis-1/2'>
                        {Image && 
                            <Image
                                alt={''}
                                className='px-7 md:px-0'
                                imageContent={image}
                                sizeSteps={HALF_IMAGE_SIZE_STEPS}
                            />
                        }
                    </div>
                    <div className='basis-1/2 flex flex-col gap-3 items-center justify-center  
                            p-3 text-center lg:items-start md:gap-5 lg:text-left '>
                        <IconGroup iconGroupContent={gallery?.iconGroup} />
                        <Heading variant='h2' styleAs='h3' className='uppercase'>
                            {gallery?.title}
                        </Heading>
                        <Paragraph>
                            {gallery?.shortDescription}
                        </Paragraph>
                        <Button linkContent={linkContent} buttonVariant='cta' />
                    </div>
                </Container>
                </FadeInWhenVisible>
        </section>
        )
    }

    return (
        <section data-name='featured-gallery' className='bg-white py-3 pb-14 relative z-1 last:pb-28'>
            <FadeInWhenVisible>
            <Container className='flex flex-col gap-3 items-center justify-center md:gap-5'>
                <div className='flex flex-col justify-center items-center relative lg:flex-row'>
                    {Image && (
                        <Image
                            className='px-7 md:px-0'
                            imageContent={image} 
                            alt={''}
                            sizeSteps={FULL_IMAGE_SIZE_STEPS} 
                        />
                    )}
                    <div className={`bottom-0 left-0 flex flex-col gap-3 items-center justify-center max-w-prose 
                        p-3 text-center w-full lg:np-panel lg:items-start lg:items-start lg:text-left
                        lg:absolute lg:py-10 lg:px-14 lg:translate-y-7 ${textPanel}`}>
                            <IconGroup iconGroupContent={gallery?.iconGroup} className='np-light-text' />
                            <Heading variant='h2' styleAs='h3' className='np-light-text uppercase'>
                                {gallery?.title}
                            </Heading>
                            <Paragraph className='np-light-text'>
                                {gallery?.shortDescription}
                            </Paragraph>
                            <Button linkContent={linkContent} buttonVariant='cta' />
                    </div>
                </div>
            </Container>
            </FadeInWhenVisible>
        </section>
    )
}

export default FeaturedGallery