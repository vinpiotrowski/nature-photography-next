import React from 'react'
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
      <div className='fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-25'>
        <div className='bg-[#212121] h-full w-full'>
          <div className=''>
            <div className='flex justify-end p-3'>
              <button
                className=' bg-gray-600 bg-opacity-50 py-1 px-2.5 hover:bg-gray-400
                  hover:bg-opacity-70 transition-all rounded-full text-xl text-white font-bold'
                onClick={onClose}
              >
                &#10005;
              </button>
            </div>

            <div className='flex justify-center items-center relative'>
              <button
                className='absolute bg-[#358faa] bg-opacity-50 top-1/2 transform -translate-y-1/2 left-3
               text-white p-4 rounded text-3xl md:text-5xl'
                onClick={onPrev}
              >
                <em className='icon-angle-left'></em>
              </button>

              <button
                className='absolute bg-[#358faa] bg-opacity-50 top-1/2 transform -translate-y-1/2 right-3
              text-white p-4 rounded text-3xl md:text-5xl'
                onClick={onNext}
              >
                <em className='icon-angle-right'></em>
              </button>

              <div className='absolute bottom-4 left-0 right-0 flex justify-center'>
                <span className='text-black text-opacity-80 text-lg font-bold'>{`Image ${
                  selectedIndex + 1
                }`}</span>
              </div>

              <Image
                className='max-h-[87vh]'
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