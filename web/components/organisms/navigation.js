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
        <nav className='text-white relative z-20'>
            <Container variant={'nav'} className='flex flex-wrap items-center justify-center'>
            <div className='flex items-center flex-shrink-0'>
                <a href='/' className='flex items-center'>
                    <svg className='max-w-7 md:max-w-9 lg:max-w-14' width='43' height='49' style={{fill: 'rgba(53,143,170,1)'}} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 125 142'>
                        <path d='M0,0v142h125V0H0ZM30.76,122.27l-4.03-8.03,7.19-14.48,3.85,7.82-7.01,14.7ZM20.06,63.28l-5.27,11.06h-7.64l12.74-26.98,27.94,55.59,27.59-55.74,4.01,7.69-31.55,63.74-27.82-55.35ZM82.04,104.71l-4.19-7h28.47l-32.42-62.45-27.63,55.6-3.96-7.82,31.41-63.32,44.12,84.98h-35.81Z'/>
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