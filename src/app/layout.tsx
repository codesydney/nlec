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
    <html lang="en" className="scroll-smooth">
      <body className={cn("antialiased", inter.className)}>
        <Navbar />
        <main className="mt-[65px] h-[3000px] md:mt-[69px] xl:mt-[73px]">
          {children}
        </main>
      </body>
    </html>
  );
}
