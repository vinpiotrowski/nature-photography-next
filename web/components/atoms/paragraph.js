const Paragraph = ({ children, variant, className = ''}) => {

    if(variant == 'chonky') {
        return (
            <p className={`text-lg md:text-xl ${className}`}>
                {children}
            </p>
        )
    }

    return (
        <p className={`text-base lg:text-lg ${className}`}>
            {children}
        </p>
    )
}

export default Paragraph