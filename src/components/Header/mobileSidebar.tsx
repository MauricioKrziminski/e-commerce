import React, { useState } from 'react'
import Link from 'next/link'
import { MdArrowForward, MdArrowBack } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'

interface MobileSidebarProps {
  isOpen: boolean
}

const subcategories = {
  DROPS: ['Novos Drops', 'Mais Populares', 'Em Breve'],
  STREETWEAR: ['Camisetas', 'Calças', 'Acessórios'],
  SNEAKERS: ['Lançamentos', 'Clássicos', 'Edições Limitadas'],
  MARCAS: ['Marca A', 'Marca B', 'Marca C'],
}

type CategoryName = keyof typeof subcategories

export function MobileSidebar({ isOpen }: MobileSidebarProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryName | null>(
    null,
  )
  const [isSubcategoryOpen, setIsSubcategoryOpen] = useState(false)

  const handleCategoryClick = (category: CategoryName) => {
    setActiveCategory(category)
    setIsSubcategoryOpen(true)
  }

  return (
    <>
      <div
        className={`fixed top-20 ${isOpen ? 'left-0' : '-left-full'} z-20 h-full w-full bg-white transition-all duration-300 md:hidden`}
      >
        <nav className="flex h-full flex-col justify-between">
          <ul className="flex flex-col items-start space-y-2 pt-4">
            {Object.keys(subcategories).map((category) => (
              <li
                key={category}
                className="flex h-full w-full items-center justify-between p-2 hover:bg-gray-100"
                onClick={() => handleCategoryClick(category as CategoryName)}
              >
                <span className="cursor-pointer text-base text-black">
                  {category}
                </span>
                <MdArrowForward className="text-xl" />{' '}
              </li>
            ))}
          </ul>
          <div className="pb-20">
            <Link href="/rastrear-pedido">
              <span className="block bg-gray-100 p-4 text-start text-base font-medium text-black hover:bg-gray-200">
                Rastrear seu Pedido
              </span>
            </Link>
            <Link href="/login">
              <span className="flex flex-row bg-gray-100 p-4 text-start text-base font-medium text-black hover:bg-gray-200">
                <AiOutlineUser className="mr-2 text-2xl text-black" />
                Fazer Login
              </span>
            </Link>
          </div>
        </nav>
      </div>
      <div
        className={`fixed top-20 ${isSubcategoryOpen ? 'right-0' : '-right-full'} z-30 h-full w-full bg-white transition-all duration-300 md:hidden`}
      >
        <div
          className="ml-2 flex cursor-pointer items-center bg-gray-100 p-2 text-lg font-bold"
          onClick={() => setIsSubcategoryOpen(false)}
        >
          <MdArrowBack className="mr-4 text-xl" /> {activeCategory}
        </div>
        <ul className="flex flex-col items-start space-y-4 pt-4">
          {activeCategory &&
            subcategories[activeCategory].map((subcategory, index) => (
              <li
                key={index}
                className="flex h-full w-full items-center justify-between p-2 hover:bg-gray-100"
              >
                <Link
                  href={`/${activeCategory.toLowerCase()}/${subcategory.toLowerCase().replaceAll(' ', '-')}`}
                >
                  <span
                    className="text-base text-gray-700"
                    onClick={() => setIsSubcategoryOpen(false)}
                  >
                    {subcategory}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}
