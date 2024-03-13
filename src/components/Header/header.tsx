'use client'
import React, { useState } from 'react'
import { FiMenu, FiSearch, FiX } from 'react-icons/fi'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [hoverUser, setHoverUser] = useState(false)
  const [hoverCart, setHoverCart] = useState(false)

  return (
    <div className="relative">
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50"
          onClick={() => setIsSearchOpen(false)}
        ></div>
      )}

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
                <h1 className="text-2xl font-bold text-white">Logo</h1>
              </Link>
            </div>
            <nav className="ml-40 hidden grow items-center justify-center md:flex">
              <Link href="/drops">
                <span className="text-lg text-white hover:text-gray-500">
                  Drops
                </span>
              </Link>
              <Link href="/streetwear">
                <span className="mx-4 text-lg text-white hover:text-gray-500">
                  Streetwear
                </span>
              </Link>
              <Link href="/sneakers">
                <span className="text-lg text-white hover:text-gray-500">
                  Sneakers
                </span>
              </Link>
              <Link href="/marcas">
                <span className="mx-4 text-lg text-white hover:text-gray-500">
                  Marcas
                </span>
              </Link>
            </nav>
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
      {isSearchOpen && (
        <div className="fixed top-0 z-40 w-full bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-36">
            <div className="flex h-20 items-center justify-between">
              <input
                className="flex-grow rounded-md px-4 py-2 outline-none"
                type="text"
                placeholder="Pesquisar..."
              />
              <FiX
                className="ml-2 h-6 w-6 cursor-pointer text-white hover:text-gray-500 lg:h-8 lg:w-8"
                onClick={() => setIsSearchOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
      <div
        className={`fixed top-20 ${isMenuOpen ? 'left-0' : '-left-full'} z-20 h-full w-full bg-white/70 transition-all duration-300 md:hidden`}
      >
        <nav>
          <ul className="flex flex-col items-start space-y-4 pl-4 pt-10">
            <li>
              <Link href="/drops">
                <span className="text-lg text-black">Drops</span>
              </Link>
            </li>
            <li>
              <Link href="/streetwear">
                <span className="text-lg text-black">Streetwear</span>
              </Link>
            </li>
            <li>
              <Link href="/sneakers">
                <span className="text-lg text-black">Sneakers</span>
              </Link>
            </li>
            <li>
              <Link href="/marcas">
                <span className="text-lg text-black">Marcas</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
