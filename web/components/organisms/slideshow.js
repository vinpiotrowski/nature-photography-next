'use client'; // This is a client component
import { useEffect, useState } from 'react'
import NextImage from 'next/image'
import Container from '../atoms/container'
import Heading from '../atoms/heading'
import Image from '../atoms/image'
import RichText from '../molecules/rich-text'
import { motion } from 'framer-motion'

const Slideshow = ({slideshowContent}) => {
    const {
        useNoneBackground,
        eliminateTopPadding,
        eliminateBottomPadding,
        textPlacement, 
        headline, 
        body,
        frameImage,
        images} = slideshowContent

    const flexDirection = textPlacement == 'left' ? 'md:flex-row-reverse' : 'md:flex-row'

    const FRAME_SIZE_STEPS = [
        { w: 360, h: 0 },
        { w: 768, h: 0 }
    ]
    
    const SLIDE_SIZE_STEPS = [
        { w: 480, h: 320},
    ]

    function getVerticalPadding() {
        let paddingClassname = ''
        if(eliminateTopPadding) {
            paddingClassname = 'pt-2 md:pt-3 lg:pt-3'
        }
        if(eliminateBottomPadding) {
            paddingClassname += ' pb-2 md:pb-3 lg:pb-3'
        }
        return paddingClassname
    }

    function getOpacityAnimation(slideIndex) {
        let opacity = [];
        for (var i = 0; i < numSlides; i++) {
            if(i === slideIndex) {
                if( i ) {
                    opacity.push(1, 1, 0);
                } else {
                    opacity.push(0, 1, 1, 0);
                }
            } else {
                if( i ) {
                    opacity.push(0, 0, 0);
                } else {
                    opacity.push(0, 0, 0, 0);
                }
            }
        }
        return opacity;
    }

    function getAnimationTimes() {
        let times = [];
        for (var i = 0; i < numSlides; i++) {
            let base = 1/numSlides;
            let bot = i/numSlides;
            let top = (i+1)/numSlides;
            let delay = base * 0.05
            if( i ) {
                times.push( 
                    bot + delay,
                    top - delay, 
                    top);
            } else {
                times.push(bot, 
                    bot + delay,
                    top - delay, 
                    top);
            }
        }
        return times;
    }

    const numSlides = images.length;

    const dur = 2.1;

    const [startSlideshow, setStartSlideshow] = useState(false)

    useEffect(() => {
        setStartSlideshow(true);
    }, []);

    return (
        <section data-name='slideshow' className={`${useNoneBackground ? 'np-light-text' : 'bg-white'} -mt-1 py-3 relative z-1`}>
            <Container className={`flex flex-col gap-7 items-center relative ${flexDirection} ${getVerticalPadding()} md:gap-11 lg:gap-14`}>
                <div className='flex p-3 relative md:basis-2/3 lg:basis-1/2'>
                { images.length && (
                    <>
                    <div className='absolute bg-black bottom-[10%] left-[15%] pt-[33.333%] w-1/2'>
                        {images.map((slide, index) => {
                            return (
                                <motion.div
                                    animate={ startSlideshow && {
                                        opacity: getOpacityAnimation(index),
                                        transition: {
                                            duration: dur * numSlides,
                                            ease: "linear",
                                            repeat: Infinity,
                                            times: getAnimationTimes()
                                        }
                                    }}
                                    key={index}
                                >
                                    <Image
                                        className='absolute top-0 left-0'
                                        alt={''}
                                        imageContent={slide}
                                        sizeSteps={SLIDE_SIZE_STEPS}
                                    />
                                </motion.div>
                            )}
                        )}
                    </div>
                    <Image
                        className='relative'
                        alt={''}
                        imageContent={frameImage}
                        sizeSteps={FRAME_SIZE_STEPS}
                    />
                    </>
                )}

                </div>
                <div className='md:basis-1/3 lg:basis-1/2 flex flex-col gap-5 justify-center md:gap-7'>
                    {headline && (
                        <div className='np-heading'>
                            <Heading variant='h2' styleAs='h3' className='uppercase text-center'>
                                {headline}
                            </Heading>
                        </div>
                    )}
                    <RichText richTextContent={body}/>
                </div>
            </Container>
       </section>
    )
}

export default Slideshow