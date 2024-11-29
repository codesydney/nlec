import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/organisms/navbar";
import { cn } from "@/lib/utils";
import { inter } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "NLEC app",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-pt-[calc(65px+1rem)] scroll-smooth md:scroll-pt-[calc(69px+2rem)] xl:scroll-pt-[calc(73px+3rem)]"
    >
      <body className={cn("antialiased", inter.className)}>
        <Navbar />
        <main className="mt-[65px] md:mt-[69px] xl:mt-[73px]">{children}</main>
      </body>
    </html>
  );
}
