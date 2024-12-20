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
            paddingClassname += ' pt-3 md:pt-5 lg:pt-5'
        }
        if(eliminateBottomPadding) {
            paddingClassname += ' pb-3 md:pb-5 lg:pb-5'
        }
        return paddingClassname
    }

    return (
        <section data-name='fiftyFifty' className={`${useNoneBackground ? 'np-light-text' : 'bg-white'} -mt-1 py-3 relative z-1`}>
            <Container className={`flex flex-col gap-7 items-center relative ${flexDirection} ${getVerticalPadding()} md:gap-11 lg:gap-14`}>
                <div className='basis-1/2'>
                    {image && 
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
                            <Heading variant='h2' styleAs='h3' className='uppercase text-center'>
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