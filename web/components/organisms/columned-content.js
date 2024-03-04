import Container from '../atoms/container'
import RichText from '../molecules/rich-text'

const ColumnedContent = ({columnedContentContent, className=''}) => {

    const {
        variant, 
        columnOneVerticalAlign, 
        columnOneBody,
        columnTwoVerticalAlign, 
        columnTwoBody,
        columnThreeVerticalAlign, 
        columnThreeBody,
        columnFourVerticalAlign, 
        columnFourBody,
    } = columnedContentContent

    const numColumns = Number(variant.charAt())

    function getGap() {
        switch(numColumns) {
            case 1:
                return ''
            case 2:
                return 'md:gap-11 lg:gap-14'
            case 3:
                return 'md:gap-9 lg:gap-11'
            case 4:
                return 'md:gap-7 lg:gap-9'
        }
    }

    function getVariantClassnames() {
        switch(variant) {
            case '1a':
                return 'md:w-full md:basis-full'
            case '2a':
                return 'md:w-1/2 md:basis-1/2'
            case '3a':
                return 'md:w-1/3 md:basis-1/3'
            case '4a':
                return 'md:w-1/4 md:basis-1/4'
            default:
                return ''
        }
    }

    function getVerticalAlign(align) {
        switch(align) {
            case 'top':
                return 'self-start'
            case 'middle':
                return 'self-center'
            case 'bottom':
                return 'self-end'
        }
    }

    const baseClassnames = `flex flex-col gap-3 max-w-prose md:gap-5`

    return (
        <section data-name='gallery' className='bg-white -mt-1 py-3 relative z-1'>
            <Container className={`flex flex-col gap-7 md:flex-row ${getGap()}`}>
                {columnOneBody &&  (
                    <div className={`${baseClassnames} ${getVariantClassnames()} ${getVerticalAlign(columnOneVerticalAlign)}`}>
                        <RichText richTextContent={columnOneBody}/>
                    </div>
                )}
                {columnTwoBody &&  (
                    <div className={`${baseClassnames} ${getVariantClassnames()}  ${getVerticalAlign(columnTwoVerticalAlign)}`}>
                        <RichText richTextContent={columnTwoBody}/>
                    </div>
                )}
                {columnThreeBody &&  (
                    <div className={`${baseClassnames} ${getVariantClassnames()}  ${getVerticalAlign(columnThreeVerticalAlign)}`}>
                        <RichText richTextContent={columnThreeBody}/>
                    </div>
                )}
                {columnFourBody &&  (
                    <div className={`${baseClassnames} ${getVariantClassnames()}  ${getVerticalAlign(columnFourVerticalAlign)}`}>
                        <RichText richTextContent={columnFourBody}/>
                    </div>
                )}
            </Container>
        </section>
    )
}

export default ColumnedContent