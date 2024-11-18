'use client'; // This is a client component
import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Button from '../atoms/button'
import Container from '../atoms/container'
import Heading from '../atoms/heading'
import Image from '../atoms/image'
import ModalWithCarousel from '../molecules/modal-with-carousel';
import Paragraph from '../atoms/paragraph'

const FeaturedPhotographs = ({featuredPhotographsContent, className}) => {

    const {_id, headline, intro, photographs} = featuredPhotographsContent

    const THUMBNAIL_SIZE_STEPS = [
        { w: 360, h: 360 }, 
        { w: 414, h: 414 }, 
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
        <section data-name='featured-photographs' className='py-3 relative z-1'>
            <Container className='flex flex-col gap-7 items-center justify-center md:gap-14'>
                <div className='np-heading flex flex-col gap-5 max-w-screen-md text-center text-white md:gap-7'>
                    <Heading className='uppercase' variant='h2' styleAs='h3'>
                        {headline}
                    </Heading>
                    <Paragraph variant='chonky'>
                        {intro}
                    </Paragraph>
                </div>
            </Container>
            <Container variant='breakout' className='flex flex-col gap-7 items-center justify-center  md:gap-7'>
                <div className='flex gap-7 overflow-x-scroll px-7 w-full md:overflow-x-auto md:px-0 lg:gap-14 lg:px-0 hide-scroll-bar'>
                    {photographs.map((photo, index) => {
                        return(
                            <div className='basis-1/3 flex-grow bg-white self-stretch' key={`featured-photograph-${index}`}>
                                <div className='w-64 md:w-auto'>
                                    <Image 
                                        alt={''}
                                        imageContent={photo.image}
                                        sizeSteps={THUMBNAIL_SIZE_STEPS}
                                    />
                                    <div className='flex flex-col gap-3 text-center p-3 py-7'>
                                        <Paragraph>
                                            <strong>{photo.location}</strong>
                                        </Paragraph>
                                        <Heading variant='h3' styleAs='h4'>
                                            {photo.title}
                                        </Heading>
                                        <Paragraph>
                                            {photo.shortDescription}
                                        </Paragraph>
                                        <div>
                                            <Button 
                                                buttonVariant='open' 
                                                linkContent={{text: 'View Photo'}} 
                                                onClick={() => handleClick(index)} 
                                            />
                                        </div>
                                    </div>
                                </div>
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
        </section>
    )
}

export default FeaturedPhotographs