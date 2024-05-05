'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { animals } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Menu() {
  const pathName = usePathname()

  return (
    <Sheet className="overflow-scroll">
      {/* Trigger Button. */}
      <SheetTrigger asChild>
        <Button>Open</Button>
      </SheetTrigger>
      <SheetContent side="left">
        {/* Sheet Header. */}
        <SheetHeader>
          <SheetTitle>Pick Any Animal</SheetTitle>
          <SheetDescription>
            You will be able to see the map with animal tracking and their
            analysis.
          </SheetDescription>
        </SheetHeader>
        {/* Content. */}
        <div className="grid gap-4 py-4">
          {animals.map((animal, index) => {
            return (
              <Link href={animal.animal} key={animal.animal}>
                <Button
                  variant={`${
                    pathName === '/' + animal.animal ? 'default' : 'link'
                  }`}
                >
                  {animal.animal.toUpperCase()}
                </Button>
              </Link>
            )
          })}
        </div>
        <SheetFooter>Thanks for visiting our Qgis project.</SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
