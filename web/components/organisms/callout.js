import Button from '../atoms/button'
import Container from '../atoms/container'
import Heading from '../atoms/heading'
import Image from '../atoms/image'

const Callout = ({calloutContent}) => {
    const {headline, backgroundImage, link, linkText} = calloutContent

    const CALLOUT_SIZE_STEPS = [
        { w: 768, h: 0 },
        { w: 1024, h: 0 },
        { w: 1280, h: 0 },
        { w: 1536, h: 0 },
        { w: 1920, h: 0 }
    ]

    
    return (
        <section data-name='callout' className='bg-np-neutral-darkest -mt-1 pb-0 pt-0 overflow-hidden relative z-1'>
            {backgroundImage && 
                <Image
                    alt={''}
                    className={'absolute block h-full w-full md:h-auto'}
                    imageContent={backgroundImage}
                    sizeSteps={CALLOUT_SIZE_STEPS}
                />
            }
            {<div className='absolute top-0 h-full invisible right-0 -translate-y-[1px] w-full z-0 md:visible' role='presentation' aria-hidden>
                <svg className='h-full w-full' preserveAspectRatio="none" viewBox="0 0 100 100">
                    <polygon points="0,0 0,28 100,1 100,0" opacity="1" style={{fill: 'rgba(255,255,255,1)'}}></polygon>
                </svg>
            </div>}
            <Container className={`flex flex-col gap-7 items-end relative md:gap-20 z-10`}>
                <div className='flex flex-col gap-5 py-7 items-end text-right text-white md:gap-7 md:pb-14 md:pt-28'>
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