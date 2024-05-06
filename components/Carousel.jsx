'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { animals } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'

export function CarouselAnimals() {
  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: true }))

  return (
    // Main rotating functionality.
    <Carousel
      className="w-[85%]"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      {/* Content of craousel. */}
      <CarouselContent className="-ml-1">
        {animals.map((animal, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="shadow-md shadow-gray-800">
                {/* Card Header. */}
                <CardHeader>
                  <Image
                    src={`/${animal.animal}.png`}
                    alt={animal.animal}
                    width={400}
                    height={400}
                    className="rounded-lg shadow-md shadow-gray-800"
                  />
                </CardHeader>

                {/* Card Content. */}
                <CardContent className="flex flex-col items-start justify-between p-2 gap-y-2">
                  <div className="text-xl">
                    <span>Want to know more about </span>
                    <span className="text-sky-400">{animal.title}</span>
                  </div>

                  {/* Links. */}
                  <Link href={animal.animal}>
                    <Button
                      variant="secondary"
                      className="border-2 border-sky-300"
                    >
                      Info + Tracking.
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
