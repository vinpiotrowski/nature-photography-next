const Paragraph = ({ children, variant, className = ''}) => {

    if(variant == 'chonky') {
        return (
            <p className={`leading-relaxed text-lg md:leading-relaxed md:text-xl ${className}`}>
                {children}
            </p>
        )
    }

    return (
        <p className={`leading-relaxed text-base lg:leading-relaxed lg:text-lg ${className}`}>
            {children}
        </p>
    )
}

export default Paragraph