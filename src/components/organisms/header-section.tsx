import { redHatDisplay } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import nlecHeader from "../../../public/nlec-header.webp";

export default function HeaderSection() {
  return (
    <section className="relative mb-8 pt-12 md:mb-16 xl:mb-20">
      <div className="relative z-10 -mb-8 flex flex-col px-4 md:-mb-20 md:px-8 xl:px-20">
        <div className="z-10 mx-auto inline-flex w-full max-w-[1280px] flex-col items-end gap-4 text-nlec-green md:border-4 md:border-transparent md:border-l-nlec-green md:border-t-nlec-green md:py-8 xl:py-12">
          <div className="inline-flex max-w-[420px] flex-col gap-4 xl:max-w-[500px]">
            <h1
              className={cn(
                "text-5xl font-semibold md:text-6xl xl:text-7xl",
                redHatDisplay.className
              )}
            >
              National Lived Experience Collective
            </h1>
            <p className="text-xl xl:text-2xl">
              Empowering Voices with Lived Prison Experience. Connecting
              Advocacy, Insight, and Opportunity for Social Change
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-[300px] w-full md:h-[400px] xl:h-[500px]">
        <Image
          src={nlecHeader}
          alt="Art of people together"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
