import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from "@sanity/image-url";

export const sanityClient = (isPreview) =>
    createClient({
        apiVersion: '2022-03-07',
        dataset: 'production',
        projectId: 'w2in3wfr',
        useCdn: false,
        perspective: isPreview ? 'previewDrafts' : 'published',
    })

export const sanityImageUrlBuilder = () =>
    createImageUrlBuilder({
        dataset: 'production',
        projectId: 'w2in3wfr',
    })
