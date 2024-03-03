const Paragraph = ({ children, variant, className = ''}) => {

    if(variant == 'chonky') {
        return (
            <p className={`text-base md:text-base lg:text-xl ${className}`}>
                {children}
            </p>
        )
    }

    return (
        <p className={`text-sm lg:text-base ${className}`}>
            {children}
        </p>
    )
}

export default Paragraph