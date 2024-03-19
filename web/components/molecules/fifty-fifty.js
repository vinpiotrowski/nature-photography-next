import Container from '../atoms/container'
import Heading from '../atoms/heading'
import Image from '../atoms/image'
import RichText from '../molecules/rich-text'

const FiftyFifty = ({fiftyFiftyContent}) => {
    const {
        useNoneBackground,
        eliminateTopPadding,
        eliminateBottomPadding,
        textPlacement, 
        headline, 
        body, 
        image} = fiftyFiftyContent
    const flexDirection = textPlacement == 'left' ? 'md:flex-row-reverse' : 'md:flex-row'

    const FIFTY_FIFTY_SIZE_STEPS = [
        { w: 360, h: 0 },
        { w: 414, h: 0 },
        { w: 640, h: 0 },
        { w: 768, h: 0 }
    ]

    function getVerticalPadding() {
        let paddingClassname = ''
        if(eliminateTopPadding) {
            paddingClassname = 'pt-2 md:pt-3 lg:pt-3'
        }
        if(eliminateBottomPadding) {
            paddingClassname += ' pb-2 md:pb-3 lg:pb-3'
        }
        return paddingClassname
    }

    return (
        <section data-name='fiftyFifty' className={`${useNoneBackground ? 'text-gray-300' : 'bg-white'} -mt-1 py-3 relative z-1`}>
            <Container className={`flex flex-col gap-7 items-center ${flexDirection} ${getVerticalPadding()} md:gap-20`}>
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
                            <Heading variant='h3' className='uppercase text-center'>
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