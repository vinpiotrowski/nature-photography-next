
import { Josefin_Sans } from 'next/font/google'

export const josefin_sans = Josefin_Sans({
    subsets: ['latin'],
    display: 'swap',
})

const Heading1 = ({children, className}) => {
    return <h1 className={className}>{children}</h1>
}

const Heading2 = ({children, className}) => {
    return <h2 className={`${className}`}>{children}</h2>
}

const Heading3 = ({children, className}) => {
    return <h3 className={`${className}`}>{children}</h3>
}

const Heading4 = ({children, className}) => {
    return <h4 className={`${className}`}>{children}</h4>
}

const Heading = ({ children, variant, styleAs, className = ''}) => {

    let styles = ''

    switch (styleAs ? styleAs : variant) {
        case 'h1':
            const size = children?.length < 20 ? 'text-5xl md:text-8xl' : 'text-4xl md:text-7xl'
            styles = `${size} tracking-tight sm:tracking-tighter ${className} ${josefin_sans.className}`
            break
        case 'h2':
            styles = `font-bold text-4xl md:text-6xl ${className} ${josefin_sans.className}`
            break
        case 'h3':
            styles = `font-bold text-2xl md:text-5xl ${className} ${josefin_sans.className}`
            break
        case 'h4':
            styles = `text-xl md:text-2xl ${className}`
            break
    }

    switch (variant) {
        case 'h1':
            return (
                <Heading1 className={styles}>
                    {children}
                </Heading1>
            )
        case 'h2':
            return (
                <Heading2 className={styles}>
                    {children}
                </Heading2>
            )
        case 'h3':
            return (
                <Heading3 className={styles}>
                    {children}
                </Heading3>
            )
        case 'h4':
            return (
                <Heading4 className={styles}>
                    {children}
                </Heading4>
            )
    }
}

export default Heading