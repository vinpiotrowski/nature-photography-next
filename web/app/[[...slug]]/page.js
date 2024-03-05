import {fetchPageBySlug, fetchAllPageSlugs} from '../../utils/sanity-queries'
import Article from '@/components/pages/article'
import ContentBlockPage from '../../components/pages/content-block-page'
import Gallery from '../../components/pages/gallery-page'
import Navigation from '../../components/organisms/navigation'

export async function generateStaticParams() {
  const pages = await fetchAllPageSlugs(false)
  return pages
}

export default async function Page(context) {

  const slug = '/' + (context?.params?.slug ? context.params.slug.join('/') : '')
  const pageContent = await fetchPageBySlug(slug, false)

  return (
    <>
      <Navigation />
      <main>
        {pageContent._type == 'article' && (
          <Article articleContent={pageContent} />
        )}
        {pageContent._type == 'contentBlockPage' && (
          <ContentBlockPage contentBlockPageContent={pageContent} />
        )}
        {pageContent._type == 'gallery' && (
          <Gallery galleryContent={pageContent} />
        )}
      </main>
    </>


  );
}
