const Container = ({children, variant, className}) => {
    if(variant == 'nav') {
        return (
            <div className={`max-w-screen-xl mx-auto px-3 py-2 lg:px-14 lg:py-5 ${className}`}>
                {children}
            </div>
        )
    }

    if(variant == 'pageHeading') {
        return (
                <div className={`np-heading flex flex-col px-3 items-center w-full lg:px-14 ${className}`}>
                    {children}
                </div>
        )
    }

    if(variant == 'footer') {
        return (
            <div className={`max-w-screen-xl mx-auto px-3 py-10 lg:px-14 ${className}`}>
                {children}
            </div>
        )
    }

    return (
        <div className={`max-w-screen-xl mx-auto px-5 py-10 z-20 lg:px-14 lg:py-20 ${className}`}>
            {children}
        </div>
    )
}

export default Container