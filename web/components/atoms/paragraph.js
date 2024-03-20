const Paragraph = ({ children, variant, className = ''}) => {

    if(variant == 'chonky') {
        return (
            <p className={`leading-relaxed text-lg md:leading-relaxed md:text-xl ${className}`}>
                {children}
            </p>
        )
    }

    if(variant == 'snug') {
        return (
            <p className={`leading-normal text-small md:leading-normal lg:text-base ${className}`}>
                {children}
            </p>
        )
    }

    return (
        <p className={`leading-relaxed text-base md:leading-relaxed lg:leading-relaxed lg:text-lg ${className}`}>
            {children}
        </p>
    )
}

export default Paragraph