import React from 'react'
import Link from 'next/link'

interface MobileSidebarProps {
  isOpen: boolean
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-20 ${isOpen ? 'left-0' : '-left-full'} z-20 h-full w-full bg-white/70 transition-all duration-300 md:hidden`}
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
  )
}
