'use client'

import { animals } from '@/constants'
import { CldVideoPlayer } from 'next-cloudinary'
import { Separator } from './ui/separator'
import { AnimalCard } from './AnimalCard'
import Image from 'next/image'

const AnimalDetails = ({ src }) => {
  const animal = animals.find((animal) => animal.animal === src)
  if (!animal) return null

  return (
    <div className="flex flex-col m-4 rounded-lg shadow-md shadow-gray-700 px-2 py-2 gap-x-2">
      <div className="flex m-4 rounded-lg  gap-x-2 max-sm:flex-col">
        <div className="w-2/5 max-sm:w-full">
          {/* Title. */}
          <span className="text-xl font-semibold mb-2">{animal.title}</span>
          <Image
            src={`/${animal.animal}.png`}
            alt={animal.animal}
            width={200}
            height={200}
            className="rounded-full shadow-md shadow-gray-800"
          />

          <Separator className="my-2 mx-1" />

          {/* Description. */}
          <p className="text-md">{animal.description}</p>
        </div>

        {/* Video Player. */}
        <div className="rounded w-3/5 max-sm:w-full">
          <CldVideoPlayer width={800} height={400} src={src} autoPlay={true} />
        </div>
      </div>

      <Separator className="my-2 mx-1" />

      {/* Analysis. */}
      <div className="flex flex-col flex-wrap items-center justify-center gap-2 shadow-lg">
        {animal.details.map((data) => {
          return <AnimalCard data={data} key={data.title} />
        })}
      </div>
    </div>
  )
}

export default AnimalDetails
