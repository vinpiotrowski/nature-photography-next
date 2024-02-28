import {fetchPageBySlug, fetchAllPageSlugs} from '../../utils/sanity-queries'
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
        {pageContent._type == 'contentBlockPage' && (
          <ContentBlockPage contentBlockPageContent={pageContent} />
        )}
        {pageContent._type == 'gallery' && (
          <Gallery galleryContent={pageContent} />
        )}
        <div className='relative z-1'>
          <p>
            <a href='/galleries/mountains'>Mountains Gallery</a>
          </p>
          <p>
            <a href='/galleries/prairies'>Prairies Gallery</a>
          </p>
          <p>
            <a href='/galleries/travel'>Travel Gallery</a>
          </p>
        </div>

      </main>
    </>


  );
}
