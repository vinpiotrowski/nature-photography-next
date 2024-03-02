import Button from '../atoms/button'
import Heading from '../atoms/heading'
import IconGroup from '../molecules/icon-group'

const PageHeading = ({pageHeadingContent}) => {
    const {headline, iconGroup, intro, link, variant} = pageHeadingContent

    const HeadingContentBlock = ({headline, iconGroup, intro, link, className}) => {
        return (
            <div className={`flex flex-col gap-3 max-w-xl text-center text-white lg:gap-7 ${className}`}>
                {iconGroup && (
                    <IconGroup iconGroupContent={iconGroup} />
                )}
                {headline && (
                    <Heading variant='h1' className='font-bold relative z-1'>
                        {headline}
                    </Heading>
                )}
                {intro && (
                    <p className='relative text-xl z-1 lg:text-2xl'>
                        {intro}
                    </p>
                )}
                {link?.text && (
                    <Button linkContent={link} buttonVariant={'chonky'} />
                )}
            </div>
        )
    }

    if( variant === 'chonky') {
        return (
            <section className={`${variant} flex flex-col justify-center items-center relative pb-40 pt-7 px-7 w-full lg:pb-48 lg:pt-7 lg:px-28`}>
                <HeadingContentBlock 
                    headline={headline}
                    iconGroup={iconGroup}
                    intro={intro}
                    link={link}
                    className='lg:max-w-3xl'
                />
                <div className='absolute bottom-0 h-1/2 right-0 w-full z-0 lg:h-3/4' role='presentation' aria-hidden>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='0,70 0,84 77,84' style={{fill: 'rgba(53, 143, 170, 0.56)'}} />
                    </svg>
                </div>
                <div className='absolute bottom-0 h-1/2 right-0 w-full z-0 lg:h-3/4' role='presentation' aria-hidden>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='100,84 100,42 35,84' style={{fill: 'rgba(53, 143, 170, 0.42)'}} />
                    </svg>
                </div>
                <div className='absolute bottom-0 h-1/2 right-0 w-full z-0 lg:h-3/4' role='presentation' aria-hidden>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='100,84 100,63 0,84' style={{fill: 'rgba(53, 143, 170, 1)', zIndex: 14}}></polygon>
                    </svg>
                </div>
                <div className='absolute bottom-0 h-1/2 right-0 w-full z-0 lg:h-3/4' role='presentation' aria-hidden>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='0,84 0,100 35,84' style={{fill: 'rgba(53, 143, 170, 0.42)'}}></polygon>
                    </svg>
                </div>
            </section>
        )
    } else if (variant === 'pointy') {
        return (
            <section className={`${variant} flex flex-col justify-center items-center relative pb-40 pt-14 px-7 text-white w-full lg:pb-56 lg:px-28`}>
                <HeadingContentBlock 
                    headline={headline}
                    iconGroup={iconGroup}
                    intro={intro}
                />
                <div className='absolute bottom-0 h-full right-0 w-full z-0' role='presentation' aria-hidden>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='0,100 77,100 0,77' style={{fill: 'rgba(53, 143, 170, 1)'}}></polygon>
                    </svg>
                </div>
                <div className='absolute bottom-0 h-full right-0 w-full z-0' role='presentation' aria-hidden>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='0,98 0,100 100,100 100,77' style={{fill: 'rgba(255, 255, 255, 1)'}}></polygon>
                    </svg>
                </div>
            </section>
        )
    } else {
        return (
            <section className={`${variant} text-white flex flex-col justify-center items-center relative pb-40 pt-14 px-7 text-white w-full lg:pb-56 lg:pt-28 lg:px-28`}>
                <HeadingContentBlock 
                    headline={headline}
                    iconGroup={iconGroup}
                    intro={intro}
                />
            </section>
        )
    }

}

export default PageHeading