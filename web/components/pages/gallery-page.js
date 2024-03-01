'use client'; // This is a client component
import React, { useEffect, useState } from 'react'
import Heading from '../atoms/heading'
import Image from '../atoms/image'
import Modal from '../molecules/modal'
import PageHeading from '../organisms/page-heading'
import Paragraph from '../atoms/paragraph'

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
        { w: 224, h: 224 }, 
    ]

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(photographs);
    }, []);

    const handleClick = (image, index) => {
        setSelectedImage(image),
        setSelectedIndex(index)
    }

    const handleNext = () => {
        const nextIndex =
            selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex =
            selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
        setSelectedImage(images[prevIndex]);
        setSelectedIndex(prevIndex);
    };

    const handleCloseModal = () => {
        setSelectedImage(null),
        setSelectedIndex(0)
    }

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
                <div className='flex flex-col gap-3 max-w-prose text-center lg:gap-7'>
                    <Heading className='uppercase' variant='h2'>
                        {subtitle}
                    </Heading>
                    <Paragraph>
                        {longDescription}
                    </Paragraph>
                </div>

                <div className='container flex flex-wrap justify-start'>
                    {photographs.map((photo, index) => {
                        return (
                            <div className='basis-1/3 flex-shrink p-2 sm:basis-1/4 lg:basis-1/6' key={index}>
                                <button onClick={() => handleClick(photo, index)}>
                                    <Image
                                        alt={photo?.shortDescription}
                                        imageContent={photo?.image}
                                        sizeSteps={THUMBNAIL_SIZE_STEPS}
                                    />
                                </button>

                            </div>

                        )
                    })}
                </div>

                {selectedImage && (
                    <Modal
                        images={images}
                        selectedImage={selectedImage}
                        onClose={handleCloseModal}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        selectedIndex={selectedIndex}
                    />
                )}

            </section>
        </>
    )
}

export default Gallery