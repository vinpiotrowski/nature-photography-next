const IconGroup = ({iconGroupContent}) => {
    return (
        <div className='flex flex-row justify-center items-center gap-5 text-center lg:gap-8'>
            {iconGroupContent.map((icon, index) => {
                return (
                    <span className={`icon-${icon?.icon} text-4xl lg:text-6xl`} key={index} role='presentation' aria-hidden></span>
                )
            })
            }
        </div>
    )
}

export default IconGroup