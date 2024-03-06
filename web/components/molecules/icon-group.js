const IconGroup = ({iconGroupContent, className}) => {

    const textSizeStyle = iconGroupContent.length > 1 ? 'text-4xl lg:text-5xl' : 'text-6xl lg:text-6xl'

    return (
        <div className={`flex flex-row gap-2 text-center lg:gap-5 ${className}`}>
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