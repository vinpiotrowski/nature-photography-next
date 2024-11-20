import { notFound } from 'next/navigation'
import {fetchPageBySlug, fetchAllPageSlugs, fetchPageMetadataBySlug} from '../../utils/sanity-queries'
import Article from '../../components/pages/article'
import ArticleListingPage from '../../components/pages/article-listing-page'
import ContentBlockPage from '../../components/pages/content-block-page'
import Footer from '../../components/molecules/footer'
import Gallery from '../../components/pages/gallery-page'
import Navigation from '../../components/organisms/navigation'
import PageBackgroundImage from '../../components/molecules/page-background-image'

export async function generateMetadata({params, searchParams}) {
  const slug = '/' + (params?.slug ? params.slug.join('/') : '')
  const metaContent = await fetchPageMetadataBySlug(slug, false)
  return {
    title: metaContent?.title,
    description: metaContent?.description
  }
}

export async function generateStaticParams() {
  const pages = await fetchAllPageSlugs(false)
  return pages
}

export default async function Page(context) {
  const slug = '/' + (context?.params?.slug ? context.params.slug.join('/') : '')
  const pageContent = await fetchPageBySlug(slug, false)
  if (!pageContent) {
		return notFound()
	}

  return (
    <>
      {pageContent.backgroundImage && (
        <PageBackgroundImage pageBackgroundImageContent={pageContent} />
      )}
      <Navigation />
      <main>
        {pageContent._type == 'article' && (
          <Article articleContent={pageContent} />
        )}
        {pageContent._type == 'articleListing' && (
          <ArticleListingPage articleListingPageContent={pageContent} />
        )}
        {pageContent._type == 'contentBlockPage' && (
          <ContentBlockPage contentBlockPageContent={pageContent} />
        )}
        {pageContent._type == 'gallery' && (
          <Gallery galleryContent={pageContent} />
        )}
        
      </main>
      {slug === '/' && (
        <>
      
                {/*<div className='absolute h-full pointer-events-none top-[40%] w-full z-1' role='presentation' aria-hidden>
              <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                  <polygon points='100,0 0,14 0,17.5 100,35 100,31.5 2.1,15.75 100,3.5' style={{fill: 'rgba(53, 143, 170, 0.7)'}} />
              </svg>
          </div>*/}
          <div className='absolute h-full pointer-events-none top-[30%] md:top-[40%] w-full z-1' role='presentation' aria-hidden>
            <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                <polygon points='100,0 0,14 0,16.1 100,0.7' style={{fill: 'rgba(53, 143, 170, 0.9)'}} />
            </svg>
        </div>

        {<div className='absolute h-full pointer-events-none top-[30%] md:top-[40%] w-full z-1' role='presentation' aria-hidden>
            <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                <polygon points='0,14 0,16.1 100,30 100,22' style={{fill: 'rgba(53, 143, 170, 0.7)'}} />
            </svg>
        </div>}
        </>
      )}

      <Footer />
    </>
  );
}
