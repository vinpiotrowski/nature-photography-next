const Container = ({children, variant, className}) => {
    if(variant == 'slide') {
        return (
            <div className={`max-w-screen-xl mx-auto py-7 md:px-14 md:py-7 ${className}`}>
                {children}
            </div>
        )
    }

    return (
        <div className={`max-w-screen-xl mx-auto p-7 md:px-14 md:py-7 ${className}`}>
            {children}
        </div>
    )
}

export default Container