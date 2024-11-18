'use client'; // This is a client component
import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Container from '../atoms/container'
import ContentBlocks from '../organisms/content-blocks';
import Heading from '../atoms/heading'
import Image from '../atoms/image'
import ModalWithCarousel from '../molecules/modal-with-carousel';
import PageHeading from '../organisms/page-heading'
import Paragraph from '../atoms/paragraph'

const Gallery = ({galleryContent}) => {

    const {_id, iconGroup, longDescription, photographs, subtitle, title, contentBlocks} = galleryContent

    const THUMBNAIL_SIZE_STEPS = [
        { w: 224, h: 224 }, 
    ]

    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(photographs);
    }, [photographs]);

    const handleClick = (index) => {
        setSelectedIndex(index)
    }

    const handleCloseModal = () => {
        setSelectedIndex(-1)
    }

    return (
        <>
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
                                    <button onClick={() => handleClick(index)} className='np-transition hover:shadow-[0.5rem_0.5rem_0_rgba(255,0,108,1)]'>
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

                    <AnimatePresence
                        initial={false}
                        mode={'wait'}
                        onExitComplete={() => null}
                    >
                        {selectedIndex > -1 && (
                            <ModalWithCarousel
                                id={_id}
                                images={images}
                                onClose={handleCloseModal}
                                selectedIndex={selectedIndex}
                            />
                        )}
                    </AnimatePresence>
                    
                </Container>
                
                {contentBlocks && (
                    <ContentBlocks contentBlocksContent={contentBlocks} />
                )}
            </section>
        </>
    )
}

export default Gallery