'use client'; // This is a client component
import React, { useState } from 'react'
import Button from '../atoms/button'
import Container from '../atoms/container'

const Navigation = ({navigationContent}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='bg-gradient-to-b from-[rgba(0,0,0,0.35)] to-[rgba(0,0,0,0)] relative text-white w-full z-20'>
            <Container variant={'nav'} className='flex flex-wrap items-center justify-center'>
            <div className='flex items-center flex-shrink-0 stroke-np-blue'>
                <a href='/' className='flex items-center relative'>
                    <svg
                        className='h-auto w-[56px] md:w-[70px]'
                        viewBox="0 0 1592.5 1016.5"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeWidth={91}
                            fill="none"
                            d='M492.9,130.1c0,0-420,726-433.5,745.5s-30.5,45.5-18,72c15.7,33.3,47.5,22.8,98.5,24.5 c59,2,1335.5-3.5,1369.8-3.5s48.3-10.4,45.2-51.5s-249-424-260-442s-37.9-76.8-95-78c-47-1-77,48-125,91c-37,33.1-70.1,31.2-85,21 c-48-33-310-392-310-392c-20-29-57-81-91-81C540.4,36.1,521.4,80.6,492.9,130.1z'
                        />
                    </svg>
                    <span className='ml-2 text-2xl lg:text-3xl'>
                        vince<strong>piotrowski</strong>
                    </span>
                </a>
            </div>
            <div className='block flex flex-grow justify-end lg:hidden'>
                <button onClick={handleClick} className='flex items-center'>
                    {isOpen && (
                        <svg className='fill-current h-5 w-5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <title>Close Menu</title>  
                            <path d="M16.707,8.707,13.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414L12,13.414,8.707,16.707a1,1,0,1,1-1.414-1.414L10.586,12,7.293,8.707A1,1,0,1,1,8.707,7.293L12,10.586l3.293-3.293a1,1,0,1,1,1.414,1.414Z"/>
                        </svg>
                    )}
                    {!isOpen && (
                        <svg className='fill-current h-5 w-5' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                            <title>Open Menu</title>
                            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'/>
                        </svg>
                    )}
                </button>
            </div>
            <div className={`np-transition block flex-grow items-center overflow-hidden w-full ${isOpen ? 'max-h-[300px]' : 'max-h-0'} lg:flex lg:justify-end lg:max-h-none lg:w-auto`}>
                <div className='flex flex-col gap-5 text-right text-xl lg:flex-row lg:text-2xl'>
                    <Button linkContent={{
                        internalRef: '/galleries', 
                        text:'Galleries', 
                        variant:'internal'}} 
                        buttonVariant={'navigation'} 
                    />
                    <Button linkContent={{
                        internalRef: '/articles', 
                        text:'Articles', 
                        variant:'internal'}} 
                        buttonVariant={'navigation'} 
                    />
                    <Button linkContent={{
                        internalRef: '/about', 
                        text:'About', 
                        variant:'internal'}} 
                        buttonVariant={'navigation'} 
                    />
                </div>
            </div>
            </Container>
        </nav>
    )
}

export default Navigation