'use client'
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useCallback } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = [
    'https://i.imgur.com/Z0FZsHU.jpg',
    'https://i.imgur.com/X30TFyJ.jpg',
    'https://i.imgur.com/jrx6VDs.jpg',
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + images.length - 1) % images.length,
    )
  }, [images.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative w-full">
      <div className="relative h-56 overflow-hidden md:h-[500px] lg:h-[650px]">
        {images.map((image, index) => (
          <div
            key={image}
            className={`duration-700 ease-in-out ${index === currentSlide ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            <img
              src={image}
              className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="group absolute start-0 top-44 z-30 flex cursor-pointer items-center px-4 hover:bg-gray-500 focus:outline-none"
      >
        <IoIosArrowBack className="text-2xl text-white" />
        <span className="sr-only">Previous</span>
      </button>
      <button
        onClick={nextSlide}
        className="group absolute end-0 top-72 z-30 flex cursor-pointer items-center rounded-full px-4 hover:bg-gray-500 focus:outline-none"
      >
        <IoIosArrowForward className="text-2xl text-white" />
        <span className="sr-only">Next</span>
      </button>
    </div>
  )
}
