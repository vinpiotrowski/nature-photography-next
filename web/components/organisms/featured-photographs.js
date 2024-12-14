'use client'; // This is a client component
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AnimatePresence, motion } from 'framer-motion'
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
            <Container className='flex items-center justify-center'>
                <div className='np-heading flex flex-col gap-5 max-w-screen-md text-center text-white w-full md:gap-7'>
                    <Heading className='uppercase' variant='h2' styleAs='h3'>
                        {headline}
                    </Heading>
                    <Paragraph variant='chonky'>
                        {intro}
                    </Paragraph>
                </div>
            </Container>
            <Container className='flex flex-col gap-7 items-center justify-center overflow-visible !pt-0 md:gap-7'>
                    <Swiper 
                        slidesPerView={1}
                        spaceBetween={35}
                        breakpoints={{
                            300: {
                                slidesPerView: 1.2
                            },
                            414: {
                                slidesPerView: 1.4
                            },
                            660: {
                                slidesPerView: 2.2
                            },
                            1025: {
                                slidesPerView: 3
                            }
                        }}
                        scrollbar={{
                            draggable: true
                        }}
                        style={{
                            '--swiper-scrollbar-size': '7px',
                            '--swiper-scrollbar-drag-bg-color': 'var(--primary-brand)',
                            '--swiper-scrollbar-bg-color': 'var(--neutral-med)',
                        }}
                        className='w-full !overflow-visible'
                    >
                        {photographs.map((photo, index) => {
                            return(
                                <SwiperSlide className='!h-auto pb-10 relative z-20' key={`featured-photograph-${index}`}>
                                    <div className='flex flex-col h-full w-full'>
                                        <Image 
                                            alt={''}
                                            imageContent={photo.image}
                                            sizeSteps={THUMBNAIL_SIZE_STEPS}
                                        />
                                        <div className='bg-white flex flex-col gap-3 grow text-center p-3 py-7'>
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
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                
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