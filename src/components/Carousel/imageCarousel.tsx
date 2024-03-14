/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from 'react-icons/fi'

interface ImageCarouselProps {
  images: string[]
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const slideShowInterval = useRef<NodeJS.Timeout | null>(null)

  const stopSlideShow = useCallback(() => {
    if (slideShowInterval.current) {
      clearInterval(slideShowInterval.current)
      slideShowInterval.current = null
    }
  }, [])

  const startSlideShow = useCallback(() => {
    stopSlideShow()
    if (isPlaying) {
      slideShowInterval.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 5000)
    }
  }, [isPlaying, images.length, stopSlideShow])

  useEffect(() => {
    startSlideShow()
    return () => stopSlideShow()
  }, [startSlideShow, stopSlideShow])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    )
    if (!isPlaying) {
      setIsPlaying(true)
    }
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    if (!isPlaying) {
      setIsPlaying(true)
    }
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative">
      {images[currentIndex] && (
        <img src={images[currentIndex]} alt="carousel" className="w-full" />
      )}
      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 transform items-center">
        <FiChevronLeft
          onClick={goToPrevious}
          className="mb-4 ml-20 mr-4 h-4 w-4 cursor-pointer"
        />
        {images.map((_, index) => (
          <div
            key={index}
            className={`mx-1 mb-4 h-4 w-4 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
        <FiChevronRight
          onClick={goToNext}
          className="mb-4 ml-4 h-4 w-4 cursor-pointer"
        />
        {isPlaying ? (
          <FiPause onClick={togglePlay} className="mb-4 ml-20 cursor-pointer" />
        ) : (
          <FiPlay onClick={togglePlay} className="mb-4 ml-20 cursor-pointer" />
        )}
      </div>
    </div>
  )
}
