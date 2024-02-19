import {fetchPageBySlug, fetchAllPageSlugs} from '../../utils/sanity-queries'

export async function generateStaticParams() {

  const pages = await fetchAllPageSlugs(false)
  return pages

}

export default async function Page(context) {

  const slug = '/' + (context?.params?.slug ? context.params.slug.join('/') : '')
  const pageData = await fetchPageBySlug(slug, false)

  return (
    <main>
      <div>
        <h1>{pageData.eyebrowText} {pageData.headline}</h1>
      </div>
    </main>
  );
}
