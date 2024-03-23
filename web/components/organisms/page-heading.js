import Button from '../atoms/button'
import Heading from '../atoms/heading'
import IconGroup from '../molecules/icon-group'
import Paragraph from '../atoms/paragraph'

const PageHeading = ({pageHeadingContent}) => {
    const {headline, iconGroup, intro, link, variant} = pageHeadingContent

    const HeadingContentBlock = ({headline, iconGroup, intro, link, className}) => {
        return (
            <div className={`flex flex-col gap-3 max-w-screen-md pb-14 pt-3 px-5 text-center text-white mb:pb-20 md:pt-5 lg:pb-40 lg:pt-10 md:gap-5 lg:gap-7 ${className}`}>
                {iconGroup && (
                    <IconGroup iconGroupContent={iconGroup} className={'justify-center'}/>
                )}
                {headline && (
                    <Heading variant='h1' className='font-bold relative z-1'>
                        {headline}
                    </Heading>
                )}
                {intro && (
                    <Paragraph variant='chonky' className='relative z-1'>
                        {intro}
                    </Paragraph>
                )}
                {link?.text && (
                    <Button linkContent={link} buttonVariant={'chonky'} />
                )}
            </div>
        )
    }

    if( variant === 'chonky') {
        return (
            <section className={`${variant} np-heading flex flex-col justify-start items-center relative w-full min-h-[280px] md:min-h-[360px] lg:min-h-[400px]`}>
                <HeadingContentBlock 
                    headline={headline}
                    iconGroup={iconGroup}
                    intro={intro}
                    link={link}
                />
                <div className='absolute bottom-0 h-3/4 right-0 translate-y-7 w-full z-0 md:translate-y-14 lg:h-3/4' role='presentation' aria-hidden>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='0,70 0,84 77,84' style={{fill: 'rgba(53, 143, 170, 0.56)'}} />
                    </svg>
                </div>
                <div className='absolute bottom-0 h-3/4 right-0 translate-y-7 w-full z-0 md:translate-y-14 lg:h-3/4' role='presentation' aria-hidden>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='100,84 100,42 35,84' style={{fill: 'rgba(53, 143, 170, 0.42)'}} />
                    </svg>
                </div>
                <div className='absolute bottom-0 h-3/4 right-0 translate-y-7 w-full z-0 md:translate-y-14 lg:h-3/4' role='presentation' aria-hidden>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='100,84 100,63 0,84' style={{fill: 'rgba(53, 143, 170, 1)', zIndex: 14}}></polygon>
                    </svg>
                </div>
                <div className='absolute bottom-0 h-3/4 right-0 translate-y-7 w-full z-0 md:translate-y-14 lg:h-3/4' role='presentation' aria-hidden>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='0,84 0,100 35,84' style={{fill: 'rgba(53, 143, 170, 0.42)'}}></polygon>
                    </svg>
                </div>
            </section>
        )
    } else if (variant === 'pointy') {
        return (
            <section className={`${variant} np-heading flex flex-col justify-start items-center pt-7 relative text-white w-full min-h-[360px] md:min-h-[560px] lg:min-h-[600px]`}>
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
    } else if (variant === 'reg') {
        return (
            <section className={`${variant} np-heading flex flex-col justify-start items-center pt-7 relative text-white w-full min-h-[360px] md:min-h-[440px] lg:min-h-[480px]`}>
                <HeadingContentBlock 
                    headline={headline}
                    iconGroup={iconGroup}
                    intro={intro}
                />
                <div className='absolute bottom-0 h-full right-0 w-full z-0' role='presentation' aria-hidden>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='28,98 28,100 0,100 0,91' style={{fill: 'rgba(53, 143, 170, 0.49)'}}></polygon>
                    </svg>
                </div>
                <div className='absolute bottom-0 h-full right-0 w-full z-0' role='presentation' aria-hidden>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='28,98 28,100 0,100 0,96' style={{fill: 'rgba(53, 143, 170, 0.98)'}}></polygon>
                    </svg>
                </div>
                <div className='absolute bottom-0 h-full right-0 w-full z-0' role='presentation' aria-hidden>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='28,98 28,100 100,100 100,84' style={{fill: 'rgba(53, 143, 170, 0.49)'}}></polygon>
                    </svg>
                </div>
                <div className='absolute bottom-0 h-full right-0 w-full z-0' role='presentation' aria-hidden>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='28,98 28,100 100,100 100,91' style={{fill: 'rgba(53, 143, 170, 0.98)'}}></polygon>
                    </svg>
                </div>
            </section>
        )
    } else  {
        return (
            <section className={`${variant} np-heading flex flex-col justify-start items-center pt-7 relative text-white w-full min-h-[360px] md:min-h-[400px] lg:min-h-[440px]`}>
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