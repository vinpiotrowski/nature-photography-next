import Button from '../atoms/button'
import Container from '../atoms/container'
import Heading from '../atoms/heading'
import Image from '../atoms/image'

const Callout = ({calloutContent}) => {
    const {headline, backgroundImage, link, linkText} = calloutContent

    const CALLOUT_SIZE_STEPS = [
        { w: 640, h: 0 },
        { w: 768, h: 0 },
        { w: 1024, h: 0 },
        { w: 1280, h: 0 },
        { w: 1536, h: 0 },
        { w: 1920, h: 0 }
    ]

    
    return (
        <section data-name='callout' className='bg-white -mt-1 pb-0 pt-14 overflow-hidden relative z-1'>
            {backgroundImage && 
                <Image
                    alt={''}
                    className={'absolute block w-full h-full object-cover md:h-auto md:object-none'}
                    imageContent={backgroundImage}
                    sizeSteps={CALLOUT_SIZE_STEPS}
                />
            }
            {/*<div className='absolute top-0 h-full right-0 -translate-y-[1px] w-full z-0' role='presentation' aria-hidden>
                <svg className='h-full w-full' preserveAspectRatio="none" viewBox="0 0 100 100">
                    <polygon points="0,0 0,28 100,1 100,0" opacity="1" style={{fill: 'rgba(255,255,255,1)'}}></polygon>
                </svg>
            </div>*/}
            <Container className={`flex flex-col gap-7 items-end relative md:gap-20 z-10`}>
                <div className='flex flex-col gap-5 pb-7 pt-20 items-end justify-end text-right
                         text-white md:gap-7 md:pb-14 md:pt-28'>
                    {headline && (
                        <>
                            <Heading variant='h4' className='np-outline-text font-bold'>
                                {headline}
                            </Heading>
                            <Button linkContent={{internalRef: link?.slug?.current, text: linkText, variant: 'internal'}} />
                        </>
                    )}
                </div>
            </Container>
       </section>
    )
}

export default Callout