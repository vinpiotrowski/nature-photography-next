const IconGroup = ({iconGroupContent, className}) => {

    const textSizeStyle = iconGroupContent.length > 1 ? 'text-5xl md:text-6xl' : 'text-6xl lg:text-7xl'

    return (
        <div className={`flex flex-row gap-1 text-center lg:gap-3 ${className}`}>
            {iconGroupContent.map((icon, index) => {
                return (
                    <span 
                        className={`icon-${icon?.icon} ${textSizeStyle}`} 
                        key={index} 
                        role='presentation' 
                        aria-hidden 
                    />
                )
            })
            }
        </div>
    )
}

export default IconGroup