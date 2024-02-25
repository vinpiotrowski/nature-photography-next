"use client"; // This is a client component

import React, { useState } from 'react'
import Image from 'next/image'

const Navigation = ({navigationContent}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='flex flex-wrap items-center justify-center m-auto max-w-6xl p-5 text-white relative z-20 lg:p-7'>
            <div className='flex items-center flex-shrink-0'>
                <Image
                    alt='' 
                    src='/logo.png'
                    height='70'
                    width='40' />
                <span className='ml-2 text-2xl lg:text-3xl'>vince<strong>piotrowski</strong></span>
            </div>
            <div className="block flex flex-grow justify-end lg:hidden">
                <button onClick={handleClick} className="flex items-center px-3 py-2">
                    <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={`transition-all duration-300 ease-out block flex-grow items-center overflow-hidden w-full ${isOpen ? 'max-h-[300]' : 'max-h-0'} lg:flex lg:justify-end lg:max-h-none lg:w-auto`}>
                <div className='flex flex-col gap-5 text-right text-xl lg:flex-row lg:text-2xl'>
                    <a href='/galleries' className='block px-3 lg:inline-block'>
                        Galleries
                    </a>
                    <a href='#responsive-header' className='block px-3 lg:inline-block'>
                        Articles
                    </a>
                    <a href='#responsive-header' className='block px-3 lg:inline-block'>
                        About
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navigation