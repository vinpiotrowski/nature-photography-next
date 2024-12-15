import { notFound } from 'next/navigation'
import {fetchPageBySlug, fetchAllPageSlugs, fetchPageMetadataBySlug} from '../../utils/sanity-queries'
import Article from '../../components/pages/article'
import ArticleListingPage from '../../components/pages/article-listing-page'
import ContentBlockPage from '../../components/pages/content-block-page'
import Footer from '../../components/molecules/footer'
import Gallery from '../../components/pages/gallery-page'
import LightBeams from '../../components/molecules/light-beams'
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
        <LightBeams />
      )}

      <Footer isHomepage={slug === '/'}/>
    </>
  );
}
