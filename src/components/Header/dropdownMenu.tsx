import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi' // Importando ícones de seta

interface DropdownItem {
  name: string
  path: string
}

interface DropdownMenuProps {
  title: string
  items: DropdownItem[]
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center text-white hover:text-gray-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? (
          <FiChevronUp className="ml-2" />
        ) : (
          <FiChevronDown className="ml-2" />
        )}
      </button>
      {isOpen && (
        <div className="absolute left-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg">
          <div className="py-1">
            {items.map((item, index) => (
              <Link key={index} href={item.path}>
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
