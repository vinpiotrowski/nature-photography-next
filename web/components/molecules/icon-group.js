const IconGroup = ({iconGroupContent, className}) => {
 
    return (
        <div className={`flex flex-row gap-2 text-center lg:gap-3 ${className}`}>
            {iconGroupContent.map((icon, index) => {
                return (
                    <span 
                        className={`icon-${icon?.icon} text-4xl md:text-6xl`} 
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