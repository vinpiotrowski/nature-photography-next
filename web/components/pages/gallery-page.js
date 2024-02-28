import Heading from '../atoms/heading'
import Image from '../atoms/image'
import PageHeading from '../organisms/page-heading'

const Gallery = ({galleryContent}) => {

    const {backgroundImage, iconGroup, longDescription, photographs, subtitle, title,} = galleryContent

    const BACKGROUND_IMAGE_SIZE_STEPS = [
        { w: 360, h: 480 }, // 3:4
        { w: 414, h: 552 },
        { w: 768, h: 1024 },
        { w: 1366, h: 0 }, // honor aspect ratio
        { w: 1536, h: 0 },
        { w: 1920, h: 0 }
      ]

    const THUMBNAIL_SIZE_STEPS = [
        { w: 180, h: 180 }, 
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

            <section data-name='gallery' className='bg-white flex flex-col gap-7 items-center justify-center -mt-1 p-7 relative z-1 lg:gap-14 lg:p-14'>
                <div className='container flex flex-col gap-3 max-w-prose text-center lg:gap-7'>
                    <Heading className='uppercase' variant='h2'>
                        {subtitle}
                    </Heading>
                    <p>{longDescription}</p>
                </div>

                <div className='container flex flex-wrap justify-start'>
                    {photographs.map((photo, index) => {
                        return (
                            <div className='basis-1/3 flex-shrink p-3 sm:basis-1/4 lg:basis-1/6'>
                                <Image
                                    alt={''}
                                    imageContent={photo?.image}
                                    key={index}
                                    sizeSteps={THUMBNAIL_SIZE_STEPS}
                                />
                            </div>

                        )
                    })}
                </div>

            </section>
        </>
    )
}

export default Gallery