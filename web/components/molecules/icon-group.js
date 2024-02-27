const IconGroup = ({iconGroupContent, className}) => {
    return (
        <div className='flex flex-row justify-center items-center gap-2 text-center lg:gap-5'>
            {iconGroupContent.map((icon, index) => {
                return (
                    <span 
                        className={`icon-${icon?.icon} text-3xl lg:text-5xl ${className}`} 
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