import NextLink from 'next/link'
import Container from '../atoms/container'
import Heading from '../atoms/heading'
import Paragraph from '../atoms/paragraph'

const TableOfContents = ({allArticles}) => {

    const numTocToShow = 4;

    return (
        <Container className='toc np-light-text flex flex-col gap-7 relative z-10'>
            <Heading variant='h3' className='text-center text-white'>IN THIS ISSUE</Heading>
            <hr />

            <ol className='flex flex-col flex-wrap m-auto max-w-fit lg:h-[280px] lg:max-h-fit'>
                {allArticles.map((article, index) => {
                    if(index < numTocToShow) { return (
                        <li className='flex max-w-prose p-3 lg:w-1/2' key={`toc-item-${index}`}>
                            <span className='p-3 text-[#358faa] text-xl'><strong>0{index + 1}</strong></span>
                            <div>
                                <Paragraph className='block flex flex-grow justify-start'>
                                <NextLink href={article?.slug?.current} className='inline-link flex items-center gap-1 py-1 relative'>
                                    <strong>{article.title}</strong><em className='icon-angle-right'></em>
                                    </NextLink>
                                </Paragraph>
                                <Paragraph variant='snug'>{article.description}</Paragraph>
                            </div>
                        </li>
                    )}
                })}

            </ol>

            <div class='np-transition group border-2 border-[#777777] flex flex-col p-3 hover:border-[#ff006c]' tabindex='1'>
                <div class='flex cursor-pointer items-center justify-between'>
                    <Paragraph><strong>Table of Contents</strong></Paragraph>
                    <svg data-accordion-icon class='w-5 h-5 rotate-180 group-focus:rotate-0 shrink-0' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                        <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5 5 1 1 5'/>
                    </svg>
                </div>
                <div class='invisible h-auto max-h-0 items-center opacity-0 transition-all focus-within:visible focus-within:max-h-screen focus-within:opacity-100  group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000'>
                    <ol className='flex flex-col flex-wrap m-auto justify-start items-start'>
                        {allArticles.map((article, index) => {
                            if(index >= numTocToShow) { return (
                                <li className='flex items-center max-w-prose w-screen lg:max-w-full' key={`toc-item-${index}`}>
                                    <span className='px-3 text-[#358faa] text-xl'><strong>0{index + 1}</strong></span>
                                    <div>
                                        <Paragraph className='block flex flex-grow justify-start'>
                                            <NextLink href={article?.slug?.current} className='inline-link flex items-center gap-1 py-1 relative'>
                                                <strong>{article.title}</strong><em className='icon-angle-right'></em>
                                            </NextLink>
                                        </Paragraph>
                                    </div>
                                </li>
                            )}
                        })}

                    </ol>
                </div>
            </div>

        </Container>
    )
}

export default TableOfContents