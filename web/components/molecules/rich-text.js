import {PortableText} from '@portabletext/react'
import Button from '../atoms/button'
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
            link: (props) => {
                const href = props?.value?.href
                /*return (
                    <span>
                        <Button linkContent={{
                            internalRef: href,
                            text: props?.children,
                            variant: 'internal'
                        }} />
                    </span>

                )*/
                return (
                    <span className='block flex flex-grow justify-start'>
                        <NextLink href={href} className='inline-link flex items-center gap-1 py-1 relative'>
                            <span className='inline-block'>{props.children}</span><em className='icon-angle-right'></em>
                        </NextLink>
                    </span>
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
            h2(props) {
                return (
                    <Heading variant='h1' styleAs='h2' className='max-w-screen-md'>{props.children}</Heading>
                )
            },
            h3(props) {
                return (
                    <Heading variant='h2' styleAs='h3' className='max-w-screen-md'>{props.children}</Heading>
                )
            },
            h4(props) {
                return (
                    <Heading variant='h3' styleAs='h4' className='max-w-screen-sm'>{props.children}</Heading>
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
