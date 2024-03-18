'use client'
/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
interface CardData {
  imgSrc: string
  imgAlt: string
  title: string
  price: string
  cart: string
}

interface CardsComponentProps {
  categoryTitle: string
  cards: CardData[]
}
export function CardsComponent({ categoryTitle, cards }: CardsComponentProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + scrollOffset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="my-20">
      {categoryTitle && (
        <h2 className="text-center text-3xl font-bold">{categoryTitle}</h2>
      )}
      <div className="relative">
        <div
          className="flex overflow-x-auto scroll-smooth md:hidden"
          ref={scrollRef}
        >
          <div className="flex min-w-max space-x-4 p-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex min-h-44 min-w-max flex-shrink-0 flex-col items-center gap-2 rounded-xl bg-white px-5 py-5 text-black"
              >
                {card.imgSrc && (
                  <div className="flex h-full w-52 items-center justify-center p-0 lg:p-0">
                    <img
                      src={card.imgSrc}
                      alt={card.imgAlt}
                      decoding="async"
                      data-ning="1"
                      loading="lazy"
                      className="rounded-xl drop-shadow-xl"
                    />
                  </div>
                )}
                <div className="flex w-full flex-col items-center gap-2 text-base text-black md:text-base lg:text-lg">
                  <div className="font-medium">{card.title}</div>
                </div>
                <div>
                  <div className="flex w-full flex-col items-center gap-2 text-base text-black md:text-base lg:text-lg">
                    <div className="font-medium">{card.price}</div>
                    <p className="mb-4 text-xs">
                      Em até 6x de R$ 99,99 sem juros
                    </p>
                    <button className="rounded-md bg-[#383838] p-2 text-white hover:bg-[#282828]">
                      {card.cart}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 md:hidden">
          <button
            onClick={() => scroll(-300)}
            className="rounded-md bg-gray-200 p-1 hover:bg-black hover:text-white"
          >
            <IoIosArrowBack className="text-2xl" />
          </button>
          <button
            onClick={() => scroll(300)}
            className="rounded-md bg-gray-200 p-1 hover:bg-black hover:text-white"
          >
            <IoIosArrowForward className="text-2xl" />
          </button>
        </div>
        <div className="hidden h-full w-full cursor-default grid-cols-5 md:grid md:grid-cols-2 lg:grid-cols-5 lg:px-44">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex min-h-44 flex-col items-center gap-2 rounded-xl bg-white px-5 text-black"
            >
              {card.imgSrc && (
                <div className="flex h-full w-52 items-center justify-center p-0 lg:p-0">
                  <img
                    src={card.imgSrc}
                    alt={card.imgAlt}
                    decoding="async"
                    data-ning="1"
                    loading="lazy"
                    className="rounded-xl drop-shadow-xl"
                  />
                </div>
              )}
              <div className="flex w-full flex-col items-center gap-2 text-sm text-black md:text-base lg:text-lg">
                <div className="font-medium">{card.title}</div>
              </div>
              <div>
                <div className="flex w-full flex-col items-center gap-2 text-sm text-black md:text-base lg:text-lg">
                  <div className="font-medium">{card.price}</div>
                  <p className="mb-4 text-xs">
                    Em até 6x de R$ 99,99 sem juros
                  </p>
                  <button className="rounded-md bg-[#383838] p-2 text-base text-white hover:bg-[#282828]">
                    {card.cart}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
