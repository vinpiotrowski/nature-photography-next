'use client'; // This is a client component
import React, { useEffect, useState } from 'react'
import Article from './article'
import Button from '../atoms/button'
import Container from '../atoms/container'
import Heading from '../atoms/heading'
import PageHeading from '../organisms/page-heading'
import TableOfContents from '../organisms/table-of-contents';


const ArticleListingPage = ({articleListingPageContent}) => {

    const {articles, pageHeading} = articleListingPageContent

    const [numArticlesToShow, setNumArticlesToShow] = useState(3);

    const handleLoadMore = () => {
        const newNumArticlesToShow = numArticlesToShow + 3;
        setNumArticlesToShow(newNumArticlesToShow);
    };

    return (
        <>
            <PageHeading
                pageHeadingContent={pageHeading}
            />

            <TableOfContents
                articles={articles}
            />

            {/*Articles*/}
            {articles.map((article, index) => {
                if(index < numArticlesToShow) {
                    return (
                        <article key={`article-${index}`}>
                            <Article articleContent={article}  />
                        </article>
                    )
                }
            })} 

            {/*Pagination Controls*/}
            {numArticlesToShow < articles?.length && (
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