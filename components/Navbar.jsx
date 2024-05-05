import React from 'react'
import { Menu } from './Menu'
import { links } from '@/constants'
import Link from 'next/link'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <header className="flex items-center justify-between border-2 shadow-md rounded-lg w-auto mb-4 mt-2 mx-4 p-2 shadow-gray-800">
      {/* Animal Navigation. */}
      <Menu />

      {/* Links. */}
      <div className="flex gap-x-2">
        {links.map((link) => {
          return (
            <Link href={link}>
              <Button variant="outline">{`${
                link === '/' ? 'HOME' : link.toUpperCase()
              }`}</Button>
            </Link>
          )
        })}
      </div>
    </header>
  )
}

export default Navbar
