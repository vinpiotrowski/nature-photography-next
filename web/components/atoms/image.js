import generateSrcSets from '../../utils/image-helpers'

const Image = ({
    className,
    imageContent,
    sizeSteps,
    altText,
    loading='lazy',
    ...props
}) => {
    const srcSets = generateSrcSets(
        imageContent,
        sizeSteps
    )

    return (
        <picture>
            {srcSets?.srcSets?.map((srcSetItem, idx) => {
                return (
                    <source
                        key={idx}
                        media={`(max-width: ${srcSetItem.maxWidth}px)`}
                        srcSet={srcSetItem.source}
                        width={srcSetItem.width}
                        height={srcSetItem.height}
                    />
                )
            })}
            <img
                alt={altText || imageContent?.alt || ''}
                className={className}
                loading={loading}
                src={srcSets?.src}
                width={srcSets?.width}
                height={srcSets?.height}
                {...props}
            />
        </picture>
    )
}

export default Image