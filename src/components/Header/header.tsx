'use client'
import React, { useState } from 'react'
import { FiMenu, FiSearch, FiX } from 'react-icons/fi'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { SearchBar } from './searchBar'
import { MobileSidebar } from './mobileSidebar'
import { DropdownMenu } from './dropdownMenu'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [hoverUser, setHoverUser] = useState(false)
  const [hoverCart, setHoverCart] = useState(false)

  return (
    <div className="relative">
      <header className="z-30 bg-black shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <button
                className="z-30 mr-8 text-white md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <FiX className="h-7 w-7" />
                ) : (
                  <FiMenu className="h-7 w-7" />
                )}
              </button>
              <Link href="/">
                <span>
                  <h1 className="mr-8 text-2xl font-bold text-white">Logo</h1>
                </span>
              </Link>
            </div>
            <div className="ml-18 hidden items-center space-x-6 md:flex">
              <DropdownMenu
                title="DROPS"
                items={[
                  { name: 'NOVOS PRODUTOS', path: '/produtos/novos' },
                  { name: 'CATEGORIAS', path: '/produtos/categorias' },
                ]}
              />
              <DropdownMenu
                title="STREETWEAR"
                items={[
                  { name: 'ACESSÓRIOS', path: '/produtos/acessorios' },
                  { name: 'ROUPAS', path: '/produtos/roupas' },
                ]}
              />
              <DropdownMenu
                title="SNKEAKERS"
                items={[
                  { name: 'NIKE', path: '/produtos/shapes' },
                  { name: 'ADIDAS', path: '/produtos/trucks' },
                ]}
              />
              <DropdownMenu
                title="MARCAS"
                items={[
                  { name: 'NACIONAIS', path: '/produtos/nike' },
                  { name: 'INTERNACIONAIS', path: '/produtos/adidas' },
                ]}
              />
            </div>
            <div className="flex items-center space-x-6">
              <FiSearch
                className="h-6 w-6 cursor-pointer text-white hover:text-gray-500 lg:h-8 lg:w-8"
                onClick={() => setIsSearchOpen(true)}
              />
              <div
                onMouseEnter={() => setHoverUser(true)}
                onMouseLeave={() => setHoverUser(false)}
                className="flex items-center"
              >
                <AiOutlineUser
                  className={`h-6 w-6 lg:h-9 lg:w-9 ${hoverUser ? 'text-gray-500' : 'text-white'}`}
                />
                <div>
                  <Link href="/login">
                    <span className="flex flex-col">
                      <span className="hidden text-sm text-white md:block">
                        Minha conta
                      </span>
                      <span className="ml-1 hidden text-xs text-white md:block">
                        Conecte-se
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div
                onMouseEnter={() => setHoverCart(true)}
                onMouseLeave={() => setHoverCart(false)}
                className="flex items-center"
              >
                <AiOutlineShoppingCart
                  className={`h-6 w-6 lg:h-9 lg:w-9 ${hoverCart ? 'text-gray-500' : 'text-white'}`}
                />
                <div className="ml-1">
                  <Link href="/carrinho">
                    <span className="flex flex-col">
                      <span className="hidden text-sm text-white md:block">
                        Carrinho
                      </span>
                      <span className="ml-1 hidden text-xs text-white md:block">
                        R$ 0,00
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SearchBar isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
      <MobileSidebar isOpen={isMenuOpen} />
    </div>
  )
}
