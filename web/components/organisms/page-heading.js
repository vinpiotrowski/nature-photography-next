'use client'; // This is a client component
import {motion} from 'framer-motion'
import Button from '../atoms/button'
import Container from '../atoms/container'
import Heading from '../atoms/heading'
import IconGroup from '../molecules/icon-group'
import Paragraph from '../atoms/paragraph'

const PageHeading = ({pageHeadingContent}) => {
    const {headline, iconGroup, intro, link, variant} = pageHeadingContent

    const LightRayAnimation = ({children, delay, duration, className}) => {
        return (
            <motion.div
                    animate={{ opacity: [1, 0.42, 1]}}
                    transition={{repeat: Infinity, timing: [0.2, 0.6, 0.2], duration: duration, repeatDelay: delay }}
                    className={className}
                    role='presentation' 
                    aria-hidden>
                {children}
            </motion.div>
        )
    }

    const HeadingContentBlock = ({headline, iconGroup, intro, link, className}) => {
        return (
            <div className={`flex flex-col gap-3 max-w-screen-md ${iconGroup ? 'pt-3' : 'pt-10'} px-5 text-center text-white md:pt-5 lg:pt-10 md:gap-5 lg:gap-7 ${className}`}>
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
            <section className='relative'>
                <Container variant='pageHeading' className={`${variant} min-h-[280px] md:min-h-[455px] lg:min-h-[476px]`}>
                    <HeadingContentBlock
                        headline={headline}
                        iconGroup={iconGroup}
                        intro={intro}
                        link={link}
                    />
                </Container>
                <LightRayAnimation delay={0} duration={4.2} className='absolute bottom-0 h-3/4 translate-y-7 w-[120%] z-0'>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='0,70 0,84 77,84' style={{fill: 'rgba(53, 143, 170, 0.56)'}} />
                    </svg>
                </LightRayAnimation>
                <LightRayAnimation delay={0.21} duration={3.85} className='absolute bottom-0 h-3/4 translate-y-7 w-[120%] z-0'>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='100,84 100,42 35,84' style={{fill: 'rgba(53, 143, 170, 0.42)'}} />
                    </svg>
                </LightRayAnimation>
                <LightRayAnimation delay={0.28} duration={4.9} className='absolute bottom-0 h-3/4 translate-y-7 w-[120%] z-0'>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='100,84 100,63 0,84' style={{fill: 'rgba(53, 143, 170, 1)'}}></polygon>
                    </svg>
                </LightRayAnimation>
                <LightRayAnimation delay={0.35} duration={3.5} className='absolute bottom-0 h-3/4 translate-y-7 w-[120%] z-0'>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='0,84 0,100 35,84' style={{fill: 'rgba(53, 143, 170, 0.42)'}}></polygon>
                    </svg>
                </LightRayAnimation>
            </section>
        )
    } else if (variant === 'pointy') {
        return (
            <section className='relative'>
                <Container variant='pageHeading' className={`${variant} min-h-[360px] md:min-h-[560px] lg:min-h-[600px]`}>
                    <HeadingContentBlock 
                        headline={headline}
                        iconGroup={iconGroup}
                        intro={intro}
                    />
                </Container>
                <div className='absolute bottom-0 h-3/4 w-[120%] z-0'>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='0,100 77,100 0,77' style={{fill: 'rgba(53, 143, 170, 1)'}}></polygon>
                    </svg>
                </div>
                <div className='absolute bottom-0 h-full w-[120%] z-0' role='presentation' aria-hidden>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='0,98 0,100 100,100 100,77' style={{fill: 'rgba(255, 255, 255, 1)'}}></polygon>
                    </svg>
                </div>
            </section>
        )
    } else if (variant === 'reg') {
        return (
            <section className='relative'>
                <Container variant='pageHeading' className={`${variant} min-h-[360px] md:min-h-[440px] lg:min-h-[480px]`}>
                    <HeadingContentBlock 
                        headline={headline}
                        iconGroup={iconGroup}
                        intro={intro}
                    />
                </Container>
                <LightRayAnimation delay={0} duration={4.2} className='absolute bottom-0 h-full w-[120%] z-0'>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='28,98 28,100 0,100 0,91' style={{fill: 'rgba(53, 143, 170, 0.49)'}}></polygon>
                    </svg>
                </LightRayAnimation>
                <LightRayAnimation delay={0.21} duration={5.6} className='absolute bottom-0 h-full w-[120%] z-0'>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='28,98 28,100 0,100 0,96' style={{fill: 'rgba(53, 143, 170, 0.98)'}}></polygon>
                    </svg>
                </LightRayAnimation>
                <LightRayAnimation delay={0.28} duration={4.9} className='absolute bottom-0 h-full w-[120%] z-0'>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='28,98 28,100 100,100 100,84' style={{fill: 'rgba(53, 143, 170, 0.49)'}}></polygon>
                    </svg>
                </LightRayAnimation>
                <div className='absolute bottom-0 h-full w-[120%] z-0' role='presentation' aria-hidden>
                    <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                        <polygon points='28,98 28,100 100,100 100,91' style={{fill: 'rgba(53, 143, 170, 0.98)'}}></polygon>
                    </svg>
                </div>

            </section>
        )
    } else  {
        return (
            <section>
                <Container variant='pageHeading' className={`${variant} justify-center`}>
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