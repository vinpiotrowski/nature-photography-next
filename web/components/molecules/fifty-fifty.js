import Container from '../atoms/container'
import Heading from '../atoms/heading'
import Image from '../atoms/image'
import RichText from '../molecules/rich-text'

const FiftyFifty = ({fiftyFiftyContent}) => {
    const {textPlacement, headline, body, image} = fiftyFiftyContent
    const flexDirection = textPlacement == 'left' ? 'md:flex-row-reverse' : 'md:flex-row'

    const FIFTY_FIFTY_SIZE_STEPS = [
        { w: 360, h: 0 },
        { w: 414, h: 0 },
        { w: 640, h: 0 },
        { w: 768, h: 0 }
    ]

    return (
        <section data-name='fiftyFifty' className='bg-white -mt-1 py-3 relative z-1'>
            <Container className={`flex flex-col gap-7 items-center ${flexDirection} md:gap-20`}>
                <div className='basis-1/2'>
                    {Image && 
                        <Image
                            alt={''}
                            imageContent={image}
                            sizeSteps={FIFTY_FIFTY_SIZE_STEPS}
                        />
                    }
                </div>
                <div className='basis-1/2 flex flex-col gap-5 justify-center md:gap-7'>
                    {headline && (
                        <div className='np-heading'>
                            <Heading variant='h2' className='uppercase text-center'>
                                {headline}
                            </Heading>
                        </div>
                    )}
                    <RichText richTextContent={body}/>
                </div>
            </Container>
       </section>
    )
}

export default FiftyFifty