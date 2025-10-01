'use client'; // This is a client component
import {useState} from 'react'
import {motion} from 'framer-motion'
import Container from '../atoms/container'

const Footer = ({isHomepage}) => {

    const [isInView, setIsInView] = useState(!isHomepage);

    return (
        <footer className='bg-np-neutral-dark text-white relative z-20'>
            <Container variant={'footer'} className='flex flex-wrap items-center justify-center'>
            <motion.div
                className='absolute -top-10 z-0'
                whileInView={() => {
                    if(!isInView) {
                        setIsInView(true);
                    }
                    return {};
                }}
                viewport={{ once: true, amount: 1 }}
            ></motion.div>
                <div className='flex gap-3 justify-end relative w-full md:gap-7'>
                    <div className='absolute left-0 top-0 stroke-np-blue -translate-y-[112%] w-1/2 md:-translate-y-[85%] sm:w-1/3'>
                        <motion.svg
                            className='h-full w-full'
                            viewBox='0 0 1592.5 1016.5'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={ isInView && { pathLength: 1 }}
                                transition={{
                                    duration: 1.4,
                                    ease: 'easeInOut',
                                }}
                                strokeWidth={28}
                                strokeDasharray="0 1"
                                fill='none'
                                d='M492.9,130.1c0,0-420,726-433.5,745.5s-30.5,45.5-18,72c15.7,33.3,47.5,22.8,98.5,24.5 c59,2,1335.5-3.5,1369.8-3.5s48.3-10.4,45.2-51.5s-249-424-260-442s-37.9-76.8-95-78c-47-1-77,48-125,91c-37,33.1-70.1,31.2-85,21 c-48-33-310-392-310-392c-20-29-57-81-91-81C540.4,36.1,521.4,80.6,492.9,130.1z'
                            />
                        </motion.svg>
                    </div>
                    <a href='//www.instagram.com/mostly_carbon/' className='text-np-neutral-light flex items-center gap-1 py-1 relative md:text-lg'>
                        <em className='icon-instagram text-2xl' /><span>Instagram</span>
                    </a>
                    <a href='//www.linkedin.com/in/vincent-piotrowski/' className='text-np-neutral-light flex items-center gap-1 py-1 relative md:text-lg'>
                        <em className='icon-linked-in text-2xl' /><span>LinkedIn</span>
                    </a>
                </div>
            </Container>
        </footer>
    )
}

export default Footer