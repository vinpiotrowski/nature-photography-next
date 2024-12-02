'use client'; // This is a client component
import { useRef } from 'react';
import {motion, useMotionTemplate, useScroll, useSpring, useTransform} from 'framer-motion'

const LightBeams = ({}) => {

    let ref = useRef(null);

    const { scrollYProgress, scrollY } = useScroll({target:ref, offset:['start end', 'end start']});
    const scrollYProgressSmooth = useSpring(scrollYProgress, {stiffness:700,  mass:0.1})

    /*const clipA = useTransform(scrollYProgressSmooth, [0.35, 0.5], [0, 100]);
    const clipB = useTransform(scrollYProgressSmooth, [0.35, 0.5], [100, -100]);

    const clipC = useTransform(scrollYProgressSmooth, [0.45, 0.7], [0, 100]);
    const clipD = useTransform(scrollYProgressSmooth, [0.45, 0.7], [0, 200]);*/

    const clipA = useTransform(scrollYProgressSmooth, [0.15, 0.28], [0, 100]);
    const clipB = useTransform(scrollYProgressSmooth, [0.15, 0.28], [100, -100]);

    const clipC = useTransform(scrollYProgressSmooth, [0.25, 0.42], [0, 100]);
    const clipD = useTransform(scrollYProgressSmooth, [0.25, 0.42], [0, 200]);

    const clipPath1 = useMotionTemplate`polygon(${clipB}% 0px,  100% 0px, 100% ${clipA}%)`
    const clipPath2 = useMotionTemplate`polygon(0px 0px,  0px ${clipC}%, ${clipD}% 0px)`

    return (
        <div ref={ref} className='absolute h-[45%] pointer-events-none top-[28%] w-full z-1 md:h-[60%] md:top-[40%]' role='presentation' aria-hidden>
            <motion.div style={{clipPath:clipPath1}} className='absolute h-full w-full z-1'>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='100,0 0,21 0,24.5 100,2.1' style={{fill: 'rgba(53, 143, 170, 0.6)'}} />
                </svg>
            </motion.div>
            <motion.div style={{clipPath:clipPath1}} className='absolute h-full w-full' role='presentation' aria-hidden>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='100,0 0,21 0,24.5 100,1.4' style={{fill: 'rgba(53, 143, 170, 0.52)'}} />
                </svg>
            </motion.div>

            <motion.div style={{clipPath:clipPath2}} className='absolute h-full w-full' role='presentation' aria-hidden>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='0,21 0,24.5 100,49 100,42' style={{fill: 'rgba(53, 143, 170, 0.45)'}} />
                </svg>
            </motion.div>
            <motion.div style={{clipPath:clipPath2}} className='absolute h-full w-full' role='presentation' aria-hidden>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='0,21 0,24.5 100,48.5 100,40.5' style={{fill: 'rgba(53, 143, 170, 0.38)'}} />
                </svg>
            </motion.div>
        </div>
    )
}

export default LightBeams