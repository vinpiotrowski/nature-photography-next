import React from 'react'
import Button from '../atoms/button'
import Container from '../atoms/container'
import Heading from '../atoms/heading'
import Image from '../atoms/image'
import Paragraph from '../atoms/paragraph'

const Modal = ({
  images,
  selectedImage,
  onClose,
  onNext,
  onPrev,
  selectedIndex,
}) => {

  const PHOTOGRAPH_SIZE_STEPS = [
    { w: 768, h: 0 },
    { w: 1024, h: 0 },
    { w: 1280, h: 0 },
    { w: 1536, h: 0 },
    { w: 1920, h: 0 }
  ]

  return (
    selectedImage && (
      <div className='fixed inset-0 flex justify-center items-center z-50'>

        <div id='photo-modal' className='np-transition-slow bg-white bg-opacity-98 overflow-y-auto 
          h-full w-full opacity-full opacity-0'>
          
          <div className='flex justify-center p-2'>
            <Heading variant='h4' className='' >
                {selectedImage.title}
            </Heading>
            <Button buttonVariant='close' onClick={onClose} />
          </div>

          <div className='flex flex-col justify-center items-center relative'>
            <Image
              className='max-h-[56vh] lg:max-h-[77vh]'
              imageContent={selectedImage.image} 
              alt={selectedImage.shortDescription}
              sizeSteps={PHOTOGRAPH_SIZE_STEPS} 
            />
            <Container className='flex flex-col gap-2 items-start justify-center pt-2
                   md:flex-row-reverse md:pt-5 md:pb-0 lg:gap-7 lg:pb-0 lg:pt-5'>
              <div className='flex gap-3 items-center'>
                <Button buttonVariant='previous' onClick={onPrev} />
                <Button buttonVariant='next' onClick={onNext} />
                <strong className='flex gap-1 items-center'>
                  <span>{('0' + (selectedIndex + 1)).slice(-2)}</span> 
                  <span className='text-2xl'>/</span>
                  <span>{('0' + images.length).slice(-2)}</span>
                </strong>
              </div>
              <Paragraph variant='snug' className='max-w-prose'>
                <strong>{selectedImage.location}</strong> — {selectedImage.longDescription}
              </Paragraph>
            </Container>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal