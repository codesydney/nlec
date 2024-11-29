import Image from "next/image";

export default function HeaderSection() {
  return (
    <section className="relative flex min-h-[300px] flex-col justify-center px-4 md:min-h-[500px] md:px-8 xl:min-h-[600px] xl:px-20">
      <Image
        src="/header-image.jpg"
        fill
        className="object-cover object-top"
        alt="Prison cell"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-nlec-darkBlue" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-4 py-12 md:gap-8">
        <h1 className="text-4xl font-bold text-white md:w-9/12 md:text-5xl xl:text-6xl">
          Empowering Voices with Lived Prison Experience
        </h1>
        <h3 className="text-white md:text-lg md:font-medium xl:text-xl">
          Connecting Advocacy, Insight, and Opportunity for Social Change
        </h3>
      </div>
    </section>
  );
}
