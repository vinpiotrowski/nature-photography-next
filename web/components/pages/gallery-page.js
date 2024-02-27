import Heading from '../atoms/heading'
import Image from '../atoms/image'
import PageHeading from '../organisms/page-heading'

const Gallery = ({galleryContent}) => {

    const {backgroundImage, iconGroup, longDescription, subtitle, title,} = galleryContent

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
                pageHeadingContent={{
                    headline: title,
                    iconGroup: iconGroup,
                    variant: 'pointy'
                }}
            />

            <section data-name='gallery' className='bg-white flex justify-center -mt-1 p-7 relative z-1 '>
                <div className='container flex flex-col gap-3 max-w-xl text-center lg:gap-7 lg:max-w-3xl'>
                    <Heading className='uppercase' variant='h2'>
                        {subtitle}
                    </Heading>
                    <p>{longDescription}</p>
                </div>

            </section>
        </>
    )
}

export default Gallery