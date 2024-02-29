const IconGroup = ({iconGroupContent, className}) => {

    const textSizeStyle = iconGroupContent.length > 1 ? 'text-3xl lg:text-5xl' : 'text-5xl lg:text-7xl'

    return (
        <div className='flex flex-row justify-center items-center gap-2 text-center lg:gap-5'>
            {iconGroupContent.map((icon, index) => {
                return (
                    <span 
                        className={`icon-${icon?.icon} ${textSizeStyle} ${className}`} 
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