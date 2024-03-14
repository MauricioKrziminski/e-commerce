import React from 'react'
import { ImageCarousel } from '../Carousel/imageCarousel'

const images = [
  'https://i.imgur.com/Z0FZsHU.jpg',
  'https://i.imgur.com/X30TFyJ.jpg',
  'https://i.imgur.com/jrx6VDs.jpg',
]

export function HomePage() {
  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  )
}
