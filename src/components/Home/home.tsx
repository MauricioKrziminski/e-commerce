import React from 'react'
import { ImageCarousel } from '../Carousel/imageCarousel'
import { MdPayment, MdLocalShipping, MdAutorenew } from 'react-icons/md'
import { CardsComponent } from '../cardsComponent'

export function HomePage() {
  const sneakersData = [
    {
      imgSrc: 'https://i.imgur.com/dNvVX65.png',
      imgAlt: 'Mocassin',
      title: 'Mocassin Masculino',
      price: 'R$ 599,99',
      cart: 'Adicionar ao carrinho',
    },
    {
      imgSrc: 'https://i.imgur.com/Tqd6FmS.png',
      imgAlt: 'Dunk Low',
      title: 'SB Dunk Low Club 58 Gulf',
      price: 'R$ 599,99',
      cart: 'Adicionar ao carrinho',
    },
    {
      imgSrc: 'https://i.imgur.com/HnNKYi0.png',
      imgAlt: 'Vans Flame',
      title: 'Vans Flame Old Skool',
      price: 'R$ 599,99',
      cart: 'Adicionar ao carrinho',
    },
    {
      imgSrc: 'https://i.imgur.com/GFEHIlc.png',
      imgAlt: 'Dunk Low',
      title: 'Dunk Low Panda',
      price: 'R$ 599,99',
      cart: 'Adicionar ao carrinho',
    },
    {
      imgSrc: 'https://i.imgur.com/3zBJkGE.png',
      imgAlt: 'Air force branco',
      title: 'Nike Air Force Branco',
      price: 'R$ 599,99',
      cart: 'Adicionar ao carrinho',
    },
  ]

  const tShirtData = [
    {
      imgSrc: 'https://i.imgur.com/L0ZOPMq.png',
      imgAlt: 'Camisa High',
      title: 'Camisa High Crocodilo',
      price: 'R$ 599,99',
      cart: 'Adicionar ao carrinho',
    },
    {
      imgSrc: 'https://i.imgur.com/Pqt18H1.png',
      imgAlt: 'High Relogio',
      title: 'Camisa High Relogio',
      price: 'R$ 599,99',
      cart: 'Adicionar ao carrinho',
    },
    {
      imgSrc: 'https://i.imgur.com/WKBrD8b.png',
      imgAlt: 'Stussy Camisa',
      title: 'Camisa Stussy Dados',
      price: 'R$ 599,99',
      cart: 'Adicionar ao carrinho',
    },
    {
      imgSrc: 'https://i.imgur.com/MovE4ZN.png',
      imgAlt: 'High Camisa',
      title: 'Camisa High Bandeira',
      price: 'R$ 599,99',
      cart: 'Adicionar ao carrinho',
    },
    {
      imgSrc: 'https://i.imgur.com/PfvHgJX.png',
      imgAlt: 'High Listrada',
      title: 'Camisa High Listrada',
      price: 'R$ 599,99',
      cart: 'Adicionar ao carrinho',
    },
  ]
  return (
    <div>
      <ImageCarousel />
      <div className="ml-6 mt-8 flex flex-col justify-center space-y-4 lg:ml-0 lg:flex-row lg:items-center lg:space-x-10">
        <div className="flex items-center lg:mt-3 lg:border-r-2 lg:pr-8">
          <MdPayment className="mr-2 text-5xl" />{' '}
          <div>
            <div className="text-left font-bold">PARCELAMENTO</div>
            <div className="text-left">NO CARTÃO EM ATÉ 6X SEM JUROS</div>
          </div>
        </div>
        <div className="flex items-center lg:border-r-2 lg:pr-8">
          <MdLocalShipping className="mr-2 text-5xl" />{' '}
          <div>
            <div className="text-left font-bold">FRETE GRÁTIS</div>
            <div className="text-left">A PARTIR DE R$599,99</div>
          </div>
        </div>
        <div className="flex items-center">
          <MdAutorenew className="mr-2 text-5xl" />{' '}
          <div>
            <div className="text-left font-bold">GARANTIA DE TROCA</div>
            <div className="text-left">ATÉ 7 DIAS A PARTIR DA ENTREGA</div>
          </div>
        </div>
      </div>
      <div>
        <CardsComponent categoryTitle="SNEAKERS" cards={sneakersData} />
      </div>
      <div className="mt-32">
        <CardsComponent categoryTitle="T-SHIRTS" cards={tShirtData} />
      </div>
    </div>
  )
}
