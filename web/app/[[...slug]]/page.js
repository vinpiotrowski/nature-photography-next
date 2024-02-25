import {fetchPageBySlug, fetchAllPageSlugs} from '../../utils/sanity-queries'
import Image from '../../components/atoms/image'
import PageHeading from '../../components/organisms/page-heading'

export async function generateStaticParams() {
  const pages = await fetchAllPageSlugs(false)
  return pages
}

export default async function Page(context) {

  const BACKGROUND_IMAGE_SIZE_STEPS = [
    { w: 360, h: 480 }, // 3:4
    { w: 414, h: 552 },
    { w: 768, h: 1024 },
    { w: 1366, h: 0 }, // honor aspect ratio
    { w: 1536, h: 0 },
    { w: 1920, h: 0 }
  ]

  const slug = '/' + (context?.params?.slug ? context.params.slug.join('/') : '')
  const pageContent = await fetchPageBySlug(slug, false)

  return (
    <main>
      <Image
          alt={''}
          className={'page-background-image'}
          imageContent={pageContent.backgroundImage}
          sizeSteps={BACKGROUND_IMAGE_SIZE_STEPS}
      />

      <PageHeading
        pageHeadingContent={pageContent?.pageHeading}
      />
    </main>
  );
}
