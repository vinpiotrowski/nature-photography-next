import Heading from '../../components/atoms/heading'

const PageHeading = ({headline}) => {
    return (
        <section className='flex flex-col justify-center items-center relative px-7 py-14 w-full lg:p-28'>
            <div className='absolute bottom-0 h-full right-0 w-full z-0' role='presentation' aria-hidden>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='0,70 0,84 77,84' opacity='0.56' style={{fill: '#358faa'}} />
                </svg>
            </div>
            <div className='absolute bottom-0 h-full right-0 w-full z-0' role='presentation' aria-hidden>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='100,84 100,42 35,84' opacity='0.42' style={{fill: '#358faa'}} />
                </svg>
            </div>
            <div className='absolute bottom-0 h-full right-0 w-full z-0' role='presentation' aria-hidden>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='100,84 100,63 0,84' opacity='1' style={{fill: '#358faa', zIndex: 14}}></polygon>
                </svg>
            </div>
            <div className='absolute bottom-0 h-full right-0 w-full z-0' role='presentation' aria-hidden>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='0,84 0,100 35,84' opacity='0.42' style={{fill: '#358faa'}}></polygon>
                </svg>
            </div>
            <div className='flex flex-col gap-5 max-w-4xl text-center lg:gap-10'>
                <span className='icon-landscapes text-5xl lg:text-8xl'></span>
                <Heading variant='h1' className='relative z-1'>
                    {headline}
                </Heading>
            </div>

        </section>
    )
}

export default PageHeading