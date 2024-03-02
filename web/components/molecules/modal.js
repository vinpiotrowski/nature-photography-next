import React from 'react'
import Button from '../atoms/button'
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
    { w: 1366, h: 0 },
    { w: 1536, h: 0 },
    { w: 1920, h: 0 }
  ]

  return (
    selectedImage && (
      <div className='fixed inset-0 flex justify-center items-center z-50'>

        <div className='bg-white bg-opacity-95 h-full w-full'>
          
          <div className='flex justify-center p-3'>
            <Heading variant='h3' >
                {selectedImage.title}
            </Heading>
            <Button buttonVariant='close' onClick={onClose} />
          </div>

          <div className='flex justify-center items-center relative'>
            <div className='absolute bottom-0 left-0 flex flex-col gap-3 justify-center p-7 
                  translate-y-full w-full lg:np-panel lg:overflow-y-auto lg:max-h-[35vh] lg:max-w-prose 
                  lg:py-10 lg:px-14 lg:translate-x-[7vw] lg:translate-y-3/4'>
              <div className='flex gap-3 items-center'>
                <Button buttonVariant='previous' onClick={onPrev} />
                <Button buttonVariant='next' onClick={onNext} />
                <strong className='lg:text-white'>
                  {('0' + (selectedIndex + 1)).slice(-2)} 
                  &nbsp;/&nbsp; 
                  {('0' + images.length).slice(-2)}
                </strong>
              </div>
              <Paragraph className='lg:text-[#989898]'>
                <strong>{selectedImage.location}</strong> — {selectedImage.longDescription}
              </Paragraph>
            </div>
            <Image
              className='max-h-[56vh] lg:max-h-[70vh]'
              imageContent={selectedImage.image} 
              alt={selectedImage.shortDescription}
              sizeSteps={PHOTOGRAPH_SIZE_STEPS} 
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Modal