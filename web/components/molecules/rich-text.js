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
                    <blockquote className='pb-5 pl-5 pt-5 relative'>
                        <svg className='h-16 w-16 absolute left-0 top-0' fill='rgba(48,127,151,0.21)' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 123.961 123.961'>
                            <g><path d='M49.8,29.032c3.1-1.3,4.4-5,3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899c-8.5,3.6-15.8,8.3-21.6,14 C11.4,28.532,6.6,36.232,4,44.732c-2.6,8.601-4,20.3-4,35.2v30.7c0,3.3,2.7,6,6,6h39.3c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6 H26.5c0.2-10.101,2.6-18.2,7-24.301C37.1,36.133,42.5,32.133,49.8,29.032z'></path> <path d='M120.4,29.032c3.1-1.3,4.399-5,3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9c-8.4,3.6-15.601,8.3-21.5,13.9 c-7.101,6.8-12,14.5-14.601,23c-2.6,8.399-3.899,20.1-3.899,35.1v30.7c0,3.3,2.7,6,6,6H116c3.3,0,6-2.7,6-6v-39.3 c0-3.301-2.7-6-6-6H97.1c0.2-10.101,2.601-18.2,7-24.301C107.7,36.133,113.1,32.133,120.4,29.032z'></path></g> 
                        </svg>
                        <Paragraph className='max-w-screen-md'>{props.children}</Paragraph>
                    </blockquote>
                )
            }
        }
    }

    return (
        <PortableText value={richTextContent} components={components} />
    )
}

export default RichText
