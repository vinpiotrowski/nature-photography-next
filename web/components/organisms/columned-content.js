import Container from '../atoms/container'
import RichText from '../molecules/rich-text'

const ColumnedContent = ({columnedContentContent, className=''}) => {

    const {
        variant,
        columnOneHorizontalAlign,
        columnOneVerticalAlign, 
        columnOneBody,
        columnTwoHorizontalAlign,
        columnTwoVerticalAlign, 
        columnTwoBody,
        columnThreeHorizontalAlign,
        columnThreeVerticalAlign, 
        columnThreeBody,
        columnFourHorizontalAlign,
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

    function getHorizontalAlign(align) {
        switch(align) {
            case 'left':
                return 'text-left'
            case 'center':
                return 'text-center items-center'
            case 'right':
                return 'text-right'
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

    const baseClassnames = `flex flex-col gap-3 md:gap-5`

    return (
        <section data-name='gallery' className='bg-white -mt-1 py-3 relative z-1'>
            <Container className={`flex flex-col gap-7 md:flex-row ${getGap()}`}>
                {columnOneBody &&  (
                    <div className={`${baseClassnames} 
                            ${getVariantClassnames()} 
                            ${getHorizontalAlign(columnOneHorizontalAlign)} 
                            ${getVerticalAlign(columnOneVerticalAlign)}`}>
                        <RichText richTextContent={columnOneBody}/>
                    </div>
                )}
                {columnTwoBody && numColumns > 1 && (
                    <div className={`${baseClassnames} 
                            ${getVariantClassnames()} 
                            ${getHorizontalAlign(columnTwoHorizontalAlign)} 
                            ${getVerticalAlign(columnTwoVerticalAlign)}`}>
                        <RichText richTextContent={columnTwoBody}/>
                    </div>
                )}
                {columnThreeBody && numColumns > 2 && (
                    <div className={`${baseClassnames} 
                            ${getVariantClassnames()} 
                            ${getHorizontalAlign(columnThreeHorizontalAlign)} 
                            ${getVerticalAlign(columnThreeVerticalAlign)}`}>
                        <RichText richTextContent={columnThreeBody}/>
                    </div>
                )}
                {columnFourBody && numColumns > 3 && (
                    <div className={`${baseClassnames} 
                            ${getVariantClassnames()} 
                            ${getHorizontalAlign(columnFourHorizontalAlign)} 
                            ${getVerticalAlign(columnFourVerticalAlign)}`}>
                        <RichText richTextContent={columnFourBody}/>
                    </div>
                )}
            </Container>
        </section>
    )
}

export default ColumnedContent