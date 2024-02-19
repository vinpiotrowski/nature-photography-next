import { createClient } from '@sanity/client'

export const sanityClient = (isPreview) =>
    createClient({
        apiVersion: '2022-03-07',
        dataset: 'production',
        projectId: 'w2in3wfr',
        useCdn: false,
        perspective: 'published',
    })