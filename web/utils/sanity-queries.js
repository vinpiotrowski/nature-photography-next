import {sanityClient} from '../sanity-client'
import pageProjection from './sanity-projections/page-projection'


const fetcher = async (groq, groqArgs = {}, isPreview) => {
    const client = sanityClient(isPreview)
    return client.fetch(groq, groqArgs)
}

const fetchSingle = async (groq, groqArgs, isPreview) => {
    let response = await fetcher(groq, groqArgs, isPreview)
    return response[0]
}

const fetchMultiple = async (groq, groqArgs, isPreview) => {
    let response = await fetcher(groq, groqArgs, isPreview)
    return response
}

const fetchPageBySlug = async (slug, isPreview) => {
    return await fetchSingle(
        `*[slug.current == $slug]${pageProjection}`,
        {slug},
        isPreview
    )
}

const fetchAllPageSlugs = async (isPreview) => {
    const slugs = await fetchMultiple(
        `*[defined(slug.current)][].slug.current`,
        {},
        isPreview
    )
    const slugArrays = slugs.map((slug) => slug.split('/'))
    return slugArrays.map((slugArray) => ({
        slug: slugArray.slice(1),
    })) 
}

export {
    fetchPageBySlug,
    fetchAllPageSlugs
}