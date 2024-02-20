import generateSrcSets from '../../utils/image-helpers'

const Image = ({
    className,
    imageContent,
    sizeSteps,
    altText,
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
                    />
                )
            })}
            <img
                alt={altText || imageContent?.alt || ''}
                className={className}
                loading='eager'
                src={srcSets?.src}
                {...props}
            />
        </picture>
    )
}

export default Image