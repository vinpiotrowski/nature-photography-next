

const PageHeading = ({eyebrowText, headline}) => {

    return (
        <section className='absolute p-28 text-center w-full'>
            <h1 className='max-w-prose text-6xl'>{eyebrowText} {headline}</h1>
            <div className='absolute bottom-0 h-full right-0 w-full'>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='0,70 0,84 77,84' opacity='0.56' style={{fill: '#358faa'}} />
                </svg>
            </div>
            <div className='absolute bottom-0 h-full right-0 w-full'>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='100,84 100,42 35,84' opacity='0.42' style={{fill: '#358faa'}} />
                </svg>
            </div>
            <div className='absolute bottom-0 h-full right-0 w-full'>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='100,84 100,63 0,84' opacity='1' style={{fill: '#358faa', zIndex: 14}}></polygon>
                </svg>
            </div>
            <div className='absolute bottom-0 h-full right-0 w-full'>
                <svg className='h-full w-full' preserveAspectRatio='none' viewBox='0 0 100 100'>
                    <polygon points='0,84 0,100 35,84' opacity='0.42' style={{fill: '#358faa'}}></polygon>
                </svg>
            </div>
        </section>
    )
}

export default PageHeading