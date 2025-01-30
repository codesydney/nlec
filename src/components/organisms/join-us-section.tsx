import { cn } from "@/lib/utils";
import SectionTitle from "../atoms/section-title";
import ContentWrapper from "../molecules/content-wrapper";
import SectionWrapper from "../molecules/section-wrapper";
import { redHatDisplay } from "@/assets/fonts";
import Image from "next/image";

export default function JoinUsSection() {
  return (
    <SectionWrapper id="join">
      <ContentWrapper className="flex flex-col text-nlec-green">
        <div className="mb-4 flex flex-col gap-4 md:mb-8 md:flex-row md:items-center">
          <SectionTitle className="mb-0 w-fit md:mb-0 md:min-w-[324px] xl:min-w-[389px]">
            Join the <span className="font-black">Movement</span>
          </SectionTitle>
          <div className="relative h-1 w-full bg-nlec-green" />
        </div>
        <div className="grid gap-4 md:h-[300px] md:grid-cols-3 xl:h-[500px]">
          <div className="grid h-[400px] grid-rows-[30%_auto] gap-4 md:h-full">
            <div className="grid grid-cols-[30%_auto] gap-4">
              <div className="size-full bg-nlec-maroon" />
              <div className="size-full bg-nlec-maroon" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="size-full bg-nlec-maroon" />
              <div className="size-full bg-nlec-green" />
            </div>
          </div>
          <div className="grid h-[400px] grid-rows-[auto_30%] gap-4 md:h-full">
            <div
              className={cn(
                "flex size-full flex-col justify-end bg-nlec-green px-2 py-1 text-7xl font-bold text-white md:text-5xl xl:text-7xl",
                redHatDisplay.className
              )}
            >
              Get Involved
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="size-full bg-nlec-maroon" />
              <div className="size-full bg-nlec-maroon" />
            </div>
          </div>
          <div className="grid h-[400px] grid-rows-[30%_auto] gap-4 md:h-full">
            <div className="relative size-full bg-nlec-maroon">
              <Image
                src="/nlec-header.jpg"
                fill
                alt="Art of people together"
                className="object-cover"
              />
            </div>
            <div className="size-full bg-nlec-maroon" />
          </div>
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
}
