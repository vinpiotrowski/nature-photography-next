import Heading from '../atoms/heading'
import IconGroup from '../molecules/icon-group'

const PageHeading = ({pageHeadingContent}) => {
    const {headline, iconGroup, intro} = pageHeadingContent
    return (
        <section className='flex flex-col justify-center items-center relative px-7 py-14 w-full lg:p-28'>
            <div className='absolute bottom-0 h-full right-0 w-full z-0 lg:h-1/2' role='presentation' aria-hidden>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='0,70 0,84 77,84' opacity='0.56' style={{fill: '#358faa'}} />
                </svg>
            </div>
            <div className='absolute bottom-0 h-full right-0 w-full z-0 lg:h-1/2' role='presentation' aria-hidden>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='100,84 100,42 35,84' opacity='0.42' style={{fill: '#358faa'}} />
                </svg>
            </div>
            <div className='absolute bottom-0 h-full right-0 w-full z-0 lg:h-1/2' role='presentation' aria-hidden>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='100,84 100,63 0,84' opacity='1' style={{fill: '#358faa', zIndex: 14}}></polygon>
                </svg>
            </div>
            <div className='absolute bottom-0 h-full right-0 w-full z-0 lg:h-1/2' role='presentation' aria-hidden>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='0,84 0,100 35,84' opacity='0.42' style={{fill: '#358faa'}}></polygon>
                </svg>
            </div>
            <div className='flex flex-col gap-5 max-w-4xl text-center lg:gap-10'>
                {iconGroup && (
                    <IconGroup iconGroupContent={iconGroup}></IconGroup>
                )}
                {headline && (
                    <Heading variant='h1' className='relative z-1'>
                        {headline}
                    </Heading>
                )}
                {intro && (
                    <p className='relative z-1 text-2xl'>{intro}</p>
                )}
            </div>

        </section>
    )
}

export default PageHeading