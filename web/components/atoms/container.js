'use client'; // This is a client component
import FadeInWhenVisible from './animations'

const Container = ({children, variant, className}) => {
    if(variant == 'breakout') {
        return (
            <FadeInWhenVisible>
                <div className={`max-w-screen-xl mx-auto pb-7 md:px-14 md:pb-14 ${className}`}>
                    {children}
                </div>
            </FadeInWhenVisible>
        )
    }

    if(variant == 'nav') {
        return (
            <div className={`max-w-screen-xl mx-auto px-7 py-2 md:px-14 md:py-5 ${className}`}>
                {children}
            </div>
        )
    }

    if(variant == 'pageHeading') {
        return (
            <FadeInWhenVisible>
                <div className={`np-heading flex flex-col justify-start items-center relative w-full ${className}`}>
                    {children}
                </div>
            </FadeInWhenVisible>
        )
    }

    if(variant == 'footer') {
        return (
            <div className={`max-w-screen-xl mx-auto px-7 py-1 md:px-14 md:py-2 ${className}`}>
                {children}
            </div>
        )
    }

    return (
        <FadeInWhenVisible>
            <div className={`max-w-screen-xl mx-auto p-7 md:p-14 ${className}`}>
                {children}
            </div>
        </FadeInWhenVisible>
    )
}

export default Container