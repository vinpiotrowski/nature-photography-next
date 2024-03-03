import NextLink from 'next/link'

const Button = ({ linkContent = {}, buttonVariant, onClick, className = ''}) => {
    const {externalRef, internalRef, text, variant} = linkContent

    const href = variant == 'internal' ? internalRef : externalRef

    switch (buttonVariant) {
        case 'chonky':
            return (
                <div className='flex justify-center'>
                    <NextLink href={href} className='np-button np-transition shadow-[1.4rem_1.4rem_0_rgba(33,33,33,1)] px-3 py-2 
                            -skew-x-[14deg] z-10 lg:px-5 lg:py-4 hover:shadow-[1.4rem_1.4rem_0_rgba(255,0,108,1)]'>
                        <span className=' block font-bold skew-x-[14deg] lg:text-xl $className'>{text}</span>
                    </NextLink>
                </div>
            )
        case 'close':
            return (
                <button className='absolute np-button np-transition py-0.5 px-0.5 right-3 rounded-full text-xl text-white font-bold hover:np-hover' onClick={onClick}>
                    <svg className='fill-current h-6 w-6' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <title>Close Modal</title>  
                        <path d="M16.707,8.707,13.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414L12,13.414,8.707,16.707a1,1,0,1,1-1.414-1.414L10.586,12,7.293,8.707A1,1,0,1,1,8.707,7.293L12,10.586l3.293-3.293a1,1,0,1,1,1.414,1.414Z"/>
                    </svg>
                </button>
            )
        case 'next':
            return (
                <button className='np-button np-transition py-2 px-2 rounded-full text-xl text-white font-bold hover:np-hover' onClick={onClick}>
                  <svg className='fill-current h-4 w-4' viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg">
                        <title>Next Photo</title>
                        <path d="M354.63 223.999c0 3.591-1.796 7.631-4.489 10.325l-209.187 209.187c-2.694 2.694-6.733 4.489-10.325 4.489s-7.631-1.796-10.325-4.489l-22.445-22.445c-2.694-2.694-4.489-6.285-4.489-10.325 0-3.591 1.796-7.631 4.489-10.325l176.417-176.417-176.417-176.417c-2.694-2.694-4.489-6.733-4.489-10.325s1.796-7.631 4.489-10.325l22.445-22.445c2.694-2.694 6.733-4.489 10.325-4.489s7.631 1.796 10.325 4.489l209.187 209.187c2.694 2.694 4.489 6.733 4.489 10.325z" />
                  </svg>
                </button>
            )
        case 'previous':
            return (
                <button className='np-button np-transition py-2 px-2 rounded-full text-xl text-white font-bold hover:np-hover' onClick={onClick}>
                    <svg className='fill-current h-4 w-4' viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg" >
                        <title>Previous Photo</title>
                        <path d="M354.629 37.259c0 3.591-1.796 7.631-4.489 10.325l-176.416 176.416 176.416 176.416c2.694 2.694 4.489 6.733 4.489 10.325s-1.796 7.631-4.489 10.325l-22.444 22.444c-2.694 2.694-6.733 4.489-10.325 4.489s-7.631-1.796-10.325-4.489l-209.186-209.186c-2.694-2.694-4.489-6.733-4.489-10.325s1.796-7.631 4.489-10.325l209.186-209.186c2.694-2.694 6.733-4.489 10.325-4.489s7.631 1.796 10.325 4.489l22.444 22.444c2.694 2.694 4.489 6.285 4.489 10.325z" />
                    </svg>
              </button>
            )
        default:
            return (
                <div className='flex'>
                    <NextLink href={href} className='np-button np-transition shadow-[0.7rem_0.7rem_0_rgba(255,255,255,1)] px-3 py-2 
                             text-white z-10 lg:px-3 lg:py-2.5 hover:shadow-[0.7rem_0.7rem_0_rgba(255,0,108,1)]'>
                        <span className='block font-bold  text-sm lg:text-base $className'>{text}</span>
                    </NextLink>
                </div>
          
            )
    }

}

export default Button