'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa'

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="bg-black shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center text-white">
              <Link href="/">Logo</Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              >
                Drops
              </button>
              {dropdownOpen && (
                <div className="absolute z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link href="/drop-1">
                      <div
                        className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Drop 1
                      </div>
                    </Link>
                    <Link href="/drop-2">
                      <div
                        className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Drop 2
                      </div>
                    </Link>
                    <Link href="/drop-3">
                      <div
                        className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Drop 3
                      </div>
                    </Link>
                    {/* Adicione mais itens conforme necessário */}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="rounded-full p-1 text-white hover:text-gray-500 focus:outline-none"
            >
              <FaSearch className="h-6 w-6" aria-hidden="true" />
            </button>

            <Link href="/login">
              <div className="ml-5 flex cursor-pointer items-center text-white hover:text-gray-500">
                <FaUser className="h-6 w-6" aria-hidden="true" />
                <span>Minha conta</span>
              </div>
            </Link>

            <Link href="/cart">
              <div className="ml-5 flex cursor-pointer items-center text-white hover:text-gray-500">
                <FaShoppingBag className="h-6 w-6" aria-hidden="true" />
                <span>Carrinho</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
