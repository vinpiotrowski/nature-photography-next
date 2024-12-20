const Button = ({ linkContent = {}, buttonVariant, onClick, className = ''}) => {
    const {externalRef, internalRef, text, variant} = linkContent

    const href = variant == 'internal' ? internalRef : externalRef

    switch (buttonVariant) {
        case 'chonky':
            return (
                <div className='flex justify-center py-1.5'>
                    <a href={href} className='np-button np-transition px-4 py-2.5 
                            z-10 sm:px-5 sm:py-3 hover:shadow-[0.7rem_0.7rem_0_rgba(255,0,108,1)]'>
                        <span className=' block font-bold sm:text-lg'>{text}</span>
                    </a>
                </div>
            )
        case 'navigation':
            return (
                <span className='block flex flex-grow justify-end'>
                    <a href={href} className='relative py-1'>
                        <span className='block px-3 lg:inline-block'>{text}</span>
                    </a>
                </span>
            )
        case 'close':
            return (
                <button className='absolute bg-np-neutral-darkest p-0 text-np-blue text-xl transition-all ease-in-out duration-[0.5s] right-0 z-20 hover:shadow-[0.5rem_0.35rem_0_rgba(255,0,108,1)]' onClick={onClick}>
                    <svg className='fill-current h-12 w-12' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <title>Close Modal</title>  
                        <path d='M16.707,8.707,13.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414L12,13.414,8.707,16.707a1,1,0,1,1-1.414-1.414L10.586,12,7.293,8.707A1,1,0,1,1,8.707,7.293L12,10.586l3.293-3.293a1,1,0,1,1,1.414,1.414Z'/>
                    </svg>
                </button>
            )
        case 'loadMore':
            return (
                <div className='flex justify-center'>
                    <button className='np-button np-transition px-3 py-2 
                            text-white z-10 lg:px-3 lg:py-2.5 hover:shadow-[0.7rem_0.7rem_0_rgba(255,0,108,1)]' onClick={onClick}>
                        <span className='block font-bold text-sm text-white lg:text-base $className'>{text}</span>
                    </button>
                </div>
            )
        case 'next':
            return (
                <button className={`bg-np-blue p-2.5 rounded-full text-white text-xl  transition-all ease-in-out duration-[0.5s] hover:shadow-[0.5rem_0.35rem_0_rgba(255,0,108,1)] ${className}`} onClick={onClick}>
                  <svg className='fill-current h-4 w-4 md:h-6 md:w-6' viewBox='0 0 448 448' xmlns='http://www.w3.org/2000/svg'>
                        <title>Next Photo</title>
                        <path d='M354.63 223.999c0 3.591-1.796 7.631-4.489 10.325l-209.187 209.187c-2.694 2.694-6.733 4.489-10.325 4.489s-7.631-1.796-10.325-4.489l-22.445-22.445c-2.694-2.694-4.489-6.285-4.489-10.325 0-3.591 1.796-7.631 4.489-10.325l176.417-176.417-176.417-176.417c-2.694-2.694-4.489-6.733-4.489-10.325s1.796-7.631 4.489-10.325l22.445-22.445c2.694-2.694 6.733-4.489 10.325-4.489s7.631 1.796 10.325 4.489l209.187 209.187c2.694 2.694 4.489 6.733 4.489 10.325z' />
                  </svg>
                </button>
            )
        case 'open':
            return (
                <button className='np-button np-transition px-3 py-2 
                        text-white z-10 lg:px-3 lg:py-2.5 hover:shadow-[0.5rem_0.5rem_0_rgba(255,0,108,1)]' onClick={onClick}>
                    <span className='block font-bold text-sm text-white lg:text-base $className'>{text}</span>
                </button>
            )
        case 'previous':
            return (
                <button className={`bg-np-blue p-2.5 rounded-full text-white text-xl transition-all ease-in-out duration-[0.5s] hover:shadow-[0.5rem_0.35rem_0_rgba(255,0,108,1)] ${className}`} onClick={onClick}>
                    <svg className='fill-current h-4 w-4 md:h-6 md:w-6' viewBox='0 0 448 448' xmlns='http://www.w3.org/2000/svg' >
                        <title>Previous Photo</title>
                        <path d='M354.629 37.259c0 3.591-1.796 7.631-4.489 10.325l-176.416 176.416 176.416 176.416c2.694 2.694 4.489 6.733 4.489 10.325s-1.796 7.631-4.489 10.325l-22.444 22.444c-2.694 2.694-6.733 4.489-10.325 4.489s-7.631-1.796-10.325-4.489l-209.186-209.186c-2.694-2.694-4.489-6.733-4.489-10.325s1.796-7.631 4.489-10.325l209.186-209.186c2.694-2.694 6.733-4.489 10.325-4.489s7.631 1.796 10.325 4.489l22.444 22.444c2.694 2.694 4.489 6.285 4.489 10.325z' />
                    </svg>
              </button>
            )
        default:
            return (
                <div className='flex'>
                    <a href={href} className='np-button np-transition px-3 py-2 
                             text-white z-10 lg:px-3 lg:py-2.5 hover:shadow-[0.7rem_0.7rem_0_rgba(255,0,108,1)]'>
                        <span className='block font-bold text-sm lg:text-base $className'>{text}</span>
                    </a>
                </div>
          
            )
    }

}

export default Button