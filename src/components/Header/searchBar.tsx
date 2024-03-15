import React, { useRef, useEffect } from 'react'
import { FiX, FiSearch } from 'react-icons/fi'

interface SearchBarProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchBar: React.FC<SearchBarProps> = ({ isOpen, setIsOpen }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 z-40 flex w-full items-center justify-center bg-black p-4">
          <div className="relative w-full max-w-4xl bg-orange-600">
            <input
              ref={inputRef}
              className="w-full rounded-md py-2 pl-4 pr-10 focus:outline-none"
              type="text"
              placeholder="Pesquisar..."
            />
            <FiSearch className="absolute right-6 top-1/2 h-5 w-5 -translate-y-1/2 transform cursor-pointer text-gray-500" />
          </div>
          <FiX
            className="ml-2 h-7 w-7 cursor-pointer text-white hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </>
  )
}
