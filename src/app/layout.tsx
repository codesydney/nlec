import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { inter } from "@/assets/fonts";
import Footer from "@/components/organisms/footer";
import { Toaster } from "@/components/atoms/ui/toaster";
import Navbar from "@/components/organisms/navbar";
import AnnouncementModal from "@/components/organisms/announcement-modal";

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
      className="scroll-pt-[calc(64.6667px+1.5rem)] scroll-smooth md:scroll-pt-[calc(68.6667px+1.5rem)] xl:scroll-pt-[calc(72.6667px+1.5rem)]"
    >
      <body className={cn("bg-nlec-cream antialiased", inter.className)}>
        <Navbar />
        <main className={`mt-[64.6667px] md:mt-[68.6667px] xl:mt-[72.6667px]`}>
          {children}
        </main>
        <Footer />
        <Toaster />
        <AnnouncementModal
          title="Title of the announcement"
          content="lorem ipsum"
        />
      </body>
    </html>
  );
}
