import {PortableText} from '@portabletext/react'
import Heading from '../atoms/heading'
import IconGroup from '../molecules/icon-group'
import Image from '../atoms/image'
import NextLink from 'next/link'
import Paragraph from '../atoms/paragraph'

const RichText = ({richTextContent, className=''}) => {
    if(!Array.isArray(richTextContent || richTextContent.length == 0)) {
        return null
    }

    const components = {
        types: {
            icon(props) {
                const iconProps = [props.value]
                return (
                    <IconGroup 
                        iconGroupContent={iconProps} 
                        className='np-text' 
                    />
                )
            },
            image(props) {
                const imageProps = props.value
                return (
                    <Image
                        alt={imageProps.alt}
                        imageContent={imageProps}
                    />
                )
            }
        },
        marks: {
            link: ({children, value}) => {
                return (
                    <div class="block flex flex-grow justify-start">
                    <NextLink href={value.href} className='inline-link flex items-center gap-1 py-1 relative'>
                      <span className='inline-block'>{children}</span><em className='icon-angle-right'></em>
                    </NextLink>
                    </div>
                )
            },
            strong(props) {
                return <strong>{props.children}</strong>
            },
            em(props) {
                return <em>{props.children}</em>
            },
        },
        block: {
            normal(props) {
                return (
                    <Paragraph className='max-w-screen-md'>{props.children}</Paragraph>
                )
            },
            h1(props) {
                return (
                    <Heading variant='h1' className='max-w-screen-md'>{props.children}</Heading>
                )
            },
            h2(props) {
                return (
                    <Heading variant='h2' className='max-w-screen-md'>{props.children}</Heading>
                )
            },
            h3(props) {
                return (
                    <Heading variant='h3' className='max-w-screen-md'>{props.children}</Heading>
                )
            },
            h4(props) {
                return (
                    <Heading variant='h4' className='max-w-screen-sm'>{props.children}</Heading>
                )
            },
            blockquote(props) {
                return (
                    <blockquote>{props.children}</blockquote>
                )
            }
        }
    }

    return (
        <PortableText value={richTextContent} components={components} />
    )
}

export default RichText
