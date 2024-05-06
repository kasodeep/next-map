import { CarouselAnimals } from "@/components/Carousel";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-y-4 w-full">

      {/* Top Lines. */}
      <div className="flex flex-col gap-y-1 items-center justify-center mx-2 my-2">
        <p className="text-3xl text-sky-300">Welcome to Animal Tracker.</p>
        <p className="text-md">
          We provide visualization, analysis, research and tracking of animals.
        </p>
      </div>

      {/* Carousel. */}
      <CarouselAnimals />
    </section>
  );
}
