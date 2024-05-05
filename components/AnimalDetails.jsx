'use client'

import { animals } from '@/constants'
import { CldVideoPlayer } from 'next-cloudinary'
import { Separator } from './ui/separator'
import { AnimalCard } from './AnimalCard'

const AnimalDetails = ({ src }) => {
  console.log(src)
  const animal = animals.find((animal) => animal.animal === src)
  if (!animal) return null

  return (
    <div className="flex flex-col m-4 rounded-lg shadow-md shadow-blue-200 px-2 py-2 border-blue-300 border-2 gap-x-2 overflow-scroll">
      <div className="flex m-4 rounded-lg  gap-x-2">
        <div className="w-2/5">
          {/* Title. */}
          <span className="text-xl font-semibold">{animal.title}</span>

          <Separator className="my-2 mx-1" />

          {/* Description. */}
          <p className="text-md">{animal.description}</p>
        </div>

        {/* Video Player. */}
        <div className="rounded w-3/5">
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
