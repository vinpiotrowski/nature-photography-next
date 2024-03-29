'use client'; // This is a client component
import React, { useEffect, useState } from 'react'
import Article from './article'
import Button from '../atoms/button'
import Container from '../atoms/container'
import Heading from '../atoms/heading'
import Image from '../atoms/image'
import PageHeading from '../organisms/page-heading'
import TableOfContents from '../organisms/table-of-contents';


const ArticleListingPage = ({articleListingPageContent}) => {

    const {backgroundImage, articles, pageHeading} = articleListingPageContent

    const BACKGROUND_IMAGE_SIZE_STEPS = [
        { w: 640, h: 854 },// 3:4
        { w: 768, h: 1024 },
        { w: 1024, h: 0 },
        { w: 1280, h: 0 },
        { w: 1536, h: 0 },
        { w: 1920, h: 0 }
      ]

    const [numArticlesToShow, setNumArticlesToShow] = useState(3);
    const [allArticles, setAllArticles] = useState([]);

    useEffect(() => {
        setAllArticles(articles);
    }, [articles]);

    const handleLoadMore = () => {
        const newNumArticlesToShow = numArticlesToShow + 3;
        setNumArticlesToShow(newNumArticlesToShow);
    };

    return (
        <>
            <Image
                alt={''}
                className={'absolute max-w-100 opacity-65 top-0 w-full z-0 md:opacity-85'}
                imageContent={backgroundImage}
                sizeSteps={BACKGROUND_IMAGE_SIZE_STEPS}
            />

            <PageHeading
                pageHeadingContent={pageHeading}
            />

            <TableOfContents
                articles={articles}
            />

            {/*Articles*/}
            {allArticles.map((article, index) => {
                if(index < numArticlesToShow) {
                    return (
                        <article key={`article-${index}`}>
                            <Article articleContent={article}  />
                        </article>
                    )
                }
            })} 

            {/*Pagination Controls*/}
            {numArticlesToShow < allArticles?.length && (
                <Container className='flex flex-col gap-3 pb-20 text-center text-white md:gap-5 md:pb-28 lg:pb-32'>
                    <Heading variant='h3' styleAs='h4'>
                        Enjoying the Words So Far?
                    </Heading>
                    <Button 
                        buttonVariant='loadMore' 
                        linkContent={{text:'Load More Words'}} 
                        onClick={handleLoadMore} 
                    />
                </Container>
            )}

        </>
    )
}

export default ArticleListingPage