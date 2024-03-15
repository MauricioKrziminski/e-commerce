/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useEffect, useCallback } from 'react'
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosPause,
  IoIosPlay,
} from 'react-icons/io' // Importando ícones

export function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const images = [
    'https://i.pinimg.com/originals/69/12/0f/69120f098bbad51079ed14884673b211.jpg',
    'https://www.10wallpaper.com/wallpaper/3840x2400/1804/Mountain_Lake_Nature_4k_HD_Landscape_3840x2400.jpg',
    'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg',
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length,
    )
  }, [images.length])

  useEffect(() => {
    let interval: number | undefined
    if (!isPaused) {
      interval = window.setInterval(nextSlide, 5000)
    }
    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  const slideStyle = {
    transform: `translateX(-${currentSlide * 100}%)`,
    transition: 'transform 0.5s ease-in-out',
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex h-[450px] w-full md:h-[500px] lg:h-[750px]"
        style={slideStyle}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="h-full w-full flex-shrink-0 object-cover"
            alt={`Slide ${index}`}
          />
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center space-x-6">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-4 w-4 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-opacity-50"
          aria-label={isPaused ? 'Play' : 'Pause'}
        >
          {isPaused ? (
            <IoIosPlay className="text-4xl text-white" />
          ) : (
            <IoIosPause className="text-4xl text-white" />
          )}
        </button>
      </div>
      <button
        onClick={prevSlide}
        className="group absolute start-0 top-1/2 z-30 flex -translate-y-1/2 transform cursor-pointer items-center px-4 focus:outline-none"
      >
        <span className="rounded-full p-2 hover:bg-gray-500">
          <IoIosArrowBack className="text-2xl text-white" />
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        onClick={nextSlide}
        className="group absolute end-0 top-1/2 z-30 flex -translate-y-1/2 transform cursor-pointer items-center px-4 focus:outline-none"
      >
        <span className="rounded-full p-2 hover:bg-gray-500">
          <IoIosArrowForward className="text-2xl text-white" />
        </span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  )
}
