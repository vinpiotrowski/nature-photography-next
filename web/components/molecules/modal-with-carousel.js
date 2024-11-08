import React from 'react'
import { useEffect, useRef} from 'react'
import { register } from 'swiper/element/bundle'
import Button from '../atoms/button'
import Heading from '../atoms/heading'
import Image from '../atoms/image'
import Paragraph from '../atoms/paragraph'

// Register swiper
register();

const ModalWithCarousel = ({
  id,
  images,
  selectedImage,
  onClose,
  onNext,
  onPrev,
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
        const numberOfSlides = images.length;

        const breakpoints = {
            300: {
                slidesPerView: 1.1
            },
            640: {
                slidesPerView: 1.0
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
            /*renderBullet: function (index, className) {
                return '<span class="' + className + '">' + 'vince.' + '</span>';
            }*/
        }

        /*if(numberOfSlides > 10) {
            pagination = {
                el: `.pagination-${id}`,
                dynamicBullets: true
            }
        }*/

        const swiperParams = {
            breakpoints,
            initialSlide,
            keyboard,
            loop,
            mousewheel,
            navigation,
            pagination,
        }

        Object.assign(swiperRef.current, swiperParams);
        swiperRef.current.initialize();
    }, [id, images, selectedIndex]);

    return (
        <div className='fixed inset-0 flex justify-center items-center z-50'>
            <div id='photo-modal' className='np-transition-slow bg-white bg-opacity-98 overflow-y-auto h-full w-full opacity-full opacity-0'>
                <div className='flex gap-3 justify-end m-auto max-w-screen-md z-10 lg:max-w-screen-lg'>
                    <Button buttonVariant='close' onClick={onClose} />
                </div>
                <swiper-container ref={swiperRef} init='false' effect='slide'>
                    {images.map((image, index) => (
                        <swiper-slide key={index}>
                            <div className='m-auto max-w-screen-md pt-5 pb-5 md:pt-[2vh] md:pb-[3vh] lg:max-w-screen-lg'>
                                <Heading variant='h2' className='absolute font-bold mix-blend-difference pl-5 text-neutral-400 w-full z-10 md:pl-0' >
                                    {image.title}
                                </Heading>
                            </div>
                            <div className='flex flex-col justify-center items-center px-2 relative md:px-5'>
                                <Image
                                    className='cursor-grab max-h-[56vh] lg:max-h-[77vh]'
                                    imageContent={image.image} 
                                    alt={image.shortDescription}
                                    sizeSteps={PHOTOGRAPH_SIZE_STEPS} 
                                />
                                <div className='flex justify-end max-w-screen-md w-full lg:max-w-screen-lg'>
                                    <Paragraph variant='snug' className='bg-white max-w-prose p-5 pb-0 md:p10 md:-mt-7'>
                                        <strong>{image.location}</strong> — {image.longDescription}
                                    </Paragraph>
                                </div>
                            </div>
                        </swiper-slide>
                    ))}
                </swiper-container>
            </div>
            <div className='absolute bottom-0 flex gap-3 items-center justify-center p-1 w-full z-20'>
                    <Button buttonVariant='previous' className={`button-prev-${id}`} />
                    <div className={`pagination-${id} z-30`} ></div>
                    <Button buttonVariant='next' className={`button-next-${id}`} />
                </div>
        </div>
    );
};

export default ModalWithCarousel