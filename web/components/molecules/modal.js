import React from 'react'
import Heading from '../atoms/heading'
import Image from '../atoms/image'

const Modal = ({
  images,
  selectedImage,
  onClose,
  onNext,
  onPrev,
  selectedIndex,
}) => {

  return (
    selectedImage && (
      <div className='fixed inset-0 flex justify-center items-center z-50'>
        <div className='bg-white bg-opacity-95 h-full w-full'>
          <div className=''>
            <div className='flex justify-center p-3'>
            <Heading variant='h2' >
                    {selectedImage.title}
                </Heading>
              <button
                className='absolute bg-[#777777] py-1 px-2.5 right-3 rounded-full 
                    text-xl text-white font-bold box-shadow-button'
                onClick={onClose}
              >
                &#10005;
              </button>
            </div>

            <div className='border-black flex justify-center items-center relative'>
              <button
                className='absolute bg-button box-shadow-button top-1/2 transform -translate-y-1/2 left-0
                    text-white px-2 py-1 text-xl lg:left-2 lg:px-4 lg:py-3 lg:text-4xl'
                onClick={onPrev}
              >
                <em className='icon-angle-left'></em>
              </button>

              <button
                className='absolute bg-button bg-opacity-1/2 box-shadow-button top-1/2 transform -translate-y-1/2 right-0
                    text-white px-2 py-1 text-xl lg:right-2 lg:px-4 lg:py-3 lg:text-4xl'
                onClick={onNext}
              >
                <em className='icon-angle-right'></em>
              </button>


              <div className='absolute bottom-0 left-0 bg-[#212121] flex flex-col gap-3 justify-center max-w-prose p-7
                    transform translate-x-[7vw] translate-y-3/4 lg:py-10 lg:px-14'>

                <p className='text-gray-300'>
                    <strong>{selectedImage.location}</strong> — {selectedImage.longDescription}
                </p>
              </div>

              <Image
                className='max-h-[77vh]'
                imageContent={selectedImage.image} 
                alt='' 
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal