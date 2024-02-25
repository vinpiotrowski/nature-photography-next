const IconGroup = ({iconGroupContent}) => {
    return (
        <div className='flex flex-row justify-center items-center gap-3 text-center lg:gap-5'>
            {iconGroupContent.map((icon, index) => {
                return (
                    <span 
                        className={`icon-${icon?.icon} text-4xl lg:text-5xl`} 
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