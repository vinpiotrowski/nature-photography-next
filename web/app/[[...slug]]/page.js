import {fetchPageBySlug, fetchAllPageSlugs} from '../../utils/sanity-queries'
import Image from '../../components/atoms/image'
import PageHeading from '../../components/molecules/page-heading'

export async function generateStaticParams() {
  const pages = await fetchAllPageSlugs(false)
  return pages
}

export default async function Page(context) {

  const slug = '/' + (context?.params?.slug ? context.params.slug.join('/') : '')
  const pageContent = await fetchPageBySlug(slug, false)

  return (
    <main>
      <Image
          alt={''}
          className={'page-background-image'}
          imageContent={pageContent.backgroundImage}
      />

      <PageHeading
        eyebrowText={pageContent.pageHeading.eyebrow}
        headline={pageContent.pageHeading.headline}
      />
    </main>
  );
}
