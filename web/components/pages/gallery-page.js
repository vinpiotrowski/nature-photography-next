'use client'; // This is a client component
import React, { useEffect, useState } from 'react'
import Container from '../atoms/container'
import ContentBlocks from '../organisms/content-blocks';
import Heading from '../atoms/heading'
import Image from '../atoms/image'
import Modal from '../molecules/modal'
import PageHeading from '../organisms/page-heading'
import Paragraph from '../atoms/paragraph'

const Gallery = ({galleryContent}) => {

    const {backgroundImage, iconGroup, longDescription, photographs, subtitle, title, contentBlocks} = galleryContent

    const BACKGROUND_IMAGE_SIZE_STEPS = [
        { w: 640, h: 854 },// 3:4
        { w: 768, h: 1024 },
        { w: 1024, h: 0 },
        { w: 1280, h: 0 },
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
    }, [photographs]);

    const handleClick = (image, index) => {
        setSelectedImage(image),
        setSelectedIndex(index)
        setTimeout( () => document.getElementById('photo-modal')?.classList?.remove('opacity-0'), 250)
    }

    const handleCloseModal = () => {
        document.getElementById('photo-modal')?.classList?.add('opacity-0')
        setTimeout( () => {
            setSelectedImage(null),
            setSelectedIndex(0)
        }, 500)
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

    return (
        <>
            <Image
                alt={''}
                className={'absolute max-w-100 opacity-75 top-0 z-0 md:opacity-90'}
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

            <section data-name='gallery' className='bg-white -mt-1 relative z-1'>
                <Container className='flex flex-col gap-7 items-center justify-center md:gap-20'>
                
                    <div className='flex flex-col gap-5 max-w-screen-md text-center md:gap-7'>
                        <Heading className='uppercase' variant='h2' styleAs='h3'>
                            {subtitle}
                        </Heading>
                        <Paragraph>
                            {longDescription}
                        </Paragraph>
                    </div>

                    <div className='flex flex-wrap justify-start w-full'>
                        {photographs.map((photo, index) => {
                            return (
                                <div className='basis-1/3 flex-shrink p-2 sm:basis-1/4 lg:basis-1/6' key={index}>
                                    <button onClick={() => handleClick(photo, index)} className='np-transition hover:shadow-[0.5rem_0.5rem_0_rgba(255,0,108,1)]'>
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
                    
                </Container>
                
                {contentBlocks && (
                    <ContentBlocks contentBlocksContent={contentBlocks} />
                )}
            </section>
        </>
    )
}

export default Gallery