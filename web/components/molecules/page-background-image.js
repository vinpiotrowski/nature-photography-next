'use client'; // This is a client component
import {motion, useScroll, useTransform} from 'framer-motion'
import Image from '../atoms/image'
import {BrightenImageAnimation} from '../atoms/animations'

const PageBackgroundImage = ({pageBackgroundImageContent}) => {
    const {backgroundImage} = pageBackgroundImageContent;
    const BACKGROUND_IMAGE_SIZE_STEPS = [
        { w: 640, h: 854 },
        { w: 768, h: 1024 },
        { w: 1024, h: 0 },
        { w: 1280, h: 0 },
        { w: 1536, h: 0 },
        { w: 1920, h: 0 }
    ]

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 2100], [0, 1050]);

    return (
        <BrightenImageAnimation className='absolute h-full w-full'>
            <motion.div style={{y}}>
                <Image
                    alt={''}
                    className={'max-w-100 w-full z-0'}
                    imageContent={backgroundImage}
                    sizeSteps={BACKGROUND_IMAGE_SIZE_STEPS}
                    loading='eager'
                />
            </motion.div>
        </BrightenImageAnimation>
    )
}

export default PageBackgroundImage