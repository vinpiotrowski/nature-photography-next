import NextLink from 'next/link'

const Button = ({ linkContent, buttonVariant, className = ''}) => {
    const {externalRef, internalRef, text, variant} = linkContent

    const href = variant == 'internal' ? internalRef : externalRef
    return (
        <div className='flex justify-center'>
            <NextLink href={href} className='bg-button shadow-[1.4rem_1.4rem_0_rgba(33,33,33,1)] px-3 py-2 
                    -skew-x-[14deg] z-10 lg:px-5 lg:py-4 hover:shadow-[1.4rem_1.4rem_0_rgba(255,0,108,0.5)]'>
                <p className='font-bold skew-x-[14deg] lg:text-xl'>{text}</p>
            </NextLink>
        </div>
  
    )
}

export default Button