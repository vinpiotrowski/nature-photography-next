'use client'; // This is a client component
import {motion, useMotionTemplate, useScroll, useTransform} from 'framer-motion'

const LightBeams = ({}) => {

    const { scrollYProgress, scrollY } = useScroll();
    const clipA = useTransform(scrollYProgress, [0.3, 0.5], [0, 100]);
    const clipB = useTransform(scrollYProgress, [0.3, 0.5], [100, -100]);

    const clipC = useTransform(scrollYProgress, [0.4, 0.7], [0, 100]);
    const clipD = useTransform(scrollYProgress, [0.4, 0.7], [0, 200]);

    const clipPath1 = useMotionTemplate`polygon(${clipB}% 0px,  100% 0px, 100% ${clipA}%)`
    const clipPath2 = useMotionTemplate`polygon(0px 0px,  0px ${clipC}%, ${clipD}% 0px)`

    return (
        <>
            <motion.div style={{clipPath:clipPath1}} className='absolute h-[60%] pointer-events-none top-[30%] md:top-[40%] w-full z-1' role='presentation' aria-hidden>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='100,0 0,21 0,24.5 100,2.8' style={{fill: 'rgba(53, 143, 170, 0.5)'}} />
                </svg>
            </motion.div>
            <motion.div style={{clipPath:clipPath1}} className='absolute h-[60%] pointer-events-none top-[30%] md:top-[40%] w-full z-1' role='presentation' aria-hidden>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='100,0 0,21 0,24.5 100,2.1' style={{fill: 'rgba(53, 143, 170, 0.42)'}} />
                </svg>
            </motion.div>

            <motion.div style={{clipPath:clipPath2}} className='absolute h-[60%] pointer-events-none top-[30%] md:top-[40%] w-full z-1' role='presentation' aria-hidden>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='0,21 0,24.5 100,49 100,42' style={{fill: 'rgba(53, 143, 170, 0.35)'}} />
                </svg>
            </motion.div>
            <motion.div style={{clipPath:clipPath2}} className='absolute h-[60%] pointer-events-none top-[30%] md:top-[40%] w-full z-1' role='presentation' aria-hidden>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='0,21 0,24.5 100,48.5 100,40.5' style={{fill: 'rgba(53, 143, 170, 0.28)'}} />
                </svg>
            </motion.div>

        </>

    )
}

export default LightBeams