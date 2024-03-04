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
        console.log('vp align', align)
        switch(align) {
            case 'top':
                return 'justify-start'
        }
    }

    const baseClassnames = `flex flex-col gap-3 md:gap-5`

    return (
        <section data-name='gallery' className='bg-white -mt-1 py-3 relative z-1'>
            <Container className='flex gap-7 items-center justify-center md:gap-14'>
                {columnOneBody &&  (
                    <div className={`${baseClassnames} ${getVariantClassnames()} ${getVerticalAlign(columnOneVerticalAlign)}`}>
                        <RichText richTextContent={columnOneBody}/>
                    </div>
                )}
                {columnTwoBody &&  (
                    <div className={`${baseClassnames} ${getVariantClassnames()}`}>
                        <RichText richTextContent={columnTwoBody}/>
                    </div>
                )}
                {columnThreeBody &&  (
                    <div className={`${baseClassnames} ${getVariantClassnames()}`}>
                        <RichText richTextContent={columnThreeBody}/>
                    </div>
                )}
                {columnFourBody &&  (
                    <div className={`${baseClassnames} ${getVariantClassnames()}`}>
                        <RichText richTextContent={columnFourBody}/>
                    </div>
                )}
            </Container>
        </section>
    )
}

export default ColumnedContent