'use client'; // This is a client component
import { FadeInWhenVisible } from './animations'

const Container = ({children, variant, className}) => {
    if(variant == 'nav') {
        return (
            <div className={`max-w-screen-xl mx-auto px-7 py-2 lg:px-14 lg:py-5 ${className}`}>
                {children}
            </div>
        )
    }

    if(variant == 'pageHeading') {
        return (
                <div className={`np-heading flex flex-col items-center w-full ${className}`}>
                    {children}
                </div>
        )
    }

    if(variant == 'footer') {
        return (
            <div className={`max-w-screen-xl mx-auto px-7 py-1 lg:px-14 lg:py-2 ${className}`}>
                {children}
            </div>
        )
    }

    return (
        <FadeInWhenVisible delay={0.35}>
            <div className={`max-w-screen-xl mx-auto p-7 z-20 lg:p-14 ${className}`}>
                {children}
            </div>
        </FadeInWhenVisible>
    )
}

export default Container