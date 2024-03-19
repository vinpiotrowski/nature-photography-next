const Heading1 = ({children, className = ''}) => {
    const size = children.length < 20 ? 'text-5xl md:text-8xl' : 'text-4xl md:text-7xl'
    return <h1 className={`np-outline-text ${size} ${className}`}>{children}</h1>
}

const Heading2 = ({children, className = ''}) => {
    return <h2 className={`text-3xl md:text-6xl ${className}`}>{children}</h2>
}

const Heading3 = ({children, className = ''}) => {
    return <h3 className={`text-2xl md:text-4xl ${className}`}>{children}</h3>
}

const Heading4 = ({children, className = ''}) => {
    return <h4 className={`text-xl md:text-2xl ${className}`}>{children}</h4>
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