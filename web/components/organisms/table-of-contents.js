'use client'; // This is a client component
import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import Container from '../atoms/container'
import Paragraph from '../atoms/paragraph'

const TableOfContents = ({articles}) => {

    const numTocToShow = 4;

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        const willOpen = !isOpen
        setIsOpen(willOpen)
        if(willOpen) {
            setTimeout( () => document.getElementById('table-of-contents')?.classList?.add('accordion-open'), 0)
        } else {
            setTimeout( () => document.getElementById('table-of-contents')?.classList?.remove('accordion-open'), 0)
        }
    }

    return (
        <Container className='toc np-light-text flex flex-col gap-7 relative z-10'>




            <div className='np-transition bg-[#212121] border-4 border-[#358faa] bg-opacity-35 group flex flex-col p-3 m-auto m-w-100 rounded-lg md:max-w-screen-sm' tabindex='1'>
                <div className='flex cursor-pointer items-center justify-between' onClick={() => handleClick()}>
                    <Paragraph><strong className='text-white'>In This Issue</strong></Paragraph>
                    <svg className={`w-5 h-5 shrink-0 ${isOpen ? 'rotate-0' : 'rotate-180'}`} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                        <path stroke='#FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5 5 1 1 5'/>
                    </svg>
                </div>
                <div id='table-of-contents' className='invisible h-auto max-h-0 items-center opacity-0 transition-all'>
                    <ol className='flex flex-wrap m-auto mt-5'>
                        {articles.map((article, index) => {
                            return (
                                <li className='flex max-w-prose py-3' key={`toc-item-${index}`}>
                                    <span className='py-1 pr-2 text-[#358faa] text-xl md:px-5'><strong>0{index + 1}</strong></span>
                                    <div>
                                        <Paragraph className='block flex flex-grow justify-start'>
                                        <NextLink href={article?.slug?.current} className='inline-link flex items-center gap-1 py-1 relative'>
                                            <strong>{article.title}</strong><em className='icon-angle-right'></em>
                                            </NextLink>
                                        </Paragraph>
                                        {index < numTocToShow && (
                                            <Paragraph variant='snug'>{article.description}</Paragraph>
                                        )}

                                    </div>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>

        </Container>
    )
}

export default TableOfContents