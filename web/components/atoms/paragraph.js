const Paragraph = ({ children, className = ''}) => {
    return (
        <p className={`text-sm lg:text-base ${className}`}>
            {children}
        </p>
    )
}

export default Paragraph