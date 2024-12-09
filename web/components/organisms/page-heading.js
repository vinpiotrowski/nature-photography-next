import { ScaleInAnimation } from '../atoms/animations'
import Button from '../atoms/button'
import Container from '../atoms/container'
import Heading from '../atoms/heading'
import IconGroup from '../molecules/icon-group'
import Paragraph from '../atoms/paragraph'

const PageHeading = ({pageHeadingContent}) => {
    const {headline, iconGroup, intro, link, variant} = pageHeadingContent

    const HeadingContentBlock = ({headline, iconGroup, intro, link, className}) => {
        return (
                <div className={`flex flex-col gap-3 h-full justify-center max-w-screen-md px-5 text-center text-white lg:gap-7 ${className}`}>
                    {iconGroup && (
                        <ScaleInAnimation delay={0}>
                            <IconGroup iconGroupContent={iconGroup} className={'justify-center'}/>
                        </ScaleInAnimation>
                    )}
                    {headline && (
                        <ScaleInAnimation delay={0.35}>
                            <Heading variant='h1' className='font-bold relative z-1'>
                                {headline}
                            </Heading>
                        </ScaleInAnimation>
                    )}
                    {intro && (
                        <ScaleInAnimation delay={0.7}>
                            <Paragraph variant='chonky' className='relative z-1'>
                                {intro}
                            </Paragraph>
                        </ScaleInAnimation>
                    )}
                    {link?.text && (
                        <ScaleInAnimation delay={intro ? 1.05 : 0.7}>
                            <Button linkContent={link} buttonVariant={'chonky'} />
                        </ScaleInAnimation>
                    )}
                </div>
        )
    }

    if( variant === 'chonky') {
        return (
            <section className='flex flex-col justify-center h-[385px] relative md:h-[560px] lg:h-[630px] lg:pt-7'>
                <Container variant='pageHeading' className={`${variant} grow`}>
                    <HeadingContentBlock
                        headline={headline}
                        iconGroup={iconGroup}
                        intro={intro}
                        link={link}
                    />
                </Container>
                <div className='h-[140px] pointer-events-none relative w-full z-50 lg:h-[245px]' role='presentation' aria-hidden>
                    <div className='absolute bottom-0 h-full w-[105%] z-0' index={0}>
                        <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                            <polygon points='0,42 0,70 77,70' style={{fill: 'rgba(53, 143, 170, 0.56)'}} />
                        </svg>
                    </div>
                    <div className='absolute bottom-0 h-full w-[105%] z-0' index={1}>
                        <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                            <polygon points='100,70 100,0 35,70' style={{fill: 'rgba(53, 143, 170, 0.42)'}} />
                        </svg>
                    </div>
                    <div className='absolute bottom-0 h-full w-[105%] z-0' index={2}>
                        <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                            <polygon points='100,70 100,42 0,70 0,72' style={{fill: 'rgba(53, 143, 170, 1)'}}></polygon>
                        </svg>
                    </div>
                    <div className='absolute bottom-0 h-full w-[105%] z-0' index={3}>
                        <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                            <polygon points='0,70 0,93 35,70' style={{fill: 'rgba(53, 143, 170, 0.42)'}}></polygon>
                        </svg>
                    </div>
                </div>

            </section>
        )
    } else if (variant === 'pointy') {
        return (
            <section className='flex flex-col justify-center h-[420px] relative md:h-[490px] lg:h-[560px]'>
                <Container variant='pageHeading' className={`${variant} grow`}>
                    <HeadingContentBlock 
                        headline={headline}
                        iconGroup={iconGroup}
                        intro={intro}
                    />
                </Container>
                <div className='h-[105px] pointer-events-none relative w-full z-50 lg:h-[175px]' role='presentation' aria-hidden>
                    <div className='absolute bottom-0 h-full w-[120%] z-0'>
                        <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                            <polygon points='0,100 56,100 0,21' style={{fill: 'rgba(53, 143, 170, 0.49)'}}></polygon>
                        </svg>
                    </div>
                    <div className='absolute bottom-0 h-full w-[120%] z-0'>
                        <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                            <polygon points='0,100 77,100 0,49' style={{fill: 'rgba(53, 143, 170, 1)'}}></polygon>
                        </svg>
                    </div>
                    <div className='absolute bottom-0 h-full w-[120%] z-0' role='presentation' aria-hidden>
                        <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                            <polygon points='0,98 0,101 100,101 100,28' style={{fill: 'rgba(255, 255, 255, 1)'}}></polygon>
                        </svg>
                    </div>
                </div>
            </section>
        )
    } else if (variant === 'reg') {
        return (
            <section className='flex flex-col justify-center h-[360px] relative md:h-[480px] lg:h-[520px]'>
                <Container variant='pageHeading' className={`${variant} grow`}>
                    <HeadingContentBlock 
                        headline={headline}
                        iconGroup={iconGroup}
                        intro={intro}
                    />
                </Container>
                <div className='h-[105px] pointer-events-none w-full z-1 lg:h-[140px]' role='presentation' aria-hidden>
                    <div className='absolute bottom-0 h-full w-[120%] z-0'>
                        <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                            <polygon points='28,96 28,100 0,100 0,89' style={{fill: 'rgba(53, 143, 170, 0.49)'}}></polygon>
                        </svg>
                    </div>
                    <div className='absolute bottom-0 h-full w-[120%] z-0'>
                        <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                            <polygon points='28,96 28,100 0,100 0,94' style={{fill: 'rgba(53, 143, 170, 1)'}}></polygon>
                        </svg>
                    </div>
                    <div className='absolute bottom-0 h-full w-[120%] z-0'>
                        <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                            <polygon points='28,96 28,100 100,100 100,82' style={{fill: 'rgba(53, 143, 170, 0.49)'}}></polygon>
                        </svg>
                    </div>
                    <div className='absolute bottom-0 h-full w-[120%] z-0' role='presentation' aria-hidden>
                        <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                            <polygon points='27,96 27,100 100,100 100,89' style={{fill: 'rgba(53, 143, 170, 1)'}}></polygon>
                        </svg>
                    </div>
                </div>
            </section>
        )
    } else  {
        return (
            <section className='flex flex-col justify-center h-[245px] relative md:h-[280px] lg:h-[350px]'>
                <Container variant='pageHeading' className='grow'>
                    <HeadingContentBlock
                        headline={headline}
                        iconGroup={iconGroup}
                        intro={intro}
                    />
                </Container>
            </section>
        )
    }

}

export default PageHeading