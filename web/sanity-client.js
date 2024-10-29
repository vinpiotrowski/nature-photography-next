import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = (isPreview) =>
    createClient({
        apiVersion: '2022-03-07',
        dataset: 'production',
        projectId: 'w2in3wfr',
        useCdn: true,
        perspective: isPreview ? 'previewDrafts' : 'published',
    })

export const sanityImageUrlBuilder = () =>
    imageUrlBuilder({
        dataset: 'production',
        projectId: 'w2in3wfr',
    })
