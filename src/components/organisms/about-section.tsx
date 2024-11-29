import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="mb-8 px-4 md:px-8 xl:px-20">
      <div className="mx-auto grid max-w-[1280px] items-center gap-6 md:grid-cols-[auto_40%]">
        <div className="inline-flex flex-col gap-2 md:gap-4">
          <h2 className="text-3xl font-bold text-nlec-orange md:text-4xl xl:text-5xl">
            About Us
          </h2>
          <p className="text-nlec-darkGray xl:text-lg">
            We are the national collective of formerly incarcerated people
            across Australia, uniting lived prison experiences to drive
            advocacy, insight, and meaningful change. Our mission is to serve as
            a central hub for people and organisations seeking expertise,
            consulting, and perspectives informed by lived experiences. We aim
            to amplify voices, set standards for fair engagement, and foster
            systemic change while ensuring dignity and respect for the community
            we represent.
          </p>
        </div>
        <div className="relative aspect-video max-h-[320px] w-full rounded shadow-lg shadow-nlec-orange/50 md:aspect-square">
          <Image
            src="/about-image.jpg"
            fill
            alt="Community"
            className="rounded object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
}
