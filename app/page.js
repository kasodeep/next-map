import { CarouselAnimals } from "@/components/Carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-y-4 w-full">

      {/* Top Lines. */}
      <div className="flex flex-col gap-y-1 items-center justify-center mx-2 my-2">
        <p className="text-3xl text-sky-300">Welcome to Animal Tracker.</p>
        <p className="text-md">
          We provide visualization, analysis, research and tracking of animals.
        </p>
        <p>Check out the Qgis maps, hosted by us:
          <Link href="https://obinayke.nextgis.com/resource/45/display?panel=layers" target="_blank">
            <Button className="ml-2">
              MAPS!
            </Button>
          </Link>
        </p>
      </div>

      {/* Carousel. */}
      <CarouselAnimals />
    </section>
  );
}
