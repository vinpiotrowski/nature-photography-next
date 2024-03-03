const Heading1 = ({children, className = ''}) => {
    return <h1 className={`text-4xl md:text-5xl lg:text-7xl ${className}`}>{children}</h1>
}

const Heading2 = ({children, className = ''}) => {
    return <h2 className={`text-xl md:text-2xl lg:text-3xl ${className}`}>{children}</h2>
}

const Heading3 = ({children, className = ''}) => {
    return <h3 className={`text-xl lg:text-2xl ${className}`}>{children}</h3>
}

const Heading4 = ({children, className = ''}) => {
    return <h4 className={`${className}`}>{children}</h4>
}

const Heading = ({ children, variant, className = ''}) => {

    switch (variant) {
        case 'h1':
            return (
                <Heading1 className={className}>
                    {children}
                </Heading1>
            )
        case 'h2':
            return (
                <Heading2 className={className}>
                    {children}
                </Heading2>
            )
        case 'h3':
            return (
                <Heading3 className={className}>
                    {children}
                </Heading3>
            )
        case 'h4':
            return (
                <Heading4 className={className}>
                    {children}
                </Heading4>
            )
    }
}

export default Heading