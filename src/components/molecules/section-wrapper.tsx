import { ReactNode } from "react";

export default function SectionWrapper({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  return (
    <section id={id} className="mb-12 px-4 md:mb-20 md:px-8 xl:mb-32 xl:px-20">
      {children}
    </section>
  );
}
