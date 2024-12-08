import React from 'react'
import { useEffect, useRef} from 'react'
import { register } from 'swiper/element/bundle'
import { motion } from 'framer-motion'
import Button from '../atoms/button'
import Heading from '../atoms/heading'
import Image from '../atoms/image'
import Paragraph from '../atoms/paragraph'

// Register swiper
register();

const ModalWithCarousel = ({
  id,
  images,
  onClose,
  selectedIndex,
}) => {

    const swiperRef = useRef(null);

    const PHOTOGRAPH_SIZE_STEPS = [
        { w: 768, h: 0 },
        { w: 1024, h: 0 },
        { w: 1280, h: 0 },
        { w: 1536, h: 0 },
        { w: 1920, h: 0 }
    ]

    useEffect(() => {
        
        const breakpoints = {
            300: {
                slidesPerView: 1.05
            },
            640: {
                slidesPerView: 1.1
            },
            1200: {
                slidesPerView: 1.2
            }
        }

        const initialSlide = selectedIndex;

        const keyboard = {
            enabled: true
        };

        const loop = true;

        const mousewheel = {
            forceToAxis: true
        };

        const navigation = {
            nextEl: `.button-next-${id}`,
            prevEl: `.button-prev-${id}`
        }

        let pagination = {
            type: 'fraction',
            el: `.pagination-${id}`,
        }

        const swiperParams = {
            breakpoints,
            initialSlide,
            keyboard,
            loop,
            mousewheel,
            navigation,
            pagination
        }

        Object.assign(swiperRef.current, swiperParams);
        swiperRef.current.initialize();
    }, [id, images, selectedIndex]);

    useEffect(() => {
        let swiper = swiperRef.current;

        const preloadNext = (n, activeIndex) => {
            const slides = [...swiper.querySelectorAll('swiper-slide')];
            slides.slice(activeIndex, activeIndex + n + 1)
                .map(slide => slide.querySelector('img'))
                .forEach(s => s.setAttribute('loading', 'eager'));
        };

        swiper.addEventListener('swiperslidechange', (e) => {
            preloadNext(1, e.detail[0].realIndex);
        });

        return () => {
            swiper.removeEventListener('swiperslidechange', () => {})
        }
    }, [])

    return (
        <motion.div
            className='fixed inset-0 flex flex-col justify-center items-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            exit={{ opacity: 0 }}
        >
            <div id='photo-modal' className={`bg-np-neutral-darkest overflow-y-auto h-full w-full`}>
                <div className='flex gap-3 justify-end m-auto max-w-screen-md pb-5 z-10 lg:max-w-screen-lg'>
                    <Button buttonVariant='close' onClick={onClose} />
                </div>
                <swiper-container ref={swiperRef} init='false' effect='slide' className='bg-white'>
                    {images.map((image, index) => (
                        <swiper-slide key={index}>
                            <div className='pb-5 pt-5 m-auto max-w-[90%] md:max-w-[70%] md:pb-[3vh] md:pt-[4vh]'>
                                <Heading variant='h2' className='absolute font-bold mix-blend-difference text-np-blue w-full z-10' >
                                    {image.title}
                                </Heading>
                            </div>
                            <div className='flex flex-col justify-center items-center pl-2 relative md:px-5'>
                                <Image
                                    className='cursor-grab max-h-[56vh] lg:max-h-[77vh]'
                                    imageContent={image.image} 
                                    alt={image.shortDescription}
                                    sizeSteps={PHOTOGRAPH_SIZE_STEPS} 
                                />
                                <div className='pt-5 flex m-auto max-w-[90%] w-full md:max-w-[70%] md:justify-end'>
                                    <Paragraph variant='snug' className='bg-np-neutral-darkest md:max-w-prose text-np-neutral-light md:p-[3vh] md:pb-0 md:-mt-14'>
                                        <strong>{image.location}</strong> {image.location && image.longDescription ? '—' : ''} {image.longDescription}
                                    </Paragraph>
                                </div>
                            </div>
                        </swiper-slide>
                    ))}
                </swiper-container>
            </div>
            <div className='absolute bottom-0 flex gap-3.5 items-center justify-end mb-10 pr-10 w-full z-20'>
                <div className={`pagination-${id} hidden`} ></div>
                <Button buttonVariant='previous' className={`button-prev-${id}`} />
                <Button buttonVariant='next' className={`button-next-${id}`} />
            </div>
        </motion.div>
    );
};

export default ModalWithCarousel