import React from 'react'
import { Menu } from './Menu'
import { links } from '@/constants'
import Link from 'next/link'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <header className="flex items-center justify-between border-2 shadow-lg rounded-lg w-auto mt-2 mx-4 p-2 shadow-blue-200">
      {/* Animal Navigation. */}
      <Menu />

      {/* Links. */}
      <div className="flex gap-x-2">
        {links.map((link) => {
          return (
            <Link href={link}>
              <Button variant="outline">{link.toUpperCase()}</Button>
            </Link>
          )
        })}
      </div>
    </header>
  )
}

export default Navbar
