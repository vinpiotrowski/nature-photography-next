const Container = ({children, className}) => {
    return (
        <div className={`max-w-screen-xl mx-auto p-7 lg:px-14 lg:py-7 ${className}`}>
            {children}
        </div>
    )
}

export default Container