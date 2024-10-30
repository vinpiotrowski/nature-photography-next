'use client'; // This is a client component
import {forwardRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import Image from '../atoms/image'
import {BrightenImageAnimation} from '../atoms/animations'

let PageBackgroundImage = forwardRef(function PageBackgroundImage({pageBackgroundImageContent},ref) {
    const {backgroundImage} = pageBackgroundImageContent;
    const BACKGROUND_IMAGE_SIZE_STEPS = [
        { w: 640, h: 854 },
        { w: 768, h: 1024 },
        { w: 1024, h: 0 },
        { w: 1280, h: 0 },
        { w: 1536, h: 0 },
        { w: 1920, h: 0 }
    ]

    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [1, 1000]);

    return (
        <BrightenImageAnimation  ref={ref}>
            <motion.div style={{y}}>
                <Image
                    alt={''}
                    className={'absolute max-w-100 w-full z-0'}
                    imageContent={backgroundImage}
                    sizeSteps={BACKGROUND_IMAGE_SIZE_STEPS}
                    loading='eager'
                />
            </motion.div>
        </BrightenImageAnimation>
    )
})

export default PageBackgroundImage