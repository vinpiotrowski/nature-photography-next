import Button from '../atoms/button'
import Container from '../atoms/container'
import Heading from '../atoms/heading'
import IconGroup from '../molecules/icon-group'
import Image from '../atoms/image'
import Paragraph from '../atoms/paragraph'

const GalleryCard = ({galleryCardContent}) => {
    const {variant, textPlacement, image, gallery} = galleryCardContent

    const HALF_IMAGE_SIZE_STEPS = [
        { w: 640, h: 640 },
        { w: 768, h: 768 },
        { w: 1024, h: 1536 }, // 2:3 aspect ratio
        { w: 1280, h: 1920 }
      ]

    const linkContent = {internalRef: gallery?.slug?.current, text: 'View Gallery', variant: 'internal'}
    const flexDirection = textPlacement == 'left' ? 'md:flex-row-reverse' : 'md:flex-row'

    return (
        <section data-name='galleryCard' className='bg-white -mt-1 py-3 relative z-1'>
            <Container className={`flex flex-col gap-7 items-center ${flexDirection} md:gap-20 md:-mt-20`}>
                <div className='basis-1/2 max-w-96'>
                    {Image && 
                        <Image
                            alt={''}
                            imageContent={image}
                            sizeSteps={HALF_IMAGE_SIZE_STEPS}
                        />
                    }
                </div>
                <div className='basis-1/2 flex flex-col gap-5 items-center justify-center max-w-prose text-center md:items-start md:gap-7 md:text-left'>
                    <IconGroup iconGroupContent={gallery?.iconGroup} />
                    <Heading variant='h2' className='uppercase'>
                        {gallery?.title}
                    </Heading>
                    <Paragraph>
                        {gallery?.shortDescription}
                    </Paragraph>
                    <Button linkContent={linkContent} buttonVariant='cta' />
                </div>
            </Container>
       </section>
    )
}

export default GalleryCard