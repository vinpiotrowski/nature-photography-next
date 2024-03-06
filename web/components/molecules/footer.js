import Container from '../atoms/container'

const Footer = ({footerContent}) => {

    return (
        <footer className='text-white relative z-20'>
            <Container className='flex flex-wrap items-center justify-center'>
                <div className='flex self-start flex-shrink-0'>
                    <span className='flex self-start'>
                        <svg className='max-w-10 md:max-w-14 lg:max-w-20' width='86' height='98' style={{fill: 'rgba(53,143,170,1)'}} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 125 142'>
                            <path d='M0,0v142h125V0H0ZM30.76,122.27l-4.03-8.03,7.19-14.48,3.85,7.82-7.01,14.7ZM20.06,63.28l-5.27,11.06h-7.64l12.74-26.98,27.94,55.59,27.59-55.74,4.01,7.69-31.55,63.74-27.82-55.35ZM82.04,104.71l-4.19-7h28.47l-32.42-62.45-27.63,55.6-3.96-7.82,31.41-63.32,44.12,84.98h-35.81Z'/>
                        </svg>
                    </span>
                </div>
                <div className='block flex flex-grow justify-end'>
                    <a href='//www.instagram.com/mostly_carbon/' className='flex items-center gap-1 md:text-lg'>
                    <em className='icon-instagram' /><span>Instagram</span>
                    </a>
                </div>

            </Container>
        </footer>
    )
}

export default Footer