const Paragraph = ({ children, variant, className = ''}) => {

    if(variant == 'chonky') {
        return (
            <p className={`leading-relaxed text-md md:leading-relaxed md:text-xl ${className}`}>
                {children}
            </p>
        )
    }

    if(variant == 'snug') {
        return (
            <p className={`leading-normal text-xs md:leading-normal lg:text-sm ${className}`}>
                {children}
            </p>
        )
    }

    return (
        <p className={`leading-relaxed text-sm md:leading-relaxed lg:leading-relaxed lg:text-lg ${className}`}>
            {children}
        </p>
    )
}

export default Paragraph