import { ReactNode } from "react";

export default function SectionWrapper({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  return (
    <section id={id} className="mb-20 px-4 md:mb-32 md:px-8 xl:mb-44 xl:px-20">
      {children}
    </section>
  );
}
