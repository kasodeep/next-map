import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-y-4">

      {/* Top Lines. */}
      <div className="flex flex-col gap-y-1 items-center justify-center">
        <p className="text-3xl text-sky-300">Welcome to Animal Tracker.</p>
        <p className="text-sm">
          We provide visualization, analysis, research and tracking of animals.
        </p>
      </div>

      {/* Bottom Lines. */}
      <div className="flex flex-col gap-y-1 items-center justify-center">
        <p className="text-sm">Get started with Caracel.</p>
        <Link href="/caracel1">
          <Button>
            Caracel
          </Button>
        </Link>
      </div>
    </section>
  );
}
