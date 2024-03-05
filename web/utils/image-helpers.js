import { sanityImageUrlBuilder } from '../sanity-client'

const LARGEST_VIEWPORT = 1920

export const DEFAULT_SIZE_STEPS = [
    { w: 360, h: 0 },
    { w: 414, h: 0 },
    { w: 640, h: 0 },
    { w: 768, h: 0 },
    { w: 1024, h: 0 },
    { w: 1280, h: 0 },
    { w: 1536, h: 0 },
    { w: 1920, h: 0 }
]

const getImageDimensions = (image) => {
    if (!image?.asset?._ref) {
        return
    }
    const dimensions = image.asset._ref.split('-')[2]
    const[width,height] = dimensions.split('x').map(Number)
    if (!width || !height || Number.isNaN(width) || Number.isNaN(height)) {
        return;
    }
    return {
        width,
        height,
        aspectRatio: width / height
    }
}

const generateSrcSets = (image, sizeSteps) => {
    if (!image?.asset?._ref) {
        return {}
    }

    if (!sanityImageUrlBuilder) {
        return {}
    }

    const maxDimensions = {w: LARGEST_VIEWPORT, h: 0}

    const imageDimensions = getImageDimensions(image)

    const urlBuilder = sanityImageUrlBuilder().image(image).auto('format')

    const baseSizes = [...(sizeSteps || DEFAULT_SIZE_STEPS)]

    const retinaSizes = Array.from( 
        new Set([
            ...baseSizes
        ])
    )

    const def = retinaSizes.at(-1) || { w: 1, h: 1 }

    return {
        height: def.h ? def.h : ((def.w * imageDimensions?.height) / imageDimensions?.width),
        width: def.w,
        src: def.h
            ? urlBuilder.width(def.w).height(def.h).url()
            : urlBuilder.width(def.w).url(),
        srcSets: retinaSizes.map((size) => {
            return {
                height: size.h ? size.h : ((size.w * imageDimensions?.height) / imageDimensions?.width),
                width: size.w,
                maxWidth: size.w,
                source: size.h
                    ? urlBuilder.width(size.w).height(size.h).url()
                    : urlBuilder.width(size.w).url()
            }
        })
    }
}

export default generateSrcSets