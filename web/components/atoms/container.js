const Container = ({children, variant, className}) => {
    if(variant == 'breakout') {
        return (
            <div className={`max-w-screen-xl mx-auto py-7 md:px-7 md:py-7 lg:px-14 ${className}`}>
                {children}
            </div>
        )
    }

    return (
        <div className={`max-w-screen-xl mx-auto p-7 md:px-7 md:py-7 lg:px-14 ${className}`}>
            {children}
        </div>
    )
}

export default Container