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
            <div id='photo-modal' className='bg-gradient-to-b from-white to-np-grey-lightest overflow-y-auto h-full w-full'>
                <div className='flex gap-3 justify-end m-auto max-w-screen-md pb-5 z-10 lg:max-w-screen-lg'>
                    <Button buttonVariant='close' onClick={onClose} />
                </div>
                <swiper-container ref={swiperRef} init='false' effect='slide'>
                    {images.map((image, index) => (
                        <swiper-slide key={index}>
                            <div className='m-auto max-w-screen-md pt-5 pb-5 md:pt-[2vh] md:pb-[3vh] lg:max-w-screen-lg'>
                                <Heading variant='h2' className='absolute font-bold mix-blend-difference pl-5 text-np-blue w-full z-10 md:pl-0' >
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
                                <div className='flex justify-center max-w-screen-md w-full md:justify-end md:mr-5 lg:max-w-screen-lg'>
                                    <Paragraph variant='snug' className='bg-white max-w-[91%] p-5 -mt-2.5 md:max-w-prose md:p-[3vh] md:-mt-14'>
                                        <strong>{image.location}</strong> — {image.longDescription}
                                    </Paragraph>
                                </div>
                            </div>
                        </swiper-slide>
                    ))}
                </swiper-container>
            </div>
            <div className='absolute bottom-0 flex gap-0 items-center justify-end pb-10 pr-10 w-full z-20 lg:mb-0'>
                <div className={`pagination-${id} -mr-5 z-30`} ></div>
                <Button buttonVariant='next-fancy' className={`button-next-${id}`} />
            </div>
        </motion.div>
    );
};

export default ModalWithCarousel